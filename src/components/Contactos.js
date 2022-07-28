import React from "react";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { CenterFocusStrong } from "@mui/icons-material";
import AdbIcon from "@mui/icons-material/AutoAwesome";


const Contactos = () => {
  return (
    <footer className='footer'>
      <Container maxWidth='xl'>
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
        <div className=' container '>
          <p className=' float-end mb-1 '>
            <a href=' # '>Volver arriba</a>
          </p>
          <p className=' mb-1 '>
            Album de Productos &copy; Estas buscando ropa para tus pequeños?
            visita nuestros sitios de venta online!
          </p>
          <p className=' mb-0 '>
            Buscas ropa para los mas pequeños?{" "}
            <a href=' / '>Visita nuestra homepage</a> Ropa para cada miembro de
            la familia
            <a href=' ../getting-started/introduction/ '></a>.
          </p>
        </div>
      </Container>
    </footer>
  );
};
export default Contactos;
