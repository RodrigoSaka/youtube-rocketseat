const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const path = require('path');

const typesFile = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'));
const typeDefs = mergeTypeDefs(typesFile);

module.exports = typeDefs;
