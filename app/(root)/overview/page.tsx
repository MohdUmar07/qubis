"use client";

import React from 'react';
import { MessageSquare, Video, Brain, Github, Twitter, Linkedin, ChevronRight, Menu, X, Zap, Shield, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram, FaGlobe } from "react-icons/fa";
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { dark } from "@clerk/themes"; 
import Image from 'next/image';





const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const features = [
    {
      icon: <Video className="text-blue-400" size={32} />,
      title: "Voice & Video Calling",
      description: "Experience crystal-clear voice and video calls with our advanced communication infrastructure."
    },
    {
      icon: <Brain className="text-purple-400" size={32} />,
      title: "Mistral AI Integration",
      description: "Enhance your conversations with intelligent suggestions and automated assistance powered by Mistral AI."
    },
    {
      icon: <Shield className="text-green-400" size={32} />,
      title: "End-to-End Encryption",
      description: "Your conversations are protected with military-grade encryption, ensuring complete privacy."
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "Real-Time Messaging",
      description: "Instant message delivery with real-time typing indicators and read receipts."
    }
  ];

  return (

    
    <div className="landing-page min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">

      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Qubis</span>
            </div> */}
            <a href="/home" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Qubis Logo"
          width={40} 
          height={40} 
          className="h-10 w-10 mr-2"
        />
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Qubis
        </span>
      </a>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#about" className="hover:text-blue-400 px-3 py-2">About</a>
                <a href="#features" className="hover:text-blue-400 px-3 py-2">Features</a>
                <a href="#team" className="hover:text-blue-400 px-3 py-2">Team</a>
                <a href="#contact" className="hover:text-blue-400 px-3 py-2">Contact</a>
                

                <SignUpButton mode="modal" appearance={{baseTheme:dark}} forceRedirectUrl="/conversations">
                  <button className="ml-4 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"> Sign Up </button>
                </SignUpButton>
                <SignInButton mode="modal" appearance={{baseTheme:dark}} forceRedirectUrl="/conversations">
                  <button className="ml-4 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"> Sign In </button>
                </SignInButton>
                
               
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" className="block px-3 py-2 hover:bg-gray-700 rounded-md">About</a>
              <a href="#features" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Features</a>
              <a href="#team" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Team</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-700 rounded-md">Contact</a>

              <SignUpButton mode="modal" appearance={{baseTheme:dark}} forceRedirectUrl="/conversations">
                <button className="block px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
                    Sign Up
                </button>
              </SignUpButton>
              <SignInButton mode="modal" appearance={{baseTheme:dark}} forceRedirectUrl="/conversations">
                <button className="block px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md">
                    Sign In
                </button>
              </SignInButton>
            </div>
          </div>
          )}
        </nav>
        

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Stay Connected with Qubis
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12">
              Your Gateway to Seamless Real-Time Conversations
            </p>
            
           <SignUpButton mode="modal" appearance={{baseTheme:dark}} forceRedirectUrl="/conversations">
            <button 
            className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
            >
          Get Started
          <ChevronRight className="ml-2" size={20} />
        </button >
        </SignUpButton>
            
          </div>
        </div>
      </section>

      {/* About Section */}

       <section id="about" className="py-24 bg-gray-800/30">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Our Story</span>
             <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">The Vision Behind Qubis</h2>
             <div className="max-w-3xl mx-auto">
               <p className="text-lg text-gray-300 leading-relaxed">
               The name Qubis represents more than just a chat platform &#8211; it&apos;s a fusion of our team&apos;s identity. 
               Derived from the initials of our founding members (Qasim, Baqir, Saheem) and inspired by the 
               concept of a cube, Qubis symbolizes the strength and unity of our collaborative vision.
               </p>
             </div>
           </div>
         </div>
       </section>

      {/* Features Section */}
     
      <section id="features" className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Features</span>
             <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-2">
               Everything You Need
             </h2>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
             {features.map((feature, index) => (
               <div key={index} className="bg-gray-800/30 p-8 rounded-xl hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1">
                 <div className="flex items-center mb-4">
                   {feature.icon}
                   <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
                 </div>
                 <p className="text-gray-300">{feature.description}</p>
               </div>
             ))}
           </div>
         </div>
       </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Our Team</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              {
                name: "Aban",
                image: "/member1.png",
                role: "Core Backend Architect",
                socials: [
                  { platform: "GitHub", url: "#", icon: FaGithub }
                ]
              },
              {
                name: "Shailendr",
                image: "/member2.png",
                role: "Lead UI/UX Designer",
                socials: [
                  { platform: "LinkedIn", url: "#", icon: FaLinkedin }
                ]
              },
              {
                name: "Mohammad Qasim",
                image: "/member3.png",
                role: "Frontend Developer",
                socials: [
                  { platform: "Instagram", url: "https://www.instagram.com/qasim___khan__/", icon: FaInstagram }
                ]
              },
              {
                name: "Mohammad Baqir Khan",
                image: "/member4.png",
                role: "Integration Engineer",
                socials: [
                  { platform: "Instagram", url: "https://www.instagram.com/_baqir_110", icon: FaInstagram },
                  { platform: "GitHub", url: "https://github.com/mbaqirk", icon: FaGithub },
                  { platform: "LinkedIn", url: "https://in.linkedin.com/in/mbaqirk", icon: FaLinkedin },
                  { platform: "Portfolio", url: "https://mbaqirk.netlify.app", icon: FaGlobe }
                ]
              },
              {
                name: "Mohammad Saheem",
                image: "/member5.png",
                role: "Testing & QA Engineer",
                socials: [
                  { platform: "Instagram", url: "https://www.instagram.com/saheem.4u_", icon: FaInstagram }
                ]
              }
            ].map((member) => (
              <div key={member.name} className="text-center w-full sm:w-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={192} 
                  height={192} 
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg shadow-blue-100/5 group-hover:shadow-2xl transition-all duration-300 ease-in-out"
                  // className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-blue-600 shadow-xl shadow-blue-800/40 group-hover:shadow-2xl transition-all duration-300 ease-in-out"	
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <h3 className="Italic text-sm font-sans">{member.role}</h3>
                {/* Social Links */}
               <div className="flex py-2 justify-center space-x-4">
                {member.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 text-2xl transition-colors"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
              </div>
            ))}
          </div>
        </div>
      </section> 

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="flex items-center text-gray-300">
                <MessageSquare className="mr-2" size={20} />
                chatwithqubis@gmail.com
              </p>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>


      

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 Qubis. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/chatwithqubis" target='_blank' className="text-gray-400 hover:text-white">
                <Github size={24} />
              </a>
              <a href="https://x.com/_baqir_110/" target='_blank' className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="https://in.linkedin.com/in/mbaqirkhan110" target='_blank' className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href='mailto:chatwithqubis@gmail.com' target='_blank' className="text-gray-400 hover:text-white">
              <Mail size={24} />
              </a>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default LandingPage;








