import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "../contexts/AuthContext";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();

  function handleLogout() {
    logout();
    setLocation("/login"); // redirect to login after logging out
  }

  // Define navigation links based on user role
  const publicLinks = [
    { href: "/", label: "Home" },
    { href: "/curriculum", label: "Curriculum" },
    { href: "/resources", label: "Resources" },
  ];

  const studentLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/module-1", label: "Module 1" },
  ];

  const adminLinks = [
    { href: "/admin", label: "Admin Dashboard" },
    { href: "/admin/students", label: "Students" },
    { href: "/admin/analytics", label: "Analytics" },
  ];

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-lg font-bold">GitPolish LMS</a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          {publicLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="hover:underline">{link.label}</a>
            </Link>
          ))}
          {user && user.role === "student" &&
            studentLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="hover:underline">{link.label}</a>
              </Link>
            ))}
          {user && user.role === "admin" &&
            adminLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="hover:underline">{link.label}</a>
              </Link>
            ))}
          {!user ? (
            <Link href="/login">
              <a className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
                Login
              </a>
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-500"
            >
              Logout
            </button>
          )}
        </div>
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
            &#9776;
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
          {publicLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                onClick={() => setMobileOpen(false)}
                className="block py-2"
              >
                {link.label}
              </a>
            </Link>
          ))}
          {user && user.role === "student" &&
            studentLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setMobileOpen(false)}
                  className="block py-2"
                >
                  {link.label}
                </a>
              </Link>
            ))}
          {user && user.role === "admin" &&
            adminLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setMobileOpen(false)}
                  className="block py-2"
                >
                  {link.label}
                </a>
              </Link>
            ))}
          {!user ? (
            <Link href="/login">
              <a
                onClick={() => setMobileOpen(false)}
                className="block py-2 bg-blue-600 rounded text-center hover:bg-blue-500"
              >
                Login
              </a>
            </Link>
          ) : (
            <button
              onClick={() => {
                setMobileOpen(false);
                handleLogout();
              }}
              className="block w-full py-2 bg-red-600 rounded text-center hover:bg-red-500"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
