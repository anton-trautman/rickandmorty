import type { CodegenConfig } from "@graphql-codegen/cli";

const scalars = {
  ID: "string",
  String: "string",
  Boolean: "boolean",
  Int: "number",
  Float: "number",
  AccountNumber: "string",
  BigInt: "number",
  Date: "string",
  DateTime: "string",
  EmailAddress: "string",
  JSON: "Record<string, any>",
  JSONObject: "Record<string, any>",
  JWT: "string",
  Locale: "string",
  LocalDate: "string",
  LocalEndTime: "string",
  LocalTime: "string",
  NegativeFloat: "number",
  NegativeInt: "number",
  NonEmptyString: "string",
  NonNegativeFloat: "number",
  NonNegativeInt: "number",
  NonPositiveFloat: "number",
  NonPositiveInt: "number",
  ObjectID: "string",
  PositiveFloat: "number",
  PositiveInt: "number",
  SafeInt: "number",
  SemVer: "string",
  Time: "string",
  TimeZone: "string",
  Timestamp: "string",
  URL: "string",
  UUID: "string",
  Void: "void",
};

const config: CodegenConfig = {
  schema: "https://rickandmortyapi.com/graphql",
  documents: "src/**/!(schema.graphql).graphql",
  config: {
    dedupeFragments: true,
    disableDescriptions: true,
    useTypenameImports: true,
    scalars,
  },
  generates: {
    "src/types.ts": {
      plugins: ["typescript"],
      config: {
        onlyOperationTypes: true,
      },
    },
    "src/apollo-helpers.ts": {
      plugins: ["typescript-apollo-client-helpers"],
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: { extension: ".generated.tsx", baseTypesPath: "types.ts" },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
      },
      hooks: {
        afterOneFileWrite: ["prettier --write"],
      },
    },
  },
};

export default config;
