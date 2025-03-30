const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#F4D03F",
  "#8E44AD",
];

export const stringToColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};
