const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
} = require("graphql");

const books = [
  { name: "first-book", id: "1", genre: "horror" },
  { name: "second-book", id: "2", genre: "fantastic" },
  { name: "third -book", id: "3", genre: "comedic" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db
        return _.find(books, { id: args.id });
      },
    },
  },
});

// book(id:"2"){
//   name
//   genre
// }

const scheme = new GraphQLSchema({
  query: RootQuery,
});

module.exports = scheme;
