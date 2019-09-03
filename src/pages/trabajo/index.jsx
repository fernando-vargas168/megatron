import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import ContainerPage from "../../components/ContainerPage";
import HeaderPage from "../../components/HeaderPage";
import styled from "styled-components";
import { Favorite as FI } from "@material-ui/icons/";
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
  Divider,
  Dialog
} from "@material-ui/core";
import BackgroundImage from "gatsby-background-image";
import SEO from "../../components/Head/SEO";
import ButtonFixed from "../../components/ButtonFixed";
import Form from "../../components/Form";
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
    typeof localStorage !== "undefined" &&
      typeof localStorage !== "undefined" &&
      localStorage.LikedPerson
      ? JSON.parse(localStorage.LikedPerson)
      : []
  );
  const [likedBusinessList, setLikedBusinessList] = useState(
    typeof localStorage !== "undefined" &&
      typeof localStorage !== "undefined" &&
      localStorage.LikedBusiness
      ? JSON.parse(localStorage.LikedBusiness)
      : []
  );
  const [tab, setTab] = React.useState(0);
  const [favorite, setFavorite] = useState(false);
  const [openConvocatoria, setOpenConvocatoria] = useState(false);
  const [openEmpleo, setOpenEmpleo] = useState(false);
  function handleChange(event, newValue) {
    setFavorite(false);
    setTab(newValue);
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
          ci: node.childMarkdownRemark.frontmatter.ci,
          slug: node.childMarkdownRemark.fields.slug
        });
      }
    });
    data.allFile.edges.forEach(({ node }, index) => {
      if (node.sourceInstanceName == "empresas") {
        arrayBusiness.push({
          name: node.childMarkdownRemark.frontmatter.name,
          img: node.childMarkdownRemark.frontmatter.img,
          description: node.childMarkdownRemark.frontmatter.description,
          nit: node.childMarkdownRemark.frontmatter.nit,
          slug: node.childMarkdownRemark.fields.slug,
          puestos: node.childMarkdownRemark.frontmatter.puestos
        });
      }
    });
    setPersonList(arrayPerson);
    setBusinessList(arrayBusiness);
  }, []);
  useEffect(() => {
    let subscriptions = true;
    if (subscriptions) {
      typeof localStorage !== "undefined" &&
        localStorage.setItem("LikedPerson", JSON.stringify(likedPersonList));
      typeof localStorage !== "undefined" &&
        localStorage.setItem(
          "LikedBusiness",
          JSON.stringify(likedBusinessList)
        );
    }
    return () => (subscriptions = false);
  });
  return (
    <div>
      <SEO
        title="MEGATRON | Encuentra trabajo en Bolivia | Contrata personas para tu empresa"
        description="Bolsa de trabajo en Bolivia para ingenieros y técnicos, somos una empresa de ingenieros y podemos ayudarte a conectar con personas"
        path="/trabajo"
      />
      <ContainerPage className="Trabajo">
        <HeaderPage
          icon="/img/trabajoCover.svg"
          text1="Encontramos"
          text2="Bolsa de trabajo"
          alt=""
          bottom="true"
        />
        <AppBar position="static">
          <Box display="flex">
            <Tabs
              style={{ width: "100%" }}
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
              <FavoriteIcon
                style={{ color: favorite ? Colors.red : "white" }}
              />
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
                Tus intereses
              </Typography>
              <Divider />
            </>
          )}
          <CardsContainer container spacing={3}>
            {personList.length !== 0 &&
              personList.map((element, index) => {
                if (
                  // !(element
                  //   ? favorite &&
                  //     searchLiked(likedPersonList, element.ci, "ci") === false
                  //   : true)
                  !(
                    favorite &&
                    searchLiked(likedPersonList, element.ci, "ci") === false
                  )
                ) {
                  return (
                    <PersonCard
                      key={index}
                      name={element.name}
                      img={element.img}
                      description={element.description}
                      softSkills={element.softSkills}
                      ci={element.ci}
                      slug={element.slug}
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
                  <Typography>Lista de intereses vacía</Typography>
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
                Tus intereses
              </Typography>
              <Divider />
            </>
          )}
          <CardsContainer container spacing={3}>
            {businessList.map((element, index) => {
              return (
                <BusinessPuestos
                  puestos={element.puestos}
                  nit={element.nit}
                  key={index}
                  name={element.name}
                  img={element.img}
                  slug={element.slug}
                  setLikedList={setLikedBusinessList}
                  likedList={likedBusinessList}
                  favorite={favorite}
                  setFavorite={setFavorite}
                />
              );
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
                  <Typography>Lista de intereses Vacía</Typography>
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
      <ButtonFixed
        buttons={[
          {
            text: "Quiero contratar",
            onClick: () => setOpenConvocatoria(true)
          },
          { text: "Busco Empleo", onClick: () => setOpenEmpleo(true) }
        ]}
      ></ButtonFixed>
      <Dialog
        open={openConvocatoria}
        onClose={() => setOpenConvocatoria(false)}
      >
        <Form
          formName="convocatoria"
          title="Publica una convocatoria de empleo"
          description="nos comunicaremos con su empresa para publicar su convocatoria"
        ></Form>
      </Dialog>
      <Dialog open={openEmpleo} onClose={() => setOpenEmpleo(false)}>
        <Form
          formName="empleo"
          title="Solicitud de Búsqueda de empleo"
          description="Publica tu curriculum, muchas empresas buscan en nuestro sitio web"
        ></Form>
      </Dialog>
    </div>
  );
};

export default trabajo;

const PersonCard = ({
  name,
  img,
  description,
  softSkills,
  ci,
  setLikedList,
  likedList,
  slug,
  favorite
}) => {
  const searchLikedPerson = () => searchLiked(likedList, ci, "ci");
  const [like, setLike] = useState(
    searchLikedPerson() !== false ? true : false
  );
  return (
    <CardContainer item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea onClick={() => navigate(`/trabajo${slug}`)}>
          {img && <Background fluid={img.childImageSharp.fluid} />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name.length >= 38 ? `${name.substr(0, 38)}...` : name}
            </Typography>
            <Typography>{description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
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
            {like ? "Agregado" : "Me interesa"}
          </Button>
          {/* <IconButton aria-label="Compartir">
            <ShareIcon />
          </IconButton> */}
        </CardActions>
      </Card>
    </CardContainer>
  );
};
const BusinessPuestos = props => {
  return props.puestos.map((e, i) => {
    if (
      !(
        props.favorite &&
        searchLiked(props.likedList, parseInt(`${props.nit}${i}`), "id") ===
          false
      ) &&
      e.vigente
    ) {
      return (
        <BusinessCard
          key={i}
          index={i}
          {...props}
          title={e.title}
          description={e.description}
        />
      );
    }
  });
};
const BusinessCard = ({
  name,
  img,
  index,
  description,
  title,
  nit,
  setLikedList,
  likedList,
  slug,
  favorite
}) => {
  const searchLikedBusiness = () =>
    searchLiked(likedList, parseInt(`${nit}${index}`), "id");
  const [like, setLike] = useState(
    searchLikedBusiness() !== false ? true : false
  );
  const newPath = `/trabajo${slug}${title.replace(
    / /gi,
    "-"
  )}/${`puesto${index}`}`;
  return (
    <CardContainer item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea onClick={() => navigate(newPath)}>
          {img && <Background fluid={img.childImageSharp.fluid} />}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography>{name}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            style={{ color: like ? Colors.red : "gray" }}
            aria-label="Agregar a favoritos"
            onClick={() => {
              setLike(!like);
              if (searchLikedBusiness() === false) {
                setLikedList([
                  ...likedList,
                  {
                    name,
                    img,
                    description,
                    nit,
                    title,
                    id: parseInt(`${nit}${index}`)
                  }
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
            {like ? "Agregado" : "Me interesa"}
          </Button>
          {/* <IconButton aria-label="Compartir">
            <ShareIcon />
          </IconButton> */}
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
  align-items: flex-start !important;
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
`;
const FavoriteIcon = styled(FI)`
  margin-right: 5px;
`;
const Background = styled(BackgroundImage)`
  // padding-top: 56.25%; //16:9
  // padding-top: 100%; //1:1
  background-position: top !important;
  padding-top: 75%; //4:3
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
            fields {
              slug
            }
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
              puestos {
                title
                description
                sueldo
                categoria
                publicado
                contrato
                vigente
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
