// app/tasks/layout.tsx
import type { ReactNode } from "react";

interface TasksLayoutProps {
  children: ReactNode;
  // [추가]
  stats: ReactNode;
  
  // [추가]
  modal: ReactNode;
}

// [수정] 이전: export default function TasksLayout({ children }: TasksLayoutProps) {
export default function TasksLayout({ children, stats, modal }: TasksLayoutProps) {
  // [수정 시작] 이전: return <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>;
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      {stats}
      {children}
      {modal}
    </main>
  );
  // [수정 끝]
}