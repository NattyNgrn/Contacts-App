A contact app that stores name, email, phone number, notes, and a picture in a PSQL database.
Individual contact can be edited and deleted.
New contacts can be made. 

Connected to cloudinary.

Uses react, javascript, tailwinds, PSQL, express, node, cors, and jest.

you will find comments through oout the code explaing which each part does.


Installation for Client:
npm install tailwinds -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Make tailwinds.config.js file and postcss.config.js file


In tailwinds.config.js make sure it has this path:
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
 

Add these three directives to your index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;


Installation for Server:
npm init
npm install express
npm install cors
npm install nodemon
npm install bodyParser
npm install jest
npm install pg
npm install cloudinary



