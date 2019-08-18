import React, { useState, useEffect } from "react";
import ContainerPage from "../../components/ContainerPage";
import HeaderPage from "../../components/HeaderPage";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { Colors } from "../../styles/vars";
import {
  Grid,
  Card as C,
  Button,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  IconButton,
  AppBar,
  Tabs,
  Tab,
  Box,
  Divider
} from "@material-ui/core";
import BackgroundImage from "gatsby-background-image";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}
const searchLiked = (likedList, id, idName = "ci") => {
  let match = false;
  try {
    for (let i = 0; i < likedList.length; i++) {
      if (likedList[i][idName] == id) {
        match = i;
        break;
      }
    }
  } catch (error) {
    console.error("-----");
    console.error("Error en buscar el match:");
    console.error(likedList);
    console.error(error);
    console.error("-----");
  }
  return match;
};
const trabajo = ({ data }) => {
  const [personList, setPersonList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  const [likedPersonList, setLikedPersonList] = useState(
    localStorage.LikedPerson ? JSON.parse(localStorage.LikedPerson) : []
  );
  const [likedBusinessList, setLikedBusinessList] = useState(
    localStorage.LikedBusiness ? JSON.parse(localStorage.LikedBusiness) : []
  );
  const [tab, setTab] = React.useState(0);
  const [favorite, setFavorite] = useState(false);
  function handleChange(event, newValue) {
    setTab(newValue);
    setFavorite(false);
  }
  useEffect(() => {
    let arrayPerson = [];
    let arrayBusiness = [];
    data.allFile.edges.forEach(({ node }, index) => {
      if (node.sourceInstanceName == "personas") {
        arrayPerson.push({
          name: node.childMarkdownRemark.frontmatter.name,
          img: node.childMarkdownRemark.frontmatter.img,
          description: node.childMarkdownRemark.frontmatter.description,
          softSkills: node.childMarkdownRemark.frontmatter.softSkills,
          ci: node.childMarkdownRemark.frontmatter.ci
        });
      }
    });
    data.allFile.edges.forEach(({ node }, index) => {
      if (node.sourceInstanceName == "empresas") {
        arrayBusiness.push({
          name: node.childMarkdownRemark.frontmatter.name,
          img: node.childMarkdownRemark.frontmatter.img,
          description: node.childMarkdownRemark.frontmatter.description,
          softSkills: node.childMarkdownRemark.frontmatter.softSkills,
          nit: node.childMarkdownRemark.frontmatter.nit
        });
      }
    });
    setPersonList(arrayPerson);
    setBusinessList(arrayBusiness);
  }, []);
  useEffect(() => {
    let subscriptions = true;
    if (subscriptions) {
      localStorage.setItem("LikedPerson", JSON.stringify(likedPersonList));
      localStorage.setItem("LikedBusiness", JSON.stringify(likedBusinessList));
    }
    return () => (subscriptions = false);
  });
  return (
    <ContainerPage className="Trabajo">
      <HeaderPage
        img="/img/trabajoCover.svg"
        text1="Encontramos"
        text2="Bolsa de trabajo"
        alt=""
      />
      <AppBar position="static">
        <Box display="flex">
          <Tabs
            variant="fullWidth"
            value={tab}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Personas" {...a11yProps(0)} />
            <Tab label="Empresas" {...a11yProps(1)} />
          </Tabs>
          <Button
            style={{
              color: "white",
              marginLeft: "auto",
              marginRight: "10px"
            }}
            onClick={() => setFavorite(!favorite)}
          >
            <FavoriteIcon style={{ color: favorite ? Colors.red : "white" }} />
          </Button>
        </Box>
      </AppBar>
      <TabPanel value={tab} index={0}>
        {favorite && (
          <>
            <Typography
              variant="h5"
              style={{ textAlign: "center", color: "gray" }}
            >
              Tus favoritos
            </Typography>
            <Divider />
          </>
        )}
        <CardsContainer container spacing={3}>
          {personList.length !== 0 &&
            personList.map((element, index) => {
              if (
                !(element
                  ? favorite &&
                    searchLiked(likedPersonList, element.ci, "ci") === false
                  : true)
              ) {
                return (
                  <PersonaCard
                    key={index}
                    name={element.name}
                    img={element.img}
                    description={element.description}
                    softSkills={element.softSkills}
                    ci={element.ci}
                    setLikedList={setLikedPersonList}
                    likedList={likedPersonList}
                    favorite={
                      searchLiked(likedPersonList, element.ci) !== false
                        ? false
                        : true
                    }
                  />
                );
              }
            })}
        </CardsContainer>
        {personList.length == 0 ? (
          <>
            <Divider />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography>
                No hay personas disponibles actualmente 😢
              </Typography>
            </Box>
          </>
        ) : (
          favorite &&
          likedPersonList.length == 0 && (
            <>
              <Divider />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography>No tienes Favoritos</Typography>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    setFavorite(false);
                    setTab(0);
                  }}
                >
                  Ver personas
                </Button>
              </Box>
            </>
          )
        )}
      </TabPanel>
      <TabPanel value={tab} index={1}>
        {favorite && (
          <>
            <Typography
              variant="h5"
              style={{ textAlign: "center", color: "gray" }}
            >
              Tus favoritos
            </Typography>
            <Divider />
          </>
        )}
        <CardsContainer container spacing={3}>
          {businessList.map((element, index) => {
            if (
              !(element
                ? favorite &&
                  searchLiked(likedBusinessList, element.nit, "nit") === false
                : true)
            ) {
              return (
                <EmpresaCard
                  key={index}
                  name={element.name}
                  img={element.img}
                  description={element.description}
                  softSkills={element.softSkills}
                  nit={element.nit}
                  setLikedList={setLikedBusinessList}
                  likedList={likedBusinessList}
                  favorite={
                    searchLiked(likedPersonList, element.nit) !== false
                      ? false
                      : true
                  }
                />
              );
            }
          })}
        </CardsContainer>
        {businessList.length == 0 ? (
          <>
            <Divider />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography>
                No hay Empresas disponibles actualmente 😢
              </Typography>
            </Box>
          </>
        ) : (
          favorite &&
          likedBusinessList.length == 0 && (
            <>
              <Divider />
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography>No tienes Favoritos</Typography>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    setFavorite(false);
                    setTab(1);
                  }}
                >
                  Ver Empresas
                </Button>
              </Box>
            </>
          )
        )}
      </TabPanel>
    </ContainerPage>
  );
};

