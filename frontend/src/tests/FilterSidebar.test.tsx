import { render, screen, fireEvent } from "@testing-library/react";
import FilterSidebar from "../components/Products/FilterSidebar";
import { themes, tiers, priceOrder, timeOrder } from "../data/mock-data";

const mockProps = {
  handleClickSearch: jest.fn(),
  keyword: "test",
  filter: {
    tier: "Basic",
    theme: "Halloween",
    priceOrder: "asc" as "asc" | "desc",
    createdAtOrder: "desc" as "asc" | "desc",
    price_gte: 0.01,
    price_lte: 200,
  },
  onChangeKeyword: jest.fn(),
  handleReset: jest.fn(),
  setFilter: jest.fn(),
};

describe("FilterSidebar", () => {
  beforeEach(() => {
    render(<FilterSidebar {...mockProps} />);
  });

  it("renders search input with correct value", () => {
    const input = screen.getByPlaceholderText("Quick search");
    expect(input).toHaveValue(mockProps.keyword);
  });

  it("renders price slider", () => {
    expect(screen.getByText("PRICE")).toBeInTheDocument();
    expect(screen.getByText("0.01 ETH")).toBeInTheDocument();
    expect(screen.getByText("200 ETH")).toBeInTheDocument();
  });

  it("renders all select dropdowns", () => {
    expect(screen.getByText("TIER")).toBeInTheDocument();
    expect(screen.getByText("THEME")).toBeInTheDocument();
    expect(screen.getByText("TIME")).toBeInTheDocument();
    expect(screen.getByText("PRICE")).toBeInTheDocument();
  });

  it("renders reset and search buttons", () => {
    expect(screen.getByText("Reset filter")).toBeInTheDocument();
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  it("handles search input change", () => {
    const input = screen.getByPlaceholderText("Quick search");
    fireEvent.change(input, { target: { value: "new search" } });
    expect(mockProps.onChangeKeyword).toHaveBeenCalled();
  });

  it("handles reset button click", () => {
    const resetButton = screen.getByText("Reset filter");
    fireEvent.click(resetButton);
    expect(mockProps.handleReset).toHaveBeenCalled();
  });

  it("handles search button click", () => {
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);
    expect(mockProps.handleClickSearch).toHaveBeenCalled();
  });

  describe("Select Dropdowns", () => {
    it("renders tier options", () => {
      const tierSelect = screen
        .getByText("TIER")
        .parentElement?.querySelector("select");
      expect(tierSelect).toBeInTheDocument();
      tiers.forEach((tier) => {
        expect(screen.getByText(tier.label)).toBeInTheDocument();
      });
    });

    it("renders theme options", () => {
      const themeSelect = screen
        .getByText("THEME")
        .parentElement?.querySelector("select");
      expect(themeSelect).toBeInTheDocument();
      themes.forEach((theme) => {
        expect(screen.getByText(theme.label)).toBeInTheDocument();
      });
    });

    it("renders price order options", () => {
      const priceSelect = screen
        .getByText("PRICE")
        .parentElement?.querySelector("select");
      expect(priceSelect).toBeInTheDocument();
      priceOrder.forEach((order) => {
        expect(screen.getByText(order.label)).toBeInTheDocument();
      });
    });

    it("renders time order options", () => {
      const timeSelect = screen
        .getByText("TIME")
        .parentElement?.querySelector("select");
      expect(timeSelect).toBeInTheDocument();
      timeOrder.forEach((order) => {
        expect(screen.getByText(order.label)).toBeInTheDocument();
      });
    });
  });

  describe("Responsive Design", () => {
    it("has responsive container", () => {
      const container = screen.getByTestId("filter-sidebar");
      expect(container).toHaveStyle({
        display: "flex",
        flexDirection: "column",
      });
    });

    it("has responsive button group", () => {
      const buttonGroup = screen.getByTestId("button-group");
      expect(buttonGroup).toHaveStyle({
        display: "flex",
        gap: "12px",
      });
    });
  });
});
