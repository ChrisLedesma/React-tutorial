import React from "react";
import { useNavigate } from 'react-router-dom'

const Contact = (props) => {
    let navigate = useNavigate()
    setTimeout(() => {
        navigate('/about')
    },2000)
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
        consequuntur excepturi sed necessitatibus minima dicta beatae sapiente
        blanditiis minus sequi cupiditate facere magni, aliquid iste deserunt
        laboriosam modi, commodi laborum!
      </p>
    </div>
  );
};

export default Contact;
