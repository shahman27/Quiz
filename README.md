# HVAC Quiz Web App with ReactJS

![React Logo](https://reactjs.org/logo-og.png)

## Overview

This project is a quiz web application built with ReactJS, featuring authentication and private routing to create a secure platform for users. The app also utilizes the Bootstrap framework for responsive design, ensuring a seamless user experience across various screen sizes. Firebase serves as both the database for managing current users and the hosting platform for the web application.

### Key Features

- **User Authentication:** Users can create accounts and log in securely to access personalized features and quizzes.

- **Private Routing:** Private routes ensure that only authenticated users can access certain parts of the application.

- **Responsive Design:** Utilizes Bootstrap to adapt automatically to the size of visitors' screens, enhancing the user experience.

- **Quiz Functionality:** Offers a wide range of quizzes on various topics, allowing users to test their knowledge.

- **Database Management:** Uses Firebase as a database to manage user data and store quiz-related information.

- **Website Hosting:** Deploys the web app as a website, making it accessible to users globally.

## Getting Started

To get started with the Quiz Web App, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/shahman27/Quiz.git
   cd Quiz
   ```

2. **Install Dependencies:**
   Use `npm` or `yarn` to install the required dependencies listed in the `package.json` file:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Firebase Configuration:**
   Set up Firebase for authentication and database. Update the Firebase configuration in the project as needed.

4. **Run the App:**
   Start the development server and launch the app in your browser:
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Explore and Use:**
   Access the web app in your browser and explore the quizzes and authentication features.

   Login Information:
   Username: admin@gmail.com
   Password: password


## Project Structure

Here's an overview of the project structure:

```
quiz-web-app/
│
├── public/        # Public assets, HTML template, and manifest
│   └── ...
│
├── src/           # React source code
│   ├── components/  # Reusable React components
│       ├── App.js      # Main application component
│   ├── contexts/       
│   └── ...
│
├── firebase/      # Firebase configuration (API keys, etc.)
│   └── ...
│
├── README.md      # Project README (you are here)
└── package.json   # Dependencies and scripts
```

## Contributions

Contributions to the Quiz Web App project are welcome! Whether it's fixing bugs, adding new quizzes, improving the user interface, or enhancing security features, your contributions will help make this app better.

## Contact

For questions or feedback, please feel free to contact me at [dhruvshah38@gmail.com](mailto:dhruvshah38@gmail.com).

Enjoy exploring and learning with the Quiz Web App!

