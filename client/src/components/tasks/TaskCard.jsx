
import { useState } from "react";
import { PRIORITY_COLORS, STATUS_COLORS } from "../../utils/constants";
import { Check, Pencil, Trash2, Calendar, ChevronDown, ChevronUp } from "lucide-react";

export default function TaskCard({ task, onEdit, onDelete, onToggle }) {
  const [expanded, setExpanded] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    onDelete(task._id);
  };

  const formatDate = (date) => {
    if (!date) return null;
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const isOverdue =
    task.dueDate &&
    new Date(task.dueDate) < new Date() &&
    task.status === "pending";

  return (
    <div
      className={`card p-4 transition-all duration-200 hover:shadow-md ${
        task.status === "completed" ? "opacity-75" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(task._id)}
          className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
            task.status === "completed"
              ? "bg-green-500 border-green-500"
              : "border-gray-300 dark:border-gray-600 hover:border-primary-500"
          }`}
        >
          {task.status === "completed" && (
            <Check size={11} className="text-white" strokeWidth={3} />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3
              className={`font-medium text-gray-900 dark:text-white ${
                task.status === "completed"
                  ? "line-through text-gray-400 dark:text-gray-500"
                  : ""
              }`}
            >
              {task.title}
            </h3>

            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${PRIORITY_COLORS[task.priority]}`}>
                {task.priority}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[task.status]}`}>
                {task.status}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-2">
            {task.dueDate && (
              <span className={`flex items-center gap-1 text-xs ${
                isOverdue
                  ? "text-red-500 dark:text-red-400"
                  : "text-gray-400 dark:text-gray-500"
              }`}>
                <Calendar size={12} />
                {isOverdue ? "Overdue · " : ""}{formatDate(task.dueDate)}
              </span>
            )}

            {task.description && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-0.5 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                {expanded ? "Less" : "More"}
              </button>
            )}
          </div>

          {expanded && task.description && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {task.description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={() => onEdit(task)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
          >
            <Pencil size={15} />
          </button>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}