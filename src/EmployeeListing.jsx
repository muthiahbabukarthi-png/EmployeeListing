import { Component } from "react";

export class EmployeeListing extends Component{
     constructor(){
          super()
          this.state = {
               employeedetails : [
                    {
                         id : "1001",
                         name: "Babu",
                         designination: "Backend Developer",
                         experience: "5 Years",
                         qualification: "Mca"
                    }, {
                         id : "1002",
                         name: "Suresh",
                         designination: "Android Developer",
                         experience: "2 Years",
                         qualification: "BCA"
                    }, {
                         id : "1003",
                         name: "Saravanan",
                         designination: "Ios Developer",
                         experience: "8 Years",
                         qualification: "BE Cs"
                    }, {
                         id : "1004",
                         name: "Vivek",
                         designination: "Full stack Developer",
                         experience: "3 Years",
                         qualification: "Bsc Cs"
                    }

               ]
          }
     }

     render(){
          return <div>
               {
                    this.state.employeedetails.length > 0 ?
                    (
                         <table border='2'>
                              <tr>
                                   <td>Emp Id</td>
                                   <td>Emp Name</td>
                                   <td>Designiation</td>
                                   <td>Exprience</td>
                                   <td>Qualification</td>
                              </tr>
                         {this.state.employeedetails.map((value, index) => {
                              const {id, name, designination, experience, qualification} = value;
                              return <tr>
                                   <td>{id}</td>
                                   <td>{name}</td>
                                   <td>{designination}</td>
                                   <td>{experience}</td>
                                   <td>{qualification}</td>
                              </tr>
                         })}
                         </table>
                    )
               :
                    (<h1>No Records Found</h1>)
               }
          </div>
     }
}