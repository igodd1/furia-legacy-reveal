const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-black text-lg shadow-[var(--shadow-neon)] group-hover:animate-pulse-glow">
            F
          </span>
          <span className="font-bold text-lg tracking-widest uppercase">
            FURIA<span className="text-primary">.cs</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">Conquistas</a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
          <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors">Stats</a>
        </nav>
        <a
          href="#timeline"
          className="hidden sm:inline-flex rounded-md border border-primary/50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          #DIADEFURIA
        </a>
      </div>
    </header>
  );
};

export default Navbar;
