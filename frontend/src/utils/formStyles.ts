import { theme } from "./theme";

export const formStyles = {
  input: `
    background: ${theme.colors.gray.dark} !important;
    border: 1px solid ${theme.colors.gray.light} !important;
    border-radius: ${theme.borderRadius.md} !important;
    height: 48px !important;
    padding: 0 16px !important;
    color: ${theme.colors.white} !important;

    &:hover,
    &:focus,
    &:active {
      background: #1a1c29 !important;
    }

    &::placeholder {
      color: ${theme.colors.gray.light};
    }
  `,
  select: `
    .ant-select-selector {
      background: ${theme.colors.gray.dark} !important;
      border: 1px solid ${theme.colors.gray.light} !important;
      border-radius: ${theme.borderRadius.md} !important;
      height: 48px !important;
      padding: 0 16px !important;

      .ant-select-selection-item {
        color: ${theme.colors.white} !important;
        line-height: 48px !important;
      }
    }

    .ant-select-arrow {
      color: ${theme.colors.white} !important;
      right: 16px !important;
    }

    &.ant-select-focused .ant-select-selector {
      box-shadow: 0 0 0 2px rgba(67, 8, 255, 0.2) !important;
    }
  `,
  slider: `
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
          border-radius: ${theme.borderRadius.md};
          padding: 4px 8px;
          font-size: ${theme.fontSizes.small};
          min-height: unset;
          min-width: unset;
        }
        .ant-tooltip-arrow {
          display: none;
        }
      }
    }
  `,
};
