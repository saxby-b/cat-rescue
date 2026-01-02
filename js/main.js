const buttons = document.querySelectorAll("button");
const span = document.querySelector(".copyright");
const d = new Date();
const year = d.getFullYear();
span.innerText = year;

const newRescue = function (name, breed, gender, age) {
  const rescue = {
    name: name,
    breed: breed,
    gender: gender,
    age: age,
  };
  return rescue;
};

const aimsley = newRescue("Aimsley", "Aegean", "Female", "1 year");
const alvin = newRescue("Alvin", "Arabian Mau", "Male", "5 months");
const apple = newRescue("Apple", "Ragdoll", "Female", "2 years");
const ash = newRescue("Ash", "American Shorthair", "Male", "7 months");
const basil = newRescue("Basil", "American Shorthair", "Male", "6 months");
const blossom = newRescue("Blossom", "American Shorthair", "Female", "3 years");
const brie = newRescue("Brie", "Aphrodite Giant", "Female", "2 years");
const buttercup = newRescue("Buttercup", "Sphynx", "Female", "4 years");
const callie = newRescue("Callie", "Abyssinian", "Female", "1 month");
const camellia = newRescue("Camellia", "Javanese", "Female", "3 years");
const chili = newRescue("Chili", "LaPerm", "Male", "1 year");
const daffodil = newRescue(
  "Daffodil",
  "British Shorthair",
  "Female",
  "10 months"
);
const dahlia = newRescue("Dahlia", "Norwegian Forest Cat", "Female", "6 years");
const daisy = newRescue("Daisy", "Norwegian Forest Cat", "Female", "4 years");
const dandelion = newRescue(
  "Dandelion",
  "American Shorthair",
  "Female",
  "4 years"
);
const fern = newRescue("Fern", "Siamese", "Female", "11 months");
const flower = newRescue("Flower", "British Longhair", "Female", "2 years");
const gigi = newRescue("Gigi", "Kao Manee", "Female", "8 months");
const hawk = newRescue("Hawk", "American Shorthair", "Male", "2 years");
const holly = newRescue("Holly", "British Shorthair", "Female", "6 years");
const honey = newRescue("Honey", "Maine Coon", "Female", "1 year");
const iris = newRescue("Iris", "American Shorthair", "Female", "7 months");
const ivy = newRescue("Ivy", "Exotic Shorthair", "Female", " 5 years");
const jasmine = newRescue("Jasmine", "British Shorthair", "Female", "2 years");
const lavender = newRescue("Lavender", "Himalayan", "Female", "4 years");
const lily = newRescue("Lily", "American Shorthair", "Female", "2 years");
const luna =newRescue("Luna", "Havana Brown", "4 years");
const magnolia = newRescue("Magnolia", "Colorpoint Longhair", "10 months");
const maisy = newRescue("Maisy", "Asian Semi-longhair", "2 years");
const maple = newRescue("Maple", "Burmilla", "4 years");
const muffin = newRescue("Muffin", "Maine Coon", "7 years");
const mulberry = newRescue("Mulberry", "Japanese Bobtail", "11 months");
const penny = newRescue("Penny", "Bombay", "3 years");
const pepper = newRescue("Pepper", "American Shorthair?", "2 months");
const peppermint = newRescue("Peppermint", "Norwegian Forest Cat", "2 years");
const petunia = newRescue("Petunia", "American Bobtail", "3 years");
const piper = newRescue("Piper", "American Shorthair", "1 year");
const poppy = newRescue("Poppy", "American Bobtail", "2 years");
const rey = newRescue("Rey", "British Shorthair", "4 years");
const rivers = newRescue("Rivers", "British Shorthair", "1 month");
const rose = newRescue("Rose", "Himalayan", "4 years");
const rosemary = newRescue("Rosemary", "Arabian Mau", "2 years");
const roxie = newRescue("Roxie", "Sphynx", "3 years");
const sheba = newRescue("Sheba", "American Shorthair", "1 year");
const thyme = newRescue("Thyme", "American Curl", "6 months");
const tom = newRescue("Tom", "American Bobtail", "6 years");
const tulip = newRescue("Tulip", "Maine Coon", "2 years");
const violet = newRescue("Violet", "British Shorthair", "2 months");
const willow = newRescue("Willow", "Arabian Mau", "4 years");

const rescueCat = [];

rescueCat.push(
  aimsley,
  alvin,
  apple,
  ash,
  basil,
  blossom,
  brie,
  buttercup,
  callie,
  camellia,
  chili,
  daffodil,
  dahlia,
  daisy,
  dandelion,
  fern,
  flower,
  gigi,
  hawk,
  holly,
  honey,
  iris,
  ivy,
  jasmine,
  lavender,
  lily,
  luna,
  magnolia,
  maisy,
  maple,
  muffin,
  mulberry,
  penny,
  pepper,
  peppermint,
  petunia,
  piper,
  poppy,
  rey,
  rivers,
  rose,
  rosemary,
  roxie,
  sheba,
  thyme,
  tom,
  tulip,
  violet,
  willow
);
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    alert("Thank you for donating to Cat Rescue!");
  })
);
