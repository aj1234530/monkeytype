# Approach taken - (one-liner: we are matching every char entered in input to every char in para(which are rendered as individual span elements ,) using references of html el stored in useRef
1. using useState hook with inital paragraph value - we are mapping over it after the splitting and generating span elments(with id as it index in array) and rendering in ui
2. using useRef to store the refereces to of each span - we are later updating the color using the current prop of useRef
3. again useRef to store the input value in input
4. **for showing  and positioning cursor** - cursor shown by empty div(some width,height and color) focusing the getBoundClientRect() (https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) and also adding width of text content
5. **for changing color** - updating css by using useRef ref
6. **for wpm** - using state and conditional renderings
7. role of setTimeout(0) - to run the onChange of input before the code inside timeout so that there is key on first key down- finishing onChange that is immediate after keydown(https://imdeveshshukla.medium.com/settimeout-with-time-0-explained-967f3133e305)




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
