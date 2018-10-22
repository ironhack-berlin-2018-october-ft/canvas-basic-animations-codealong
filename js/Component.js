class Component {
  constructor(ctx,x,y,vx,vy,width,height,color){
    this.ctx = ctx
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.width = width
    this.height = height
    this.color = color
  }
  left() { return this.x }
  right() { return (this.x + this.width) }
  top() { return this.y }
  bottom() { return this.y + (this.height) }
  draw(){
    // ctx.ctx.save()
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x,this.y,this.width,this.height)
    // ctx.ctx.restore()
  }
  update(){
    this.x += this.vx
    this.y += this.vy
  }
}