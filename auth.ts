import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
export const { handlers, auth, signIn, signOut } = NextAuth({ adapter:PrismaAdapter(prisma), session:{strategy:"jwt"}, providers:[Credentials({ credentials:{email:{},password:{}}, async authorize(c){ const user=await prisma.user.findUnique({where:{email:String(c.email)}}); if(!user||!await bcrypt.compare(String(c.password),user.passwordHash)) return null; return {id:user.id,email:user.email,name:user.name,role:user.role}; }})], callbacks:{jwt:async({token,user})=>{if(user)token.role=(user as {role:string}).role; return token},session:async({session,token})=>{if(session.user){session.user.id=token.sub!;session.user.role=token.role as "ADMIN"|"CUSTOMER"}return session}} });
