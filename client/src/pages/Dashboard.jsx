import {  useEffect, useState } from "react";
import {getTickets,} from "../api/ticketApi";
import Loader from "../components/Loader";

import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import SearchBar from "../components/SearchBar";
import StatusFilter from "../components/StatusFilter";
import TicketTable from "../components/TicketTable";


const Dashboard = () => {

    const [tickets, setTickets] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [search, setSearch] =
        useState("");

    const [status, setStatus] =
        useState("");
    
    const [noTickets, setNoTickets] = useState(false);

    useEffect(() => {
  const timer = setTimeout(() => {
    fetchTickets();
  }, 1000); // Debounce API calls by 1 second

  return () => clearTimeout(timer);
}, [search, status]);

    const fetchTickets = async () => {
        
        try {
            setLoading(true);

            const response =
                await getTickets({search, status});

            

            const fetchedTickets =
                response.data.tickets || [];

            setTickets(fetchedTickets);

            setNoTickets(
                fetchedTickets.length === 0
            );

        } catch (error) {

            if (
                error.response?.status === 404
            ) {
                setTickets([]);
                setNoTickets(true);
            } else {
                console.error(error);
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <div className="grid md:grid-cols-4 gap-5 mb-8">

            
          <StatsCard
            title="Open Tickets"
            count={
                tickets.filter(
                    (ticket) => ticket.status === "Open").length
            }
            color="text-blue-600"
          />

          <StatsCard
            title="In Progress"
            count={
                tickets.filter(
                    (ticket) => ticket.status === "In Progress"
                ).length
            }
            color="text-amber-500"
          />

          <StatsCard
            title="Closed"
            count={
                tickets.filter(
                    (ticket) => ticket.status === "Closed"
                ).length
            }
            color="text-emerald-600"
          />

          <StatsCard
            title="Total"
            count={tickets.length}
            color="text-purple-600"
          />

        </div>

        <div className="bg-white p-5 rounded-2xl mb-6 shadow-sm">

          <div className="grid md:grid-cols-2 gap-4">

            <SearchBar
              search={search}
              setSearch={setSearch}
            />

            <StatusFilter
              status={status}
              setStatus={setStatus}
            />

          </div>

        </div>

              {
                  noTickets ? (
                      <div className="bg-white rounded-2xl shadow-sm p-10 text-center">

                          <h2 className="text-xl font-semibold text-slate-700">
                              No Tickets Found
                          </h2>

                          <p className="text-slate-500 mt-2">
                              Try another search term.
                          </p>

                      </div>
                  ) : (
                      <TicketTable tickets={tickets} />
                  )
              }

      </div>

    </div>
  );
};

export default Dashboard;