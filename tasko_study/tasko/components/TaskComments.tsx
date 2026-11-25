// components/TaskComments.tsx
// [삭제] import CommentList from "@/components/CommentList";
// [추가]
import CommentSection from "@/components/CommentSection";
import { getComments } from "@/lib/data";

interface TaskCommentsProps {
  taskId: number;
}

export default async function TaskComments({ taskId }: TaskCommentsProps) {
  const comments = await getComments(taskId);
  // [수정] 이전: return <CommentList comments={comments} />;
  return <CommentSection taskId={taskId} comments={comments} />;
}