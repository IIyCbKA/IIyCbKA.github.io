import React from "react";
import RevealProps from "./interface";
import styles from "./style.module.scss";
import { clsx } from "clsx";

const Reveal = React.forwardRef<HTMLElement, RevealProps>(
  (
    {
      children,
      className = "",
      as: Component = "div",
      threshold = 0.12,
      rootMargin = "0px 0px -50px 0px",
      disabled = false,
      id,
      ...rest
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLElement>(null);
    const [isRevealed, setIsRevealed] = React.useState(false);

    const setRef = (el: HTMLElement | null) => {
      internalRef.current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) ref.current = el;
    };

    React.useEffect(() => {
      const el = internalRef.current;
      if (!el || disabled) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced) {
        setIsRevealed(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.disconnect();
          }
        },
        { threshold, rootMargin },
      );

      observer.observe(el);

      return () => observer.disconnect();
    }, [threshold, rootMargin, disabled]);

    return (
      <Component
        ref={setRef}
        className={clsx(styles.reveal, className, {
          [styles.isRevealed]: isRevealed,
        })}
        id={id}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Reveal.displayName = "Reveal";

export default Reveal;
