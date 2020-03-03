import React from "react";



// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
class Employee extends React.Component{
  render () {
  return (
        <li className="list-group-item">
          {this.props.employee.name}
        </li>
  );
}
}

export default Employee;