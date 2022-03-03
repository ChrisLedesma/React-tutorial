import React from "react";
import './style.css'

const Ninjas = ({ ninjas, deleteNinja }) => {
  /*console.log(this.props);*/
  //get & cycle array content
  const ninjaList = ninjas.map((ninja) => {
    if (ninja.age > 15) {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Color: {ninja.color}</div>
          {/* get current ninja id,
                    wrap deleteNinja to not run it instantly */}
          <button
            onClick={() => {
              deleteNinja(ninja.id);
            }}
          >
            Delete Ninja
          </button>
        </div>
      );
    } else {
      return null;
    }
  });
  return (
    //display ninja list inside container
    <div className="ninja-list">
        {ninjaList}
    </div>
  );
};

export default Ninjas;
