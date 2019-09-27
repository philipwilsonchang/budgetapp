// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateCost {
  count: Int!
}

type AggregateFixedCostCategory {
  count: Int!
}

type AggregateFlexCostCategory {
  count: Int!
}

type AggregateIncome {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Cost {
  id: ID!
  amount: Float!
  createdAt: DateTime!
  category: FlexCostCategory!
}

type CostConnection {
  pageInfo: PageInfo!
  edges: [CostEdge]!
  aggregate: AggregateCost!
}

input CostCreateInput {
  id: ID
  amount: Float!
  category: FlexCostCategoryCreateOneInput!
}

type CostEdge {
  node: Cost!
  cursor: String!
}

enum CostOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
  createdAt_ASC
  createdAt_DESC
}

type CostPreviousValues {
  id: ID!
  amount: Float!
  createdAt: DateTime!
}

type CostSubscriptionPayload {
  mutation: MutationType!
  node: Cost
  updatedFields: [String!]
  previousValues: CostPreviousValues
}

input CostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CostWhereInput
  AND: [CostSubscriptionWhereInput!]
  OR: [CostSubscriptionWhereInput!]
  NOT: [CostSubscriptionWhereInput!]
}

input CostUpdateInput {
  amount: Float
  category: FlexCostCategoryUpdateOneRequiredInput
}

input CostUpdateManyMutationInput {
  amount: Float
}

input CostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  category: FlexCostCategoryWhereInput
  AND: [CostWhereInput!]
  OR: [CostWhereInput!]
  NOT: [CostWhereInput!]
}

input CostWhereUniqueInput {
  id: ID
}

scalar DateTime

type FixedCostCategory {
  id: ID!
  name: String!
  amount: Float!
}

type FixedCostCategoryConnection {
  pageInfo: PageInfo!
  edges: [FixedCostCategoryEdge]!
  aggregate: AggregateFixedCostCategory!
}

input FixedCostCategoryCreateInput {
  id: ID
  name: String!
  amount: Float!
}

type FixedCostCategoryEdge {
  node: FixedCostCategory!
  cursor: String!
}

enum FixedCostCategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  amount_ASC
  amount_DESC
}

type FixedCostCategoryPreviousValues {
  id: ID!
  name: String!
  amount: Float!
}

type FixedCostCategorySubscriptionPayload {
  mutation: MutationType!
  node: FixedCostCategory
  updatedFields: [String!]
  previousValues: FixedCostCategoryPreviousValues
}

input FixedCostCategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FixedCostCategoryWhereInput
  AND: [FixedCostCategorySubscriptionWhereInput!]
  OR: [FixedCostCategorySubscriptionWhereInput!]
  NOT: [FixedCostCategorySubscriptionWhereInput!]
}

input FixedCostCategoryUpdateInput {
  name: String
  amount: Float
}

input FixedCostCategoryUpdateManyMutationInput {
  name: String
  amount: Float
}

input FixedCostCategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  AND: [FixedCostCategoryWhereInput!]
  OR: [FixedCostCategoryWhereInput!]
  NOT: [FixedCostCategoryWhereInput!]
}

input FixedCostCategoryWhereUniqueInput {
  id: ID
  name: String
}

type FlexCostCategory {
  id: ID!
  name: String!
  limit: Float!
}

type FlexCostCategoryConnection {
  pageInfo: PageInfo!
  edges: [FlexCostCategoryEdge]!
  aggregate: AggregateFlexCostCategory!
}

input FlexCostCategoryCreateInput {
  id: ID
  name: String!
  limit: Float!
}

input FlexCostCategoryCreateOneInput {
  create: FlexCostCategoryCreateInput
  connect: FlexCostCategoryWhereUniqueInput
}

type FlexCostCategoryEdge {
  node: FlexCostCategory!
  cursor: String!
}

enum FlexCostCategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  limit_ASC
  limit_DESC
}

type FlexCostCategoryPreviousValues {
  id: ID!
  name: String!
  limit: Float!
}

