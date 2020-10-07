const GRID_SIZE = 21;

export function randomGridPosition(){
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1, // gives a number between 1-21
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  }
}