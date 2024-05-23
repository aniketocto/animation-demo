/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'admin': "url('../src/assets/admin.jpg')",
        'management': "url('../src/assets/management.jpg')",
        'students': "url('../src/assets/students.jpg')",
        'teachers': "url('../src/assets/teachers.jpg')",
      },
  }
  },
  plugins: [],
}