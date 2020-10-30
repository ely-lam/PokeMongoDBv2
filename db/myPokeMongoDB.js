const { MongoClient } = require("mongodb");

function MyDB() {
  const myDB = {};

  const uri = "mongodb://localhost:27017";

  myDB.getPlayer = async (player) => {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("pokedb"); // access pokemon db
    const players = db.collection("players"); // access players collection
    const query = { name: player };
    const result = await players.find(query).toArray(); // wait for query result
    if (result == undefined || result.length == 0){ // if no entry for user
      var newEntry = { name: player };
      players.insertOne(newEntry); // create new entry in db
    }
    return players.find(query).toArray(); // return the players file
  };

  myDB.setPokemon = async (player, team, dex, newPokemon) => {
    const tempString = team + "." + dex;
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("pokedb"); // access pokemon db
    const players = db.collection("players"); // access players collection
    players.updateOne({ name: player }, { $set: { [tempString]: newPokemon } }); // update the pokemon
    return;
  };

  myDB.getPokemon = async (pokeDBSearch) => {
    console.log(`getting pokemon: ${pokeDBSearch}`);
    const client = new MongoClient(uri);

    await client.connect();

    const db = client.db("pokedb"); // access pokemon db
    const pokemon = db.collection("pokemon"); // access pokemon collection
    const query = { Pokemon: pokeDBSearch };
    const result = await pokemon.find(query).toArray(); // wait for query result
    if (result == undefined || result.length == 0){ // if no entry for pokemon or pokemon does not exist
      console.log(`could not find ${pokeDBSearch}`);
    }
    return pokemon.find(query).toArray();
  };

  myDB.loadPokemon = async() => {
    const client = new MongoClient(uri);

    await client.connect();

    const db = client.db("pokedb"); // access pokemon db
    db.collection("pokemon", function (err, collection) {
      collection.insertOne({ Number: "001", Pokemon: "Bulbasaur",   HP: 45 , Atk: 49 , Def: 49 , SpA: 65 , SpD: 65 , Spe: 45 , Total: 318, Type_1:"Grass", Type_2: "Poison" });
      collection.insertOne({ Number: "002", Pokemon: "Ivysaur",   HP: 60 , Atk: 62 , Def: 63 , SpA: 80 , SpD: 80 , Spe: 60 , Total: 405, Type_1:"Grass", Type_2: "Poison" });
      collection.insertOne({ Number: "003", Pokemon: "Venusaur",   HP: 80 , Atk: 82 , Def: 83 , SpA: 100, SpD: 100, Spe: 80 , Total: 525, Type_1:"Grass", Type_2: "Poison" });
      collection.insertOne({ Number: "004", Pokemon: "Charmander",   HP: 39 , Atk: 52 , Def: 43 , SpA: 60 , SpD: 50 , Spe: 65 , Total: 309, Type_1:"Fire" });
      collection.insertOne({ Number: "005", Pokemon: "Charmeleon",   HP: 58 , Atk: 64 , Def: 58 , SpA: 80 , SpD: 65 , Spe: 80 , Total: 405, Type_1:"Fire" });
      collection.insertOne({ Number: "006", Pokemon: "Charizard",   HP: 78 , Atk: 84 , Def: 78 , SpA: 109, SpD: 85 , Spe: 100, Total: 534, Type_1:"Fire", Type_2: "Flying" });
      collection.insertOne({ Number: "007", Pokemon: "Squirtle",   HP: 44 , Atk: 48 , Def: 65 , SpA: 60 , SpD: 54 , Spe: 43 , Total: 314, Type_1:"Water" });
      collection.insertOne({ Number: "008", Pokemon: "Wartortle",   HP: 59 , Atk: 63 , Def: 80 , SpA: 65 , SpD: 80 , Spe: 58 , Total: 405, Type_1:"Water" });
      collection.insertOne({ Number: "009", Pokemon: "Blastoise",   HP: 79 , Atk: 83 , Def: 100, SpA: 85 , SpD: 105, Spe: 78 , Total: 530, Type_1:"Water" });
      collection.insertOne({ Number: "010", Pokemon: "Caterpie",   HP: 45 , Atk: 30 , Def: 35 , SpA: 20 , SpD: 20 , Spe: 45 , Total: 195, Type_1:"Bug" });
      collection.insertOne({ Number: "011", Pokemon: "Metapod",   HP: 50 , Atk: 20 , Def: 55 , SpA: 25 , SpD: 25 , Spe: 30 , Total: 205, Type_1:"Bug" });
      collection.insertOne({ Number: "012", Pokemon: "Butterfree",   HP: 60 , Atk: 45 , Def: 50 , SpA: 80 , SpD: 80 , Spe: 70 , Total: 385, Type_1:"Bug", Type_2: "Flying" });
      collection.insertOne({ Number: "013", Pokemon: "Weedle",   HP: 40 , Atk: 35 , Def: 30 , SpA: 20 , SpD: 20 , Spe: 50 , Total: 195, Type_1:"Bug", Type_2: "Poison" });
      collection.insertOne({ Number: "014", Pokemon: "Kakuna",   HP: 45 , Atk: 25 , Def: 50 , SpA: 25 , SpD: 25 , Spe: 35 , Total: 205, Type_1:"Bug", Type_2: "Poison" });
      collection.insertOne({ Number: "015", Pokemon: "Beedrill",   HP: 65 , Atk: 80 , Def: 40 , SpA: 40 , SpD: 80 , Spe: 75 , Total: 380, Type_1:"Bug", Type_2: "Poison" });
      collection.insertOne({ Number: "016", Pokemon: "Pidgey",   HP: 40 , Atk: 45 , Def: 40 , SpA: 35 , SpD: 35 , Spe: 56 , Total: 251, Type_1:"Normal", Type_2: "Flying" });
      collection.insertOne({ Number: "017", Pokemon: "Pidgeotto",   HP: 63 , Atk: 60 , Def: 55 , SpA: 50 , SpD: 50 , Spe: 71 , Total: 349, Type_1:"Normal", Type_2: "Flying" });
      collection.insertOne({ Number: "018", Pokemon: "Pidgeot",   HP: 83 , Atk: 80 , Def: 75 , SpA: 70 , SpD: 70 , Spe: 91 , Total: 469, Type_1:"Normal", Type_2: "Flying" });
      collection.insertOne({ Number: "019", Pokemon: "Rattata",   HP: 30 , Atk: 56 , Def: 35 , SpA: 25 , SpD: 35 , Spe: 72 , Total: 253, Type_1:"Normal"   });
      collection.insertOne({ Number: "020", Pokemon: "Raticate",   HP: 55 , Atk: 81 , Def: 60 , SpA: 50 , SpD: 70 , Spe: 97 , Total: 413, Type_1:"Normal"   });
      collection.insertOne({ Number: "021", Pokemon: "Spearow",   HP: 40 , Atk: 60 , Def: 30 , SpA: 31 , SpD: 31 , Spe: 70 , Total: 262, Type_1:"Normal", Type_2: "Flying" });
      collection.insertOne({ Number: "022", Pokemon: "Fearow",   HP: 65 , Atk: 90 , Def: 65 , SpA: 61 , SpD: 61 , Spe: 100, Total: 442, Type_1:"Normal", Type_2: "Flying" });
      collection.insertOne({ Number: "023", Pokemon: "Ekans",   HP: 30 , Atk: 60 , Def: 44 , SpA: 40 , SpD: 54 , Spe: 55 , Total: 283, Type_1:"Poison"   });
      collection.insertOne({ Number: "024", Pokemon: "Arbok",   HP: 60 , Atk: 85 , Def: 69 , SpA: 65 , SpD: 79 , Spe: 80 , Total: 438, Type_1:"Poison"  });
      collection.insertOne({ Number: "025", Pokemon: "Pikachu",   HP: 35 , Atk: 55 , Def: 30 , SpA: 50 , SpD: 40 , Spe: 90 , Total: 300, Type_1:"Electric" });
      collection.insertOne({ Number: "026", Pokemon: "Raichu",   HP: 60 , Atk: 90 , Def: 55 , SpA: 90 , SpD: 80 , Spe: 100, Total: 475, Type_1:"Electric" });
      collection.insertOne({ Number: "027", Pokemon: "Sandshrew",   HP: 50 , Atk: 75 , Def: 85 , SpA: 20 , SpD: 30 , Spe: 40 , Total: 300, Type_1:"Ground" });
      collection.insertOne({ Number: "028", Pokemon: "Sandslash",   HP: 75 , Atk: 100, Def: 110, SpA: 45 , SpD: 55 , Spe: 65 , Total: 450, Type_1:"Ground" });
      collection.insertOne({ Number: "029", Pokemon: "Nidoran",   HP: 55 , Atk: 47 , Def: 52 , SpA: 40 , SpD: 40 , Spe: 41 , Total: 275, Type_1:"Poison" });
      collection.insertOne({ Number: "030", Pokemon: "Nidorina",   HP: 70 , Atk: 62 , Def: 67 , SpA: 55 , SpD: 55 , Spe: 56 , Total: 365, Type_1:"Poison" });
      collection.insertOne({ Number: "031", Pokemon: "Nidoqueen",   HP: 90 , Atk: 82 , Def: 87 , SpA: 75 , SpD: 85 , Spe: 76 , Total: 495, Type_1:"Poison", Type_2: "Ground" });
      collection.insertOne({ Number: "032", Pokemon: "Nidoran",   HP: 46 , Atk: 57 , Def: 40 , SpA: 40 , SpD: 40 , Spe: 50 , Total: 273, Type_1:"Poison" });
      collection.insertOne({ Number: "033", Pokemon: "Nidorino",   HP: 61 , Atk: 72 , Def: 57 , SpA: 55 , SpD: 55 , Spe: 65 , Total: 365, Type_1:"Poison" });
      collection.insertOne({ Number: "034", Pokemon: "Nidoking",   HP: 81 , Atk: 92 , Def: 77 , SpA: 85 , SpD: 75 , Spe: 85 , Total: 495, Type_1:"Poison", Type_2: "Ground" });
      collection.insertOne({ Number: "035", Pokemon: "Clefairy",   HP: 70 , Atk: 45 , Def: 48 , SpA: 60 , SpD: 65 , Spe: 35 , Total: 323, Type_1:"Normal" });
      collection.insertOne({ Number: "036", Pokemon: "Clefable",   HP: 95 , Atk: 70 , Def: 73 , SpA: 85 , SpD: 90 , Spe: 60 , Total: 473, Type_1:"Normal" });
      collection.insertOne({ Number: "037", Pokemon: "Vulpix",   HP: 38 , Atk: 41 , Def: 40 , SpA: 50 , SpD: 65 , Spe: 65 , Total: 299, Type_1:"Fire" });
      collection.insertOne({ Number: "038", Pokemon: "Ninetales",   HP: 73 , Atk: 76 , Def: 75 , SpA: 81 , SpD: 100, Spe: 100, Total: 505, Type_1:"Fire" });
      collection.insertOne({ Number: "039", Pokemon: "Jigglypuff",   HP: 115, Atk: 45 , Def: 20 , SpA: 45 , SpD: 25 , Spe: 20 , Total: 270, Type_1:"Normal" });
      collection.insertOne({ Number: "040", Pokemon: "Wigglytuff",   HP: 140, Atk: 70 , Def: 45 , SpA: 75 , SpD: 50 , Spe: 45 , Total: 425, Type_1:"Normal" });
      collection.insertOne({ Number: "041", Pokemon: "Zubat",   HP: 40 , Atk: 45 , Def: 35 , SpA: 30 , SpD: 40 , Spe: 55 , Total: 245, Type_1:"Poison", Type_2: "Flying" });
      collection.insertOne({ Number: "042", Pokemon: "Golbat",   HP: 75 , Atk: 80 , Def: 70 , SpA: 65 , SpD: 75 , Spe: 90 , Total: 455, Type_1:"Poison", Type_2: "Flying" });
      collection.insertOne({ Number: "043", Pokemon: "Oddish",   HP: 45 , Atk: 50 , Def: 55 , SpA: 75 , SpD: 65 , Spe: 30 , Total: 320, Type_1:"Grass", Type_2: "Poison" });
      collection.insertOne({ Number: "044", Pokemon: "Gloom",   HP: 60 , Atk: 65 , Def: 70 , SpA: 85 , SpD: 75 , Spe: 40 , Total: 395, Type_1:"Grass", Type_2: "Poison" });
      collection.insertOne({ Number: "045", Pokemon: "Vileplume",   HP: 75 , Atk: 80 , Def: 85 , SpA: 100, SpD: 90 , Spe: 50 , Total: 480, Type_1:"Grass", Type_2: "Poison" });
      collection.insertOne({ Number: "046", Pokemon: "Paras",   HP: 35 , Atk: 70 , Def: 55 , SpA: 45 , SpD: 55 , Spe: 25 , Total: 285, Type_1:"Bug", Type_2: "Grass" });
      collection.insertOne({ Number: "047", Pokemon: "Parasect",   HP: 60 , Atk: 95 , Def: 80 , SpA: 60 , SpD: 80 , Spe: 30 , Total: 405, Type_1:"Bug", Type_2: "Grass" });
      collection.insertOne({ Number: "048", Pokemon: "Venonat",   HP: 60 , Atk: 55 , Def: 50 , SpA: 40 , SpD: 55 , Spe: 45 , Total: 305, Type_1:"Bug", Type_2: "Poison" });
      collection.insertOne({ Number: "049", Pokemon: "Venomoth",   HP: 70 , Atk: 65 , Def: 60 , SpA: 90 , SpD: 75 , Spe: 90 , Total: 450, Type_1:"Bug", Type_2: "Poison" });
      collection.insertOne({ Number: "050", Pokemon: "Diglett",   HP: 10 , Atk: 55 , Def: 25 , SpA: 35 , SpD: 45 , Spe: 95 , Total: 265, Type_1:"Ground" });
      collection.insertOne({ Number: "051", Pokemon: "Dugtrio",   HP: 35 , Atk: 80 , Def: 50 , SpA: 50 , SpD: 70 , Spe: 120, Total: 405, Type_1:"Ground" });
      collection.insertOne({ Number: "052", Pokemon: "Meowth",   HP: 40 , Atk: 45 , Def: 35 , SpA: 40 , SpD: 40 , Spe: 90 , Total: 290, Type_1:"Normal" });
      collection.insertOne({ Number: "053", Pokemon: "Persian",   HP: 65 , Atk: 70 , Def: 60 , SpA: 65 , SpD: 65 , Spe: 115, Total: 440, Type_1:"Normal" });
      collection.insertOne({ Number: "054", Pokemon: "Psyduck",   HP: 50 , Atk: 52 , Def: 48 , SpA: 65 , SpD: 50 , Spe: 55 , Total: 320, Type_1:"Water" });
      collection.insertOne({ Number: "055", Pokemon: "Golduck",   HP: 80 , Atk: 82 , Def: 78 , SpA: 95 , SpD: 80 , Spe: 85 , Total: 500, Type_1:"Water"  });
      collection.insertOne({ Number: "056", Pokemon: "Mankey",   HP: 40 , Atk: 80 , Def: 35 , SpA: 35 , SpD: 45 , Spe: 70 , Total: 305, Type_1:"Fighting" });
      collection.insertOne({ Number: "057", Pokemon: "Primeape",   HP: 65 , Atk: 105, Def: 60 , SpA: 60 , SpD: 70 , Spe: 95 , Total: 455, Type_1:"Fighting" });
      collection.insertOne({ Number: "058", Pokemon: "Growlithe",   HP: 55 , Atk: 70 , Def: 45 , SpA: 70 , SpD: 50 , Spe: 60 , Total: 350, Type_1:"Fire" });
      collection.insertOne({ Number: "059", Pokemon: "Arcanine",   HP: 90 , Atk: 110, Def: 80 , SpA: 100, SpD: 80 , Spe: 95 , Total: 555, Type_1:"Fire" });
      collection.insertOne({ Number: "060", Pokemon: "Poliwag",   HP: 40 , Atk: 50 , Def: 40 , SpA: 40 , SpD: 40 , Spe: 90 , Total: 300, Type_1:"Water" });
      collection.insertOne({ Number: "061", Pokemon: "Poliwhirl",   HP: 65 , Atk: 65 , Def: 65 , SpA: 50 , SpD: 50 , Spe: 90 , Total: 385, Type_1:"Water" });
      collection.insertOne({ Number: "062", Pokemon: "Poliwrath",   HP: 90 , Atk: 85 , Def: 95 , SpA: 70 , SpD: 90 , Spe: 70 , Total: 500, Type_1:"Water", Type_2: "Fighting" });
      collection.insertOne({ Number: "063", Pokemon: "Abra",   HP: 25 , Atk: 20 , Def: 15 , SpA: 105, SpD: 55 , Spe: 90 , Total: 310, Type_1:"Psychic" });
      collection.insertOne({ Number: "064", Pokemon: "Kadabra",   HP: 40 , Atk: 35 , Def: 30 , SpA: 120, SpD: 70 , Spe: 105, Total: 400, Type_1:"Psychic" });
      collection.insertOne({ Number: "065", Pokemon: "Alakazam",   HP: 55 , Atk: 50 , Def: 45 , SpA: 135, SpD: 85 , Spe: 120, Total: 490, Type_1:"Psychic" });
      collection.insertOne({ Number: "066", Pokemon: "Machop",   HP: 70 , Atk: 80 , Def: 50 , SpA: 35 , SpD: 35 , Spe: 35 , Total: 305, Type_1:"Fighting"  });
      collection.insertOne({ Number: "067", Pokemon: "Machoke",   HP: 80 , Atk: 100, Def: 70 , SpA: 50 , SpD: 60 , Spe: 45 , Total: 405, Type_1:"Fighting"  });
      collection.insertOne({ Number: "068", Pokemon: "Machamp",   HP: 90 , Atk: 130, Def: 80 , SpA: 65 , SpD: 85 , Spe: 55 , Total: 505, Type_1:"Fighting"  });
      collection.insertOne({ Number: "069", Pokemon: "Bellsprout",   HP: 50 , Atk: 75 , Def: 35 , SpA: 70 , SpD: 30 , Spe: 40 , Total: 300, Type_1:"Grass", Type_2: "Poison" });
      collection.insertOne({ Number: "070", Pokemon: "Weepinbell",   HP: 65 , Atk: 90 , Def: 50 , SpA: 85 , SpD: 45 , Spe: 55 , Total: 390, Type_1:"Grass", Type_2: "Poison" });
      collection.insertOne({ Number: "071", Pokemon: "Victreebel",   HP: 80 , Atk: 105, Def: 65 , SpA: 100, SpD: 60 , Spe: 70 , Total: 480, Type_1:"Grass", Type_2: "Poison" });
      collection.insertOne({ Number: "072", Pokemon: "Tentacool",   HP: 40 , Atk: 40 , Def: 35 , SpA: 50 , SpD: 100, Spe: 70 , Total: 335, Type_1:"Water", Type_2: "Poison" });
      collection.insertOne({ Number: "073", Pokemon: "Tentacruel",   HP: 80 , Atk: 70 , Def: 65 , SpA: 80 , SpD: 120, Spe: 100, Total: 515, Type_1:"Water", Type_2: "Poison" });
      collection.insertOne({ Number: "074", Pokemon: "Geodude",   HP: 40 , Atk: 80 , Def: 100, SpA: 30 , SpD: 30 , Spe: 20 , Total: 300, Type_1:"Rock", Type_2: "Ground" });
      collection.insertOne({ Number: "075", Pokemon: "Graveler",   HP: 55 , Atk: 95 , Def: 115, SpA: 45 , SpD: 45 , Spe: 35 , Total: 390, Type_1:"Rock", Type_2: "Ground" });
      collection.insertOne({ Number: "076", Pokemon: "Golem",   HP: 80 , Atk: 110, Def: 130, SpA: 55 , SpD: 65 , Spe: 45 , Total: 485, Type_1:"Rock", Type_2: "Ground" });
      collection.insertOne({ Number: "077", Pokemon: "Ponyta",   HP: 50 , Atk: 85 , Def: 55 , SpA: 65 , SpD: 65 , Spe: 90 , Total: 410, Type_1:"Fire"  });
      collection.insertOne({ Number: "078", Pokemon: "Rapidash",   HP: 65 , Atk: 100, Def: 70 , SpA: 80 , SpD: 80 , Spe: 105, Total: 500, Type_1:"Fire"  });
      collection.insertOne({ Number: "079", Pokemon: "Slowpoke",   HP: 90 , Atk: 65 , Def: 65 , SpA: 40 , SpD: 40 , Spe: 15 , Total: 315, Type_1:"Water", Type_2: "Psychic" });
      collection.insertOne({ Number: "080", Pokemon: "Slowbro",   HP: 95 , Atk: 75 , Def: 110, SpA: 100, SpD: 80 , Spe: 30 , Total: 490, Type_1:"Water", Type_2: "Psychic" });
      collection.insertOne({ Number: "081", Pokemon: "Magnemite",   HP: 25 , Atk: 35 , Def: 70 , SpA: 95 , SpD: 55 , Spe: 45 , Total: 325, Type_1:"Electric", Type_2: "Steel" });
      collection.insertOne({ Number: "082", Pokemon: "Magneton",   HP: 50 , Atk: 60 , Def: 95 , SpA: 120, SpD: 70 , Spe: 70 , Total: 465, Type_1:"Electric", Type_2: "Steel" });
      collection.insertOne({ Number: "083", Pokemon: "Farfetch'd",   HP: 52 , Atk: 65 , Def: 55 , SpA: 58 , SpD: 62 , Spe: 60 , Total: 352, Type_1:"Normal", Type_2: "Flying" });
      collection.insertOne({ Number: "084", Pokemon: "Doduo",   HP: 35 , Atk: 85 , Def: 45 , SpA: 35 , SpD: 35 , Spe: 75 , Total: 310, Type_1:"Normal", Type_2: "Flying" });
      collection.insertOne({ Number: "085", Pokemon: "Dodrio",   HP: 60 , Atk: 110, Def: 70 , SpA: 60 , SpD: 60 , Spe: 100, Total: 460, Type_1:"Normal", Type_2: "Flying" });
      collection.insertOne({ Number: "086", Pokemon: "Seel",   HP: 65 , Atk: 45 , Def: 55 , SpA: 45 , SpD: 70 , Spe: 45 , Total: 325, Type_1:"Water" });
      collection.insertOne({ Number: "087", Pokemon: "Dewgong",   HP: 90 , Atk: 70 , Def: 80 , SpA: 70 , SpD: 95 , Spe: 70 , Total: 475, Type_1:"Water", Type_2: "Ice" });
      collection.insertOne({ Number: "088", Pokemon: "Grimer",   HP: 80 , Atk: 80 , Def: 50 , SpA: 40 , SpD: 50 , Spe: 25 , Total: 325, Type_1:"Poison"  });
      collection.insertOne({ Number: "089", Pokemon: "Muk",   HP: 105, Atk: 105, Def: 75 , SpA: 65 , SpD: 100, Spe: 50 , Total: 500, Type_1:"Poison" });
      collection.insertOne({ Number: "090", Pokemon: "Shellder",   HP: 30 , Atk: 65 , Def: 100, SpA: 45 , SpD: 25 , Spe: 40 , Total: 305, Type_1:"Water" });
      collection.insertOne({ Number: "091", Pokemon: "Cloyster",   HP: 50 , Atk: 90 , Def: 180, SpA: 85 , SpD: 45 , Spe: 70 , Total: 520, Type_1:"Water", Type_2: "Ice" });
      collection.insertOne({ Number: "092", Pokemon: "Gastly",   HP: 30 , Atk: 35 , Def: 30 , SpA: 100, SpD: 35 , Spe: 80 , Total: 310, Type_1:"Ghost", Type_2: "Poison" });
      collection.insertOne({ Number: "093", Pokemon: "Haunter",   HP: 45 , Atk: 50 , Def: 45 , SpA: 115, SpD: 55 , Spe: 95 , Total: 405, Type_1:"Ghost", Type_2: "Poison" });
      collection.insertOne({ Number: "094", Pokemon: "Gengar",   HP: 60 , Atk: 65 , Def: 60 , SpA: 130, SpD: 75 , Spe: 110, Total: 500, Type_1:"Ghost", Type_2: "Poison" });
      collection.insertOne({ Number: "095", Pokemon: "Onix",   HP: 35 , Atk: 45 , Def: 160, SpA: 30 , SpD: 45 , Spe: 70 , Total: 385, Type_1:"Rock", Type_2: "Ground" });
      collection.insertOne({ Number: "096", Pokemon: "Drowzee",   HP: 60 , Atk: 48 , Def: 45 , SpA: 43 , SpD: 90 , Spe: 42 , Total: 328, Type_1:"Psychic" });
      collection.insertOne({ Number: "097", Pokemon: "Hypno",   HP: 85 , Atk: 73 , Def: 70 , SpA: 73 , SpD: 115, Spe: 67 , Total: 483, Type_1:"Psychic" });
      collection.insertOne({ Number: "098", Pokemon: "Krabby",   HP: 30 , Atk: 105, Def: 90 , SpA: 25 , SpD: 25 , Spe: 50 , Total: 325, Type_1:"Water" });
      collection.insertOne({ Number: "099", Pokemon: "Kingler",   HP: 55 , Atk: 130, Def: 115, SpA: 50 , SpD: 50 , Spe: 75 , Total: 475, Type_1:"Water" });
      collection.insertOne({ Number: "100", Pokemon: "Voltorb",   HP: 40 , Atk: 30 , Def: 50 , SpA: 55 , SpD: 55 , Spe: 100, Total: 330, Type_1:"Electric" });
      collection.insertOne({ Number: "101", Pokemon: "Electrode",   HP: 60 , Atk: 50 , Def: 70 , SpA: 80 , SpD: 80 , Spe: 140, Total: 480, Type_1:"Electric" });
      collection.insertOne({ Number: "102", Pokemon: "Exeggcute",   HP: 60 , Atk: 40 , Def: 80 , SpA: 60 , SpD: 45 , Spe: 40 , Total: 325, Type_1:"Grass", Type_2: "Psychic" });
      collection.insertOne({ Number: "103", Pokemon: "Exeggutor",   HP: 95 , Atk: 95 , Def: 85 , SpA: 125, SpD: 65 , Spe: 55 , Total: 520, Type_1:"Grass", Type_2: "Psychic" });
      collection.insertOne({ Number: "104", Pokemon: "Cubone",   HP: 50 , Atk: 50 , Def: 95 , SpA: 40 , SpD: 50 , Spe: 35 , Total: 320, Type_1:"Ground" });
      collection.insertOne({ Number: "105", Pokemon: "Marowak",   HP: 60 , Atk: 80 , Def: 110, SpA: 50 , SpD: 80 , Spe: 45 , Total: 425, Type_1:"Ground" });
      collection.insertOne({ Number: "106", Pokemon: "Hitmonlee",   HP: 50 , Atk: 120, Def: 53 , SpA: 35 , SpD: 110, Spe: 87 , Total: 455, Type_1:"Fighting" });
      collection.insertOne({ Number: "107", Pokemon: "Hitmonchan",   HP: 50 , Atk: 105, Def: 79 , SpA: 35 , SpD: 110, Spe: 76 , Total: 455, Type_1:"Fighting" });
      collection.insertOne({ Number: "108", Pokemon: "Lickitung",   HP: 90 , Atk: 55 , Def: 75 , SpA: 60 , SpD: 75 , Spe: 30 , Total: 385, Type_1:"Normal" });
      collection.insertOne({ Number: "109", Pokemon: "Koffing",   HP: 40 , Atk: 65 , Def: 95 , SpA: 60 , SpD: 45 , Spe: 35 , Total: 340, Type_1:"Poison" });
      collection.insertOne({ Number: "110", Pokemon: "Weezing",   HP: 65 , Atk: 90 , Def: 120, SpA: 85 , SpD: 70 , Spe: 60 , Total: 490, Type_1:"Poison" });
      collection.insertOne({ Number: "111", Pokemon: "Rhyhorn",   HP: 80 , Atk: 85 , Def: 95 , SpA: 30 , SpD: 30 , Spe: 25 , Total: 345, Type_1:"Ground", Type_2: "Rock" });
      collection.insertOne({ Number: "112", Pokemon: "Rhydon",   HP: 105, Atk: 130, Def: 120, SpA: 45 , SpD: 45 , Spe: 40 , Total: 485, Type_1:"Ground", Type_2: "Rock" });
      collection.insertOne({ Number: "113", Pokemon: "Chansey",   HP: 250, Atk: 5  , Def: 5  , SpA: 35 , SpD: 105, Spe: 50 , Total: 450, Type_1:"Normal" });
      collection.insertOne({ Number: "114", Pokemon: "Tangela",   HP: 65 , Atk: 55 , Def: 115, SpA: 100, SpD: 40 , Spe: 60 , Total: 435, Type_1:"Grass" });
      collection.insertOne({ Number: "115", Pokemon: "Kangaskhan",   HP: 105, Atk: 95 , Def: 80 , SpA: 40 , SpD: 80 , Spe: 90 , Total: 490, Type_1:"Normal" });
      collection.insertOne({ Number: "116", Pokemon: "Horsea",   HP: 30 , Atk: 40 , Def: 70 , SpA: 70 , SpD: 25 , Spe: 60 , Total: 295, Type_1:"Water" });
      collection.insertOne({ Number: "117", Pokemon: "Seadra",   HP: 55 , Atk: 65 , Def: 95 , SpA: 95 , SpD: 45 , Spe: 85 , Total: 440, Type_1:"Water" });
      collection.insertOne({ Number: "118", Pokemon: "Goldeen",   HP: 45 , Atk: 67 , Def: 60 , SpA: 35 , SpD: 50 , Spe: 63 , Total: 320, Type_1:"Water" });
      collection.insertOne({ Number: "119", Pokemon: "Seaking",   HP: 80 , Atk: 92 , Def: 65 , SpA: 65 , SpD: 80 , Spe: 68 , Total: 450, Type_1:"Water" });
      collection.insertOne({ Number: "120", Pokemon: "Staryu",   HP: 30 , Atk: 45 , Def: 55 , SpA: 70 , SpD: 55 , Spe: 85 , Total: 340, Type_1:"Water" });
      collection.insertOne({ Number: "121", Pokemon: "Starmie",   HP: 60 , Atk: 75 , Def: 85 , SpA: 100, SpD: 85 , Spe: 115, Total: 520, Type_1:"Water", Type_2: "Psychic" });
      collection.insertOne({ Number: "122", Pokemon: "Mr. Mime",   HP: 40 , Atk: 45 , Def: 65 , SpA: 100, SpD: 120, Spe: 90 , Total: 460, Type_1:"Psychic" });
      collection.insertOne({ Number: "123", Pokemon: "Scyther",   HP: 70 , Atk: 110, Def: 80 , SpA: 55 , SpD: 80 , Spe: 105, Total: 500, Type_1:"Bug", Type_2: "Flying" });
      collection.insertOne({ Number: "124", Pokemon: "Jynx",   HP: 65 , Atk: 50 , Def: 35 , SpA: 115, SpD: 95 , Spe: 95 , Total: 455, Type_1:"Ice", Type_2: "Psychic" });
      collection.insertOne({ Number: "125", Pokemon: "Electabuzz",   HP: 65 , Atk: 83 , Def: 57 , SpA: 95 , SpD: 85 , Spe: 105, Total: 490, Type_1:"Electric" });
      collection.insertOne({ Number: "126", Pokemon: "Magmar",   HP: 65 , Atk: 95 , Def: 57 , SpA: 100, SpD: 85 , Spe: 93 , Total: 495, Type_1:"Fire" });
      collection.insertOne({ Number: "127", Pokemon: "Pinsir",   HP: 65 , Atk: 125, Def: 100, SpA: 55 , SpD: 70 , Spe: 85 , Total: 500, Type_1:"Bug" });
      collection.insertOne({ Number: "128", Pokemon: "Tauros",   HP: 75 , Atk: 100, Def: 95 , SpA: 40 , SpD: 70 , Spe: 110, Total: 490, Type_1:"Normal" });
      collection.insertOne({ Number: "129", Pokemon: "Magikarp",   HP: 20 , Atk: 10 , Def: 55 , SpA: 15 , SpD: 20 , Spe: 80 , Total: 200, Type_1:"Water" });
      collection.insertOne({ Number: "130", Pokemon: "Gyarados",   HP: 95 , Atk: 125, Def: 79 , SpA: 60 , SpD: 100, Spe: 81 , Total: 540, Type_1:"Water", Type_2: "Flying" });
      collection.insertOne({ Number: "131", Pokemon: "Lapras",   HP: 130, Atk: 85 , Def: 80 , SpA: 85 , SpD: 95 , Spe: 60 , Total: 535, Type_1:"Water", Type_2: "Ice" });
      collection.insertOne({ Number: "132", Pokemon: "Ditto",   HP: 48 , Atk: 48 , Def: 48 , SpA: 48 , SpD: 48 , Spe: 48 , Total: 288, Type_1:"Normal" });
      collection.insertOne({ Number: "133", Pokemon: "Eevee",   HP: 55 , Atk: 55 , Def: 50 , SpA: 45 , SpD: 65 , Spe: 55 , Total: 325, Type_1:"Normal" });
      collection.insertOne({ Number: "134", Pokemon: "Vaporeon",   HP: 130, Atk: 65 , Def: 60 , SpA: 110, SpD: 95 , Spe: 65 , Total: 525, Type_1:"Water" });
      collection.insertOne({ Number: "135", Pokemon: "Jolteon",   HP: 65 , Atk: 65 , Def: 60 , SpA: 110, SpD: 95 , Spe: 130, Total: 525, Type_1:"Electric" });
      collection.insertOne({ Number: "136", Pokemon: "Flareon",   HP: 65 , Atk: 130, Def: 60 , SpA: 95 , SpD: 110, Spe: 65 , Total: 525, Type_1:"Fire" });
      collection.insertOne({ Number: "137", Pokemon: "Porygon",   HP: 65 , Atk: 60 , Def: 70 , SpA: 85 , SpD: 75 , Spe: 40 , Total: 395, Type_1:"Normal" });
      collection.insertOne({ Number: "138", Pokemon: "Omanyte",   HP: 35 , Atk: 40 , Def: 100, SpA: 90 , SpD: 55 , Spe: 35 , Total: 355, Type_1:"Rock", Type_2: "Water" });
      collection.insertOne({ Number: "139", Pokemon: "Omastar",   HP: 70 , Atk: 60 , Def: 125, SpA: 115, SpD: 70 , Spe: 55 , Total: 495, Type_1:"Rock", Type_2: "Water" });
      collection.insertOne({ Number: "140", Pokemon: "Kabuto",   HP: 30 , Atk: 80 , Def: 90 , SpA: 55 , SpD: 45 , Spe: 55 , Total: 355, Type_1:"Rock", Type_2: "Water" });
      collection.insertOne({ Number: "141", Pokemon: "Kabutops",   HP: 60 , Atk: 115, Def: 105, SpA: 65 , SpD: 70 , Spe: 80 , Total: 495, Type_1:"Rock", Type_2: "Water" });
      collection.insertOne({ Number: "142", Pokemon: "Aerodactyl",   HP: 80 , Atk: 105, Def: 65 , SpA: 60 , SpD: 75 , Spe: 130, Total: 515, Type_1:"Rock", Type_2: "Flying" });
      collection.insertOne({ Number: "143", Pokemon: "Snorlax",   HP: 160, Atk: 110, Def: 65 , SpA: 65 , SpD: 110, Spe: 30 , Total: 540, Type_1:"Normal" });
      collection.insertOne({ Number: "144", Pokemon: "Articuno",   HP: 90 , Atk: 85 , Def: 100, SpA: 95 , SpD: 125, Spe: 85 , Total: 580, Type_1:"Ice", Type_2: "Flying" });
      collection.insertOne({ Number: "145", Pokemon: "Zapdos",   HP: 90 , Atk: 90 , Def: 85 , SpA: 125, SpD: 90 , Spe: 100, Total: 580, Type_1:"Electric", Type_2: "Flying" });
      collection.insertOne({ Number: "146", Pokemon: "Moltres",   HP: 90 , Atk: 100, Def: 90 , SpA: 125, SpD: 85 , Spe: 90 , Total: 580, Type_1:"Fire", Type_2: "Flying" });
      collection.insertOne({ Number: "147", Pokemon: "Dratini",   HP: 41 , Atk: 64 , Def: 45 , SpA: 50 , SpD: 50 , Spe: 50 , Total: 300, Type_1:"Dragon" });
      collection.insertOne({ Number: "148", Pokemon: "Dragonair",   HP: 61 , Atk: 84 , Def: 65 , SpA: 70 , SpD: 70 , Spe: 70 , Total: 420, Type_1:"Dragon" });
      collection.insertOne({ Number: "149", Pokemon: "Dragonite",   HP: 91 , Atk: 134, Def: 95 , SpA: 100, SpD: 100, Spe: 80 , Total: 600, Type_1:"Dragon", Type_2: "Flying" });
      collection.insertOne({ Number: "150", Pokemon: "Mewtwo",   HP: 106, Atk: 110, Def: 90 , SpA: 154, SpD: 90 , Spe: 130, Total: 680, Type_1:"Psychic" });
      collection.insertOne({ Number: "151", Pokemon: "Mew",   HP: 100, Atk: 100, Def: 100, SpA: 100, SpD: 100, Spe: 100, Total: 600, Type_1:"Psychic" });
    });
  };
    
  return myDB;
}

module.exports = MyDB();
