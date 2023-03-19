import { Outlet, NavLink } from "react-router-dom";
import { Suspense } from "react";
import { Nav } from "components/Nav/Nav"

export default function SharedLayout () {
    return (<>
      
    <Nav />
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
        </>
    )
}