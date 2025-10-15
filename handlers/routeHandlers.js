import { getData } from "../public/utils/getData.js";
import { sendResponse } from "../public/utils/sendResponse.js";
import { parseJSONBody } from "../public/utils/parseJSONBody.js";

export async function handleGet(res) {
  const data = await getData();
  sendResponse(res, 200, JSON.stringify(data), "application/json");
}

export async function handlePost(req, res) {
  const rawBody = await parseJSONBody(req);
  console.log("Received POST data:", rawBody);
}
