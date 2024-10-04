# 0x02. ES6 Classes

**OOP | JavaScript | ES6**  
 
**Start Date:** Oct 3, 2024, 6:00 AM  
**End Date:** Oct 5, 2024, 6:00 AM  

# Resources
Read or watch:
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming)

## Learning Objectives
By the end of this project, you should be able to explain to anyone, **without the help of Google**:
- How to define a Class
- How to add methods to a class
- Why and how to add a static method to a class
- How to extend a class from another
- Metaprogramming and symbols

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- **Allowed Editors:** vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- **A `README.md` file is mandatory**
- Use the `.js` extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- Code needs to pass all tests and lint. You can verify the entire project by running `npm run full-test`

---

## Setup
### Install NodeJS 12.11.x
In your home directory, run the following commands:
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```
Install Jest, Babel, and ESLint
```bash
npm install
```

## Configuration Files

### 1. `package.json`
Add the following `package.json` file to your project directory:
```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "npm run lint -- .",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint . && jest"
  },
  "devDependencies": {
    "@babel/cli": "^7.6.0",
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "jest": "^24.9.0"
  }
}

