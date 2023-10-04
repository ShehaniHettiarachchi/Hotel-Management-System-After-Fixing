import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ permissionLevel }) => {
	const isAuthenticated = localStorage.getItem("authToken") !== null;

	if (isAuthenticated) {
		return <Outlet />;
	} else {
		if (permissionLevel === "SUPPLIER") {
			return <Navigate to="/supplier/login" />;
        }

		else {
			return <Navigate to="/" />;
		}
	}

};

export default PrivateRoute;