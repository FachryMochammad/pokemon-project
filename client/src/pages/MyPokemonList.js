import React from "react";
import { Navbar, PokemonCard, Loading, Error } from "../components";
import useFetch from "../helpers/hooks/useFetch";
import baseUrl from "../api";

const MyPokemonList = () => {
  const { data, loading, error, setRequestData } = useFetch(
    `${baseUrl}/mylist`
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Navbar />
          <div className="container-fluid">
            <div className="row p-4">
              <h1 className="title-page mt-3 text-center">My Pokemon List</h1>
              <h5 className="owned-pokemon mt-3 text-center">
                Total owned pokemon: {data.length}
              </h5>
              {data.map((pokemon) => (
                <PokemonCard
                  pokemon={pokemon}
                  setRequestData={setRequestData}
                  key={pokemon.nickname}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyPokemonList;
