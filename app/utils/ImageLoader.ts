"use client";
export const imageLoader = ({ src, width, quality }: any) => {
  return `https://giaiphap.xyz/${src}?w=${width}&q=${quality || 75}`;
};
