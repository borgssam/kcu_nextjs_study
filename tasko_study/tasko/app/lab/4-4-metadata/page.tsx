// app/lab/4-4-metadata/page.tsx
import Link from "next/link";

export default function MetadataLabPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">4.4 메타데이터</h1>
      <ul className="space-y-2 text-blue-600">
        <li><Link href="/lab/4-4-metadata/meta" className="hover:underline">페이지 제목 정하기 (meta)</Link></li>
        <li><Link href="/lab/4-4-metadata/users/alice" className="hover:underline">데이터로 제목 정하기 (users/alice)</Link></li>
      </ul>
    </div>
  );
}