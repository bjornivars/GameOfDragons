GameOfThrones INFO LOG:

Tests that has been run: 
- https://tools.pingdom.com/ (website loading speed)
- https://www.webaccessibility.com/ (accessible to persons with disabilities)
- https://achecker.ca/ (WCAG test)

Difficulties along the way:
  - Api did not give an id to EASILY find character. 
  - I fucked up with too many shortcuts which resulted with me having to start over.
  - Spaghetti code
  - Making choosePlayer work on image click
  - Creating the confirm/deny modal 

What I would have done if i had more time: 
  - Add animation to character movement
  - Socket.io
  - Change layout of board
  - Better illustrations


Moving parts:
  - Spinning dice
  - Player 1 character
  - Player 2 character
  

Sites:
  - index.html
    - circular images of ten characters
    - "read more" button that displays modal with character info
    - player selection (player 1 = green, player 2 = blue  borders for selected character
    - "ready up"/"start game" button

  - game.html
    - display of which player is which character
    - the actual playingboard with 34 tiles (5 of them are traps)
    - the active player above the dice
    - the dice (should rotate when rolled)
    - the "spin dice" button
    - chatbox for eventual socket.io
    - modal when the user hits a trap with info of what happens now.
  
  - game.html -----> WINNER MODAL
    - dragons and flames and shit
