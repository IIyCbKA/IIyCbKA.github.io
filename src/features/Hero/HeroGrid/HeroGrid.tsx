import React from "react";
import styles from "./styles.module.scss";
import {
  HERO_ROWS,
  HERO_COLS,
  HERO_ACCENTS,
  ROW_DELAY_COEF,
  COL_DELAY_COEF,
  TILE_WIDTH,
  TILE_HEIGHT,
} from "./constants";
import HeroImg from "@/assets/Hero-1024x1024.png";
import { clsx } from "clsx";

function getTileDelay(row: number, col: number): string {
  const index =
    (row * ROW_DELAY_COEF + col * COL_DELAY_COEF) % (HERO_ROWS * HERO_COLS);

  return `${0.18 + index * 0.018}s`;
}

function createTileStyles(
  row: number,
  col: number,
): {
  tileStyle: React.CSSProperties;
  imageStyle: React.CSSProperties;
} {
  return {
    tileStyle: {
      left: `${col * TILE_WIDTH}%`,
      top: `${row * TILE_HEIGHT}%`,
      width: `calc(${TILE_WIDTH}% + 1px)`,
      height: `calc(${TILE_HEIGHT}% + 1px)`,
      animationDelay: getTileDelay(row, col),
    },
    imageStyle: {
      width: `${HERO_COLS * 100}%`,
      height: `${HERO_ROWS * 100}%`,
      left: `${-col * 100}%`,
      top: `${-row * 100}%`,
    },
  };
}

export default function HeroGrid(): React.ReactElement {
  return (
    <div className={styles.heroGrid}>
      {Array.from({ length: HERO_ROWS }, (_, row) =>
        Array.from({ length: HERO_COLS }, (_, col) => {
          const tileIndex = row * HERO_COLS + col;
          const isAccent = HERO_ACCENTS.has(tileIndex);
          const { tileStyle, imageStyle } = createTileStyles(row, col);

          return (
            <div
              key={`${row}-${col}`}
              className={clsx(styles.tile, {
                [styles.tileAccent]: isAccent,
              })}
              style={tileStyle}
            >
              <img
                src={HeroImg}
                alt=""
                aria-hidden="true"
                draggable={false}
                className={styles.tileImg}
                style={imageStyle}
              />
            </div>
          );
        }),
      )}
    </div>
  );
}
