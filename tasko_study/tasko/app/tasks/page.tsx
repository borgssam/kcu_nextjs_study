// app/tasks/page.tsx
import type { Metadata } from "next";
import Pagination from "@/components/Pagination";
import Section from "@/components/Section";
import StatusFilter from "@/components/StatusFilter";
import TaskList from "@/components/TaskList";
import { getTasks } from "@/lib/data";
import { parsePage, parseStatus } from "@/lib/types";
import {wait} from "@/lib/data";

export const metadata: Metadata = {
  title: "할 일 목록",
};

interface TasksPageProps {
  searchParams: Promise<{ status?: string; page?: string }>;
}

export default async function TasksPage({ searchParams }: TasksPageProps) {

  // throw new Error("데이터 저장소에 연결할수 없습니다.");

  const params = await searchParams;
  const status = parseStatus(params.status);
  const page = parsePage(params.page);
  const result = await getTasks(status, page);
  
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold">할 일 목록</h1>
      <StatusFilter current={status} />
      <Section title={`${result.total}개`}>
        <TaskList tasks={result.tasks} />
      </Section>
      <Pagination total={result.total} page={page} status={status} />
    </>
  );
}
