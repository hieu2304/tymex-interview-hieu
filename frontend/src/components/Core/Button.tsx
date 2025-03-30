import styled from "styled-components";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

const Button = styled.button<ButtonProps>`
  background: ${({ variant }) =>
    variant === "primary" ? "#ff00ff" : "#ffcc00"};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
