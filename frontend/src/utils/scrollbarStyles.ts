import { SCROLLBAR_STYLES } from "./constants";

export const scrollbarStyles = `
  &::-webkit-scrollbar {
    height: ${SCROLLBAR_STYLES.width};
  }

  &::-webkit-scrollbar-track {
    background: ${SCROLLBAR_STYLES.trackColor};
  }

  &::-webkit-scrollbar-thumb {
    background: ${SCROLLBAR_STYLES.thumbColor};
    border-radius: ${SCROLLBAR_STYLES.borderRadius};
  }

  scrollbar-width: thin;
  scrollbar-color: ${SCROLLBAR_STYLES.thumbColor} ${SCROLLBAR_STYLES.trackColor};
`;
