/* ------------------------------------------------------------------ *
 *  Content
 * ------------------------------------------------------------------ */

const LANG_STORAGE_KEY = "portfolioLang";

const UI = {
  en: {
    pageTitle: "Stiven Monsalvo — Systems Analyst & Software Developer",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.status": "Open to new teams — ERP & integrations",
    "hero.lead":
      "Systems analyst and software developer turning business needs into <em>clear technological solutions.</em>",
    "hero.work": "See my work",
    "hero.cv": "Download CV",
    "about.eyebrow": "(01) — About",
    "about.big":
      'Systems Analyst and future Systems Engineer focused on <span class="accent">software analysis</span>, ERP integration and process improvement.',
    "about.p1":
      "I turn business needs into working systems: requirements, documentation, and the glue between tools — Odoo, APIs, webhooks and automation, deployed as code in the cloud.",
    "about.p2":
      "I have shipped real products for small businesses and academic clients, from an inventory system with 160+ automated tests to a computer-vision prototype for veterinary X-rays.",
    "about.videoLabel": "presentation / video",
    "about.videoButton": "Presentation video",
    "about.videoSub": "Meet me in a minute",
    "work.eyebrow": "(02) — Selected work",
    "work.title": "Projects",
    "work.view": "view →",
    "work.all": "All",
    "work.next": "Next project — in progress",
    "work.featured": "Odoo",
    "skills.eyebrow": "(03) — Toolkit",
    "skills.title": "What I bring to the table.",
    "contact.eyebrow": "(04) — Contact",
    "contact.title": "Let's build<br />something.",
    "contact.top": "Back to top ↑",
    "modal.close": "Close",
    "modal.prev": "Previous project",
    "modal.next": "Next project",
    "d.overview": "Overview",
    "d.highlights": "Highlights",
    "d.stack": "Built with",
    "d.nextLabel": "Next project",
    "d.architecture": "Architecture",
    "d.private": "Private repository — code available on request.",
    "d.repo": "View repository",
    "d.demo": "Visit live site",
    "k.type": "Type",
    "k.role": "Role",
    "k.status": "Status",
    "k.year": "Year",
  },
  es: {
    pageTitle: "Stiven Monsalvo — Analista de Sistemas y Desarrollador de Software",
    "nav.about": "Acerca de",
    "nav.work": "Trabajos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    "hero.status": "Abierto a nuevos equipos — ERP e integraciones",
    "hero.lead":
      "Analista de sistemas y desarrollador de software que convierte necesidades del negocio en <em>soluciones tecnológicas claras.</em>",
    "hero.work": "Ver mis trabajos",
    "hero.cv": "Descargar CV",
    "about.eyebrow": "(01) — Acerca de",
    "about.big":
      'Analista de Sistemas y futuro Ingeniero en Sistemas enfocado en <span class="accent">análisis de software</span>, integración de ERP y mejora de procesos.',
    "about.p1":
      "Convierto necesidades del negocio en sistemas que funcionan: requisitos, documentación y el pegamento entre herramientas — Odoo, APIs, webhooks y automatización, desplegado como código en la nube.",
    "about.p2":
      "Entregué productos reales para pequeños negocios y clientes académicos, desde un sistema de inventario con más de 160 pruebas automatizadas hasta un prototipo de visión por computadora para radiografías veterinarias.",
    "about.videoLabel": "presentación / video",
    "about.videoButton": "Video de presentación",
    "about.videoSub": "Conóceme en un minuto",
    "work.eyebrow": "(02) — Trabajos seleccionados",
    "work.title": "Proyectos",
    "work.view": "ver →",
    "work.all": "Todos",
    "work.next": "Próximo proyecto — en curso",
    "work.featured": "Odoo",
    "skills.eyebrow": "(03) — Herramientas",
    "skills.title": "Lo que aporto al equipo.",
    "contact.eyebrow": "(04) — Contacto",
    "contact.title": "Construyamos<br />algo.",
    "contact.top": "Volver arriba ↑",
    "modal.close": "Cerrar",
    "modal.prev": "Proyecto anterior",
    "modal.next": "Proyecto siguiente",
    "d.overview": "Resumen",
    "d.highlights": "Puntos clave",
    "d.stack": "Tecnologías",
    "d.nextLabel": "Siguiente proyecto",
    "d.architecture": "Arquitectura",
    "d.private": "Repositorio privado — código disponible a pedido.",
    "d.repo": "Ver repositorio",
    "d.demo": "Visitar sitio en vivo",
    "k.type": "Tipo",
    "k.role": "Rol",
    "k.status": "Estado",
    "k.year": "Año",
  },
};

const CATEGORIES = {
  integration: { en: "Integrations & Cloud", es: "Integraciones y cloud" },
  ai: { en: "AI & Data", es: "IA y datos" },
  apps: { en: "Web Apps", es: "Aplicaciones web" },
};

/* meta values reused across projects */
const T = {
  academicTeam: { en: "Academic team project", es: "Proyecto académico en equipo" },
  team: { en: "Team project", es: "Proyecto en equipo" },
  product: { en: "Product", es: "Producto" },
  client: { en: "Client project", es: "Proyecto para cliente" },
  poc: { en: "Proof of concept", es: "Prueba de concepto" },
  thesis: { en: "Final degree project", es: "Proyecto final de grado" },
  fullstack: { en: "Full-stack developer", es: "Desarrollador full-stack" },
  developer: { en: "Developer", es: "Desarrollador" },
  contributor: { en: "Contributor", es: "Colaborador" },
  inProgress: { en: "In development", es: "En desarrollo" },
  production: { en: "In production", es: "En producción" },
  prototype: { en: "Prototype", es: "Prototipo" },
  delivered: { en: "Delivered", es: "Entregado" },
};

/* gallery(id, [[alt en, alt es], ...]) -> assets/images/projects/<id>/1.jpg, 2.jpg, ... */
function gallery(id, alts) {
  return alts.map((a, i) => ({ src: `assets/images/projects/${id}/${i + 1}.jpg`, alt: { en: a[0], es: a[1] } }));
}

