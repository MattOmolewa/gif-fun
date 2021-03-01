import React from "react";

const Input = ({ text, setText, handleSubmit }) => {
  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          onChange={e => setText(e.target.value)}
          value={text}
          className="form-control"
          placeholder="Search gifs..."
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Input;
