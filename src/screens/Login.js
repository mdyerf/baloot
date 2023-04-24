import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import images from "../res/images";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log('log in request');
  }

  return (
    <>
      <img className="background" alt="bg" src={images.image.wallpaper} />
      <form className="login-form">
        <img className="login-form__logo" alt="baloot" src={images.image.baloot} />
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          variant="outlined"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
          variant="outlined"
        />
        <Button text="Sign in" onClick={handleLogin} />
      </form>
    </>
  );
}

export default Login;
