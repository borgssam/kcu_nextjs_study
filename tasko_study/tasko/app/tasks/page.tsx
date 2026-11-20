// app/tasks/page.tsx
import Section from "@/components/Section";
import TaskCard from "@/components/TaskCard";
import { sampleTasks } from "@/lib/sample-data";

export default function TasksPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>tasko 할 일 목록</h1>
      <Section title={`전체 ${sampleTasks.length}개`}>
        {sampleTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Section>
    </main>
  );
}
