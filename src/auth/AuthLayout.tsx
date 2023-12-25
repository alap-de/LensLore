import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <section className="flex flex-1 items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="/assets/images/side-img.svg"
            alt="side logo"
            className="hidden xl:block h-screen w1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
