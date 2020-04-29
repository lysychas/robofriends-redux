import React from "react";

const Card = ({ name, email, id }) => {
  //   const { name, email, id } = props; // destructuring in params is COOL
  return (
    <div className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${id}?size=200x200`}
        alt="Robot Jane Doe"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
