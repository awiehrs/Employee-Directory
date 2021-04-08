import React from "react";

function Form(props) {
  return (  
      <nav className="navbar navbar-light">
        <form className="form-inline" htmlFor="search"><br></br>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control mr-sm-2"
          placeholder="Search for employee "
          id="search"
        >
        </input>
        <br />
        </form>
      </nav>
  );
}

export default Form;