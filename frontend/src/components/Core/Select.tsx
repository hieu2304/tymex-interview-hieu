import { Select as AntSelect } from "antd";
import styled from "styled-components";

const StyledSelect = styled(AntSelect)`
  .ant-select-selector {
    background: #111;
    border: 1px solid #333;
    color: white;
  }
`;

const Select = (props) => <StyledSelect {...props} />;
export default Select;
