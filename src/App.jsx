import { BrowserRouter,Routes,Route } from "react-router-dom";
import Receipt from "./pages/Receipt";
import Pending from "./pages/Pending";
export default function MyPage() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Receipt/>}/>
    <Route path="/pending" element={<Pending/>}/>
       </Routes>
  </BrowserRouter>
  );
}