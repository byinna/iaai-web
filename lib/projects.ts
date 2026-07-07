export type Project = {
  n: string;
  name: string;
  tag: string;
  desc: string;
  image: string;
  alt: string;
  href?: string;
};

/**
 * Copy is lifted from the vetted portfolio notes (iaai/Portfolio/projects/*.md)
 * and stays within their do-not-overstate flags:
 *  - AET: "27 issued patents", tile is an approved anonymized stand-in.
 *  - Collision: "working prototype", built solo end-to-end.
 *  - Gateway: live in production; Telegram-editable KB is the differentiator.
 *  - Naymlis: in-progress web-design build.
 */
export const projects: Project[] = [
  {
    n: "01",
    name: "AET Intelligence Platform",
    tag: "FLAGSHIP · ADVANCED RAG",
    desc: "Citation-grounded patent intelligence over 27 dense patents — hybrid dense+sparse retrieval tuned so proprietary acronyms and DAG-structured claims actually retrieve.",
    image: "/work/aet.png",
    alt: "Anonymized patent-family and timeline data visualization from the AET Intelligence Platform.",
  },
  {
    n: "02",
    name: "Collision",
    tag: "PRODUCT · AGENTIC SIM",
    desc: "A knowledge-graph engine that turns a screenplay into a queryable model, then simulates its characters as agents to find where the story breaks. Built solo, full-stack.",
    image: "/work/collision.png",
    alt: "Collision landing page with animated interference-ripple hero artwork.",
  },
  {
    n: "03",
    name: "UAE Business Gateway",
    tag: "SHIPPED · PRODUCTION",
    desc: "A live UAE-regulatory AI assistant whose knowledge base is editable from Telegram — DM a PDF, link, or photo; one tap adds it to the live RAG.",
    image: "/work/gateway.png",
    alt: "UAE Business Gateway production chatbot interface answering a regulatory question.",
  },
  {
    n: "04",
    name: "Naymlis",
    tag: "WEB · CRAFT",
    desc: "Rebuilt a music-tech startup's site pixel-faithful from Figma — Next.js 16 + GSAP scroll motion — turning a stalled AI draft into a polished, accessible build.",
    image: "/work/naymlis.png",
    alt: "Naymlis music-tech landing page hero, an editorial build in Next.js.",
  },
];
