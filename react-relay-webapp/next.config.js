module.exports = {
  compiler: {
    // This configuration should be a duplicate of `relay.config.js`
    // https://nextjs.org/docs/advanced-features/compiler#relay
    relay: {
      exclude: ["**/.next/**", "**/__generated__/**", "**/node_modules/**"],
      language: "typescript",
      schema: "../schema.graphql",
      src: "./src",
    },
  },
};
