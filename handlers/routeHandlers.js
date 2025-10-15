import { getData } from "../public/utils/getData.js";
import { sendResponse } from "../public/utils/sendResponse.js";
import { parseJSONBody } from "../public/utils/parseJSONBody.js";
import { addNewSighting } from "../public/utils/addNewSighting.js";
import { sanitizeInput } from "../public/utils/sanitizeInput.js";

export async function handleGet(res) {
  const data = await getData();
  sendResponse(res, 200, JSON.stringify(data), "application/json");
}

export async function handlePost(req, res) {
  try {
    const parsedBody = await parseJSONBody(req);
    const sanitizedBody = sanitizeInput(parsedBody);
    await addNewSighting(sanitizedBody);
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
