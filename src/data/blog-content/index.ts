import type { ComponentType } from "react";
import { LangChainContent } from "./how-to-build-ai-agents-with-langchain";
import { TechnicalSeoContent } from "./technical-seo-for-saas-startups";
import { IvrContent } from "./building-ai-ivr-twilio-deepgram";
import { GeoContent } from "./what-is-geo-generative-engine-optimisation";
import { NextjsContent } from "./nextjs-15-app-router-performance";

export const blogContent: Record<string, ComponentType> = {
  "how-to-build-ai-agents-with-langchain": LangChainContent,
  "technical-seo-for-saas-startups": TechnicalSeoContent,
  "building-ai-ivr-twilio-deepgram": IvrContent,
  "what-is-geo-generative-engine-optimisation": GeoContent,
  "nextjs-15-app-router-performance": NextjsContent,
};
