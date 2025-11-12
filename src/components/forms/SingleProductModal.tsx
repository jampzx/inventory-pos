"use client";

import Image from "next/image";

const SingleProductModal = ({
  product,
  onClose,
}: {
  product: {
    id: number;
    name: string;
    description?: string;
    product_type: string;
    price: number;
    image_url?: string;
    status: string;
  };
  onClose: () => void;
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center px-2">
      <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-lg"
        >
          ✕
        </button>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* LEFT SECTION */}
          <div className="flex-1 flex flex-col gap-6">
            {/* PRODUCT CARD */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              {/* IMAGE */}
              <div className="w-full sm:w-36 sm:h-36 aspect-square rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center border shrink-0">
                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt={product.name}
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-sm text-gray-400">No Image</span>
                )}
              </div>

              {/* TEXT INFO */}
              <div className="flex-1 w-full space-y-6">
                {/* Header: Name + Status */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h1 className="text-2xl font-bold text-gray-900 break-words">
                    {product.name}
                  </h1>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                      product.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Description */}
                {product.description && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                )}

                {/* Product Meta Info */}
                <div>
                  <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    Product Details
                  </h2>
                  <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3 text-sm text-gray-800">
                    <div>
                      <dt className="font-medium text-gray-500">Type</dt>
                      <dd>{product.product_type}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-500">Price</dt>
                      <dd>₱{parseFloat(product.price.toString()).toFixed(2)}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductModal;
