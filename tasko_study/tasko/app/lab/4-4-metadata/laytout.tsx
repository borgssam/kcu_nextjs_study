// app/lab/4-4-metadata/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "메타 연습",
    template: "%s | 메타 연습",
  },
};

export default function MetadataLabLayout({ children }: { children: React.ReactNode }) {
  return children;
}