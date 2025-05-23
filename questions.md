## 1. What is the difference between Component and PureComponent? Give an example where it might break my app.

When extending a class component with PureComponent instead of Component, that class
component won&#39;t re render unless its props or state change. Apart from that, they are
pretty much the same.

```jsx
class MyClass extends PureComponent {
  ...
}
```

Couldn&#39;t think of any example when this might break! I looked it up, PureComponent does
shallow comparison to decide if state or props changed, if we&#39;re dealing with deeply nested
objects that can definitely be an issue.

---

## 2. Context + ShouldComponentUpdate might be dangerous. Why is that?

I didn&#39;t know this one, I looked it up, though, conceptually I had it guessed it right. So,
Context will re render components that use its state, and ShouldComponentUpdate won&#39;t
be considered because React tracks context consumers separately and directly re renders
them when the context value changes, regardless of props or state logic. So that&#39;s
dangerous because you might think a component won&#39;t re render because you specifically
set ShouldComponentUpdate, but in reality it will if it consumes state from context and that
changes.

---

## 3. Describe 3 ways to pass information from a component to its parent.

1. Using a callback defined in the parent and passed down to the child via props, when it is
   fired with whatever value defined at the child level, that value we can use in the parent
   component.

2. Using state management or context; for example when the setter is at the child level and
   the getter is at the parent level. The child will set the value and the parent gets it too as also
   any other components that have access to the shared state.

3. Couldn&#39;t think of any other, I looked it up, we can pass a ref, defined in the parent, to the
   child as prop, it&#39;s very similar to the callback approach, conceptually.

---

## 4. Give 2 ways to prevent components from re-rendering

1. We know that React re renders a component when its props or its state change, if I want
   to prevent a component from re rendering when it doesn&#39;t need to, I would wrap the actual
   component into a React.memo (assuming it&#39;s a functional component we&#39;re dealing with)
   now it will only re render when the props change, and I would also wrap all the props
   passed to it in either a useCallback or a useMemo depending if it&#39;s a callback or a computed
   value.

2. Couldn&#39;t think of another, I looked it up, shouldComponentUpdate when it comes to class
   components, where you defined when the component should re render.

---

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

Fragments let us group together elements that don&#39;t share a common parent, in React,
components must return a single element. Before fragments, we used to wrap elements in
divs, which they didn&#39;t really mean anything, they were just containers which made DOMs
longer with extra elements that weren&#39;t really needed.
I couldn&#39;t think on any cases when using fragments might break the app, I looked it up;
when, for example, the DOM is created, if it is expected a single element for doing some
animation, as an example, but multiple elements are found, the app might break. That is
because when DOM nodes are created, fragments don&#39;t exist (I knew this one) so if we
have:

Example:

```jsx
<>
  <div></div>
  <div></div>
</>
```

Will render:

```html
<div></div>
<div></div>
```

Can break when animations or DOM logic expect a single node.

---

## 6. Give 3 examples of the HOC (Higher-Order Component) pattern.

First let&#39;s say that a HOC is a component that returns another component, when that
happens, the HOC provides the wrapped component with additional logic. It is used to
centralised common logic in one place and share it with other components.

Example:

```jsx
const theme = {};

const withTheme = (WrappedComponent) => {
  return function WithThemeComponent(props) {
    return <WrappedComponent {...props} theme={theme} />;
  };
};
```

and use it:

```jsx
const Box = ({ theme }) => {};
const ThemedBox = withTheme(Box);
```

---

Now the Box component can access theme!

## 7. What&#39;s the difference in handling exceptions in promises, callbacks, and async…await?

**Promises:**

```js
fetch("api/v1/data")
  .then((res) => res.json())
  .catch((err) => {
    // handle error
  });
```

**Async/Await:**

```js
try {
  const res = await fetch("api/v1/data");
  const data = await res.json();
} catch (err) {
  // handle error
}
```

Personally, I prefer async/await for its readability!

**Callbacks:**

```js
const sayHello = (name, callback) => {
  if (!name) {
    callback("Name is missing");
  } else {
    callback(null, `Hello, ${name}!`);
  }
};

sayHello("", (err, message) => {
  if (err) console.log("Error:", err);
  else console.log(message);
});
```

In the last example when calling the above sayHello, &#39;Name is missing&#39; is logged!

And when it comes to handling errors, it&#39;s always best to alert the user that something went
wrong, showing up a small banner saying that something is not right is a good way for
example.

---

## 8. How many arguments does setState take and why is it async?

setState in class components takes 2 arguments, the new state that will update the old one,
and a callback that runs after the state has been updated, the callback is optional.
In functional components, useState provides one setter function, which we can call with
either a value (new state) or with a function if we want to update the state based on the
previous value.

example useState:

```js
const [value, setValue] = useState(0);
setValue(2);
setValue((prev) => prev + 1);
```

React batches updates for performance, making `setState` asynchronous.

---

## 9. List the steps needed to migrate a Class to Function Component.

1. Replace class syntax with function.
2. Replace `this.state` with `useState`.
3. Replace `this.setState({...})` with the setter from useState: `setValue(newValue)`.
4. Replace lifecycle methods:
   - `componentDidMount` → `useEffect(() => { ... }, [])`
   - `componentDidUpdate` → `useEffect(() => { ... }, [deps])`
   - `componentWillUnmount` → `useEffect(() => { return () => { ... }; }, [])`
5. Remove `render()` method — use `return`.

---

## 10. List a few ways styles can be used with components.

- **Inline styles**: `<h1 style={{ color: 'red' }}>Hello!</h1>`
- **CSS-in-JS**: e.g., `styled-components`
- **CSS file import**: `import './styles.css';`

---

## 11. How to render an HTML string coming from the server.

Assuming we have no control over the markup, we can do that via `dangerouslySetInnerHTML`:

Example:

```jsx
<div dangerouslySetInnerHTML={{ __html: htmlString }} />
```

But, as the name implies, it can be dangerous, if the string is not sanitized, the app can be
expose to Cross-Site Scripting attacks.
Sanitize manually is possible, but using a good third party library for sanitation it&#39;s probably
the best approach.
