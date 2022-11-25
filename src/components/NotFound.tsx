function NotFound({ text }: { text: string }) {
  return (
    <div className="flex flex-col justify-center mx-auto items-start pb-16 max-w-3xl">
      <h1 className="font-bold text-3xl tracking-tight mb-4 text-white">
        No {text} found.
      </h1>
      <span className="text-base text-gray-400">
        <span>This may happen due to: </span>
        <ul className="px-5 text-gray-500">
          <li>- The season has not started yet.</li>
          <li>- The group stage draw have not been made yet.</li>
          <li>
            - The API request capacity has been reached{" "}
            <span className="font-bold">(100 requests per day).</span>
          </li>
        </ul>
      </span>
    </div>
  );
}

export default NotFound;
