import { ANIMATION_DURATION } from "./constants";

export const animations = {
  fadeIn: `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  slideIn: `
    @keyframes slideIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
  scale: `
    @keyframes scale {
      from {
        transform: scale(0.95);
      }
      to {
        transform: scale(1);
      }
    }
  `,
  transition: `
    transition: all ${ANIMATION_DURATION} ease;
  `,
};
