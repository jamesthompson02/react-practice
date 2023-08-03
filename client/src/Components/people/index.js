import React, { useState } from "react";
import people from "../../Dummy-Data/people.json";
import Person from "../person/index";
import Button from "../button/button";

const People = () => {
  const [peopleList, setPeopleList] = useState(people);

  const removePerson = (id) => {
    const remainingPeople = peopleList.filter((person) => {
      if (person.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setPeopleList(remainingPeople);
  };

  const clearAllPeople = () => {
    setPeopleList([]);
  };

  const restoreAllPeople = () => {
    setPeopleList(people);
  };
  return (
    <div>
      <div>
        {peopleList.map((person) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              removeFunc={() => removePerson(person.id)}
            ></Person>
          );
        })}
      </div>
      <div>
        <Button text="Clear all" func={clearAllPeople}></Button>
        <Button text="Restore all" func={restoreAllPeople}></Button>
      </div>
    </div>
  );
};

export default People;
