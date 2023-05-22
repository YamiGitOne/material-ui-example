import { NavLink  } from "react-router-dom";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SendIcon from '@mui/icons-material/Send';
import ContentCut from '@mui/icons-material/ContentCut';


const Navbar = () =>{
    return (
        <div>
      <MenuList>
      <NavLink to="/"><MenuItem>
          <ListItemIcon>
            <SendIcon  fontSize="small" />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </MenuItem></NavLink>

        <NavLink to="/about"><MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        </MenuItem></NavLink>

        <NavLink to="/blog"><MenuItem>
          <ListItemIcon>
            <SendIcon  fontSize="small" />
          </ListItemIcon>
          <ListItemText>Blog</ListItemText>
        </MenuItem></NavLink>
      </MenuList>
           
        </div>
        
    );
}

export default Navbar;