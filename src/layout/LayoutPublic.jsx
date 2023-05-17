import { Button } from "@mui/material";
import { Outlet, Link  } from "react-router-dom";

const LayoutPublic = () => {
    return (
       <>
       <nav>Navbar</nav>
        <Outlet />
        <footer>
            <Button color="success" variant="contained" href="">Hola soy un botón MUI</Button>

            <Link 
                component="button"
                variant="body2" 
                to="/"
                >
                    Inicio
            </Link>
            </footer>
       </>
  
    );
}
export default LayoutPublic;