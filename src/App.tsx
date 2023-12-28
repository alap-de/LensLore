import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignInForm, SignUpForm } from "./auth/forms";
import { Home } from "./root/pages";
import AuthLayout from "./auth/AuthLayout";
import RootLayout from "./root/RootLayout";

const App = () => {
  return (
    <main className="flex h-full">
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* Private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
