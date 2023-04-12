import { FormEvent, useState } from "react";

export default function ReplyWrite() {
  const [text, setText] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setText(""); // clear the form
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4" action="#" method="POST">
      <textarea
        rows={5}
        form="comment"
        name="comment"
        id="comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
        placeholder="Add your comment..."
      />
      <div className="mt-2 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Write
        </button>
      </div>
    </form>
  );
}
