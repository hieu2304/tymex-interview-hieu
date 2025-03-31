export const INIT_FILTER = {
  tier: "All",
  theme: "Light",
  priceOrder: "desc" as const,
  createdAtOrder: "desc" as const,
  price_lte: 200,
  price_gte: 0,
};

export const DEFAULT_PAGINATION = {
  start: 0,
  limit: 20,
};

export const DEFAULT_DEBOUNCE_DELAY = 300;

export const DEFAULT_IMAGE = "/mafia.png";

export const DEFAULT_AVATAR = "/default-avatar.png";

export const DEFAULT_CURRENCY = "ETH";

export const DEFAULT_LANGUAGE = "English";

export const DEFAULT_CATEGORY = {
  value: "1",
  label: "All",
  index: 0,
};

export const SCROLLBAR_STYLES = {
  width: "4px",
  trackColor: "#1c1c1c",
  thumbColor: "#da458f",
  borderRadius: "4px",
};

export const ANIMATION_DURATION = "0.3s";

export const Z_INDEX = {
  base: 1,
  dropdown: 1000,
  modal: 2000,
  tooltip: 3000,
};
