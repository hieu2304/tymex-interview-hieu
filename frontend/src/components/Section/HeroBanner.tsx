import styled from "styled-components";
import { characters, heroBannerProducts } from "../../data/mock-data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  isolation: isolate;

  @media (max-width: 1024px) {
    height: auto;
    min-height: 100vh;
  }
`;

const Banner = styled.div`
  padding: 60px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    img {
      width: 120px;
      height: auto;
    }
  }
`;

const YellowSection = styled.div`
  position: relative;
  background: url("/bottom-banner.svg") no-repeat center;
  background-size: cover;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 100px;
  flex-wrap: wrap;
  min-height: 300px;
  width: auto;
  position: relative;
  padding: 10px 40px;

  @media (max-width: 1280px) {
    gap: 60px;
    justify-content: center;
    padding: 40px;
  }

  @media (max-width: 1024px) {
    gap: 40px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    gap: 30px;
    padding: 20px;
    justify-content: center;
  }
`;

const ProductWrapper = styled.div`
  position: relative;
  width: 202px;
  height: 224px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  .background-frame {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 110%;
    z-index: 1;
  }

  .card-img {
    z-index: 1;
    width: 200px;
    position: absolute;
    bottom: 14px;
    height: 200px;
  }

  .title-product {
    font-weight: 700;
    color: #17161a;
    font-size: 18px;
    position: absolute;
    bottom: -28px;
    line-height: 28px;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 180px;

    .card-img {
      width: 160px;
      height: 160px;
      bottom: 10px;
    }

    .title-product {
      font-size: 16px;
      bottom: -24px;
    }
  }
`;

const FeaturedCharacter = styled.div`
  position: absolute;
  right: -60px;
  bottom: 0;
  z-index: 3;

  .the-dj-banner {
    width: 665px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3));
    transform: scaleX(-1);
  }

  .dj-name {
    position: absolute;
    bottom: 80px;
    right: 220px;
    background: #8a2be2;
    color: white;
    padding: 12px 30px;
    font-size: 32px;
    font-weight: bold;
    border-radius: 12px;
    transform: skew(-10deg);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 1280px) {
    right: -40px;

    .the-dj-banner {
      width: 500px;
    }

    .dj-name {
      bottom: 60px;
      right: 160px;
      font-size: 28px;
      padding: 10px 24px;
    }
  }

  @media (max-width: 1024px) {
    position: relative;
    right: 0;
    display: flex;
    justify-content: center;
    margin-top: 40px;

    .the-dj-banner {
      width: 400px;
    }

    .dj-name {
      bottom: 40px;
      right: 120px;
      font-size: 24px;
      padding: 8px 20px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 30px;

    .the-dj-banner {
      width: 300px;
    }

    .dj-name {
      bottom: 30px;
      right: 90px;
      font-size: 20px;
      padding: 6px 16px;
    }
  }
`;

const Marketplace = () => {
  return (
    <Container>
      <Banner>
        <img src="/tag-banner.svg" alt="New Tag" />
      </Banner>

      <YellowSection>
        {heroBannerProducts.map((product) => (
          <ProductWrapper key={product.id}>
            <img
              src={product.backgroundImage}
              alt="Background Product"
              className="background-frame"
            />
            <img src={product.image} alt={product.title} className="card-img" />
            <div className="title-product">{product.title}</div>
          </ProductWrapper>
        ))}
      </YellowSection>

      <FeaturedCharacter>
        <img src="/pngwing.png" alt="The DJ" className="the-dj-banner" />
        <div className="dj-name">THE DJ</div>
      </FeaturedCharacter>
    </Container>
  );
};

export default Marketplace;
