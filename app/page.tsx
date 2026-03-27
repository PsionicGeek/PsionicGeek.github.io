'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Briefcase, FileText } from 'lucide-react';
import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';
import { ColorPicker } from '@/components/color-picker';
import { ContactModal } from '@/components/contact-modal';
import { useTheme } from 'next-themes';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const backendSkills = [
  { name: 'Java', slug: 'openjdk' },
  { name: 'Spring Boot', slug: 'springboot' },
  { name: 'Spring MVC', slug: 'spring' },
  { name: 'Microservices', slug: 'kubernetes' },
  { name: 'REST APIs', slug: 'postman' },
  { name: 'Node.js', slug: 'nodedotjs' },
  { name: 'Express.js', slug: 'express' },
  { name: 'Python', slug: 'python' },
  { name: 'C#', slug: 'dotnet' }
];
const dataSkills = [
  { name: 'MySQL', slug: 'mysql' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Prisma ORM', slug: 'prisma' }
];
const cloudSkills = [
  { name: 'AWS', slug: 'amazonwebservices' },
  { name: 'Databricks', slug: 'databricks' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Kubernetes', slug: 'kubernetes' }
];
const messagingSkills = [
  { name: 'Kafka', slug: 'apachekafka' },
  { name: 'Elastic Stack', slug: 'elastic' }
];
const frontendSkills = [
  { name: 'React.js', slug: 'react' },
  { name: 'Flutter', slug: 'flutter' },
  { name: 'JavaScript', slug: 'javascript' }
];
const toolsSkills = [
  { name: 'IntelliJ IDEA', slug: 'intellijidea' },
  { name: 'VS Code', slug: 'visualstudio' },
  { name: 'Git', slug: 'git' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Eclipse', slug: 'eclipseide' }
];

export default function Portfolio() {
  const container = useRef<HTMLElement>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Preloader Animation
    tl.to('.preloader-text', { y: 0, duration: 0.8, ease: 'power3.out' })
      .to('.preloader-text', { y: '-100%', duration: 0.6, ease: 'power3.in', delay: 0.5 })
      .to('.preloader', { yPercent: -100, duration: 0.8, ease: 'power4.inOut' }, '-=0.2')
      // Hero Animation
      .from('.hero-elem', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      }, '-=0.4');

    // Section Animations
    const sections = gsap.utils.toArray('.animate-section') as HTMLElement[];
    sections.forEach((section) => {
      const elems = section.querySelectorAll('.animate-elem');
      if (elems.length > 0) {
        gsap.from(elems, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        });
      }
    });
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-bg text-text-primary selection:bg-accent selection:text-white overflow-x-hidden transition-colors duration-300">
      {/* Preloader */}
      <div className="preloader fixed inset-0 z-[100] bg-bg flex items-center justify-center">
        <div className="overflow-hidden">
          <h1 className="preloader-text font-display text-6xl md:text-8xl font-black uppercase text-text-primary translate-y-full">
            RKS.
          </h1>
        </div>
      </div>

      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-bg/80 border-b border-border transition-colors duration-300">
        <div className="font-display font-bold text-xl tracking-tighter">RKS.</div>
        <div className="flex items-center gap-4 md:gap-6">
          <ColorPicker />
          <ThemeToggle />
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="text-sm font-medium uppercase tracking-widest hover:text-accent transition-colors hidden sm:block"
          >
            Let&apos;s Talk
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-32">
        {/* 1. Hero Section */}
        <section className="flex flex-col-reverse lg:flex-row gap-12 lg:items-center">
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <p className="hero-elem text-accent font-mono text-sm uppercase tracking-widest font-semibold">
                [ Engineer Your Data-Driven Systems ]
              </p>
              <h1 className="hero-elem font-display text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-balance">
                Ravi Kumar <br /> Singh
              </h1>
            </div>

            <div className="max-w-3xl space-y-6">
              <p className="hero-elem text-xl md:text-3xl font-light leading-snug text-text-secondary text-balance">
                Software Engineer crafting data pipelines, backend systems, and real-time analytics for production-grade platforms.
              </p>
              <p className="hero-elem font-display text-2xl md:text-4xl font-bold tracking-tight">
                Backend-first. Data-strong. Cloud-ready.
              </p>
            </div>

            <div className="hero-elem flex flex-wrap gap-3 pt-8">
              <Badge icon={<MapPin size={14} />} text="Gurugram, India" />
              <Badge icon={<Briefcase size={14} />} text="SE @ Volkswagen Group" />
              <LinkBadge href="mailto:officialravi2209@gmail.com" icon={<Mail size={14} />} text="Email" />
              <LinkBadge href="tel:+917706969965" icon={<Phone size={14} />} text="Phone" />
              <LinkBadge href="https://linkedin.com/in/ravikumarsingh22" icon={<Linkedin size={14} />} text="LinkedIn" />
              <LinkBadge href="https://github.com/PsionicGeek" icon={<Github size={14} />} text="GitHub" />
              <LinkBadge href="/Resume.pdf" icon={<FileText size={14} />} text="Resume" />
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="hero-elem w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 lg:-mt-80 relative shrink-0 rounded-3xl overflow-hidden border-2 border-border rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
            {/* NOTE: Replace the src below with your actual uploaded profile image path (e.g., '/profile.jpg') */}
            <Image
              src="/profile.jpeg"
              alt="Ravi Kumar Singh"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* 2. Principles Section */}
        <section className="animate-section space-y-12">
          <h2 className="animate-elem font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Engineering Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PrincipleCard
              title="Data Integrity First"
              description="Designing migrations with 100% data integrity and zero data loss during critical enterprise ETL processes."
              number="01"
            />
            <PrincipleCard
              title="Cloud-Native Pipelines"
              description="Building automated pipelines into Databricks for secure, structured, and scalable analytics workflows."
              number="02"
            />
            <PrincipleCard
              title="Full-Lifecycle Ownership"
              description="Taking applications from concept to production, like building a C# .NET WPF desktop app from scratch."
              number="03"
            />
            <PrincipleCard
              title="Real-Time Insight"
              description="Integrating dashboards that stream processed cloud data in real-time directly to stakeholders."
              number="04"
            />
            <PrincipleCard
              title="Product-Driven Freelancing"
              description="Architecting end-to-end solutions including CRMs, travel booking, and local service apps."
              number="05"
            />
          </div>
        </section>

        {/* 3. Skills Grid (Moved Up) */}
        <section className="animate-section space-y-12">
          <h2 className="animate-elem font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Stack & Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillGroup title="Backend & APIs" skills={backendSkills} />
            <SkillGroup title="Data & Storage" skills={dataSkills} />
            <SkillGroup title="Cloud & Ops" skills={cloudSkills} />
            <SkillGroup title="Messaging & Observability" skills={messagingSkills} />
            <SkillGroup title="Frontend & Apps" skills={frontendSkills} />
            <SkillGroup title="Everyday Tools" skills={toolsSkills} />
          </div>
        </section>

        {/* 4. What I Build Section */}
        <section className="animate-section space-y-12">
          <h2 className="animate-elem font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter border-b border-border pb-6">
            Systems I Ship
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="animate-elem text-lg md:text-xl text-text-secondary font-light leading-relaxed">
              My expertise lies at the intersection of robust backend architecture and data engineering. I specialize in orchestrating complex enterprise data migrations, designing resilient microservices, and constructing cloud-native pipelines. Whether it&apos;s a real-time analytics dashboard or a full-stack web application, I build systems that are scalable, secure, and performant.
            </div>
            <ul className="animate-elem space-y-6 font-display text-xl md:text-2xl font-medium tracking-tight">
              <ListItem text="Enterprise ETL pipelines for complex architecture datasets." />
              <ListItem text="Cloud-native data flows on Databricks and AWS." />
              <ListItem text="Desktop tools with real-time analytics in C# .NET WPF." />
              <ListItem text="Full-stack apps with React, Node.js, Prisma, and MongoDB." />
              <ListItem text="Microservices backends using Spring Boot and Kafka." />
            </ul>
          </div>
        </section>

        {/* 5. Experience Section */}
        <section className="animate-section space-y-12">
          <h2 className="animate-elem font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Experience
          </h2>

          <div className="space-y-8">
            {/* Main Role */}
            <div className="animate-elem bg-surface border border-border rounded-2xl p-8 md:p-12 hover:border-accent/50 transition-colors group">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight group-hover:text-accent transition-colors">Volkswagen Group Digital Solutions India</h3>
                  <p className="text-xl text-text-secondary mt-2">Software Engineer</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-text-primary/5 rounded-full text-sm font-mono text-text-secondary">Nov 2023 – Present</span>
                  <p className="text-sm text-text-secondary mt-2 font-mono uppercase tracking-widest">Gurugram, India</p>
                </div>
              </div>
              <p className="text-lg font-medium mb-6 text-text-primary">
                Driving enterprise data migration, cloud pipelines, and real-time analytics integration.
              </p>
              <ul className="space-y-4 text-text-secondary text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <ArrowUpRight className="shrink-0 mt-1 text-accent" size={18} />
                  <span>Executed Java-based data migration & automation using robust plugins and ETL scripts, ensuring 100% data integrity during critical transitions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowUpRight className="shrink-0 mt-1 text-accent" size={18} />
                  <span>Built custom data parsing and transformation scripts for client-specific migrations of large-scale architectural frameworks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowUpRight className="shrink-0 mt-1 text-accent" size={18} />
                  <span>Engineered cloud data pipelines extracting local station data into Cloud Databricks for secure processing and downstream consumption.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowUpRight className="shrink-0 mt-1 text-accent" size={18} />
                  <span>Developed a custom desktop application from scratch using C# .NET WPF with strong object-oriented design principles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowUpRight className="shrink-0 mt-1 text-accent" size={18} />
                  <span>Integrated a real-time analytics dashboard into the desktop client to securely visualize processed cloud data for stakeholders.</span>
                </li>
              </ul>
            </div>

            {/* Freelance Roles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FreelanceCard
                title="CRM for Laundry Solution Provider"
                tech="React.js, Node.js, Prisma, MongoDB, AWS"
                description="Built modules for quotations, sales orders, and customer management, improving process efficiency by 35%."
                imageSeed="/OrgaearthCRM.png"
              />
              <FreelanceCard
                title="SafarWonderlust"
                tech="React.js, Node.js, Prisma, AWS"
                description="Group travel booking app with secure payments, real-time updates, and an admin portal for itineraries."
                imageSeed="/SafarWanderlust.png"
              />
              <FreelanceCard
                title="LEHK (Local Expert Hai Kya)"
                tech="Flutter, Node.js, MongoDB, Firebase"
                description="Local service app integrating Map APIs, RazorPay, and a React-based admin panel for service management."
                imageSeed="/LEHK.png"
              />
            </div>
          </div>
        </section>

        {/* 6. Highlight Project */}
        <section className="animate-section space-y-12">
          <h2 className="animate-elem font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter">
            Flagship Backend
          </h2>

          <div className="animate-elem bg-text-primary  text-bg rounded-2xl overflow-hidden relative group flex flex-col lg:flex-row">
            <div className="p-8 md:p-12 lg:w-1/2 relative z-10 flex flex-col justify-center">
              <h3 className="font-display text-4xl md:text-5xl font-black tracking-tighter mb-6">
                LinkedIn Clone
              </h3>
              <p className="text-xl md:text-2xl font-medium mb-8 opacity-90">
                Microservices-Based Networking Platform
              </p>
              <div className="space-y-6 text-lg font-medium opacity-80">
                <p>
                  Architected a robust backend using Spring Boot microservices to handle profiles, connections, posts, and Kafka-based notifications independently.
                </p>
                <p>
                  Implemented stringent security measures with Spring Security and JWT, while optimizing performance through Redis caching and efficient DTO mapping.
                </p>
                <p>
                  Enabled real-time data streaming with Apache Kafka and seamless inter-service communication via OpenFeign, all deployed to Kubernetes with Docker on AWS.
                </p>
              </div>
            </div>

            {/* Project Image Placeholder */}
            <div className="relative lg:w-1/2 min-h-[300px] lg:min-h-full  overflow-hidden flex items-center justify-center p-8">
              {/* NOTE: Replace the src below with your actual project image path */}
              <Image
                src="/linkedin.png"
                alt="LinkedIn Clone Architecture"
                fill
                className="object-contain p-8 dark:invert  group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              {/* <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <Github size={120} />
              </div> */}
            </div>
          </div>
        </section>

        {/* 7. Education */}
        <section className="animate-section space-y-12">
          <h2 className="animate-elem font-display text-4xl md:text-6xl font-bold uppercase tracking-tighter border-b border-border pb-6">
            Education
          </h2>

          <div className="animate-elem flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">B.Tech in Computer Science and Engineering</h3>
              <p className="text-xl text-text-secondary">Dr APJ Abdul Kalam Technical University, India</p>
              <p className="text-sm font-mono text-text-secondary mt-4 uppercase tracking-widest">
                Coursework: Software Engineering, Operating Systems, Algorithms, Data Structures
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="font-mono text-accent font-bold tracking-widest uppercase mb-1">Aug 2019 – July 2023</p>
              <p className="text-2xl font-display font-bold">GPA: 8.04 / 10.0</p>
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="animate-section py-24 border-t border-border text-center space-y-8">
          <h2 className="animate-elem font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
            Let&apos;s Build <br /> <span className="text-accent">Something Robust.</span>
          </h2>
          <p className="animate-elem text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto font-light">
            Open to collaborating on backend systems, data-heavy platforms, or full-stack products.
          </p>
          <div className="animate-elem pt-8">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center gap-3 bg-text-primary text-bg px-8 py-4 rounded-full font-display font-bold text-xl uppercase tracking-widest hover:bg-accent hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              <Mail size={24} />
              Get In Touch
            </button>
          </div>
        </section>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </main>
  );
}

