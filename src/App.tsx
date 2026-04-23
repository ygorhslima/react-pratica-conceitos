import { BrowserRouter, Routes, Route } from "react-router";

import Ex01 from "./Ex01";
import Ex02 from "./Ex02";
import Ex03 from "./Ex03";
import Ex04 from "./Ex04";
import Ex05 from "./Ex05";
import Ex06 from "./Ex06";
import Ex07 from "./Ex07";
import Ex08 from "./Ex08";
import Ex09 from "./Ex09";
import Ex010 from "./Ex010";
import Ex011 from "./Ex011";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ex01" element={<Ex01 />}></Route>
        <Route path="/ex02" element={<Ex02 />}></Route>
        <Route path="/ex03" element={<Ex03 />}></Route>
        <Route path="/ex04" element={<Ex04 />}></Route>
        <Route path="/ex05" element={<Ex05 />}></Route>
        <Route path="/ex06" element={<Ex06 />}></Route>
        <Route path="/ex07" element={<Ex07 />}></Route>
        <Route path="/ex08" element={<Ex08 />}></Route>
        <Route path="/ex09" element={<Ex09 />}></Route>
        <Route path="/ex010" element={<Ex010 />}></Route>
        <Route path="/ex011" element={<Ex011 />}></Route>        
      </Routes>
    </BrowserRouter>
  );
}
