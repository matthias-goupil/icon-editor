export interface IRGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

export function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function rgbaToHex({ r, g, b, a }: IRGBA) {
  const red = componentToHex(r);
  const green = componentToHex(g);
  const blue = componentToHex(b);
  const alpha = componentToHex(Math.round(a * 255));
  return `#${red}${green}${blue}${alpha}`;
}

export function hexToRgba(hex: string): IRGBA {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  } else if (hex.length === 4) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  let r = parseInt(hex.slice(0, 2), 16);
  let g = parseInt(hex.slice(2, 4), 16);
  let b = parseInt(hex.slice(4, 6), 16);
  let a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;

  return { r, g, b, a };
}
