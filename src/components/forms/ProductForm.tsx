"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import DropdownField from "../DropdownField";
import Image from "next/image";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  description: z.string().min(1, { message: "Description is required!" }),
  productType: z.string().min(1, { message: "Product Type is required!" }),
  price: z.coerce.number().min(0, { message: "Price must be positive!" }),
  stock: z.coerce.number().min(0, { message: "Stock must be non-negative!" }), // Added stock validation
  status: z.enum(["Active", "Inactive"], { message: "Status is required" }),
  img: z.any().optional(),
});

type Inputs = z.infer<typeof schema>;

type Props = {
  type: "create" | "update";
  data?: any;
  onClose?: () => void;
  onSuccess?: () => void;
};

const ProductForm = ({ type, data, onClose, onSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: data,
  });

  const [productTypes, setProductTypes] = useState([
    { label: "Product", value: "product" },
    { label: "Service", value: "service" },
  ]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (type === "update" && data && Object.keys(data).length > 0) {
      reset({
        name: data.name || "",
        description: data.description || "",
        productType: data.product_type || "",
        price: Number(data.price) || 0,
        stock: Number(data.stock) || 0, // Added stock reset
        status: data.status === "active" ? "Active" : "Inactive",
      });

      setPreviewUrl(data.image_url || null);
    }
  }, [type, data, reset]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreviewUrl(URL.createObjectURL(file));
  };

  const onSubmit = handleSubmit(async (formData) => {
    setIsLoading(true);
    let imageUrl = "";

    try {
      const imageFile = formData.img instanceof File ? formData.img : null;
      if (imageFile) {
        const imageForm = new FormData();
        imageForm.append("file", imageFile);

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: imageForm,
        });

        const uploadResult = await uploadRes.json();
        if (!uploadResult.success) throw new Error("Image upload failed");
        imageUrl = uploadResult.url;
      }

      const payload: any = {
        name: formData.name,
        description: formData.description,
        product_type: formData.productType,
        price: formData.price,
        stock: formData.stock, // Added stock to payload
        status: formData.status.toLowerCase(),
      };

      if (imageUrl && !imageUrl.startsWith("blob:")) {
        payload.image_url = imageUrl;
      } else if (!imageUrl && data?.image_url) {
        payload.image_url = data.image_url;
      }

      const url =
        type === "create"
          ? "/api/product/create"
          : `/api/product/update/${data.id}`;

      const res = await fetch(url, {
        method: type === "create" ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (result.success) {
        toast.success(`Product ${type}d successfully!`);
        onClose?.();
        onSuccess?.();
      } else {
        toast.error(result.message || `❌ Failed to ${type} product.`);
      }
    } catch (error) {
      console.error("Submit failed", error);
      toast.error("❌ Server error occurred.");
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <form className="flex flex-col gap-6" onSubmit={onSubmit}>
      <h1 className="text-lg md:text-xl font-semibold">
        {type === "create" ? "Create a new product" : "Update product"}
      </h1>
      <div className="flex flex-wrap gap-4">
        <InputField
          label="Name"
          name="name"
          register={register}
          error={errors.name}
        />
        <InputField
          label="Description"
          name="description"
          register={register}
          error={errors.description}
        />
        <DropdownField
          label="Product Type"
          name="productType"
          register={register}
          error={errors.productType}
          options={productTypes}
        />
        <InputField
          label="Price"
          name="price"
          type="number"
          register={register}
          error={errors.price}
        />
        <InputField
          label="Stock"
          name="stock"
          type="number"
          register={register}
          error={errors.stock}
        />
        <DropdownField
          label="Status"
          name="status"
          register={register}
          error={errors.status}
          options={[
            { label: "Active", value: "Active" },
            { label: "Inactive", value: "Inactive" },
          ]}
        />
      </div>

      <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label className="text-xs text-gray-500">Upload Image</label>
        <div
          className="relative flex items-center justify-center w-full aspect-square border-2 border-dashed border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 cursor-pointer overflow-hidden"
          onClick={() => document.getElementById("img")?.click()}
        >
          {previewUrl ? (
            <Image
              src={previewUrl}
              alt="Preview"
              fill
              className="object-cover rounded-md"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <Image src="/upload.png" alt="Upload" width={28} height={28} />
              <span className="text-xs text-gray-400 mt-1">
                Click to upload
              </span>
            </div>
          )}
        </div>
        <Controller
          name="img"
          control={control}
          render={({ field }) => (
            <input
              type="file"
              id="img"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setPreviewUrl(URL.createObjectURL(file));
                  field.onChange(file);
                }
              }}
            />
          )}
        />
        {errors.img?.message && (
          <p className="text-xs text-red-400">
            {errors.img.message.toString()}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 transition text-white p-2 rounded-md w-full md:w-fit"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ProductForm;
