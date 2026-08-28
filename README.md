# СтройДом

Production-oriented MVP интернет-магазина строительных материалов для Казахстана: Next.js App Router, TypeScript, Tailwind, PostgreSQL/Prisma, Auth.js, Zod, Docker, Vitest и Playwright-ready конфигурация.

## Запуск

1. Установите Node.js 22+ и Docker Desktop.
2. Скопируйте `.env.example` в `.env`, задайте `AUTH_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `WHATSAPP_PHONE`.
3. Выполните:

```bash
docker compose up -d postgres
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run seed
npm run dev
```

Проверки: `npm run typecheck`, `npm run lint`, `npm test`, `npm run build`. Для production: `docker compose up -d --build`.

## Возможности

Витрина, каталог с поиском/ценовыми фильтрами/категориями, SEO URL товаров, роли CUSTOMER/ADMIN, защищённая админ-страница, серверная корзина, серверная пересчитанная checkout-логика с транзакционным уменьшением остатка, Zod-валидация и seed из 30 товаров. Цены пересчитываются на сервере, клиент не передаёт итоговую сумму.

## Архитектура

`src/app` — маршруты и API, `src/components` — UI, `src/lib` — бизнес-правила и Prisma, `prisma` — схема/seed. Расширения для платежей, доставки, 1С и CRM должны подключаться отдельными адаптерами к order/cart business logic.

## Администратор

Создаётся только seed-скриптом из `ADMIN_EMAIL` и `ADMIN_PASSWORD`; пароль в репозитории не хранится. Войдите через Auth.js и используйте `/admin`.

## Ограничения MVP

CRUD-экраны админки, регистрация/страницы логина, изображенийный storage, rate-limit persistence и E2E-спеки требуют следующего этапа. Модели и защищённый API подготовлены для их добавления; до production следует подключить Redis rate limiter и object storage.
