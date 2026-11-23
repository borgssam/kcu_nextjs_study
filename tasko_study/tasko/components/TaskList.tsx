// components/TaskList.tsx
import TaskCard from "@/components/TaskCard";
// [수정] 이전: import type { Task } from "@/lib/types";
import type { TaskWithCount } from "@/lib/types";

interface TaskListProps {
  // [수정] 이전: tasks: Task[];
  tasks: TaskWithCount[];
}

export default function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <p className="py-12 text-center text-gray-500">할 일이 없습니다.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task) => (
        // [수정] 이전: <TaskCard key={task.id} task={task} />
        <TaskCard key={task.id} task={task} commentCount={task.commentCount} />
      ))}
    </div>
  );
}
