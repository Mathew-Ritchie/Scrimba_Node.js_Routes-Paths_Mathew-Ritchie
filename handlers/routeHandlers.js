import { getData } from "../public/utils/getData.js";
import { sendResponse } from "../public/utils/sendResponse.js";
import { parseJSONBody } from "../public/utils/parseJSONBody.js";
import { addNewSighting } from "../public/utils/addNewSighting.js";

export async function handleGet(res) {
  const data = await getData();
  sendResponse(res, 200, JSON.stringify(data), "application/json");
}

export async function handlePost(req, res) {
  try {
    const parsedBody = await parseJSONBody(req);
    await addNewSighting(parsedBody);
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
