import React from "react";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  threshold?: number;
  rootMargin?: string;
  disabled?: boolean;
  id?: string;
}
