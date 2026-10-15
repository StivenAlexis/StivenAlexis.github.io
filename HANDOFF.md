# HANDOFF — Rediseño del portfolio (Stiven Monsalvo)

Documento para continuar el trabajo con otro modelo. Fecha: 2026-10-14.
Repo: `C:\Users\Usuario\Documents\StivenAlexis.github.io-1` (sitio estático para GitHub Pages, rama `main`).
**No se hizo ningún commit todavía**: todo está como cambios sin commitear.

## Objetivo del usuario
Mejorar el portfolio aplicando el rediseño (`Rediseño del portfolio Stiven/Portfolio.dc.html`), agregar los proyectos grandes de `C:\Users\Usuario\Documents`, destacar el trabajo con **Odoo + AWS + Terraform** (se postula a un puesto que integra Odoo con otros sistemas), quitar los proyectos simples tipo Tetris, y agregar fotos/capturas y URLs de los proyectos.

## Lo que ya está hecho

### Archivos modificados
- `index.html` — shell estático nuevo (nav, hero, about, work, skills, contact, drawer de proyecto, preview al hacer hover, modal de video). Todo el contenido dinámico se renderiza desde JS.
- `styles.css` — port del diseño (tokens: `--bg #16110e`, `--acc #e8552f`, fuentes Bricolage Grotesque + IBM Plex Mono). Responsive, `prefers-reduced-motion`, animaciones scroll-driven con `@supports`.
- `script.js` — datos + render + i18n EN/ES + drawer + video. Estructura:
  - `UI` (textos de interfaz EN/ES), `CATEGORIES` (`integration`, `ai`, `apps`), `T` (valores de meta reutilizables).
  - `PROJECTS` (11 proyectos). Cada uno: `id, category, hue, title{en,es}, tagline, description, highlights[], stack[], meta[{k,v}], links[{kind:'repo'|'demo', url, label?}], privateNote?, featured?, diagram?`.
  - `SKILLS` (9 grupos; strings neutros o pares `[en, es]`), `MARQUEE`.
  - `odooDiagram()` — SVG inline de la arquitectura de Odoo (Terraform → VPC con Odoo/Icinga/n8n → WhatsApp/Gmail).
  - Cover de los proyectos sin imagen: gradiente generado con `cover(hue)`.
- Se **eliminaron** los proyectos Tetris y Backend Testing (el usuario pidió quitar los simples).
- No se tocaron: `assets/` (CV, video `presentacion.mp4` de 103 MB, iconos, imágenes viejas sin usar), `main.css` (vacío), `package.json` (de la plantilla vieja), `README.md`.
- `Rediseño del portfolio Stiven/` sigue sin trackear; ya no hace falta.

### Proyectos incluidos (orden actual)
1. **Odoo on AWS** (destacado, categoría integration, con diagrama) — repo https://github.com/StivenAlexis/odoo-aws-terraform. Proyecto académico en equipo (UCP; el repo tiene 8 commits de JonesMartin y 2 de Stiven). Rol puesto: "Terraform e integraciones". Fuente: `Documents\odoo-aws-terraform\README.md` y `DOCUMENTACION_TP.md`.
2. **Power BI Embed Platform** — https://github.com/gonzalocandia92/powerbi-flask-embed (equipo, rol "Colaborador").
3. **Sales Chatbot POC** (Claude + Microsoft Fabric/DAX) — https://github.com/StivenAlexis/ChatbotPoc
4. **GestorIA** — link actual: repo landing https://github.com/StivenAlexis/GestorIA-web (el resto es privado).
5. **FionaLashes** — demo https://fionalashes.com.ar
6. **VetVision AI** — demo https://vetvision.com.ar + repo landing https://github.com/StivenAlexis/VetVisionPage
7. **CartControl** — demo https://carteras-omega.vercel.app (ojo: su backend en Render `cartcontrol-backend.onrender.com` devolvía 503; puede estar dormido).
8. **Turnami** — demo https://turnami.com.ar
9. **Collections Manager** (SamariaClientes, sin link a propósito: sistema interno de un cliente con datos reales)
10. **OfertaBot** (sin link: `ofertabot-ar.web.app` da 404)
11. **Licitación Exprés** — demo https://intervencion-68e04.web.app

### Verificado
- Probado con Playwright (desktop 1440 y móvil 390, EN/ES): sin errores de consola, sin overflow horizontal, drawer/filtros/teclado/links funcionan.
- Las URLs de arriba respondían 200 al momento de revisarlas (salvo las indicadas).

