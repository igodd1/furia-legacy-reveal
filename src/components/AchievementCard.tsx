import { motion } from "framer-motion";
import { Award, Crown, Flame, Medal, Star, Target, Trophy } from "lucide-react";
import type { Achievement } from "@/data/achievements";

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  flame: Flame,
  star: Star,
  crown: Crown,
  target: Target,
};

interface Props {
  achievement: Achievement;
  index: number;
}

const AchievementCard = ({ achievement, index }: Props) => {
  const Icon = iconMap[achievement.icon];
  const isLeft = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className={`relative md:w-1/2 ${isLeft ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}
    >
      {/* Connector dot on the timeline */}
      <span
        aria-hidden
        className={`hidden md:block absolute top-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_hsl(var(--primary))] ${
          isLeft ? "right-[-9px]" : "left-[-9px]"
        }`}
      />

      <div className="group relative overflow-hidden rounded-xl border border-border bg-[var(--gradient-card)] p-6 md:p-8 shadow-[var(--shadow-card)] transition-all duration-500 hover:border-primary hover:shadow-[var(--shadow-neon)] hover:-translate-y-1">
        {/* Decorative corner glow */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon size={28} strokeWidth={2.2} />
          </div>
          <div className="flex-1">
            <span className="inline-block text-xs font-bold tracking-[0.2em] text-primary">
              {achievement.year}
            </span>
            <h3 className="mt-1 text-xl md:text-2xl font-bold leading-tight">
              {achievement.tournament}
            </h3>
            <p className="mt-1 text-sm font-semibold text-foreground/90">
              {achievement.placement}
            </p>
          </div>
        </div>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </motion.article>
  );
};

export default AchievementCard;
