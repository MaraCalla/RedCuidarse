/* ================================
   DATOS
================================== */
const ITEMS = [
  {
    titulo: "Escaneo Corporal de 5 Minutos (Mindfulness corporal)",
    tipo: "Guía",
    desc: "Conecta con tu cuerpo, reduce la tensión y regresa al presente.",
    detalles: `
      <h4>Objetivo:</h4>
      <p>Conectar con tu cuerpo, reducir la tensión acumulada y estar en el presente.</p>
      <h4>Pasos:</h4>
      <ol>
        <li>Busca un lugar cómodo y silencioso.</li>
        <li>Cierra los ojos y respira profundamente.</li>
        <li>Relaja tu cabeza, cuello y hombros, bajando lentamente.</li>
        <li>Observa sin juzgar cada sensación hasta llegar a los pies.</li>
        <li>Inhala profundo y suelta la tensión al exhalar.</li>
      </ol>
      <p><strong>Hazlo cuando:</strong> Te sientas ansioso, desconectado o antes de dormir.</p>
    `,
    action: "guide",
  },
  {
    titulo: "Respiración 4-4 (Ejercicio)",
    tipo: "Ejercicio",
    desc: "Inhala 4s / Exhala 4s. Animación guiada.",
    action: "breathing",
  },
  {
    titulo: "Infografía: El impacto del estrés académico",
    tipo: "Infografía",
    desc: "Causas, síntomas y cómo enfrentarlo.",
    link: "https://www.canva.com/design/DAGt3eY8-1g/tdlfAuUJPTof6yER8YDNqg/view",
    descargar: "https://www.canva.com/design/DAGt3eY8-1g/WHqwrb2e49OUIyyLtHKflw/edit",
  },
  {
    titulo: "Cartas que Nunca Enviarás (Liberación Emocional)",
    tipo: "Guía",
    desc: "Una invitación a liberar emociones a través de la escritura.",
    detalles: `
      <h4>Pasos para escribir tu carta:</h4>
      <ol>
        <li>Elige a quién o a qué escribirás.</li>
        <li>Escribe sin filtros, con honestidad.</li>
        <li>Permítete sentir sin juzgar.</li>
        <li>Decide qué hacer con la carta (guardar, quemar, enviar a tu futuro).</li>
      </ol>
      <p><button class="btn" onclick="window.open('https://www.futureme.org/', '_blank')">Escribe tu carta al futuro</button></p>
      <p><em>Con cariño, Red cuidar(SE) 💜</em></p>
    `,
    action: "guide",
  },
  {
  titulo: "Infografía: Trastornos más comunes en jóvenes (JPG)",
  tipo: "Infografía",
  desc: "Ansiedad, depresión, trastornos de alimentación y de identidad.",
  link: "https://www.canva.com/design/DAGt3Vm9x2o/KY52eN162HPD8xU4acr9MQ/view?utm_content=DAGt3Vm9x2o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hba7e245173",
  descargar: "https://www.canva.com/design/DAGt3Vm9x2o/LZltJibnTKKvnyzD0Bl4tQ/edit?utm_content=DAGt3Vm9x2o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
},
{
  titulo: "Ejercicio de los 5 Sentidos (Presencia Plena)",
  tipo: "Ejercicio en casa",
  desc: `
    <p>Este ejercicio te ayudará a conectar con el momento presente a través de tus cinco sentidos, reduciendo la ansiedad y mejorando tu calma.</p>
    <p><strong>Cuándo hacerlo:</strong> Cuando necesites reducir el estrés o aumentar tu concentración.</p>
  `,
  detalles: `
    <h4>Pasos del ejercicio:</h4>
    <ol>
      <li><strong>Encuentra un lugar cómodo:</strong> Siéntate o ponte de pie en un sitio tranquilo y sin distracciones.</li>
      <li><strong>Respira profundamente:</strong> Inhala por la nariz, llena tus pulmones, y exhala lentamente por la boca.</li>
      <li><strong>Visual (5):</strong> Observa cinco cosas a tu alrededor: colores, texturas o movimientos.</li>
      <li><strong>Auditivo (4):</strong> Escucha cuatro sonidos que percibas: el viento, tu respiración, o ruidos del entorno.</li>
      <li><strong>Táctil (3):</strong> Identifica tres sensaciones físicas: la textura de tu ropa, la temperatura o la superficie donde te apoyas.</li>
      <li><strong>Olfato (2):</strong> Percibe dos aromas del entorno o de tu respiración.</li>
      <li><strong>Gusto (1):</strong> Nota el sabor en tu boca, incluso si no estás comiendo nada.</li>
      <li><strong>Respira nuevamente:</strong> Inhala profundo y exhala para liberar cualquier tensión.</li>
    </ol>
    <p>Al terminar, dedica unos segundos a sentir la calma y la claridad que has cultivado. 🌿</p>
  `,
  action: "guide"
},
{
  titulo: "Caja de Calma (herramienta sensorial)",
  tipo: "Ejercicio en casa",
  desc: `
    <p>Una herramienta práctica para gestionar emociones intensas como la ansiedad, el estrés o la tristeza.</p>
    <p>Te ayudará a reconectar con tus sentidos, autorregularte y fomentar tu bienestar emocional día a día.</p>
  `,
  detalles: `
    <h4>Objetivo:</h4>
    <p>Aprender a crear una herramienta personal que te brinde calma en momentos de tensión o sobrecarga emocional.</p>

    <h4>Cómo crear tu Caja de Calma 🧘‍♀️</h4>
    <ol>
      <li><strong>Encuentra tu recipiente:</strong> Usa una caja, frasco o bolso grande donde puedas guardar varios objetos. No importa el tamaño, solo que te resulte accesible.</li>
      <li><strong>Elige elementos que te den calma:</strong> Incluye cosas que estimulen tus sentidos de forma positiva, como:</li>
      <ul>
        <li>🫧 Un juguete antiestrés o una pelota blanda</li>
        <li>🌿 Algo con aroma relajante (una esencia, un sobre de té, una vela)</li>
        <li>🎶 Un papel con una frase o canción que te inspire</li>
        <li>🖼️ Una foto, dibujo o imagen que te transmita paz</li>
        <li>💎 Un objeto con textura agradable (piedra lisa, tela suave, etc.)</li>
      </ul>
      <li><strong>Organízala con intención:</strong> Guarda los objetos de forma ordenada y colócala en un lugar visible o de fácil acceso.</li>
      <li><strong>Úsala cuando lo necesites:</strong> En momentos de ansiedad o tristeza, abre tu caja, respira profundo y utiliza uno o más objetos para reconectarte contigo mismo.</li>
    </ol>

    <p><strong>Tip:</strong> Puedes personalizarla con colores, pegatinas o tu nombre. Hazla tuya.  
    <br>Lo importante no es lo que contiene, sino el acto consciente de cuidarte. 🌸</p>

    <div class="overlay-actions">
      <button class="btn" onclick="alert('🌿 ¡Empieza hoy! Busca una caja y agrega tu primer objeto calmante.')">
        Crear mi caja de calma
      </button>
    </div>
  `,
  action: "guide"
},
{
  titulo: "Rutina de Gratitud Nocturna (en 3 minutos)",
  tipo: "Ejercicio en casa",
  desc: `
    <p>Una práctica sencilla para cerrar el día con una actitud positiva, soltar la tensión y reconectarte con lo que realmente importa.</p>
    <p>Ideal para quienes buscan dormir con el corazón más tranquilo y la mente en calma. 🌙</p>
  `,
  detalles: `
    <h4>Objetivo:</h4>
    <p>Terminar el día reconociendo lo bueno que te ha sucedido, fortalecer tu bienestar emocional y favorecer un descanso más reparador.</p>

    <h4>Cómo realizar tu rutina de gratitud ✨</h4>
    <ol>
      <li><strong>Prepara tu espacio:</strong> Busca un lugar tranquilo —tu cama, una silla cómoda o un rincón con luz tenue—. Ten a mano un cuaderno y un bolígrafo.</li>
      <li><strong>Respira y centra tu atención:</strong> Cierra los ojos. Inhala por la nariz durante 4 segundos, retén el aire 2 segundos, y exhala lentamente por la boca. Repite dos veces.</li>
      <li><strong>Escribe tres aspectos positivos:</strong> Anota tres cosas por las que te sientas agradecido hoy. Pueden ser grandes (un logro, una conversación) o pequeños (una taza de café, una sonrisa).</li>
      <li><strong>Profundiza en uno:</strong> Elige uno de los tres y escribe por qué fue significativo. ¿Qué sentiste? ¿Qué aprendiste o valoraste?</li>
      <li><strong>Cierra con intención:</strong> Lee en voz baja lo que escribiste, agradece internamente y deja que esa sensación te acompañe mientras te preparas para dormir.</li>
    </ol>

    <p><strong>Hazlo cuando:</strong> Antes de apagar la luz, al final de un día ajetreado o cuando necesites recargar tu ánimo y energía emocional.</p>

    <div class="overlay-actions">
      <button class="btn" onclick="alert('🌙 Toma tu cuaderno y escribe tus tres motivos de gratitud esta noche.')">
        Iniciar rutina de gratitud
      </button>
    </div>
  `,
  action: "guide"
},
{
  titulo: "Prácticas de Gratitud y Autoestima",
  tipo: "Ejercicio en casa",
  desc: `
    <p>Un conjunto de pequeñas acciones que te ayudan a reconectar con lo bueno de tu vida y fortalecer la forma en que te hablas y te miras. 🌿</p>
    <p>Perfecto para practicar al final del día o cuando necesites un recordatorio de tu propio valor.</p>
  `,
  detalles: `
    <h4>Objetivo:</h4>
    <p>Fomentar la gratitud y fortalecer la autoestima a través de ejercicios simples pero significativos que puedes integrar en tu rutina diaria.</p>

    <h3>🌼 Prácticas de Gratitud</h3>
    <ol>
      <li><strong>El frasco de las cosas buenas:</strong>  
        Cada día, escribe algo bueno que haya pasado, sin importar si fue grande o pequeño, y guárdalo en un frasco.  
        Este hábito entrena tu mente para reconocer lo positivo y te permite releerlo cuando necesites un pequeño impulso.
      </li>
      <li><strong>Momento dorado:</strong>  
        Antes de dormir, cierra los ojos y recuerda con detalle algo que te hizo sentir bien hoy.  
        Intenta recrear los sonidos, olores y sensaciones. Esto fortalece tu memoria emocional y reduce la ansiedad nocturna.
      </li>
      <li><strong>“Esto no lo doy por hecho”:</strong>  
        Escribe tres cosas cotidianas que normalmente pasas por alto (como tener agua, internet, o un amigo que te escucha).  
        Este ejercicio ayuda a valorar lo simple y contrarresta la costumbre de dar todo por sentado.
      </li>
    </ol>

    <h3>💖 Prácticas para la Autoestima</h3>
    <ol>
      <li><strong>“Si fuera mi mejor amigo…”:</strong>  
        Escríbete una carta desde la voz de tu mejor amigo. Reconoce tus esfuerzos, tus logros y lo que te hace una persona valiosa.  
        Este ejercicio promueve la autocompasión y una relación más amable contigo mismo.
      </li>
      <li><strong>El espejo amable:</strong>  
        Mírate al espejo y repite afirmaciones realistas que te hagan sentir bien.  
        Dite lo que necesitas escuchar hoy. Este pequeño gesto te ayudará a mejorar tu lenguaje interno y reforzar tu autoimagen.
      </li>
    </ol>

    <p><strong>Hazlo cuando:</strong> Te sientas desconectado, con baja energía emocional o cuando quieras fortalecer tu bienestar interior.</p>

    <div class="overlay-actions">
      <button class="btn" onclick="alert('💛 Hoy puedes empezar eligiendo una práctica: el frasco, el momento dorado o el espejo amable.')">
        Iniciar práctica de gratitud
      </button>
    </div>
  `,
  action: "guide"
},
{
  titulo: "Ejercicios de Journaling",
  tipo: "Ejercicio en casa",
  desc: `
    <p>Escribir puede ser una forma de sanar, ordenar los pensamientos y descubrir nuevas perspectivas sobre ti mismo. 🖋️</p>
    <p>Estas prácticas te invitan a explorar tus emociones y a transformar la manera en que las miras y comprendes.</p>
  `,
  detalles: `
    <h4>Objetivo:</h4>
    <p>Fomentar la autorreflexión y el autocuidado emocional mediante la escritura consciente, fortaleciendo el sentido personal y la claridad mental.</p>

    <h3>🪶 Ejercicios para empezar</h3>
    <ol>
      <li><strong>Reescribe la historia:</strong>  
        Elige un recuerdo negativo —reciente o antiguo— y vuelve a escribirlo desde otra perspectiva.  
        Puedes hacerlo con compasión hacia ti mismo o desde la mirada de alguien que te quiere.  
        Usa un lenguaje más suave y explicativo: esto reduce la carga emocional asociada al recuerdo.
      </li>

      <li><strong>Diario de valores y decisiones:</strong>  
        Escoge un valor importante para ti (como la justicia, la empatía o el aprendizaje).  
        Escribe una acción que hayas hecho hoy —o podrías hacer mañana— que refleje ese valor.  
        Este ejercicio refuerza tu coherencia interna y mejora tu toma de decisiones.
      </li>

      <li><strong>Escritura libre:</strong>  
        Dedica entre 5 y 10 minutos a escribir sin detenerte. No edites, no borres, solo escribe.  
        Si te cuesta empezar, usa una frase como: <em>“Ahora mismo siento…”</em> o <em>“Últimamente he notado…”</em>.  
        Esta práctica permite liberar tensión, reducir la rumiación y clarificar pensamientos.
      </li>

      <li><strong>Mapa de recursos y seguridad:</strong>  
        Haz una lista de personas, lugares y actividades que te brindan calma o apoyo.  
        Incluye pasos concretos para usar esa red cuando te sientas en crisis.  
        Este mapa aumenta tu sensación de control y seguridad emocional.
      </li>

      <li><strong>Diario de patrones:</strong>  
        Registra tus hábitos diarios: hora de dormir y despertar, estado de ánimo, consumo de café o azúcar, ejercicio y notas breves.  
        Al final de la semana, revisa lo que escribiste y busca relaciones entre tus hábitos y tu bienestar.  
        Es una forma simple de conocerte mejor y cuidar tu equilibrio mental.
      </li>
    </ol>

    <p><strong>Hazlo cuando:</strong> Necesites liberar emociones, aclarar tu mente o reconectar con tu propósito y sentido personal.</p>

    <div class="overlay-actions">
      <button class="btn" onclick="alert('🖊️ Hoy puedes elegir uno de los cinco ejercicios y dedicarle 10 minutos de escritura consciente.')">
        Comenzar journaling
      </button>
    </div>
  `,
  action: "guide"
}



];

