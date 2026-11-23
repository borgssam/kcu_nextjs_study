// app/lab/4-4-metadata/meta/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "메타 예제",
};

export default function MetaPage() {
  return <h1 className="p-8 text-2xl">브라우저 탭의 제목을 보세요</h1>;
}