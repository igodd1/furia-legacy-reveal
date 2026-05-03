export type Achievement = {
  id: number;
  year: string;
  tournament: string;
  placement: string;
  description: string;
  icon: "trophy" | "medal" | "award" | "flame" | "star" | "crown" | "target";
};

export const achievements: Achievement[] = [
  {
    id: 1,
    year: "2018",
    tournament: "Fundação da FURIA CS:GO",
    placement: "O início da lenda",
    description:
      "A FURIA monta seu line-up brasileiro e começa sua jornada para se tornar uma das maiores potências do CS mundial.",
    icon: "flame",
  },
  {
    id: 2,
    year: "2019",
    tournament: "ESL Pro League Season 10 — Finais Norte-Americanas",
    placement: "🏆 Campeão",
    description:
      "Primeiro grande título internacional da organização, consolidando a FURIA como força emergente no cenário norte-americano.",
    icon: "trophy",
  },
  {
    id: 3,
    year: "2020",
    tournament: "DreamHack Masters Spring NA",
    placement: "🏆 Campeão",
    description:
      "Em meio a uma campanha dominante, a FURIA conquista mais um Masters e firma o ‘furia style’ agressivo como marca registrada.",
    icon: "crown",
  },
  {
    id: 4,
    year: "2022",
    tournament: "ESL Pro League Season 15",
    placement: "🥈 Vice-Campeão",
    description:
      "Campanha histórica até a grande final, mostrando ao mundo que o Brasil voltou para a elite do CS:GO global.",
    icon: "medal",
  },
  {
    id: 5,
    year: "2022",
    tournament: "IEM Rio Major 2022",
    placement: "🥉 Semifinalista",
    description:
      "Em casa, na Jeunesse Arena lotada, a FURIA emocionou o Brasil com uma campanha épica até a semifinal do Major.",
    icon: "star",
  },
  {
    id: 6,
    year: "2023",
    tournament: "Elisa Masters Espoo 2023",
    placement: "🏆 Campeão",
    description:
      "FURIA atravessa o Atlântico e ergue mais um troféu internacional, batendo gigantes europeus no caminho.",
    icon: "trophy",
  },
  {
    id: 7,
    year: "2023",
    tournament: "BLAST Premier Fall Showdown",
    placement: "🏆 Campeão",
    description:
      "Mais uma taça para a estante. A FURIA confirma sua presença constante entre os melhores times do mundo.",
    icon: "award",
  },
  {
    id: 8,
    year: "2024",
    tournament: "Era CS2 — A Nova Geração",
    placement: "Reformulação histórica",
    description:
      "Com a chegada do Counter-Strike 2, a FURIA inicia um novo ciclo, mirando ainda mais alto e renovando a paixão da torcida.",
    icon: "target",
  },
];
