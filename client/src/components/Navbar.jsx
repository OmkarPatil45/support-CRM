import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  }

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">

        <h1 className="text-xl font-bold text-blue-600">
          Support CRM
        </h1>

        <div className="flex items-center gap-6">
          <Link to="/" className="text-slate-600 hover:text-blue-600">
            Dashboard
          </Link>

          <Link to="/create-ticket" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            New Ticket
          </Link>

          <button
            onClick={handleLogout}
            className="text-white hover:bg-red-600 transition bg-blue-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;