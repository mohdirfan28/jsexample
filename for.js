// for(let i = 0; i <4; i++) {
//     console.log('*');
// }
const actors = [
  {
    name: "actor1",
    payment: 100,




    
  },
  {
    name: "actor2",
    payment: 200,
  },
  {
    name: "actor3",
    payment: 300,
  },
  {
    name: "actor4",
    payment: 400,
  },
];
for (let i = 0; i < actors.length; i++) {
  //console.log(actors[i]);
  actors[i].payment = actors[i].payment - 10;
  //console.log(actors);
}
console.log(actors);
