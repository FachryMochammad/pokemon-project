import React from "react";
import { useQuery } from "@apollo/client";
import { Navbar, PokemonCard, Loading, Error } from "../components";
import { GET_ALL_POKEMON } from "../queries";

const Home = () => {
  const { data, loading, error } = useQuery(GET_ALL_POKEMON, {
    variables: { limit: 151, offset: 0 },
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Navbar />
          <div className="container-fluid text-center">
            <div className="row p-5">
              {data.pokemons.results.map((pokemon) => (
                <PokemonCard pokemon={pokemon} key={pokemon.name} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
