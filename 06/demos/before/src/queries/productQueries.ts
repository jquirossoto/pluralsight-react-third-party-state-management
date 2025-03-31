import { useSuspenseQuery } from "@tanstack/react-query";
import { Product } from "../types/types";

export const useGetProductById = (id: string | undefined) => {
  return useSuspenseQuery<Product>({
    queryKey: ["products", id],
    queryFn: async () => {
      const data = await fetch(
        import.meta.env.VITE_APP_API_BASE_URL + `products/${id}`
      );
      if (!data.ok) {
        throw new Error(`Product not found: ${data.status}`);
      }
      return data.json();
    },
  });
};
