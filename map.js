const users = [
  {
    fname: "John",
    lname: "shaikh",
  },
  {
    fname: "irfan",
    lname: "shan",
  },
];
const finalName=users.map((user)=>{

    return {
        fullname:`${user.fname}  ${user.lname}`,
    };
})
console.log(finalName);
