"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useSpring } from "framer-motion";
import Image from "next/image";
import {
  ShoppingBag,
  Pill,
  Utensils,
  Bike,
  MapPin,
  ArrowDown,
  ArrowUpRight,
  Wallet,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { APP_CONFIG } from "@/data/siteConfig";

const services = [
  { label: "Grocery", detail: "Rozmarra ki zaroorat", icon: ShoppingBag },
  { label: "Medicine", detail: "Dawaai ghar tak", icon: Pill },
  { label: "Food", detail: "Apna pasandeeda khana", icon: Utensils },
  { label: "Bike rides", detail: "Apni manzil tak", icon: Bike },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.1 });
  const reduced = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);
  const [visible, setVisible] = useState(true);
  const rotateX = useSpring(0, { stiffness: 160, damping: 24 });
  const rotateY = useSpring(0, { stiffness: 160, damping: 24 });
  useEffect(() => {
    const media = matchMedia("(hover: hover) and (pointer: fine)");
    const update = () =>
      setFinePointer(media.matches && navigator.maxTouchPoints === 0);
    const visibility = () => setVisible(!document.hidden);
    update();
    visibility();
    media.addEventListener("change", update);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  useEffect(() => {
    if (reduced || !finePointer || !inView) {
      rotateX.set(0);
      rotateY.set(0);
    }
  }, [reduced, finePointer, inView, rotateX, rotateY]);
  const running = inView && visible && !reduced;

  return (
    <section
      ref={ref}
      id="home"
      className="hero-section"
      data-running={running}
    >
      <div className="hero-grid" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center">
          <div className="hero-copy">
            <div
              className="hero-location hero-enter"
              style={{ animationDelay: "40ms" }}
            >
              <span className="status-dot" />
              <span>ALIPUR CHATTHA &amp; SURROUNDING AREAS</span>
            </div>
            <h1 className="hero-title" aria-label="Delivery or Ride dono asan.">
              <span className="block">
                {["Delivery", "or", "Ride"].map((word, i) => (
                  <span
                    aria-hidden="true"
                    key={word}
                    className="hero-word"
                    style={{ animationDelay: `${100 + i * 65}ms` }}
                  >
                    {word}{" "}
                  </span>
                ))}
              </span>
              <span className="block hero-accent">
                {["dono", "asan."].map((word, i) => (
                  <span
                    aria-hidden="true"
                    key={word}
                    className="hero-word"
                    style={{ animationDelay: `${295 + i * 65}ms` }}
                  >
                    {word}{" "}
                  </span>
                ))}
              </span>
            </h1>
            <p
              className="hero-description hero-enter"
              style={{ animationDelay: "380ms" }}
            >
              Grocery, dawaai, garma garam khana — sab kuch aapke darwaze tak.
              Ya apni manzil ke liye bike ride book karein.{" "}
              <strong>Bas ClickDeliver karein.</strong>
            </p>
            <div className="hero-enter" style={{ animationDelay: "450ms" }}>
              <p className="download-label">Aapka shehar. Aapki app.</p>
              <div className="store-buttons">
                <a
                  href={APP_CONFIG.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-google-play-btn"
                  className="store-button"
                >
                  <Image
                    src="/google-play-badge.svg"
                    alt="Get ClickDeliver on Google Play"
                    width={174}
                    height={52}
                    priority
                    unoptimized
                  />
                </a>
                <a
                  href={APP_CONFIG.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-app-store-btn"
                  className="store-button"
                >
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download ClickDeliver on the App Store"
                    width={174}
                    height={52}
                    priority
                    unoptimized
                  />
                </a>
              </div>
            </div>
            <div
              className="hero-notes hero-enter"
              style={{ animationDelay: "510ms" }}
            >
              <span>
                <Wallet size={16} /> Cash on Delivery
              </span>
              <span>
                <MapPin size={16} /> Apne shehar ki service
              </span>
            </div>
            <a href="#how-it-works" className="hero-explore">
              Dekhein, kaise kaam karta hai <ArrowDown size={16} />
            </a>
          </div>
          <div className="phone-stage">
            <div className="phone-orbit" aria-hidden="true" />
            <div className="phone-entrance">
              <motion.div
                className="phone-shell"
                style={{ rotateX, rotateY, transformPerspective: 1000 }}
                onPointerMove={(e) => {
                  if (!finePointer || reduced || e.pointerType !== "mouse")
                    return;
                  const box = e.currentTarget.getBoundingClientRect();
                  rotateY.set(
                    Math.max(
                      -3,
                      Math.min(
                        3,
                        ((e.clientX - box.left) / box.width - 0.5) * 6,
                      ),
                    ),
                  );
                  rotateX.set(
                    Math.max(
                      -3,
                      Math.min(
                        3,
                        -((e.clientY - box.top) / box.height - 0.5) * 6,
                      ),
                    ),
                  );
                }}
                onPointerLeave={() => {
                  rotateX.set(0);
                  rotateY.set(0);
                }}
              >
                <div className="phone-screen">
                  <div className="phone-status">
                    <span>9:41</span>
                    <span className="phone-island" />
                    <span>▮▮▮ ▰</span>
                  </div>
                  <div className="phone-app-header">
                    <div>
                      <span className="phone-eyebrow">DELIVERING TO</span>
                      <p>
                        <MapPin size={12} /> Alipur Chattha{" "}
                        <ChevronRight size={12} />
                      </p>
                    </div>
                    <Image
                      src="/logo.png"
                      alt="ClickDeliver"
                      width={31}
                      height={31}
                    />
                  </div>
                  <div className="phone-greeting">
                    Aaj kya chahiye?<span>Apni zaroorat, apni pasand.</span>
                  </div>
                  <div className="phone-categories">
                    {services.map(({ label, icon: Icon }) => (
                      <div key={label}>
                        <span>
                          <Icon size={18} />
                        </span>
                        {label}
                      </div>
                    ))}
                  </div>
                  <div
                    className="phone-map"
                    role="img"
                    aria-label="Illustrative delivery preview: a rider follows a route from a local shop to your home."
                  >
                    <svg viewBox="0 0 260 230" fill="none" aria-hidden="true">
                      <rect width="260" height="230" fill="#eaf0ef" />
                      <path
                        d="M0 38H260M0 105H260M0 180H260M45 0V230M130 0V230M215 0V230"
                        stroke="#fff"
                        strokeWidth="12"
                      />
                      <path
                        d="M0 38H260M0 105H260M0 180H260M45 0V230M130 0V230M215 0V230"
                        stroke="#d9e2e4"
                        strokeWidth="1"
                      />
                      <rect
                        x="57"
                        y="49"
                        width="59"
                        height="42"
                        rx="9"
                        fill="#d5e6db"
                      />
                      <rect
                        x="145"
                        y="119"
                        width="57"
                        height="46"
                        rx="10"
                        fill="#d5e6db"
                      />
                      <text x="57" y="22" fill="#64777e" fontSize="9">
                        ALIPUR CHATTHA
                      </text>
                      <text x="58" y="205" fill="#64777e" fontSize="8">
                        Main Bazar
                      </text>
                      <path
                        d="M45 180 L45 119 Q45 105 59 105 L201 105 Q215 105 215 91 L215 52"
                        stroke="#abc9f3"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      <path
                        className="delivery-route"
                        pathLength="1"
                        d="M45 180 L45 119 Q45 105 59 105 L201 105 Q215 105 215 91 L215 52"
                        stroke="#2563eb"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <circle
                        cx="45"
                        cy="180"
                        r="7"
                        fill="#fff"
                        stroke="#2563eb"
                        strokeWidth="3"
                      />
                      <circle
                        className="destination-pulse"
                        cx="215"
                        cy="52"
                        r="15"
                        fill="#2563eb"
                        opacity=".15"
                      />
                      <circle
                        cx="215"
                        cy="52"
                        r="7"
                        fill="#2563eb"
                        stroke="white"
                        strokeWidth="3"
                      />
                      <g className="rider-marker">
                        <circle
                          r="14"
                          fill="#173b76"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <g
                          transform="translate(-9 -9)"
                          stroke="white"
                          strokeWidth="1.6"
                        >
                          <circle cx="4" cy="13" r="3" />
                          <circle cx="14" cy="13" r="3" />
                          <path d="m4 13 4-7 6 7M7 6h4M8 3h2" />
                        </g>
                      </g>
                    </svg>
                    <div className="map-caption">
                      <span className="status-dot" /> Rider raastay mein hai
                    </div>
                  </div>
                  <div className="phone-order">
                    <span className="phone-order-icon">
                      <ShoppingBag size={20} />
                    </span>
                    <div>
                      <strong>Aapka order, ghar tak</strong>
                      <span>Shop se seedha aapke paas</span>
                    </div>
                    <span className="phone-check">✓</span>
                  </div>
                  <div className="phone-nav">
                    <span>
                      <ShoppingBag size={16} />
                      Home
                    </span>
                    <span>
                      <Bike size={16} />
                      Ride
                    </span>
                    <span>
                      <MessageCircle size={16} />
                      Chat
                    </span>
                  </div>
                  <div className="phone-homebar" />
                </div>
              </motion.div>
            </div>
            <div className="service-badge badge-grocery">
              <div className="badge-icon">
                <ShoppingBag size={20} />
              </div>
              <div>
                <strong>Grocery ghar tak</strong>
                <span>Apni local dukan se</span>
              </div>
            </div>
            <div className="service-badge badge-ride">
              <div className="badge-icon">
                <Bike size={20} />
              </div>
              <div>
                <strong>Chalein, kahin bhi.</strong>
                <span>Bike ride booking</span>
              </div>
              <ArrowUpRight size={16} />
            </div>
            <p className="preview-caption">
              <span /> ILLUSTRATIVE APP PREVIEW
            </p>
          </div>
        </div>
        <div className="hero-service-strip">
          {services.map(({ label, detail, icon: Icon }) => (
            <a
              key={label}
              href={label === "Bike rides" ? "#ride" : "#features"}
            >
              <Icon size={20} />
              <span>
                <strong>{label}</strong>
                <small>{detail}</small>
              </span>
              <ArrowUpRight size={15} />
            </a>
          ))}
          <a href="#custom-orders">
            <MessageCircle size={20} />
            <span>
              <strong>Custom orders</strong>
              <small>Jo chahiye, mangwaein</small>
            </span>
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
