export const TOTAL_SVGS = 69;
export const arraySvgs = Array.from({ length: TOTAL_SVGS }, (_, i) => ({
  url: `/assets/${i + 1}/${i + 1}.svg`
}));
export const TITLE = `${TOTAL_SVGS} SVGs with Inkscape - Part 2`