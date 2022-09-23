# 'What We Do in the Shadows' Quiz
---
1. [Wireframes]()
2. [Features]()
3. [Credits]()

---
## Wireframes
### Site Map
![A site map showing the progression from page to page](assets/images/readme/readme-wireframe.jpg)
### Index Page
![A Wireframe of the index page displaying the title, instructions and a button to start the quiz ](assets/images/readme/readme-index.jpg)
### Quiz Page 
![A Wireframe of the quiz page showing the quiz question, the question number and score number, along with the answer buttons](assets/images/readme/readme-quiz.jpg)
### Results page
![A Wireframe of the results page showing the final score, and a short paragraph detailing their results](assets/images/readme/readme-result.jpg)
---
## Features
### Header
The header is present on every page. It has the home home button along with a link to my Git hub and linked in available on each page.
### Index Page
The index page features the title of the quiz, along with a short description of the rules. There is also a button to access the quiz. 
### Quiz page
The quiz page Features the main quiz loop for the players. It displays the quiz title and number. 
It also shows a quiz score for the player. 
When a question is answered the quiz page will either confirm the user got the question correct or show them the correct answer if they got the answer wrong.
### Buttons
The buttons display the correct answer sets for each question
### Results Page
The results page displays the user's final score at the end of the quiz, along with a short paragraph describing their results.

---
## Bugs 
### The Game did not always redirect users after a correct answer input
The first question specifically did not automatically redirect for the user upon entering a correct answer. To solve this I added an if statement to the next question function, which checks if the id = 0. If it does, the next question is called but the id is iterated before that. Otherwise the next question is called as normal.
### The assign result function was unable to parse the score value 

---
## Testing
### Manual
### Validators
---
## Deployment
---
## Credits 
### Technology used
This project is built using HTML, CSS and JavaScript only
### Assets
- Logo from [PNG Repo](https://www.pngrepo.com/svg/200392/fangs-vampire)
### Other content
#### Google Fonts used
- [PT Serif](https://fonts.google.com/?query=ParaType&category=Serif,Monospace&preview.text=Question%201:&preview.text_type=custom)
- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed?query=roboto&category=Serif,Sans+Serif,Display,Monospace&preview.text=Question%201:&preview.text_type=custom)
- [Grenze Gotisch](https://fonts.google.com/specimen/Grenze+Gotisch)
#### Tutorials
[JS quiz tutorial](https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/)
