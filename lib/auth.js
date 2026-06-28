import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { nextCookies } from "better-auth/next-js";

const client = new MongoClient(process.env.MONGODB_URI);

const connectClient = async () => {
  await client.connect();
  return client.db("blood");
};

const db = await connectClient();

export const auth = betterAuth({
  database: mongodbAdapter(db),
user: {
  additionalFields: {
    role: {
      type: "string",
      defaultValue: "donor",
    },

  
  },
},
  emailAndPassword: {
    enabled: true,
  },

  plugins: [nextCookies()],
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
});

