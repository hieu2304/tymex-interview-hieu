import React from "react";
import styled from "styled-components";

import { categories } from "../../data/mock-data";
import { Button } from "../Core";
import { stringToColor } from "../../utils/string";
import {
  ImageWrapperProps,
  ProductCardProps,
  ProductWithImage,
} from "../../utils/types";

const ProductCardContainer = styled.div`
  padding: 16px;
  background: linear-gradient(to bottom right, #2d2d2d, #1c1c1c);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 267px;

  @media (max-width: 1024px) {
    max-width: 240px;
  }

  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

const ImageWrapper = styled.div<ImageWrapperProps>`
  max-height: 247px;
  background-color: ${(props) => props.bgColor};
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 180px;
  }

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 280px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductTitle = styled.h3`
  color: white;
  font-weight: bold;
`;

const ProductPrice = styled.span`
  color: white;
  display: flex;
  size: 14px;
  align-items: center;
`;

const ProductGridContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 20px;
  width: 100%;

  .product-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  @media (max-width: 1024px) {
    padding: 30px 16px;
  }

  @media (max-width: 768px) {
    padding: 20px 12px;
  }
`;

const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #da458f #1c1c1c;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #1c1c1c;
  }

  &::-webkit-scrollbar-thumb {
    background: #da458f;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    gap: 12px;
    padding-bottom: 12px;
  }
`;

const StyledButton = styled(Button)`
  color: #fff;
  background-color: #da458f;
  &.active {
    background-color: #da34dd;
  }
`;

const ButtonViewMore = styled(Button)`
  background-color: #da458f;
  color: #fff;
  width: 326px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 326px;
  }
`;

const UserInfo = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  margin-top: 12px;

  .user-name {
    color: white;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
    justify-items: center;
  }
`;

const Tag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 20;
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
  background-color: #313b4580;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <ProductCardContainer>
      <ImageWrapper bgColor={stringToColor(product.title)}>
        <ProductImage src={product.imgSrc} alt={product.title} />
        <Tag>{product.category}</Tag>
      </ImageWrapper>
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{product.price} ETH</ProductPrice>
      </ProductInfo>
      <UserInfo>
        <UserAvatar src={product?.author?.avatar} />
        <div className="user-name">{`${product?.author?.firstName} ${product?.author?.lastName}`}</div>
      </UserInfo>
    </ProductCardContainer>
  );
};

interface ProductGridProps {
  products: ProductWithImage[];
  activeCategory: {
    value: string;
    label: string;
    index: number;
  };
  handleCategoryClick: (category: {
    value: string;
    label: string;
    index: number;
  }) => void;
  handlePaginate: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = (props: ProductGridProps) => {
  const { products, activeCategory, handleCategoryClick, handlePaginate } =
    props;
  return (
    <ProductGridContainer>
      <CategoryTitle>
        {categories.map((category, index) => (
          <StyledButton
            key={`${category.value}_${index}`}
            className={activeCategory.index === index ? "active" : ""}
            onClick={() => handleCategoryClick({ ...category, index })}
          >
            {category.label}
          </StyledButton>
        ))}
      </CategoryTitle>
      <div className="product-grid">
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
        <ButtonViewMore onClick={handlePaginate}>View more</ButtonViewMore>
      </div>
    </ProductGridContainer>
  );
};

export default ProductGrid;
