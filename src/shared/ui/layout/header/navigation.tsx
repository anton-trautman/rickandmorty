import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { navLinks } from "shared/ui/layout/header/constants";

function Navigation() {
  return (
    <>
      {navLinks.map((link) => (
        <Button key={link.to} to={link.to} component={Link} role={undefined}>
          {link.title}
        </Button>
      ))}
    </>
  );
}

export default Navigation;