// Components

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-sm font-medium text-text-muted">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function LinkBadge({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-sm font-medium text-text-muted hover:bg-text-primary hover:text-bg hover:border-text-primary transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function PrincipleCard({ title, description, number }: { title: string; description: string; number: string }) {
  return (
    <div className="animate-elem bg-surface border border-border p-8 rounded-2xl flex flex-col h-full hover:border-accent/50 transition-colors group">
      <div className="font-mono text-accent text-sm font-bold mb-6 opacity-80 group-hover:opacity-100 transition-opacity">/{number}</div>
      <h3 className="font-display text-2xl font-bold tracking-tight mb-4">{title}</h3>
      <p className="text-text-secondary leading-relaxed mt-auto">{description}</p>
    </div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-4 border-b border-border pb-6 last:border-0 last:pb-0">
      <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function FreelanceCard({ title, tech, description, imageSeed }: { title: string; tech: string; description: string; imageSeed: string }) {
  return (
    <div className="animate-elem bg-surface border border-border rounded-2xl overflow-hidden flex flex-col hover:border-accent/50 transition-colors group">
      <div className="relative h-48 w-full bg-border overflow-hidden">
        {/* NOTE: Replace the src below with your actual project image path */}
        <Image
          src={`${imageSeed}`}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs font-mono text-accent uppercase tracking-widest mb-4">Freelance, Remote</div>
        <h4 className="font-display text-xl font-bold tracking-tight mb-2">{title}</h4>
        <p className="text-sm text-text-secondary font-mono mb-4">{tech}</p>
        <p className="text-text-muted text-sm leading-relaxed mt-auto">{description}</p>
      </div>
    </div>
  );
}

type Skill = { name: string; slug: string };

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  const { resolvedTheme } = useTheme();
  const iconColor = resolvedTheme === 'dark' ? 'f5f5f5' : '0a0a0a';

  return (
    <div className="animate-elem space-y-4">
      <h4 className="font-mono text-sm text-text-secondary uppercase tracking-widest">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-md text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default group">
            {/* <Image
              src={`https://cdn.simpleicons.org/${skill.slug}/${iconColor}`}
              alt={skill.name}
              width={16}
              height={16}
              className="opacity-70 group-hover:opacity-100 transition-opacity"
            /> */}
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
