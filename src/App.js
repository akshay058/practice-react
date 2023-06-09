import "./App.css";
import { createContext, useState } from "react";
import Comp1 from "./Comp1";
import Comp4 from "./Comp4";
import ApiFetch from "./ApiFetch";
import FormComp from "./FormComp";
import ThemeToggle from "./ThemeToggle";
import UseReducerHook from "./AdvancedHooks/UseReducerHook";
import UseMemoHook from "./AdvancedHooks/UseMemoHook";
import Todo from "./Todo";
import Counter from "./Counter";
export const messagecontext = createContext(null);

function App() {
  const [name, setName] = useState(null);
  const [mount, setMount] = useState(true);
  return (
    <div className="App">
      {/* <messagecontext.Provider value={"This is context"}>
        <h1>
          {" "}
          <Comp1 setName={setName} />
        </h1>
        <h3>{name}</h3>
      </messagecontext.Provider> */}
      {/* <button onClick={() => setMount(!mount)}>Mount/UnMount </button>
      {mount && <Comp4 />}

      <h2>Component in Mount state</h2> */}
      {/* ............API Fetch...... */}
      {/* <ApiFetch /> */}
      {/* ............API Fetch...... */}
      {/* <FormComp /> */}
      {/* <ThemeToggle /> */}
      {/* <UseReducerHook /> */}
      {/* <UseMemoHook /> */}
      <Todo />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
