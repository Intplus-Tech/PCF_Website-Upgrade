import type { SchemaTypeDefinition } from "sanity";
import { ministry } from "./ministry";
import { event } from "./event";
import { memory } from "./memory";
import { sermon } from "./sermon";

export const schemaTypes: SchemaTypeDefinition[] = [ministry, event, memory, sermon];