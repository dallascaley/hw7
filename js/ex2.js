/* 
  Homework 6 Question 2
*/

// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  }
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty array
  }
};

const houseDropdown = document.getElementById('house');
const characterList = document.getElementById('characters');

houses.forEach(house => {
  const houseSelect = document.createElement('option');
  houseSelect.innerHTML = house.name;
  houseSelect.value = house.code;
  houseDropdown.appendChild(houseSelect);
});

houseDropdown.addEventListener('click', (e) => {
  characterList.innerHTML = '';

  let characters = getCharacters(e.target.value);
  
  characters.forEach(character => {
    let item = document.createElement('li');
    item.innerHTML = character;
    characterList.appendChild(item);
  })
});



