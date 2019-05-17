Twitch Application - API
Pedro Barreiro

NOTE: Node.js is required (yarn is optional)

Installation guide:

- Open your terminal

- Clone the repository

    - git clone https://github.com/pedrobarreiro24/twitch-app.git
    
- Enter to the repository directory
    - cd twitch-app 

- Install all the dependencies
    - yarn install or npm install

- Get your Twitch API Client ID
    - Sign up at https://dev.twitch.tv/, go to "Your Dashboard" and regist your application:
        - Applications > Regist Application
            - Name - Your app name
            - URL - http://localhost:3000/
            - Category - Website Integration
    - Copy Client ID and paste in REACT_APP_CLIENT_ID="yourID" inside .env file

- Run
    - yarn start or npm start

- Your browser will automatically open 
    - http://localhost:3000/
