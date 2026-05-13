import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-furia.jpg";
// 1. Importar hooks e funções utilitárias
import { useEffect, useState } from "react";
import { fetchPagina } from "../utils/fetchPagina";
import { parseContent } from "../utils/parseContent";

// 2. Definir o tipo para o conteúdo
type Conteudo = ReturnType<typeof parseContent>;

const Hero = () => {
  // 3. Criar o estado para armazenar o conteúdo
  const [conteudo, setConteudo] = useState<Conteudo | null>(null);

  // 4. Buscar os dados no WordPress ao carregar o componente
  useEffect(() => {
    fetchPagina("pagina-1") // Verifique se o slug no WP é "pagina-1"
      .then(pagina => {
        // Separa o HTML em categorias (títulos, parágrafos, etc)
        const elementos = parseContent(pagina.content.rendered);
        setConteudo(elementos);
      })
      .catch(() => {
        console.warn("Não foi possível buscar o conteúdo do WordPress.");
      });
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Arena de CS:GO da FURIA Esports"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-[0.3em] text-primary"
        >
          {/* Exemplo: Pegando a tag de cima do WordPress */}
          {conteudo?.titulos[0]?.textContent || "FURIA · COUNTER-STRIKE"}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-6 text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-glow"
        >
          {/* Substituindo o texto estático pelo título do WP */}
          {conteudo?.titulos[1]?.textContent || "O Legado da "}
          <span className="text-primary">
            {conteudo?.titulos[2]?.textContent || "Pantera"}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
        >
          {/* Substituindo o parágrafo estático pelo do WP */}
          {conteudo?.paragrafos[0]?.textContent || "Reviva as maiores conquistas, campanhas épicas e momentos marcantes do time de CS da FURIA Esports."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#timeline"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-neon-strong)] hover:scale-105"
          >
            Explore nossa História
            <ChevronDown className="transition-transform group-hover:translate-y-0.5" size={20} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-8 py-4 text-base font-bold uppercase tracking-wider text-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary"
          >
            Sobre o time
          </a>
        </motion.div>
      </div>

      <a
        href="#timeline"
        aria-label="Rolar para a timeline"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="animate-bounce-down" size={28} />
      </a>
    </section>
  );
};

export default Hero;