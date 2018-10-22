var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var game = new Game(ctx)
game.start()

document.onkeydown = function(event) {
  switch(event.keyCode) {
    case 37: // left
      game.player.vx = -game.playerSpeed
      break
    case 38: // up
      game.player.vy = -game.playerSpeed
      break
    case 39: // right
      game.player.vx = game.playerSpeed
      break
      case 40: // down
      game.player.vy = game.playerSpeed
      break
  }
}
document.onkeyup = function(event) {
  switch(event.keyCode) {
    case 37: // left
    case 39: // right
      game.player.vx = 0
      break
    case 38: // up
    case 40: // down
      game.player.vy = 0
      break
  }
}