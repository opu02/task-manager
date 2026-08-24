
import axiosInstance from "./axios";

export const getTasksApi = async (filters = {}) => {
  const params = new URLSearchParams();
  if (filters.status && filters.status !== "all") params.append("status", filters.status);
  if (filters.priority && filters.priority !== "all") params.append("priority", filters.priority);
  if (filters.sort) params.append("sort", filters.sort);
  const res = await axiosInstance.get(`/tasks?${params.toString()}`);
  return res.data;
};

export const createTaskApi = async (data) => {
  const res = await axiosInstance.post("/tasks", data);
  return res.data;
};

export const updateTaskApi = async ({ id, ...data }) => {
  const res = await axiosInstance.put(`/tasks/${id}`, data);
  return res.data;
};

export const deleteTaskApi = async (id) => {
  const res = await axiosInstance.delete(`/tasks/${id}`);
  return res.data;
};

export const toggleTaskApi = async (id) => {
  const res = await axiosInstance.patch(`/tasks/${id}/toggle`);
  return res.data;
};