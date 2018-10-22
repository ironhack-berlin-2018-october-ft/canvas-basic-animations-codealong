![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# Canvas | Code Along - Basic Animations

## Learning Goals

After this lesson you will be able to:

- Fully understand basic animations on canvas
- Learn how to implement all animations in a single project


## General architecture

Every time you design a game in canvas with animations, you can follow this architecture:

- A `Game` class with:
  - All objects of the game (`this.player`, `this.obstacles`)
  - Information related to the game (`this.frame`, `this.playerSpeed`,`this.obstacleVx`)
  - `start()` method to launch the animation
  - `stop()` method to stop/pause the animation
  - Helper methods (`getScore`, `pushRandomObstacle`)
- Other classes (only `Component` in that example) with the following methods:
  - `update()`: to update the position(s) and add/remove elements
  - `draw()`: to draw in the canvas
  - Helper methods (`top`, `right`)

## Code

The code is available in the current folder.

## Instructions

They will come is the architecture is approved.


<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_5e57f92e86e0837bb4a4be0c5ae46cb0.gif" style="width:100%">