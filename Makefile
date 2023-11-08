start:
	npm run dev

orm-migration: orm-migrate orm-generate

orm-generate:
	npx prisma generate

orm-migrate:
	npx prisma migrate dev

orm-reset:
	npx prisma migrate reset

orm-seed:
	npx prisma db seed

orm-studio:
	npx prisma studio

orm-introspect:
	npx prisma introspect