import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
        location: [],
        startDate: "",
        payRate: "",
        email: "",
        isStaff: [true]
    })
    const navigate = useNavigate()

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
    
    const employeeToSendToAPI = {
        name: employee.name,
        locationId: parseInt(employee.location),
        startDate: employee.startDate,
        payRate: parseInt(employee.payRate),
        email: employee.user.email,
        isStaff: employee.isStaff
    }

    return fetch(`http://localhost:8088/http://localhost:8088/employees?_expand=user`, {
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
                        value={employee.name}
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <label htmlFor="name">Location:</label>
                <input
                type="number"
                name="productTypesId"
                value={employee.location.id}
                onChange={(evt) => {
                    const copy = { ...employee };
                    copy.type = evt.target.value;
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
                    <label htmlFor="email">Email:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Employee's email"
                        value={employee.user.email}
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                setEmployee(copy)
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