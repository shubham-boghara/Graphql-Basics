export const typeDefs = `
type Query {
  User(search:String): [user!]!
  Post(search:String): [post!]!
}

type Mutation {
  createUser(name: String!, email: String): user!
}

type user {
  id: ID!
  name: String!
  email: String!
  comment: [comments!]!
  post: [post!]!
}

type post {
  userPostId:ID!
  id: ID!
  title: String!
  body: String!
  published: Boolean!
  author: user!
  comment: [comments!]!

}

type comments {
   userId: ID!
   id:ID!
   name:String!
   comment:String!
}

`