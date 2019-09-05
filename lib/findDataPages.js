const find = (data, page) => {
  let customConfig;
  let defaultConfig;
  let customBackground = false;
  let customText;
  data.allFile.edges.forEach(({ node }) => {
    if (node.relativePath == "site-config-custom.yml") {
      customConfig = node;
    }
    if (node.relativePath == "site-config-deafult.yml") {
      defaultConfig = node;
    }
  });
  if (customConfig.childSiteConfigYaml.default) {
    customText = defaultConfig.childSiteConfigYaml[page].text;
  } else {
    customBackground =
      customConfig.childSiteConfigYaml[page].background.childImageSharp.fluid;
    customText = customConfig.childSiteConfigYaml[page].text;
  }
  return { customBackground, customText };
};

module.exports = find;
