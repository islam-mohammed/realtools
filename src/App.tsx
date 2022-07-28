import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
// import Test from "./pages/Test";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
