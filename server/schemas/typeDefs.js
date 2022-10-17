const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  id: ID! @isUnique
  email: String! @isUnique
  name: String!
  movies: [Movie!]! @relation(name: "MovieReviewer")
  createdAt: DateTime!
  updatedAt: DateTime!
}
 
type Movie {
  id: ID! @isUnique
  description: String!
  imageUrl: String!
  avgRating: Int!
  reviewer: User @relation(name: "MovieReviewer")
  updatedAt: DateTime!
  createdAt: DateTime!
}

query {
  allMovies {
     id
     description
     imageUrl
     avgRating
  }
 }
`;

module.exports = typeDefs;