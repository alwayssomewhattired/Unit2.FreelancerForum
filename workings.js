const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50,
  },
  {
    name: "James",
    occupation: "Theremin Master",
    price: 200,
  },
  {
    name: "Sophia",
    occupation: "Poker Dealer",
    price: 2,
  },
];

const hardcodedFreelancers = [
  {
    name: "Alison",
    occupation: "Journalist",
    price: 31,
  },
  {
    name: "Bobby",
    occupation: "Professor",
    price: 49,
  },
];

const body = document.querySelector("body");

var emptyArray = [];

var newArray = emptyArray.reduce((sum, num) => {
  const adding = sum + num;
  const avg = adding / hardcodedFreelancers.length;
  return avg;
}, 0);

const init = () => {
  const section = document.createElement("section");
  section.style.display = "flex";
  section.style.flexWrap = "wrap";
  section.style.justifyContent = "space-around";
  section.style.padding = "100px";

  const div = document.createElement("div");
  div.setAttribute("id", "div1");
  div.style.display = "grid";

  const h3Avg = document.createElement("h3");

  for (let i = 0; i < hardcodedFreelancers.length; i++) {
    var element = hardcodedFreelancers[i];
    var h3Name = document.createElement("h3");
    var h3Occupation = document.createElement("h3");
    var h3Price = document.createElement("h3");
    h3Name.innerText = "Name:" + element.name;
    h3Occupation.innerText = "Occupation:" + element.occupation;
    h3Price.innerText = "Price:$" + element.price;
    emptyArray.push(element.price);
    div.append(h3Name);
    div.append(h3Occupation);
    div.append(h3Price);
    section.append(div);
  }
  if (emptyArray.length > 0) {
    const pleaseWork = () => {
      const randomIndex = Math.floor(Math.random() * freelancers.length);
      const randomIndex2 = Math.floor(Math.random() * freelancers.length);
      const randomIndex3 = Math.floor(Math.random() * freelancers.length);
      hardcodedFreelancers.push(freelancers[randomIndex]);
      console.log(hardcodedFreelancers);
      const randomName = hardcodedFreelancers[randomIndex].name;
      const randomOccupation = hardcodedFreelancers[randomIndex2].occupation;
      const randomPrice = hardcodedFreelancers[randomIndex3].price;
      const h3RandomName = document.createElement("h3");
      const h3RandomOccupation = document.createElement("h3");
      const h3RandomPrice = document.createElement("h3");
      h3RandomName.innerText = "Name:" + randomName;
      h3RandomOccupation.innerText = "Occupation:" + randomOccupation;
      h3RandomPrice.innerText = "Price:$" + randomPrice;
      emptyArray.push(randomPrice);
      var newArray =
        emptyArray.reduce((sum, num) => sum + num, 0) / emptyArray.length;
      console.log(newArray);
      div.append(h3RandomName);
      div.append(h3RandomOccupation);
      div.append(h3RandomPrice);
      section.append(div);
      h3Avg.innerText = `The average price is $${newArray}`;
    };
    setInterval(pleaseWork, 3000);
  }

  h3Avg.innerText = `The average price is $${40}`;
  div.append(h3Avg);
  body.append(section);
};

init();
