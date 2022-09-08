// This configuration should be duplicated in `next.config.js`
// https://nextjs.org/docs/advanced-features/compiler#relay
module.exports = {
  exclude: ["**/.next/**", "**/__generated__/**", "**/node_modules/**"],
  language: "typescript",
  schema: "../schema.graphql",
  src: "./src",
};
