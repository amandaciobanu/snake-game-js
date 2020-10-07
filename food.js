import {onSnake, expandSnake} from "./snake.js";

let food = { x: 10, y: 1 }; //grid starts at one
const EXPANSION_RATE = 1

export function update(){
  if (onSnake(food)){
    expandSnake(EXPANSION_RATE)
    food = {x: 20, y: 10}
  }
}

export function draw(gameBoard) {
  const FoodElement = document.createElement('div');
  FoodElement.style.gridRowStart = food.y;
  FoodElement.style.gridColumnStart = food.x;
  FoodElement.classList.add('food')
  gameBoard.appendChild(FoodElement)
}
