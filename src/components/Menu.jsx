import React, { useState } from "react";
import { Menu as M, Input, Image, Icon } from "semantic-ui-react";
import { Link as L } from "gatsby";
import styled from "styled-components";
const Img = styled(Image)`
  margin: 0 10px;
`;
const Item = styled(M.Item)`
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
    <div className="Menu">
      <M size="huge" borderless pointing style={{ margin: "0 !important" }}>
        <Item>
          {/* <IconMenu name="bars" size="big" /> */}
          <Link to="/servicios">Servicios</Link>
        </Item>
        <Item>
          <Link to="/cursos">Cursos</Link>
        </Item>
        <Item>
          <Link to="/trabajo">Trabajo</Link>
        </Item>
        <M.Menu position="right">
          <Item>
            <Link to="/">
              <Img size="small" src="img/logotipo.png" />

              <Img size="mini" src="img/isologo.png" />
            </Link>
          </Item>
        </M.Menu>
      </M>
    </div>
  );
};

export default Menu;
