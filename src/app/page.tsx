// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-white mb-4">
        Testing Tailwind CSS
      </h1>
      <div className=" p-6 rounded-lg shadow-md">
        <p className="text-white mb-4">
        This is a paragraph with Tailwind CSS styles applied.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Test Button
        </button>
      </div>
    </main>
  );
}