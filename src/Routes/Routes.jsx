

import {createBrowserRouter} from "react-router-dom";

import Root from "../Layout/Root/Root";
import EorrorPages from "../Pages/EorrorPages/EorrorPages";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<EorrorPages></EorrorPages>,
      children:[
        {
           path:'/',
           element:<Home></Home>
        },
      ]
    },
  ]);

  export default router;