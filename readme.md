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

## Features to be added

### Score board 

Adding a leader board would allow users to compare their score, to take the quiz again with the aim of getting a higher score and getting their name on the leader board

### Share Button

Adding a share button, so that users can share their score across social media, would allow for more engagment outside of the intial users, so that more users can become aware of - and take the quiz.

### Alternate questions

Adding an alternate array of questions would increase the chances of return users, and increase the challenge by providing questions that former users do not expect

---

## Bugs 

### The Game did not always redirect users after a correct answer input

The first question specifically did not automatically redirect for the user upon entering a correct answer. To solve this I added an if statement to the next question function, which checks if the id = 0. If it does, the next question is called but the id is iterated before that. Otherwise the next question is called as normal.

### 'Questions[id] is undefined'

![A gif showing the quiz page button being clicked up until the last question, which produces an error in the console](assets/images/readme/error-iteration.gif)

Here the error was caused by the id variable, the if statement used to decide iteration used the array length as the upper limit. The code was not automatically ending the iteration loop when the id was equal to the length of the array, and emitting an error when the user either answered or skipped the last question

This was solved by switching from using the array length to the hard coded number 11

![The tenary if statement that asks if the id is less than 11, if so iterate the quiz, if not end the quiz](assets/images/readme/next-question-fix.jpg)

### Score error

![A gif showing the quiz ending, before showing an error in the console](assets/images/readme/error-score.gif)

Here the error was being produced by the script page not connected to the results page. The script was attempting to locate an element specific to the results page, that was being targetted by results.js instead. 

This was solved by removing obsolete code from before the implementation of the local data method

![An image showing removed redundant lines of code](assets/images/readme/final-score-fix.jpg)

---
## Testing
### Manual

All internal links within the project work. All external links are valid. There are no errors in the console during use.

### Validators
---
## Deployment and Local Development

### Deployment

This project was deployed using GitHub pages through this link: [Live page](https://alcl2000.github.io/PP2-Amy-lewis/). 

Deploying through GitHub pages
- Log in/Sign up to GitHub
- Open the repository 
- Locate the settings
- Click under 'Pages'
- Under "Source", choose which branch to deploy (usally 'Main')
- Choose which folder to deploy from, usually "/root"
- Click "Save", then wait for it to be deployed
- Your URL will be displayed above "Source"

### Local Development

The repository is available on GitHub and is available for users to clone and fork [Link to repository here](https://github.com/alcl2000/PP2-Amy-lewis)

### How to Fork

- Log in/ Sign up to GitHub 
- Go to the repository for this project [https://github.com/alcl2000/PP2-Amy-lewis](Link Here)
- Click fork on the right corner

### How to Clone

- Log in/ Sign up to GitHub 
- Go to the repository for this project [https://github.com/alcl2000/PP2-Amy-lewis](Link Here)
- Click on the dropdown 'Code' button, and select your prefered format
- Copy the provided link 
- Use the command 'git clone'and paste your link into your IDE's CLI

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