# ReactJS User Management Project

## Project Overview

This project involves creating a user management interface using ReactJS. The application displays a list of users with interactive features and allows for user details to be in-place edited or deleted based on certain conditions.

## Features

- **Search Functionality**: A search bar to filter users by celebrity name.
- **Accordion List**: 
  - Click to expand and view user details while collapsing other accordions.
  - Toggle between expanded and collapsed states with dynamic + and - icons.
- **Edit and Delete**:
  - **Edit Mode**: Allows users to edit details if they are adults. Changes can be saved or canceled. Validation includes no text in age field, no numbers in nationality, and no empty fields. Save button is enabled only if details are modified. Edit mode prevents switching accordions.
  - **Delete Mode**: Confirms deletion with a prompt. User is deleted upon confirmation.

## Technologies Used
- React.js
- Axios
- CSS
- HTML

## Setup Instructions
1. Clone the repository: git clone https://github.com/priyanshbarya/User-Management-Interface
2. Navigate to the project directory 
3. Install dependencies:
    - npm install
4. Start the server
    - npm start
6. Open your browser and navigate to `http://localhost:3000` to access the application.

## Credits
This project was created by Priyansh Barya. 
