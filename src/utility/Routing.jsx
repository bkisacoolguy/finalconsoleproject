import {createBrowserRouter, Navigate} from "react-router-dom"
import App from "../App";
import Dashboard from "../Component/Dashboard/Dashboard";
import Projectmanagement from "../Component/Dashboard/Projectmanagement";
import Usage from "../Component/Usage";
import Docs from "../Component/Document";
import Blank from "../Component/Blank";
import Billing from "../Component/Billing";
import Projecttour from "../Component/Projecttour";
import Cloud from "../Component/Cloud";
import Usermanagement from "../Component/Usermanagement";
import Signup from "../Component/signup";
import Login from "../Component/Login";
import Publicroute from "./Publicroute";
import Privateroute from "./Privateroute";
import Errorpage from "../Component/Errorpage";

let router= createBrowserRouter(
  [
    {
    path: "/",
    element: <App/>,
    errorElement: <Errorpage/>,
    children: [
       {
        index: true,
        element: <Navigate to="/dashboard" replace />
       },
              {
        path: "dashboard",
        element:  <Privateroute><Dashboard/></Privateroute>
       },
      {
        path:"/project",
        element: <Privateroute> <Projectmanagement/> </Privateroute>
       },      {
        path:"/cloud",
        element: <Privateroute> <Cloud/> </Privateroute>
       },,
             {
        path:"/bill",
        element: <Privateroute> <Billing/> </Privateroute>
       },             {
        path:"/tour",
        element: <Privateroute> <Projecttour/> </Privateroute>
       },{
        path:"/user",
        element: <Privateroute> <Usermanagement/> </Privateroute>
       },
      {
        path:"/usage",
        element: <Privateroute> <Usage/> </Privateroute>
       },
      {
        path:"/analytic",
        element:<Privateroute> <Blank/> </Privateroute>
      } 
    ]
    },{
      path:"/docs",
      element:<Privateroute> <Docs/></Privateroute>
    },{
      path:"/signup",
      element: (<Publicroute><Signup/></Publicroute>  )
    },
    {
      path:"/login",
      element: <Publicroute><Login/></Publicroute> 
    }
   ]
);

export default router;