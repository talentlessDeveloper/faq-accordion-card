# faq-accordion-card
## A frontend mentor challenge

An accordion challenge using html css and javascript.

I wanted the client side to control the Height so that no matter the amount of content added, it fits.

With the help of **Jessica Chan** (coder coder on youtube) I was able to understand the process

Here are the following steps to open the  accordion
- the accordion__collapse display was set to block to make it possible in calculating the height
- the accordion__collapse height was set to the clientHeight
- the display was set back to empty string 
- step 2 and 3 was given a little bit of delay using setTimeOut
- the **collapsing** class was then added
- after few milliseconds the **open** class was added

To close the accordion

- add the collapsing class
- set the height of the accordion__collapse to 0px giving it a little bit delay
- using setTimeOut add the collapse class and set the height to an empty string
 



