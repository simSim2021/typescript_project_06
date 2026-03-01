import { type ChangeEvent, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

// import "./styles.css";

import {LoginFormContainer, Title, InputContainer} from "./styles";

function LoginForm() {
  
//   const [inputValue, setInputValue]= useState<string>("");

//   const onChangeInputValue = (event:ChangeEvent<HTMLInputElement>)=>{
// setInputValue(event.target.value)
//   };
 const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };



  // Без передачи аргументов
  const login = (event: any) => {
event.preventDefault();
console.log("Email", email);
console.log("Password", password);
  };

  return (
    <LoginFormContainer onSubmit={login} >
      <Title>Login form</Title>
      <InputContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          value={email}
          onChange={changeEmail}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={password}
          onChange={changePassword}
        />
        {/* <input placeholder="Enter something" 
        onChange={onChangeInputValue} 
        value={inputValue}/> */}
      </InputContainer>
      <Button name="Login" type="submit" />
      
    </LoginFormContainer>
  );
}

export default LoginForm;