## Actualización (misma sesión, después del primer handoff)
**Hecho:**
- Galería de fotos en el drawer (`buildGallery()` en `script.js`, estilos `.gallery*` en `styles.css`): imagen principal 16:10 con flechas, contador y miniaturas. El hover de la lista usa la 1ª foto como fondo.
- Imágenes optimizadas (~1 MB en total, JPEG 1200×750) en `assets/images/projects/<id>/N.jpg`: gestoria (4), fiona (3), turnami (3), vetvision (4), licitacion (2), cartcontrol (3: mockups de diseño con datos ficticios + login real). Los móviles están compuestos sobre fondo de color. Se declaran en `script.js` con `gallery("<id>", [[altEN, altES], ...])`.
- GestorIA ahora tiene el botón de sitio en vivo: https://gestoriacore.com.ar.
- Probado con Playwright: 0 imágenes rotas, sin errores de consola, sin overflow en móvil.

**Sin fotos (siguen con gradiente u diagrama):** Odoo on AWS (tiene el diagrama SVG), Power BI Embed, Chatbot POC, Collections Manager (Samaria), OfertaBot. No tienen sitio público seguro. Ver opciones abajo.

## Lo que falta por hacer
1. **Revisión visual del usuario** en http://localhost:8765/index.html (si no responde: `python -m http.server 8765` en la carpeta del repo).
2. **Fotos opcionales para los 5 proyectos sin imágenes:** Odoo (levantar solo Odoo local con el `docker-compose.yml` del repo para capturar CRM/eLearning, o levantar la infra completa con Terraform —requiere instalar Terraform, credenciales AWS temporales y genera costo, pedir confirmación—); Chatbot POC (necesita API keys); Power BI Embed (necesita Azure AD); Samaria y OfertaBot (usar datos de prueba, **nunca** datos reales de clientes). Para agregarlas: guardar en `assets/images/projects/<id>/N.jpg` (1200×750) y añadir `images: gallery(...)` al proyecto en `script.js`.
3. **Limpieza opcional:** borrar `assets/images/{tetris-overview,backend-testing-overview,chase-overview}.png` y `main.css` (vacío); actualizar `README.md`; agregar `og:image` (p. ej. `assets/images/projects/gestoria/1.jpg` o una captura del hero) y Open Graph en `index.html`.
4. **Commit** solo con aprobación del usuario. Incluir `index.html`, `styles.css`, `script.js`, `assets/images/projects/**`; `HANDOFF.md` solo si lo quiere (puede borrarse).
5. Avisar: CartControl (`carteras-omega.vercel.app`) tiene backend en Render que dio 503 (dormido); el video de presentación pesa 103 MB.

## Decisiones/criterios acordados
- Quitar proyectos simples (Tetris, Backend Testing) — pedido explícito del usuario.
- Odoo/AWS/Terraform debe verse como lo más fuerte del portfolio (badge "Odoo", primer lugar, diagrama, skills de ERP/Cloud resaltadas). Sin sobredeclarar: se describe como despliegue/configuración e integración de Odoo 17, **no** desarrollo de módulos custom.
- ConsejoProfesional **no** se incluyó (repo de Arkane en Azure DevOps, sin commits de Stiven; posible trabajo de empleador).
- Proyectos de clientes con repo privado muestran "repositorio privado, código disponible a pedido" en vez de un link roto.
- Textos bilingües EN/ES; el idioma se guarda en `localStorage` (`portfolioLang`).

## Cómo probar localmente
```bash
cd C:\Users\Usuario\Documents\StivenAlexis.github.io-1
python -m http.server 8765
# abrir http://localhost:8765/index.html
```
Un servidor ya puede estar corriendo en el puerto 8765 (si no responde, relanzarlo; si el puerto está ocupado, matar el proceso previo).

## Datos útiles de los proyectos (por si hay que reescribir textos)
- FionaLashes: Fase 1 (stock) cerrada y en producción (Cloudflare Workers + Supabase); 108 tests de BD + 61 unitarios, e2e con Playwright, CI GitHub Actions; Fase 2 (tienda con pedidos por WhatsApp) especificada.
- VetVision: PFG con Lucas; Etapa 0 (tórax/no tórax) 92,45 % exactitud balanceada sobre 1.603 imágenes de validación (8.015 radiografías del Hospital de Clínicas FCV-UNNE, DenseNet vía torchxrayvision, MLflow + DVC). Stiven hizo pipeline y landing (Next.js 16, bilingüe).
- CartControl: Sprint 0 + 1 completos (auth Google+JWT, CRUD, rutas con mapa, pagos); Mercado Pago, PowerSync offline y alertas aún no implementados.
- Turnami: Next.js + Firebase, 4 specs (reservas MVP, comisiones, landing/admin, rebranding), Mercado Pago seña opcional.
- Samaria/Collections Manager: React+Vite PWA + Firebase Cloud Functions; pagos append-only con auditoría; Fase 0–1 implementadas, Fase 2 pendiente.
