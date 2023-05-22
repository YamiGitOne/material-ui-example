import { Button } from "@mui/material";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPublic = () => {
    const navigation = useNavigation();
    return (
       <>
       <Navbar  />
       <main className="container">
       {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Loading...</div>
                )}
            <Outlet />
       </main>
        
        <footer>
            <Button color="success" variant="contained" href="/">Inicio</Button>
            {/* <Button color="success" variant="contained" href="/blog">Blog</Button> */}
            </footer>
       </>
  
    );
}
export default LayoutPublic;