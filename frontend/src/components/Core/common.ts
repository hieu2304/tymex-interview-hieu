import styled from "styled-components";
import { theme, breakpoints } from "../../utils/theme";

export const FlexContainer = styled.div<{
  direction?: "row" | "column";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  gap?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  gap: ${(props) => props.gap || "0"};
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;

export const GridContainer = styled.div<{
  columns?: number;
  gap?: string;
}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 1}, 1fr);
  gap: ${(props) => props.gap || "0"};
`;

export const ResponsiveContainer = styled.div<{
  maxWidth?: string;
  padding?: string;
}>`
  width: 100%;
  max-width: ${(props) => props.maxWidth || "1440px"};
  margin: 0 auto;
  padding: ${(props) => props.padding || "0"};

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${theme.spacing.lg};
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: ${theme.spacing.md};
  }
`;

export const Card = styled.div`
  background: ${theme.gradients.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.md};
  color: ${theme.colors.white};
`;

export const Button = styled.button<{
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}>`
  background: ${(props) =>
    props.variant === "primary"
      ? theme.gradients.primary
      : theme.colors.secondary};
  color: ${theme.colors.white};
  border: none;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  font-weight: 600;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: ${(props) => (props.fullWidth ? "100%" : "auto")};
    max-width: 200px;
  }
`;

export const Input = styled.input`
  background: ${theme.colors.gray.dark};
  border: 1px solid ${theme.colors.gray.light};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  color: ${theme.colors.white};
  width: 100%;

  &::placeholder {
    color: ${theme.colors.gray.light};
  }
`;

export const Select = styled.select`
  background: ${theme.colors.gray.dark};
  border: 1px solid ${theme.colors.gray.light};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  color: ${theme.colors.white};
  width: 100%;
  cursor: pointer;
`;
