"use client";

import React, { useState, useEffect } from "react";
import {
  Video,
  Brain,
  Github,
  ChevronRight,
  Menu,
  X,
  Zap,
  Shield,
  Mail,
  Sun,
  Moon,
  Sparkles,
  Users,
  Lock,
  MessageSquare,
} from "lucide-react";
import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TEAM = [
  { name: "Aban Asghar",      image: "/aban-asghar.jpeg",      role: "Core Backend Architect",  tag: "Infrastructure & APIs"  },
  { name: "Shailendra Singh", image: "/shailendra-singh.jpeg", role: "Lead UI/UX Designer",     tag: "Product & Visuals"      },
  { name: "Shahnawaz Khan",   image: "/shahnawaz-khan.jpeg",   role: "Frontend Developer",      tag: "React & Next.js"        },
  { name: "Shahnwaaz Ali",    image: "/shahnwaaz-ali.jpeg",    role: "Integration Engineer",    tag: "Services & DevOps"      },
  { name: "Shoaib Akhtar",    image: "/shoaib-akhtar.jpeg",    role: "QA & Testing Engineer",   tag: "Quality Assurance"      },
];

const FEATURES = [
  { icon: Video,        color: "text-blue-400",    bg: "from-blue-500/20 to-blue-600/10",     border: "border-blue-500/30",    title: "Voice & Video Calling",     description: "Crystal-clear real-time calls powered by LiveKit WebRTC with adaptive bitrate streaming."           },
  { icon: Brain,        color: "text-violet-400",  bg: "from-violet-500/20 to-violet-600/10", border: "border-violet-500/30",  title: "Mistral AI Assistant",      description: "Built-in AI assistant for intelligent suggestions, summaries, and conversational help."              },
  { icon: Shield,       color: "text-emerald-400", bg: "from-emerald-500/20 to-emerald-600/10",border:"border-emerald-500/30", title: "End-to-End Encryption",     description: "Every message and call is protected with military-grade encryption. Privacy is non-negotiable."     },
  { icon: Zap,          color: "text-amber-400",   bg: "from-amber-500/20 to-amber-600/10",   border: "border-amber-500/30",   title: "Real-Time Messaging",       description: "Instant delivery via Convex's reactive database — no polling, no delays, just live updates."          },
  { icon: Users,        color: "text-pink-400",    bg: "from-pink-500/20 to-pink-600/10",     border: "border-pink-500/30",    title: "Group Conversations",       description: "Create groups, manage members, and collaborate seamlessly inside one unified interface."             },
  { icon: Lock,         color: "text-cyan-400",    bg: "from-cyan-500/20 to-cyan-600/10",     border: "border-cyan-500/30",    title: "Secure Authentication",     description: "Powered by Clerk for frictionless sign-in with enterprise-grade access control and session management."},
];

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark]         = useState(true);
  const [scrolled, setScrolled]     = useState(false);
  const { isSignedIn, isLoaded }    = useAuth();
  const router                      = useRouter();

  // Redirect authenticated users straight to the app
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/conversations");
    }
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Show nothing while Clerk loads or while redirecting
  if (!isLoaded || isSignedIn) return null;

  /* ── Tailwind class helpers ── */
  const page   = isDark ? "bg-[#080b14] text-white"        : "bg-[#f0f4ff] text-slate-900";
  const muted  = isDark ? "text-slate-400"                  : "text-slate-500";
  const nav    = scrolled
    ? isDark
      ? "bg-[#080b14]/85 border-b border-white/10 backdrop-blur-xl shadow-2xl"
      : "bg-white/85 border-b border-slate-200 backdrop-blur-xl shadow-md"
    : "bg-transparent";
  const card   = isDark
    ? "bg-white/5 border border-white/10 backdrop-blur-xl"
    : "bg-white/80 border border-slate-200 backdrop-blur-sm shadow-sm";
  const cardHover = isDark ? "hover:bg-white/10 hover:border-white/20" : "hover:bg-white hover:border-slate-300 hover:shadow-md";
  const input  = isDark
    ? "bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-blue-500/60 focus:bg-white/8"
    : "bg-white border border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-500";
  const pill   = isDark ? "bg-blue-500/15 text-blue-300 border border-blue-500/30" : "bg-blue-50 text-blue-600 border border-blue-200";
  const tag    = isDark ? "bg-white/8 text-slate-300"  : "bg-slate-100 text-slate-500";
  const divider = isDark ? "border-white/10" : "border-slate-200";
  const mobileMenu = isDark ? "bg-[#080b14]/98 backdrop-blur-xl border-b border-white/10" : "bg-white/98 backdrop-blur-xl border-b border-slate-200";
  const iconBox = isDark ? "bg-blue-500/15 border border-blue-500/30" : "bg-blue-50 border border-blue-100";
  const navLinkHover = isDark ? "hover:text-white hover:bg-white/8" : "hover:text-slate-900 hover:bg-slate-100";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${page}`}>

      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl ${isDark ? "bg-blue-600/10" : "bg-blue-400/15"}`} />
        <div className={`absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full blur-3xl ${isDark ? "bg-violet-600/10" : "bg-violet-400/10"}`} />
        <div className={`absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl ${isDark ? "bg-cyan-600/8" : "bg-cyan-400/8"}`} />
      </div>

      {/* ══════════════════════════ NAVBAR ══════════════════════════ */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${nav}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-200">
                <Image src="/logo.png" alt="Qubis" width={36} height={36} className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Qubis
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {["About","Features","Team","Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${muted} ${navLinkHover}`}>
                  {l}
                </a>
              ))}
            </div>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-3">
              <button onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-xl transition-all ${card} ${cardHover}`} aria-label="Toggle theme">
                {isDark
                  ? <Sun size={18} className="text-amber-400" />
                  : <Moon size={18} className="text-slate-500" />}
              </button>
              <SignInButton mode="modal" appearance={{ baseTheme: isDark ? dark : undefined }} forceRedirectUrl="/conversations">
                <button className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${muted} ${navLinkHover}`}>
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal" appearance={{ baseTheme: isDark ? dark : undefined }} forceRedirectUrl="/conversations">
                <button className="px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200">
                  Get Started
                </button>
              </SignUpButton>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-2">
              <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-xl ${card}`}>
                {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-500" />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`p-2 rounded-xl ${card}`}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${mobileMenu}`}>
            <div className="px-4 py-4 space-y-1">
              {["About","Features","Team","Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium ${muted} ${navLinkHover}`}>
                  {l}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <SignInButton mode="modal" appearance={{ baseTheme: isDark ? dark : undefined }} forceRedirectUrl="/conversations">
                  <button className={`w-full px-4 py-3 rounded-xl text-sm font-medium ${card} ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal" appearance={{ baseTheme: isDark ? dark : undefined }} forceRedirectUrl="/conversations">
                  <button className="w-full px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white">
                    Get Started
                  </button>
                </SignUpButton>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ══════════════════════════ HERO ══════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase ${pill}`}>
            <Sparkles size={12} />
            <span>Now Live — Qubis 2026</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Connect Beyond
            </span>
            <br />
            <span>Boundaries</span>
          </h1>

          <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed ${muted}`}>
            Qubis is a next-generation communication platform — real-time messaging,
            HD video calls, and an AI assistant, all wrapped in a beautifully encrypted interface.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SignUpButton mode="modal" appearance={{ baseTheme: isDark ? dark : undefined }} forceRedirectUrl="/conversations">
              <button className="flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5">
                Start for Free <ChevronRight size={18} />
              </button>
            </SignUpButton>
            <a href="#features"
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-medium transition-all duration-200 ${card} ${cardHover} ${isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}`}>
              Explore Features
            </a>
          </div>

          {/* Stats */}
          <div className={`flex flex-wrap items-center justify-center gap-8 pt-6 border-t ${divider}`}>
            {[
              { value: "Real-Time", label: "Messaging Engine"  },
              { value: "256-bit",   label: "Encryption"        },
              { value: "AI-Powered",label: "Assistance"         },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className={`text-xs mt-0.5 ${muted}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ ABOUT ══════════════════════════ */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`rounded-3xl p-8 sm:p-12 ${card} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 pointer-events-none rounded-3xl" />
            <div className="relative max-w-3xl">
              <span className={`text-xs font-semibold tracking-widest uppercase ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
                The Vision Behind{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Qubis
                </span>
              </h2>
              <p className={`text-lg leading-relaxed ${muted}`}>
                Qubis was conceived in 2026 with a singular mission: to build a communication
                platform that puts people first. The name is inspired by the concept of a cube —
                a symbol of strength, stability, and multi-dimensional thinking. Our team of five
                engineers and designers crafted every pixel and every API endpoint with obsessive
                attention to performance, privacy, and experience.
              </p>
              <p className={`text-lg leading-relaxed mt-4 ${muted}`}>
                From real-time WebRTC calls to AI-powered chat assistance, Qubis is built to be
                the last communication app you will ever need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FEATURES ══════════════════════════ */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className={`text-xs font-semibold tracking-widest uppercase ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Everything You Need,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Nothing You Don&apos;t
              </span>
            </h2>
            <p className={`text-base mt-4 max-w-xl mx-auto ${muted}`}>
              Six powerful features working in harmony to deliver a seamless communication experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title}
                className={`group rounded-2xl p-6 border transition-all duration-300 ${card} ${cardHover} hover:-translate-y-1`}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.bg} border ${f.border} flex items-center justify-center mb-5`}>
                  <f.icon size={22} className={f.color} />
                </div>
                <h3 className={`text-base font-semibold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                  {f.title}
                </h3>
                <p className={`text-sm leading-relaxed ${muted}`}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ TEAM ══════════════════════════ */}
      <section id="team" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className={`text-xs font-semibold tracking-widest uppercase ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              The People
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Meet the{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Minds Behind Qubis
              </span>
            </h2>
            <p className={`text-base mt-4 max-w-xl mx-auto ${muted}`}>
              A team of five passionate builders who shipped Qubis from concept to production in 2026.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {TEAM.map((member) => (
              <div key={member.name}
                className={`group w-full sm:w-52 rounded-2xl p-6 text-center border transition-all duration-300 ${card} ${cardHover} hover:-translate-y-1`}>
                <div className="relative mx-auto w-24 h-24 mb-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="relative w-24 h-24 rounded-full object-cover object-top ring-2 ring-white/10 group-hover:ring-blue-500/40 transition-all duration-300"
                  />
                </div>
                <h3 className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                  {member.name}
                </h3>
                <p className={`text-xs mt-1 ${muted}`}>{member.role}</p>
                <span className={`inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium ${tag}`}>
                  {member.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ CONTACT ══════════════════════════ */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className={`text-xs font-semibold tracking-widest uppercase ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Talk
              </span>
            </h2>
          </div>

          <div className={`max-w-4xl mx-auto grid md:grid-cols-2 gap-8 rounded-3xl p-8 sm:p-12 ${card}`}>
            {/* Info */}
            <div className="space-y-6">
              <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>Get in Touch</h3>
              <p className={`text-sm leading-relaxed ${muted}`}>
                Have a question, feedback, or just want to say hi? We&apos;d love to hear from you.
                Drop us a message and we&apos;ll get back within 24 hours.
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBox}`}>
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className={`text-xs ${muted} mb-0.5`}>Email us at</p>
                  <a href="mailto:chatwithqubis@gmail.com"
                    className={`text-sm font-medium ${isDark ? "text-slate-200 hover:text-white" : "text-slate-700 hover:text-slate-900"} transition-colors`}>
                    chatwithqubis@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${isDark ? "bg-violet-500/15 border border-violet-500/30" : "bg-violet-50 border border-violet-100"}`}>
                  <MessageSquare size={18} className="text-violet-400" />
                </div>
                <div>
                  <p className={`text-xs ${muted} mb-0.5`}>Or just</p>
                  <SignUpButton mode="modal" appearance={{ baseTheme: isDark ? dark : undefined }} forceRedirectUrl="/conversations">
                    <button className={`text-sm font-medium ${isDark ? "text-slate-200 hover:text-white" : "text-slate-700 hover:text-slate-900"} transition-colors`}>
                      Open the app and chat with us →
                    </button>
                  </SignUpButton>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className={`block text-xs font-medium mb-2 ${muted}`}>Your Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/30 ${input}`}
                />
              </div>
              <div>
                <label className={`block text-xs font-medium mb-2 ${muted}`}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all focus:ring-2 focus:ring-blue-500/30 ${input}`}
                />
              </div>
              <button type="submit"
                className="w-full px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FOOTER ══════════════════════════ */}
      <footer className={`py-10 px-4 border-t ${divider}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg overflow-hidden">
              <Image src="/logo.png" alt="Qubis" width={28} height={28} className="w-full h-full object-cover" />
            </div>
            <span className={`text-sm font-semibold ${muted}`}>Qubis</span>
          </div>
          <p className={`text-xs text-center ${muted}`}>
            © 2026 Qubis. Crafted with care by the Qubis Team. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/MohdUmar07/qubis" target="_blank" rel="noopener noreferrer"
              className={`transition-colors ${isDark ? "text-slate-500 hover:text-slate-200" : "text-slate-400 hover:text-slate-700"}`}>
              <Github size={18} />
            </a>
            <a href="mailto:chatwithqubis@gmail.com"
              className={`transition-colors ${isDark ? "text-slate-500 hover:text-slate-200" : "text-slate-400 hover:text-slate-700"}`}>
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}