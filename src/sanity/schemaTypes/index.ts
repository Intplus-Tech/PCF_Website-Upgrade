import type { SchemaTypeDefinition } from "sanity";
import { ministry } from "./ministry";
import { event } from "./event";
import { memory } from "./memory";
import { sermon } from "./sermon";
import { pageHeader } from "./pageHeader";
import { siteSettings } from "./siteSettings";
import { homepage } from "./homepage";
import { getInvolvedCard } from "./getInvolvedCard";

export const schemaTypes: SchemaTypeDefinition[] = [ministry, event, memory, sermon, pageHeader, siteSettings, homepage, getInvolvedCard];