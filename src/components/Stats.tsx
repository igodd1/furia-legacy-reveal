import { motion } from "framer-motion";
import { Trophy, Users, Globe2, Zap } from "lucide-react";

const stats = [
  { icon: Trophy, value: "10+", label: "Títulos Internacionais" },
  { icon: Users, value: "5M+", label: "Fãs ao redor do mundo" },
  { icon: Globe2, value: "30+", label: "Países visitados" },
  { icon: Zap, value: "#1", label: "Time brasileiro de CS" },
];

const Stats = () => {
  return (
    <section id="stats" className="relative py-24 border-y border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center group"
          >
            <s.icon className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" size={32} />
            <div className="text-4xl md:text-5xl font-bold text-glow">{s.value}</div>
            <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
