const StatusFilter = ({
  status,
  setStatus,
}) => {
  return (
    <select
      value={status}
      onChange={(e) =>
        setStatus(e.target.value)
      }
      className="border border-slate-200 rounded-xl px-4 py-3"
    >
      <option value="">
        All Status
      </option>

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
  );
};

export default StatusFilter;