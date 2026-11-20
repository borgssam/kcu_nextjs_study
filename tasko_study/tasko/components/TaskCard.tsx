import { STATUS_LABEL } from "@/lib/types";
import type {Task} from "@/lib/types";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({task}:TaskCardProps){
  return (
    <article>
      <h2>{task.title}</h2>
      <p>{task.content}</p>
      <p>
        [{STATUS_LABEL[task.status]}] {task.assignee} / {task.createdAt} 
      </p>
    </article>
  );
}