import { AxiosResponse } from "axios";
import { Employee } from "./endPoints";
import { http } from "./apiClient";

export const getCafeEmployee = async (id: number): Promise<AxiosResponse> => {
  return await http.get(`${Employee.GET_CAFE_EMP}/${id}`);
};
export const getEmployees = async (): Promise<AxiosResponse> => {
  return await http.get(`${Employee.GET_ALL}`);
};

export const deleteEmployee = async (id: number): Promise<AxiosResponse> => {
  return await http.delete(`${Employee.DELETE}/${id}`);
};

export const addEmployee = async (data: object): Promise<AxiosResponse> => {
  return await http.post(`${Employee.POST}`, data);
};

export const updateEmployee = async (
  id: number,
  data: object
): Promise<AxiosResponse> => {
  return await http.put(`${Employee.PUT}/${id}`, data);
};