/* ================================
   REFERENCIAS
================================== */
const grid = document.getElementById("contentGrid");
const tabs = document.querySelectorAll(".tab");
const searchInput = document.getElementById("searchInput");

// Overlays
const guideOverlay = document.getElementById("guideOverlay");
const guideClose = document.getElementById("guideClose");
const guideTitle = document.getElementById("guideTitle");
const guideDescription = document.getElementById("guideDescription");

const breathOverlay = document.getElementById("breathOverlay");
const breathClose = document.getElementById("breathClose");
const breathPhase = document.getElementById("breathPhase");
const breathCircle = document.getElementById("breathCircle");
const breathStart = document.getElementById("breathStart");
const breathStop = document.getElementById("breathStop");

let state = { type: "all", q: "" };
let breathTimer = null, inhale = true;

/* ================================
   RENDERIZADO DE CARDS
================================== */
function cardHTML(it) {
  const badge = `<span class="badge">${it.tipo}</span>`;

  let buttons = "";

  if (it.action === "breathing") {
    buttons = `<button class="btn" data-breath>Iniciar</button>`;
  } 
  else if (it.tipo === "Guía" || it.tipo === "Ejercicio en casa") {
    buttons = `<button class="btn" data-guide>Ver</button>`;
  } 
  else {
    // Infografías u otros tipos con enlaces externos
    if (it.link) buttons += `<a class="btn" href="${it.link}" target="_blank" rel="noopener">Ver</a>`;
    if (it.descargar) buttons += `<a class="btn outline" href="${it.descargar}" target="_blank" rel="noopener">Descargar</a>`;
  }

  return `
    <article class="card">
      ${badge}
      <h3>${it.titulo}</h3>
      <p>${it.desc}</p>
      <div class="actions">${buttons}</div>
    </article>
  `;
}

