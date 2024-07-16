# Lesson Plan Builder

## Description  
The Lesson Plan Builder App is a tool designed to help educators to quickly create lesson plans for a specific topic. With the use of the Tavily AI API, the app automates the process of generating lesson plans by making intelligent calls to the API based on the user's input.

## Technology Used
![MUI badge](https://img.shields.io/badge/Material_UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white) 
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![Redux badge](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)  
![React badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)  
![Vite badge](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)  
![NPM badge](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)  
![Node badge](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Tavily AI badge](https://img.shields.io/badge/Tavily_AI-green)
![Postgres badge](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)  
![Prisma badge](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white) 

## How to Setup the Project
To run this code on your computer, follow these steps:  
1. Copy the 'clone' link from the **<> Code** button
2. Run `git clone <copied link>` in the command line to copy the repo down to your local computer
3. Run `npm install` in the command line to install any dependencies you don't have installed globally
4. Create a .env file in the top-level of your folder
5. In the .env file, insert this code:   
    `REACT_APP_TAVILY_API_KEY =<your Tavily AI API key>`
6. Run `npm run dev` in the command line
7. Open the app on your localhost at localhost:3000

## Known Issues  
- There are no visible errors for users if the API call fails 
- There aren't character limits on the textfields