import { groupBy, sumBy, unique } from "./arrayUtils.js";

interface Aluno {
  nome: string;
  turma: "A" | "B";
}

interface Tarefa {
  titulo: string;
  status: "feito" | "pendente";
}

interface Compra {
  item: string;
  valor: number;
}

interface Pontuacao {
  jogador: string;
  pontos: number;
}

console.log("unique - exemplo 1:", unique<number>([1, 2, 2, 3, 3, 4]));
console.log("unique - exemplo 2:", unique<string>(["expo", "react", "expo", "native"]));

const alunos: Aluno[] = [
  { nome: "Ana", turma: "A" },
  { nome: "Bruno", turma: "B" },
  { nome: "Carla", turma: "A" },
  { nome: "Diego", turma: "B" }
];

const tarefas: Tarefa[] = [
  { titulo: "Setup", status: "feito" },
  { titulo: "TypeScript", status: "pendente" },
  { titulo: "Expo", status: "feito" }
];

console.log("groupBy - exemplo 1:", groupBy(alunos, "turma"));

console.log("groupBy - exemplo 2:", groupBy(tarefas, "status"));

const compras: Compra[] = [
  { item: "Caderno", valor: 18 },
  { item: "Caneta", valor: 4 },
  { item: "Mochila", valor: 120 }
];

const pontuacoes: Pontuacao[] = [
  { jogador: "Ana", pontos: 10 },
  { jogador: "Bruno", pontos: 15 },
  { jogador: "Carla", pontos: 8 }
];

console.log("sumBy - exemplo 1:", sumBy(compras, "valor"));

console.log("sumBy - exemplo 2:", sumBy(pontuacoes, "pontos"));
