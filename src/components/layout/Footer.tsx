export function Footer() {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer className="flex h-12 items-center justify-center border-t border-zinc-800 text-zinc-400 mt-16">
      Copyright © {currentYear}. All rights reserved.

      <div></div>
    </footer>
  )
}
