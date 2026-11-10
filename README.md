# Tocotá Aves y Naturaleza

Web informativa en español, construida con Next.js App Router y TypeScript. Entrega local, sin base de datos, autenticación ni reservas.

## Ejecutar

Requisitos: Node.js 24.13.0 y npm (se comprobó 11.6.2). `.node-version` fija la versión para Render y `engines` limita el proyecto a Node.js 24 compatible.

```sh
npm ci
npm run dev
```

Abrir http://localhost:3000. Si el puerto está ocupado, consultar el puerto que muestre Next.js.

```sh
npm run typecheck
npm run lint
npm run build
python -m http.server 4173 --bind 127.0.0.1 --directory out
```

El build genera `out/index.html`. Abrir http://127.0.0.1:4173 para revisar la exportación. El servidor local requiere Python 3 y se detiene con Ctrl+C. Se retiró `npm start` porque `next start` no corresponde a una exportación estática. Render sirve `out` directamente y no necesita Python ni Start Command.

## Organización y edición

- `src/app`: rutas, layout, estilos globales, metadatos e icono del sitio.
- `src/features/home/home-page.tsx`: composición de la portada. `src/features/home/sections.tsx`: secciones y encabezados de ubicación, presentación y comunidad.
- `src/content/home.ts`: nombre, lema, introducción, navegación, pasos, pautas de conservación y textos editoriales.
- `src/components`: cabecera, iconos, menú móvil y observador de scroll.
- `public/images`: imágenes locales WebP. Sustituirlas conservando los nombres o actualizar las rutas y textos alternativos en la página.

Los componentes son de servidor salvo el menú móvil y el observador. Las animaciones se activan progresivamente: el HTML es visible por defecto y se respeta `prefers-reduced-motion`. No hay fuentes externas ni servicios de analítica.

## Fuentes y decisiones editoriales

Se leyó el texto de las 16 diapositivas del archivo `PITCH_TOCOTA AVES Y NATURALEZA.pptx`, proporcionado desde Descargas, y el mensaje adicional del equipo. Se adaptó el pitch a visitantes, sin publicar cifras financieras, promesas operativas ni alianzas sin confirmar.

Las imágenes `bosque-tocota.webp` y `ave-ilustrativa.webp` se extrajeron respectivamente de `ppt/media/image198.png` y `ppt/media/image178.png`. Son ilustraciones del material suministrado, optimizadas a WebP, y están identificadas como ilustrativas. No se presentan como fotografías de Tocotá ni como evidencia de especies locales. No se generaron nuevas imágenes.

## Datos pendientes antes de publicar

- **Especies:** el pitch (diapositiva 9) menciona más de 180 en el área; el mensaje menciona 989 sin delimitar el territorio. Confirmar alcance geográfico, fecha, inventario y fuente de ambas cifras. Se omitieron de la web.
- **Cupos:** el pitch propone máximo 8 por recorrido; el mensaje propone 8 a 10 para traslado. Confirmar capacidad de cada servicio y relación entre ambos. Se omitieron las cifras.
- **Operación:** fecha de apertura, duración (el prototipo propone 3–4 horas), dificultad, accesibilidad, horarios, tarifas, seguros, protocolos y equipos efectivamente incluidos.
- **Transporte:** operador, cupos, punto de salida, ruta exacta y ubicación de llegada. Cali–km 18–Tocotá se muestra como esquema del pitch, no como instrucciones de navegación. El tiempo aproximado de una hora proviene del mensaje, sujeto a condiciones.
- **Actividades:** confirmar guía, degustación, participación comunitaria y actividad de conservación. No se anuncian como servicios disponibles ni alianzas formalizadas.
- **Contacto:** el pitch propone Instagram `@TocotaAves`, WhatsApp Business, eBird y Nequi. No confirma titularidad, vigencia, número telefónico ni enlaces oficiales. No se publicaron canales de contacto ni se habilitaron reservas. El CTA principal enlaza a `#recorrido`.
- **Visuales:** confirmar derechos de publicación y procedencia de las ilustraciones del pitch; sustituir preferiblemente con fotografías propias autorizadas de Tocotá. No se identificó una colección de fotos reales acreditadas.
- **SEO para publicación:** definir dominio y URL canónica; añadir `metadataBase`, URL canónica, imagen social autorizada y sitemap con el dominio definitivo. Ya se incluyen título, descripción, Open Graph, idioma e icono.

