# User Data API

This is a simple Express.js application that serves user data through a RESTful API. The API provides basic user information, including an email address, the current date and time, and a link to a GitHub repository.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

## Installation

To run this project locally on Windows OS, follow these steps:

1. **Clone the repository:**
   git clone https://github.com/Samuel202093/HNG_TASKONE
   
   cd HNG_TASKONE

3.  **Install dependencies:**
    npm install

4. **Run the application**
   npm start

## Usage
Once the server is running on your terminal, you can access the API by navigating to the following URL in your browser:

http://localhost:5000/

## API Documentation 

  ** Endpoint **
      GET /

  Description: Returns user data including email, current date and time, and GitHub URL.

Request:
    Method: GET
    URL: http://localhost:5000/
  
Response:
    Status Code: 200 OK
    Response Body:
{
    "email": "johndoe@gmail.com",
    "current_datetime": "2023-10-01T12:00:00.000Z",
    "github_url": "https://github.com/Samuel202093/HNG_TASKONE"
}

** Programming Language **
  https://hng.tech/hire/nodejs-developers
  
