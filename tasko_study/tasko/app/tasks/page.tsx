// app/tasks/page.tsx
import Section from "@/components/Section";
import StatusFilter from "@/components/StatusFilter";
// import TaskCard from "@/components/TaskCard";
import TaskList from "@/components/TaskList";
import { Task } from "@/lib/types";

import { sampleTasks } from "@/lib/sample-data";

interface TasksPageProps {
  searchParams: Promise<{status?:string; page?:string}>;
}

export default async function TasksPage({searchParams}:TasksPageProps) {
  const {status} = await searchParams;
  let tasks: Task[] = sampleTasks;
  if(status != undefined) {
    tasks = [];
    for(const task of sampleTasks) {
      if( task.status === status) {
        tasks.push(task);
      }
    }
  }
  return (
    <div className="min-h-screen">

      <main className="mx-auto max-w-5xl px-4 py-8 ">
        <h1 className="mb-6 text-2xl font-bold">tasko 할 일 목록</h1>
        <StatusFilter current={status} />
        <Section title={`전체 ${sampleTasks.length}개`}>
          <TaskList tasks={tasks}/>
        </Section>
    </main>
    </div>
    
  );
}
