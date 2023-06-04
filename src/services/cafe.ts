import { AxiosResponse } from "axios";
import { Cafe } from "./endPoints";
import { http } from "./apiClient";

export const getAllCafe = async (): Promise<AxiosResponse> => {
  return await http.get(Cafe.GET_ALL);
};
export const deleteCafe = async (id: number): Promise<AxiosResponse> => {
  return await http.delete(`${Cafe.DELETE}/${id}`);
};