//This is Second layout of the landing page





// import React, { useEffect, useState } from 'react';
// import { MessageSquare, Video, Brain, Github, Twitter, Linkedin, ChevronRight, Menu, X, Sparkles, Shield, Zap } from 'lucide-react';
// import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";


// const LandingPage = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const signInUrl = "https://giving-panda-19.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F";
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const features = [
//     {
//       icon: <Video className="text-blue-400" size={32} />,
//       title: "Voice & Video Calling",
//       description: "Experience crystal-clear voice and video calls with our advanced communication infrastructure."
//     },
//     {
//       icon: <Brain className="text-purple-400" size={32} />,
//       title: "Mistral AI Integration",
//       description: "Enhance your conversations with intelligent suggestions and automated assistance powered by Mistral AI."
//     },
//     {
//       icon: <Shield className="text-green-400" size={32} />,
//       title: "End-to-End Encryption",
//       description: "Your conversations are protected with military-grade encryption, ensuring complete privacy."
//     },
//     {
//       icon: <Zap className="text-yellow-400" size={32} />,
//       title: "Real-Time Messaging",
//       description: "Instant message delivery with real-time typing indicators and read receipts."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <a href="/" className="flex items-center group">
//               <img
//                 src="/logo.png"
//                 alt="Qubis Logo"
//                 className="h-10 w-10 mr-2 transition-transform duration-300 group-hover:scale-110"
//               />
//               <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
//                 Qubis
//               </span>
//             </a>

//             {/* Desktop Navigation */}
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-8">
//                 <a href="#about" className="hover:text-blue-400 px-3 py-2 transition-colors duration-200">About</a>
//                 <a href="#features" className="hover:text-blue-400 px-3 py-2 transition-colors duration-200">Features</a>
//                 <a href="#team" className="hover:text-blue-400 px-3 py-2 transition-colors duration-200">Team</a>
//                 <a href="#contact" className="hover:text-blue-400 px-3 py-2 transition-colors duration-200">Contact</a>
//                 <a 
//                   href={signInUrl} 
//                   className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
//                 >
//                   Sign Up
//                 </a>
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="p-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute w-full bg-gray-900/95 backdrop-blur-sm">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <a href="#about" className="block px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-200">About</a>
//               <a href="#features" className="block px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-200">Features</a>
//               <a href="#team" className="block px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-200">Team</a>
//               <a href="#contact" className="block px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-200">Contact</a>
//               <a href={signInUrl} className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md transition-colors duration-200">Sign Up</a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
//         <div className="max-w-7xl mx-auto relative">
//           <div className="text-center">
//             <div className="inline-block mb-4">
//               <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
//                 Now in Beta
//               </span>
//             </div>
//             <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                 Stay Connected with Qubis
//               </span>
//             </h1>
//             <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
//               Your Gateway to Seamless Real-Time Conversations. Experience the future of communication with AI-powered features.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <a
//                 href={signInUrl}
//                 className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
//               >
//                 Get Started Free
//                 <ChevronRight className="ml-2" size={20} />
//               </a>
//               <a
//                 href="#features"
//                 className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
//               >
//                 Learn More
//                 <Sparkles className="ml-2" size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-24 bg-gray-800/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Our Story</span>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">The Vision Behind Qubis</h2>
//             <div className="max-w-3xl mx-auto">
//               <p className="text-lg text-gray-300 leading-relaxed">
//                 The name Qubis represents more than just a chat platform – it's a fusion of our team's identity. 
//                 Derived from the initials of our founding members (Qasim, Baqir, Saheem) and inspired by the 
//                 concept of a cube, Qubis symbolizes the strength and unity of our collaborative vision.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Features</span>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Everything You Need
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-8">
//             {features.map((feature, index) => (
//               <div key={index} className="bg-gray-800/30 p-8 rounded-xl hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1">
//                 <div className="flex items-center mb-4">
//                   {feature.icon}
//                   <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
//                 </div>
//                 <p className="text-gray-300">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section id="team" className="py-24 bg-gray-800/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Our Team</span>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Meet the Minds Behind Qubis
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-12">
//             {[
//               {
//                 name: "Mohammad Qasim",
//                 image: "./qasim.jpeg",
//                 role: "UI/UX Designer",
//                 socials: [
//                   { platform: "Instagram", url: "https://www.instagram.com/qasim___khan__/", icon: FaInstagram }
//                 ]
//               },
//               {
//                 name: "Mohammad Baqir Khan",
//                 image: "./baqir.png",
//                 role: "Backend Developer",
//                 socials: [
//                   { platform: "Instagram", url: "https://www.instagram.com/_baqir_110", icon: FaInstagram },
//                   { platform: "GitHub", url: "https://github.com/mbaqirk", icon: FaGithub },
//                   { platform: "LinkedIn", url: "https://in.linkedin.com/in/mbaqirkhan110", icon: FaLinkedin }
//                 ]
//               },
//               {
//                 name: "Mohammad Saheem",
//                 image: "./saheem.jpeg",
//                 role: "Testing Engineer",
//                 socials: [
//                   { platform: "Instagram", url: "https://www.instagram.com/saheem.4u_", icon: FaInstagram }
//                 ]
//               }
//             ].map((member, index) => (
//               <div key={index} className="group">
//                 <div className="relative overflow-auto rounded-xl bg-gray-800/50 p-6 text-center transform transition-all duration-300 hover:-translate-y-2">
//                   <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-xl transition-all duration-300 group-hover:shadow-blue-500/20"
//                   />
//                   <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
//                   <p className="text-gray-400 text-sm mb-4">{member.role}</p>
//                   <div className="flex justify-center space-x-4">
//                     {member.socials.map((social, idx) => (
//                       <a
//                         key={idx}
//                         href={social.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-gray-400 hover:text-blue-400 text-xl transition-colors duration-200"
//                       >
//                        <span>
//                          <social.icon />
//                        </span>
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-2 block">Contact</span>
//             <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Get in Touch
//             </h2>
//           </div>
//           <div className="grid md:grid-cols-2 gap-12">
//             <div className="bg-gray-800/30 p-8 rounded-xl">
//               <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
//               <p className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200">
//                 <MessageSquare className="mr-3" size={20} />
//                 <a href="mailto:chatwithqubis@gmail.com">chatwithqubis@gmail.com</a>
//               </p>
//             </div>
//             <form className="space-y-6">
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-4 py-3 rounded-lg bg-gray-800/30 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
//                   placeholder="your@email.com"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="w-full px-4 py-3 rounded-lg bg-gray-800/30 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
//                   placeholder="Your message..."
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-6 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900/50 py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 mb-4 md:mb-0">
//               © 2024 Qubis. All rights reserved.
//             </p>
//             <div className="flex space-x-6">
//               <a href="https://github.com/chatwithqubis" className="text-gray-400 hover:text-white transition-colors duration-200">
//                 <Github size={24} />
//               </a>
//               <a href="https://x.com/_baqir_110/" className="text-gray-400 hover:text-white transition-colors duration-200">
//                 <Twitter size={24} />
//               </a>
//               <a href="https://in.linkedin.com/in/mbaqirkhan110" className="text-gray-400 hover:text-white transition-colors duration-200">
//                 <Linkedin size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;