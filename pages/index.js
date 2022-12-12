import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <li>
      <Link href={`pokemones/${id}`}>{pokemon.name.toUpperCase()}</Link>
    </li>
  );
};
export default function Pokemones({ pokemones }) {
  return (
    <div>
      <p>Pokemones</p>
      <ul>
        {pokemones.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </ul>
      <p>Hola Mundo Pokemon</p>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151/");
  const data = await response.json();
  console.log(data);
  return {
    props: { pokemones: data.results },
  };
};
