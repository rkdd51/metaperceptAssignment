import { Route, Routes } from "react-router-dom";

import ClassListing from "./ClassListing";
import ClassEdit from "./ClassEdit";
import ClassDetails from "./ClassDetails";
import ClassCreate from "./ClassCreate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClassListing />} />
        <Route path="/employee/create" element={<ClassCreate />} />
        <Route path="/employee/edit/:empid" element={<ClassEdit />} />
        <Route path="/employee/detail/:empid" element={<ClassDetails />} />
      </Routes>
    </div>
  );
}

export default App;
