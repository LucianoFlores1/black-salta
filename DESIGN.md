---
name: Black Salta
description: Electrónica importada en la peatonal de Salta, presentada en negro profundo con terminación de página Pro.
colors:
  ink: "#000000"
  surface: "#0e0e10"
  surface-2: "#1a1a1d"
  line: "rgb(255 255 255 / 0.1)"
  line-strong: "rgb(255 255 255 / 0.18)"
  fg: "#f5f5f7"
  mute: "#a1a1a6"
  dim: "#86868b"
  open: "#32d74b"
  closed: "#ff9f0a"
  link: "#5eb0ff"
  error: "#ff6961"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7.2vw, 5.5rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  numeral:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 12vw, 8.5rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\""
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"ss01\""
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
rounded:
  field: "0.75rem"
  card: "1rem"
  pill: "999px"
spacing:
  gutter: "1.25rem"
  gutter-md: "2.5rem"
  container: "1200px"
  tile-gap: "0.75rem"
  card-pad: "1.5rem"
  card-pad-lg: "2.25rem"
  section: "6rem"
  section-md: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1.375rem"
    height: "2.875rem"
  button-primary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "0 1.375rem"
    height: "2.875rem"
  button-ghost-hover:
    backgroundColor: "rgb(255 255 255 / 0.06)"
    textColor: "{colors.fg}"
  link:
    textColor: "{colors.link}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.mute}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.5rem"
  chip-selected:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.fg}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.75rem 1rem"
    height: "3rem"
  card-tile:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.fg}"
    rounded: "{rounded.card}"
    padding: "1.25rem"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad-lg}"
  badge:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
---

# Design System: Black Salta

## Overview

**Creative North Star: "La vidriera en negro"**

Black Salta es una vidriera de la peatonal vista de noche: el fondo desaparece, el producto fotografiado queda iluminado y el texto habla poco y en grande. La terminación de referencia es la de una página Pro de Apple: negro absoluto, una sola idea por pantalla, titulares gigantes y apretados, y botones en píldora blanca que son la única superficie clara de la página. Debajo de esa sobriedad, la página es un mostrador: cada sección termina en un WhatsApp concreto y cada local dice si está abierto ahora mismo.

La densidad es baja y el ritmo vertical es amplio (secciones de 6rem en mobile y 9rem en escritorio), separadas por filetes de 1px casi invisibles en lugar de cambios de color. La profundidad viene de la luz de la fotografía y de dos escalones de superficie apenas más claros que el negro, no de sombras. El color de marca no existe como tal: el acento es funcional (verde "abierto", ámbar "cerrado", azul claro para enlaces y foco).

El sistema rechaza el template IA de grafito: blobs de gradiente, marquee, fila de métricas y grilla de íconos con titulitos. La fotografía actual es stock provisorio y se normaliza con una gradación común hasta que lleguen las fotos propias.

**Key Characteristics:**
- Negro #000 de fondo, texto casi blanco y un gris secundario que hace de "segunda voz" en los titulares.
- Geist Variable autoalojada, display a 650 de peso con tracking -0.035em; sin eyebrows ni kickers.
- Píldora blanca como única acción primaria; ghost con aro de 1px como secundaria.
- Estado en vivo (punto de color + texto) calculado con la hora de Salta.
- Fotografía de producto sobre negro, desaturada, que entra con escala o se abre con clip-path al hacer scroll.

## Colors

Una paleta casi monocroma de negros y grises fríos, con tres acentos que solo comunican estado o interacción.

### Primary
- **Blanco Vitrina** (fg): texto principal y relleno de la píldora primaria, del chip seleccionado y del badge. Es lo más brillante de la pantalla después de la fotografía; por eso la acción principal es blanca.

### Secondary
- **Azul Enlace** (link): enlaces de texto ("Consultar", "Miralos en Instagram"), anillo de foco global y caret de los campos. Nunca rellena superficies.

### Tertiary
- **Verde Abierto** (open): punto de estado "abierto ahora" y checks de beneficios/confirmación. Es información, no decoración.
- **Ámbar Cerrado** (closed): punto de estado cuando el local está cerrado.
- **Rojo Error** (error): borde de 2px y mensaje bajo el campo inválido.

### Neutral
- **Negro Absoluto** (ink): fondo de página, nav translúcida (72% sobre blur) y texto sobre píldoras blancas.
- **Grafito Profundo** (surface): bandas de pos venta y footer, panel del formulario mayorista.
- **Grafito Medio** (surface-2): fondo de los mosaicos de categoría y de los campos de formulario.
- **Filete** (line): separadores de sección, listas de locales y datos, borde de la nav al scrollear.
- **Filete Marcado** (line-strong): aro de botones ghost, chips y hover de campos.
- **Gris Segunda Voz** (mute): segunda línea de los titulares, bajadas, texto secundario y links de nav.
- **Gris Nota** (dim): notas legales, "(opcional)", punto de estado sin dato.

