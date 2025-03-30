import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../../components/Layout/Header";
import HeroBanner from "../../components/Section/HeroBanner";
import FilterSidebar from "../../components/Products/FilterSidebar";
import ProductGrid from "../../components/Products/ProductGrid";
import Footer from "../../components/Layout/Footer";
import { productService } from "../../apis/index";
import { categories, images } from "../../data/mock-data";
import { Filter, Product } from "../../apis/types";
import { ProductWithImage } from "../../utils/types";
import useDebounce from "../../hooks/useDebounce";

const HeaderBanner = styled.div`
  background: url("/semantic-background.jpeg") no-repeat center;
  background-size: cover;
  height: 774px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    min-height: 500px;
  }
`;

const Container = styled.div`
  background: url("/background-body.png") no-repeat center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 13;
  position: relative;
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 12px;
    gap: 16px;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20px;
  max-width: 1440px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const INIT_FILTER: Filter = {
  tier: "All",
  theme: "Light",
  priceOrder: "desc",
  createdAtOrder: "desc",
  price_lte: 200,
  price_gte: 0,
};

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductWithImage[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [filter, setFilter] = useState<Filter>(INIT_FILTER);
  const [activeCategory, setActiveCategory] = useState<{
    value: string;
    label: string;
    index: number;
  }>({
    value: categories[0].value,
    label: categories[0].label,
    index: 0,
  });
  const [paginate, setPaginate] = useState({
    start: 0,
    limit: 20,
  });
  const debouncedKeyword = useDebounce(keyword, 300);
  const handlePaginate = () => {
    setPaginate({
      ...paginate,
      limit: paginate.limit + 20,
    });
  };

  const handleCategoryClick = async (category: {
    value: string;
    label: string;
    index: number;
  }) => {
    setActiveCategory(category);
    let productsRes;
    if (category.label === "All") {
      productsRes = await productService.getAll(paginate.start, paginate.limit);
    } else {
      productsRes = await productService.getByCategory(category.label);
    }
    const products = productsRes.data.map((item: Product) => {
      let imgSrc = images["mafia"];
      for (const key in images) {
        if (item.title.toLowerCase().includes(key.replace("-", " "))) {
          imgSrc = images[key];
          break;
        }
      }

      return { ...item, imgSrc };
    });
    setProducts(products);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleClickSearch = async () => {
    const productsRes = await productService.filter(filter);
    const products = productsRes.data.map((item: Product) => {
      let imgSrc = images["mafia"];
      for (const key in images) {
        if (item.title.toLowerCase().includes(key.replace("-", " "))) {
          imgSrc = images[key];
          break;
        }
      }

      return { ...item, imgSrc };
    });

    setProducts(products);
  };

  const handleReset = () => {
    setKeyword("");
    setFilter(INIT_FILTER);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await productService.getAll(
          paginate.start,
          paginate.limit
        );
        const products = productsRes.data.map((item: Product) => {
          let imgSrc = images["mafia"];
          for (const key in images) {
            if (item.title.toLowerCase().includes(key.replace("-", " "))) {
              imgSrc = images[key];
              break;
            }
          }
          return { ...item, imgSrc };
        });

        setProducts(products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, [paginate]);

  useEffect(() => {
    productService.search(debouncedKeyword).then((res) => {
      const products = res.data.map((item: Product) => {
        let imgSrc = images["mafia"];
        for (const key in images) {
          if (item.title.toLowerCase().includes(key.replace("-", " "))) {
            imgSrc = images[key];
            break;
          }
        }

        return { ...item, imgSrc };
      });
      setProducts(products);
    });
  }, [debouncedKeyword]);

  return (
    <div>
      <HeaderBanner>
        <Header />
        <HeroBanner />
      </HeaderBanner>

      <Container>
        <Content>
          <FilterSidebar
            handleClickSearch={handleClickSearch}
            keyword={keyword}
            filter={filter}
            onChangeKeyword={handleKeywordChange}
            handleReset={handleReset}
            setFilter={setFilter}
          />
          <ProductGrid
            products={products}
            activeCategory={activeCategory}
            handleCategoryClick={handleCategoryClick}
            handlePaginate={handlePaginate}
          />
        </Content>

        <img src="/vector.svg" alt="vector" className="vector" />
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
