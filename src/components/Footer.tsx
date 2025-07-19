
import { GraduationCap, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const quickLinks = [
    { href: '/ai-assistant', label: 'AI Assistant' },
    { href: '/faq', label: 'FAQ' },
    { href: '/dashboard', label: 'Calculators' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
]

export function Footer() {
    return (
        <footer className="bg-[#1C2033] text-white">
            <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* SRM Guide Section */}
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
                        <GraduationCap className="h-8 w-8 text-primary" />
                        <span>SRM Guide</span>
                    </Link>
                    <p className="text-gray-400">
                        Your comprehensive guide to navigating SRM University. From academics to campus life, we&apos;re here to help freshers succeed in their college journey.
                    </p>
                    <div className="flex items-center space-x-4">
                        <a href="https://www.instagram.com/nithinreddy3093" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/nithin-marthala/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {quickLinks.map(link => (
                            <li key={link.href}>
                                <Link href={link.href} className="text-gray-400 hover:text-white hover:underline transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <span>SRM University, Chennai</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <a href="mailto:marthalanithinreddy3093@gmail.com" className="hover:text-white hover:underline transition-colors break-all">
                                marthalanithinreddy3093@gmail.com
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                            <a href="tel:+917093569420" className="hover:text-white hover:underline transition-colors">
                                +91 7093569420
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 py-6">
                <p className="text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} SRM Guide. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
