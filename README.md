# Skyline Stacker
![Artsy Screenshot](/dist/images/game_screenshot.png)
Welcome to Skyline Stacker! The object of the game is to stack as many horizontal slices of iconic NYC skyscrapers on top of one another while avoiding the subway warnings, pigeons, and rats. 


# Background and Overview
My JS project is a game akin to a sandwich stacking game where a paddle at the bottom of the screen holds up a base layer and must catch other (good) falling pieces onto their growing stack while avoiding bad ones. Each level will get increasingly faster and more difficult and players will be rewarded for building skyscrapers more quickly and penalized for accidentally stacking pigeons or rats. The game is built using Javscript's Canvas API.

### How to Play

Move the paddle left and right using the corresponding arrow keys to stack skyscraper slices while avoiding hitting pigeons.

### Features

#### Canvas Rendering
Rendering of shapes is done within Canvas to draw the Paddle, Clouds, and skyscraper segments as well as update the picture based on the level the user is on.

#### Audio

The audio element is created with HTML's audio built element. I styled over it by hiding the original element and creating buttons to link to the HTML audio.

### Functionality and MVPs 
Splash page, Randomized Falling piece controlling moving paddle, build template, score + high scores + levels
  
### Wireframes 
https://wireframe.cc/FgcKTC
  
### Architecture and Technology 
Canvas API for graphics
Firebase for high score persistence
  
### Implementation Timeline 
  Monday: basic layout of landing page containers
  Tuesday: falling skyscraper pieces functionality completed
  Wednesday: controls and score updates working
  Thursday: styling of skyscrapers and game page
  Friday: High score feature working with skyscraper fun facts 
  
### (Bonus Features) 
  Fun Facts about each skyscraper
  Power-ups
  Changeable themes
