import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)


    useEffect(
        () => {
            fetch(`http://localhost:8088/employees?_expand=user`)
            .then(response => response.json())
            .then((employeesArray) => {
              setEmployees(employeesArray)
            })
        },
        []);



return <>
{
    kandyUserObject.staff
    ? <>
    <button onClick={() => navigate("/employees/create")}>New Employee</button>
    </>
    :<></>
}

<h2>List of Employees</h2>

<article className="employees">
    {
        employees.map(
            (employee) => {
                return <section className="employeeList" key={`employees--${employee.id}`}>
                    <header>Name: {employee.user.name}</header>
                    <footer>Location: {employee.locationId}</footer>
                    <div>Start Date: {employee.startDate}</div>
                    <div>Pay Rate: ${employee.payRate}</div>
                </section>
            }
        )
    }
</article>
</>
}