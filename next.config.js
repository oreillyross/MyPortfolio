// next.config.js
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = {
  // Target must be serverless
  target: "serverless"
};

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx"]
});
