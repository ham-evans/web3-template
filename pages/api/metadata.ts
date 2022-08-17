import type { NextApiRequest, NextApiResponse } from "next";
import { CONTRACT_FACTORY } from "@lib/constants";
import { metadata } from "@lib/metadata";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { tokenid } = req.query;

  if (typeof tokenid !== "string") return res.status(500).end();

  const nftId = parseInt(tokenid, 10);

  const exists = await CONTRACT_FACTORY.exists(nftId);
  if (!exists) return res.status(500).end();

  res.json(metadata[nftId]);
}
