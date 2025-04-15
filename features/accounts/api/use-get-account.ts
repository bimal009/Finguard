import { useQuery } from "@tanstack/react-query";
import client from "@/lib/hono";

export const useGetAccounts = () => {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      const res = await client.api.accounts.$get(); // using .api.accounts route
      if(!res.ok){
        throw new Error ("failed to fetch")
      }
      const data = await res.json();
      return data
    },
  });
};
