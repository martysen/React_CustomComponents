// Custom component name must use Pascal Casing
function MyCustomComponent() {
  return (
    // Your return must have a single parent node as per JSX requirements
    <div>
      <h1>This is a custome component.</h1>
      <p>Some para text for my costome component</p>
    </div>
  );
}

// useful reference link: https://reactjs.org/docs/dom-elements.html
// helps clarify the React DOM elements if the HTML element name conflicts with a reserved keyword in JS
// example: class becomes className; <label for = "" ... becomes <label htmlFor = "" etc
function LoginForm() {
  return (
    <div>
      <form id="my-form">
        <h1>Add User</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>
        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

// // React 17 code to custome component
// ReactDOM.render(
//   <div>
//     <MyCustomComponent />
//   </div>,
//   document.querySelector("#root")
// );

// New code for React 18 onwards

// get container element from html
const container = document.getElementById("root");

// Create a root element
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <div>
    <LoginForm />
    <MyCustomComponent />
  </div>
);
