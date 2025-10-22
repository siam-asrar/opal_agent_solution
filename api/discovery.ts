import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse) => {
  res.json({ functions: [
    { name:'graph_content_type_schema', description:'Discover content types', parameters:[], endpoint:'/tools/graph_content_type_schema', http_method:'POST', auth_requirements:[] },
    { name:'graph_content_graphql_executor', description:'Execute GraphQL-like queries', parameters:[{name:'query',type:'string',required:true}], endpoint:'/tools/graph_content_graphql_executor', http_method:'POST', auth_requirements:[] },
    { name:'graph_content_input_types', description:'Return input types', parameters:[{name:'contentTypeName',type:'string',required:true}], endpoint:'/tools/graph_content_input_types', http_method:'POST', auth_requirements:[] },
    { name:'summarize_url', description:'Fetch and summarize URL', parameters:[{name:'url',type:'string',required:true}], endpoint:'/tools/summarize_url', http_method:'POST', auth_requirements:[] }
  ] });
};
