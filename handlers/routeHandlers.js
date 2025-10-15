import { getData } from "../public/utils/getData.js";
import { sendResponse } from "../public/utils/sendResponse.js";
import { parseJSONBody } from "../public/utils/parseJSONBody.js";
import { addNewSighting } from "../public/utils/addNewSighting.js";
import { sanitizeInput } from "../public/utils/sanitizeInput.js";
import { sightingEvents } from "../events/sightingEvents.js";
import { stories } from "../data/stories.js";

export async function handleGet(res) {
  const data = await getData();
  sendResponse(res, 200, JSON.stringify(data), "application/json");
}

export async function handlePost(req, res) {
  try {
    const parsedBody = await parseJSONBody(req);
    const sanitizedBody = sanitizeInput(parsedBody);
    await addNewSighting(sanitizedBody);
    sightingEvents.emit("sighting-added", sanitizedBody);
    sendResponse(res, 201, JSON.stringify(parsedBody), "application/json");
  } catch (err) {
    sendResponse(
      res,
      400,
      JSON.stringify({ message: "Internal Server Error" }),
      "application/json"
    );
  }
}

export async function handleNews(req, res) {
  res.statusCode = 200;

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  /*
Challenge 1:
  1. Set Content-Type, Cache-Control, and Connection headers
*/

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * stories.length);

    res.write(
      `data: ${JSON.stringify({
        event: "news-update",
        story: stories[randomIndex],
      })}\n\n`
    );
  }, 3000);
}
