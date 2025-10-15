import { EventEmitter } from "node:events";
import { createAlert } from "../public/utils/createAlert.js";

export const sightingEvents = new EventEmitter();
sightingEvents.on("sighting-added", createAlert);
