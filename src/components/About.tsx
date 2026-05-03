import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-bold tracking-[0.3em] text-primary">SOBRE</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Mais que um time. <span className="text-primary text-glow">Uma matilha.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Fundada em 2017, a FURIA Esports nasceu para mudar o cenário brasileiro
            de Counter-Strike. Com um estilo agressivo, jogadas imprevisíveis e uma
            torcida apaixonada que lota arenas pelo mundo todo, a Pantera se
            transformou em um símbolo do esports nacional — e segue caçando os
            maiores títulos do planeta.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
