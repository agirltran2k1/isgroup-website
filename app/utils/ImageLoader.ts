"use client";
export const imageLoader = ({ src, width, quality }: any) => {
  return `https://ref.giaiphap.xyz/${src}?w=${width}&q=${quality || 75}`;
};