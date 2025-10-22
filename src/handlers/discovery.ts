import { Request, Response } from "express";

const functions = [
  {
    name: "graph_content_type_schema",
    description: "Discover content types available for analysis (mocked)",
    parameters: [],
    endpoint: "/tools/graph_content_type_schema",
    http_method: "POST",
    auth_requirements: []
  },
  {
    name: "graph_content_graphql_executor",
    description: "Execute GraphQL-like queries against mocked content",
    parameters: [{ name: "query", type: "string", required: true }],
    endpoint: "/tools/graph_content_graphql_executor",
    http_method: "POST",
    auth_requirements: []
  },
  {
    name: "graph_content_input_types",
    description: "Return input types for a chosen content type (mocked)",
    parameters: [{ name: "contentTypeName", type: "string", required: true }],
    endpoint: "/tools/graph_content_input_types",
    http_method: "POST",
    auth_requirements: []
  },
  {
    name: "summarize_url",
    description: "Fetches a URL and returns a short summary (custom tool)",
    parameters: [{ name: "url", type: "string", required: true }],
    endpoint: "/tools/summarize_url",
    http_method: "POST",
    auth_requirements: []
  }
];

export default function discovery(req: Request, res: Response) {
  res.json({ functions });
}
