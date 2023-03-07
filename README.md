# Team Profile Generator

![badmath](https://img.shields.io/github/issues/YueHuaHua/team-profile-generator) ![batmath](https://img.shields.io/github/issues-pr-closed/yueHuaHua/team-profile-generator) ![badmath](https://img.shields.io/github/license/YueHuaHua/team-profile-generator)

</br>
  
## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)

</br>

## Description

This is a Node.js command-line application that allows a user to enter information about employees on their software engineering team, then generate an HTML webpage that displays summaries for each person dynamically. It uses ES6 classes to create objects based off the information entered.

This project utilizes the [`Inquirer`](https://www.npmjs.com/package/inquirer) package to collect input from users through prompt and has passed testing stage by the [`Jest`](https://www.npmjs.com/package/jest) package.

</br>

## Installation

Download the file from repo to your machine. Go into the file directory in the terminal and install the packages by running `npm install` to download the Inquirer and Jest packages.

Application can also be accessed at here [YueHuaHua GitHub repository👾](https://github.com/YueHuaHua/module-08-challenge).

</br>

## Usage

Start the application by typing `node index.js` command or `npm start`. Answer each question required to create employee profiles, and the webpage will be generated in the `output` folder on your machine. Watch this 📽 [video](assets/img/demo-video.mp4) to see the demo or click [here](https://www.dropbox.com/s/spktbbim3tqmhmv/demo-video.mp4?dl=0) to download.

1. Invoke the application by typing `node index.js`.
![Usage Step 1](./assets/img/readme-01-step-1.JPG)
2. Starting the application prompts with information for the manager, then prompts for what to do next.
![Usage Step 2](./assets/img/readme-02-step-2.JPG)
3. Selecting `Engineer` gives a series of prompts specific to the engineer.
![Usage Step 3](./assets/img/readme-03-step-3.JPG)
4. Selecting `Intern` gives a series of prompts specific to the intern.
![Usage Step 3](./assets/img/readme-04-step-4.JPG)
5. Selecting `Exit program` ends the application.
![Usage Step 3](./assets/img/readme-05-step-5.JPG)
6. Check the freshly generated `team.html` webpage file in the `output` folder. 
![Usage Step 4](./assets/img/readme-06-step-6.JPG) 
7. Open the `team.html` file in the browser to see the result.
![Usage Step 4](./assets/img/readme-07-step-7.JPG) 

</br>

## Contributing

Please take a look at our contributing guidelines below if you're interested in helping!

1. Clone the project onto your machine
2. Contribute and make a pull request to be reviewed.

</br>

## Tests

Test the application by typing `npm i jest` in the terminal. This application has passed the test by [`Jest`](https://www.npmjs.com/package/jest) package.

![Application testing](./assets/img/readme-10-test.JPG)

</br>

## License

Licensed under the [MIT license](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt). See LICENSE for the full details.
