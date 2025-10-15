export async function parseJSONBody(req) {
  let body = "";

  for await (const chunk of req) {
    body += chunk;
  }

  try {
    return JSON.parse(body);
  } catch (err) {
    console.error("Error parsing JSON:", err);
    return null;
  }
}