const PROJECTS = [
  {
    id: "odoo",
    category: "integration",
    featured: true,
    hue: 22,
    diagram: true,
    title: { en: "Odoo on AWS", es: "Odoo en AWS" },
    tagline: {
      en: "Odoo 17 ERP, CRM and eLearning deployed with Terraform and wired to monitoring and WhatsApp / email alerts.",
      es: "ERP, CRM y eLearning de Odoo 17 desplegados con Terraform e integrados con monitoreo y alertas por WhatsApp y email.",
    },
    description: {
      en: "Academic team project built around a real case study: a regional supermarket chain that suffered a ransomware attack and ran with no centralized system and no monitoring. We designed and deployed a complete cloud environment as code — Odoo 17 as the business platform, Icinga 2 to watch it, and n8n with Evolution API to turn any outage into an instant WhatsApp and email alert. The whole stack is reproducible with a single terraform apply.",
      es: "Proyecto académico en equipo basado en un caso real: una cadena regional de supermercados que sufrió un ataque de ransomware y operaba sin sistema centralizado ni monitoreo. Diseñamos y desplegamos como código un entorno cloud completo: Odoo 17 como plataforma de negocio, Icinga 2 para vigilarla, y n8n con Evolution API para convertir cualquier caída en una alerta inmediata por WhatsApp y email. Todo el entorno se reproduce con un único terraform apply.",
    },
    highlights: [
      {
        en: "Infrastructure as code: VPC, subnet, internet gateway, route table, three least-privilege security groups, three EC2 instances and Elastic IPs — created with apply, removed with destroy.",
        es: "Infraestructura como código: VPC, subred, internet gateway, tabla de rutas, tres security groups de mínimo privilegio, tres instancias EC2 y Elastic IPs — se crea con apply y se elimina con destroy.",
      },
      {
        en: "Odoo 17 and PostgreSQL 15 on Docker Compose with persistent volumes: CRM pipeline, eLearning for staff training, sales and inventory, CSV / Excel import-export and database backup / restore.",
        es: "Odoo 17 y PostgreSQL 15 en Docker Compose con volúmenes persistentes: pipeline de CRM, eLearning para capacitar al personal, ventas e inventario, importación y exportación CSV / Excel y backup / restore de la base.",
      },
      {
        en: "Icinga 2 checks Odoo by ping, TCP port 8069 and CPU / RAM / disk over SSH, using soft and hard states so a network blip never raises a false alarm.",
        es: "Icinga 2 verifica Odoo por ping, puerto TCP 8069 y CPU / RAM / disco por SSH, con estados soft y hard para que un microcorte de red no genere falsas alarmas.",
      },
      {
        en: "System integration: on every state change Icinga calls an n8n webhook; the workflow branches on down vs. recovered and sends WhatsApp (Evolution API) and Gmail messages.",
        es: "Integración entre sistemas: ante cada cambio de estado Icinga llama a un webhook de n8n; el flujo se bifurca entre caída y recuperación y envía mensajes por WhatsApp (Evolution API) y Gmail.",
      },
      {
        en: "Validated live: stopping the Odoo instance triggered the alert, restarting it triggered the recovery notice. Internal traffic stays on private IPs inside a single VPC.",
        es: "Validado en vivo: al detener la instancia de Odoo llegó la alerta y al reiniciarla llegó el aviso de recuperación. El tráfico interno viaja por IPs privadas dentro de una única VPC.",
      },
    ],
    stack: [
      "Odoo 17",
      "Terraform",
      "AWS EC2 / VPC",
      "Docker Compose",
      "PostgreSQL",
      "Icinga 2",
      "n8n",
      "Evolution API",
      "Webhooks",
      "Bash",
    ],
    meta: [
      { k: "k.type", v: T.academicTeam },
      { k: "k.role", v: { en: "Terraform & integrations", es: "Terraform e integraciones" } },
      { k: "k.year", v: { en: "2026", es: "2026" } },
    ],
    links: [{ kind: "repo", url: "https://github.com/StivenAlexis/odoo-aws-terraform" }],
  },
  {
    id: "powerbi",
    category: "integration",
    hue: 48,
    title: { en: "Power BI Embed Platform", es: "Plataforma Power BI Embed" },
    tagline: {
      en: "Flask platform that embeds Power BI reports behind Azure AD, with public links and a private JWT API.",
      es: "Plataforma Flask que incrusta reportes de Power BI con Azure AD, enlaces públicos y una API privada con JWT.",
    },
    description: {
      en: "A multi-tenant Flask application for embedding Microsoft Power BI reports in other products. It authenticates against Azure AD, manages tenants, workspaces and reports, generates shareable public links and exposes a private client API protected with JWT. It also tracks visits with a privacy-first approach and traces an Anthropic-powered chat flow with Langfuse. I worked on it as part of a team of developers.",
      es: "Aplicación Flask multi-tenant para incrustar reportes de Microsoft Power BI dentro de otros productos. Autentica contra Azure AD, administra tenants, workspaces y reportes, genera enlaces públicos compartibles y expone una API privada para clientes protegida con JWT. Además registra visitas con un enfoque de privacidad y traza un flujo de chat con Anthropic mediante Langfuse. Trabajé en él como parte de un equipo de desarrolladores.",
    },
    highlights: [
      {
        en: "Azure AD authentication and Power BI REST API integration for reports, datasets and workspaces.",
        es: "Autenticación con Azure AD e integración con la API REST de Power BI para reportes, datasets y workspaces.",
      },
      {
        en: "Public share links plus a private client API with client credentials and JWT.",
        es: "Enlaces públicos compartibles y una API privada para clientes con client credentials y JWT.",
      },
      {
        en: "Credentials encrypted with Fernet, automatic retry on database connection failures, Docker deployment with PostgreSQL.",
        es: "Credenciales cifradas con Fernet, reintento automático ante fallas de conexión a la base y despliegue con Docker y PostgreSQL.",
      },
      {
        en: "AI chat with tool calls and schema retrieval, traced end to end with Langfuse.",
        es: "Chat con IA con tool calls y recuperación de esquema, trazado de punta a punta con Langfuse.",
      },
    ],
    stack: ["Python", "Flask", "Power BI REST API", "Azure AD", "PostgreSQL", "Docker", "JWT", "Langfuse"],
    meta: [
      { k: "k.type", v: T.team },
      { k: "k.role", v: T.contributor },
      { k: "k.year", v: { en: "2026", es: "2026" } },
    ],
    links: [{ kind: "repo", url: "https://github.com/gonzalocandia92/powerbi-flask-embed" }],
  },
  {
    id: "chatbot",
    category: "ai",
    hue: 200,
    title: { en: "Sales Chatbot POC", es: "POC Chatbot de ventas" },
    tagline: {
      en: "Ask sales questions in plain language: Claude writes the DAX, Microsoft Fabric runs it.",
      es: "Preguntas de ventas en lenguaje natural: Claude escribe el DAX y Microsoft Fabric lo ejecuta.",
    },
    description: {
      en: "Proof of concept of a conversational assistant over a Microsoft Fabric semantic model. The user asks in free text, Claude turns the question and the model schema into a DAX query, the query runs against Fabric, and Claude answers from the real results. The generated DAX is shown under every answer so numbers can always be checked.",
      es: "Prueba de concepto de un asistente conversacional sobre un modelo semántico de Microsoft Fabric. El usuario pregunta en texto libre, Claude convierte la pregunta y el esquema del modelo en una consulta DAX, la consulta se ejecuta en Fabric y Claude responde a partir de los resultados reales. La consulta DAX generada se muestra debajo de cada respuesta para poder verificar los números.",
    },
    highlights: [
      {
        en: "Two-step flow with the Claude API and prompt caching: question → DAX → answer.",
        es: "Flujo en dos pasos con la API de Claude y prompt caching: pregunta → DAX → respuesta.",
      },
      {
        en: "MSAL device-code authentication and DAX execution against the Fabric REST API.",
        es: "Autenticación MSAL con device code y ejecución de DAX contra la API REST de Fabric.",
      },
      {
        en: "Transparent by design: the executed query is displayed, which makes hallucinated data easy to spot.",
        es: "Transparente por diseño: se muestra la consulta ejecutada, lo que permite detectar datos inventados.",
      },
    ],
    stack: ["Python", "Flask", "Claude API", "Microsoft Fabric", "DAX", "MSAL"],
    meta: [
      { k: "k.type", v: T.poc },
      { k: "k.role", v: T.developer },
      { k: "k.year", v: { en: "2026", es: "2026" } },
    ],
    links: [{ kind: "repo", url: "https://github.com/StivenAlexis/ChatbotPoc" }],
  },
  {
    id: "gestoria",
    category: "ai",
    hue: 262,
    title: { en: "GestorIA", es: "GestorIA" },
    tagline: {
      en: "Multi-tenant AI backend and admin panel to plug an assistant into any business's WhatsApp or website.",
      es: "Backend de IA multi-tenant y panel de administración para conectar un asistente al WhatsApp o la web de cualquier negocio.",
    },
    description: {
      en: "White-label SaaS infrastructure. Each client company is just a Firestore document with its own API key and system prompt, so onboarding a new business needs no deploy. A FastAPI core exposes one chat endpoint that any channel — a WhatsApp bot, a web widget — can call, and stores conversations per tenant. A Next.js admin panel lets the team manage companies and moderate generated marketing content, always through the API so client keys never reach the browser.",
      es: "Infraestructura SaaS de marca blanca. Cada empresa cliente es solo un documento en Firestore con su propia API key y prompt de sistema, por lo que dar de alta un negocio no requiere deploy. Un núcleo en FastAPI expone un único endpoint de chat que puede llamar cualquier canal (un bot de WhatsApp, un widget web) y guarda las conversaciones por tenant. Un panel en Next.js permite gestionar empresas y moderar el contenido de marketing generado, siempre a través de la API para que las claves de los clientes nunca lleguen al navegador.",
    },
    highlights: [
      {
        en: "API-key middleware with strict per-tenant isolation; a client can be switched off live.",
        es: "Middleware de API key con aislamiento estricto por tenant; un cliente puede desactivarse en caliente.",
      },
      {
        en: "Channel-agnostic design: text in, text out — the same backend serves WhatsApp, web and more.",
        es: "Diseño agnóstico al canal: texto de entrada, texto de salida — el mismo backend sirve a WhatsApp, web y más.",
      },
      {
        en: "Admin panel with a staff allowlist and server-side proxy routes; Content Studio approve / reject workflow.",
        es: "Panel con allowlist de personal y rutas proxy del lado del servidor; flujo de aprobar / rechazar en Content Studio.",
      },
      {
        en: "Public landing page, deployed alongside the core API on Render and Vercel.",
        es: "Landing page pública, desplegada junto al core API en Render y Vercel.",
      },
    ],
    stack: ["Python", "FastAPI", "Firestore", "Gemini API", "Next.js", "TypeScript", "Tailwind", "Render", "Vercel"],
    meta: [
      { k: "k.type", v: T.product },
      { k: "k.role", v: T.fullstack },
      { k: "k.year", v: { en: "2026", es: "2026" } },
    ],
    images: gallery("gestoria", [
      ["GestorIA landing hero with a control panel mockup", "Hero de la landing de GestorIA con un mockup del panel de control"],
      ["The three modules: messaging, Content Studio and assisted ads", "Los tres módulos: mensajería, Content Studio y anuncios asistidos"],
      ["A day with GestorIA timeline section", "Sección con la línea de tiempo de un día con GestorIA"],
      ["Mobile view of the landing page", "Vista móvil de la landing"],
    ]),
    links: [
      { kind: "demo", url: "https://gestoriacore.com.ar" },
      { kind: "repo", label: { en: "Landing repository", es: "Repositorio de la landing" }, url: "https://github.com/StivenAlexis/GestorIA-web" },
    ],
    privateNote: true,
  },
  {
    id: "fiona",
    category: "apps",
    hue: 335,
    title: { en: "FionaLashes", es: "FionaLashes" },
    tagline: {
      en: "Inventory and online store for a beauty-supplies brand, with one source of truth for stock.",
      es: "Inventario y tienda online para una marca de insumos de belleza, con una única fuente de verdad del stock.",
    },
    description: {
      en: "Stock-first system built spec-driven, with three approval gates (requirements, design, tasks) before any code. Phase 1 — inventory — is closed and in production: twelve screens, six write functions that always leave a movement record, money in integer cents and stock that can never go negative. Phase 2, a public catalog with WhatsApp-confirmed orders, is fully specified.",
      es: "Sistema centrado en el stock desarrollado guiado por specs, con tres puertas de aprobación (requisitos, diseño, tareas) antes de escribir código. La Fase 1 — inventario — está cerrada y en producción: doce pantallas, seis funciones de escritura que siempre dejan un movimiento, dinero en centavos enteros y stock que nunca puede ser negativo. La Fase 2, un catálogo público con pedidos confirmados por WhatsApp, está completamente especificada.",
    },
    highlights: [
      {
        en: "108 database tests plus 61 unit tests, all green, and a Playwright end-to-end flow that creates and cleans its own data.",
        es: "108 tests de base de datos más 61 unitarios, todos en verde, y un flujo end-to-end con Playwright que crea y limpia sus propios datos.",
      },
      {
        en: "Schema, security, integrity checks and low-stock alerts implemented and tested in the database layer.",
        es: "Esquema, seguridad, controles de integridad y alertas de stock bajo implementados y probados en la capa de base de datos.",
      },
      {
        en: "Deployed on Cloudflare Workers with a cloud Supabase project and CI on GitHub Actions.",
        es: "Desplegado en Cloudflare Workers con un proyecto de Supabase en la nube y CI en GitHub Actions.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Cloudflare Workers", "Playwright", "Vitest", "GitHub Actions"],
    meta: [
      { k: "k.type", v: T.client },
      { k: "k.role", v: T.fullstack },
      { k: "k.status", v: T.production },
    ],
    images: gallery("fiona", [
      ["FionaLashes storefront home with categories and featured products", "Inicio de la tienda FionaLashes con categorías y destacados"],
      ["Product catalog with stock badges and add-to-cart buttons", "Catálogo de productos con indicador de stock y botón de agregar"],
      ["Mobile storefront", "Tienda en versión móvil"],
    ]),
    links: [{ kind: "demo", url: "https://fionalashes.com.ar" }],
    privateNote: true,
  },
  {
    id: "vetvision",
    category: "ai",
    hue: 175,
    title: { en: "VetVision AI", es: "VetVision AI" },
    tagline: {
      en: "AI-assisted radiology for dogs and cats, with a first-stage classifier at 92.45% balanced accuracy.",
      es: "Radiología asistida por IA para perros y gatos, con un clasificador de primera etapa al 92,45 % de exactitud balanceada.",
    },
    description: {
      en: "Final degree project built with a teammate, aimed at a real Latin American market. A cascade of models: stage 0 filters thorax from non-thorax X-rays, later stages triage healthy vs. unhealthy and classify the pathology. Stage 0 was trained on 8,015 real radiographs from a veterinary teaching hospital and reaches 92.45% balanced accuracy on 1,603 images the model never saw, after partial fine-tuning of a DenseNet backbone. I also built the bilingual landing page. Academic prototype — not a certified medical device.",
      es: "Proyecto final de grado desarrollado con un compañero, pensado para un mercado real de Latinoamérica. Una cascada de modelos: la etapa 0 separa radiografías de tórax de las que no lo son, y las siguientes hacen triaje sano / no sano y clasifican la patología. La etapa 0 se entrenó con 8.015 radiografías reales de un hospital veterinario universitario y alcanza 92,45 % de exactitud balanceada sobre 1.603 imágenes nunca vistas, tras un fine-tuning parcial de un backbone DenseNet. También construí la landing page bilingüe. Prototipo académico — no es un dispositivo médico certificado.",
    },
    highlights: [
      {
        en: "Three documented training runs: the second stalled at 85%, which showed the limit was model capacity, so the third unfroze part of the network and reached 92.45%.",
        es: "Tres entrenamientos documentados: el segundo se estancó en 85 %, lo que mostró que el límite era la capacidad del modelo; el tercero descongeló parte de la red y llegó a 92,45 %.",
      },
      {
        en: "Reproducible ML workflow with MLflow experiment tracking, DVC data versioning and fixed validation splits.",
        es: "Flujo de ML reproducible con MLflow para seguimiento de experimentos, DVC para versionar datos y particiones de validación fijas.",
      },
      {
        en: "Next.js 16 + Tailwind landing page, bilingual ES / EN, with an interactive radiograph viewer.",
        es: "Landing en Next.js 16 + Tailwind, bilingüe ES / EN, con un visor interactivo de radiografías.",
      },
    ],
    stack: ["Python", "PyTorch", "torchxrayvision", "MLflow", "DVC", "Flask", "Next.js", "Tailwind"],
    meta: [
      { k: "k.type", v: T.thesis },
      { k: "k.role", v: { en: "ML pipeline & landing", es: "Pipeline de ML y landing" } },
      { k: "k.status", v: T.inProgress },
    ],
    images: gallery("vetvision", [
      ["VetVision AI landing hero", "Hero de la landing de VetVision AI"],
      ["Interactive radiograph viewer with detected findings", "Visor interactivo de radiografías con hallazgos detectados"],
      ["From radiograph to report in four steps", "De la radiografía al informe en cuatro pasos"],
      ["Mobile landing page", "Landing en versión móvil"],
    ]),
    links: [
      { kind: "demo", url: "https://vetvision.com.ar" },
      { kind: "repo", label: { en: "Landing repository", es: "Repositorio de la landing" }, url: "https://github.com/StivenAlexis/VetVisionPage" },
    ],
    privateNote: true,
  },
  {
    id: "cartcontrol",
    category: "apps",
    hue: 130,
    title: { en: "CartControl", es: "CartControl" },
    tagline: {
      en: "Multi-company PWA to manage installment-credit portfolios and field collectors.",
      es: "PWA multi-empresa para gestionar carteras de créditos en cuotas y cobradores en campo.",
    },
    description: {
      en: "SaaS for the Argentine market. Owners manage clients, credits and daily, weekly or monthly installments, while collectors record payments from the field with a daily route on a map, balance validation and mandatory photo evidence above a threshold. Personal data is encrypted at field level, subscriptions are designed to bill through Mercado Pago and the collector app is designed offline-first. Built from a written specification, sprint by sprint.",
      es: "SaaS para el mercado argentino. Los jefes gestionan clientes, créditos y cuotas diarias, semanales o mensuales, mientras los cobradores registran pagos en campo con una ruta diaria en mapa, validación de saldo y foto obligatoria por encima de un monto. Los datos personales se cifran a nivel de campo, las suscripciones están pensadas para cobrarse con Mercado Pago y la app del cobrador es offline-first por diseño. Construido a partir de una especificación escrita, sprint por sprint.",
    },
    highlights: [
      {
        en: "Google sign-in with its own JWT and a role hierarchy: platform admin → owner → collector.",
        es: "Login con Google y JWT propio con jerarquía de roles: administrador de plataforma → jefe → cobrador.",
      },
      {
        en: "AES-256 field encryption for personal data; decrypted values are never logged.",
        es: "Cifrado AES-256 de datos personales a nivel de campo; los valores descifrados nunca se loguean.",
      },
      {
        en: "PostgreSQL prepared with logical replication for upcoming offline sync with PowerSync.",
        es: "PostgreSQL preparado con replicación lógica para la próxima sincronización offline con PowerSync.",
      },
    ],
    stack: ["React", "Vite", "TypeScript", "Tailwind", "Node.js", "Express", "Prisma", "PostgreSQL", "Docker"],
    meta: [
      { k: "k.type", v: T.product },
      { k: "k.role", v: T.fullstack },
      { k: "k.status", v: T.inProgress },
    ],
    images: gallery("cartcontrol", [
      ["Mobile app: owner dashboard, collector route and payment registration", "App móvil: panel del jefe, ruta del cobrador y registro de pago"],
      ["Desktop login screen", "Pantalla de ingreso en escritorio"],
      ["Mobile login screen", "Pantalla de ingreso en móvil"],
    ]),
    links: [{ kind: "demo", url: "https://carteras-omega.vercel.app" }],
    privateNote: true,
  },
  {
    id: "turnami",
    category: "apps",
    hue: 85,
    title: { en: "Turnami", es: "Turnami" },
    tagline: {
      en: "Appointment booking for service businesses — one codebase for every trade.",
      es: "Gestión de turnos para negocios de servicios — un solo código para todos los rubros.",
    },
    description: {
      en: "Booking app for car washes, beauty studios, barbershops and similar businesses in northeast Argentina. The trade is a data preset, not a fork, so one codebase serves every vertical. Mobile-first installable web app with optional deposits through Mercado Pago and WhatsApp confirmations via prefilled links. Developed with Spec-Driven Development across four specs: booking MVP, commissions account, landing and admin, rebranding.",
      es: "App de turnos para lavaderos, estética, barberías y negocios similares del NEA. El rubro es un preset de datos, no un fork, así que un solo código sirve a todas las verticales. Web mobile-first instalable, con seña opcional vía Mercado Pago y confirmaciones por WhatsApp con enlaces prellenados. Desarrollado con Spec-Driven Development en cuatro specs: MVP de reservas, cuenta de comisiones, landing y admin, rebranding.",
    },
    highlights: [
      {
        en: "Design handoff followed to the letter: screens, tokens and motion recreated in Next.js + Tailwind.",
        es: "Handoff de diseño seguido al pie de la letra: pantallas, tokens y movimiento recreados en Next.js + Tailwind.",
      },
      {
        en: "Spec-first workflow: every task traces back to a spec and is closed only when it runs end to end.",
        es: "Flujo spec-first: cada tarea responde a una spec y se cierra recién cuando corre de punta a punta.",
      },
      {
        en: "Cloud Functions with unit and integration tests.",
        es: "Cloud Functions con tests unitarios y de integración.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Firebase", "Cloud Functions", "Mercado Pago", "Vitest", "Vercel"],
    meta: [
      { k: "k.type", v: T.product },
      { k: "k.role", v: T.fullstack },
      { k: "k.status", v: T.inProgress },
    ],
    images: gallery("turnami", [
      ["Turnami landing page with a booking-page mockup on a phone", "Landing de Turnami con el mockup de una página de reservas en el celular"],
      ["How it works and the trades it supports", "Cómo funciona y los rubros que soporta"],
      ["Mobile landing page", "Landing en versión móvil"],
    ]),
    links: [{ kind: "demo", url: "https://turnami.com.ar" }],
    privateNote: true,
  },
  {
    id: "collections",
    category: "apps",
    hue: 10,
    title: { en: "Collections Manager", es: "Gestor de cobranzas" },
    tagline: {
      en: "Customer accounts, installments and an offline-capable collector app for an equipment retailer.",
      es: "Cuentas de clientes, cuotas y una app de cobrador con soporte offline para un comercio de equipamiento.",
    },
    description: {
      en: "Back-office and field app for a retailer that sells on installments. The office manages customers, financing and invoices — PDFs for cash and financed sales — while collectors get a mobile app with their daily route, collected and not-collected visits, receipts, their own cash balance and account settlement. Payments are append-only and written exclusively by Cloud Functions, leaving an audit trail.",
      es: "Back-office y app de campo para un comercio que vende en cuotas. La oficina gestiona clientes, financiación y facturas — PDF para ventas de contado y financiadas — y los cobradores tienen una app móvil con su ruta diaria, visitas con y sin cobro, comprobantes, su propia caja y rendición de cuenta. Los pagos son append-only y los escriben exclusivamente Cloud Functions, dejando auditoría.",
    },
    highlights: [
      {
        en: "Append-only payments with audit trail; weekly due dates roll from Sunday to Monday.",
        es: "Pagos append-only con auditoría; el vencimiento semanal pasa de domingo a lunes.",
      },
      {
        en: "Daily route generation per collector and an end-of-day close with office review.",
        es: "Generación diaria de la ruta por cobrador y cierre del día con revisión en la oficina.",
      },
      {
        en: "Collector PWA served under /cobrador/ with photos stored on the phone and uploaded when there is signal.",
        es: "PWA del cobrador servida en /cobrador/, con fotos guardadas en el teléfono y subidas cuando hay señal.",
      },
    ],
    stack: ["React", "Vite", "PWA", "Firebase", "Cloud Functions", "Firestore", "Node.js"],
    meta: [
      { k: "k.type", v: T.client },
      { k: "k.role", v: T.fullstack },
      { k: "k.status", v: T.inProgress },
    ],
    links: [],
    privateNote: true,
  },
  {
    id: "ofertabot",
    category: "ai",
    hue: 300,
    title: { en: "OfertaBot", es: "OfertaBot" },
    tagline: {
      en: "Deal finder that tracks Mercado Libre prices, saves alerts and prepares affiliate posts.",
      es: "Buscador de ofertas que sigue precios de Mercado Libre, guarda alertas y prepara publicaciones afiliadas.",
    },
    description: {
      en: "Web bot that compares Mercado Libre offers, stores user price alerts and prepares affiliate posts for Telegram. Built on Firebase — Hosting, Cloud Functions v2, Firestore and an hourly Cloud Scheduler job — and designed around free-tier limits: 15-minute search cache, at most 300 monitored alerts (7,200 daily writes against a 20,000 quota) and price history written only when the price changes.",
      es: "Bot web que compara ofertas de Mercado Libre, guarda alertas de precio de los usuarios y prepara publicaciones afiliadas para Telegram. Construido sobre Firebase — Hosting, Cloud Functions v2, Firestore y una tarea horaria de Cloud Scheduler — y diseñado en torno a los límites del plan gratuito: caché de búsquedas de 15 minutos, máximo 300 alertas monitoreadas (7.200 escrituras diarias frente a una cuota de 20.000) e historial de precios solo cuando el precio cambia.",
    },
    highlights: [
      {
        en: "Cost-aware architecture with explicit usage controls and budget alerts.",
        es: "Arquitectura consciente del costo, con controles de uso explícitos y alertas de presupuesto.",
      },
      {
        en: "Admin operations gated by Google Sign-In and an email allowlist.",
        es: "Operaciones de administración protegidas con Google Sign-In y una allowlist de correos.",
      },
    ],
    stack: ["Node.js", "Firebase Functions", "Firestore", "Cloud Scheduler", "Telegram Bot API"],
    meta: [
      { k: "k.type", v: { en: "Personal project", es: "Proyecto personal" } },
      { k: "k.role", v: T.fullstack },
      { k: "k.status", v: T.prototype },
    ],
    links: [],
    privateNote: true,
  },
  {
    id: "licitacion",
    category: "apps",
    hue: 240,
    title: { en: "Licitación Exprés", es: "Licitación Exprés" },
    tagline: {
      en: "Real-time web game for a live classroom session, with a projector view and a jury panel.",
      es: "Juego web en tiempo real para una clase en vivo, con vista de proyector y panel de jurado.",
    },
    description: {
      en: "Single-page web built for a live classroom intervention. Students join without signing up, pick their group and a catalog option, load the TCO and answer a crisis scenario. The facilitator deals cards from a PIN-protected panel and projects a live leaderboard, while teachers score each consultancy on four criteria and the projector shows the average.",
      es: "Web de una sola página creada para una intervención en clase. Los alumnos entran sin registrarse, eligen su grupo y una opción del catálogo, cargan el TCO y responden un escenario de crisis. El facilitador reparte cartas desde un panel con PIN y proyecta una tabla en vivo, mientras los docentes puntúan cada consultora en cuatro criterios y el proyector muestra el promedio.",
    },
    highlights: [
      {
        en: "Four synchronized views — students, projector, facilitator and jury — over Firestore real-time updates.",
        es: "Cuatro vistas sincronizadas — alumnos, proyector, facilitador y jurado — sobre actualizaciones en tiempo real de Firestore.",
      },
      {
        en: "Deployed on Firebase Hosting with Firestore security rules.",
        es: "Desplegado en Firebase Hosting con reglas de seguridad de Firestore.",
      },
    ],
    stack: ["JavaScript", "Firestore", "Firebase Hosting"],
    meta: [
      { k: "k.type", v: { en: "Educational project", es: "Proyecto educativo" } },
      { k: "k.role", v: T.fullstack },
      { k: "k.status", v: T.delivered },
    ],
    images: gallery("licitacion", [
      ["Student screen: pick a group and a consultancy name", "Pantalla del alumno: elegir grupo y nombre de la consultora"],
      ["Mobile view for students", "Vista móvil para alumnos"],
    ]),
    links: [{ kind: "demo", url: "https://intervencion-68e04.web.app" }],
    privateNote: true,
  },
];

/* skills: plain strings are language-neutral; [en, es] pairs are translated */
const SKILLS = [
  {
    hot: true,
    title: { en: "ERP & Integrations", es: "ERP e integraciones" },
    items: ["Odoo 17", ["REST APIs", "APIs REST"], "Webhooks", "n8n", "Evolution API", "Power BI", "Microsoft Fabric"],
  },
  {
    hot: true,
    title: { en: "Cloud & DevOps", es: "Cloud y DevOps" },
    items: ["AWS (EC2, VPC)", "Terraform", "Docker", "Docker Compose", "Icinga 2", "GitHub Actions", "Firebase", "Vercel", "Cloudflare Workers"],
  },
  {
    title: { en: "Programming & Development", es: "Programación y desarrollo" },
    items: ["Python", "TypeScript", "JavaScript", "Node.js", "Java", "React", "Next.js", "Flask", "FastAPI", "Tailwind", "HTML", "CSS"],
  },
  {
    title: { en: "Databases", es: "Bases de datos" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firestore", "Supabase"],
  },
  {
    title: { en: "AI & Data", es: "IA y datos" },
    items: ["Claude API", "Gemini API", ["Prompt design", "Diseño de prompts"], "PyTorch", "MLflow", "DAX"],
  },
  {
    title: { en: "Testing", es: "Pruebas" },
    items: ["Playwright", "Vitest", "Jest", "Pytest", ["Test Automation", "Automatización de pruebas"], ["Unit Testing", "Pruebas unitarias"]],
  },
  {
    title: { en: "Project Management & Methodologies", es: "Gestión de proyectos y metodologías" },
    items: [
      "Scrum",
      "Kanban",
      ["Spec-Driven Development", "Desarrollo guiado por specs"],
      ["Test Cases", "Casos de prueba"],
      ["Acceptance Criteria", "Criterios de aceptación"],
      "PERT",
      "CPM",
    ],
  },
  {
    title: { en: "Tools", es: "Herramientas" },
    items: ["Git", "GitHub", "Jira", "Trello", "Mermaid"],
  },
  {
    title: { en: "Soft Skills", es: "Habilidades blandas" },
    items: [
      ["Analytical Thinking", "Pensamiento analítico"],
      ["Problem Solving", "Resolución de problemas"],
      ["Teamwork", "Trabajo en equipo"],
      ["Adaptability", "Adaptabilidad"],
      ["Communication", "Comunicación"],
    ],
  },
];

const MARQUEE = [
  "Odoo", "Terraform", "AWS", "Docker", "n8n", "Icinga", "Webhooks", "Python", "TypeScript",
  "Next.js", "React", "Firebase", "PostgreSQL", "Power BI", "Claude API", "Playwright",
];

/* ------------------------------------------------------------------ *
 *  State & helpers
 * ------------------------------------------------------------------ */

let lang = "en";
let filter = "all";
let openIdx = null;
let lastFocus = null;

const $ = (sel) => document.querySelector(sel);
const pad = (n) => String(n).padStart(2, "0");
const L = (obj) => (obj && typeof obj === "object" ? obj[lang] : obj);
const ui = (key) => UI[lang][key] ?? key;

function el(tag, props = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (v == null) continue;
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) if (c) node.append(c);
  return node;
}

const cover = (h) =>
  `radial-gradient(120% 90% at 20% 10%, oklch(0.55 0.14 ${h} / .9), transparent 60%), ` +
  `radial-gradient(90% 80% at 90% 100%, oklch(0.35 0.1 ${h + 40}), transparent 70%), ` +
  `repeating-linear-gradient(90deg, rgba(255,255,255,.05) 0 1px, transparent 1px 40px), #1d1210`;

function getStoredLang() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === "en" || saved === "es") return saved;
  } catch (_) {}
  return navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

