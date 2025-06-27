import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    tasks: [Task]
    task(id: ID!): Task
  }

  type Mutation {
    addTask(title: String!): Task
    toggleTask(id: ID!): Task
    deleteTask(id: ID!): Task
  }
`;
