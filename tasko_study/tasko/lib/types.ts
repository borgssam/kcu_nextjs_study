// lib/types.ts
export type TaskStatus = "todo" | "doing" | "done";

export interface Task {
  id: number;
  title: string;
  content: string;
  status: TaskStatus;
  assignee: string;
  createdAt: string;
}

export interface Comment {
  id: number;
  taskId: number;
  author: string;
  content: string;
  createdAt: string;
}

export const STATUS_LABEL: Record<TaskStatus, string> = {
  todo: "할 일",
  doing: "진행 중",
  done: "완료",
};
