# Description
A very simple image slider component done on top of Polymer 0.5.

# Initial setup

## Setup node-js
  sudo install node

## Setup bower
  sudo npm install -g bower.

## Install node-js webserver:
  sudo npm install -g serve

## Clone the project.
  git clone https://github.com/rogozinds/ImageSlider.git

## Install bower dependencies (if there are conflicts user version 0.5.x)
  bower install

# Run and use
## Start webserver in project root execute:
 serve

## Check the result:
 Open browser and type localhost:3000 in you browser

 :TODO
 - Optimize image scrolling, right now all images are scrolled - even those which
 are hidden. For hidden images we can just change left coordinate, without any animation.

 - Add circle scrolling, right now if you reach last image, you can't scroll anymore - can
 be tricky because all images are in select element. Probably this feature can't be implemented
  easily in current design.
