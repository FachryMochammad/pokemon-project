const { MyList } = require("../models");

class MyListController {
  static welcome(req, res, next) {
    res
      .status(200)
      .json({ message: "Welcome to microservice My List Pokemon!" });
  }

  static myPokemonList(req, res, next) {
    MyList.findAll()
      .then((pokemons) => {
        res.status(200).json(pokemons);
      })
      .catch((err) => {
        next(err);
      });
  }

  static searchPokemon(req, res, next) {
    const name = req.params.name;
    MyList.findAll({ where: { pokemon_name: name } })
      .then((pokemons) => {
        res.status(200).json(pokemons);
      })
      .catch((err) => {
        next(err);
      });
  }

  static catchPokemon(req, res, next) {
    const catchPokemon = Math.floor(Math.random() * 2);
    const pokemon = {
      pokemon_name: req.body.pokemon_name,
      nickname: req.body.nickname,
      image: req.body.image,
    };
    if (catchPokemon) {
      MyList.create(pokemon)
        .then((pokemon) => {
          res.status(201).json(pokemon);
        })
        .catch((err) => {
          next(err);
        });
    } else {
      res.status(200).json({
        message: `Oh snap! You failed to catch ${pokemon.pokemon_name}`,
      });
    }
  }

  static releasePokemon(req, res, next) {
    const id = +req.params.id;
    MyList.destroy({ where: { id } })
      .then((_) => {
        res.status(200).json({
          message: "You have release this pokemon from your pokemon list",
        });
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = MyListController;
