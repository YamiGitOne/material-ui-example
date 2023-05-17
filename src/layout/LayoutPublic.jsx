
import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
    return (
       <>
       <nav>Navbar</nav>
        <Outlet />
        <footer>Footer</footer>
       </>
  
    );
}
export default LayoutPublic;