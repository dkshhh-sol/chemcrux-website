import Link from 'next/link';

const Navbar = () => (
  <nav className="w-full bg-gray-200 dark:bg-gray-800 p-4 flex items-center justify-between">
    <span className="font-bold text-xl text-chemcrux-primary">ChemCrux</span>
    <div className="flex gap-6">
      <Link href="/" className="text-chemcrux-primary hover:underline">Home</Link>
      <Link href="/lectures" className="text-chemcrux-primary hover:underline">Lectures</Link>
      <Link href="/notes" className="text-chemcrux-primary hover:underline">Notes</Link>
    </div>
  </nav>
);
export default Navbar;