### Named Rules
**The Dos Voces Rule.** Los titulares se escriben en dos tiempos: la afirmación en Blanco Vitrina y la réplica en Gris Segunda Voz ("Tecnología importada. / Atendida por personas."). El contraste lo hace el gris, nunca un color.

**The Acento Funcional Rule.** Verde, ámbar, azul y rojo solo aparecen para decir algo (estado, enlace, foco, error). Si un color no comunica un estado, no va.

## Typography

**Display Font:** Geist Variable (con ui-sans-serif, system-ui)
**Body Font:** Geist Variable (con ui-sans-serif, system-ui), con `ss01` activado

**Character:** Una sola familia variable trabajando en extremos: titulares pesados y comprimidos por tracking negativo, cuerpo neutro y legible. La jerarquía la dan el tamaño, el peso y el gris, no un cambio de familia.

### Hierarchy
- **Display**: titular del hero, en dos líneas centradas; también la cabecera de la sección destacada (hasta 5rem).
- **Headline**: titulares de sección, alineados a la izquierda con ancho máximo en `ch` (12–18ch) para que corten en dos o tres líneas.
- **Statement**: el párrafo manifiesto de "Nosotros", que se ilumina palabra por palabra con el scroll.
- **Numeral**: números gigantes que hacen de identificador ("710", "01/02/03" de locales). Siempre `aria-hidden`; la información real está en texto.
- **Title**: nombres de categorías, calles, redes y títulos de datos (1.25–2rem según contexto).
- **Lead**: bajadas bajo los titulares en Gris Segunda Voz, máximo 26–40rem de ancho.
- **Body**: texto corrido, horarios y formularios.
- **Label**: etiquetas de formulario, estado en vivo, nav y footer.

### Named Rules
**The Sin Eyebrow Rule.** Ningún titular lleva una línea chica encima. La marca la lleva el logotipo de la nav; la sección se nombra con su titular.

**The Tracking Negativo Rule.** Cuanto más grande, más apretado: -0.01em en botones, -0.02em en títulos, -0.035em en display, -0.05em en numerales.

## Layout

Contenedor único de 1200px centrado, con gutter de 1.25rem en mobile y 2.5rem desde 768px. Las secciones se apilan con 6rem de padding vertical en mobile y 9rem en escritorio, separadas por un filete superior de 1px. Mobile primero: los pares de botones se apilan a ancho completo y pasan a fila desde 640px.

Patrones recurrentes: cabecera de sección con titular a la izquierda y bajada alineada abajo a la derecha (desde 768px); listas de filas divididas por filetes (locales, beneficios, redes) en lugar de tarjetas; mosaico de categorías en grilla de 6 columnas desde 1024px con filas de 22rem y gap de 0.75rem. La fotografía del hero y de la sección destacada rompe el contenedor o lo ocupa entero. En mobile, una barra fija con la píldora de WhatsApp aparece al pasar el CTA del hero y se oculta al llegar al footer.

Breakpoints: 640px, 768px, 1024px (Tailwind por defecto).

## Elevation & Depth

Sistema plano. La profundidad la dan la luz de la fotografía y dos escalones tonales (Grafito Profundo, Grafito Medio) sobre el negro; los bordes son aros internos de 1px (`inset` box-shadow) en lugar de bordes de caja. La única sombra real es ambiental, bajo la barra de WhatsApp fija en mobile, para separarla del contenido que pasa debajo. La nav usa vidrio: negro al 72% con `blur(20px) saturate(180%)`, que aparece solo al scrollear.

### Shadow Vocabulary
- **Sombra flotante** (`box-shadow: 0 8px 30px rgb(0 0 0 / 0.6)`): solo para elementos fijos que flotan sobre el contenido (barra CTA mobile).
- **Aro fino** (`box-shadow: inset 0 0 0 1px var(--color-line-strong)`): contorno de botones ghost y chips; con `--color-line` en campos en reposo.

### Named Rules
**The Plano Por Defecto Rule.** Ninguna tarjeta, panel o mosaico lleva sombra. Si algo necesita separarse, sube un escalón de superficie o lleva un filete de 1px.

## Shapes

Tres radios: píldora completa para todo lo que se toca (botones, chips, badge, punto de estado), 1rem para contenedores con imagen o formulario (mosaicos, panel mayorista, foto del hero en escritorio) y 0.75rem para campos. Las fotos a sangre en mobile van sin radio. La foto destacada se abre de un recorte redondeado (28px, 9% de inset lateral) a rectángulo a sangre completa con el scroll. Iconos de trazo de 1.6px con extremos redondeados; logos de marca en relleno.

