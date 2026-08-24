
import { TASK_STATUS, TASK_PRIORITY } from "../../utils/constants";
import { Filter } from "lucide-react";

export default function FilterBar({ filters, setFilters }) {
  const statusOptions = [
    { value: "all", label: "All" },
    { value: TASK_STATUS.PENDING, label: "Pending" },
    { value: TASK_STATUS.COMPLETED, label: "Completed" },
  ];

  const priorityOptions = [
    { value: "all", label: "All Priority" },
    { value: TASK_PRIORITY.LOW, label: "Low" },
    { value: TASK_PRIORITY.MEDIUM, label: "Medium" },
    { value: TASK_PRIORITY.HIGH, label: "High" },
  ];

  const sortOptions = [
    { value: "createdAt", label: "Newest First" },
    { value: "dueDate", label: "Due Date" },
    { value: "priority", label: "Priority" },
  ];

  return (
    <div className="card p-4 mb-4 flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
        <Filter size={15} />
        <span className="text-sm font-medium">Filter:</span>
      </div>

      <div className="flex flex-wrap gap-2 flex-1">
        <div className="flex gap-1">
          {statusOptions.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilters({ ...filters, status: value })}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filters.status === value
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <select
          value={filters.priority}
          onChange={(e) => setFilters({ ...filters, priority: e.target.value })}
          className="px-3 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-none outline-none cursor-pointer"
        >
          {priorityOptions.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>

        <select
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          className="px-3 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-none outline-none cursor-pointer"
        >
          {sortOptions.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}