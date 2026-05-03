import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import AchievementCard from "./AchievementCard";

const Timeline = () => {
  return (
    <section id="timeline" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-primary">
            TIMELINE
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl font-bold">
            Conquistas que <span className="text-primary text-glow">marcaram</span> o CS
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground text-lg">
            Da fundação aos títulos internacionais — a trajetória da FURIA é
            feita de coragem, agressividade e amor pelo jogo.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center vertical line */}
          <div
            aria-hidden
            className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent"
          />

          <div className="space-y-10 md:space-y-16">
            {achievements.map((a, i) => (
              <AchievementCard key={a.id} achievement={a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
