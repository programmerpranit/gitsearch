import { type IPayload } from "@/types/user";
import { verify } from "jsonwebtoken";
import { type NextApiRequest } from "next";

export const verifyStudent = (req: NextApiRequest): IPayload | null => {
  try {
    const { authorization } = req.headers;

    const bearer = authorization?.split(" ");
    const token = bearer?.[1];
    console.log(bearer);
    const user = verify(token ?? "", process.env.STUDENT_SEC ?? "");
    console.log(user);
    const typedPayload = user as IPayload;
    if (typedPayload.user.role === "student") {
      return typedPayload;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
