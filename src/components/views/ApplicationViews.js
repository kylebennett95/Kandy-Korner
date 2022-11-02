import { Outlet, Route, Routes } from "react-router-dom"
import { DataList } from "../dataList/DataList"
import { ProductList } from "../dataList/ProductList"
import { ProductForm } from "../dataList/ProductForm"
import { CandyContainer } from "../dataList/CandyContainer"
import { EmployeeList } from "../dataList/EmployeeList"
import { EmployeeForm } from "../dataList/EmployeeForm"

export const ApplicationViews = () => {
	return (
	<Routes>
		<Route path="/" element={
			<>
				<h1>Kandy Korner</h1>

				<Outlet />
			</>
		}>

			<Route path="locations" element={ <DataList /> } />

			<Route path="products" element={ <ProductList /> } />

			<Route path="employees" element={ <EmployeeList /> } />

			<Route path="find_candy" element={ <CandyContainer /> } />

			<Route path="products/create" element={ <ProductForm /> } />

			<Route path="employees/create" element={ <EmployeeForm /> } />

		</Route>
	</Routes>
	)
}

