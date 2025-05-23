# React TypeScript Autocomplete Demo

A simple, small application showcasing a reusable Autocomplete Select component built with React and TypeScript.

---

## 🚀 Getting Started

1. **Open your terminal (or CLI of choice)**
   and navigate to the directory where you’d like to clone the app.

2. **Clone the repository**

   ```bash
   git clone https://github.com/giuseppe-messi/rick-and-morty-explorer.git
   ```

   then

   ```bash
   cd rick-and-morty-explorer
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The local server URL will be printed in your terminal.

## 🧪 Testing

5. **how to run the tests**

   at the root level of the repository run:

   ```bash
   npm run test
   ```

   Test results will be displayed in your terminal


---
---

## A few words from me on what I did and why:

This is a small and simple app that features two reusable AutoSelect inputs. The data fed to the inputs comes from the free API Rick and Morty, hence the site name "Rick and Morty Explorer."

I wanted to create a reusable and generic AutoSelect component that could work with any data and wouldn't be bound to a specific interface.

The site is structured with a few pages: a Home page, a Character page (where you’ll find the input for selecting characters from Rick and Morty), an Episodes page (where you’ll find the other input, this time fed with episode data). There are also additional pages like ErrorPage and NotFound to gracefully handle user-facing errors.

I tried to keep the app as optimized as possible. In App.tsx, pages are lazily loaded when needed using React.lazy. The entire app is wrapped with an ErrorBoundary component, and there's a fallback router for when users navigate to nonexistent routes.

I created a dedicated folder for the design system of the app. In that folder, you’ll find reusable components to promote DRY principles. This includes the AutoSelect component and others like a generic Button.

I aimed to keep things as clean as possible. You'll find hooks and helper functions that separate logic and keep everything organized. Among these hooks, there are utilities for debouncing values and throttling callback requests, which help reduce load on the inputs and make the experience more optimal.

In terms of accessibility, I followed best practices by using semantic HTML, applying ARIA attributes, and supporting keyboard navigation for the input.

The api folder contains the fetch functions. I’ve also included unit tests (using React Testing Library) for various files, including the fetch functions, the Autocomplete component, and the useAutoComplete hook, which powers the Autocomplete component logic.

Within the design system folder, there’s a theme folder, which I thought would be a good way to centralize CSS rules across the app.

Thanks :)
