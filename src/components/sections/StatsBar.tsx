"use client";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function StatsBar() {
  const stats = [
    { label: "Redução na conta", value: 35, suffix: "%" },
    { value: 0, label: "Investimento inicial", prefix: "R$", suffix: "" },
    { value: 50, label: "Clientes ativos", prefix: "+", suffix: "" },
    { value: 11.6, label: "CO₂ evitado", prefix: "+", suffix: "t" },
    { value: 100, label: "Energia limpa", suffix: "%" },
  ];

  return (
    <section className="bg-green-brand py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className={`text-center ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}>
              <p className="text-3xl sm:text-4xl font-extrabold text-navy-brand">
                <AnimatedCounter target={stat.value as number} prefix={stat.prefix || ""} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm md:text-base font-semibold text-navy-brand/80 uppercase tracking-wide mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
