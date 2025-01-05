# React Component Library

This repository contains a collection of reusable React components built on top of the **Bootstrap** styling library. The purpose of this project is to develop modular components that can be used to create a gamified web application. I've integrated **Storybook** for component development and have used **motion** and **GSAP** for animations, making components interactive and visually engaging.

## Components Built

- **Avatar**: A customizable avatar component for user profiles.
- **HamburgerButton**: A responsive hamburger menu button for navigation.
- **Icon**: A flexible icon component that can be styled and used throughout the app.
- **NewsLetter**: A newsletter subscription form component.
- **ProductCard**: A product card component with animations using **motion**.
- **Sidebar**: A collapsible sidebar for navigation.
- **UserProfile**: A user profile card displaying user information and avatar.

## Styling

This project uses the **Bootstrap** styling library to quickly style the components, ensuring consistency and responsiveness across various screen sizes. Bootstrap’s grid system, utilities, and components provide a solid foundation for building modern web UIs.

## Animation Libraries

- **`motion`**: Used for animating the **ProductCard** component. More motion-based components will be added in the future.
- **`GSAP`**: Planning to integrate **GSAP** for more advanced and smoother animations across components.

## Storybook Integration

Storybook is integrated into the project for visual development. It allows you to build, test, and document components in isolation. You can explore the components and their variations in Storybook.

## How to Run

### 1. Clone the repository

```bash
git clone git@github.com:gprakasha/react-component-library.git
cd react-component-library
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server
```bash
npm start
```
This will start the app and you can view the components directly in your browser.

### 4. Start Storybook
To run Storybook locally and view the components:

```bash
npm run storybook
```
Storybook will be available at http://localhost:6006, where you can see all the available components and test them interactively.

## Future Plans
- More Animations: Further integration of GSAP and motion to create smoother and more engaging animations across all components.
- Gamified UI: The end goal is to use these components to build a gamified web application with interactive elements and immersive design.
- Expand Component Library: Additional UI components and features will be added as the project grows.

## Contributing
- Feel free to contribute to this project by opening issues or submitting pull requests. Contributions are always welcome!