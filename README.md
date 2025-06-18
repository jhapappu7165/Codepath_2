# Web Development Project 2 - Nepal Heritage Flashcards

Submitted by: **Pappu Jha**

This web app: **A React-based flashcards app to explore and learn about Nepal’s World Heritage Sites. The app displays questions about famous sites, and lets the user flip the card to view the answer. Users can cycle through random cards to test their knowledge.**

Time spent: **2** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (array of objects with `question` and `answer`)

- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time

- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front

- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards have different visual styles such as color based on their category
  - Example: Each card has a different background color assigned to enhance visual interest.

The following **additional** features are implemented:

- [x] The app starts with a “Start!” card prompting the user to begin
- [x] The header block (title + description + number) is inside a styled pink container for better UI design
- [x] Background image (Nepal-related) for enhanced visual appeal
- [x] Prevents showing same card twice in a row
- [x] On reload, resets to "Start!" card

## Video Walkthrough

Here's a walkthrough of implemented required features: https://i.imgur.com/K9723Aw.gif

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

Challenges encountered:
- Understanding how to prevent the same random card from repeating (fixed with do-while loop).
- Setting up Git push from Codespace via SSH — resolved after SSH key setup.
- Debugging initial React compile errors caused by misplaced return statement — fixed after properly nesting the return inside the App() function.

## License

    Copyright 2025 Pappu Jha

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.