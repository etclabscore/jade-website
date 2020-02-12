/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const $RefParser = require("json-schema-ref-parser");
const fetch = require("node-fetch");

const OpenRPCURL = "https://raw.githubusercontent.com/etclabscore/jade-service-runner/master/openrpc.json";

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get OpenRPC Document at build time
  const result = await fetch(OpenRPCURL);
  const resultData = await result.json();
  // deref doc
  const openrpcDocument = await $RefParser.dereference(resultData);
  // create node for build time openrpc document on the site
  createNode({
    openrpcDocument: JSON.stringify(openrpcDocument),
    // required fields
    id: `openrpcDocument`,
    parent: null,
    children: [],
    internal: {
      type: `OpenrpcDocument`,
      contentDigest: createContentDigest(openrpcDocument),
    },
  })
}


exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  console.log("stage====", stage, rules.dependencies);
  if (stage !== "build-html") {
    actions.setWebpackConfig({
      plugins: [
        new MonacoWebpackPlugin({
          // available options are documented at https://github.com/Microsoft/monaco-editor-webpack-plugin#options
          languages: ["json"]
        }),
      ],
    })
  } else {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-json-view/,
            use: loaders.null(),
          },
          {
            test: /monaco-editor/,
            use: loaders.null(),
          }
        ],
      },
    });
  }
}
