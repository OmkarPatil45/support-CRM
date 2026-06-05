import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import CreateTicket from "../pages/CreateTicket";
import TicketDetails from "../pages/TicketDetails";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/create-ticket"
        element={<CreateTicket />}
      />

      <Route
        path="/ticket/:ticketId"
        element={<TicketDetails />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

    </Routes>
  );
};

export default AppRoutes;