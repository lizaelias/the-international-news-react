

import {createBrowserRouter} from "react-router-dom";

import Root from "../Layout/Root/Root";
import EorrorPages from "../Pages/EorrorPages/EorrorPages";
import Home from "../Pages/Home/Home";
import Login from "../AuthenticationPage/Login/Login";
import Registration from "../AuthenticationPage/Registration/Registration";
import News from "../Pages/News/News";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<EorrorPages></EorrorPages>,
      children:[
        {
           path:'/',
           element:<Home></Home>,
           loader:()=>fetch('/news.json')

        },
        {
          path:'/news/:id',
          element:<PrivateRoutes><News></News></PrivateRoutes>,
          loader:()=>fetch('/news.json')
        },
        {
          path:'/login',
          element:<Login></Login>

        },
        {
          path:'/register',
          element:<Registration></Registration>
        }
      ]
    },
  ]);

  export default router;