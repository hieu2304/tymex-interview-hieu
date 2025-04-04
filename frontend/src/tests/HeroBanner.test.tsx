import { render, screen } from "@testing-library/react";

describe("HeroBanner", () => {
  let HeroBanner: React.ComponentType;
  let heroBannerProducts: any[];

  beforeEach(async () => {
    const HeroBannerModule = await import("../components/Section/HeroBanner");
    HeroBanner = HeroBannerModule.default;

    const mockDataModule = await import("../data/mock-data");
    heroBannerProducts = mockDataModule.heroBannerProducts;

    render(<HeroBanner />);
  });

  it("renders without crashing", () => {
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("displays the NEW tag image", () => {
    expect(screen.getByAltText("New Tag")).toBeInTheDocument();
  });

  it("renders all hero banner products", () => {
    heroBannerProducts.forEach((product) => {
      expect(screen.getByAltText(product.title)).toBeInTheDocument();
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it("renders the featured character image and name", () => {
    expect(screen.getByAltText("The DJ")).toBeInTheDocument();
    expect(screen.getByText("THE DJ")).toBeInTheDocument();
  });

  it("renders the correct number of products", () => {
    const products = screen.getAllByAltText("Background Product");
    expect(products).toHaveLength(heroBannerProducts.length);
  });

  it("renders product background frames", () => {
    const frames = screen.getAllByAltText("Background Product");
    expect(frames).toHaveLength(heroBannerProducts.length);
    frames.forEach((frame) => {
      expect(frame).toHaveAttribute("src", "/background-product-banner.svg");
    });
  });

  it("renders product images with correct sources", () => {
    heroBannerProducts.forEach((product) => {
      const img = screen.getByAltText(product.title);
      expect(img).toHaveAttribute("src", product.image);
    });
  });

  describe("Responsive Design", () => {
    it("has responsive container styles", () => {
      const container = screen.getByRole("banner");
      expect(container).toHaveStyle({
        display: "flex",
        flexDirection: "column",
        position: "relative",
      });
    });

    it("has yellow section with correct styling", () => {
      const yellowSection = screen
        .getByRole("banner")
        .querySelector("div:nth-child(2)");
      expect(yellowSection).toHaveStyle({
        display: "flex",
        alignItems: "center",
        position: "relative",
      });
    });
  });
});
