import React from "react";
import EmployeeList from "./EmployeeList";
import Title from "./Title";


const employees = [
    {
      id: 1,
      name: "Milk",
      purchased: true,
      department: "operations"
    },
    {
      id: 2,
      name: "Eggs",
      purchased: true
    },
    {
      id: 3,
      name: "Cheese",
      purchased: false
    },
    {
      id: 4,
      name: "Cake Mix",
      purchased: false
    },
    {
      id: 5,
      name: "Carrots",
      purchased: false
    },
    {
      id: 6,
      name: "Juice",
      purchased: true
    }
  ];

class Container extends React.Component {

    render(){
    return (  
      <div>
        <Title />
        <EmployeeList employees={employees} />
        </div>
      );
    
    }    



}

export default Container;