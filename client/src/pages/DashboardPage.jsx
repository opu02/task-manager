
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTasksApi, deleteTaskApi, toggleTaskApi } from "../api/task.api";
import useAuthStore from "../store/authStore";
import useThemeStore from "../store/themeStore";
import TaskCard from "../components/tasks/TaskCard";
import TaskModal from "../components/tasks/TaskModal";
import FilterBar from "../components/tasks/FilterBar";
import StatsBar from "../components/tasks/StatsBar";
import Navbar from "../components/layout/Navbar";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();
  const [filters, setFilters] = useState({ status: "all", priority: "all", sort: "createdAt" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ["tasks", filters],
    queryFn: () => getTasksApi(filters),
  });

  const { mutate: deleteTask } = useMutation({
    mutationFn: deleteTaskApi,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const { mutate: toggleTask } = useMutation({
    mutationFn: toggleTaskApi,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const handleEdit = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const tasks = data?.tasks || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar user={user} />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              My Tasks
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">
              Manage and track your tasks
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn-primary flex items-center gap-2"
          >
            <Plus size={18} />
            Add Task
          </button>
        </div>

        <StatsBar tasks={tasks} />

        <FilterBar filters={filters} setFilters={setFilters} />

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : tasks.length === 0 ? (
          <div className="card p-12 text-center mt-4">
            <div className="text-5xl mb-4">📋</div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              No tasks found
            </h3>
            <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
              Click "Add Task" to create your first task
            </p>
          </div>
        ) : (
          <div className="grid gap-3 mt-4">
            {tasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={handleEdit}
                onDelete={deleteTask}
                onToggle={toggleTask}
              />
            ))}
          </div>
        )}
      </main>

      {isModalOpen && (
        <TaskModal
          task={editingTask}
          onClose={handleCloseModal}
          onSuccess={() => {
            queryClient.invalidateQueries({ queryKey: ["tasks"] });
            handleCloseModal();
          }}
        />
      )}
    </div>
  );
}