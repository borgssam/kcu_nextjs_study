"use client";
import { addMessageAction } from "./actions";
import {useOptimistic} from "react";

interface MessageBoardProps {
  messages: string[];
}

function addToList(current: string[], newMessage:string): string[] {
  const next = current.slice();
  next.push(newMessage + "(저장중...)");
  return next;
}

export default function MessageBoard({ messages }: MessageBoardProps) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, addToList);


  async function handleAdd(formData: FormData) {
    const value = formData.get("message");
    if(typeof value ==="string" && value.trim() !=="" ) {
      addOptimisticMessage(value.trim());
    }
    await addMessageAction(formData);
  }

  return (
    <div className="p-8">
      <form className="mb-4" action={handleAdd}>
        <input name="message" placeholder="응원메시지" className="mr-2 rounded border px-3 py-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">남기기</button>
      </form>
      <ul className="list-disc pl-6">
        {optimisticMessages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}
