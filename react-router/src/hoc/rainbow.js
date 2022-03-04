import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["red", "pink", "orange", "blue", "green", "yellow"];
  //randomize id select without decimal
  const randomColor = colors[Math.floor(Math.random() * 5)];
  //concatenate classname with color
  const className = randomColor + "-text";

  return (props) => {
    return (
      <div className={className}>
          {/* pass the components from wrapped content*/}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
