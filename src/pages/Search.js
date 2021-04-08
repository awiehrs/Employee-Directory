import React, { Component } from "react";

import API from "../utils/API";
import Navbar from "../components/Navbar/navbar";
import Form from "../components/Form/form";
import SearchResults from "../components/SearchResults/searchresults";
import Wrapper from "../components/Wrapper/wrapper";
import '../styles/table.css';
import { Table } from 'reactstrap';

class Search extends Component {
    //set state for search form 
  state = {
    results: [],
    filteredResults: [],
    search: "",
  };

  //load employees
  componentDidMount() {
    API.getRandomUsers()
    .then(res => this.setState({ filteredResults: res.data.results ,results: res.data.results }))
    .catch(err => console.log(err));
  };
  //sets state of FilteredList to filter by name when searched
  handleInputChange = event => {
    console.log("new value",event.target.value);
    if (event.target.name === "search") {
      const filteredList = this.state.results.filter(item => {
    return item.name.first.includes(event.target.value)
        || item.name.last.includes(event.target.value);
});
      this.setState({
        filteredResults: filteredList
      })
    }
  }
    //function to sort employees alphabetically by last name
  sortByLastName = () => {
    const sortedEmployees = this.state.filteredResults.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1
      }
      if (a.name.last > b.name.last) {
        return 1
      }
      return 0;
    });
    if (this.state.sortOrder === "descending") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ascending" });
    } else {
      this.setState({ sortOrder: "descending" });
    }
    this.setState({ results: sortedEmployees })
    
}
  //display when search is used
  render() {
    return (
    <div>
      <Navbar />
      <Form
       handleInputChange = {this.handleInputChange}/>
      <Wrapper>
      <Table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name<span className="downArrow" onClick={this.sortByLastName}></span></th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <SearchResults
         results = {this.state.filteredResults} />
      </tbody>
    </Table>
      </Wrapper>
    </div>
    )}
}

export default Search;  