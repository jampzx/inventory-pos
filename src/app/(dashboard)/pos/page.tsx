"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Product, CartItem, Customer } from "@/types/types";
import { addItemsToCart } from "@/app/utils/cartUtils";
import { toast } from "sonner";
import Spinner from "@/components/Spinner";
import ConfirmationModal from "@/components/ConfirmationModal";
import Pagination from "@/components/Pagination";
import CustomerSelector from "@/components/CustomerSelector";
import {
  FiCreditCard,
  FiMinus,
  FiPackage,
  FiPlus,
  FiSearch,
  FiShoppingBag,
  FiTrash2,
  FiX,
} from "react-icons/fi";

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
    Object.fromEntries(paymentMethods.map((method) => [method.key, 0])),
  );
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null,
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
    p.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(searchedProducts.length / itemsPerPage);
  const paginatedProducts = searchedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Add validation to ensure selected quantity does not exceed stock in handleAddToCart
  const handleAddToCart = () => {
    if (!selectedProduct) return;

    const isService = selectedProduct.product_type === "service";
    const existingCartQuantity = cart.find(
      (item) => item.product.id === selectedProduct.id,
    )?.quantity;
    const nextQuantity = (existingCartQuantity ?? 0) + selectedQuantity;

    if (!isService && nextQuantity > selectedProduct.stock) {
      toast.error(
        `Cannot add more than ${selectedProduct.stock} of "${selectedProduct.name}" to the cart.`,
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
          const isService = item.product.product_type === "service";
          const newQty = item.quantity + delta;
          if (newQty < 1) {
            toast.error(`Minimum quantity is 1 for "${item.product.name}".`);
            return item;
          }
          if (!isService && newQty > item.product.stock) {
            toast.error(
              `Cannot exceed stock of ${item.product.stock} for "${item.product.name}".`,
            );
            return item;
          }
          return { ...item, quantity: newQty };
        }
        return item;
      }),
    );
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
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
      0,
    );
    if (totalPayment < subtotal) {
      toast.error("Total payment must not be less than the subtotal.");
      return;
    }

    const selectedPaymentMethods = Object.entries(payment).filter(
      ([, amount]) => amount > 0,
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
          Object.fromEntries(paymentMethods.map((method) => [method.key, 0])),
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
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
        <div className="neo-panel flex items-center gap-3 rounded-2xl border border-black/10 px-5 py-4">
          <Spinner size={34} color="lamaSky" />
          <div>
            <p className="neo-subtitle">POS Workspace</p>
            <p className="text-sm font-medium text-gray-700">
              Loading products...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="neo-panel flex min-h-screen flex-col gap-4 rounded-3xl border border-black/10 p-2 sm:p-4 md:p-6 lg:flex-row lg:gap-6">
      <section className="flex-1">
        <header className="mb-4 neo-panel rounded-2xl border border-black/10 p-4 sm:mb-5">
          <div className="mb-3">
            <p className="neo-subtitle">Checkout</p>
            <h1 className="neo-title text-xl font-semibold text-gray-800">
              Point Of Sale
            </h1>
          </div>

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
              className="w-full rounded-xl border border-black/15 bg-white/80 py-2.5 pl-10 pr-4 text-sm placeholder-gray-400 shadow-sm transition-all focus:border-lamaSky focus:outline-none focus:ring-2 focus:ring-lamaSky/25"
            />
            <FiSearch className="absolute left-3 top-3 text-base text-gray-500" />
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
              className="neo-panel group overflow-hidden rounded-2xl border border-black/10 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-lamaSky/35"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-white to-[#f4efe4]">
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
                  <div className="absolute left-2 top-2 rounded-full border border-red-300/60 bg-red-100 px-2 py-1 text-xs font-semibold text-red-700 shadow-sm">
                    Inactive
                  </div>
                )}

                {/* Stock Badge */}
                <div className="absolute top-2 right-2">
                  {product.product_type === "service" ? (
                    <div className="flex items-center gap-1 rounded-full border border-lamaSky/30 bg-lamaSky/15 px-2.5 py-1 text-xs font-semibold text-[#0f9f9d] shadow-sm">
                      <FiShoppingBag className="w-3 h-3" />
                      Service
                    </div>
                  ) : (
                    <div
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm ${
                        product.stock === 0
                          ? "border border-red-300/60 bg-red-100 text-red-700"
                          : product.stock <= 10
                            ? "border border-amber-300/60 bg-amber-100 text-amber-700"
                            : "border border-emerald-300/60 bg-emerald-100 text-emerald-700"
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
                  <div className="text-xs font-semibold uppercase tracking-[0.12em] text-lamaSky">
                    {product.category.name}
                  </div>
                )}

                {/* Product Name */}
                <h2 className="neo-title min-h-[3rem] text-base font-semibold text-gray-800 transition-colors group-hover:text-[#0f9f9d] line-clamp-2">
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
                    <span className="text-xl font-bold text-[#0f9f9d]">
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

      <aside className="neo-panel w-full space-y-3 rounded-2xl border border-black/10 p-3 sm:space-y-4 sm:p-4 lg:w-96">
        <div>
          <p className="neo-subtitle">Current Ticket</p>
          <div className="neo-title text-base font-semibold text-gray-800 sm:text-lg">
            Order Information
          </div>
        </div>

        {cart.length > 0 ? (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="rounded-xl border border-black/10 bg-white/80 p-4 space-y-3"
              >
                {/* Item */}
                <div className="flex items-start justify-between border-b border-black/10 pb-3 text-sm">
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
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-black/15 bg-white/90 text-gray-700"
                      >
                        <FiMinus size={12} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.product.id, 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg border border-black/15 bg-white/90 text-gray-700"
                      >
                        <FiPlus size={12} />
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
                      title="Remove"
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-red-200/60 bg-red-100/80 text-red-500 hover:bg-red-200/70"
                    >
                      <FiTrash2 size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-black/10 bg-white/70 px-3 py-3 text-sm italic text-gray-500">
            No items added yet.
          </p>
        )}

        <div className="neo-panel rounded-xl border border-black/10 px-3 py-2.5 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-700">Subtotal</span>
            <span className="font-semibold text-gray-800">
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
          <div className="mb-2 flex items-center gap-2 font-medium text-gray-700">
            <FiCreditCard size={15} className="text-gray-500" />
            Payment Method
          </div>
          <div className="space-y-2 rounded-xl border border-black/10 bg-white/70 p-3">
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
                  className="w-full rounded-lg border border-black/15 bg-white/90 px-2 py-1 text-right text-sm"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="neo-btn mt-4 w-full py-2.5 text-sm"
        >
          Check Out
        </button>
      </aside>

      {/* MODAL */}
      {selectedProduct &&
        createPortal(
          <AnimatePresence>
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 px-2 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                className="neo-panel-strong relative flex max-h-[84vh] w-full max-w-xl flex-col overflow-hidden border border-black/10"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
              >
                <motion.button
                  className="absolute right-4 top-4 z-10 rounded-lg border border-black/10 bg-white/80 p-1.5 text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedProduct(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX size={16} />
                </motion.button>

                <div className="relative h-36 overflow-hidden bg-gradient-to-br from-white to-[#f4efe4]">
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
                    <div className="flex h-full w-full items-center justify-center">
                      <FiPackage className="h-20 w-20 text-gray-300" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-5">
                  <div>
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h2 className="neo-title text-2xl font-semibold leading-tight text-gray-800 sm:text-3xl">
                        {selectedProduct.name}
                      </h2>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#0f9f9d]">
                          ₱{Number(selectedProduct.price).toFixed(2)}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProduct.category?.name && (
                        <span className="inline-flex items-center rounded-full border border-lamaSky/30 bg-lamaSky/15 px-3 py-1 text-xs font-semibold text-[#0f9f9d]">
                          {selectedProduct.category.name}
                        </span>
                      )}
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                          selectedProduct.product_type === "service"
                            ? "border border-lamaPurple/40 bg-lamaPurpleLight text-indigo-700"
                            : "border border-emerald-300/60 bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {selectedProduct.product_type === "service" ? (
                          <>
                            <FiShoppingBag className="h-3 w-3" /> Service
                          </>
                        ) : (
                          <>
                            <FiPackage className="h-3 w-3" /> Product
                          </>
                        )}
                      </span>
                      {selectedProduct.product_type !== "service" && (
                        <span
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                            selectedProduct.stock === 0
                              ? "border-red-300/60 bg-red-100 text-red-700"
                              : selectedProduct.stock <= 10
                                ? "border-amber-300/60 bg-amber-100 text-amber-700"
                                : "border-emerald-300/60 bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          {selectedProduct.stock === 0
                            ? "Out of Stock"
                            : `${selectedProduct.stock} in stock`}
                        </span>
                      )}
                    </div>
                  </div>

                  {selectedProduct.description && (
                    <div className="rounded-xl border border-black/10 bg-white/70 p-4">
                      <h3 className="mb-2 text-sm font-semibold text-gray-700">
                        Description
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {selectedProduct.description}
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 rounded-xl border border-black/10 bg-white/70 p-4">
                    <div>
                      <div className="mb-1 text-xs font-medium text-gray-500">
                        Unit Price
                      </div>
                      <div className="text-lg font-bold text-gray-800">
                        ₱{Number(selectedProduct.price).toFixed(2)}
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-medium text-gray-500">
                        Type
                      </div>
                      <div className="text-lg font-semibold capitalize text-gray-800">
                        {selectedProduct.product_type}
                      </div>
                    </div>
                    {selectedProduct.commissionCategory?.name && (
                      <div className="col-span-2">
                        <div className="mb-1 text-xs font-medium text-gray-500">
                          Commission Category
                        </div>
                        <div className="text-sm font-medium text-gray-800">
                          {selectedProduct.commissionCategory.name}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-gray-700">
                      Quantity
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/15 bg-white/90 text-gray-700"
                        onClick={() =>
                          setSelectedQuantity((q) => Math.max(1, q - 1))
                        }
                      >
                        <FiMinus size={16} />
                      </button>

                      <input
                        type="number"
                        min={1}
                        value={selectedQuantity}
                        onChange={(e) =>
                          setSelectedQuantity(() => {
                            const parsedValue = Math.max(
                              1,
                              parseInt(e.target.value) || 1,
                            );

                            if (
                              selectedProduct.product_type !== "service" &&
                              parsedValue > selectedProduct.stock
                            ) {
                              return selectedProduct.stock;
                            }

                            return parsedValue;
                          })
                        }
                        className="w-full rounded-xl border border-black/15 bg-white/90 py-2.5 text-center text-lg font-semibold focus:border-lamaSky focus:outline-none focus:ring-2 focus:ring-lamaSky/25"
                      />

                      <button
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/15 bg-white/90 text-gray-700"
                        onClick={() =>
                          setSelectedQuantity((quantity) => {
                            if (selectedProduct.product_type === "service") {
                              return quantity + 1;
                            }

                            return Math.min(
                              selectedProduct.stock,
                              quantity + 1,
                            );
                          })
                        }
                      >
                        <FiPlus size={16} />
                      </button>
                    </div>

                    <div className="mt-4 rounded-xl border border-lamaSky/25 bg-lamaSky/10 p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Total Price
                        </span>
                        <span className="text-2xl font-bold text-[#0f9f9d]">
                          ₱
                          {(
                            Number(selectedProduct.price) * selectedQuantity
                          ).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="sticky bottom-0 z-10 flex gap-2 border-t border-black/10 bg-[#fffaf0]/95 pt-3 backdrop-blur-sm">
                    <button
                      className="neo-btn-ghost flex-1 px-4 py-2 text-sm"
                      onClick={() => setSelectedProduct(null)}
                    >
                      Cancel
                    </button>
                    <button
                      className="neo-btn flex-1 px-4 py-2 text-sm"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
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
