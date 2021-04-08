import React from "react";

function Navbar(props) {
  return (
<div className="jumbotron jumbotron-fluid">
    <div className="container">
      <div className="row">
      <div className="col"><br></br><br></br>
      <h1>
      Employee Directory
      </h1>
    </div>
  </div>
  <div className="row">
    <div  className="col align-self-center">
      <h6> Filter by last name or use the search box to narrow your results<br></br>
     </h6><br></br><br></br>
    </div><br></br>
  </div>
  </div>
  </div>
  );
}

export default Navbar;