## Publicar en Render como Static Site

El proyecto está en la raíz y Git se inicializó localmente con la rama `main`, sin commits ni remoto. Esta entrega no conecta GitHub ni publica el sitio.

1. Crear en tu cuenta de GitHub un repositorio vacío, sin README, licencia ni `.gitignore` iniciales.
2. Desde esta carpeta, revisar los archivos y subir el proyecto:

   ```sh
   git status --short
   git add .
   git commit -m "Prepare Tocota static site for Render"
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

   Sustituir la URL por la de tu repositorio. El `.gitignore` excluye `node_modules`, `.next`, `out`, `.work`, `.idea`, `.env*`, `.npmrc`, claves y PowerPoint. Los documentos internos deben permanecer fuera de `public`; usar `materiales-internos/` o `internal-materials/` para documentos privados locales. El PPTX original está en Descargas; en `public/images` solo están las dos ilustraciones seleccionadas. Revisar sus derechos y los pendientes editoriales antes de publicar.

3. En Render, elegir **New → Static Site** y conectar el repositorio de GitHub. Pegar estos valores:

   | Campo | Valor |
   | --- | --- |
   | Name | `tocota-aves-naturaleza` (o uno disponible) |
   | Branch | `main` |
   | Root Directory | **Vacío**; `package.json` está en la raíz |
   | Build Command | `npm ci && npm run build` |
   | Publish Directory | `out` |
   | Start Command | **No aplica** para un Static Site |

4. Añadir **`SKIP_INSTALL_DEPS=true`** en las variables de entorno para evitar una instalación automática adicional al `npm ci` del comando. Render usa **24.13.0** desde `.node-version`; no establecer un `NODE_VERSION` distinto porque tiene prioridad. No se necesitan secretos para esta web.
5. Crear el Static Site y esperar que termine el build. Abrir la URL `https://<nombre-asignado>.onrender.com` que indique Render. El nombre exacto depende de disponibilidad. No se necesita comprar un dominio ni añadir una reescritura SPA `/* → /index.html`.
6. Comprobar portada, imágenes, anclas, menú móvil y apariciones al hacer scroll. Los cambios enviados a `main` pueden desplegarse automáticamente. Al conocer la URL definitiva, completar los metadatos canónicos y sociales pendientes.

`output: "export"` genera HTML/CSS/JS estáticos. `images.unoptimized: true` conserva `next/image` con los WebP locales, sin optimizador de servidor. El menú móvil y las animaciones siguen ejecutándose en el navegador. Subir `package-lock.json` junto con `package.json` para que `npm ci` reproduzca las dependencias.

Render ofrece Static Sites gratuitos con subdominio y HTTPS, sujetos a los límites de transferencia y minutos de compilación del plan. Documentación: [Next.js en Render](https://render.com/docs/deploy-nextjs-app), [Static Sites](https://render.com/docs/static-sites), [versión de Node.js](https://render.com/docs/node-version).

## Verificación de la entrega

- `npm ci`, `npm run build`, `npm run typecheck` y `npm run lint` completados correctamente con Node.js 24.13.0. Se comprobó que `package-lock.json` coincide con las dependencias y `engines` de `package.json`.
- Se generó `out/index.html` y se sirvió la carpeta `out` con un servidor HTTP local. Se verificaron el HTML en español, las 5 anclas internas y 11 recursos (incluidos ambos WebP, CSS, JavaScript e icono) con HTTP 200 y nombres que coinciden exactamente en mayúsculas/minúsculas. El HTML no usa `/_next/image` y la exportación no contiene PowerPoint ni archivos `.env`.
- El menú móvil, los estilos y el observador de scroll se conservaron sin cambios. Su revisión visual e interacción en navegador quedó pendiente porque la conexión de control del navegador no está disponible. No se presenta como visualmente validada en escritorio o móvil.
- `npm audit --omit=dev`: 0 vulnerabilidades. La auditoría completa reportó 7 avisos moderados relacionados con `minimatch` en la cadena de herramientas de ESLint/TypeScript; `npm audit fix` no los resolvió. Revisar las actualizaciones compatibles de estas herramientas antes de publicar.
