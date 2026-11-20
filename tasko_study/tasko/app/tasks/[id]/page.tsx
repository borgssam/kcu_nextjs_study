// app/tasks/[id]/page.tsx
import { notFound } from "next/navigation";
import TaskCard from "@/components/TaskCard";
import { sampleTasks } from "@/lib/sample-data";
import type { Task } from "@/lib/types";


interface TaskDetailPageProps {
  params: Promise<{id:string}>;
}

function getTask(id:number):Task | undefined {
  for(const task of sampleTasks) {
    if(task.id === id) {
      return task;
    }
  }
}

export default async function TaskDetailPage({params}:TaskDetailPageProps) {
  const {id} = await params;

  return (
    <div className="px-4 py-8">
      
      <TaskCard task={getTask(Number(id))} />

    </div>
  );
}

