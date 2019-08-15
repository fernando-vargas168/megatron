const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const path = require("path");
exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const { frontmatter } = node;
    if (frontmatter) {
      const { img } = frontmatter;
      if (img) {
        if (img.indexOf("/img") === 0) {
          frontmatter.img = path
            .relative(
              path.dirname(node.fileAbsolutePath),
              path.join(__dirname, "/static/", img)
            )
            .replace(/\/\/|\\/gi, "/");
        }
      }
    }
  }
  // if (node.internal.type === "MarkdownRemark") {
  // fmImagesToRelative(node);
  // }
};
