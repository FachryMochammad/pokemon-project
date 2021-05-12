import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { Loading, Error, Navbar } from "../components";
import { GET_ONE_POKEMON } from "../queries";
import useFetch from "../helpers/hooks/useFetch";
import baseUrl from "../api";

const PokemonDetail = () => {
  const { name } = useParams();
  const { data: owned, setRequestData } = useFetch(`${baseUrl}/mylist/${name}`);
  const { data, loading, error } = useQuery(GET_ONE_POKEMON, {
    variables: { name },
  });

  const catchPokemon = (event, name, image) => {
    event.preventDefault();
    swal("Give this pokemon nickname :", {
      content: "input",
      button: {
        text: "Throw a pokeball!",
        closeModal: true,
      },
    })
      .then((value) => {
        if (!value) throw error;
        return axios.post(`${baseUrl}/mylist`, {
          pokemon_name: name,
          nickname: value,
          image,
        });
      })
      .then(({ data }) => {
        if (data.message) {
          swal("Pokemon has run away!", `${data.message}!`, "error");
        } else {
          setRequestData(new Date());
          swal(
            "Gotcha!",
            `${name[0].toUpperCase() + name.slice(1)} was caught!`,
            "success"
          );
        }
      })
      .catch((err) => {
        if (err) {
          swal("Argh!", `${err.response.data.message}!`, "error");
        }
      });
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <Navbar />
          <div className="container-fluid text-center d-flex justify-content-center">
            <div
              className="card text-center mt-5 d-flex align-items-center"
              style={{
                border: "none",
                background: "transparent",
                width: "500px",
                borderRadius: "25px",
              }}
            >
              <img
                className="img-fluid"
                src={data.pokemon.sprites.front_default}
                alt={data.pokemon.name}
                width="300px"
              />
              <h3 className="detail-name mt-3">{data.pokemon.name}</h3>
              <h5 className="owned-pokemon mt-3 text-center">
                Owned: {owned.length}
              </h5>
              <p className="detail-types mt-3">
                {data.pokemon.types.map((type, i) => (
                  <span
                    className="type"
                    style={{
                      background:
                        type.type.name === "fire"
                          ? "#FF4422"
                          : type.type.name === "water"
                          ? "#3399FF"
                          : type.type.name === "electric"
                          ? "#FFCC33"
                          : type.type.name === "grass"
                          ? "#77CC55"
                          : type.type.name === "ice"
                          ? "#66CCFF"
                          : type.type.name === "fighting"
                          ? "#BB5544"
                          : type.type.name === "poison"
                          ? "#AA5599"
                          : type.type.name === "ground"
                          ? "#DDBB55"
                          : type.type.name === "flying"
                          ? "#8899FF"
                          : type.type.name === "psychic"
                          ? "#FF5599"
                          : type.type.name === "bug"
                          ? "#AABB22"
                          : type.type.name === "rock"
                          ? "#BBAA66"
                          : type.type.name === "ghost"
                          ? "#6666BB"
                          : type.type.name === "dragon"
                          ? "#7766EE"
                          : type.type.name === "dark"
                          ? "#775544"
                          : type.type.name === "steel"
                          ? "#AAAABB"
                          : type.type.name === "fairy"
                          ? "#EE99EE"
                          : "#AAAA99",
                    }}
                    key={i}
                  >
                    {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                  </span>
                ))}
              </p>
              <button
                className="catch-btn mt-3"
                onClick={(event) => {
                  const name = data.pokemon.name;
                  const image = data.pokemon.sprites.front_default;
                  catchPokemon(event, name, image);
                }}
              >
                Catch em!
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonDetail;
