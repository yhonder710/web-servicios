import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/organismos/Layout";
import { Home } from "../pages/Home";

export function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
