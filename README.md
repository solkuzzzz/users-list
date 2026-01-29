# 👠 Runway Users List

A sleek React application for browsing, searching, and inviting users, styled with the glamorous aesthetic of the fashion world from *The Devil Wears Prada*.

## ✨ Features

-   **Interactive User Gallery** with data from a local JSON file.
-   **Real-time Search** filter users by name or email as you type.
-   **Invitation Management** click to invite users with visual feedback (➕/➖).
-   **Themed Experience** all user profiles are characters from *The Devil Wears Prada*.
-   **Skeleton Loading** elegant loading state while data is fetched.
-   **Success Screen** a celebratory summary after sending invitations.

## 🚀 Technologies Used

-   **React** (Frontend library for building the user interface)
-   **React Hooks** (`useState`, `useEffect` for state and lifecycle management)
-   **JavaScript (ES6+)**
-   **SCSS** for modern and maintainable styling
-   **Fetch API** for handling data requests

## 📁 Project Structure

```
users-list/
├── src/
│   ├── components/
│   │   ├── Users/
│   │   │   ├── index.jsx  # Main list and search component
│   │   │   ├── User.jsx   # Individual user card component
│   │   │   └── Skeleton.jsx # Loading placeholder
│   │   └── Success.jsx    # Final success screen
│   ├── App.js             # Main application component & state logic
│   ├── index.scss         # Global application styles
│   └── index.js           # Application entry point
├── public/
│   ├── users.json         # Local dataset of fashion-world users
│   ├── assets/            # Icons and static images
│   └── index.html
├── package.json
└── README.md
```

## 🎮 How to Use

1.  **Browse Users** - View the list of fashion industry characters.
2.  **Search** - Type a name or email in the search bar to filter instantly.
3.  **Invite Users** - Click the ➕ icon next to a user to select them (icon changes to ➖).
4.  **Manage Selection** - Click ➖ to deselect a user.
5.  **Send Invites** - Click the "Send Invitation" button to see your success summary.

## 📦 Installation & Setup

### Prerequisites
-   Node.js (v16 or higher recommended)
-   npm or yarn

### Steps to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/users-list.git

# 2. Navigate to the project directory
cd users-list

# 3. Install dependencies
npm install

# 4. Start the development server
npm start

# The app will open at http://localhost:3000
```

## 🔧 Available Scripts

In the project directory, you can run:

```bash
npm start    # Runs the app in development mode
npm run build # Builds the app for production (to the `build` folder)
```

## 🎨 Key UI/UX Highlights

-   **Responsive Design** - Adapts gracefully to different screen sizes.
-   **Visual Feedback** - Smooth hover effects and clear state changes for user interactions.
-   **Thematic Consistency** - Styling, colors, and user data create an immersive "Runway magazine" feel.
-   **Clean & Modern Interface** - Focus on clarity and a premium user experience.

## 📚 Project Focus

This project demonstrates practical React concepts, including:
-   Component composition and prop drilling.
-   Managing complex state (user list, search query, invites).
-   Implementing interactive filtering and search logic.
-   Creating reusable UI components (User, Skeleton).
-   Structuring a medium-sized React application.

## 🤝 Contributing

Contributions that enhance the fashion theme or functionality are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.


## 🙏 Acknowledgments

-   Inspired by the iconic style and characters of *The Devil Wears Prada*.
-   Built as a practice project to master React state management and UI design.
-   User avatar images provided by [reqres.in](https://reqres.in).

---

**Step into the world of high fashion. Start inviting your guests to the exclusive Runway party!**


