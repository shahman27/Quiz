# HVAC Quiz Web App with React

![React Logo](https://reactjs.org/logo-og.png)

Welcome to the **HVAC Quiz Web App**! This project is a feature-rich web application built using ReactJS, incorporating essential functionalities like authentication and private routing for a secure user experience. It utilizes the Bootstrap framework for responsive design, ensuring a seamless experience on various screen sizes. Firebase serves as both the authentication provider and database for managing users and hosting the web app.

## Try the Web App

You can access the web app by visiting [https://auth-quiz-dev.web.app/login](https://auth-quiz-dev.web.app/login).

Login Information:

Username: admin@gmail.com

Password: password

## Features

### Secure Authentication

- User authentication is handled securely through Firebase Authentication.
- Users can create accounts, log in, and reset their passwords.

### Private Routing

- Private routes ensure that only authenticated users can access certain pages, enhancing security.
- Unauthorized users are redirected to the login page.

### Interactive Quiz

- Users can take interactive quizzes on various topics.
- Questions are presented one at a time, with a progress bar indicating the quiz's completion status.
- Instant feedback is provided after each question.
- At the end of the quiz, users can view their score.

### Responsive Design

- The app is built using Bootstrap, making it responsive and adaptive to different screen sizes and devices.
- It ensures a consistent user experience on desktop, tablet, and mobile.

### Firebase Integration

- Firebase is used both for user authentication and as the database for storing quiz data.
- User data is securely managed, and quizzes are efficiently stored and retrieved.

## Project Structure

Here's an overview of the project structure:

```
Quiz/
│
├── src/
│   ├── components/          # React components
│      ├── App.js               # Main application component
│      ├── index.js             # Entry point
│   └── ...
│
├── firebase/            # Firebase configuration
│
├── public/
│   ├── index.html           # HTML template
│   └── ...
│
├── README.md                # Project README (you are here)
├── .gitignore               # Git ignore file
├── package.json             # Node.js package file
└── ...
```

## Getting Started

To run this project locally or modify it for your needs, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/shahman27/Quiz.git
   cd Quiz
   ```

2. Install dependencies using npm or yarn:

   ```bash
   npm install
   # OR
   yarn install
   ```

3. Configure Firebase:

   - Set up a Firebase project at [https://firebase.google.com/](https://firebase.google.com/).
   - Copy your Firebase configuration (apiKey, authDomain, projectId, etc.) into the `firebaseConfig` object in `src/firebase/firebase.js`.

4. Start the development server:

   ```bash
   npm start
   # OR
   yarn start
   ```

5. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Deployment

You can deploy this app to a hosting platform like Firebase Hosting or Netlify for public access.

## Contribution

Contributions to this project are welcome! Feel free to open issues, suggest improvements, or submit pull requests to enhance the app further.

Thank you for checking out the React Quiz Web App. We hope you enjoy using it as much as we enjoyed building it!