## Components

### Buttons
Táctiles y seguros: la píldora es la forma de la acción.
- **Shape:** píldora completa (999px), altura mínima 2.875rem (variantes compactas de 2.25–2.75rem en nav y filas de locales).
- **Primary:** relleno Blanco Vitrina con texto Negro Absoluto, peso 500, icono de WhatsApp a la izquierda cuando abre un chat.
- **Hover / Focus:** hover a blanco puro (#ffffff) solo en dispositivos con hover; al presionar escala a 0.97 con ease-out-expo en 150ms; foco con anillo azul de 2px y 3px de separación.
- **Ghost:** transparente con aro interno de 1px (line-strong); hover con velo blanco al 6%. Para "Ver locales", "Cómo llegar", "Editar datos".

### Links
- Azul Enlace con flecha de trazo; subrayado solo en hover (offset 0.2em). Flecha → para navegar dentro, ↗ para salir a otra plataforma.

### Chips
- **Style:** píldora de 2.5rem, texto Gris Segunda Voz, aro de 1px line-strong.
- **State:** seleccionado se invierte a relleno Blanco Vitrina y texto negro, sin aro. Hover sube el texto a Blanco Vitrina.

### Cards / Containers
- **Corner Style:** 1rem.
- **Background:** Grafito Medio para mosaicos de categoría; Grafito Profundo para el panel del formulario.
- **Shadow Strategy:** ninguna (ver Elevation & Depth).
- **Border:** ninguno.
- **Internal Padding:** 1.25–1.5rem en mosaicos, 1.5rem a 2.25rem en el panel.
- **Mosaico de categoría:** foto arriba con gradación común (`saturate(0.6) brightness(0.82) contrast(1.08)`), nombre y bajada abajo a la izquierda, "Consultar →" en azul abajo a la derecha. En hover la foto escala a 1.035 en 1.2s y recupera algo de color. Todo el mosaico es un enlace a WhatsApp.

### Inputs / Fields
- **Style:** fondo Grafito Medio, radio 0.75rem, altura mínima 3rem, aro interno de 1px line; etiqueta arriba en Label, "(opcional)" en Gris Nota.
- **Focus:** el aro pasa a 2px Azul Enlace; sin outline adicional.
- **Error:** aro de 2px Rojo Error y mensaje de 0.8125rem debajo, validado al salir del campo.

### Navigation
- Barra fija de 3.5rem: logotipo tipográfico a la izquierda, links en Label Gris Segunda Voz (hover a Blanco Vitrina), píldora compacta de WhatsApp a la derecha. Transparente sobre el hero; al scrollear aparece el vidrio negro y el filete inferior. En mobile, menú a pantalla completa con filas de 3.5rem en texto de 1.5rem separadas por filetes, que entra con fade y 8px de desplazamiento.

### Estado en vivo (componente firma)
- Punto de 0.5rem (gris sin dato, verde abierto, ámbar cerrado) seguido de texto Label en Gris Segunda Voz: "Abierto ahora en La Florida 219", "Cerrado · abre a las 17". Se recalcula cada minuto con la hora de Salta. El color nunca va solo: siempre acompaña al texto.

### Logotipo
- "black" en peso 700 con tracking -0.04em seguido de "salta" en peso 400 Gris Segunda Voz. Provisorio hasta recibir el logo original.

## Do's and Don'ts

### Do:
- **Do** cerrar cada sección con una acción concreta, normalmente la píldora blanca de WhatsApp al local correcto.
- **Do** escribir titulares en dos voces: afirmación en Blanco Vitrina, réplica en Gris Segunda Voz.
- **Do** separar secciones y filas con filetes de 1px (`line`) antes que con tarjetas o cambios de fondo.
- **Do** mostrar el producto fotografiado sobre negro y aplicar la gradación común a las fotos provisorias para unificar su temperatura.
- **Do** usar ease-out-expo (`cubic-bezier(0.16, 1, 0.3, 1)`) para toda transición y respetar `prefers-reduced-motion` (los efectos de scroll quedan en su estado final).
- **Do** mantener objetivos táctiles de al menos 44px y el anillo de foco azul de 2px.

### Don't:
- **Don't** poner eyebrows, kickers ni líneas chicas sobre los titulares.
- **Don't** usar blobs o fondos de gradiente decorativos, marquees, filas de métricas ni grillas de íconos con titulitos.
- **Don't** dar sombra a tarjetas, paneles o mosaicos; la única sombra es la de elementos fijos flotantes.
- **Don't** usar verde, ámbar, azul o rojo como color de marca o decoración; son estados.
- **Don't** introducir una segunda familia tipográfica ni una fuente de sistema como display.
- **Don't** comunicar el estado de un local solo con el color del punto.
