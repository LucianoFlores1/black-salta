# Black Salta — landing

Rediseño de blacksalta.com. Astro 6 + Tailwind 4, sitio estático.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Antes de publicar

- [ ] Reemplazar las fotos de `src/assets/photos/` por fotos reales del cliente (hoy son de Unsplash; ver `CREDITS.md`). Mantener los nombres de archivo o actualizar `src/data/site.ts`.
- [ ] Logo: el sitio usa un logotipo tipográfico (`src/components/Wordmark.astro`) y un monograma en `public/favicon.svg`. Reemplazar si el cliente tiene logo.
- [ ] Confirmar con el cliente: cantidad de locales (el sitio anterior decía 4 y listaba 3), horarios y número para mayoristas.
- [ ] Regenerar `public/og.jpg` (1200×630) con una foto real.

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Locales, horarios, teléfonos, categorías, redes | `src/data/site.ts` |
| Estado "abierto ahora" (hora de Salta) | `src/scripts/hours.ts` |
| SEO, Open Graph, JSON-LD | `src/layouts/Base.astro` |
| Colores y tipografía | `src/styles/global.css` |
