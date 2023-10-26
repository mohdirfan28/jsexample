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
  for(let actor of actors) {
    actor.payment = actor.payment -10;
    //console.log(actor);
  }
  console.log(actors);