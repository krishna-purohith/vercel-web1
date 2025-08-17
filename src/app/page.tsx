export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans">
      {/* Header */}
      <header className="w-full p-6 shadow-md bg-white dark:bg-zinc-900">
        <h1 className="text-2xl font-bond text-center">My Next.js + TS App</h1>
      </header>
      <section className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-4">Hello World</h2>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
          This is a starter home page built with Next.js + Tailwind.
        </p>
        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
          Click Me
        </button>
      </section>

      <footer className="w-full p-4 text-center border-t text-sm text-gray-500 dark:text-gray-400">
        {new Date().getFullYear()} My App
      </footer>
    </main>
  );
}
