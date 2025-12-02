import "./App.css";
// Option 1: use logo from public folder via absolute URL
// const logoUrl = "/logo.svg";

// Option 2: import logo as a module (uses asset/resource rule)
import logo from "./logo.svg";

const App = () => (
  <div className="app-root">
    <h1>Hello, React!</h1>
    {/* Using imported logo (Webpack asset/resource) */}
    <img src={logo} alt="Logo" width="120" />
    {/* If you prefer public path instead, comment the line above and uncomment below */}
    {/* <img src={logoUrl} alt="Logo" width="120" /> */}
  </div>
);

export default App;
