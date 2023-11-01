import type { NextApiRequest, NextApiResponse } from "next";

type THandler = (req: NextApiRequest, res: NextApiResponse<any>) => any;

export function handleError(handler: THandler): THandler {
  return async function (req: NextApiRequest, res: NextApiResponse<any>) {
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Unknown Error Occured" });
    }
  };
}
