import { NextApiRequest, NextApiResponse } from "next";
import { createHash } from "crypto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get user email link
  let { email } = req.query;

  if (typeof email !== "string") {
    email = "";
  }

  const md5hash = createHash("md5").update(email.toLowerCase()).digest("hex");

  res.redirect(307, `https://www.gravatar.com/avatar/${md5hash}?d=mp`);
}
