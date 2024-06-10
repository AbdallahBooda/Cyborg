import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import "./App.css";
import { Home, Browse, Details, Profile, Streams } from "../Pages/Links";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="browse" element={<Browse />} />
      <Route path="details" element={<Details />} />
      <Route path="streams" element={<Streams />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
