import { useQuery } from "@tanstack/react-query";
import { getAllUserAPI, getSingleUserAPI } from "../api/userApi";

export const useSingleAccount = (userID: string) => {
  const { data: singleUser, isLoading } = useQuery({
    queryKey: ["singleUser"],
    queryFn: () => getSingleUserAPI(userID),
  });
  return { singleUser, isLoading };
};

export const useGetAllAccount = () => {
  const { data: allUser, isLoading } = useQuery({
    queryKey: ["allUser"],
    queryFn: getAllUserAPI,
  });

  return { allUser, isLoading };
};
