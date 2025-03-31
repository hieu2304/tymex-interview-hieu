import { render, screen, fireEvent } from "@testing-library/react";
import ProductGrid from "../components/Products/ProductGrid";
import { categories } from "../data/mock-data";
import { ProductWithImage } from "../utils/types";

const mockProducts: ProductWithImage[] = [
  {
    id: 1,
    title: "Test Product 1",
    price: 10.5,
    imgSrc: "/assassin.png",
    description: "Test description 1",
    imageId: 1,
    authorId: 1,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    isFavorite: false,
    author: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      avatar: "/avatar1.png",
      email: "john@example.com",
      gender: "male",
      onlineStatus: "online",
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    category: "Legendary",
  },
  {
    id: 2,
    title: "Test Product 2",
    price: 20.5,
    imgSrc: "/assassin.png",
    description: "Test description 2",
    imageId: 2,
    authorId: 2,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    isFavorite: false,
    author: {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      avatar: "/avatar2.png",
      email: "jane@example.com",
      gender: "female",
      onlineStatus: "online",
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    category: "Rare",
  },
];

const mockProps = {
  products: mockProducts,
  activeCategory: { value: "1", label: "All", index: 0 },
  handleCategoryClick: jest.fn(),
  handlePaginate: jest.fn(),
};

describe("ProductGrid", () => {
  beforeEach(() => {
    render(<ProductGrid {...mockProps} />);
  });

  it("renders all category buttons", () => {
    categories.forEach((category) => {
      expect(screen.getByText(category.label)).toBeInTheDocument();
    });
  });

  it("renders all products", () => {
    mockProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(`${product.price} ETH`)).toBeInTheDocument();
      if (product.author) {
        expect(
          screen.getByText(
            `${product.author.firstName} ${product.author.lastName}`
          )
        ).toBeInTheDocument();
      }
    });
  });

  it("renders product images with correct sources", () => {
    mockProducts.forEach((product) => {
      const img = screen.getByAltText(product.title);
      expect(img).toHaveAttribute("src", product.imgSrc);
    });
  });

  it("renders author avatars", () => {
    mockProducts.forEach((product) => {
      if (product.author) {
        const avatar = screen.getByAltText(
          `${product.author.firstName} ${product.author.lastName}`
        );
        expect(avatar).toHaveAttribute("src", product.author.avatar);
      }
    });
  });

  it("displays category tags", () => {
    mockProducts.forEach((product) => {
      expect(screen.getByText(product.category)).toBeInTheDocument();
    });
  });

  it("handles category click", () => {
    const categoryButton = screen.getByText(categories[1].label);
    fireEvent.click(categoryButton);
    expect(mockProps.handleCategoryClick).toHaveBeenCalledWith({
      ...categories[1],
      index: 1,
    });
  });

  it("handles pagination", () => {
    const viewMoreButton = screen.getByText("View more");
    fireEvent.click(viewMoreButton);
    expect(mockProps.handlePaginate).toHaveBeenCalled();
  });

  describe("Responsive Design", () => {
    it("has responsive grid container", () => {
      const grid = screen.getByTestId("products-grid");
      expect(grid).toHaveStyle({
        display: "grid",
        width: "100%",
      });
    });

    it("has responsive category title section", () => {
      const categoryTitle = screen.getByTestId("category-title");
      expect(categoryTitle).toHaveStyle({
        display: "flex",
        alignItems: "center",
      });
    });
  });

  test("renders product cards correctly", () => {
    render(
      <ProductGrid
        products={mockProducts}
        activeCategory={{ value: "1", label: "All", index: 0 }}
        handleCategoryClick={() => {}}
        handlePaginate={() => {}}
      />
    );

    // Verify product titles are rendered
    mockProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(`${product.price} ETH`)).toBeInTheDocument();
      expect(screen.getByAltText(product.title)).toBeInTheDocument();
      if (product.author) {
        expect(
          screen.getByText(
            `${product.author.firstName} ${product.author.lastName}`
          )
        ).toBeInTheDocument();
        expect(
          screen.getByRole("img", { name: product.title })
        ).toHaveAttribute("src", product.imgSrc);
      }
    });
  });
});
