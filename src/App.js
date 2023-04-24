import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import routes from "./routes";
import ErrorPage from "./screens/Error";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Product from "./screens/Product";
import Provider from "./screens/Provider";
import User from "./screens/User";

function App() {
  const user = null;

  const protectedRoute = (cmp) => (
    <ProtectedRoute user={user}>{cmp}</ProtectedRoute>
  );
  const renderLogin = () => {
    if (user) return <Navigate to={routes.home} />;

    return <Login />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={protectedRoute(<Home />)} />
        <Route path={routes.login} element={renderLogin()} />
        <Route path={routes.product} element={protectedRoute(<Product />)} />
        <Route path={routes.provider} element={protectedRoute(<Provider />)} />
        <Route path={routes.user} element={protectedRoute(<User />)} />
        <Route path="*" element={<ErrorPage status={404} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
