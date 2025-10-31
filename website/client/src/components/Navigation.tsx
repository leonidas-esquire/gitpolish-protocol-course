import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1E1E1E] border-b border-[#3E3E42] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="text-2xl font-bold text-[#4EC9B0]">GitPolish Protocol™</div>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/">
              <span className="text-[#D4D4D4] hover:text-[#4EC9B0] cursor-pointer transition-colors">Home</span>
            </Link>
            <Link href="/dashboard">
              <span className="text-[#D4D4D4] hover:text-[#4EC9B0] cursor-pointer transition-colors">Dashboard</span>
            </Link>
            <Link href="/curriculum">
              <span className="text-[#D4D4D4] hover:text-[#4EC9B0] cursor-pointer transition-colors">Curriculum</span>
            </Link>
            <Link href="/module-1">
              <span className="text-[#D4D4D4] hover:text-[#4EC9B0] cursor-pointer transition-colors">Module 1</span>
            </Link>
            <Link href="/certification">
              <span className="text-[#D4D4D4] hover:text-[#4EC9B0] cursor-pointer transition-colors">Certification</span>
            </Link>
            <Link href="/resources">
              <span className="text-[#D4D4D4] hover:text-[#4EC9B0] cursor-pointer transition-colors">Resources</span>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-6 h-6 text-[#D4D4D4]" />
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <div className="block py-2 text-[#D4D4D4] hover:text-[#4EC9B0]">Home</div>
          </Link>
          <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
            <div className="block py-2 text-[#D4D4D4] hover:text-[#4EC9B0]">Dashboard</div>
          </Link>
          <Link href="/curriculum" onClick={() => setMobileMenuOpen(false)}>
            <div className="block py-2 text-[#D4D4D4] hover:text-[#4EC9B0]">Curriculum</div>
          </Link>
          <Link href="/module-1" onClick={() => setMobileMenuOpen(false)}>
            <div className="block py-2 text-[#D4D4D4] hover:text-[#4EC9B0]">Module 1</div>
          </Link>
          <Link href="/certification" onClick={() => setMobileMenuOpen(false)}>
            <div className="block py-2 text-[#D4D4D4] hover:text-[#4EC9B0]">Certification</div>
          </Link>
          <Link href="/resources" onClick={() => setMobileMenuOpen(false)}>
            <div className="block py-2 text-[#D4D4D4] hover:text-[#4EC9B0]">Resources</div>
          </Link>
        </div>
      )}
    </nav>
  );
}
