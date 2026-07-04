import React from "react";

export default interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  threshold?: number;
  rootMargin?: string;
  disabled?: boolean;
  id?: string;
}
