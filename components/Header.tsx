'use client';
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Layout,
  Monitor,
  Palette,
  BookOpen,
  Package,
  Wrench,
  Book,
  Orbit,
} from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface DropdownItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href?: string; // optional if you want clickable links later
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const dropdownItems: Record<string, DropdownItem[]> = {
    PRODUCT: [
      {
        icon: <Orbit className="w-5 h-5 text-indigo-500" />,
        title: "Cosmikit",
        desc: "Build a custom design system tailored for your product.",
        href: "/cosmikit",
      },
      {
        icon: <Sparkles className="w-5 h-5 text-purple-500" />,
        title: "Spark",
        desc: "Like Dribbble, but with code integrated into your Cosmikit design system.",
        href: "/spark",
      },
    ],
    SERVICES: [
      {
        icon: <Layout className="w-5 h-5 text-blue-500" />,
        title: "Product Design",
        desc: "Craft intuitive, scalable, and user‑centric digital experiences.",
        href: "/services/product-design",
      },
      {
        icon: <Monitor className="w-5 h-5 text-green-500" />,
        title: "Website",
        desc: "Build modern, high‑performing websites to attract and convert.",
        href: "/services/website",
      },
      {
        icon: <Palette className="w-5 h-5 text-pink-500" />,
        title: "Brand",
        desc: "Design impactful brands that resonate and earn trust.",
        href: "/services/brand",
      },
    ],
    RESOURCES: [
      {
        icon: <Package className="w-5 h-5 text-orange-500" />,
        title: "Assets",
        desc: "Access templates, illustrations, and creative assets.",
        href: "/resources/assets",
      },
      {
        icon: <Wrench className="w-5 h-5 text-blue-600" />,
        title: "Tools",
        desc: "Leverage utilities and plugins to speed up your workflow.",
        href: "/resources/tools",
      },
      {
        icon: <Book className="w-5 h-5 text-teal-600" />,
        title: "Docs",
        desc: "Read guides and documentation to get started quickly.",
        href: "/resources/docs",
      },
      {
        icon: <BookOpen className="w-5 h-5 text-purple-600" />,
        title: "Design Systems",
        desc: "Explore design systems and patterns you can adapt.",
        href: "/resources/design-systems",
      },
    ],
  };

  return (
    <header className="w-full border-b border-neutral-200 bg-white text-black font-mono relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/foxpatch-logo.svg"
            alt="Foxpatch Logo"
            className="h-10 w-auto sm:h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm relative">
          {["PRODUCT", "SERVICES", "RESOURCES"].map((label) => (
            <div key={label} className="relative">
              <button
                onClick={() => setOpenMenu(openMenu === label ? null : label)}
                className="flex items-center gap-1 hover:text-neutral-600"
              >
                {label}
                <ChevronDown className="w-4 h-4" />
              </button>
              {openMenu === label && (
                <div className="absolute left-0 mt-6 w-80 bg-white border border-neutral-200 shadow-lg rounded-2xl p-4 z-50">
                  {dropdownItems[label].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href || "#"}
                      className="flex items-start gap-3 p-3 hover:bg-neutral-50 rounded-lg transition"
                    >
                      {item.icon}
                      <div>
                        <p className="font-semibold text-sm text-[#141414]">{item.title}</p>
                        <p className="text-xs text-neutral-600">{item.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/pricing" className="hover:text-neutral-600">PRICING</a>
        </nav>

        {/* Right Side: CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push('/LetsGetStarted')}
            className="px-4 py-2 bg-black text-white rounded-full hover:bg-neutral-800"
          >
            Let's get started
          </button>

          {/* Hamburger Menu */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 shadow-lg p-6">
          {["PRODUCT", "SERVICES", "RESOURCES"].map((label) => (
            <div key={label} className="mb-4">
              <button
                onClick={() => setOpenMenu(openMenu === label ? null : label)}
                className="flex justify-between items-center w-full py-2 text-left font-medium text-[#141414]"
              >
                {label}
                <ChevronDown className="w-4 h-4" />
              </button>
              {openMenu === label && (
                <div className="mt-2 bg-neutral-50 border border-neutral-200 rounded-xl p-4">
                  {dropdownItems[label].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href || "#"}
                      className="flex items-start gap-3 p-3 hover:bg-neutral-100 rounded-lg transition"
                    >
                      {item.icon}
                      <div>
                        <p className="font-semibold text-sm text-[#141414]">{item.title}</p>
                        <p className="text-xs text-neutral-600">{item.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/pricing" className="block py-2 text-[#141414] font-medium">PRICING</a>
        </div>
      )}
    </header>
  );
}