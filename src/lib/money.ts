export const formatMoney = (value: number | string) => new Intl.NumberFormat("ru-KZ", { style:"currency", currency:"KZT", maximumFractionDigits:0 }).format(Number(value));
