# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Writing Markup with JSX

1. JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.
2. If you don’t want to add an extra <div> to your markup, you can write <> and </> instead:
3. This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.

# Close all the tags

JSX requires tags to be explicitly closed: self-closing tags like `<img> must become <img />`, and wrapping tags like `<li>oranges must be written as <li>oranges</li>`.

# camelCase all most of the things!
