import React from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import baseUrl from "../api";

const PokemonCard = ({ pokemon, setRequestData }) => {
  const history = useHistory();

  const toPokemonDetail = (event, name) => {
    event.preventDefault();
    history.push(`/pokemon/${name}`);
  };

  const releasePokemon = (event, id, nickname) => {
    event.preventDefault();
    swal({
      title: `Are you sure want to release ${nickname} from your pokemon list?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`${baseUrl}/mylist/${id}`)
          .then(({ data }) => {
            setRequestData(new Date());
            swal(`${data.message}`, {
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <>
      {pokemon.nickname ? (
        <>
          <div className="col-md-4 col-sm-6 col-lg-4 mt-3 mb-3">
            <div
              className="card"
              style={{ border: "none", background: "transparent" }}
            >
              <span className="circle">
                <i
                  title="Release Pokemon"
                  className="bi bi-x-circle delete-icon"
                  onClick={(event) => {
                    const id = pokemon.id;
                    const nickname = pokemon.nickname;
                    releasePokemon(event, id, nickname);
                  }}
                ></i>
              </span>
              <img
                src={pokemon.image}
                className="card-image"
                alt={pokemon.name}
              />
              <div className="card-body text-center">
                <h5 className="card-name">{pokemon.nickname}</h5>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="col-md-4 col-sm-6 col-lg-4 mt-3 mb-3">
            <div
              className="card"
              style={{ border: "none", background: "transparent" }}
              onClick={(event) => {
                const name = pokemon.name;
                toPokemonDetail(event, name);
              }}
            >
              <img
                src={pokemon.image}
                className="card-image"
                alt={pokemon.name}
              />
              <div className="card-body text-center">
                <h5 className="card-name">{pokemon.name}</h5>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonCard;
