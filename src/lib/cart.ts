export type CartLine = { productId:string; name:string; price:number; stock:number; quantity:number };
export function changeQuantity(lines:CartLine[], productId:string, quantity:number) { const line=lines.find(x=>x.productId===productId); if(!line) throw new Error("Товар не найден"); if(quantity<1||quantity>line.stock) throw new Error("Недоступное количество"); return lines.map(x=>x.productId===productId?{...x,quantity}:x); }
export const cartTotal = (lines:CartLine[]) => lines.reduce((sum,x)=>sum+x.price*x.quantity,0);
