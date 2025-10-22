import axios from "axios";

const OPAL_API_URL = process.env.OPAL_API_URL || "https://opal.optimizely.com/api/v1/tool_registries";
const OPAL_REGISTRY_NAME = process.env.OPAL_REGISTRY_NAME || "Marketing Content Orchestrator";
const DISCOVERY_URL = process.env.DISCOVERY_URL || "https://opal-agent-solution.vercel.app/discovery";
const OPAL_API_KEY = process.env.OPAL_API_KEY || ""; // optional

export async function registerWithOpal() {
  const registryPayload = {
    name: OPAL_REGISTRY_NAME,
    discovery_url: DISCOVERY_URL,
    description: "Auto-registered Opal tool registry for Marketing Content Orchestrator",
    public: true
  };

  const headers:any = { "Content-Type": "application/json" };
  if (OPAL_API_KEY) headers["Authorization"] = `Bearer ${OPAL_API_KEY}`;

  try {
    console.log("🔄 Attempting to register tool registry with Opal...");
    const res = await axios.post(OPAL_API_URL, registryPayload, { headers });
    console.log("✅ Opal registry created:", res.status);
    return res.data;
  } catch (err:any) {
    // If already exists, try to find and update
    console.warn("Warning during initial create:", err?.response?.status, err?.response?.data || err.message);
    if (err?.response?.status === 409 || err?.response?.status === 400) {
      // attempt to list registries and update matching name
      try {
        const listRes = await axios.get(OPAL_API_URL, { headers });
        const items = listRes.data || [];
        const match = items.find((r:any) => r.name === OPAL_REGISTRY_NAME || (r.discovery_url === DISCOVERY_URL));
        if (match && match.id) {
          console.log("🔁 Existing registry found (id=", match.id, ") - updating discovery_url...") ;
          const patchRes = await axios.patch(`${OPAL_API_URL}/${match.id}`, { discovery_url: DISCOVERY_URL }, { headers });
          console.log("✅ Opal registry updated:", patchRes.status);
          return patchRes.data;
        } else {
          console.log("No existing registry found by name — rethrowing error.");
          throw err;
        }
      } catch (innerErr:any) {
        console.error("Failed to list/update registries:", innerErr?.message || innerErr);
        throw innerErr;
      }
    } else {
      throw err;
    }
  }
}