/* ------------------------------------------------------------------ *
 *  Rendering
 * ------------------------------------------------------------------ */

function renderMarquee() {
  const track = $("#marquee");
  track.replaceChildren();
  for (const m of [...MARQUEE, ...MARQUEE]) {
    track.append(el("span", { class: "marquee__item" }, [m, el("i", { text: "✦" })]));
  }
}

function renderFilters() {
  const box = $("#filters");
  box.replaceChildren();
  const cats = ["all", ...Object.keys(CATEGORIES)];
  for (const c of cats) {
    const count = c === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length;
    box.append(
      el(
        "button",
        {
          type: "button",
          class: "chip",
          "aria-pressed": String(filter === c),
          onclick: () => {
            filter = c;
            renderFilters();
            renderProjects();
          },
        },
        [c === "all" ? ui("work.all") : L(CATEGORIES[c]), el("span", { text: String(count) })]
      )
    );
  }
}

function renderProjects() {
  $("#project-count").textContent = pad(PROJECTS.length);
  const list = $("#project-list");
  list.replaceChildren();
  PROJECTS.forEach((p, i) => {
    if (filter !== "all" && p.category !== filter) return;
    const meta = el("span", { class: "prow__meta" }, [
      p.featured ? el("span", { class: "prow__badge", text: ui("work.featured") }) : null,
      el("span", { text: L(CATEGORIES[p.category]) }),
      el("span", { text: "·" }),
      el("span", { text: L(p.tagline) }),
    ]);
    const row = el(
      "button",
      {
        type: "button",
        class: "prow reveal",
        onclick: () => openProject(i),
        onmouseenter: () => showPreview(p),
        onmouseleave: hidePreview,
      },
      [
        el("span", { class: "prow__num", text: pad(i + 1) }),
        el("span", { class: "prow__main" }, [el("span", { class: "prow__title", text: L(p.title) }), meta]),
        el("span", { class: "prow__arrow", "aria-hidden": "true", text: "↗" }),
      ]
    );
    list.append(row);
  });
  list.append(
    el("div", { class: "prow prow--next" }, [
      el("span", { class: "prow__num", text: pad(PROJECTS.length + 1) }),
      el("span", { class: "prow__title", text: ui("work.next") }),
    ])
  );
}