type FlexCostCategorySubscriptionPayload {
  mutation: MutationType!
  node: FlexCostCategory
  updatedFields: [String!]
  previousValues: FlexCostCategoryPreviousValues
}

input FlexCostCategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FlexCostCategoryWhereInput
  AND: [FlexCostCategorySubscriptionWhereInput!]
  OR: [FlexCostCategorySubscriptionWhereInput!]
  NOT: [FlexCostCategorySubscriptionWhereInput!]
}

input FlexCostCategoryUpdateDataInput {
  name: String
  limit: Float
}

input FlexCostCategoryUpdateInput {
  name: String
  limit: Float
}

input FlexCostCategoryUpdateManyMutationInput {
  name: String
  limit: Float
}

input FlexCostCategoryUpdateOneRequiredInput {
  create: FlexCostCategoryCreateInput
  update: FlexCostCategoryUpdateDataInput
  upsert: FlexCostCategoryUpsertNestedInput
  connect: FlexCostCategoryWhereUniqueInput
}

input FlexCostCategoryUpsertNestedInput {
  update: FlexCostCategoryUpdateDataInput!
  create: FlexCostCategoryCreateInput!
}

input FlexCostCategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  limit: Float
  limit_not: Float
  limit_in: [Float!]
  limit_not_in: [Float!]
  limit_lt: Float
  limit_lte: Float
  limit_gt: Float
  limit_gte: Float
  AND: [FlexCostCategoryWhereInput!]
  OR: [FlexCostCategoryWhereInput!]
  NOT: [FlexCostCategoryWhereInput!]
}

input FlexCostCategoryWhereUniqueInput {
  id: ID
  name: String
}

type Income {
  id: ID!
  frequency: DateTime!
  amount: Float!
}

type IncomeConnection {
  pageInfo: PageInfo!
  edges: [IncomeEdge]!
  aggregate: AggregateIncome!
}

input IncomeCreateInput {
  id: ID
  frequency: DateTime!
  amount: Float!
}

type IncomeEdge {
  node: Income!
  cursor: String!
}

enum IncomeOrderByInput {
  id_ASC
  id_DESC
  frequency_ASC
  frequency_DESC
  amount_ASC
  amount_DESC
}

type IncomePreviousValues {
  id: ID!
  frequency: DateTime!
  amount: Float!
}

type IncomeSubscriptionPayload {
  mutation: MutationType!
  node: Income
  updatedFields: [String!]
  previousValues: IncomePreviousValues
}

input IncomeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IncomeWhereInput
  AND: [IncomeSubscriptionWhereInput!]
  OR: [IncomeSubscriptionWhereInput!]
  NOT: [IncomeSubscriptionWhereInput!]
}

input IncomeUpdateInput {
  frequency: DateTime
  amount: Float
}

input IncomeUpdateManyMutationInput {
  frequency: DateTime
  amount: Float
}

input IncomeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  frequency: DateTime
  frequency_not: DateTime
  frequency_in: [DateTime!]
  frequency_not_in: [DateTime!]
  frequency_lt: DateTime
  frequency_lte: DateTime
  frequency_gt: DateTime
  frequency_gte: DateTime
  amount: Float
  amount_not: Float
  amount_in: [Float!]
  amount_not_in: [Float!]
  amount_lt: Float
  amount_lte: Float
  amount_gt: Float
  amount_gte: Float
  AND: [IncomeWhereInput!]
  OR: [IncomeWhereInput!]
  NOT: [IncomeWhereInput!]
}

input IncomeWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCost(data: CostCreateInput!): Cost!
  updateCost(data: CostUpdateInput!, where: CostWhereUniqueInput!): Cost
  updateManyCosts(data: CostUpdateManyMutationInput!, where: CostWhereInput): BatchPayload!
  upsertCost(where: CostWhereUniqueInput!, create: CostCreateInput!, update: CostUpdateInput!): Cost!
  deleteCost(where: CostWhereUniqueInput!): Cost
  deleteManyCosts(where: CostWhereInput): BatchPayload!
  createFixedCostCategory(data: FixedCostCategoryCreateInput!): FixedCostCategory!
  updateFixedCostCategory(data: FixedCostCategoryUpdateInput!, where: FixedCostCategoryWhereUniqueInput!): FixedCostCategory
  updateManyFixedCostCategories(data: FixedCostCategoryUpdateManyMutationInput!, where: FixedCostCategoryWhereInput): BatchPayload!
  upsertFixedCostCategory(where: FixedCostCategoryWhereUniqueInput!, create: FixedCostCategoryCreateInput!, update: FixedCostCategoryUpdateInput!): FixedCostCategory!
  deleteFixedCostCategory(where: FixedCostCategoryWhereUniqueInput!): FixedCostCategory
  deleteManyFixedCostCategories(where: FixedCostCategoryWhereInput): BatchPayload!
  createFlexCostCategory(data: FlexCostCategoryCreateInput!): FlexCostCategory!
  updateFlexCostCategory(data: FlexCostCategoryUpdateInput!, where: FlexCostCategoryWhereUniqueInput!): FlexCostCategory
  updateManyFlexCostCategories(data: FlexCostCategoryUpdateManyMutationInput!, where: FlexCostCategoryWhereInput): BatchPayload!
  upsertFlexCostCategory(where: FlexCostCategoryWhereUniqueInput!, create: FlexCostCategoryCreateInput!, update: FlexCostCategoryUpdateInput!): FlexCostCategory!
  deleteFlexCostCategory(where: FlexCostCategoryWhereUniqueInput!): FlexCostCategory
  deleteManyFlexCostCategories(where: FlexCostCategoryWhereInput): BatchPayload!
  createIncome(data: IncomeCreateInput!): Income!
  updateIncome(data: IncomeUpdateInput!, where: IncomeWhereUniqueInput!): Income
  updateManyIncomes(data: IncomeUpdateManyMutationInput!, where: IncomeWhereInput): BatchPayload!
  upsertIncome(where: IncomeWhereUniqueInput!, create: IncomeCreateInput!, update: IncomeUpdateInput!): Income!
  deleteIncome(where: IncomeWhereUniqueInput!): Income
  deleteManyIncomes(where: IncomeWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  cost(where: CostWhereUniqueInput!): Cost
  costs(where: CostWhereInput, orderBy: CostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cost]!
  costsConnection(where: CostWhereInput, orderBy: CostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CostConnection!
  fixedCostCategory(where: FixedCostCategoryWhereUniqueInput!): FixedCostCategory
  fixedCostCategories(where: FixedCostCategoryWhereInput, orderBy: FixedCostCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FixedCostCategory]!
  fixedCostCategoriesConnection(where: FixedCostCategoryWhereInput, orderBy: FixedCostCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FixedCostCategoryConnection!
  flexCostCategory(where: FlexCostCategoryWhereUniqueInput!): FlexCostCategory
  flexCostCategories(where: FlexCostCategoryWhereInput, orderBy: FlexCostCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FlexCostCategory]!
  flexCostCategoriesConnection(where: FlexCostCategoryWhereInput, orderBy: FlexCostCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FlexCostCategoryConnection!
  income(where: IncomeWhereUniqueInput!): Income
  incomes(where: IncomeWhereInput, orderBy: IncomeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Income]!
  incomesConnection(where: IncomeWhereInput, orderBy: IncomeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IncomeConnection!
  node(id: ID!): Node
}

type Subscription {
  cost(where: CostSubscriptionWhereInput): CostSubscriptionPayload
  fixedCostCategory(where: FixedCostCategorySubscriptionWhereInput): FixedCostCategorySubscriptionPayload
  flexCostCategory(where: FlexCostCategorySubscriptionWhereInput): FlexCostCategorySubscriptionPayload
  income(where: IncomeSubscriptionWhereInput): IncomeSubscriptionPayload
}
`