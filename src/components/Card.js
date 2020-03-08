import React from "react";

const Card = ({ name, email, id }) => {
  //   const { name, email, id } = props; // destructuring in params is COOL
  return (
    <div className="tc grow bg-light-purple br3 pa3 ma2 dib bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot Jane Doe" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
