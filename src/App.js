import { Route, Routes } from "react-router-dom";

import ClassListing from "./crudOperation/ClassListing";
import ClassEdit from "./crudOperation/ClassEdit";
import ClassDetails from "./crudOperation/ClassDetails";
import ClassCreate from "./crudOperation/ClassCreate";

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
