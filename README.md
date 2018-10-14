## Project title
Hatch-Test

## Motivation
This Project attempts to allow a user to navigate through the hierarchy of an organization intuitively through clicking, instead of forms and drop down menus

## Code style
If you're using any code style like xo, standard etc. That will help others while contributing to your project. Ex. -

[![ts-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
 
## Tech/framework used
<b>Built with</b>
- [Create-React-App](https://github.com/facebook/create-react-app)

## Features
* The current team being examined is shown in the top section by itself
* Its body contains the names of its immediate staff members(those assigned to it directly)
* You can toggle whether or not you want to see its immediate sub team or all staff under its level in the hierarchy through the buttons on the bottom
* Clicking on the Card in the header takes you back up a level so that its parent is not being examined and it is in the lower section as a sub team
* If allowed you can pick a team to belong to. This button returns an array that would then be assigned to a users object 

## Code Example
Show what the library does as concisely as possible, developers should be able to figure out **how** your project solves their problem by looking at the code example. Make sure the API you are showing off is obvious, and that your code is short and concise.

## Installation
npm install && npm start

## API Reference
Create a new company with a name
  `const tree =  new Company('Not A Shell Company');`

Add your first team. This will be the topmost level team and what will be returned as root so it's best to go with CEO
  `const ceo = new Team('CEO');`
  `tree.addTeam(ceo, ['CEO']);`

Add subsequent teams by extending the mapping array
  `const office = new Team('Office');`
  `tree.addTeam(office, ['CEO']);`
  `const officeManager = new Team('Office Manager');`
  `const jrOfficeManager = new Team('Office Manager Lite');`
  `tree.addTeam(officeManager, ['CEO', 'Office']);`
  `tree.addTeam(jrOfficeManager, ['CEO', 'Office', 'Office Manager']);`

Add team members the same way
  `tree.addMemberToTeam(['CEO', 'Office', 'Office Manager', 'Office Manager Lite'], {name: 'Sheree', id: 5, team: ['CEO', 'Office', 'Office Manager', 'Office Manager Lite']});`


## Tests
- Unit tests currently to support the underlying tree and its functionality
- Will add snapshot testing

## How to use?
Click on clickables

## License
MIT © [Melvin-Young]()