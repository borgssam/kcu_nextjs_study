// components/SiteHeader.tsx
import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <Image src="/logo.svg" alt="tasko 로고" width={32} height={32} />
          tasko
        </Link>
        <nav className="flex gap-6 text-gray-700">
          <Link href="/tasks" className="hover:text-blue-600">
            할 일
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
}