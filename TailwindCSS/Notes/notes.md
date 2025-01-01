# TailwindCSS

1. Things to know in a frontend framework:

   - _Flex_: The way of aliging the items in a various places of the webpage.
   - _Grid_: Same as flex for aligning the items.
   - _Responsiveness_: Adaptation of the website to different screen sizes.
   - _Background Color, Text Color, Hover_: The colors of the background, textual data shown on the screen and visual effects & animations added when any action performed.

## Installation:

1. We can create a new React Project and then configure Tailwind settings into it following these steps, the command below installs `tailwindcss` as a dev-depency along with `postcss` and `autoprefixer`.

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. Now we run the second command, this command will create new `tailwind.config.js` & `postcss.config.js` in our project folder.

```bash
npx tailwindcss init -p
```

3. The `tailwind.config.js` contains all the configurations regarding `TailwindCSS` in our project. This file something looks like the one below, the content array tracks the folders where the tailwind code would be present and adds the CSS for them accordingly.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. Finally add these lines of code in either `index.css` or `App.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
