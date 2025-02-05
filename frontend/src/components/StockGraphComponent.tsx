import { useState } from "react";
import { useAuth } from "../contexts/authContext";
import Login from "./auth/login";
import DurationToggle from "./DurationToggle";
import StockDropDown from "./StockDropDown";
import StockGraph from "./StockGraph";
import Register from "./auth/register";
import { doSignOut } from "../firebase/auth";

function StockGraphComponent() {
  const { userLoggedIn, currentUser } = useAuth();
  const [isLoginComponent, setIsLoginComponent] = useState<boolean>(true);

  const toggleComponent = () => {
    setIsLoginComponent(!isLoginComponent);
  };

  return (
    <div className="min-h-[50vh] bg-[#0A0A0A] text-[#E5E5E5]">
      <h2 className="text-4xl sm:text-6xl font-bold text-center pt-8">Live Stock Graph</h2>
      
      {userLoggedIn ? (
        <>
          <div className="flex flex-col justify-center items-center max-w-[92vw] sm:max-w-[100vw] mx-auto mt-12">
            <div className="text-center mb-6">
              <p className="text-xl sm:text-2xl font-semibold text-gray-300">
                Hello <span className="text-blue-400">{currentUser?.displayName ? currentUser.displayName : currentUser?.email}</span>!
              </p>
              <p className="text-md sm:text-lg text-gray-400 mt-2">
                You can now explore live stock data and track your investments in real-time!
              </p>
            </div>

            <button
              onClick={() => { 
                doSignOut().then(() => {
                  setIsLoginComponent(true);
                });
              }}
              className="bg-[#F97315] text-white font-semibold py-2 px-6 rounded-lg mt-4 hover:bg-[#f99215] transition ease-in-out duration-200"
            >
              Logout
            </button>

            <div className="flex flex-col sm:flex-row w-full justify-evenly items-center gap-4 mt-12">
              <StockDropDown />
              <DurationToggle />
            </div>
            <StockGraph />
          </div>
        </>
      ) : (
        <>
          <p className="mx-auto text-center text-gray-300 text-xl mt-8">
            {isLoginComponent ? "Sign In to use Stock Graph" : "Sign Up to use Stock Graph"}
          </p>
          {isLoginComponent ? (
            <Login toggleComponent={toggleComponent} />
          ) : (
            <Register toggleComponent={toggleComponent} />
          )}
        </>
      )}
    </div>
  );
}

export default StockGraphComponent;
