// import Counter from "./Pages/counter/counter";
// import Home from "./Pages/home/Home";
// import GithubPage from "./Pages/github-user-repos";
// import FormPage from "./Pages/form-practice";
import "./App.css";
import { BackgroundColor } from "./Utils/backgroundColorContext";
import ContextPage from "./Pages/context-practice";
import { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState(null);

  return (
    <BackgroundColor.Provider value={[backgroundColor, setBackgroundColor]}>
      <div className="no-margin">
        <ContextPage backgroundColor={backgroundColor}></ContextPage>
      </div>
    </BackgroundColor.Provider>
  );
}

export default App;
