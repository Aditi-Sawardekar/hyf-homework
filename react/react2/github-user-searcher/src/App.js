import "./App.css";
import Header from "./Header";
import QuerySearchUser from "./QuerySearchUser";
import { DataProvider } from "./context/DataContext";

function App() {  
  return (
    <div className="App">
      <Header title="Github User Search" />
      <DataProvider>
        <QuerySearchUser />
      </DataProvider>
    </div>
  );
}

export default App;


