import React from "react";
import Employee from "../Employee";
import "./style.css";



// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
class EmployeeList extends React.Component {

  constructor(props) {
    super(props);
    this.sortName = this.sortName.bind(this)
    this.state = {
      search: '',
      newSearch: ''
    }
  }

  
  sortName(event) {
    const {search} = this.state
    let newSearch = search
    console.log("sort")
    this.setState({
      search: newSearch.sort((a, b) => a.name > b.name)
    })
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) })
  }

  render() {

    let filterEmployee = this.props.employees.filter(
      (employee) => {
        return employee.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <div className="text-center" >
        <br></br>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} /> Search by Employee

   <div className="col-md-12">
          <ul>
            <br></br>
            <div className="row">
              <p className="col-md-2 font"><button onClick={this.sortName }>Order by Name</button>Name</p>
              <p className="col-md-2 font">Phone Number</p>
              <p className="col-md-2 font">Email</p>
              <p className="col-md-2 font">Department</p>
              <p className="col-md-2 font">Start Date</p>
              <p className="col-md-2 font">Location</p>
            </div>
            {filterEmployee.map((employee) => {
              return <Employee employee={employee} key={employee.id} />
            })}
          </ul>
        </div>

      </div>
    );
  }
}

export default EmployeeList;