


# REDDIT_CLI
# Random post opner
# CLI
A command-line interface processes commands to a computer program in the form of lines of text. The program which handles the interface is called a command-line interpreter or command-line processor

# Building our own CLI
Building a CLI using nodeJS is super easy. You just need to make a simple nodeJS application and requires few step to complete.
In the backend it is a nodeJS app working with a bin command

The fist line on that file is called a shabang or hashbang. It's needed to tell the machine where the interpreter is located that is needed to execute this file. For us, that will be Node.js.
## reddit.mjs
```javascript
#! /usr/bin/env node

import fetch from "node-fetch";
import open from "open";
import yargs from "yargs";
const { argv } = yargs(process.argv);
const res = await fetch("https://www.reddit.com/.json");
const data = await res.json();

const chilDren = data.data.children;

const randomIndex = Math.floor(Math.random() * data.data.children.length);
const post = chilDren[randomIndex];
const link = `https://www.reddit.com${post.data.permalink}`
if (argv.print) {
  console.log(`
    title: ${post.data.title} \n
    link: ${link}`)
} else {
  open(link);
}

```

### *We need to add our CLI name in package.json so that we can run commands in the terminal
```nodejs
"bin": {
  "reddit": "./reddit.mjs"
}
```
# Testing
To test your package locally, first copy this repository and after cloning go to your terminal and type
```nodejs
npm i absolute/path/to/my/package
```
#### After succesfully running your CLI it's time to publish it on npm. you could could choose it to be a private publication, public or only accessible to an organization

# Publishing

```nodejs
npm publish 
```

## Installation

This requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i simple_reddit_cli
```





## Usage
Open the Node CLI and open the directory where you installed this package and type "reddit"
```sh
reddit
reddit --print
```







 
