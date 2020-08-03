# PFCodingChallenge
Front-End Engineer Intern Coding Challenge

1. Pulls the data from these three text files and finds the 5 most common words across them:
* Assumed: 
* Parse through each text file and remove commas, periods, spaces and converted to lowercase in order to retrieve all viable data. 
* Attempted, unable to accomplish in time. 
* Grab 5 most common words from all  3 text files, then compare against each other to retreieve 5 most common words used across them. 

2. Renders these 5 words over a video player (you can use this video in your player
https://frontend-coding-challenge.s3.amazonaws.com/moonwalker.mp4). Each word should
have the following properties:
a. A button adjacent to the video player that when clicked toggles if the word is on
(rendered on the video) or off (not rendered on the video). When the word is toggled
from off to on it should use the state (position and color, described below) it had when
it was last on.
* Assumed:
* Adjecent meant either to the left or right of video. 

b. The word rendered on the video should be draggable anywhere within the bounds of
the video. When clicking to drag the word, the click event (listed below) should not fire.
* Attempted, unable to accomplish in time. 

c. Clicking on the word should cycle the text color between red, blue, green, yellow, and
white. Use CSS to animate this behavior. It should give good UI feedback to the user that
the text was tapped and that the color was changed.
* Attempted, unable to accomplish in time. 

d. Hovering over the word for 2 seconds (while not dragging) should display a menu
underneath that displays the X and Y coordinates of the text. This should also be
animated using CSS at your discretion.
* Accomplished 
