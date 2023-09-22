import { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson]= useState({
    name:"John",
    age:22,
    hobby:"Gardening",
  });
  const displayPerson=()=>{
    //setPerson=({name:"Peter",age:23,hobby:"to read books"});
    setPerson({ ...person, name: 'susan' ,age:24,hobby:"to read books"});
  };

  return(<>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h4>Loves {person.hobby}</h4>
  <button classname='btn' onClick={displayPerson}>
    show other
  </button>
  </>
  ); 
};

export default UseStateObject;