function renderSkills() {
  const grid = $("#skills-grid");
  grid.replaceChildren();
  SKILLS.forEach((g, i) => {
    const items = g.items.map((it) => el("li", { text: Array.isArray(it) ? (lang === "es" ? it[1] : it[0]) : it }));
    grid.append(
      el("div", { class: "sgroup reveal" + (g.hot ? " sgroup--hot" : "") }, [
        el("div", { class: "sgroup__head" }, [
          el("span", { class: "sgroup__title", text: L(g.title) }),
          el("span", { class: "sgroup__num", text: pad(i + 1) }),
        ]),
        el("ul", { class: "sgroup__items" }, items),
      ])
    );
  });
}

/* architecture diagram for the Odoo project (inline SVG, themed via CSS variables) */
function odooDiagram() {
  const legend =
    lang === "es"
      ? ["1  ping · TCP 8069 · CPU/RAM/disco por SSH", "2  webhook ante cada cambio de estado", "3  alerta por WhatsApp y Gmail (caída y recuperación)"]
      : ["1  ping · TCP 8069 · CPU/RAM/disk over SSH", "2  webhook on every state change", "3  WhatsApp and Gmail alert (outage and recovery)"];
  const badge = (x, y, n) =>
    `<circle cx="${x}" cy="${y}" r="10" class="dg-box dg-box--acc"/><text x="${x}" y="${y + 4}" text-anchor="middle" class="dg-s" style="fill:var(--ink)">${n}</text>`;
  const node = (x, y, w, h, t, s1, s2, acc) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="dg-box${acc ? " dg-box--acc" : ""}"/>` +
    `<text x="${x + w / 2}" y="${y + 30}" text-anchor="middle" class="dg-t">${t}</text>` +
    `<text x="${x + w / 2}" y="${y + 48}" text-anchor="middle" class="dg-s">${s1}</text>` +
    (s2 ? `<text x="${x + w / 2}" y="${y + 63}" text-anchor="middle" class="dg-s">${s2}</text>` : "");
  return `
<svg viewBox="0 0 720 340" role="img" aria-label="Odoo, Icinga and n8n architecture on AWS" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="dg-arrow"/></marker></defs>
  <rect x="20" y="8" width="150" height="38" rx="19" class="dg-box dg-box--acc"/>
  <text x="95" y="32" text-anchor="middle" class="dg-t" style="font-size:14px">Terraform · main.tf</text>
  <path d="M95 46V74" class="dg-line" marker-end="url(#ah)"/>
  <rect x="20" y="74" width="530" height="190" rx="14" class="dg-zone"/>
  <text x="34" y="94" class="dg-s">AWS · VPC 10.0.0.0/16 · sa-east-1</text>
  ${node(40, 118, 130, 100, "Odoo 17", "CRM · eLearning", "Sales · Inventory", true)}
  ${node(220, 118, 130, 100, "Icinga 2", "monitoring", "Icinga Web 2", false)}
  ${node(400, 118, 130, 100, "n8n", "workflow engine", "+ Evolution API", false)}
  <path d="M220 168H176" class="dg-line" marker-end="url(#ah)"/>
  <path d="M350 168H394" class="dg-line" marker-end="url(#ah)"/>
  ${badge(198, 150, 1)}
  ${badge(372, 150, 2)}
  <path d="M530 150L586 134" class="dg-line" marker-end="url(#ah)"/>
  <path d="M530 186L586 204" class="dg-line" marker-end="url(#ah)"/>
  ${badge(560, 156, 3)}
  <rect x="590" y="108" width="110" height="52" rx="10" class="dg-box"/>
  <text x="645" y="140" text-anchor="middle" class="dg-t">WhatsApp</text>
  <rect x="590" y="180" width="110" height="52" rx="10" class="dg-box"/>
  <text x="645" y="212" text-anchor="middle" class="dg-t">Gmail</text>
  <text x="40" y="286" class="dg-s">${legend[0]}</text>
  <text x="40" y="304" class="dg-s">${legend[1]}</text>
  <text x="40" y="322" class="dg-s">${legend[2]}</text>
</svg>`;
}

function buildGallery(p) {
  let cur = 0;
  const img = el("img", { decoding: "async" });
  const count = el("span", { class: "gallery__count mono" });
  const thumbs = p.images.map((im, i) =>
    el("button", { type: "button", class: "gallery__thumb", "aria-label": `${i + 1} / ${p.images.length}`, onclick: () => show(i) }, [
      el("img", { src: im.src, alt: "", loading: "lazy", decoding: "async" }),
    ])
  );
  function show(i) {
    cur = (i + p.images.length) % p.images.length;
    img.src = p.images[cur].src;
    img.alt = L(p.images[cur].alt);
    count.textContent = `${pad(cur + 1)} / ${pad(p.images.length)}`;
    thumbs.forEach((t, k) => t.setAttribute("aria-current", String(k === cur)));
  }
  const nav = (dir, label, glyph) =>
    el("button", { type: "button", class: `gallery__nav gallery__nav--${dir < 0 ? "prev" : "next"}`, "aria-label": label, onclick: () => show(cur + dir), text: glyph });
  const wrap = el("div", { class: "gallery" }, [
    el("div", { class: "gallery__main" }, [img, count, nav(-1, ui("modal.prev"), "‹"), nav(1, ui("modal.next"), "›")]),
    el("div", { class: "gallery__thumbs" }, thumbs),
  ]);
  show(0);
  return wrap;
}

function renderDrawer() {
  if (openIdx == null) return;
  const p = PROJECTS[openIdx];
  const next = PROJECTS[(openIdx + 1) % PROJECTS.length];
  $("#drawer-count").textContent = `${pad(openIdx + 1)} / ${pad(PROJECTS.length)}`;

  const coverBlock = p.diagram
    ? el("div", { class: "d-cover d-cover--diagram", html: odooDiagram() })
    : p.images
    ? buildGallery(p)
    : el("div", { class: "d-cover" }, [
        el("div", { style: `position:absolute;inset:0;background:${cover(p.hue)}` }),
        el("span", { class: "d-cover__mark", text: `${pad(openIdx + 1)} · ${L(p.title)}` }),
      ]);

  const links = el("div", { class: "d-links" });
  for (const lk of p.links) {
    if (lk.kind === "demo") {
      links.append(el("a", { class: "btn btn--primary", href: lk.url, target: "_blank", rel: "noopener noreferrer", text: `${ui("d.demo")} ↗` }));
    } else {
      links.append(
        el("a", {
          class: "btn " + (p.links.some((x) => x.kind === "demo") ? "btn--ghost" : "btn--primary"),
          href: lk.url,
          target: "_blank",
          rel: "noopener noreferrer",
          text: `${lk.label ? L(lk.label) : ui("d.repo")} ↗`,
        })
      );
    }
  }
  if (p.privateNote) links.append(el("span", { class: "d-private", text: ui("d.private") }));

  const section = (label, content) =>
    el("div", { class: "d-sec" }, [el("span", { class: "d-label", text: label }), content]);

  const body = $("#drawer-body");
  body.replaceChildren(
    el("div", { class: "d-head" }, [
      el("span", { class: "d-cat", text: L(CATEGORIES[p.category]) }),
      el("h3", { class: "d-title", id: "drawer-title", text: L(p.title) }),
      el("p", { class: "d-tag", text: L(p.tagline) }),
    ]),
    coverBlock,
    el(
      "dl",
      { class: "d-meta" },
      p.meta.map((m) => el("div", {}, [el("dt", { text: ui(m.k) }), el("dd", { text: L(m.v) })]))
    ),
    section(ui("d.overview"), el("p", { class: "d-desc", text: L(p.description) })),
    section(
      ui("d.highlights"),
      el(
        "ol",
        { class: "d-hl" },
        p.highlights.map((h, i) => el("li", {}, [el("span", { text: pad(i + 1) }), el("div", { text: L(h) })]))
      )
    ),
    section(ui("d.stack"), el("div", { class: "d-stack" }, p.stack.map((s) => el("span", { text: s })))),
    links.children.length ? links : null,
    el("button", { type: "button", class: "d-next", onclick: () => step(1) }, [
      el("span", { class: "d-label", text: ui("d.nextLabel") }),
      el("strong", { text: `${L(next.title)} →` }),
    ])
  );
}

/* ------------------------------------------------------------------ *
 *  Drawer, preview, video
 * ------------------------------------------------------------------ */

const drawer = $("#drawer");
const backdrop = $("#backdrop");
const preview = $("#preview");

function openProject(i) {
  hidePreview();
  if (openIdx == null) lastFocus = document.activeElement;
  openIdx = i;
  renderDrawer();
  drawer.scrollTop = 0;
  drawer.classList.add("on");
  backdrop.classList.add("on");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  $("#drawer-close").focus({ preventScroll: true });
}

function closeProject() {
  if (openIdx == null) return;
  openIdx = null;
  drawer.classList.remove("on");
  backdrop.classList.remove("on");
  drawer.setAttribute("aria-hidden", "true");
  if (videoModal.hidden) document.body.classList.remove("locked");
  lastFocus?.focus?.({ preventScroll: true });
}

function step(d) {
  if (openIdx == null) return;
  openIdx = (openIdx + d + PROJECTS.length) % PROJECTS.length;
  renderDrawer();
  drawer.scrollTo({ top: 0, behavior: "smooth" });
}

function showPreview(p) {
  $("#preview-bg").style.background = p.images ? `url("${p.images[0].src}") center / cover` : cover(p.hue);
  $("#preview-title").textContent = L(p.title);
  preview.classList.add("on");
}
function hidePreview() {
  preview.classList.remove("on");
}

window.addEventListener("mousemove", (e) => {
  if (preview.classList.contains("on")) {
    preview.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 120}px)`;
  }
});

