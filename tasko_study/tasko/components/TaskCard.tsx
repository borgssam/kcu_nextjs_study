import { STATUS_LABEL } from "@/lib/types";
import type {Task, TaskStatus} from "@/lib/types";
import Link from "next/link";

const STATUS_BADGE:Record<TaskStatus,string> ={
  todo: "bg-slate-500",
  doing: "bg-amber-600",
  done: "bg-green-600",
};

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({task}:TaskCardProps){
  return (
    <article className="border border-gray-200  rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition" >
      <div className="mb-3 flex items-center justify-between">        
        <span className ={`rounded-full ${STATUS_BADGE[task.status]} px-3 py-1 text-xs font-medium text-white `} >{STATUS_LABEL[task.status]}</span>
        <span>{task.createdAt}</span>
      </div>

      <h2 className="mb-1 text-lg font-semibold">
        <Link href={`/tasks/${task.id}`}>
        
        {task.title}
        </Link>

      </h2>
      <p className="mb-4 text-sm text-gray-600">{task.content}</p>
      <p className="text-sm text-gray-500">담당: {task.assignee}</p>
    </article>
  );
}