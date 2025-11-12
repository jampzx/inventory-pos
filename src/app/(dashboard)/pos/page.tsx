"use client";

import { useEffect, useState } from "react";
import { Product, CartItem } from "@/types/types";
import { addItemsToCart } from "@/app/utils/cartUtils";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";
import ConfirmationModal from "@/components/ConfirmationModal";
import Pagination from "@/components/Pagination";
import { FiSearch } from "react-icons/fi";

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
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Transaction completed successfully.");
        setCart([]);
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
    <main className="p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6 min-h-screen bg-gray-50">
      <section className="flex-1">
        <header className="flex flex-col md:flex-row items-center gap-4 mb-6">
          {/* Search */}
          <div className="relative w-full md:flex-1">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 rounded-md bg-lamaPurpleLight text-sm placeholder-gray-500 focus:border-lamaSky focus:ring-1 focus:ring-lamaSky focus:outline-none shadow-sm"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-500 text-base" />
          </div>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {paginatedProducts.map((product, index) => (
            <button
              key={product.id}
              onClick={() => {
                if (product.status !== "active") {
                  toast.error(`"${product.name}" is inactive`);
                  return;
                }
                setSelectedProduct(product);
              }}
              className={`rounded-2xl p-4 min-w-[130px] text-left transition transform hover:-translate-y-0.5 hover:shadow-md 
    ${index % 2 === 0 ? "bg-lamaPurple" : "bg-lamaYellow"}`}
            >
              <div className="flex justify-between items-center">
                <span
                  className={`text-[10px]  px-2 py-1 rounded-full text-black font-medium shadow ${
                    index % 2 === 0 ? "bg-lamaYellow" : "bg-lamaPurple"
                  }`}
                >
                  {product.product_type === "service"
                    ? "Service"
                    : `Stock: ${product.stock}`}
                </span>
              </div>

              <h2 className="text-lg font-bold my-3 text-gray-800">
                {product.name}
              </h2>
              <p className="text-xl font-bold text-white drop-shadow-sm">
                ₱{Number(product.price).toFixed(2)}
              </p>
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

      <aside className="w-full lg:w-96 rounded shadow-md p-4 space-y-4 bg-lamaPurpleLight">
        <div className="text-lg font-bold text-gray-800">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>

            {/* Header */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
              🛒 Add Product to Cart
            </h2>

            {/* Product Info */}
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mb-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Product
                </label>
                <div className="font-medium">{selectedProduct.name}</div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Price
                </label>
                <div className="text-blue-600 font-semibold">
                  ₱{Number(selectedProduct.price).toFixed(2)}
                </div>
              </div>
            </div>

            {/* Quantity Control */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <div className="flex items-center gap-2 w-full">
                <button
                  className="w-10 h-10 rounded-md border text-lg font-semibold hover:bg-gray-100"
                  onClick={() => setSelectedQuantity((q) => Math.max(1, q - 1))}
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
                  className="flex-1 text-center border rounded-md py-2 text-sm"
                />

                <button
                  className="w-10 h-10 rounded-md border text-lg font-semibold hover:bg-gray-100"
                  onClick={() => setSelectedQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                className="px-4 py-2 border rounded-md text-sm text-gray-600 hover:bg-gray-100"
                onClick={() => setSelectedProduct(null)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
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
