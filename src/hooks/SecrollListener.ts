import { useEffect } from "react";
import { useUiStore } from "@/stores";
import throttle from "lodash.throttle";

export default function ListenerScrollY(): null {
  const setScrollY = useUiStore((state) => state.setScrollY);

  useEffect(() => {
    const updateScroll = throttle((): void => {
      setScrollY(window.scrollY);
    }, 100);

    updateScroll();

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);

    return (): void => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      updateScroll.cancel();
    };
  }, [setScrollY]);

  return null;
}
