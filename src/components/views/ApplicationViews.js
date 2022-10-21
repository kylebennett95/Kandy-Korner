import { Outlet, Route, Routes } from "react-router-dom"
import { DataList } from "../dataList/DataList"

export const ApplicationViews = () => {
	return (
	<Routes>
		<Route path="/" element={
			<>
				<h1>Kandy Korner</h1>
				<div>Locations</div>

				<Outlet />
			</>
		}>

			<Route path="locations" element={
			<DataList /> } />
		</Route>
	</Routes>
	)
}

