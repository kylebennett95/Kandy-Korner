import { Outlet, Route, Routes } from "react-router-dom"
import { DataList } from "../dataList/DataList"
import { ProductList } from "../dataList/ProductList"

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

		</Route>
	</Routes>
	)
}

