import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_APP_URL||"http://localhost:3000"),title:{default:"СтройДом — строительные материалы",template:"%s | СтройДом"},description:"Строительные материалы с доставкой по Казахстану",openGraph:{title:"СтройДом",description:"Строительные материалы с доставкой"}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
