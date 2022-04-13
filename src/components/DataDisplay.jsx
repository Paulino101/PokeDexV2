import React from "react";

function DataDisplay({ name, sprite, types, id, handleNext, handlePrevious }) {
  return (
    <>
      {/* kitchen sink */}
      <div className="card">
        <img src={sprite} className="card-img-top" alt={name} />

        <div className="card-body">
          <div className="d-flex justify-content-evenly">
            <h5 className="card-title text-capitalize">{name} </h5>
            <h5>#{id}</h5>
          </div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          {types.map((t) => (
            <li className="list-group-item text-capitalize">{t.type.name}</li>
          ))}
        </ul>
        <div className="next-and-prev d-flex justify-content-center">
        {/* onClick i want to go to previous id mon */}
            <button onClick={handlePrevious} className="btn btn-secondary me-1">prev</button>
            <button onClick={handleNext} className="btn btn-secondary ms-1">next</button>
            <aside>you have to click them twice, working on this</aside>
        </div>
      </div>
    </>
  );
}

export default DataDisplay;
