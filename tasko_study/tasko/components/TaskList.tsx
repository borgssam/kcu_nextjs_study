// components/TaskList.tsx
import TaskCard from "@/components/TaskCard";
import type { Task } from "@/lib/types";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({tasks}: TaskListProps){
  return(
    <div>
      {
        tasks.map((task)=>(
          <TaskCard key={task.id} task={task}/>
        ))
      }

    </div>

  )
}