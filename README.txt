
To setup project:
0. Install node-js:
  sudo install node
1. Install bower:
  sudo npm install -g bower.
2. Install node-js webserver:
  sudo npm install -g serve
3. Clone the project.
4. Add Polymer library. In project directory execute:
  bower install Polymer/paper-elements
5. Start webserver. In project dir execute:
 serve
6. Check the result:
 Open browser and type localhost:3000 in addressbar

 :TODO
 - Optimize image scrolling, right now all images are scrolled - even those which
 are hidden. For hidden images we can just change left coordinate, without any animation.

 - Add circle scrolling, right now if you reach last image, you can't scroll anymore - can
 be tricky because all images are in select element. Probably this feature can't be implemented
  easily in current design.
