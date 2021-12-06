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
