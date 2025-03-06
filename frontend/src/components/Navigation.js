'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
              LeadManager
            </span>
          </div>
          <div className="flex space-x-1">
            <Link 
              href="/"
              className={`px-4 py-2 rounded-lg my-3 transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-indigo-500 text-white' 
                  : 'text-gray-300 hover:bg-slate-800'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              href="/add"
              className={`px-4 py-2 rounded-lg my-3 transition-all duration-200 ${
                isActive('/add') 
                  ? 'bg-indigo-500 text-white' 
                  : 'text-gray-300 hover:bg-slate-800'
              }`}
            >
              New Lead
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 