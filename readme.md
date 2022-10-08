# 'What We do in The Shadows' Quiz

![An 'Am I Responsive' mockup showing a website with a logo showing large vampire teeth](assets/images/readme/am-i-responsive.jpg)

'What We do in The Shadows is an New Zealand/American Horror comedy film and TV show. It recently aired its 4th season in the United States and has gathered a large online following
This Quiz was designed for fans to test their knowledge of the show and to have fun sharing their scores.

---

## Contents

- [User Experience](#user-experience)
- [Design Choices](#design-choices)
    -[Colour Selection](#colour-selection)
    -[Typography](#typography)
- [Wireframes](#wireframes)
- [Features](#features)
- [Bugs](#bugs)
- [Testing](#testing)
- [Credits](#credits)

---
## User Experience

### Initial discussion

The fourth season of 'What We Do in the Shadows'  finished airing in the United States and Canada in September, and will soon be aired around the world. The show's fanbase continues to grow, and the show has been renewed for a fifth and sixth season. 

To celebrate, this quiz was created to increase fan engagement between seasons and international airing.

### Key Information on the Site

- How the quiz works
- Which seasons the questions are about
- How many questions there are

## User Stories

### Client Goals

- I want users to be able to take a quiz based on a popular show
- I want users to get a fun result based on their score and be able to share this score with others

### Intital user Goals

- I want to know how the quiz works
- I want to know what content will be in the quiz
- To have a wide range of questions to answer

## Returning user goals

- I want to be able to compare my score to my previous score


---
## Design Choices

### Colour selection

The colours for this website were picked from various promotional materials for the show
![An image showing the promotional posters for 'What We Do in the Shadows' with some colours picked out](assets/images/readme/colour-picker.jpg)
I then picked out similar and complimentary colours to match the ones picked from these posters
![A colour palette showing various shades of pinks, purples and greens picked from the promotional images](assets/images/readme/picked-out-colors.jpg)
Not all of these colours were used in the final project, but having them available while developing allowed me to consider mulitple options for each element

### Typography

I used three different fonts throughout the site.

The main title font used was picked for its resemblance to the font used in the title of 'What We Do in the Shadows'

![Grenze Gotisch font, a serif font with a gothic flair](assets/images/readme/grenze-gotisch-font.jpg)

The secondary font was used to differentiate from the main body font, while being more legible than the title font, allowing for easier reading in the questions

![PT Serif, a serif font](assets/images/readme/pt-serif-font.jpg)

The final font was picked for its clean appearance and legibility

![Roboto Condensed, a sans-serif font](assets/images/readme/roboto-condensed-font.jpg)

### Logo Selection 

The logo for this website was picked from [PNG Repo](https://www.pngrepo.com/svg/200392/fangs-vampire). It is a simple logo that clearly displays what the show is about. The logo was then re-used for the favicon to provide clear identification amongst browser tabs.

## Wireframes

### Site Map

![A site map showing the progression from page to page](assets/images/readme/readme-wireframe.jpg)

### Index Page

The index page welcomes the users to the site, provides them an explaination on how the site and quiz work and what the questions are about

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
- Incorrect initial user input does not allow for re-selection when correct answer is displayed
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

All internal links within the project work. All external links are valid. There are no errors in the console during use.

### Validators
---
## Deployment

This project was deployed using GitHub pages through this link: [Live page](https://alcl2000.github.io/PP2-Amy-lewis/). The repository is available on GitHub and is available for users to clone and fork [Link to repository here](https://github.com/alcl2000/PP2-Amy-lewis)
---
## Credits 

### Languages used
This project is built using HTML, CSS and JavaScript only

### Frameworks, Programs and Libraries

- Balsamiq - Wireframes 
- Git - Version Control
- Git Hub - Repository hosting
- Git Hub - Pages web page hosting 
- Sweet Alert - Custom JS alerts
- Favicon.io - Page favicon
- Google Fonts - Fonts used throughout
- Font Awesome - Social media icons
- Am I responsive - Mockup 
- [Coolors.co](https://coolors.co/) - To generate and edit the colour palette used on the site

### Assets

- Logo from [PNG Repo](https://www.pngrepo.com/svg/200392/fangs-vampire)
- JS Alert Framework from [Sweet Alert](https://sweetalert.js.org/)

### Other content

All text on this site was written by myself, with the rights of 'What We Do in the Shadows' belonging to the FX network and the other copyright holders

#### Google Fonts used
- [PT Serif](https://fonts.google.com/?query=ParaType&category=Serif,Monospace&preview.text=Question%201:&preview.text_type=custom)
- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed?query=roboto&category=Serif,Sans+Serif,Display,Monospace&preview.text=Question%201:&preview.text_type=custom)
- [Grenze Gotisch](https://fonts.google.com/specimen/Grenze+Gotisch)
#### Tutorials

[JS quiz tutorial](https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/)
### With thanks

Thanks to my mentor, Sammy, Ed from tutor support and the 'What We Do In The Shadows' discord for help with ideas, testing, and JavaScript wrangling