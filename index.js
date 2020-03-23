// This project will test how to delete an object from an array

console.log("---- starts ---");

var comments = [
  {
    id : "c1",
    body: "Hello"
  },
  {
    id : "c2",
    body: "Hi"
  },
  {
    id : "c3",
    body: "how are you doing?"
  },
  {
    id : "c4",
    body: "I am doing fine thank you, yourself?"
  },
  {
    id : "c5",
    body: "nice to meet you."
  }
];

console.log(comments.length);

  let target = "c4";
  const returnArr = [];

  console.log(returnArr);
  for (let i=0; i< comments.length; i++){


    if(comments[i].id === target) {
      console.log("Match!");
    } else {
      console.log(comments[i]);
      // returnArr.push()
      // console.log(returnArr);
    }

  }
