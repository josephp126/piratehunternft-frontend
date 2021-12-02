import { Route, Routes } from "react-router-dom";
import Index from "./views/Home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