export default trabajo;
const PersonaCard = ({
  name,
  img,
  description,
  softSkills,
  ci,
  setLikedList,
  likedList,
  favorite
}) => {
  const searchLikedPerson = () => searchLiked(likedList, ci, "ci");
  const [like, setLike] = useState(
    searchLikedPerson() !== false ? true : false
  );
  return (
    <CardContainer item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea>
          {img && <Background fluid={img.childImageSharp.fluid} />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>{description}</Typography>
            <Typography>{softSkills}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton
            style={{ color: like ? Colors.red : "gray" }}
            aria-label="Agregar a favoritos"
            onClick={() => {
              setLike(!like);
              if (searchLikedPerson() === false) {
                setLikedList([
                  ...likedList,
                  { name, img, description, softSkills, ci }
                ]);
              } else {
                let likedRemove = searchLikedPerson();
                let newLikedList = [];
                likedList.forEach((e, i) => {
                  if (i !== likedRemove) newLikedList.push(e);
                });
                setLikedList(newLikedList);
              }
            }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Compartir">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </CardContainer>
  );
};
const EmpresaCard = ({
  name,
  img,
  description,
  softSkills,
  nit,
  setLikedList,
  likedList,
  favorite
}) => {
  const searchLikedBusiness = () => searchLiked(likedList, nit, "nit");
  const [like, setLike] = useState(
    searchLikedBusiness() !== false ? true : false
  );
  return (
    <CardContainer item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea>
          {img && <Background fluid={img.childImageSharp.fluid} />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography>{description}</Typography>
            <Typography>{softSkills}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton
            style={{ color: like ? Colors.red : "gray" }}
            aria-label="Agregar a favoritos"
            onClick={() => {
              setLike(!like);
              if (searchLikedBusiness() === false) {
                setLikedList([
                  ...likedList,
                  { name, img, description, softSkills, nit }
                ]);
              } else {
                let likedRemove = searchLikedBusiness();
                let newLikedList = [];
                likedList.forEach((e, i) => {
                  if (i !== likedRemove) newLikedList.push(e);
                });
                setLikedList(newLikedList);
              }
            }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Compartir">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </CardContainer>
  );
};
const TabPanel = ({ children, value, index, ...other }) => (
  <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
  >
    <Box p={3}>{children}</Box>
  </Typography>
);

const CardsContainer = styled(Grid)`
  margin-top: 15px !important;
`;
const CardContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled(C)`
  min-width: 290px;
  max-width: 350px;
  width: 300px;
  // background: #aaafff !important;
`;
const Background = styled(BackgroundImage)`
  // height: 300px !important;
  padding-top: 56.25%; //16:9
`;

export const query = graphql`
  query Trabajo {
    allFile(
      filter: {
        sourceInstanceName: { in: ["personas", "empresas"] }
        extension: { eq: "md" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              name
              img {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              description
              softSkills
              ci
              nit
            }
          }
          sourceInstanceName
        }
      }
    }
  }
`;
