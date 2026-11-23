// app/tasks/[id]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import CommentsSkeleton from "@/components/CommentsSkeleton";
import TaskCard from "@/components/TaskCard";
import TaskComments from "@/components/TaskComments";
import { getTask } from "@/lib/data";

interface TaskDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: TaskDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const task = await getTask(Number(id));
  if (!task) {
    return { title: "할 일 없음" };
  }
  return { title: task.title };
}

export default async function TaskDetailPage({ params }: TaskDetailPageProps) {
  const { id } = await params;
  const task = await getTask(Number(id));

  if (!task) {
    notFound();
  }

  return (
    <div className="max-w-2xl">
      <Link href="/tasks" className="mb-4 inline-block text-sm text-gray-500 hover:text-blue-600">
        ← 목록으로
      </Link>
      <TaskCard task={task} />
      <section className="mt-8">
        <h2 className="mb-4 text-lg font-semibold">댓글</h2>
        <Suspense fallback={<CommentsSkeleton />}>
          <TaskComments taskId={task.id} />
        </Suspense>
      </section>
    </div>
  );
}