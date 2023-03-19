import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";


export default function SharedLayout () {

    return (<>
        <nav>
          <NavLink to="/" end>Header</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/notices">Find pet</NavLink>
          <NavLink to="/friends">Our Friends</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav> 

        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
      </>
    )
}