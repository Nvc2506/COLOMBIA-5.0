
// ── TABS RESUMEN ─────────────────────────────────────────────
function switchTab(idx) {
  document.querySelectorAll('#conferencia .resumen-tab').forEach((t, i) => t.classList.toggle('active', i === idx));
  document.querySelectorAll('#conferencia .resumen-panel').forEach((p, i) => p.classList.toggle('active', i === idx));
}
function switchTab2(idx) {
  document.querySelectorAll('#conferencia2 .resumen-tab').forEach((t, i) => t.classList.toggle('active', i === idx));
  document.querySelectorAll('#conferencia2 .resumen-panel').forEach((p, i) => p.classList.toggle('active', i === idx));
}

// ── GLOSARIO ─────────────────────────────────────────────────
const terminos = [
  { t: "Software Libre", d: "Software que respeta la libertad del usuario para ejecutarlo, estudiarlo, modificarlo y redistribuirlo. El término hace referencia a libertad, no a precio: 'free' como en 'free speech', no como en 'free beer'.", den: "Software that respects the user's freedom to run, study, modify, and redistribute it. The term refers to freedom, not price: 'free' as in 'free speech', not as in 'free beer'." },
  { t: "Startups Unicornio", d: "Empresa emergente que alcanza una valoración de mercado igual o superior a los 1,000 millones de dólares sin cotizar en bolsa. Son extremadamente raras y representan el máximo nivel de éxito en el ecosistema emprendedor.", den: "A startup that reaches a market valuation of one billion dollars or more without being listed on a stock exchange. They are extremely rare and represent the highest level of success in the entrepreneurial ecosystem." },
  { t: "Open Source", d: "Modelo de desarrollo de software en el que el código fuente es público y puede ser libremente utilizado, modificado y distribuido por cualquier persona, fomentando la colaboración y la transparencia.", den: "A software development model in which the source code is publicly available and can be freely used, modified, and distributed by anyone, promoting collaboration and transparency." },
  { t: "YOLO", d: "You Only Look Once. Framework de detección de objetos en tiempo real mediante inteligencia artificial. Destacado por Juan Fernando Ruiz Restrepo como el más recomendado para aprender y aplicar en proyectos de visión computacional.", den: "You Only Look Once. A real-time object detection framework powered by artificial intelligence. Highlighted by Juan Fernando Ruiz Restrepo as the most recommended tool for learning and applying in computer vision projects." },
  { t: "Auditoría Ética", d: "Proceso de evaluación independiente que analiza si un sistema tecnológico, especialmente uno basado en IA, actúa de manera justa, transparente y responsable, sin causar daños o sesgos en sus decisiones.", den: "An independent evaluation process that analyzes whether a technological system, especially one based on AI, acts in a fair, transparent, and responsible manner without causing harm or bias in its decisions." },
  { t: "Dockerización", d: "Proceso de empaquetar una aplicación y todas sus dependencias en un contenedor Docker, garantizando que funcione de manera consistente en cualquier entorno sin importar la infraestructura subyacente.", den: "The process of packaging an application and all its dependencies into a Docker container, ensuring it runs consistently in any environment regardless of the underlying infrastructure." },
  { t: "Cloud Híbrida", d: "Modelo de computación en la nube que combina infraestructura privada con servicios de nube pública, permitiendo mayor flexibilidad, control y optimización de costos según las necesidades de cada organización.", den: "A cloud computing model that combines private infrastructure with public cloud services, allowing greater flexibility, control, and cost optimization according to each organization's needs." },
  { t: "CamClouds7", d: "Software de videovigilancia con inteligencia artificial avanzada desarrollado por Clouds7. Integra IoT, reconocimiento facial, detección de amenazas en tiempo real y análisis de comportamiento, aplicable a seguridad, construcción, streaming y medio ambiente.", den: "Advanced AI-powered video surveillance software developed by Clouds7. It integrates IoT, facial recognition, real-time threat detection, and behavior analysis, applicable to security, construction, streaming, and environmental monitoring." },
  { t: "Merodeo Tecnológico", d: "Práctica de explorar y analizar de manera continua el entorno tecnológico para identificar tendencias emergentes, oportunidades de innovación y posibles amenazas antes de que se vuelvan mainstream.", den: "The practice of continuously exploring and analyzing the technological landscape to identify emerging trends, innovation opportunities, and potential threats before they become mainstream." },
  { t: "Broadcasting", d: "Transmisión de contenido de audio o video desde un punto emisor hacia múltiples receptores simultáneamente. En el contexto digital abarca el streaming en vivo, la televisión por internet y la difusión masiva de contenido.", den: "The transmission of audio or video content from a single source to multiple recipients simultaneously. In the digital context, it encompasses live streaming, internet television, and mass content distribution." },
  { t: "RS-485", d: "Estándar de comunicación serial industrial que permite la transmisión de datos a largas distancias y en entornos con ruido eléctrico. Ampliamente utilizado en sistemas de control, automatización y videovigilancia.", den: "An industrial serial communication standard that enables data transmission over long distances and in electrically noisy environments. Widely used in control systems, automation, and video surveillance." },
  { t: "COCO", d: "Common Objects in Context. Base de datos de referencia para el entrenamiento y evaluación de modelos de visión computacional e IA, que contiene más de 330,000 imágenes con objetos etiquetados en contexto real.", den: "Common Objects in Context. A benchmark dataset for training and evaluating computer vision and AI models, containing over 330,000 images with objects labeled in real-world contexts." },
  { t: "Grammana", d: "Herramienta utilizada en el contexto de inteligencia artificial y procesamiento de datos, relacionada con la estructuración y análisis semántico de información en proyectos de IA aplicada.", den: "A tool used in the context of artificial intelligence and data processing, related to the structuring and semantic analysis of information in applied AI projects." },
  { t: "ARIMA", d: "AutoRegressive Integrated Moving Average. Modelo estadístico para el análisis y predicción de series temporales, ampliamente aplicado en IA para pronósticos de datos secuenciales como ventas, tráfico o comportamiento.", den: "AutoRegressive Integrated Moving Average. A statistical model for the analysis and forecasting of time series, widely applied in AI for sequential data predictions such as sales, traffic, or behavior." },
  { t: "Kimi", d: "Modelo de inteligencia artificial de gran escala desarrollado por Moonshot AI, conocido por su capacidad para procesar contextos muy extensos. Forma parte del ecosistema de modelos de lenguaje de código abierto.", den: "A large-scale artificial intelligence model developed by Moonshot AI, known for its ability to process very long contexts. It is part of the open-source language model ecosystem." },
  { t: "Ethical Hacker", d: "Profesional de ciberseguridad autorizado para intentar vulnerar sistemas informáticos con el objetivo de identificar fallos antes de que actores maliciosos puedan explotarlos. También conocido como hacker de sombrero blanco.", den: "A cybersecurity professional authorized to attempt to breach computer systems with the goal of identifying vulnerabilities before malicious actors can exploit them. Also known as a white-hat hacker." },
  { t: "Kickstarter", d: "Plataforma de financiamiento colectivo que permite a creadores y emprendedores recaudar fondos del público para sus proyectos. Usada por HALBERD Studios para financiar Nine Years of Shadows y Mariachi Legend.", den: "A crowdfunding platform that allows creators and entrepreneurs to raise funds from the public for their projects. Used by HALBERD Studios to fund Nine Years of Shadows and Mariachi Legend." },
  { t: "Industria Saturada", d: "Mercado con alta concentración de competidores ofreciendo productos similares, lo que exige mayor creatividad e innovación para diferenciarse. Concepto central en la conferencia de Constantino Valenzuela.", den: "A market with a high concentration of competitors offering similar products, which demands greater creativity and innovation to stand out. A central concept in Constantino Valenzuela's conference." },
  { t: "Diseño de Niveles", d: "Disciplina del desarrollo de videojuegos que planifica, construye y equilibra los escenarios, retos y mecánicas de cada etapa para garantizar una experiencia atractiva y coherente para el jugador.", den: "A video game development discipline that plans, builds, and balances the scenarios, challenges, and mechanics of each stage to ensure an engaging and coherent experience for the player." },
  { t: "Motor de Videojuegos", d: "Software que provee las herramientas base (renderizado gráfico, física, sonido, animación) sobre las cuales se construyen y ejecutan los videojuegos. Ejemplos: Unity, Unreal Engine, Godot.", den: "Software that provides the core tools (graphics rendering, physics, sound, animation) on which video games are built and run. Examples: Unity, Unreal Engine, Godot." },
  { t: "Métricas", d: "Indicadores cuantitativos para medir el rendimiento, el progreso y el impacto de un proyecto o campaña. En videojuegos y tecnología permiten tomar decisiones basadas en datos reales.", den: "Quantitative indicators used to measure the performance, progress, and impact of a project or campaign. In video games and technology, they enable decisions based on real data." },
  { t: "Unity", d: "Motor de desarrollo de videojuegos multiplataforma ampliamente utilizado por estudios independientes. Permite crear juegos en 2D y 3D para PC, consolas y móviles con un entorno accesible y gran comunidad.", den: "A cross-platform video game development engine widely used by independent studios. It allows the creation of 2D and 3D games for PC, consoles, and mobile devices with an accessible environment and a large community." },
  { t: "Reglas de Diseño", d: "Conjunto de principios que guían la creación de experiencias visuales e interactivas. En videojuegos definen cómo deben comportarse los elementos para garantizar coherencia, jugabilidad y atractivo visual.", den: "A set of principles that guide the creation of visual and interactive experiences. In video games, they define how elements should behave to ensure coherence, playability, and visual appeal." },
  { t: "Omnilink7", d: "Solución de conectividad en la nube de Clouds7 que integra más de 50 cámaras IP o dispositivos IoT sin importar marca o calidad de video, sin necesidad de abrir puertos ni modificar firewalls.", den: "A cloud connectivity solution by Clouds7 that integrates more than 50 IP cameras or IoT devices regardless of brand or video quality, without the need to open ports or modify firewalls." },
  { t: "Reconocimiento Facial", d: "Tecnología de IA que identifica o verifica la identidad de una persona analizando los rasgos de su rostro en imágenes o video. Aplicada en seguridad, vigilancia y búsqueda de personas desaparecidas.", den: "An AI technology that identifies or verifies a person's identity by analyzing their facial features in images or video. Applied in security, surveillance, and the search for missing persons." },
  { t: "Nivel C5", d: "Estándar de seguridad en la nube de alto nivel que garantiza la protección de datos sensibles mediante controles rigurosos de acceso, cifrado y auditoría. CamClouds7 opera bajo este estándar.", den: "A high-level cloud security standard that ensures the protection of sensitive data through rigorous access controls, encryption, and auditing. CamClouds7 operates under this standard." },
  { t: "TensorFlow", d: "Plataforma de código abierto de Google para el desarrollo y entrenamiento de modelos de machine learning e IA, ampliamente utilizada en visión computacional y procesamiento de lenguaje natural.", den: "Google's open-source platform for developing and training machine learning and AI models, widely used in computer vision and natural language processing." },
  { t: "Nine Years of Shadows", d: "Videojuego desarrollado por HALBERD Studios bajo la dirección de Constantino Valenzuela, inspirado en Castlevania. Financiado parcialmente a través de Kickstarter y primer proyecto a gran escala del estudio.", den: "A video game developed by HALBERD Studios under the direction of Constantino Valenzuela, inspired by Castlevania. Partially funded through Kickstarter and the studio's first large-scale project." },
  { t: "IoT (Internet of Things)", d: "Red de dispositivos físicos conectados a internet que recopilan e intercambian datos entre sí sin intervención humana. CamClouds7 se integra con dispositivos IoT para ofrecer vigilancia inteligente y monitoreo en tiempo real.", den: "Network of physical devices connected to the internet that collect and exchange data with each other without human intervention. CamClouds7 integrates with IoT devices to provide intelligent surveillance and real-time monitoring." },
  { t: "Metroidvania", d: "Subgénero de videojuegos de acción y exploración caracterizado por mapas interconectados y progresión no lineal. Nine Years of Shadows se inscribe en este género, siguiendo la estructura y mecánicas que popularizaron juegos como Castlevania y Metroid.", den: "Action-exploration video game subgenre characterized by interconnected maps and non-linear progression. Nine Years of Shadows belongs to this genre, following the structure and mechanics popularized by games like Castlevania and Metroid." }
];

