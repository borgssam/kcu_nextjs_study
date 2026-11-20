// app/tasks/page.tsx
import Section from "@/components/Section";
// import TaskCard from "@/components/TaskCard";
import TaskList from "@/components/TaskList"
import { sampleTasks } from "@/lib/sample-data";

export default function TasksPage() {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="flex justify-between px-4 py-4 mx-auto items-center max-w-5xl">
          <div className="text-xl font-bold text-blue-600">tasko</div>
          <nav className="flex gap-6 text-gray-700">
            <a href="/tasks" className="hover:text-blue-600">할일</a>
          </nav>
        </div>
      </header>


      <main className="mx-auto max-w-5xl px-4 py-8 ">
        <h1 className="mb-6 text-2xl font-bold">tasko 할 일 목록</h1>
        <Section title={`전체 ${sampleTasks.length}개`}>
          <TaskList tasks={sampleTasks}/>
        </Section>
    </main>
    </div>
    
  );
}
