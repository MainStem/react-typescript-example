
# Getting Started with MainStem React/TypeScript Example Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is an example application of browser based web application using React (v 17.x), TypeScript (v 4.x) and styled-components (v 5.x). Unit tests are handled by Jest and Enzyme.  

This repository showcases how [MainStem.io](https://www.mainstem.io) builds its front-end React components for its purchasing platform. While our production repository may not match this guide 100% with legacy code, it is a good starting point for how we are building our front-end moving forward.  

## Component Structure  

Our components are generally comprised of 4 files. One for the React component itself, another for tests, another for CSS styles for styled components and the fourth for TypeScript definitions.

***index.tsx***
This is where our React component code will go.  We generally try to build "[dumb components](https://www.shade.codes/dumb-components-and-smart-components/)" as much as possible.  We do not put any CSS, styled-components, or TypeScript definitions in this file to help keep the lines of code to a minimum.

***index.test.tsx***
This is where our unit tests go for components.  We use Jest and Enzyme to run the tests.  A render test should be created at minimum, with additional tests created as applicable.

***styles.ts***
This is where our CSS and styled-components code sits.  CSS properties are linted by [stylelint](https://stylelint.io) and properties are forced to be in alphabetical order.

***types.ts***
This is where our TypeScript definitions go.  Interfaces, enums, and types should all be stored in here for the component so they are easily importable from applications that need access to them.  

## Linting  

We have two different linters we run. One for TypeScript (eslint) and one for our styles (stylelint). Each has its own config file.  

***.eslintrc.json***
This is the config file for eslint.  It is used to lint our TypeScript code.  It is also used to lint our React component code.  We use standard and recommended rules for TypeScript and React to support rules like alphabetical order and no-unused-vars.

***.stylelintrc.json***
This is the config file for stylelint.  It is used to lint our CSS and styled-components code.  We use standard and recommended rules for CSS and styled-components to support rules like alphabetical order and no-unused-vars.

## Code Splitting / Lazy Loading  

We use code splitting to load our code asynchronously. This is a good way to reduce the number of requests we make to the server.  

## Available Scripts  

In the project directory, you can run:  

### `yarn start`  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  

The page will reload if you make edits.\

You will also see any lint errors in the console.  

### `yarn test`  

Launches the test runner in the interactive watch mode.\