# Password Generator (Currently updating)

- [Overview](#overview)

  - [Links](#links)
  - [Requirements](#requirements)
  - [Stretch Goals](#stretch-goals)

- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

For this project the challenge was to build a password generator app from scratch.

### Requirements

- Build from "scratch" [x] - The module did provide a skeleton and an array of characters to start from.
- Follow the design based from Figma [x] - I followed the majority of the design with some changes with to the fonts.
- Generate two random passwords when the user clikcs the button [x]
- Each password should be 15 characters long. [x]

### Stretch Goals

At the time of working on this project in Mod 3, the module hasn't taught me the concepts I'd need to know to work on the strech goals. So this was extra credit.

- Ability to set password length []
- Copy on click feature [x] - Also added a tooltip to indicate when its been clicked
- Toggle "symbols" & "numbers" []

### Links

- Live Site URL: [https://scrimba-password-generator-solo-project.netlify.app/]

## My process

Before I started coding, I took out my notebook and drew a layout for the body as my canvas essentially a large rectangle/sqaure.
Inside I drew another square which was to act as my container. Inside the container I had vertical divs. The top div contained the main text and the bottom div contained the button, the border line and the space under it for the password text that was dynamically generated in javascript as a paragraph element with some class assinged to it.

### Built with

- HTML 5
- CSS properties
- Flexbox
- Javascript

### What I learned

Depending on the circumstance click events may not work with elements that have been dynamically generated.
I learned how to create elements in javascript and how to add them
to existing elements in HTML.
Using the clipboard API to copy text to.
Using .innerHTML or .textContent to copy the content of the element without needing .value from what I've noticed.
Using setTimeout.
Creating a tooltip to let the user know that they can click the password text to copy. However, I'd have to re-read the steps if I'm to go off on memory alone.

### Continued development

Ability to set password length
Toggle "symbols" & "numbers" on/off
However, these are some things I might do later on since it might take me some time to figure out before implementing these features. As it stands I'm currently fine with how this project turned out.

### Useful Resources

- Creating an element in JS & adding classes: [https://bobbyhadz.com/blog/javascript-create-element-with-class]
- Reading on how to create clipboard: [https://www.w3schools.com/howto/howto_js_copy_clipboard.asp]
- Reading on how to create a timeout: [https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#examples]
