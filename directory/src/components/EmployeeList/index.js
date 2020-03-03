import React from "react";
import Employee from "../Employee";



// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
class EmployeeList extends React.Component{

  constructor(){
    super();
    this.state= {
      search: ''
    }
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)})
  }

  render () {

    let filterEmployee= this.props.employees.filter(
      (employee) =>{
        return employee.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
  return (
    <div>
      <input type="text" 
  value={this.state.search}
  onChange={this.updateSearch.bind(this)}/>
   <ul>
     {filterEmployee.map((employee) => {
       return <Employee employee={employee} key={employee.id}/>
     })}
  </ul>

  
  </div>
  );
}
}

export default EmployeeList;