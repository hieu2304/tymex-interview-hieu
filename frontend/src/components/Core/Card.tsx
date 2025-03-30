import { Card as AntCard } from "antd";
import styled from "styled-components";

const StyledCard = styled(AntCard)`
  background: black;
  border: 2px solid #ff00ff;
  text-align: center;
  color: white;
  width: 200px;

  .ant-card-meta-title {
    color: white !important;
  }
`;

interface CardProps {
  title: string;
  image: string;
}

const Card = ({ title, image }: CardProps) => {
  return (
    <StyledCard cover={<img src={image} alt={title} />} hoverable>
      <AntCard.Meta title={title} />
    </StyledCard>
  );
};

export default Card;
