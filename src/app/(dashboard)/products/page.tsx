"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import FormModal from "components/FormModal";
import Pagination from "components/Pagination";
import Table from "components/Table";
import TableSearch from "components/TableSearch";
import { useUser } from "@/hooks/useUser";
import SingleProductModal from "@/components/forms/SingleProductModal";

interface Product {
  id: number;
  name: string;
  description: string;
  product_type: string;
  price: number;
  image_url: string;
  status: string;
  stock: number; // Added stock field
}

const columns = [
  { header: "Image", accessor: "image" },
  { header: "Name", accessor: "name" },
  { header: "Price", accessor: "price" },
  { header: "Type", accessor: "product_type" },
  { header: "Stock", accessor: "stock" }, // Added stock column
  { header: "Status", accessor: "status" },
  { header: "Actions", accessor: "action" },
];

const ITEMS_PER_PAGE = 15;

const ProductsListPage = () => {
  const { user, loadingUseUser } = useUser();

  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [sortKey, setSortKey] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterType, setFilterType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/product/listing");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();
      if (result.success) {
        setProducts(result.data);
      } else {
        console.error("API Error:", result.message || "Unknown error");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (filterType) {
      filtered = filtered.filter((p) => p.product_type === filterType);
    }
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerSearch) ||
          p.description.toLowerCase().includes(lowerSearch)
      );
    }

    return filtered.sort((a, b) => {
      const aValue = (a as any)[sortKey];
      const bValue = (b as any)[sortKey];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      const aStr = aValue?.toString().toLowerCase() || "";
      const bStr = bValue?.toString().toLowerCase() || "";

      if (aStr < bStr) return sortOrder === "asc" ? -1 : 1;
      if (aStr > bStr) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [products, filterType, sortKey, sortOrder, searchTerm]);

  const totalPages = Math.ceil(
    filteredAndSortedProducts.length / ITEMS_PER_PAGE
  );
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPage, filteredAndSortedProducts]);

  const renderRow = (item: Product) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="p-2">
        {item.image_url ? (
          <a href={item.image_url} target="_blank" rel="noopener noreferrer">
            <Image
              src={item.image_url}
              alt={item.name}
              width={40}
              height={40}
              className="rounded object-cover hover:opacity-80 transition"
            />
          </a>
        ) : (
          <span className="text-xs text-gray-400">No Image</span>
        )}
      </td>
      <td className="p-4">
        <button
          onClick={() => setSelectedProduct(item)}
          className="text-left text-blue-600 hover:underline"
        >
          {item.name}
        </button>
      </td>
      <td className="p-2">₱{parseFloat(item.price.toString()).toFixed(2)}</td>
      <td className="p-2">{item.product_type}</td>
      <td className="p-2">{item.stock}</td> {/* Added stock field rendering */}
      <td
        className={`p-2 font-medium ${
          item.status === "active" ? "text-green-600" : "text-red-600"
        }`}
      >
        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
      </td>
      <td>
        <div className="flex items-center gap-2">
          <button
            title="View"
            onClick={() => setSelectedProduct(item)}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky"
          >
            <Image src="/view.png" alt="View" width={16} height={16} />
          </button>

          <>
            <div title="Edit">
              <FormModal
                table="product"
                type="update"
                id={item.id}
                data={item}
                onSuccess={fetchProducts}
              />
            </div>

            <div title="Delete">
              <FormModal
                table="product"
                type="delete"
                id={item.id}
                onSuccess={fetchProducts}
              />
            </div>
          </>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Products</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch onSearch={(term) => setSearchTerm(term)} />
          <div className="flex items-center gap-4 self-end">
            <select
              className="text-sm px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-lamaPurple focus:border-lamaPurple transition"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="product">Product</option>
              <option value="service">Service</option>
              <option value="bundle">Bundle</option>
            </select>

            <select
              className="text-sm px-3 py-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-lamaPurple focus:border-lamaPurple transition"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>

            <button
              title="Toggle Sort"
              onClick={() =>
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
              }
              className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow"
            >
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            <div title="add">
              <FormModal
                table="product"
                type="create"
                onSuccess={fetchProducts}
              />
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center text-sm p-4 text-gray-500">Loading...</div>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={paginatedData} />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {selectedProduct && (
        <SingleProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductsListPage;
