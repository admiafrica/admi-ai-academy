import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-16 h-8 overflow-hidden">
                <Image 
                  src="/Logo admi 2.png" 
                  alt="ADMI" 
                  fill
                  className="object-contain scale-125 brightness-0 invert"
                  style={{ objectPosition: 'center' }}
                />
              </div>
              <div className="px-3 py-1 rounded-md bg-ai-primary text-xs font-semibold text-white">
                AI Academy
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Build with AI. Create the Future.
            </p>
            <p className="text-gray-500 text-xs">
              Part of the Africa Digital Media Institute family
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/paths" className="text-gray-400 hover:text-ai-primary text-sm transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-ai-primary text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="text-gray-400 hover:text-ai-primary text-sm transition-colors">
                  Enrol Now
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="text-gray-400 hover:text-ai-primary text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* ADMI Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">ADMI Programs</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://admi.africa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ai-teal text-sm transition-colors"
                >
                  Diploma Programmes
                </a>
              </li>
              <li>
                <a 
                  href="https://admi.africa/about" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ai-teal text-sm transition-colors"
                >
                  About ADMI
                </a>
              </li>
              <li>
                <a 
                  href="https://admi.africa/admissions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ai-teal text-sm transition-colors"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a 
                  href="https://admi.africa/student-support" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ai-teal text-sm transition-colors"
                >
                  Student Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 ai@admi.africa</li>
              <li>📱 +254 123 456 789</li>
              <li>📍 Nairobi, Kenya</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-ai-primary transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-ai-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-ai-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} ADMI AI Academy. All rights reserved. A project of Africa Digital Media Institute.</p>
        </div>
      </div>
    </footer>
  );
}
