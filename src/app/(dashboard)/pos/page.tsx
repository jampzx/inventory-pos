"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Product, CartItem, Customer } from "@/types/types";
import { addItemsToCart } from "@/app/utils/cartUtils";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";
import ConfirmationModal from "@/components/ConfirmationModal";
import Pagination from "@/components/Pagination";
import CustomerSelector from "@/components/CustomerSelector";
import { FiSearch, FiPackage, FiShoppingBag } from "react-icons/fi";

export default function POSPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const paymentMethods = [
    { name: "Cash", key: "cash" },
    { name: "GCash", key: "gcash" },
    { name: "Credit Card", key: "credit_card" },
  ];

  const [payment, setPayment] = useState<Record<string, number>>(
    Object.fromEntries(paymentMethods.map((method) => [method.key, 0]))
  );
  const [discountType, setDiscountType] = useState("AMOUNT");
  const [discountValue, setDiscountValue] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const productRes = await fetch("/api/product/listing");
      const productData = await productRes.json();
      if (productData.success) setProducts(productData.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchedProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(searchedProducts.length / itemsPerPage);
  const paginatedProducts = searchedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Add validation to ensure selected quantity does not exceed stock in handleAddToCart
  const handleAddToCart = () => {
    if (!selectedProduct) return;

    if (selectedQuantity > selectedProduct.stock) {
      toast.error(
        `Cannot add more than ${selectedProduct.stock} of "${selectedProduct.name}" to the cart.`
      );
      return;
    }

    const itemsToAdd: CartItem[] = [
      {
        product: selectedProduct,
        quantity: selectedQuantity,
      },
    ];

    setSelectedQuantity(1);
    setCart((prev) => addItemsToCart(prev, itemsToAdd));
    setSelectedProduct(null);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Add validation to ensure quantity does not exceed stock
  const handleQuantityChange = (productId: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          if (newQty < 1) {
            toast.error(`Minimum quantity is 1 for "${item.product.name}".`);
            return item;
          }
          if (newQty > item.product.stock) {
            toast.error(
              `Cannot exceed stock of ${item.product.stock} for "${item.product.name}".`
            );
            return item;
          }
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const handleQuickCreateCustomer = async (name: string, phone?: string) => {
    try {
      const response = await fetch("/api/customer/quick-create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      const result = await response.json();

      if (result.success) {
        setSelectedCustomer(result.data);
        if (result.isExisting) {
          toast.info(result.message);
        } else {
          toast.success("Customer created successfully");
        }
      } else {
        toast.error("Failed to create customer");
      }
    } catch (error) {
      console.error("Quick create customer error:", error);
      toast.error("An error occurred");
    }
  };

  // Integrate the API for checkout
  // Ensure all payment amounts are numbers in handleCheckout
  const handleCheckout = async () => {
    if (cart.length === 0) {
      toast.error("No items in the cart.");
      return;
    }

    const totalPayment = Object.values(payment).reduce(
      (sum, amount) => sum + amount,
      0
    );
    if (totalPayment < subtotal) {
      toast.error("Total payment must not be less than the subtotal.");
      return;
    }

    const selectedPaymentMethods = Object.entries(payment).filter(
      ([, amount]) => amount > 0
    );
    if (selectedPaymentMethods.length === 0) {
      toast.error("Please select at least one payment method.");
      return;
    }

    const cartItems = cart.map((item) => ({
      productId: item.product.id,
      quantity: item.quantity,
      price: Number(item.product.price), // Explicit conversion to number
    }));

    const payments = selectedPaymentMethods.map(([method, amount]) => ({
      method,
      amount: Number(amount),
    })); // Ensure amount is a number

    const discountType = "AMOUNT"; // Placeholder, adjust as needed
    const discountValue = 0; // Placeholder, adjust as needed

    try {
      const response = await fetch("/api/transaction/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cartItems,
          payments,
          discountType,
          discountValue,
          customerId: selectedCustomer?.id || null,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Transaction completed successfully.");
        setCart([]);
        setSelectedCustomer(null);
        setPayment(
          Object.fromEntries(paymentMethods.map((method) => [method.key, 0]))
        );
        await fetchData(); // Refresh stock count after transaction
      } else {
        toast.error(result.error || "Failed to complete the transaction.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("An error occurred during checkout.");
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50">
        <Spinner size={48} color="lamaSky" />
      </div>
    );
  }

  return (
    <main className="p-2 sm:p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-4 sm:gap-6 min-h-screen bg-gray-50">
      <section className="flex-1">
        <header className="flex flex-col items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          {/* Search */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 sm:py-3 rounded-md bg-lamaPurpleLight text-sm placeholder-gray-500 focus:border-lamaSky focus:ring-1 focus:ring-lamaSky focus:outline-none shadow-sm"
            />
            <FiSearch className="absolute left-3 top-2.5 sm:top-3.5 text-gray-500 text-base" />
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5">
          {paginatedProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => {
                if (product.status !== "active") {
                  toast.error(`"${product.name}" is inactive`);
                  return;
                }
                setSelectedProduct(product);
              }}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 aspect-square overflow-hidden">
                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder-product.png";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <FiPackage className="w-16 h-16 text-gray-300" />
                  </div>
                )}

                {/* Status Badge */}
                {product.status !== "active" && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                    Inactive
                  </div>
                )}

                {/* Stock Badge */}
                <div className="absolute top-2 right-2">
                  {product.product_type === "service" ? (
                    <div className="bg-blue-500 text-white text-xs px-2.5 py-1 rounded-full font-medium shadow-lg flex items-center gap-1">
                      <FiShoppingBag className="w-3 h-3" />
                      Service
                    </div>
                  ) : (
                    <div
                      className={`text-xs px-2.5 py-1 rounded-full font-medium shadow-lg ${
                        product.stock === 0
                          ? "bg-red-500 text-white"
                          : product.stock <= 10
                          ? "bg-orange-500 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      Stock: {product.stock}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                {/* Category */}
                {product.category?.name && (
                  <div className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                    {product.category.name}
                  </div>
                )}

                {/* Product Name */}
                <h2 className="text-base font-bold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[3rem]">
                  {product.name}
                </h2>

                {/* Description */}
                {product.description && (
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {product.description}
                  </p>
                )}

                {/* Price */}
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">
                      Price
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      ₱{Number(product.price).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Pagination here */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </section>

      <aside className="w-full lg:w-96 rounded shadow-md p-3 sm:p-4 space-y-3 sm:space-y-4 bg-lamaPurpleLight">
        <div className="text-base sm:text-lg font-bold text-gray-800">
          🧾 Order Information
        </div>

        {cart.length > 0 ? (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="rounded border bg-white p-5 space-y-4"
              >
                {/* Item */}
                <div className="flex justify-between items-start border-b pb-3 text-sm">
                  <div className="space-y-1">
                    <div className="text-gray-800 font-medium">
                      {item.product.name}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      Qty:
                      <button
                        onClick={() =>
                          handleQuantityChange(item.product.id, -1)
                        }
                        className="px-2 py-0.5 border rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.product.id, 1)}
                        className="px-2 py-0.5 border rounded"
                      >
                        +
                      </button>
                      <span>x ₱{Number(item.product.price).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-semibold text-right">
                      ₱{(item.product.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => handleRemoveFromCart(item.product.id)}
                      className="text-red-500 text-xs"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">No items added yet.</p>
        )}

        <div className="text-sm">
          <div className="flex justify-between mt-2">
            <span className="text-gray-700">Subtotal</span>
            <span className="font-semibold text-gray-500">
              ₱{Number(subtotal).toFixed(2)}
            </span>
          </div>
        </div>

        <div>
          <div className="font-medium mb-2 text-gray-700">Customer</div>
          <CustomerSelector
            selectedCustomer={selectedCustomer}
            onCustomerSelect={setSelectedCustomer}
            onQuickCreate={handleQuickCreateCustomer}
          />
        </div>

        <div>
          <div className="font-medium mb-2 text-gray-700">Payment Method</div>
          <div className="space-y-2">
            {paymentMethods.map((method) => (
              <div key={method.key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={payment[method.key] > 0}
                  onChange={(e) =>
                    setPayment((prev) => ({
                      ...prev,
                      [method.key]: e.target.checked ? subtotal : 0,
                    }))
                  }
                />
                <label className="capitalize w-24 text-gray-700">
                  {method.name}
                </label>
                <input
                  type="number"
                  value={payment[method.key]}
                  onChange={(e) =>
                    setPayment((prev) => ({
                      ...prev,
                      [method.key]: parseFloat(e.target.value) || 0,
                    }))
                  }
                  className="border border-gray-300 rounded px-2 py-1 w-full text-right text-sm"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="bg-lamaYellow hover:bg-yellow-300 text-gray-500 font-semibold w-full py-2 rounded mt-4 shadow"
        >
          🧾 Check Out
        </button>
      </aside>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-2 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl relative max-h-[80vh] flex flex-col animate-fadeIn">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition bg-white rounded-full p-2 shadow-lg hover:shadow-xl"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>

            {/* Product Image Header */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 h-36 overflow-hidden rounded-t-2xl">
              {selectedProduct.image_url ? (
                <Image
                  src={selectedProduct.image_url}
                  alt={selectedProduct.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder-product.png";
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FiPackage className="w-24 h-24 text-gray-300" />
                </div>
              )}

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="p-4 sm:p-5 space-y-4 flex-1 overflow-y-auto">
              {/* Header */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-tight">
                    {selectedProduct.name}
                  </h2>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">
                      ₱{Number(selectedProduct.price).toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Category & Type Badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {selectedProduct.category?.name && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                      {selectedProduct.category.name}
                    </span>
                  )}
                  <span
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      selectedProduct.product_type === "service"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {selectedProduct.product_type === "service" ? (
                      <>
                        <FiShoppingBag className="w-3 h-3" /> Service
                      </>
                    ) : (
                      <>
                        <FiPackage className="w-3 h-3" /> Product
                      </>
                    )}
                  </span>
                  {selectedProduct.product_type !== "service" && (
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        selectedProduct.stock === 0
                          ? "bg-red-100 text-red-700"
                          : selectedProduct.stock <= 10
                          ? "bg-orange-100 text-orange-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {selectedProduct.stock === 0
                        ? "Out of Stock"
                        : `${selectedProduct.stock} in stock`}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              {selectedProduct.description && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">
                    Description
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>
              )}

              {/* Product Details Grid */}
              <div className="grid grid-cols-2 gap-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-4">
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-medium">
                    Unit Price
                  </div>
                  <div className="text-lg font-bold text-gray-800">
                    ₱{Number(selectedProduct.price).toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1 font-medium">
                    Type
                  </div>
                  <div className="text-lg font-semibold text-gray-800 capitalize">
                    {selectedProduct.product_type}
                  </div>
                </div>
                {selectedProduct.commissionCategory?.name && (
                  <div className="col-span-2">
                    <div className="text-xs text-gray-500 mb-1 font-medium">
                      Commission Category
                    </div>
                    <div className="text-sm font-medium text-gray-800">
                      {selectedProduct.commissionCategory.name}
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity Control */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-3">
                  <button
                    className="w-12 h-12 rounded-lg border-2 border-gray-300 text-xl font-bold hover:bg-gray-100 hover:border-gray-400 transition-all active:scale-95"
                    onClick={() =>
                      setSelectedQuantity((q) => Math.max(1, q - 1))
                    }
                  >
                    -
                  </button>

                  <input
                    type="number"
                    min={1}
                    value={selectedQuantity}
                    onChange={(e) =>
                      setSelectedQuantity(
                        Math.max(1, parseInt(e.target.value) || 1)
                      )
                    }
                    className="flex-1 text-center border-2 border-gray-300 rounded-lg py-3 text-lg font-semibold focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />

                  <button
                    className="w-12 h-12 rounded-lg border-2 border-gray-300 text-xl font-bold hover:bg-gray-100 hover:border-gray-400 transition-all active:scale-95"
                    onClick={() => setSelectedQuantity((q) => q + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Total Price Preview */}
                <div className="mt-4 bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Price</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ₱
                      {(
                        Number(selectedProduct.price) * selectedQuantity
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2 sticky bottom-0 bg-white pb-2 z-10">
                <button
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all active:scale-95"
                  onClick={() => setSelectedProduct(null)}
                >
                  Cancel
                </button>
                <button
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md text-sm font-semibold hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all active:scale-95"
                  onClick={handleAddToCart}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ConfirmationModal
        isOpen={showConfirmModal}
        title="Confirm Checkout"
        message="Are you sure you want to proceed with this transaction?"
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        confirmColor="bg-blue-600 hover:bg-blue-700"
        onCancel={() => setShowConfirmModal(false)}
        onConfirm={() => {
          setShowConfirmModal(false);
          // Handle checkout logic here
        }}
      />
    </main>
  );
}
