const router = require("express").Router();
const MyListController = require("../controllers/myListController");

router.get("/", MyListController.welcome);
router.get("/mylist/:name", MyListController.searchPokemon);
router.get("/mylist", MyListController.myPokemonList);
router.post("/mylist", MyListController.catchPokemon);
router.delete("/mylist/:id", MyListController.releasePokemon);

module.exports = router;
