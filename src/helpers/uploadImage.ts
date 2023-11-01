import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const uploadWithDataUri = async (dataURI: string): Promise<string> => {
  const client = new S3Client({
    forcePathStyle: false,
    endpoint: process.env.CLOUD_ENDPOINT ?? "",
    credentials: {
      accessKeyId: process.env.CLOUD_KEY ?? "",
      secretAccessKey: process.env.CLOUD_SECRET ?? "",
    },
    region: "blr1",
  });
  const base64Data = Buffer.from(
    dataURI.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );
  const filename = `eyetech/${crypto.randomUUID()}.png`;
  const command = new PutObjectCommand({
    Bucket: "pranitpatil",
    Key: filename,
    ContentEncoding: "base64", // required
    ContentType: `image/png`,
    Body: base64Data,
    ACL: "public-read",
  });

  const response = await client.send(command);

  console.log(response);

  const url = "https://pranitpatil.blr1.digitaloceanspaces.com/" + filename;

  return url;
};
