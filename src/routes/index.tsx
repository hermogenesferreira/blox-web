import { BrowserRouter, Routes, Route} from "react-router-dom";

import { DashboardPage } from "../pages";
import { HomePage } from "../pages/HomePage";

export function AppRoutes(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}