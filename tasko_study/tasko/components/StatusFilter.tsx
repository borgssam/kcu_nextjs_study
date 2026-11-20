
import Link from "next/link";
import { STATUS_LABEL } from "@/lib/types";
import type { TaskStatus } from "@/lib/types";

const STATUES : TaskStatus[] = ["todo","doing","done"];

interface StatusFilterProps{
  current?:string;
}

function linkClass(isActive: boolean): string {
  const base = "rounded-full px-4 py-1 text-sm";
  if(isActive) {
    return base + " bg-blue-600 text-white";
  }
  return base + "bg-white text-gray-700 hover:bg-gray-100";
}
export default function StatusFilter({current}:StatusFilterProps){
  return (
    <div>
      <Link href="/tasks" className={linkClass(current === undefined)} >전체</Link>
      {
        STATUES.map(
          (status)=>(
            <Link href={`/tasks?status=${status}`} className={linkClass(current === status)}>
              {STATUS_LABEL[status]}
            </Link>

          )

        )
      }

    </div>

  )

}