import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";

import SectionTitle from "./SectionTitle";
import { profile } from "../data/profile";

const contacts = [
    {
        icon: <FaEnvelope size={20} />,
        title: "Email",
        value: profile.email,
        link: `mailto:${profile.email}`,
    },
    {
        icon: <FaGithub size={20} />,
        title: "GitHub",
        value: "github.com/azzaaass",
        link: profile.github,
    },
    {
        icon: <FaLinkedin size={20} />,
        title: "LinkedIn",
        value: "Let's connect",
        link: profile.linkedin,
    },
    {
        icon: <FaInstagram size={20} />,
        title: "Instagram",
        value: "@azzaaass",
        link: profile.instagram,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-28 bg-surface border-t border-line"
        >
            <div className="max-w-7xl mx-auto px-6">
                <SectionTitle title="Let's Work Together" subtitle="contact" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 max-w-2xl"
                >
                    <h3 className="font-display text-3xl font-semibold mb-4 text-ink">
                        Have an idea or opportunity?
                    </h3>

                    <p className="text-ink-soft leading-8">
                        I'm always open to discussing new projects,
                        freelance work, collaborations, or full-time
                        opportunities. Feel free to reach out through any
                        platform below.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {contacts.map((item, index) => (
                        <motion.a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -6,
                            }}
                            className="
                                group
                                bg-bg
                                rounded-2xl
                                p-7
                                border
                                border-line
                                hover:border-accent/40
                                transition-all
                                duration-300
                            "
                        >
                            <div
                                className="
                                    w-12
                                    h-12
                                    rounded-xl
                                    bg-surface
                                    border
                                    border-line
                                    text-ink-soft
                                    flex
                                    items-center
                                    justify-center
                                    mb-6
                                    group-hover:bg-accent
                                    group-hover:border-accent
                                    group-hover:text-white
                                    transition
                                "
                            >
                                {item.icon}
                            </div>

                            <h4 className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                                {item.title}
                            </h4>

                            <p className="mt-2 text-ink font-medium break-all">
                                {item.value}
                            </p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
