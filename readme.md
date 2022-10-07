# 'What We Do in the Shadows' Quiz
---
1. [Wireframes](##%20Wireframes)
2. [Features](##%20Features)
3. [Bugs](##%20Bugs)
4. [Testing](##%20Testing)
4. [Credits](##%20Credits)

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
### The next question button was not calling the function correctly
The next question button was supposed to call the nextQuestion function and iterate through the next question. The function was not being called corrrectly, and often was called before the button was clicked. This problem was fixed by passing the function through a proxy function to delay the function being called. 

---
## Testing
### Manual
### Validators
---
## Deployment
This project was deployed using GitHub pages through this link: [Live page](https://alcl2000.github.io/PP2-Amy-lewis/). The repository is available on GitHub and is available for users to clone and fork [Link to repository here](https://github.com/alcl2000/PP2-Amy-lewis)
---
## Credits 
### Technology used
This project is built using HTML, CSS and JavaScript only
### Assets
- Logo from [PNG Repo](https://www.pngrepo.com/svg/200392/fangs-vampire)
- JS Alert Framework from [Sweet Alert](https://sweetalert.js.org/)
### Other content
#### Google Fonts used
- [PT Serif](https://fonts.google.com/?query=ParaType&category=Serif,Monospace&preview.text=Question%201:&preview.text_type=custom)
- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed?query=roboto&category=Serif,Sans+Serif,Display,Monospace&preview.text=Question%201:&preview.text_type=custom)
- [Grenze Gotisch](https://fonts.google.com/specimen/Grenze+Gotisch)
#### Tutorials
[JS quiz tutorial](https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/)
### With thanks
Thanks to my mentor, Sammy, Ed from tutor support and the 'What We Do In The Shadows' discord for help with ideas, testing, and JavaScript wrangling