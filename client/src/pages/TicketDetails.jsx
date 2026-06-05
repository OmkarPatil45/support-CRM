import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

import {
  getTicketById,
  updateTicket,
} from "../api/ticketApi";

const TicketDetails = () => {
  const { ticketId } = useParams();

  const [ticket, setTicket] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTicket();
  }, [ticketId]);

  const fetchTicket = async () => {
    try {
      setLoading(true);

      const response = await getTicketById(
        ticketId
      );

      setTicket(response.data.ticket);
      setStatus(response.data.ticket.status);
    } catch (error) {
      console.error(
        "Failed to fetch ticket:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async () => {
    try {
      await updateTicket(ticketId, {
        status,
      });

      alert("Status Updated");

      fetchTicket();
    } catch (error) {
      console.error(
        "Failed to update status:",
        error
      );

      alert("Failed to update status");
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!ticket) {
    return (
      <div className="p-10 text-center">
        Ticket Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <div className="max-w-4xl mx-auto p-6">

        <div className="bg-white rounded-3xl shadow-sm p-8">

          <div className="flex justify-between items-center">

            <h2 className="text-2xl font-bold">
              {ticket.ticketId}
            </h2>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              {ticket.status}
            </span>

          </div>

          <div className="mt-8 space-y-6">

            <div>
              <p className="text-slate-500">
                Customer
              </p>

              <h3 className="font-semibold">
                {ticket.cName}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Email
              </p>

              <h3 className="font-semibold">
                {ticket.cEmail}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Subject
              </p>

              <h3 className="font-semibold">
                {ticket.subject}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">
                Description
              </p>

              <p>
                {ticket.description}
              </p>
            </div>

          </div>

          <div className="mt-8 flex gap-4 items-center">

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
              className="border rounded-xl p-3"
            >
              <option value="Open">
                Open
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Closed">
                Closed
              </option>
            </select>

            <button
              onClick={handleStatusUpdate}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              Update Status
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TicketDetails;