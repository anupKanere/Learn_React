=========================Learning React=========================

# Projects Prepared :

```
    01 = Counter
    02 = BackgroundChanger
    03 = PasswordGenerator
    04 = CurrencyConverter
```

# Notes :

# NPM vs NPX

    - npm (Node Package Manager):
    - npm is the default package manager for Node.js and is used to install and manage packages or dependencies for a project.
    - It's primarily used for installing packages locally within a project (dependencies listed in package.json) or globally on
        your system.
    - It can be used to install packages (npm install <package-name>) and also to manage project-specific dependencies, execute
        scripts defined in package.json, update packages, etc.

    - npx (Node Package eXecute):
    - npx is a tool introduced with npm version 5.2.0 that comes bundled with npm.
    - It's used to execute Node.js packages (typically executables) without having to install them globally.
    - With npx, you can run packages (CLI tools) that aren’t globally installed. It looks for the package in local node_modules or downloads it temporarily.
    - For instance, instead of installing a package globally to use its command-line tools, you can directly execute it with npx <package-name>.

    - In summary, npm is for managing and installing packages, while npx is for executing packages without having to install them globally.

# Create React app using npm

    1. npm install -g create-react-app
    2. create-react-app my-react-app

# Create React app using npx

    1. npx create-react-app my-react-app

# DOM (Document Object Model) :

    - Document  : HTML Document.
    - Object    : Elements like h1, head, body.
    - Model     : Complete HTML Document Structure.

    -The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of HTML, XML, and XHTML documents as a tree where each node represents a part of the document. The DOM represents the document as nodes and objects, allowing programming languages, like JavaScript, to manipulate the structure, style, and content of web documents.

# Virtual DOM :

    -  It's a lightweight representation of the actual DOM (Document Object Model) in memory.

- Here's how it works:

- Real DOM vs. Virtual DOM:
  The Real DOM represents the actual HTML structure of a web page. It's the browser's internal model that gets updated whenever there are changes in the UI.
  The Virtual DOM is a JavaScript object that mimics the structure of the Real DOM. It's a copy of the Real DOM that React maintains in memory.

- Efficiency in Updates:
  When changes occur in a React component, instead of directly manipulating the Real DOM, React first updates the Virtual DOM.
  React then compares this updated Virtual DOM with the previous version of the Virtual DOM (before the changes).
  Through a process called "reconciliation," React identifies the specific differences (or changes) between the two versions of the Virtual DOM.

- Minimizing DOM Manipulation:
  React determines the minimal set of changes needed to update the Real DOM based on the differences found in the Virtual DOM.
  This process helps optimize performance because React can batch and minimize the number of actual manipulations performed on the Real DOM.

- Efficient Updates to the Real DOM:
  Finally, React applies only the necessary changes to the Real DOM, resulting in faster and more efficient updates to the UI.

  - The Virtual DOM serves as a performance optimization technique in React. By reducing the number of manipulations on the Real DOM and performing updates in a more efficient manner, React can deliver a smoother and faster user experience, especially in complex or dynamic applications.

  - It's important to note that developers typically don't directly interact with the Virtual DOM; it's a behind-the-scenes mechanism used by React to manage and optimize updates to the actual DOM.

# index.js

    - This file is the entry point of the React application
    - This file is responsible for rendering the React components into the HTML index.html file.
    - Webpack, as a module bundler, is typically responsible for injecting or including the compiled and bundled JavaScript file (index.js)  into the index.html file in a React application.

# JSX :

    - JSX stands for JavaScript XML.
    - It's a syntax extension used in React that allows you to write HTML-like code directly within JavaScript.

# Functional Components :

    1) Functional components are basic JavaScript functions which return JSX.These are typically arrow functions but can also be created with the regular function keyword.

    2) React lifecycle methods ( for example : componentDidMount ) cannot be used in functional components.

    3) There is no render method used in functional components.

    4) These are mainly responsible for UI  and are typically  presentational only (e.g : a button component).

    5) Functional components can accept and use props.

    6) Functional components should be favoured if you do not need to make use of React state.

# Class Components :

    1) Class components make use of ES6 class and extend the Component class in React.

    2) Sometimes called "smart" or "stateful" components as they tend to implement logic and state.

    3) React lifecycle methods can be used inside class components

    4) You pass props down to class compoents and access them with this.props

# props :

    -   Props (short for properties) in React are a fundamental concept
        used for passing data from one component to another.
        They are read-only and provide a way to make components more reusable.

# Fragment :

    -   In React, a Fragment is a way to group multiple children elements without
        adding an extra node to the DOM.
    -   It's essentially a lightweight wrapper that doesn't create an additional DOM element when rendered.

    -   Example :

        import React from 'react';

        const MyComponent = () => {
            return (
                <React.Fragment>
                    <h1>Hello</h1>
                    <p>Here's a paragraph.</p>
                </React.Fragment>
            );
        };

    -   Alternatively, you can use the shorthand syntax <> and </> to replace

# Context API :

    - Context allows passing data through the component tree without passing props down manually at every level.

    - In React application, we passed data in a top-down approach via props. 
    Sometimes it is inconvenient for certain types of props that are required by 
    many components in the React application. Context provides a way to pass values
    between components without explicitly passing a prop through every level of the
    component tree.

- How to use Context :
        There are two main steps to use the React context into the React application:

        1. Setup a context provider and define the data which you want to store.
        2. Use a context consumer whenever you need the data from the store

- When to use Context :

    Context is used to share data which can be considered "global" for React components tree and use that data where needed, such as the current authenticated user, theme, etc. For example, in the below code snippet, we manually thread through a "theme" prop to style the Button component.

- Syntax :

    const myContext = React.createContext();
    myContext.Provider;
    myContext.Consumer;
