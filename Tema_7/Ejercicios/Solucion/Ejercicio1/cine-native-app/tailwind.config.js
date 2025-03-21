/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "App.js"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'rasa-light': [ 'Rasa-VariableFont', 'sans-serif' ],
      }
    }
  },
  plugins: [],
}