function render() {
  const q = state.q.trim().toLowerCase();
  const list = ITEMS.filter(it => {
    const okT = state.type === "all" || it.tipo === state.type;
    const okQ =
      !q ||
      it.titulo.toLowerCase().includes(q) ||
      it.desc.toLowerCase().includes(q);
    return okT && okQ;
  });

  grid.innerHTML = list.map(cardHTML).join("") || `<div class="note">Sin resultados.</div>`;

  // Bind interacciones
  document.querySelectorAll("[data-guide]").forEach(btn =>
    btn.addEventListener("click", openGuide)
  );
  document.querySelectorAll("[data-breath]").forEach(btn =>
    btn.addEventListener("click", openBreathing)
  );
}
render();

/* ================================
   GUÍAS
================================== */
function openGuide(e) {
  const title = e.target.closest(".card").querySelector("h3").textContent;
  const item = ITEMS.find(it => it.titulo === title);
  if (!item) return;
  guideTitle.textContent = item.titulo;
  guideDescription.innerHTML = item.detalles;
  guideOverlay.classList.add("show");
  guideOverlay.setAttribute("aria-hidden", "false");
}

function closeGuide() {
  guideOverlay.classList.remove("show");
  guideOverlay.setAttribute("aria-hidden", "true");
}
guideClose.addEventListener("click", closeGuide);
guideOverlay.addEventListener("click", e => { if (e.target === guideOverlay) closeGuide(); });

