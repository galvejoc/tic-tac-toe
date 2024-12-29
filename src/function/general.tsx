import { valueTableType } from "@/interface";

export function isWinner(data: valueTableType[]) {
  //horizontal
  if (data[0] === data[1] && data[1] === data[2]) {
    if (data[0] !== 0) {
      return data[0]
    }
  }
  if (data[3] === data[4] && data[4] === data[5]) {
    if (data[3] !== 0) {
      return data[3]
    }
  }
  if (data[6] === data[7] && data[7] === data[8]) {
    if (data[6] !== 0) {
      return data[6]
    }
  }
  //vertical
  if (data[0] === data[3] && data[3] === data[6]) {
    if (data[0] !== 0) {
      return data[0]
    }
  }
  if (data[1] === data[4] && data[4] === data[7]) {
    if (data[1] !== 0) {
      return data[1]
    }
  }
  if (data[2] === data[5] && data[5] === data[8]) {
    if (data[2] !== 0) {
      return data[2]
    }
  }
  //diagonal
  if (data[0] === data[4] && data[4] === data[8]) {
    if (data[0] !== 0) {
      return data[0]
    }
  }
  if (data[6] === data[4] && data[4] === data[2]) {
    if (data[6] !== 0) {
      return data[6]
    }
  }
  return 0

}