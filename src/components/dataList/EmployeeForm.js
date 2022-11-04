import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0,
        startDate: "",
        payRate: "",
        email: "",
        isStaff: true,
        userId: 0
    })
    const [user, setUser] = useState({
        name: "",
        email: "",
        isStaff: true
    })
    const navigate = useNavigate()
    const [userId, setUserId] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/users?_sort=id&order=desc`)
            .then(response => response.json())
            .then((userId) => {
                setUserId(userId)
            })
        },
        []);

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const employeeToSendToAPI = {
            locationId: parseInt(employee.locationId),
            startDate: employee.startDate,
            payRate: parseInt(employee.payRate),
            userId: userId[0].id + 1
        }
    
        const usersToSendToAPI = {
            name: user.name,
            email: user.email,
            isStaff: user.isStaff
        }

    fetch(`http://localhost:8088/employees`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeToSendToAPI)
    })
        .then(response => response.json())
        .then(() => {
            navigate("/employees")
        })

        fetch(`http://localhost:8088/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usersToSendToAPI)
        })
    }
    
    return (
        <form className="productForm">
            <h2 className="productForm_title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee's name"
                        value={user.name}
                        onChange={
                            (evt) => {
                                const copy = {...user}
                                copy.name = evt.target.value
                                setUser(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="name">Location:</label>
                <input
                type="number"
                name="productTypesId"
                value={employee.locationId}
                onChange={(evt) => {
                    const copy = { ...employee };
                    copy.locationId = evt.target.value;
                    setEmployee(copy)
                }}
                />
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="name">Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        value={employee.startDate}
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.startDate = evt.target.value
                                setEmployee(copy)
                            }
                        } />
            </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Starting Pay Per Hour:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={employee.payRate}
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.payRate = evt.target.value
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Email:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee's email"
                        value={user.email}
                        onChange={
                            (evt) => {
                                const copy = {...user}
                                copy.email = evt.target.value
                                setUser(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="button">
                    Create New Employee
            </button>
        </form>
    )
    }