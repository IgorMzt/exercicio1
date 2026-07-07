// Tipo de cada item da lista de tipos retornada pela API.
interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

// Dados da API que serao usados no programa.
interface PokemonApiResponse {
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
}

// Coloca a primeira letra em maiuscula.
const capitalize = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);

// Monta o texto final com nome, altura, peso e tipos.
const formatPokemon = (pokemon: PokemonApiResponse): string => {
  const name = capitalize(pokemon.name);
  const heightInMeters = pokemon.height / 10;
  const weightInKg = pokemon.weight / 10;
  const types = pokemon.types
    .sort((a, b) => a.slot - b.slot)
    .map(({ type }) => capitalize(type.name))
    .join(", ");

  return `${name} - ${heightInMeters} m - ${weightInKg} kg - ${types}`;
};

// Busca o Pokemon na PokeAPI e trata os erros principais.
const showPokemon = async (idOrName: string): Promise<void> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(idOrName)}`;

  try {
    const response = await fetch(url);

    if (response.status === 404) {
      console.error("❌ Pokémon não encontrado!");
      process.exitCode = 1;
      return;
    }

    if (!response.ok) {
      console.error(`Erro inesperado da API: ${response.status}`);
      process.exitCode = 1;
      return;
    }

    const pokemon = (await response.json()) as PokemonApiResponse;
    console.log(formatPokemon(pokemon));
  } catch {
    console.error("⚠️ Erro de rede. Tente novamente.");
    process.exitCode = 1;
  }
};

// Pega o nome ou ID enviado pelo terminal.
const input = process.argv[2]?.trim().toLowerCase();

if (!input) {
  console.error("Informe um nome ou ID de Pokémon. Ex.: npm run pokedex -- pikachu");
  process.exitCode = 1;
} else {
  await showPokemon(input);
}
