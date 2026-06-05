import { useNavigate } from "react-router-dom";

const TicketTable = ({ tickets = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">
          <tr>
            <th className="text-left p-4">
              Ticket ID
            </th>

            <th className="text-left p-4">
              Customer
            </th>

            <th className="text-left p-4">
              Subject
            </th>

            <th className="text-left p-4">
              Status
            </th>
          </tr>
        </thead>

        <tbody>

          {tickets.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="text-center p-8"
              >
                No Tickets Found
              </td>
            </tr>
          ) : (
            tickets.map((ticket) => (
              <tr
                key={ticket.ticketId}
                onClick={() =>
                  navigate(
                    `/ticket/${ticket.ticketId}`
                  )
                }
                className="border-t hover:bg-slate-50 cursor-pointer"
              >
                <td className="p-4">
                  {ticket.ticketId}
                </td>

                <td className="p-4">
                  {ticket.cName}
                </td>

                <td className="p-4">
                  {ticket.subject}
                </td>

                <td className="p-4">
                  {ticket.status}
                </td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
};

export default TicketTable;