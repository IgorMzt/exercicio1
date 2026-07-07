import { groupBy, sumBy, unique } from "./arrayUtils.js";

// Testes da funcao unique, que remove itens repetidos.
console.log("unique - exemplo 1:", unique([1, 2, 2, 3, 3, 4]));
console.log("unique - exemplo 2:", unique(["expo", "react", "expo", "native"]));

// Dados usados para testar o groupBy.
const alunos = [
  { nome: "Ana", turma: "A" },
  { nome: "Bruno", turma: "B" },
  { nome: "Carla", turma: "A" },
  { nome: "Diego", turma: "B" }
];

const tarefas = [
  { titulo: "Setup", status: "feito" },
  { titulo: "TypeScript", status: "pendente" },
  { titulo: "Expo", status: "feito" }
];

// Agrupa os alunos por turma.
console.log("groupBy - exemplo 1:", groupBy(alunos, "turma"));

// Agrupa as tarefas por status.
console.log("groupBy - exemplo 2:", groupBy(tarefas, "status"));

// Dados usados para testar o sumBy.
const compras = [
  { item: "Caderno", valor: 18 },
  { item: "Caneta", valor: 4 },
  { item: "Mochila", valor: 120 }
];

const pontuacoes = [
  { jogador: "Ana", pontos: 10 },
  { jogador: "Bruno", pontos: 15 },
  { jogador: "Carla", pontos: 8 }
];

// Soma os valores das compras.
console.log("sumBy - exemplo 1:", sumBy(compras, "valor"));

// Soma os pontos dos jogadores.
console.log("sumBy - exemplo 2:", sumBy(pontuacoes, "pontos"));
