class Game {
  constructor(ctx){
    this.ctx = ctx
    this.playerSpeed = 5
    this.obstacleVx = -5
    this.frame = 0
    var playerSide = 40
    this.player = new Component(
      this.ctx,
      (this.ctx.canvas.width-playerSide)/2,
      (this.ctx.canvas.height-playerSide)/2,
      0,
      0,
      playerSide,
      playerSide,
      "red"
    )
    this.obstacles = []
  }
  start() {
    var that = this
    this.intervalId = setInterval(function(){
      that.draw()
      that.update()
    }, 1000/60)
  }
  stop() {
    this.draw()
    clearInterval(this.intervalId);
  }
  draw(){
    this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)
    this.player.draw()
    for (var i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].draw()
    }
    this.drawScore()
  }
  update(){
    this.frame++
    this.player.update()
    for (var i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].update()
    }
    // Add an obstacle
    if (this.frame % 100 === 0) {
      this.pushRandomObstacle()
    }
    // Remove potential useless obstacle 
    if (this.obstacles.length > 0 && this.obstacles[0].right() < 0) {
      this.obstacles.splice(0,1)
    }
    for (var i = 0; i < this.obstacles.length; i++) {
      if (this.isCollision(this.player, this.obstacles[i])) {
        this.stop()
      }
    }
  }
  drawScore() {
    // ctx.ctx.save()
    this.ctx.font = "20px sans-serif"
    this.ctx.textAlign = "right"
    this.ctx.fillStyle = "black"
    this.ctx.fillText("Score: "+this.getScore(), this.ctx.canvas.width - 5, 20)
    // ctx.ctx.restore()
  }
  getScore() {
    return Math.floor(this.frame/10)
  }
  pushRandomObstacle() {
    var randomHeight = Math.floor(Math.random()*(this.ctx.canvas.height-2*this.player.height))
    var width = this.player.width
    this.obstacles.push(new Component(
      this.ctx, 
      this.ctx.canvas.width,
      0,
      this.obstacleVx,
      0,
      width,
      randomHeight,
      "green"
    ))
    this.obstacles.push(new Component(
      this.ctx, 
      this.ctx.canvas.width,
      randomHeight+2*this.player.height,
      this.obstacleVx,
      0,
      width,
      this.ctx.canvas.height,
      "green"
    ))
  }
  isCollision(c1,c2) {
    return (
      (c1.bottom() > c2.top()) &&
      (c1.top() < c2.bottom()) &&
      (c1.right() > c2.left()) &&
      (c1.left() < c2.right())
    )
  }
}