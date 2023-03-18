import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";

export default function SharedLayout () {
    return (<>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/news">About</NavLink>
          <NavLink to="/notices">Products</NavLink>
          <NavLink to="/friends">Products</NavLink>
        </nav> 
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
      </>
    )
}