function renderGlosario(filter = '') {
  const grid = document.getElementById('glosarioGrid');
  const q = filter.toLowerCase().trim();
  let visible = 0;
  grid.innerHTML = '';
  terminos.forEach(({ t, d, den }) => {
    const def = (currentLang === 'en' && den) ? den : d;
    const matches = !q || t.toLowerCase().includes(q) || def.toLowerCase().includes(q);
    const div = document.createElement('div');
    div.className = 'glosa-item' + (matches ? ' visible' : '');
    div.innerHTML = `<div class="glosa-term">${t}</div><p class="glosa-def">${def}</p>`;
    grid.appendChild(div);
    if (matches) visible++;
  });
  document.getElementById('glosarioCounter').textContent =
    q ? `${visible} ${currentLang === 'en' ? 'of' : 'de'} ${terminos.length} ${currentLang === 'en' ? 'terms found' : 'términos encontrados'}` : `${terminos.length} ${currentLang === 'en' ? 'terms total' : 'términos en total'}`;
}

let currentLang = 'es';
function filterGlosario(val) { renderGlosario(val); }
renderGlosario();

// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));




const TRANSLATIONS = {

  
  'panel-0': {
    es: `<h3>Introducción</h3>
      <p>La primera conferencia brindó una introducción a los fundamentos del software libre. El conferencista fue <strong>Juan Fernando Ruiz Restrepo</strong>, fundador de <strong>Clouds7</strong>, una empresa colombiana de tecnología especializada en servicios de computación en la nube (cloud), ciberseguridad y protección de datos.</p>
      <p style="margin-top:0.9rem;">Durante su presentación, explicó que el software libre se basa en cuatro libertades fundamentales que promueven la innovación, la soberanía tecnológica y la colaboración entre usuarios y desarrolladores. También habló sobre la importancia de la inteligencia artificial de código abierto (Open Source) y presentó <strong>CamClouds7</strong>, un software actualmente en desarrollo.</p>
      <p style="margin-top:1.2rem; font-family:'Syne',sans-serif; font-weight:700; font-size:0.95rem;">Las 4 libertades del software libre</p>
      <ol style="margin-top:0.5rem; padding-left:1.4rem; display:flex; flex-direction:column; gap:0.5rem;">
        <li style="font-size:0.9rem; line-height:1.7; color:#555;"><strong>Ejecutar</strong> el programa para cualquier propósito.</li>
        <li style="font-size:0.9rem; line-height:1.7; color:#555;"><strong>Estudiar</strong> cómo funciona el programa.</li>
        <li style="font-size:0.9rem; line-height:1.7; color:#555;"><strong>Modificar</strong> el software según las necesidades del usuario.</li>
        <li style="font-size:0.9rem; line-height:1.7; color:#555;"><strong>Redistribuir</strong> copias del software, con o sin modificaciones.</li>
      </ol>
      <p style="margin-top:1.2rem; font-family:'Syne',sans-serif; font-weight:700; font-size:0.95rem;">Inteligencia Artificial Open Source</p>
      <ul style="margin-top:0.5rem; padding-left:1.2rem; display:flex; flex-direction:column; gap:0.5rem; list-style:disc;">
        <li style="font-size:0.9rem; line-height:1.7; color:#555;">Permite el acceso libre al código y, en algunos casos, a los modelos de IA.</li>
        <li style="font-size:0.9rem; line-height:1.7; color:#555;">Puede ser utilizada, estudiada y mejorada por la comunidad.</li>
        <li style="font-size:0.9rem; line-height:1.7; color:#555;">Favorece la innovación, la transparencia y la colaboración.</li>
      </ul>
      <div style="margin-top:1.25rem; background:var(--crema); border-radius:12px; padding:1.1rem 1.4rem; border-left:4px solid var(--amarillo);">
        <p style="font-family:'Syne',sans-serif; font-size:0.95rem; font-weight:700; margin-bottom:0.35rem;">🚀 Proyecto destacado — CamClouds7</p>
        <p style="font-size:0.88rem; line-height:1.75; color:#555;">Software en desarrollo presentado por <strong>Juan Fernando Ruiz Restrepo</strong>. Una propuesta tecnológica colombiana que refleja el espíritu del software libre y la computación en la nube.</p>
      </div>
      <p style="margin-top:1.5rem; font-family:'Syne',sans-serif; font-weight:700; font-size:0.95rem;">📸 Fotos de la conferencia</p>
      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:0.75rem; margin-top:0.75rem;">
        <div class="photo-card"><img src="Galeria/foto1.jpeg" alt="Foto 1"><p class="photo-caption">Foto 1</p></div>
        <div class="photo-card"><img src="Galeria/foto2.jpeg" alt="Foto 2"><p class="photo-caption">Foto 2</p></div>
        <div class="photo-card"><img src="Galeria/foto3.jpeg" alt="Foto 3"><p class="photo-caption">Foto 3</p></div>
        <div class="photo-card"><img src="Galeria/foto4.jpeg" alt="Foto 4"><p class="photo-caption">Foto 4</p></div>
      </div>`,

    en: `<h3>Introduction</h3>
      <p>The first conference provided an introduction to the fundamentals of free software. The speaker was <strong>Juan Fernando Ruiz Restrepo</strong>, founder of <strong>Clouds7</strong>, a Colombian technology company specialized in cloud computing services, cybersecurity, and data protection.</p>
      <p style="margin-top:0.9rem;">During his presentation, he explained that free software is based on four fundamental freedoms that promote innovation, technological sovereignty, and collaboration between users and developers. He also spoke about the importance of open source artificial intelligence and presented <strong>CamClouds7</strong>, a software currently under development.</p>
      <p style="margin-top:1.2rem; font-family:'Syne',sans-serif; font-weight:700; font-size:0.95rem;">The 4 freedoms of free software</p>
      <ol style="margin-top:0.5rem; padding-left:1.4rem; display:flex; flex-direction:column; gap:0.5rem;">
        <li style="font-size:0.9rem; line-height:1.7; color:#555;"><strong>Run</strong> the program for any purpose.</li>
        <li style="font-size:0.9rem; line-height:1.7; color:#555;"><strong>Study</strong> how the program works.</li>
        <li style="font-size:0.9rem; line-height:1.7; color:#555;"><strong>Modify</strong> the software to suit the user's needs.</li>
        <li style="font-size:0.9rem; line-height:1.7; color:#555;"><strong>Redistribute</strong> copies of the software, with or without modifications.</li>
      </ol>
      <p style="margin-top:1.2rem; font-family:'Syne',sans-serif; font-weight:700; font-size:0.95rem;">Open Source Artificial Intelligence</p>
      <ul style="margin-top:0.5rem; padding-left:1.2rem; display:flex; flex-direction:column; gap:0.5rem; list-style:disc;">
        <li style="font-size:0.9rem; line-height:1.7; color:#555;">Allows free access to the code and, in some cases, to the AI models.</li>
        <li style="font-size:0.9rem; line-height:1.7; color:#555;">Can be used, studied, and improved by the community.</li>
        <li style="font-size:0.9rem; line-height:1.7; color:#555;">Fosters innovation, transparency, and collaboration.</li>
      </ul>
      <div style="margin-top:1.25rem; background:var(--crema); border-radius:12px; padding:1.1rem 1.4rem; border-left:4px solid var(--amarillo);">
        <p style="font-family:'Syne',sans-serif; font-size:0.95rem; font-weight:700; margin-bottom:0.35rem;">🚀 Featured project — CamClouds7</p>
        <p style="font-size:0.88rem; line-height:1.75; color:#555;">Software under development presented by <strong>Juan Fernando Ruiz Restrepo</strong>. A Colombian technological proposal that reflects the spirit of free software and cloud computing.</p>
      </div>
      <p style="margin-top:1.5rem; font-family:'Syne',sans-serif; font-weight:700; font-size:0.95rem;">📸 Conference photos</p>
      <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:0.75rem; margin-top:0.75rem;">
        <div class="photo-card"><img src="Galeria/foto1.jpeg" alt="Photo 1"><p class="photo-caption">Photo 1</p></div>
        <div class="photo-card"><img src="Galeria/foto2.jpeg" alt="Photo 2"><p class="photo-caption">Photo 2</p></div>
        <div class="photo-card"><img src="Galeria/foto3.jpeg" alt="Photo 3"><p class="photo-caption">Photo 3</p></div>
        <div class="photo-card"><img src="Galeria/foto4.jpeg" alt="Photo 4"><p class="photo-caption">Photo 4</p></div>
      </div>`
  },

  // ── PANEL 1 – Conferencia 1: Desarrollo CamClouds7 ──
  'panel-1': {
    es: `<h3>Desarrollo temático — CamClouds7</h3>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Juan Fernando Ruiz Restrepo presentó <strong>CamClouds7</strong>, un software con inteligencia artificial avanzada actualmente en desarrollo, capaz de aplicarse a IoT, tecnologías IP, audio, video y Big Data. Se integra a cualquier infraestructura existente desde cámaras antiguas hasta sistemas de seguridad legacy y opera bajo estándares de seguridad de nivel C5.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">En materia de seguridad urbana, el software realiza monitoreo en tiempo real y detección temprana de amenazas. Se integra con bases de datos policiales o propias para identificación facial, permitiendo la búsqueda de personas desaparecidas y la detección de individuos cometiendo delitos, generando alertas inmediatas para una reacción más rápida de las autoridades.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Para la conectividad, se apoya en <strong>Omnilink7</strong>, una solución en la nube robusta, segura y de fácil implementación que integra más de 50 cámaras IP o dispositivos IoT sin importar su marca o calidad de video, sin necesidad de configuraciones complejas, apertura de puertos ni modificación de firewall.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">En el sector de la construcción, permite vigilar obras en tiempo real y convertir grabaciones de 48 horas en resúmenes de 5 minutos con descripción detallada del avance del proyecto. Genera documentación en minutos analizando el entorno, creando clips diarios integrados en un video continuo sin necesidad de almacenar el metraje original. Es aplicable en construcciones, análisis de infraestructuras, paisajismo y más.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Para streaming y eventos en vivo, permite grabaciones con seguimiento inteligente en conciertos, conferencias, competiciones, desfiles y vigilancia de tráfico, analizando el comportamiento de las personas en tiempo real. En cuanto al medio ambiente, genera alertas sonoras ante situaciones críticas como inundaciones, deslizamientos, terremotos, incendios y aglomeraciones, emitiendo mensajes de audio para evacuar zonas afectadas y guiar a la población.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Para la vigilancia nocturna, se integra con farolas inteligentes que generan iluminación artificial, permitiendo videovigilancia con IA en horario nocturno con alertas y mensajes de respuesta inmediata.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Los frameworks clave utilizados en el desarrollo son TensorFlow, PyTorch, Hugging Face y OpenCV. Sin embargo, el framework que destacó especialmente fue <strong>YOLO</strong> como el que más le ha aportado y el que más recomienda utilizar y aprender.</p>`,

    en: `<h3>Thematic development — CamClouds7</h3>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Juan Fernando Ruiz Restrepo presented <strong>CamClouds7</strong>, an advanced AI software currently under development, capable of being applied to IoT, IP technologies, audio, video, and Big Data. It integrates with any existing infrastructure — from old cameras to legacy security systems — and operates under C5-level security standards.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">In terms of urban security, the software performs real-time monitoring and early threat detection. It integrates with police or custom databases for facial identification, enabling the search for missing persons and detection of individuals committing crimes, generating immediate alerts for faster authority response.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">For connectivity, it relies on <strong>Omnilink7</strong>, a robust, secure, and easy-to-implement cloud solution that integrates more than 50 IP cameras or IoT devices regardless of brand or video quality, without the need for complex configurations, port opening, or firewall modifications.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">In the construction sector, it allows real-time monitoring of worksites and can convert 48-hour recordings into 5-minute summaries with detailed project progress descriptions. It generates documentation in minutes by analyzing the environment and creating daily clips integrated into a continuous video without needing to store the original footage. Applicable in construction, infrastructure analysis, landscaping, and more.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">For streaming and live events, it enables intelligent tracking recordings at concerts, conferences, competitions, parades, and traffic surveillance, analyzing people's behavior in real time. Regarding the environment, it generates sound alerts for critical situations such as floods, landslides, earthquakes, fires, and crowds, broadcasting audio messages to evacuate affected areas and guide the population.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">For night surveillance, it integrates with smart streetlights that generate artificial lighting, enabling AI-powered video surveillance at night with immediate response alerts and messages.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">The key frameworks used in development are TensorFlow, PyTorch, Hugging Face, and OpenCV. However, the framework he especially highlighted was <strong>YOLO</strong> as the one that has contributed the most and the one he most recommends using and learning.</p>`
  },

  // ── PANEL 2 – Conferencia 1: Conclusiones ──
  'panel-2': {
    es: `<h3>Conclusiones</h3>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">La conferencia nos permitió conocer un software que responde a una necesidad real y urgente en Colombia: la inseguridad. CamClouds7, desarrollado por Juan Fernando Ruiz Restrepo, aborda de manera directa problemáticas como la delincuencia, las desapariciones y los déficits en los sistemas de vigilancia, ofreciendo una solución tecnológica ya en funcionamiento que ha permitido a las autoridades actuar de forma más rápida y eficiente.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Aunque se trata de una herramienta con un costo significativo, su impacto es concreto y medible. El ponente explicó de manera detallada su funcionamiento, dejando claro que CamClouds7 no es un proyecto futuro, sino una realidad que ya está transformando la forma en que operan los cuerpos de seguridad en el país.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Más allá de la seguridad, el software abre un panorama mucho más amplio. Su aplicación se extiende al seguimiento de obras y proyectos de construcción, la realización de transmisiones en vivo y streaming, y el análisis del entorno mediante inteligencia artificial. Un aspecto destacado es su capacidad de reconocimiento no solo de personas, sino también de animales, lo que amplía considerablemente su campo de uso.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">En definitiva, CamClouds7 es un reflejo de cómo la inteligencia artificial está transformando nuestra vida cotidiana, no solo facilitando las labores de seguridad, sino mejorando procesos en múltiples sectores. Esta conferencia demostró que el futuro tecnológico no está lejos, sino que ya está siendo construido desde Colombia.</p>`,

    en: `<h3>Conclusions</h3>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">The conference introduced us to software that addresses a real and urgent need in Colombia: insecurity. CamClouds7, developed by Juan Fernando Ruiz Restrepo, directly tackles issues such as crime, disappearances, and deficiencies in surveillance systems, offering an already-operational technological solution that has allowed authorities to act faster and more efficiently.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Although it is a tool with a significant cost, its impact is concrete and measurable. The speaker explained its operation in detail, making it clear that CamClouds7 is not a future project, but a reality that is already transforming how security forces operate in the country.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Beyond security, the software opens a much broader horizon. Its application extends to monitoring construction projects, conducting live streams, and analyzing the environment using artificial intelligence. A standout aspect is its ability to recognize not only people but also animals, which considerably broadens its field of use.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Ultimately, CamClouds7 reflects how artificial intelligence is transforming our daily lives, not only facilitating security work but improving processes across multiple sectors. This conference demonstrated that the technological future is not far away — it is already being built from Colombia.</p>`
  },

  // ── PANEL2-0 – Conferencia 2: Introducción ──
  'panel2-0': {
    es: `<h3>Introducción</h3>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">El conferencista de esta sesión fue <strong>Constantino Valenzuela</strong>, Lead Level Designer con más de 7 años de experiencia en la industria de los videojuegos, apasionado por crear espacios que guían, retan y sorprenden al jugador. Actualmente lidera <strong>HALBERD Studios</strong>, un estudio independiente de desarrollo de videojuegos.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Durante la conferencia, Constantino compartió su experiencia en la creación de <strong>Nine Years of Shadows</strong>, un juego inspirado en la jugabilidad y metodología del clásico <strong>Castlevania</strong>. El proceso de desarrollo fue largo y exigente, con una inversión económica considerable y múltiples retos en el camino. Aunque el juego no alcanzó un reconocimiento masivo dentro de la comunidad, representa un trabajo serio y de calidad que marcó el inicio del estudio.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Para financiar el proyecto, recurrieron a <strong>Kickstarter</strong>, una plataforma que permite a personas y grupos apoyar económicamente campañas de videojuegos y proyectos creativos. Gracias a esta campaña, Nine Years of Shadows logró recaudar más de <strong>1,988,905 pesos mexicanos ($411,581,777 pesos colombianos)</strong> y conseguir más de <strong>2,919 patrocinadores</strong>. Sin embargo, estos fondos no fueron suficientes para cubrir la totalidad del presupuesto, ya que los costos reales superaron las estimaciones iniciales.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Ante esta situación, Constantino expuso las estrategias, campañas y acciones de promoción que implementaron para conseguir los recursos adicionales necesarios y llevar el juego a su lanzamiento final.</p>`,

    en: `<h3>Introduction</h3>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">The speaker for this session was <strong>Constantino Valenzuela</strong>, Lead Level Designer with more than 7 years of experience in the video game industry, passionate about creating spaces that guide, challenge, and surprise the player. He currently leads <strong>HALBERD Studios</strong>, an independent video game development studio.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">During the conference, Constantino shared his experience creating <strong>Nine Years of Shadows</strong>, a game inspired by the gameplay and methodology of the classic <strong>Castlevania</strong>. The development process was long and demanding, with a considerable financial investment and multiple challenges along the way. Although the game did not achieve massive recognition within the community, it represents serious, quality work that marked the beginning of the studio.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">To finance the project, they turned to <strong>Kickstarter</strong>, a platform that allows individuals and groups to financially support video game campaigns and creative projects. Thanks to this campaign, Nine Years of Shadows raised more than <strong>1,988,905 Mexican pesos ($411,581,777 Colombian pesos)</strong> and secured more than <strong>2,919 backers</strong>. However, these funds were not enough to cover the full budget, as actual costs exceeded initial estimates.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Faced with this situation, Constantino presented the strategies, campaigns, and promotional actions they implemented to secure the additional resources needed to bring the game to its final launch.</p>`
  },

  // ── PANEL2-1 – Conferencia 2: Desarrollo temático ──
  'panel2-1': {
    es: `<h3>Desarrollo temático</h3>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Constantino explicó cómo tomó como referencia el juego <strong>Castlevania</strong> para desarrollar <strong>Nine Years of Shadows</strong>, mostrando de forma dinámica el proceso de construcción de cada escenario: el uso del color para hacer el juego visualmente atractivo, la jugabilidad y la estructura general del proyecto.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Presentó cómo debe estar estructurado un videojuego: la distribución de jefes, mini jefes y personajes, y la importancia de posicionarlos correctamente para que la experiencia sea atractiva y coherente. Hizo énfasis en la necesidad de seguir patrones de diseño y, sobre todo, en ponerse en el lugar del jugador como principio fundamental del diseño de niveles.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">También mostró un diagrama de gran complejidad que representaba la arquitectura e interconexiones del sistema del juego, evidenciando cómo diferentes procesos, módulos y componentes trabajan de manera integrada. Esto resaltó la importancia de la planificación, la arquitectura de software y la coordinación entre múltiples áreas dentro de un proyecto de desarrollo.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">En cuanto a la estructura narrativa y de jugabilidad, explicó cómo organizar los escenarios desde el inicio hasta el desenlace y el final, incorporando elementos como puntos de guardado, mini jefes y peleas interesantes que mantienen al jugador comprometido durante toda la experiencia.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Un concepto clave que presentó fue la fórmula <strong>"Alma (intuición) + Datos (evidencia)"</strong>, con la que destacó que las decisiones más efectivas surgen de combinar la creatividad, la experiencia y el pensamiento crítico con el análisis objetivo de información. Esta filosofía guía tanto el diseño de sus juegos como su visión del desarrollo tecnológico.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">También mostró el proceso de animación de personajes: sus movimientos, saltos y mecánicas, asegurando que no existan errores que afecten la experiencia del jugador.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Para cerrar, presentó su nuevo proyecto: <strong>Mariachi Legend</strong>, un juego basado en la cultura mexicana. Aunque no compartió muchos detalles por razones personales y estratégicas, confirmó que utilizó las mismas estrategias que con Nine Years of Shadows. Su campaña en <strong>Kickstarter</strong> fue notablemente más exitosa, recaudando más de <strong>11,069,790 pesos mexicanos ($2,290,760,247 pesos colombianos)</strong> y sumando más de <strong>9,215 patrocinadores</strong>, lo que le permitió solventar gran parte de los gastos del proyecto. El juego aún se encuentra en producción y está próximo a salir.</p>
      <div style="margin-top:1.25rem; background:#FFF8E1; border-radius:12px; padding:1.1rem 1.4rem; border-left:4px solid var(--amarillo);">
        <p style="font-family:'Syne',sans-serif; font-size:0.95rem; font-weight:700; margin-bottom:0.35rem;">💡 Consejo final</p>
        <p style="font-size:0.95rem; line-height:1.75; color:#444; font-style:italic;">"Diseña con el alma, demuéstralo con datos y destaca en una industria saturada."</p>
      </div>`,

    en: `<h3>Thematic development</h3>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Constantino explained how he used <strong>Castlevania</strong> as a reference to develop <strong>Nine Years of Shadows</strong>, dynamically showing the construction process of each scenario: the use of color to make the game visually appealing, the gameplay, and the overall project structure.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">He presented how a video game should be structured: the distribution of bosses, mini-bosses, and characters, and the importance of positioning them correctly so the experience is attractive and coherent. He emphasized the need to follow design patterns and, above all, to put yourself in the player's shoes as a fundamental principle of level design.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">He also showed a highly complex diagram representing the architecture and interconnections of the game system, demonstrating how different processes, modules, and components work in an integrated manner. This highlighted the importance of planning, software architecture, and coordination across multiple areas within a development project.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Regarding narrative and gameplay structure, he explained how to organize scenarios from beginning to climax and ending, incorporating elements such as save points, mini-bosses, and engaging fights that keep the player committed throughout the experience.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">A key concept he presented was the formula <strong>"Soul (intuition) + Data (evidence)"</strong>, highlighting that the most effective decisions arise from combining creativity, experience, and critical thinking with the objective analysis of information. This philosophy guides both the design of his games and his vision of technological development.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">He also showed the character animation process: their movements, jumps, and mechanics, ensuring there are no errors that affect the player's experience.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">To close, he presented his new project: <strong>Mariachi Legend</strong>, a game based on Mexican culture. Although he did not share many details for personal and strategic reasons, he confirmed he used the same strategies as with Nine Years of Shadows. His <strong>Kickstarter</strong> campaign was notably more successful, raising more than <strong>11,069,790 Mexican pesos ($2,290,760,247 Colombian pesos)</strong> and gathering more than <strong>9,215 backers</strong>, which allowed him to cover a large part of the project's expenses. The game is still in production and coming soon.</p>
      <div style="margin-top:1.25rem; background:#FFF8E1; border-radius:12px; padding:1.1rem 1.4rem; border-left:4px solid var(--amarillo);">
        <p style="font-family:'Syne',sans-serif; font-size:0.95rem; font-weight:700; margin-bottom:0.35rem;">💡 Final tip</p>
        <p style="font-size:0.95rem; line-height:1.75; color:#444; font-style:italic;">"Design with your soul, prove it with data, and stand out in a saturated industry."</p>
      </div>`
  },

  // ── PANEL2-2 – Conferencia 2: Conclusiones ──
  'panel2-2': {
    es: `<h3>Conclusiones</h3>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Constantino nos enseñó que inspirarse en algo ya existente no es copiar, es aprender. Tomar un juego como Castlevania y usarlo como guía para construir patrones, diseños, personajes y jugabilidad propia es una estrategia válida y efectiva que él supo aprovechar al máximo.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Más allá de la técnica, nos compartió algo que va mucho más allá de los videojuegos: la importancia de jugar con los colores, las experiencias y los detalles que hacen que algo común se convierta en algo memorable. Nos contó sus vivencias de forma cercana y honesta, sin esconder las dificultades.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Y es que desarrollar un videojuego es, visto desde afuera, mucho más complicado de lo que parece. No es solo diseñar o programar, es enfrentar limitaciones económicas, coordinar equipos y asumir que una sola persona no puede cargar con todo. Pero su historia demuestra que con esfuerzo y pasión se pueden lograr cosas grandes, incluso cuando los resultados no son exactamente los que uno esperaba.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Porque aunque no todos sus juegos alcanzaron el éxito que él soñó, Constantino nunca dejó de pensar en grande. Siguió adelante, aprendió, mejoró su estrategia y volvió a intentarlo. Esa actitud, más que cualquier framework o metodología, es quizás la lección más valiosa que nos dejó esta conferencia.</p>`,

    en: `<h3>Conclusions</h3>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Constantino taught us that drawing inspiration from something that already exists is not copying — it's learning. Taking a game like Castlevania and using it as a guide to build your own patterns, designs, characters, and gameplay is a valid and effective strategy that he knew how to leverage to the fullest.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Beyond technique, he shared something that goes far beyond video games: the importance of playing with colors, experiences, and details that turn something ordinary into something memorable. He spoke about his personal experiences in an honest, relatable way, without hiding the difficulties.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Developing a video game is, when seen from the outside, far more complicated than it seems. It's not just about designing or coding — it's about facing financial constraints, coordinating teams, and accepting that no single person can carry everything alone. But his story shows that with effort and passion, great things can be achieved, even when the results aren't exactly what you hoped for.</p>
      <p style="margin-top:0.9rem; font-size:0.93rem; line-height:1.85; color:#555;">Because even though not all of his games reached the success he dreamed of, Constantino never stopped thinking big. He kept going, learned, improved his strategy, and tried again. That attitude, more than any framework or methodology, is perhaps the most valuable lesson this conference left us with.</p>`
  }
};

// ── Función principal de traducción ──
function setLang(lang) {
  currentLang = lang;

  // Toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');

  // 1. Traducir elementos con data-es/data-en (títulos, labels, nav, etc.)
  document.querySelectorAll('[data-es]').forEach(el => {
    const val = el.getAttribute(`data-${lang}`);
    if (val) {
      el.innerHTML = val;
    }
  });

  // 2. Traducir placeholders
  document.querySelectorAll('[data-placeholder-es]').forEach(el => {
    el.placeholder = el.getAttribute(`data-placeholder-${lang}`) || el.placeholder;
  });

  // 3. Traducir paneles completos usando el diccionario
  Object.keys(TRANSLATIONS).forEach(id => {
    const el = document.getElementById(id);
    if (el && TRANSLATIONS[id][lang]) {
      el.innerHTML = TRANSLATIONS[id][lang];
    }
  });

  // 4. lang del html
  document.documentElement.lang = lang;

  // 5. Re-renderizar glosario con el idioma actualizado
  renderGlosario(document.getElementById('searchInput')?.value || '');
}
