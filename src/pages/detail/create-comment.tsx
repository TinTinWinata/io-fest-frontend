import { ChangeEvent } from 'react';

export default function CreateComment({
  handler,
}: {
  handler: (comment: string) => Promise<void>;
}) {
  const handleOnSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    await handler(comment);
    e.target.comment.value = '';
  };
  return (
    <>
      <hr className="my-5" />
      <form onSubmit={handleOnSubmit} className="w-full px-2 pb-3">
        {/* Button */}
        <input
          type="text"
          name="comment"
          className="mt-2 bg-transparent border border-opacity-50 dark:border-orange-800 border-blue-800 w-full mb-2 p-2 text-lg rounded-lg focus:outline-none"
          placeholder="Insert new comment ..."
        />
        <button
          type="submit"
          className="inline-flex center w-full text-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white dark:bg-orange-600 dark:hover:bg-orange-700 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          Create New Comment
        </button>
      </form>
    </>
  );
}
