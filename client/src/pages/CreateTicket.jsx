import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { createTicket } from "../api/ticketApi";

const CreateTicket = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cName: "",
    cEmail: "",
    subject: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createTicket(formData);

      alert("Ticket Created Successfully");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert("Failed to Create Ticket");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <div className="max-w-3xl mx-auto p-6">

        <div className="bg-white rounded-3xl shadow-sm p-8">

          <h1 className="text-3xl font-bold mb-8">
            Create New Ticket
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>
              <label className="block mb-2 font-medium">
                Customer Name
              </label>

              <input
                type="text"
                name="cName"
                value={formData.cName}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Customer Email
              </label>

              <input
                type="email"
                name="cEmail"
                value={formData.cEmail}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-xl p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Description
              </label>

              <textarea
                rows="5"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-xl p-3"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              {loading
                ? "Creating..."
                : "Create Ticket"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default CreateTicket;