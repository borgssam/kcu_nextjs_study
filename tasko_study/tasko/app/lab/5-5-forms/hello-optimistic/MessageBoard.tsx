"use client";
import { addMessageAction } from "./actions";

interface MessageBoardProps {
  messages: string[];
}

export default function MessageBoard({ messages }: MessageBoardProps) {
  async function handleAdd(formData: FormData) {
    await addMessageAction(formData);
  }

  return (
    <div className="p-8">
      <form className="mb-4" action={handleAdd}>
        <input name="message" placeholder="응원메시지" className="mr-2 rounded border px-3 py-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">남기기</button>
      </form>
      <ul className="list-disc pl-6">
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}
