import "next-auth";
import type { DefaultSession } from "next-auth";
declare module "next-auth" { interface User { role:"ADMIN"|"CUSTOMER" } interface Session { user:{id:string;role:"ADMIN"|"CUSTOMER"}&DefaultSession["user"] } }
declare module "next-auth/jwt" { interface JWT { role?:string } }
