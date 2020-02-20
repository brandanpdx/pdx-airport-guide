# Epicodus Team Week Project - February 17-20, 2020

#### By **Brandan Sayarath, Jieun Kang, Drake Wilcox, Fatma Dogan**

## Description

This is the Epicodus team week assignment for the week of February 17-20, 2020.  The purpose of this project is to develop a website dedicated to the Portland International Airport in Portland, Oregon. The website will have information for travelers such as flight information, airport amenities such as restaurants, and shops.

![Readme Cover](./img/readme.png)

## Behavior Driven Development Specifications

| Specification<img width=800/> | Input <img width=400/> | Output <img width=500/> |
| :---------------------------	| :--------------------- | :---------------------- |
| In SPLASH page, the program will return flight informaiton based on submitted user input | Airline: United</br>Fligh#: 1</br>mm/dd/yyyy: 02/20/2020 | Flight Status: On time</br>Carrier: United</br>Flight: **UA1**</br>From: San Francisco(SFO)</br>To: Singapore(SIN)</br>Departs: 22:35</br>Arrives: 08:00 |
| The program will display detail informaition of aircraft when user clicks the flight code | Click **UA1** | United Airlines</br>Aircraft Type: Boeing 787-9</br>Engine Type: Jet</br>1st Flight Date: 2014-10-16</br>Age Years: 5.5 |
| In AIRPORT INFO page, the program displays GOOGLE MAP and will show a list of shops and restaurants when user clicks the button | Click **shops** | List of shops with detail information |
| In SECURITY INFO page, the program displays security detial infromaiton | | PDX Security Informaiton |
| In FLIGHT INFO page, the program will display flight schedule based on submitted date | 02/20/2020 | List of flight schedules |


## Setup/Installation Requirements

### # Install Node.js

**OSX Installation Instructions**
  1. Install Homebrew
      * If you already have Homebrew installed, then skip to next step.
      * Install Homebrew by entering the following two commands in Terminal:
        * ```$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```
        * ```$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile```

  2. Insall Node.js
      * On OS X systems, install Node.js through Homebrew with the following command in your home directory:
        * ```$ brew install node```

  3. Confirm that node and npm (node package manager, installed automatically with Node) 
      * Check the versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):
        * `$ node -v`
        * `$ npm -v`

**Windows / Linux Installation Instructions**
  * To install Node on other systems, go to the [Node website](https://nodejs.org/en/), download and install the appropriate installer for your operating system.

### # Install this application

1. Clone this repository
    * Clone this project on your local machin via Terminal using the following commands:
        * ```$ cd desktop```
        * ```$ git clone https://github.com/brandanpdx/pdx-airport-guide```
        * ```$ cd pdx-airport-guide```

2. Install dependencies 
    *  Enter the following code in the command line to install all necessary dependencies to the project.
        * `$ npm install`

3. Linking API key
    * This application requires an API key to run properly.
      * Get a personal API key from </br>
      https://developers.google.com/maps/documentation/javascript/get-api-key </br>
       https://rapidapi.com/squawk7000/api/aerodatabox
      * Create a .env files in the root directory or the project. Obtain your own API key in .env file.</br>
      `API_KEY = YOUR UNIQUE API KEY GOES HERE`</br>
      `GOOGEL_MAPS_API_KEY = YOUR UNIQUE API KEY GOES HERE`</br>
      `GOOGLE_PLACE_API_KEY = YOUR UNIQUE API KEY GOES HERE`

4. Working with the project in Node
    * To build and buldle the project in webpack run:
      * `$ npm run build`
    * To spin up a development server at http://localhost:8080/.
      * `$ npm run start`

_To view/edit the source code of this application, open the contents of the doctor directory in a text editor or IDE of your choice (e.g., to open all contents of the directory in Visual Studio Code on macOS, enter the command_ ``code .`` _in Terminal)._


## Support and Contact

Please email Brandan Sayarath: brandan@brandan.tech for any questions.

## Technologies Used

This program was created with:
| Development dependencies | Front end dependencies |
| :------ | :------ |
| webpack | Boostrap |
| eslint-loader | jquery |
| babel-loader | popper |
| css-loader & style-loader | |
| load-google-maps-api | |

## License

_This website is licensed under MIT permissive free software license_

Copyright (c) 2020 **Brandan Sayarath, Jieun Kang, Drake Wilcox, Fatma Dogan**

