import Sport from "../sport/Sport"
import Boxed from "../boxed/Boxed";
import { SPORT_ROUTE, BOXED_ROUTE } from "./Consts";


export const publicRoutes = [
    {
    path: SPORT_ROUTE,
    element: <Sport/>
    },
    {
    path:BOXED_ROUTE,
    element:<Boxed/>
    },
] 