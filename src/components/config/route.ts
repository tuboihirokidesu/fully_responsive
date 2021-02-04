import Home from "../pages/Home";
import Products from "../pages/Products";
import Services from "../pages/Services";
import SignUp from "../pages/SignUp";

export type IRoute = {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
};

const routes: IRoute[] = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
    exact: true,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
    exact: true,
  },
  {
    path: "/service",
    name: "Services Page",
    component: Services,
    exact: true,
  },
  {
    path: "/sign-up",
    name: "SignUp Page",
    component: SignUp,
    exact: true,
  },
];

export default routes;
