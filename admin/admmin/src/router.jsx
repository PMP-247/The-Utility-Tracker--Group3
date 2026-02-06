import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AdminPanel from "./components/AdminPanel";
import AdminRoute from "./routes/AdminRoute";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminPanel />
      </AdminRoute>
    ),
  },
]);
