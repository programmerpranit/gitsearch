export const getCanvasCoordinates = (
  imgWidth: number,
  x: number,
  y: number
): { x: number; y: number } => {
  const yUp: number = window.innerHeight / 10;
  const yDown: number = (window.innerHeight / 10) * 90;
  const xleft: number = (window.innerWidth - imgWidth) / 2;
  const xright: number = window.innerWidth - xleft;

  if (y > yUp && y < yDown && x > xleft && x < xright) {
    return { x: x - xleft, y: y - yUp };
  } else {
    return { x: 0, y: 0 };
  }
};

const getGazingCoordinates = (
  imgWidth: number,
  x: number,
  y: number
): { x: number; y: number } => {
  const yUp: number = window.innerHeight / 10;
  const yDown: number = (window.innerHeight / 10) * 90;
  const xleft: number = (window.innerWidth - imgWidth) / 2;
  const xright: number = window.innerWidth - xleft;

  if (y > yUp && y < yDown && x > xleft && x < xright) {
    return { x: x - xleft, y: y - yUp };
  } else {
    return { x: 0, y: 0 };
  }
};
