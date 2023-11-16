# Conceptual Exercise

Answer the following questions below:

### What is the purpose of the React Router?

The react router is used to create an area to load different components inside of a single page, instead of 'routing' the old fashioned way where you refresh the page for each url, it allows us to change the url while loading the components and such inside of the same page. This is called Dynamic Routing, where the URL changes the components without reloading and improves user experience.

### What is a single page application?

An application that stays on a single page, but reloads the data and components alongside the urls. React is especially handy for stuff like this. A single page application loads all of the necesssary HTML, JS & CSS on the first load (or progressively as needed) which is a contrast to the original web application experience which reloads the entire page (and assets) on each url change, causing a break in the user experience.

### What are some differences between client side and server side routing?

Client side routing happens entirely inside of the browser and doesn't request new pages from the server, this gets rid of page reloads and speeds things up and improves user experience. Server side routing has each request processed by the server which then has to send back the new page and resources.

### What are two ways of handling redirects with React Router? When would you use each?

The `<Redirect>` component is provided by React Router and can be used inside of the Routing logic, it renders a redirect to a new location when it's rendered and is useful in scenarios like redirecting from an old route to a new one (if the path has changed) or redirecting after a certain action is completed (like login)

There is also programmatic navigation which uses the history API from react router to change the route. This is done using `history.push` and `history.replace`. It's useful when redirects are needed after async operations like fetching data, or redirecting based on complex logic that isn't just about rendering a component.

### What are two different ways to handle page-not-found user experiences using React Router?

1. Use `<Route>` with no path (or with `path="*"`), this matches any path that hasn't been already defined essentially and is perfect for a 404 page.

2. Use a catch-all route that redirects users to a specific page not found route. This could involve a combination of a redirect and a specific 404 page compnoent and can be useful when you want to perform additional logic before showing the 404 page, such as logging the incorrect path someone tried to access in a log somewhere.

### How do you grab URL parameters from within a component using React Router?

We use `useParams` to grab the URL parameters, it's part of React Router and lets us access the dynamic parts of the URL that wree matched by the `<Route>`. The parameters would be prefixed with a colon like `<Route path="/books/:bookname" component={BookDetails} />`, then inside of that `<BookDetails />` component we'd do `const { bookName } = useParams();` to pull in the book name and then could call it in the component using `{bookName}`

### What is context in React? When would you use it?

Context is a way to pass data through component tree without prop drilling at every level, it's useful for sharing data that could be 'global' for a tree of components where some components in the tree but not all would need access to them. You would use it for user settings, ui themes (light/dark mode), passing authentication data, etc.

### Describe some differences between class-based components and function components in React.

Class-Based Components in React

1. Syntax and Structure: Defined using ES6 classes with render methods and constructor methods for state initialization.
2. State and Lifecycle Management: Utilize `this.state` and `this.setState` for state management. Lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` are used for handling side effects.
3. Use of `this` Keyword: Heavily rely on the `this` keyword for accessing props, state, and class methods.
4. Reusability and Composition: Often encourage the use of Higher-Order Components (HOCs) and Render Props for sharing logic between components.
5. Handling Side Effects: Manage side effects within various lifecycle methods.

Function Components in React

1. Syntax and Structure: Defined as JavaScript functions, making them more concise and easier to write compared to class components. They can return JSX directly.
2. State and Lifecycle Management: Originally stateless, but now can use state and lifecycle features through hooks like `useState` and `useEffect`.
3. No `this` Keyword: Do not use the `this` keyword. Props are directly passed as arguments to the function.
4. Reusability and Composition: With the introduction of hooks, they facilitate better reusability and composition of logic through custom hooks.
5. Handling Side Effects: Use the `useEffect` hook among others to handle side effects, allowing for a more organized and modular approach to side effects.

### What are some of the problems that hooks were designed to solve?

Before hooks were introduced in React, managing state and other features like side effects in function components was not possible. This limitation meant that for any component needing state or lifecycle methods, developers had to use class components. Class components, however, can be complex, especially for beginners, due to their syntax and the use of the this keyword, which can be confusing in JavaScript. Additionally, class components made it hard to reuse stateful logic between different components. While solutions like Higher-Order Components (HOCs) and Render Props existed, they often led to more complicated and less readable code.

Hooks were introduced to solve these issues. They allow function components to use state and other React features, making function components as powerful as class components. This means simpler syntax and no more confusion with this. Also, hooks make it easier to reuse stateful logic between components without changing the component hierarchy. This leads to cleaner, more maintainable code. By using hooks, React also aims to make components smaller and more focused, which helps in understanding and managing the code better, especially for junior developers.
