# Web Development Project 3 - Nepal Heritage Flashcards (Part 2)

Submitted by: **Pappu Jha**

This web app: **A React-based flashcards app designed to help users explore and learn about the 10 official UNESCO World Heritage Sites of Nepal. Users can test their knowledge by entering answers, flip cards to see correct answers, navigate through the cards in order, shuffle them, and track their correct-answer streak.**

Time spent: **2** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  - Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons have visual indication (disabled) at the beginning or end of the list, preventing wrap-around navigation

The following **optional** features are implemented:

- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards change to a random sequence once the shuffle button is clicked
- [x] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Example: ignoring uppercase/lowercase discrepancies
- [x] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 

The following **additional** features are implemented:

* [x] The app starts with a "Start!" card, guiding the user to begin
* [x] Clicking on the card flips between question and answer at any time
* [x] The header and bottom sections are styled with background containers to improve readability over the image background
* [x] A beautiful background image related to Nepal is used in the app

## Video Walkthrough
https://www.loom.com/share/d08f8f0a9e4e45889e27b16e5e884b26?sid=0e762aa9-1840-4bf3-b2dd-2d9a1e1ed454


GIF created with **ScreenToGif**  
[ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

Challenges encountered:
- Handling the "Start!" card state while keeping the app easy to navigate
- Running the app in Gitpod.io due to server limitations

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