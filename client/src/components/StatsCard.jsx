import { motion } from "framer-motion";

const StatsCard = ({ title, count, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
    >
      <p className="text-slate-500 text-sm">
        {title}
      </p>

      <h2
        className={`text-4xl font-bold mt-3 ${color}`}
      >
        {count}
      </h2>
    </motion.div>
  );
};

export default StatsCard;