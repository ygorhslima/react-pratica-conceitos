import { BrowserRouter, Routes, Route } from "react-router";

import Ex01 from "./Ex01";
import Ex02 from "./Ex02";
import Ex03 from "./Ex03";
import Ex04 from "./Ex04";
import Ex05 from "./Ex05";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ex01" element={<Ex01 />}></Route>
        <Route path="/ex02" element={<Ex02 />}></Route>
        <Route path="/ex03" element={<Ex03 />}></Route>
        <Route path="/ex04" element={<Ex04 />}></Route>
        <Route path="/ex05" element={<Ex05 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
