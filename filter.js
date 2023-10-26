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
 const failed= actors.filter((actor)=>{
    // console.log(actor);
    if(actor.payment>200){
        return true ;

    }
    

  })
  console.log(failed);
  //filter always give some new array 