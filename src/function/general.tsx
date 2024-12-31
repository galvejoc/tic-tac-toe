import { statusTableType, valueTableType } from "@/interface";

export function isWinner(data: valueTableType[]) {
  // Verificar combinaciones ganadoras
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (data[a] === data[b] && data[b] === data[c] && data[a] !== 0) {
      return data[a]; // Devuelve el ganador
    }
  }
  return 0
}

export function isFull(data: valueTableType[]) {
  if (data.some(element => element === 0)) {
    return false;
  }
  return true;
}

export function isWinnerGereral(data: statusTableType[]) {
  // Verificar combinaciones ganadoras
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (data[a] === data[b] && data[b] === data[c] && data[a] !== 0 && data[a] !== 3) {
      return data[a]; // Devuelve el ganador
    }
  }

  // Verificar si hay empate
  const isEmpty = data.some(element => element === 0);
  if (!isEmpty) {
    const count1 = data.filter(element => element === 1).length;
    const count2 = data.filter(element => element === 2).length;
    if (count1 === count2) {
      return 3; // Empate
    }
    return count1 > count2 ? 1 : 2; // Devuelve el jugador con más marcas
  }

  return 0; // No hay ganador ni empate
}

const winningCombinations = [
  [0, 1, 2], // Horizontal
  [3, 4, 5], // Horizontal
  [6, 7, 8], // Horizontal
  [0, 3, 6], // Vertical
  [1, 4, 7], // Vertical
  [2, 5, 8], // Vertical
  [0, 4, 8], // Diagonal
  [2, 4, 6]  // Diagonal
];

export function getRandomZeroPosition(data: valueTableType[] | statusTableType[]) {
  const zeroPositions = data
    .map((value, index) => (value === 0 ? index : -1))
    .filter(index => index != -1);

  const randomIndex = Math.floor(Math.random() * zeroPositions.length);
  return zeroPositions[randomIndex];
}