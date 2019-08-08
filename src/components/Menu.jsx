import React, { useState } from "react";
import { Menu as M, Input, Image, Icon } from "semantic-ui-react";
import { Link as L } from "gatsby";
import styled from "styled-components";
Image = styled(Image)`
  margin: 0 10px;
`;
M.Item = styled(M.Item)`
  padding: 0 !important;
`;
const Link = styled(L)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  color: black;
`;
const IconMenu = styled(Icon)`
  margin: 0 !important;
  cursor: pointer;
`;
console.log(<Link />);
const Menu = () => {
  const [activeItem, setActiveItem] = useState("servicios");

  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <M>
      <M.Item>
        {/* <IconMenu name="bars" size="big" /> */}
        <Link to="/servicios">Servicios</Link>
      </M.Item>
      <M.Item>
        <Link to="/cursos">Cursos</Link>
      </M.Item>
      <M.Item>
        <Link to="/trabajo">Trabajo</Link>
      </M.Item>
      <M.Menu position="right">
        <M.Item>
          <Link to="/">
            <Image size="small" src="img/logotipo.png" />

            <Image size="mini" src="img/isologo.png" />
          </Link>
        </M.Item>
      </M.Menu>
    </M>
  );
};

export default Menu;
