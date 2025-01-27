import React, { useState } from "react";
import Login from "./Component/Login";
import Signup from "./Component/Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const switchLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Login switchLogin={switchLogin} />
      ) : (
        <Signup switchLogin={switchLogin} />
      )}
    </div>
  );
}

export default App;
