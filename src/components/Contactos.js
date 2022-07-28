import React from "react";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/AutoAwesome";

const Contactos = () => {
  return (
    <Container maxWidth='xl'>
      <footer className='footer'>
        <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Link to='/'>
          <Typography
            variant='h6'
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GUGUS
          </Typography>
        </Link>
        <div>
          <p>
            <a href=' # '>Volver arriba</a>
          </p>
          <p>
            Album de Productos &copy; Estas buscando ropa para tus pequeños?
            visita nuestros sitios de venta online!
          </p>
          <p>
            Buscas ropa para los mas pequeños?{" "}
            <a href=' / '>Visita nuestra homepage</a> Ropa para cada miembro de
            la familia
            <a href=' ../getting-started/introduction/ '></a>.
          </p>
        </div>
      </footer>
    </Container>
  );
};
export default Contactos;
