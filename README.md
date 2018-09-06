# Try Keytty
An interactive website that lets you try [Keytty](https://keytty.com) without installation

## WIP

## Roadmap
- [ ] set up the project with Reason React
- [ ] key command input box UI
- [ ] mimic macOS screen
- [ ] multiple screens with different purposes (click, drag and more)

## Goals
- make a cool website using Reason
- another (hopefully) cool open source project
- let people discover what it's like to use [Keytty](https://keytty.com) on macOS
- hopefully let the world know about my baby, [Keytty](https://keytty.com)

## Run Project

```sh
npm install
npm start
# in another tab
npm run webpack
```

After you see the webpack compilation succeed (the `npm run webpack` step), open up `src/index.html` (**no server needed!**). Then modify whichever `.re` file in `src` and refresh the page to see the changes.

**For more elaborate ReasonReact examples**, please see https://github.com/reasonml-community/reason-react-example

## Build for Production

```sh
npm run build
npm run webpack:production
```

This will replace the development artifact `build/Index.js` for an optimized version.

**To enable dead code elimination**, change `bsconfig.json`'s `package-specs` `module` from `"commonjs"` to `"es6"`. Then re-run the above 2 commands. This will allow Webpack to remove unused code.
