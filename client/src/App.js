import { Route, Routes } from "react-router-dom";

import CoursePage from "./pages/CoursePage";
import StudentPage from "./pages/StudentPage";
import StudentProvider from "./mycontext/context";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <StudentProvider>
        <div className="col-12 float-start">
          <Nav />
        </div>
        <div className="col-12 float-start">
          <div className="container">
            <Routes>
              <Route index element={<StudentPage />} />
              <Route path="/courses" element={<CoursePage />} />
            </Routes>
          </div>
        </div>
      </StudentProvider>
    </div>
  );
}

export default App;
