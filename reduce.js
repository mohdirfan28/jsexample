const movies = [
    {
        name: 'lagan',
        budgets: 100
    },
    {
        name: 'pathan',
        budgets:200
    },
    {
        name:'billo',
        budgets:350
    }
];
//   let total = 0;

// movies.forEach((movie) => {
//      total += movie.budgets;


// });
// console.log(total);
const total=movies.reduce((acc,movie)=>{
    acc=acc+movie.budgets;
    return acc;

},0);
console.log(total);