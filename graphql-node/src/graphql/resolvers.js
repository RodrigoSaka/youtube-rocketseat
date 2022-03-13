const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeResolvers } = require('@graphql-tools/merge');
const path = require('path');

const resolversFiles = loadFilesSync(path.join(__dirname, 'modules', '**', 'resolvers.js'));
const resolvers = mergeResolvers(resolversFiles);

module.exports = resolvers;