$("#drawer-close").addEventListener("click", closeProject);
$("#drawer-prev").addEventListener("click", () => step(-1));
$("#drawer-next").addEventListener("click", () => step(1));
backdrop.addEventListener("click", closeProject);

const videoModal = $("#video-modal");
const presentationVideo = $("#presentation-video");
let videoFocus = null;

function openVideo() {
  videoFocus = document.activeElement;
  videoModal.hidden = false;
  document.body.classList.add("locked");
  $("#video-close").focus({ preventScroll: true });
  if (presentationVideo.preload === "none") presentationVideo.preload = "metadata";
}
function closeVideo() {
  if (videoModal.hidden) return;
  presentationVideo.pause();
  videoModal.hidden = true;
  if (openIdx == null) document.body.classList.remove("locked");
  videoFocus?.focus?.({ preventScroll: true });
}
$("#open-video-modal").addEventListener("click", openVideo);
$("#video-close").addEventListener("click", closeVideo);
videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) closeVideo();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!videoModal.hidden) closeVideo();
    else closeProject();
  }
  if (openIdx == null || !videoModal.hidden) return;
  if (e.key === "ArrowRight") step(1);
  if (e.key === "ArrowLeft") step(-1);
});

/* ------------------------------------------------------------------ *
 *  Language
 * ------------------------------------------------------------------ */

function applyLanguage(next) {
  lang = next;
  const pack = UI[lang];
  document.documentElement.lang = lang;
  document.title = pack.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((n) => {
    const v = pack[n.dataset.i18n];
    if (v !== undefined) n.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((n) => {
    const v = pack[n.dataset.i18nHtml];
    if (v !== undefined) n.innerHTML = v;
  });

  $("#drawer-prev").setAttribute("aria-label", pack["modal.prev"]);
  $("#drawer-next").setAttribute("aria-label", pack["modal.next"]);

  const btn = $("#lang-toggle");
  btn.textContent = lang === "en" ? "ES" : "EN";
  btn.setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");

  renderFilters();
  renderProjects();
  renderSkills();
  renderDrawer();

  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (_) {}
}

$("#lang-toggle").addEventListener("click", () => applyLanguage(lang === "es" ? "en" : "es"));

renderMarquee();
applyLanguage(getStoredLang());
