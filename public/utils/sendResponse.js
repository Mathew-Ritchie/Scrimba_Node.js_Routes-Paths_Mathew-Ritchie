import { stat } from "fs";

export function sendResponse(res, statusCode, payload, contentType) {
  res.setHeader("Content-Type", contentType);
  res.statusCode = statusCode;
  res.end(payload);
}

export function handlePost(req, res) {
  console.log("POST request received");
}
