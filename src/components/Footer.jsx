import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaEnvelope,
} from "react-icons/fa";

import { profile } from "../data/profile";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-line bg-bg">
            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Logo */}
                    <div className="text-center md:text-left">
                        <h2 className="font-display text-xl font-semibold text-ink flex items-center justify-center md:justify-start gap-2">
                            <span className="signal-dot" />
                            {profile.name}
                        </h2>

                        <p className="font-mono text-xs text-ink-faint mt-2">
                            {profile.title.toLowerCase()}
                        </p>
                    </div>

                    {/* Menu */}
                    <div className="flex flex-wrap justify-center gap-8 font-mono text-sm text-ink-soft">

                        <a
                            href="#about"
                            className="hover:text-accent transition"
                        >
                            about
                        </a>

                        <a
                            href="#portofolio"
                            className="hover:text-accent transition"
                        >
                            portofolio
                        </a>

                        <a
                            href="#contact"
                            className="hover:text-accent transition"
                        >
                            contact
                        </a>

                    </div>

                    {/* Social */}
                    <div className="flex gap-3">

                        <a
                            href={`mailto:${profile.email}`}
                            className="w-10 h-10 rounded-lg border border-line flex items-center justify-center text-ink-soft hover:text-accent hover:border-accent/40 transition"
                        >
                            <FaEnvelope size={16} />
                        </a>

                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-lg border border-line flex items-center justify-center text-ink-soft hover:text-accent hover:border-accent/40 transition"
                        >
                            <FaGithub size={16} />
                        </a>

                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-lg border border-line flex items-center justify-center text-ink-soft hover:text-accent hover:border-accent/40 transition"
                        >
                            <FaLinkedin size={16} />
                        </a>

                        <a
                            href={profile.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 rounded-lg border border-line flex items-center justify-center text-ink-soft hover:text-accent hover:border-accent/40 transition"
                        >
                            <FaInstagram size={16} />
                        </a>

                    </div>

                </div>

                <div className="mt-10 pt-6 border-t border-line text-center font-mono text-xs text-ink-faint">
                    © {year} {profile.name} — built with React &amp; Tailwind
                </div>

            </div>
        </footer>
    );
}
