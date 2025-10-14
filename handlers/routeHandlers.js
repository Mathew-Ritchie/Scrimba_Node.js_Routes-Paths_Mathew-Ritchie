import { getData } from "../public/utils/getData.js";
import { sendResponse } from "../public/utils/sendResponse.js";

export async function handleGet(res) {
  const data = await getData();
  sendResponse(res, 200, JSON.stringify(data), "application/json");
}
