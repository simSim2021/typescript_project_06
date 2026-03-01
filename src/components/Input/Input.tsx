// import "./styles.css";
import { type InputProps } from "./types";

import {InputWrapper, InputLabel, InputComponent, ErrorMessage} from "./styles";



function Input({ id, 
  name, 
  type = "text", 
  placeholder, 
  label, 
  disabled=false, 
  error=undefined,
  value,
  onChange 
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>
        {label}
      </InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        $error={error}
        value={value}
        onChange={onChange}
      />
      {!!error &&<ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}
export default Input;
