import express from "express";
import { graphContentTypeSchema } from "./tools/graph_content_type_schema";
import { graphContentGraphqlExecutor } from "./tools/graph_content_graphql_executor";
import { graphContentInputTypes } from "./tools/graph_content_input_types";
import { summarizeUrl } from "./tools/summarize_url";

const router = express.Router();

router.post("/graph_content_type_schema", graphContentTypeSchema);
router.post("/graph_content_graphql_executor", graphContentGraphqlExecutor);
router.post("/graph_content_input_types", graphContentInputTypes);
router.post("/summarize_url", summarizeUrl);

export default router;
