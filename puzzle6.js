right

function move2 {
  if (getColor == "blue") {
    right
  }
  else {
    left
  }
}


if (getColor == "blue") {
  down
  down
  down
  move2
  down
}
else {
  up
  up
  up
  move2
  down
}
