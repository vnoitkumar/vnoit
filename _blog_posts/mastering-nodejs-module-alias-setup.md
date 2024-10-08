---
title: "Mastering Node.js Module Alias Setup"
excerpt: "The ultimate Node.js module aliases setup guide for testing environment, with linting rules, & editor integration!"
coverImage: "/assets/images/blogs/mastering-nodejs-module-alias-setup/cover.jpg"
date: "2024-10-04"
readTime: "5 min read"
author:
  name: Vinoth (Vnoit)
  picture: "/assets/images/authors/vinoth-200x200.jpg"
ogImage:
  url: "/assets/images/blogs/mastering-nodejs-module-alias-setup/og-image.jpg"
twitterHandel: "@vnoitkumar"
coverImageBlurHash: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIADUAZAMBIgACEQEDEQH/xAAwAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUHAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/aAAwDAQACEAMQAAAA+LD18QAAAAAHbxJru58d5y7bGOcwnYi08Vb7HjlekK5gJgaVqxZUa5DA3QAAAAAAAP/EADAQAAIBAwEEBwgDAAAAAAAAAAECAwAEESEFEyJhEiBAQVFUkRAUJDEzNHJzgaGj/9oACAEBAAE/AO1wwWjx5kvlifXhMTN/Yp4LFUcrel2BAVREV9SaEcfDmZeehrdWuPvM8t01CG177vT9bVubXT4wEco2BoRW3m/82rdWvfd+kZoQ2YkQNdkqTqVjPD61DZbOa02jI+0kEsONwgH1qPVgtri4LLDE0hAyQtDZe0icCzlz/AoWV4VDC3cqRkEYINe53fl3oWN43TxbvwDLDTIHjjNT7PvLe2tbmWErDcDMTePsz1gxU5BIPI4oyyk5MshPiXOaDuMYdtPlxHSum+c9Ns/kaDupJDsCRgkMRmnnmkjijeV2SMYRSchRy7f/AP/EACURAQABAgQFBQAAAAAAAAAAAAERAAIDEiAhIjBUYXGBgqHB0f/aAAgBAgEBPwDXcKbXNvcj7qMtvFiPlis1nUfNtCOxjy+38q0ncxVPSgRZZnRBUUAcr//EACcRAQABAgQDCQAAAAAAAAAAAAECABEDEiAhECIxMEFSYXGBgsHR/9oACAEDAQE/ANcUHeI+tIzlyieRU4sLZ8WUb+LKfVFnYx7vx/KjzbxxWR7VOcZRgEAQsp36HfrwAOhbsv/Z"
---

Long relative paths in Node.js, like `../../some/very/deep/directory`, can get messy and hard to understand quickly, especially as your project grows. Module aliases are a beautiful way to solve this problem because they let you map long paths to unique aliases.

```js
// Without alias
require("../../some/very/deep/directory/helper");

// With alias
require("@deep/helper");
```

This post will show you how to set up module aliases in your Node.js project and make sure they work properly in the testing environment, with linting, and other things.

We'll assume this is how our project structure looks before we begin.

```
├── .eslintrc.js
├── index.js
├── jest.config.js
├── package-lock.json
├── package.json
└── src
   ├── components
   ├── config
   ├── some
   |  └── very
   |     └── deep
   |        └── directory
   └── utils
```

## Step 1: Setting Up Module Aliases in Node.js

### Installing Required Packages

First, let’s install the necessary package that allows us to define custom aliases:

```shell
$ npm i module-alias
```

### Configuring Aliases

Once installed, you can set up your aliases inside the `package.json` file. Add a `_moduleAliases` section like this:

```json
{
  ...
  "scripts": {
    ...
  },
  "dependencies": {
    ...
  },
  "_moduleAliases": {
    "@root": ".", // Application's root
    "@deep": "src/some/very/deep/directory",
    "@utils": "src/utils",
    "@components": "src/components",
    "@config": "src/config"
  }
}
```

Next, add this line `require('module-alias/register')` before any code in your `index.js` file

Now your `index.js` file would look like this

```js
require("module-alias/register");
...
const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.send("pong");
});

...
```

This allows you to import files in a cleaner way:

```js
require("../../some/very/deep/directory/helper"); // Before
require("@deep/helper"); // After
```

## Step 2: Integrating Module Aliases in Testing

Adjust your testing environment to make sure that your tests also function flawlessly with module aliases. You’ll need to map your aliases using the moduleNameMapper option in `jest.config.js`:

```js
module.exports = {
  ...
  moduleNameMapper: {
    '^@root/(.*)$': '<rootDir>/$1',
    '^@deep/(.*)$': '<rootDir>/src/some/very/deep/directory/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1'
  }
};
```

This ensures that Jest can resolve the paths when running your tests.

## Step 3: Module Aliases in Your Editor

Setting up module aliases is crucial for editor integration, in order to prevent path resolution issues and provide precise autocompletion.

In your project’s root directory, create or modify jsconfig.json (or tsconfig.json for TypeScript projects):

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@root/*": ["./*"],
      "@deep/*": ["src/some/very/deep/directory/*"],
      "@utils/*": ["src/utils/*"],
      "@components/*": ["src/components/*"],
      "@config/*": ["src/config/*"]
    }
  }
}
```

This tells VS Code to resolve your aliases, providing you with smooth autocompletion and error highlighting when using module aliases.

## Step 4: ESLint Rules

With module aliases enabled, how can you effectively prevent people from taking advantage of start using relative paths? The ESLint rules are useful in this situation.

Add the following rules to your `.eslintrc.js` file.

```js
module.exports = {
  ...
  rules: {
    ...
    // error on relative path import
    "no-restricted-imports": [ // ES module
      "error",
      {
        patterns: [".*"],
      },
    ],

    // error on relative path require
    "no-restricted-modules": [ // CommonJS module
      "error",
      {
        patterns: [".*"],
      },
    ],
  },
};
```

This implies that when people begin the import path with `.` or `./` or `../` your eslint will now throw an error, preventing them from using relative paths.

## Conclusion: Simplify Your Node.js Project

You can make your project structure clearer and easier to manage by using module aliases to greatly simplify your imports. You may build a smooth development experience by configuring them for your tests, linter, and editor.

Setting up module aliases now will save you trouble later on, whether you're working on a small app or a large-scale project. Give it a try and see how it enhances your Node.js workflow!
