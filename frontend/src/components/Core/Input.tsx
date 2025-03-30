import { Input as AntInput } from "antd";
import styled from "styled-components";

const StyledInput = styled(AntInput)`
  background: #111;
  border: 1px solid #333;
  color: white;
  &::placeholder {
    color: #666;
  }
`;

const Input = (props) => <StyledInput {...props} />;
export default Input;
