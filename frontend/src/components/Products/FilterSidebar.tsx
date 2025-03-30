import React from "react";
import { Input, Select, Slider, Button } from "../Core";
import styled from "styled-components";
import { CloseCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { themes, tiers, priceOrder, timeOrder } from "../../data/mock-data";
import { Filter } from "../../apis/types";

const SidebarContainer = styled.div`
  padding: 50px 20px;
  border-radius: 10px;
  width: 300px;
  gap: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 600px;
    padding: 30px 16px;
  }

  .filter-select {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .button-group {
    display: flex;
    gap: 12px;
    margin-top: 20px;
  }
`;

const ResetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .anticon {
    font-size: 16px;
    color: #ffd700;
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
  .ant-select-selector {
    background: #0d1526 !important;
    border: 1px solid #1e3a5f !important;
    border-radius: 8px !important;
    height: 48px !important;
    padding: 0 16px !important;

    .ant-select-selection-item {
      color: #fff !important;
      line-height: 48px !important;
    }
  }

  .ant-select-arrow {
    color: #fff !important;
    right: 16px !important;
  }

  &.ant-select-focused .ant-select-selector {
    box-shadow: 0 0 0 2px rgba(67, 8, 255, 0.2) !important;
  }
`;

interface FilterTitleProps {
  color?: string;
}

const FilterTitle = styled.h4<FilterTitleProps>`
  color: ${(props) => props.color || "#8E8E9D"};
  margin-top: 20px;
  margin-bottom: 10px;
`;

const SliderContainer = styled.div`
  .ant-slider {
    margin: 10px 0;

    .ant-slider-rail {
      background-color: #3a3841;
      height: 8px;
    }

    .ant-slider-track {
      background-color: #ff66cc !important;
      height: 8px;
    }

    .ant-slider-handle {
      background: #3a3841;

      &:focus {
        box-shadow: 0 0 8px rgba(255, 102, 204, 0.5);
      }
    }

    .ant-tooltip {
      .ant-tooltip-inner {
        background-color: #ff66cc;
        border-radius: 8px;
        padding: 4px 8px;
        font-size: 14px;
        min-height: unset;
        min-width: unset;
      }
      .ant-tooltip-arrow {
        display: none;
      }
    }
  }

  .price-range {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    color: #b7b7c4;
    font-size: 14px;
  }
`;

const StyledInput = styled(Input)`
  && {
    background: #0d1526 !important;
  }

  &:hover,
  &:focus,
  &:active {
    background: #1a1c29 !important;
  }
  .ant-input-outlined {
    background: transparent !important;
  }

  .ant-input-prefix {
    color: #8e8e9d;
    margin-right: 8px;
    font-size: 16px;
    background: transparent !important;
  }

  input {
    color: white !important;
    padding-left: 16px;
    border-radius: 8px;
    &::placeholder {
      color: #8e8e9d;
    }
  }

  .ant-input-affix-wrapper {
    background: #0d1526 !important;

    &:hover,
    &:focus,
    &-focused {
      background: #1a1c29 !important;
      box-shadow: none !important;
    }
  }
`;

interface FilterSidebarProps {
  handleClickSearch: () => void;
  keyword: string;
  filter: {
    tier: string;
    theme: string;
    priceOrder: "desc" | "asc";
    createdAtOrder: "desc" | "asc";
  };
  onChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

const FilterSidebar = (props: FilterSidebarProps) => {
  const {
    handleClickSearch,
    keyword,
    filter,
    onChangeKeyword,
    handleReset,
    setFilter,
  } = props;

  return (
    <SidebarContainer>
      <div>
        <StyledInput
          value={keyword}
          onChange={onChangeKeyword}
          placeholder="Quick search"
          prefix={<SearchOutlined />}
        />
        <FilterTitle>PRICE</FilterTitle>
        <SliderContainer>
          <Slider
            range
            min={0.01}
            max={200}
            defaultValue={[0.01, 200]}
            tipFormatter={(value) => `${value} ETH`}
            onChange={(value) => {
              setFilter((prev: Filter) => ({
                ...prev,
                price_gte: value[0],
                price_lte: value[1],
              }));
            }}
          />
          <div className="price-range">
            <span>0.01 ETH</span>
            <span>200 ETH</span>
          </div>
        </SliderContainer>
      </div>
      <div className="filter-select">
        <FilterTitle>TIER</FilterTitle>
        <StyledSelect
          value={filter.tier}
          onChange={(value: string) => {
            setFilter((prev: Filter) => ({
              ...prev,
              tier: value,
            }));
          }}
          options={tiers}
          defaultValue={tiers[0].value}
          placeholder="Select tier"
        />
        <FilterTitle>THEME</FilterTitle>
        <StyledSelect
          value={filter.theme}
          onChange={(value: string) => {
            setFilter((prev: Filter) => ({
              ...prev,
              theme: value,
            }));
          }}
          options={themes}
          defaultValue={themes[2].value}
          placeholder="Select theme"
        />
        <FilterTitle>TIME</FilterTitle>
        <StyledSelect
          value={filter.createdAtOrder === "asc" ? "Latest" : "Oldest"}
          onChange={(value: string) => {
            setFilter((prev: Filter) => ({
              ...prev,
              createdAtOrder: value as "desc" | "asc",
            }));
          }}
          options={timeOrder}
          defaultValue={timeOrder[0].value}
          placeholder="Select time order"
        />
        <FilterTitle>PRICE</FilterTitle>
        <StyledSelect
          value={filter.priceOrder === "asc" ? "Low to high" : "High to low"}
          onChange={(value: string) => {
            setFilter((prev: Filter) => ({
              ...prev,
              priceOrder: value as "desc" | "asc",
            }));
          }}
          options={priceOrder}
          defaultValue={priceOrder[0].value}
          placeholder="Select price order"
        />
      </div>

      <div className="button-group">
        <ResetButton onClick={handleReset}>
          <CloseCircleOutlined />
          Reset filter
        </ResetButton>
        <Button
          variant="primary"
          style={{ flex: 1 }}
          onClick={handleClickSearch}
        >
          Search
        </Button>
      </div>
    </SidebarContainer>
  );
};

export default FilterSidebar;
