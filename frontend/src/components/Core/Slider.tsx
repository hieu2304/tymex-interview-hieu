import { Slider as AntSlider } from "antd";
import styled from "styled-components";

const StyledSlider = styled(AntSlider)`
  .ant-slider-track {
    background: linear-gradient(90deg, #ff00ff, #ff0077);
  }
  .ant-slider-handle {
    background: white;
  }
`;

const Slider = (props) => <StyledSlider {...props} />;
export default Slider;
