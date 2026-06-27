import React from "react";

export function useTypewriter(phrases: string[]): string {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    if (!phrases.length) return;

    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: number | undefined;

    const tick = () => {
      const current = phrases[phraseIdx] ?? "";

      if (!deleting) {
        charIdx += 1;
        setText(current.slice(0, charIdx));

        if (charIdx >= current.length) {
          deleting = true;
          timer = window.setTimeout(tick, 2200);
          return;
        }

        timer = window.setTimeout(tick, 65 + Math.random() * 55);
      } else {
        charIdx -= 1;
        setText(current.slice(0, charIdx));

        if (charIdx <= 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          timer = window.setTimeout(tick, 350);
          return;
        }

        timer = window.setTimeout(tick, 32);
      }
    };

    setText("");
    timer = window.setTimeout(tick, 0);

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [phrases]);

  return text;
}
