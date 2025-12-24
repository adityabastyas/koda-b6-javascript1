const we = {
  name: "John",
  are: {
    the: {
      best: "Koda",
    },
    age: 33,
  },
};

console.log(we.are.the.best);

const hello = {
  hai: "Adit",
  world: "Hello World",
};

console.log(hello.world);

const obj = {
  str: [
    "halo",
    "adit",
    "bastyas",
    [
      "mulya",
      [
        "semangat",
        "belajar",
        { man: [{ tech: { academy: "Tech Academy" } }, "ngoding"] },
      ],
    ],
  ],
};

console.log(obj.str[3][1][2].man[0].tech.academy);

const my = [
  {
    favorite: ["ganbarimasu", "kaizen", "benkyou", { fruit: { is: "Apple" } }],
  },
  "aditya",
];
console.log(my[0].favorite[3].fruit.is);

//Memunculkan number 32 ketika kalkulasi num.first[1] + num.second[2]
const num = {
  first: [2, 3],
  second: [5, 7, "2"],
};
console.log(num.first[1] + num.second[2]);
