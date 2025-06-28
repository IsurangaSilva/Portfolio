import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/isuranga', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/isuranga', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com/isuranga', label: 'Twitter' },
  { icon: FaEnvelope, href: 'mailto:contact@isuranga.com', label: 'Email' },
];

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Contact', href: '/#contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-dark-200 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-bold text-xl gradient-text">Isuranga</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              A passionate developer focused on creating interactive, accessible, and responsive web experiences.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-300 mt-10 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {currentYear} Isuranga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
