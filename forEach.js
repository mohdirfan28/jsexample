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

  actors.forEach((element) => {
    element.payment=element.payment-10;
    


   // console.log(element);
    
    
  });

  console.log(actors);