/* ================================
   RESPIRACIÓN GUIADA
================================== */
function openBreathing() {
  breathOverlay.classList.add("show");
  breathPhase.textContent = "Inhala";
  breathCircle.style.transform = "scale(1.0)";
}

function closeBreathing() {
  breathOverlay.classList.remove("show");
  stopBreathing();
}
breathClose.addEventListener("click", closeBreathing);
breathOverlay.addEventListener("click", e => { if (e.target === breathOverlay) closeBreathing(); });

function startBreathing() {
  stopBreathing();
  inhale = true;
  breathPhase.textContent = "Inhala";
  breathCircle.style.transform = "scale(1.25)";
  breathTimer = setInterval(() => {
    inhale = !inhale;
    breathPhase.textContent = inhale ? "Inhala" : "Exhala";
    breathCircle.style.transform = inhale ? "scale(1.25)" : "scale(0.9)";
  }, 4000);
}
function stopBreathing() {
  if (breathTimer) clearInterval(breathTimer);
  breathTimer = null;
  breathCircle.style.transform = "scale(1)";
}
breathStart.addEventListener("click", startBreathing);
breathStop.addEventListener("click", stopBreathing);

/* ================================
   FILTROS Y BÚSQUEDA
================================== */
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(x => x.classList.remove("active"));
    tab.classList.add("active");
    state.type = tab.dataset.type;
    render();
  });
});
searchInput.addEventListener("input", e => {
  state.q = e.target.value;
  render();
});
// Botón "Volver atrás"
document.getElementById("backButton")?.addEventListener("click", () => {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html"; // en caso de que no haya historial
  }
});

