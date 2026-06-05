import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getTickets = (params) =>
  API.get("/tickets", { params });

export const getTicketById = (ticketId) =>
  API.get(`/tickets/${ticketId}`);

export const createTicket = (ticketData) =>
  API.post("/tickets", ticketData);

export const updateTicket = (
  ticketId,
  updateData
) =>
  API.put(
    `/tickets/${ticketId}`,
    updateData
  );

export default API;