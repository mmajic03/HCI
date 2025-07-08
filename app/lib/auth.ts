import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/src/db/drizzle"; // your drizzle instance
import { user, account, session, verification } from "@/src/db/schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user,
            account,
            session,
            verification,
        }
    }),
    emailAndPassword: {
        enabled: true,
    }

});