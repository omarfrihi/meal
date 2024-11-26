import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../axios";

export const useSearchMeal = (search) => {
  const queryFn = ({ queryKey }) => {
    const [, search] = queryKey;
    return axiosInstance.get(`search.php?s=${search}`);
  };
  return useQuery({
    queryKey: ["search", search],
    queryFn,
  });
};

export const useDetails = (id) => {
  const queryFn = ({ queryKey }) => {
    const [, id] = queryKey;
    return axiosInstance.get(`lookup.php?i=${id}`);
  };
  return useQuery({
    queryKey: ["details", id],
    queryFn,
  });
};
