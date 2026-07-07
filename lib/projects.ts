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
 *  - Patent Intelligence Platform (AET): "27 issued patents", tile is an approved
 *    anonymized stand-in.
 *  - Collision: "working prototype", built solo end-to-end.
 *  - Gateway: live in production; Telegram-editable KB is the differentiator;
 *    tile links to the live site (gateway.ia-ai.pro).
 *  - Hey Buoy!: personal single-client marine app (source: ~/Developer/fishing/) —
 *    no scale/user claims; the differentiator is the UI/interaction, not the data.
 */
export const projects: Project[] = [
  {
    n: "01",
    name: "Patent Intelligence Platform",
    tag: "FLAGSHIP · ADVANCED RAG",
    desc: "Citation-grounded patent intelligence over 27 dense patents — hybrid dense+sparse retrieval tuned so proprietary acronyms and DAG-structured claims actually retrieve.",
    image: "/work/aet.png",
    alt: "Anonymized patent-family and timeline data visualization from the Patent Intelligence Platform.",
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
    alt: "UAE Business Gateway production landing page for the regulatory AI assistant.",
    href: "https://gateway.ia-ai.pro",
  },
  {
    n: "04",
    name: "Hey Buoy!",
    tag: "APP · MARINE AI",
    desc: "A mobile-first marine app that turns dense NOAA forecast grids into one plain-language verdict — Go, Caution, or No-Go. A deterministic rule engine makes the call; Claude only parses the question and narrates the marginal cases. Voice-first, with an animated buoy that glows the verdict. Built solo — React 19 / Vite, a Hono API, MapLibre.",
    image: "/work/heybuoy.png",
    alt: "Hey Buoy! marine conditions app: a navy sea map with animated wind particles and a bold NO-GO verdict with wave, period, wind, and tide readouts.",
  },
];
