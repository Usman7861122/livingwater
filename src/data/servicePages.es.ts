// Spanish text for every service page. Order matches servicePages.ts exactly.
// FAQ entries that are shared across services (insurance, Spanish) are in `sharedEs` below and are skipped here.
type P = [string, string];
export type SvcEs = {
  title: string; short: string; summary: string; heroAlt: string;
  labels: [string, string, string]; alts: [string, string, string];
  intro: [string, string]; help: P[]; when: P[]; steps: [P, P]; faq: P[];
};

export const sharedEs: Record<string, string> = {
  'We accept many plans, including Medi-Cal and Medicare. See the list on our home page, or call our {city} clinic to check.':
    'Aceptamos muchos planes, incluidos Medi-Cal y Medicare. Vea la lista en nuestra página de inicio o llame a nuestra clínica de {city} para confirmar.',
  'Yes. Our {city} team speaks English and Spanish, and the whole website has a Spanish version.':
    'Sí. Nuestro equipo de {city} habla inglés y español, y todo el sitio web tiene una versión en español.',
  'Do you take my insurance?': '¿Aceptan mi seguro?',
  'Do you offer care in Spanish?': '¿Ofrecen atención en español?',
  'Can I get care in Spanish?': '¿Puedo recibir atención en español?',
};

export const esServices: Record<string, SvcEs> = {
  'family-medicine': {
    title: 'Medicina Familiar', short: 'medicina familiar',
    summary: 'Un equipo de confianza para todas las edades. Desde los chequeos de recién nacidos hasta la atención de los abuelos, cuidamos de toda la familia bajo un mismo techo.',
    heroAlt: 'Médico familiar hablando con una madre y su hija pequeña',
    labels: ['Bebés y niños', 'Adolescentes y padres', 'Adultos y personas mayores'],
    alts: ['Pediatra revisando a un bebé', 'Médico hablando con una madre y su hijo adolescente', 'Médico hablando con una mujer mayor'],
    intro: [
      'La medicina familiar en {city} significa un médico o proveedor que lo conoce a usted, a sus hijos y a sus padres. Living Water Clinic ayuda a las familias de {city} a tratar los problemas de salud a tiempo, controlar las enfermedades de largo plazo y llegar a un especialista cuando hace falta.',
      'En nuestra ubicación de {clinic}, tratamos a la persona completa: cuerpo, mente y espíritu. Las visitas nunca son apuradas y explicamos todo con palabras sencillas, en inglés o en español.',
    ],
    help: [
      ['Chequeos para todas las edades', 'Visitas de niño sano, exámenes físicos escolares y deportivos, chequeos para adultos y visitas de bienestar para personas mayores, para las familias de {city}.'],
      ['Enfermedades y lesiones de todos los días', 'Resfriados, gripe, infecciones, sarpullidos, lesiones leves y otros problemas de salud que no pueden esperar.'],
      ['Enfermedades de largo plazo', 'Atención continua para la diabetes, la presión alta, el asma, el colesterol alto y más.'],
      ['Prevención y pruebas de detección', 'Vacunas, análisis de sangre, pruebas de detección de cáncer y planes de vida saludable hechos para usted.'],
    ],
    when: [
      ['No tiene un médico de cabecera', 'Elija un equipo de {city} para toda la familia, y sus expedientes se quedan en un solo lugar.'],
      ['Un niño necesita vacunas o un formulario escolar', 'Mantenemos las vacunas al día y completamos los formularios escolares y deportivos.'],
      ['Un problema de salud sigue regresando', 'El cansancio, el dolor, el azúcar alta o la presión alta deben revisarse, no ignorarse.'],
      ['Necesita una referencia', 'Conectamos a los pacientes de {city} con nuestros especialistas o con socios de confianza.'],
    ],
    steps: [
      ['Paso 1 · Su primera visita', 'En {clinic}, hablamos de su salud, su historial familiar y sus metas. Luego hacemos un examen sencillo y, si hace falta, análisis de sangre o pruebas de detección. Traiga su tarjeta de seguro y una lista de sus medicinas.'],
      ['Paso 2 · Su plan de atención', 'Juntos creamos un plan que se ajusta a su vida. Muchas familias de {city} regresan para chequeos regulares, y estamos aquí entre visitas para preguntas y seguimiento.'],
    ],
    faq: [
      ['¿Ofrecen medicina familiar en {city}?', 'Sí. Nuestro equipo de medicina familiar en {city} atiende a pacientes de todas las edades, desde bebés hasta personas mayores.'],
      ['¿Qué debo traer a mi primera visita?', 'Su identificación con foto, su tarjeta de seguro, una lista de sus medicinas actuales y cualquier expediente médico anterior que tenga.'],
    ],
  },
  'pediatric-care': {
    title: 'Atención Pediátrica', short: 'atención pediátrica',
    summary: 'Atención de salud suave y cariñosa para bebés, niños y adolescentes, desde los primeros chequeos hasta las vacunas escolares y las visitas por enfermedad.',
    heroAlt: 'Pediatra examinando a un niño mientras su padre o madre observa',
    labels: ['Recién nacidos y bebés', 'Niños en edad escolar', 'Adolescentes'],
    alts: ['Pediatra revisando a un bebé', 'Médico hablando con un niño y su padre o madre', 'Médico hablando con un adolescente'],
    intro: [
      'La atención pediátrica en {city} empieza con una promesa sencilla: su hijo está seguro, es escuchado y recibe un trato amable. Nuestros proveedores saben cómo tranquilizar a los más pequeños y cómo hablar con los adolescentes de una manera que los respete.',
      'En nuestra ubicación de {clinic}, seguimos el crecimiento de su hijo desde la primera semana de vida hasta la adolescencia, y lo mantenemos informado en cada paso.',
    ],
    help: [
      ['Chequeos de niño sano', 'Visitas regulares para vigilar el crecimiento, el desarrollo, la vista, el oído y los hábitos saludables.'],
      ['Vacunas', 'Vacunas a tiempo, además de formularios escolares y de guardería para las familias de {city}.'],
      ['Visitas por enfermedad y lesiones', 'Fiebre, infecciones de oído, tos, problemas de estómago, sarpullidos y lesiones leves.'],
      ['Exámenes físicos escolares y deportivos', 'Exámenes rápidos y completos para que su hijo esté listo para la clase y el juego.'],
    ],
    when: [
      ['Su bebé es nuevo en la familia', 'Los chequeos tempranos detectan problemas pequeños y responden las preguntas de los padres primerizos.'],
      ['Toca ponerle vacunas', 'Mantenerse al día protege a su hijo y a sus compañeros de clase.'],
      ['Su hijo está enfermo', 'La fiebre, la dificultad para respirar o una tos que no se quita deben revisarse.'],
      ['Tiene preocupaciones sobre el crecimiento o el aprendizaje', 'Hable con nosotros pronto. Muchas preocupaciones son fáciles de apoyar cuando se detectan a edad temprana.'],
    ],
    steps: [
      ['Paso 1 · Conozca a su proveedor', 'En {clinic}, revisamos el historial, el crecimiento y las vacunas de su hijo. Respondemos sus preguntas y hacemos un examen suave, siempre al ritmo de su hijo.'],
      ['Paso 2 · Un plan para crecer', 'Programamos visitas regulares, actualizamos las vacunas y compartimos consejos sencillos sobre el sueño, la comida y el tiempo de pantalla que se ajusten a su familia.'],
    ],
    faq: [
      ['¿A qué edad puede atenderse mi hijo en {city}?', 'Nuestro equipo de {city} atiende a pacientes desde recién nacidos hasta la adolescencia. Llámenos para programar la primera visita de su bebé.'],
      ['¿Ponen las vacunas escolares?', 'Sí. Mantenemos las vacunas al día y completamos los formularios escolares y de guardería.'],
      ['¿Pueden los padres quedarse con su hijo?', 'Por supuesto. Los padres son bienvenidos en todas las visitas.'],
    ],
  },
  'annual-wellness-visit': {
    title: 'Visita Anual de Bienestar', short: 'visitas anuales de bienestar',
    summary: 'Un chequeo anual que revisa toda su salud, para detectar los problemas pequeños a tiempo y mantenerlo en buen camino.',
    heroAlt: 'Médico midiendo la presión arterial de un paciente durante un chequeo anual',
    labels: ['Revise sus números', 'Hable de sus metas', 'Planee el año'],
    alts: ['Médico midiendo la presión arterial', 'Médico hablando con un paciente sobre sus metas de salud', 'Médico revisando un plan de salud con un paciente'],
    intro: [
      'Una visita anual de bienestar en {city} es un momento al año para revisar toda su salud, no solo un problema. Revisamos sus números, repasamos sus medicinas y hablamos de lo que le importa.',
      'En nuestra ubicación de {clinic}, la visita es tranquila y clara. Usted sale sabiendo cómo está y qué hacer después. Muchos planes de seguro, incluido Medicare, cubren una visita anual de bienestar.',
    ],
    help: [
      ['Repaso de su salud', 'Revisamos su historial, los riesgos familiares, sus medicinas y sus hábitos diarios.'],
      ['Revisiones sencillas', 'Presión arterial, peso, vista y oído, además de análisis cuando hagan falta.'],
      ['Pruebas de detección y vacunas', 'Pruebas y vacunas según su edad para mantenerlo protegido.'],
      ['Un plan personal de prevención', 'Pasos claros sobre alimentación, movimiento, sueño y bienestar mental.'],
    ],
    when: [
      ['Ha pasado un año o más', 'Una visita anual mantiene al día sus expedientes y su plan.'],
      ['Es nuevo en Medicare', 'Ayudamos a las personas mayores de {city} a usar sus beneficios de bienestar.'],
      ['Se siente bien pero quiere tranquilidad', 'Muchos problemas de salud no dan señales al principio.'],
      ['Sus medicinas han cambiado', 'Revisamos todo lo que toma para que funcione de forma segura en conjunto.'],
    ],
    steps: [
      ['Paso 1 · Antes de su visita', 'Traiga su tarjeta de seguro, una lista de medicinas y cualquier pregunta. Para {clinic}, llame antes para preguntar por los análisis o el ayuno.'],
      ['Paso 2 · Durante y después', 'Revisamos, conversamos y planeamos juntos. Usted recibe un plan escrito sencillo, y programamos las pruebas de seguimiento o las visitas que hagan falta.'],
    ],
    faq: [
      ['¿Es lo mismo la visita de bienestar que una visita por enfermedad?', 'No. Se enfoca en la prevención y la planificación. Si surge un problema nuevo, también podemos revisarlo.'],
      ['¿Cuánto dura la visita?', 'La mayoría de las visitas duran de 30 a 45 minutos en nuestra clínica de {city}.'],
      ['¿Necesito estar en ayunas?', 'Solo si pedimos ciertos análisis de sangre. Nuestro equipo se lo dirá cuando haga su cita.'],
    ],
  },
  'virtual-urgent-care': {
    title: 'Atención Urgente Virtual', short: 'atención urgente virtual',
    summary: 'Hable con un proveedor por video desde su casa cuando no pueda esperar una visita a la oficina. Ayuda rápida y sencilla para problemas de salud comunes.',
    heroAlt: 'Paciente en una visita por video con un médico usando una computadora portátil',
    labels: ['Conéctese desde casa', 'Hable cara a cara', 'Reciba un plan claro'],
    alts: ['Paciente en una videollamada con un médico', 'Médico hablando por video con un paciente', 'Persona usando un teléfono para una visita de telesalud'],
    intro: [
      'La atención urgente virtual permite a los pacientes de {city} hablar con un proveedor de Living Water por video, sin manejar hasta la clínica. Es una manera sencilla de recibir ayuda para problemas comunes el mismo día.',
      'Su equipo de atención de {clinic} puede ver su expediente, enviar recetas a una farmacia cercana y programar una visita en persona si necesita una revisión más cercana.',
    ],
    help: [
      ['Resfriados, gripe y tos', 'Respuestas rápidas sobre enfermedades comunes, incluido cuándo descansar y cuándo ser atendido.'],
      ['Sarpullidos, ojo rojo e infecciones leves', 'Muchos se pueden revisar bien por video.'],
      ['Preguntas sobre medicinas', 'Resurtidos, efectos secundarios y cambios sencillos en su plan.'],
      ['Visitas de seguimiento', 'Informe cómo se siente después de una visita sin ir a la clínica.'],
    ],
    when: [
      ['No puede llegar a la clínica', 'El trabajo, los viajes, los niños o la falta de energía no deben impedirle recibir atención.'],
      ['El problema no es una emergencia', 'Las visitas virtuales son mejores para problemas comunes que no ponen la vida en riesgo.'],
      ['Quiere una respuesta rápida', 'Evite la sala de espera y hable con un proveedor desde su casa.'],
      ['Necesita un seguimiento rápido', 'Cuente cómo se siente y actualice su plan por video.'],
    ],
    steps: [
      ['Paso 1 · Conéctese', 'Llame a {clinic} o solicite una visita. Le enviamos un enlace sencillo. Use un teléfono, una tableta o una computadora con cámara, en un lugar tranquilo.'],
      ['Paso 2 · Conozca a su proveedor', 'Describa cómo se siente, muestre el problema si hace falta y reciba un plan. Si necesita un examen en persona, le ayudamos a programarlo.'],
    ],
    faq: [
      ['¿Es segura la atención virtual?', 'Es una opción segura para problemas comunes y leves. Si creemos que necesita un examen en persona, se lo diremos.'],
      ['¿Qué necesito para una visita por video?', 'Un teléfono, una tableta o una computadora con cámara y una conexión a internet estable.'],
      ['¿Y si es una emergencia?', 'Llame al 911 de inmediato. La atención virtual no es para emergencias como dolor en el pecho o dificultad para respirar.'],
    ],
  },
  diabetes: {
    title: 'Diabetes', short: 'atención de la diabetes',
    summary: 'Apoyo cariñoso y práctico para controlar la diabetes, reducir sus riesgos y sentirse fuerte, con un equipo que conoce a su familia.',
    heroAlt: 'Paciente midiendo su azúcar en la sangre con un glucómetro',
    labels: ['Conozca sus números', 'Coma bien', 'Viva bien'],
    alts: ['Persona midiendo la glucosa en la sangre', 'Médico hablando con un paciente sobre alimentos saludables', 'Paciente sonriendo con un médico después de una visita por diabetes'],
    intro: [
      'La atención de la diabetes en {city} se basa en pasos sencillos y constantes. Le ayudamos a entender su azúcar en la sangre, a elegir alimentos que disfrute y a usar las medicinas de forma segura, sin juzgarlo.',
      'En nuestra ubicación de {clinic}, su equipo revisa toda su salud, incluidos el corazón, los ojos, los pies y los riñones, porque la diabetes puede afectarlos a todos. Estamos aquí a largo plazo.',
    ],
    help: [
      ['Revisiones de azúcar y A1C', 'Pruebas regulares y una meta clara que se ajuste a usted.'],
      ['Medicinas e insulina', 'Planes seguros y fáciles de seguir, y ayuda con los suministros.'],
      ['Orientación sobre comida y actividad', 'Ideas prácticas para las familias de {city}, con alimentos que ya le gustan.'],
      ['Revisión de complicaciones', 'Revisiones de ojos, pies y riñones, con referencias a nuestros especialistas cuando hagan falta.'],
    ],
    when: [
      ['Le dijeron que tiene prediabetes', 'Los cambios a tiempo pueden reducir mucho su riesgo.'],
      ['Siempre tiene sed o cansancio', 'La sed fuerte, orinar con frecuencia y el cansancio deben revisarse.'],
      ['Sus números de azúcar son difíciles de controlar', 'Podemos ajustar su plan y apoyarlo.'],
      ['Ha pasado tiempo desde su última revisión', 'Las visitas regulares ayudan a prevenir problemas graves.'],
    ],
    steps: [
      ['Paso 1 · Revisar y entender', 'En {clinic}, repasamos sus análisis, sus medicinas y su vida diaria. Fijamos metas sencillas juntos.'],
      ['Paso 2 · Apoyo constante', 'Seguimos sus números, ajustamos su plan y lo conectamos con atención de los ojos, los pies y los riñones cuando ayude.'],
    ],
    faq: [
      ['¿Se puede controlar la diabetes?', 'Sí. Muchas personas viven bien con diabetes con el plan, las medicinas y el apoyo correctos.'],
      ['¿Ayudan con la prediabetes?', 'Sí. Nuestro equipo de {city} ayuda a reducir el riesgo de diabetes tipo 2 con pasos sencillos de estilo de vida.'],
      ['¿También ofrecen atención para los ojos y los pies?', 'Sí. Ofrecemos optometría y cuidado de los pies dentro de Living Water Clinic.'],
    ],
  },
  asthma: {
    title: 'Asma', short: 'atención del asma',
    summary: 'Planes de acción claros y apoyo constante para que usted y su familia respiren mejor todos los días.',
    heroAlt: 'Niño usando un inhalador con su padre o madre',
    labels: ['Respire mejor', 'Revise sus pulmones', 'Conozca su plan'],
    alts: ['Niño usando un inhalador para el asma', 'Médico escuchando los pulmones de un paciente', 'Médico explicando un plan para el asma a un paciente'],
    intro: [
      'La atención del asma en {city} le ayuda a usted y a su hijo a adelantarse a los síntomas. Encontramos sus desencadenantes, elegimos las medicinas correctas y le enseñamos qué hacer si respirar se vuelve difícil.',
      'En nuestra ubicación de {clinic}, cada paciente recibe un plan de acción para el asma por escrito y con palabras sencillas, para que siempre sepa el siguiente paso.',
    ],
    help: [
      ['Pruebas respiratorias y exámenes', 'Revisamos qué tan bien funcionan sus pulmones y buscamos señales de asma.'],
      ['Inhaladores y medicinas', 'La medicina correcta y enseñanza para que use bien su inhalador.'],
      ['Plan para los desencadenantes', 'El polvo, el humo, el polen y el clima pueden influir. Ayudamos a las familias de {city} a planear alrededor de ellos.'],
      ['Un plan de acción para el asma', 'Una guía sencilla de verde, amarillo y rojo para los días buenos y los días difíciles.'],
    ],
    when: [
      ['Tose o silba al respirar por la noche', 'Los síntomas nocturnos pueden significar que el asma no está bien controlada.'],
      ['Usa su inhalador de rescate con frecuencia', 'Es una señal de que su plan diario quizás necesite cambios.'],
      ['Su hijo se queda sin aire al jugar', 'Podemos ayudarlo a mantenerse activo con un plan claro.'],
      ['Tuvo un susto de asma', 'Una visita de seguimiento puede ayudar a prevenir el siguiente.'],
    ],
    steps: [
      ['Paso 1 · Encuentre sus desencadenantes', 'En {clinic}, hablamos de los síntomas, del hogar y del trabajo, y revisamos su respiración.'],
      ['Paso 2 · Cree su plan', 'Recetamos medicinas, le mostramos cómo usarlas y escribimos su plan de acción. Programamos seguimientos para que siga funcionando.'],
    ],
    faq: [
      ['¿Pueden los niños tener asma?', 'Sí. El asma es común en los niños, y nuestro equipo pediátrico puede ayudar.'],
      ['¿Mi hijo superará el asma?', 'Algunos niños mejoran con la edad, pero todos deben tener un plan y revisiones regulares.'],
      ['¿Cuándo debo ir a la sala de emergencias?', 'Si le cuesta respirar, su inhalador de rescate no ayuda o los labios se ponen azules, llame al 911.'],
    ],
  },
  'weight-loss-management': {
    title: 'Control de Peso', short: 'control de peso',
    summary: 'Apoyo amable y realista para bajar de peso de forma saludable, hecho a la medida de su vida, su comida y sus metas.',
    heroAlt: 'Mujer preparando una comida saludable con frutas y verduras',
    labels: ['Coma bien', 'Muévase más', 'Mantenga la motivación'],
    alts: ['Frutas y verduras frescas', 'Persona caminando al aire libre para hacer ejercicio', 'Médico animando a un paciente'],
    intro: [
      'El control de peso en {city} no se trata de soluciones rápidas. Se trata de cambios constantes que usted pueda mantener, con un equipo que escucha y no juzga.',
      'En nuestra ubicación de {clinic}, miramos el panorama completo: comida, sueño, estrés, medicinas y condiciones de salud. Luego creamos un plan que se ajusta a su familia y a su presupuesto.',
    ],
    help: [
      ['Repaso de su salud y su peso', 'Revisamos su salud, sus análisis y sus metas antes de hacer un plan.'],
      ['Planes de comida y actividad', 'Comidas y movimiento prácticos que funcionan para las familias ocupadas de {city}.'],
      ['Apoyo médico', 'Cuando es lo correcto para usted, hablamos de las opciones de medicinas de forma segura.'],
      ['Revisiones regulares', 'Seguimientos cortos que lo mantienen motivado y en buen camino.'],
    ],
    when: [
      ['Su peso afecta su salud', 'Puede aumentar el riesgo de diabetes, presión alta y dolor en las articulaciones.'],
      ['Las dietas no le han funcionado antes', 'Un plan médico puede hacer una diferencia real.'],
      ['Quiere sentir más energía', 'Los pasos pequeños pueden mejorar el sueño, el ánimo y la fuerza.'],
      ['Quiere apoyo, no presión', 'Celebramos cada logro.'],
    ],
    steps: [
      ['Paso 1 · Empiece con su historia', 'En {clinic}, hablamos de lo que ha probado, lo que disfruta y lo que le cuesta. Revisamos su salud y sus análisis.'],
      ['Paso 2 · Cree y ajuste', 'Fijamos metas pequeñas y claras y las revisamos a menudo. Su plan cambia al ritmo que usted cambia.'],
    ],
    faq: [
      ['¿Necesito bajar mucho de peso?', 'No. Cualquier cantidad de pérdida de peso saludable puede ayudar a su salud, y empezamos donde usted está.'],
      ['¿Tendré que seguir una dieta estricta?', 'No. Nos enfocamos en una alimentación balanceada que pueda mantener a largo plazo.'],
      ['¿Es solo para adultos?', 'Nuestro equipo también puede orientar a las familias, y los proveedores pediátricos ayudan con el crecimiento saludable de los niños.'],
    ],
  },
  'remote-patient-monitoring': {
    title: 'Monitoreo Remoto de Pacientes', short: 'monitoreo remoto de pacientes',
    summary: 'Aparatos sencillos en casa envían sus números de salud a su equipo de atención, para que la ayuda llegue antes y usted haga menos viajes.',
    heroAlt: 'Persona mayor midiéndose la presión arterial en casa con un monitor',
    labels: ['Revise en casa', 'Manténgase conectado', 'Sienta apoyo'],
    alts: ['Persona mayor usando un monitor de presión arterial', 'Persona usando un reloj inteligente para vigilar su salud', 'Médico revisando números de salud con un paciente'],
    intro: [
      'El monitoreo remoto de pacientes en {city} permite que su equipo de Living Water vigile desde su casa números importantes, como la presión arterial, el azúcar en la sangre o el peso.',
      'En nuestra ubicación de {clinic}, su equipo revisa las lecturas y lo llama si algo se ve mal. Usted tiene tranquilidad y menos viajes a la clínica.',
    ],
    help: [
      ['Monitoreo de la presión arterial', 'Un brazalete sencillo en casa para seguir sus números con el tiempo.'],
      ['Monitoreo del azúcar en la sangre', 'Comparta sus lecturas para que su plan se ajuste a tiempo.'],
      ['Revisiones de peso y corazón', 'Útil para las enfermedades del corazón y los pulmones.'],
      ['Seguimiento del equipo de atención', 'Nuestro equipo de {city} revisa sus lecturas y se comunica con usted cuando hace falta.'],
    ],
    when: [
      ['Tiene una enfermedad de largo plazo', 'Las lecturas regulares ayudan a su equipo a detectar cambios rápido.'],
      ['Ir a la clínica le resulta difícil', 'Manténgase en contacto desde casa.'],
      ['Estuvo hospitalizado recientemente', 'Un seguimiento más cercano puede ayudarle a mantenerse bien.'],
      ['Quiere más tranquilidad', 'Sepa que alguien está vigilando sus números.'],
    ],
    steps: [
      ['Paso 1 · Prepárese', 'En {clinic}, elegimos el aparato correcto, le mostramos cómo usarlo y lo conectamos con su equipo de atención.'],
      ['Paso 2 · Revise y conéctese', 'Usted toma lecturas sencillas en casa. Nuestro equipo las revisa, llama si hace falta y actualiza su plan.'],
    ],
    faq: [
      ['¿Es difícil de usar?', 'No. Los aparatos son fáciles de usar, y nuestro equipo le enseñará paso a paso.'],
      ['¿Quién ve mis lecturas?', 'Su equipo de atención de Living Water las revisa para apoyar su atención.'],
      ['¿Reemplaza las visitas a la oficina?', 'No. Agrega apoyo entre visitas y le ayuda a recibir atención más pronto.'],
    ],
  },
  'chiropractic-care': {
    title: 'Atención Quiropráctica', short: 'atención quiropráctica',
    summary: 'Atención suave y manual para el dolor de espalda, cuello y articulaciones, para que se mueva con comodidad y regrese a su día.',
    heroAlt: 'Quiropráctico tratando la espalda de un paciente',
    labels: ['Espalda y cuello', 'Articulaciones y músculos', 'Manténgase activo'],
    alts: ['Quiropráctico ajustando la espalda de un paciente', 'Terapeuta tratando el hombro de un paciente', 'Persona estirándose al aire libre'],
    intro: [
      'La atención quiropráctica en {city} se enfoca en la columna, las articulaciones y los músculos. Nuestros quiroprácticos usan métodos suaves y manuales para aliviar el dolor y ayudar a su cuerpo a moverse como debe.',
      'En nuestra ubicación de {clinic}, la atención es parte de su plan de salud completo, así que su quiropráctico puede trabajar junto con su proveedor de atención primaria.',
    ],
    help: [
      ['Dolor de espalda y cuello', 'Alivio para la rigidez, las molestias y el dolor por el trabajo, el sueño o una lesión.'],
      ['Cuidado de articulaciones y músculos', 'Ayuda para los hombros, las caderas y otras articulaciones adoloridas.'],
      ['Dolores de cabeza por tensión en el cuello', 'Atención para los dolores de cabeza relacionados con el cuello y la postura.'],
      ['Consejos de movimiento y postura', 'Ejercicios sencillos que puede hacer en casa o en el trabajo en {city}.'],
    ],
    when: [
      ['Le duele la espalda al sentarse o levantar peso', 'La atención suave puede aliviar el dolor y proteger su espalda.'],
      ['Tiene el cuello rígido', 'Las muchas horas en un escritorio o frente a una pantalla suelen causarlo.'],
      ['Una lesión no sana', 'La atención manual puede apoyar su recuperación.'],
      ['Quiere mantenerse activo', 'Moverse bien ayuda a prevenir problemas futuros.'],
    ],
    steps: [
      ['Paso 1 · Examen e historial', 'En {clinic}, le preguntamos sobre su dolor, revisamos cómo se mueve y decidimos si la atención quiropráctica es adecuada para usted.'],
      ['Paso 2 · Tratamiento y plan para casa', 'Empezamos con atención suave, compartimos ejercicios sencillos y revisamos su progreso en cada visita.'],
    ],
    faq: [
      ['¿Duele la atención quiropráctica?', 'La mayoría de los pacientes sienten alivio. La atención es suave y puede decirnos si algo le incomoda.'],
      ['¿Cuántas visitas necesitaré?', 'Depende de su problema. Le daremos un plan después de su primer examen.'],
      ['¿Necesito una referencia?', 'A menudo no. Llame a nuestra clínica de {city} y le orientaremos.'],
    ],
  },
  optometry: {
    title: 'Optometría', short: 'optometría y cuidado de los ojos',
    summary: 'Exámenes de la vista, lentes y atención de la salud de los ojos para toda la familia, para que todos vean con claridad y comodidad.',
    heroAlt: 'Optometrista haciendo un examen de la vista a un paciente',
    labels: ['Exámenes de la vista', 'Lentes y lentes de contacto', 'Salud de los ojos'],
    alts: ['Optometrista revisando los ojos de un paciente', 'Paciente escogiendo lentes nuevos', 'Doctor de los ojos con un paciente'],
    intro: [
      'La optometría en {city} significa atención completa de los ojos para adultos y niños. Revisamos qué tan bien ve, buscamos enfermedades de los ojos y le ayudamos a encontrar lentes o lentes de contacto que se ajusten a su vida.',
      'En nuestra ubicación de {clinic}, el cuidado de los ojos es parte de su equipo de salud completo. Esto importa más si tiene diabetes o presión alta, que pueden afectar los ojos.',
    ],
    help: [
      ['Exámenes completos de la vista', 'Pruebas de la vista, presión del ojo y una revisión de la salud de sus ojos.'],
      ['Lentes y lentes de contacto', 'Recetas y ajustes para una vista clara y cómoda.'],
      ['Problemas e infecciones de los ojos', 'Ojos rojos, resequedad, irritación y más.'],
      ['Revisiones de los ojos para diabéticos', 'Exámenes regulares para proteger su vista si tiene diabetes.'],
    ],
    when: [
      ['Su vista está borrosa', 'La visión borrosa nueva, los dolores de cabeza o el cansancio de los ojos pueden significar que necesita lentes.'],
      ['Han pasado más de uno o dos años', 'Los exámenes regulares mantienen al día su receta y la salud de sus ojos.'],
      ['Tiene diabetes o presión alta', 'Las revisiones anuales de los ojos son importantes.'],
      ['Su hijo entrecierra los ojos o se sienta muy cerca de la pantalla', 'Las revisiones a tiempo ayudan a los niños de {city} a que les vaya bien en la escuela.'],
    ],
    steps: [
      ['Paso 1 · Su examen de la vista', 'En {clinic}, probamos su vista, revisamos la salud de sus ojos y hablamos de cualquier problema que note.'],
      ['Paso 2 · Su solución', 'Recetamos lentes o lentes de contacto si hace falta, tratamos los problemas de los ojos o lo referimos a un especialista.'],
    ],
    faq: [
      ['¿Cada cuánto debo hacerme un examen de la vista?', 'La mayoría de los adultos necesitan uno cada uno o dos años. Le diremos qué es lo mejor para usted.'],
      ['¿Atienden a niños?', 'Sí. Nuestro equipo de {city} ofrece exámenes de la vista para niños y adultos.'],
      ['¿Puedo conseguir lentes aquí?', 'Llame a la clínica para preguntar por los armazones y los cristales disponibles en su ubicación.'],
    ],
  },
  'foot-care': {
    title: 'Cuidado de los Pies', short: 'cuidado de los pies',
    summary: 'Tratamiento cariñoso para el dolor de pies y tobillos, las uñas, la piel y la salud de los pies con diabetes, para que siga caminando con comodidad.',
    heroAlt: 'Podiatra examinando el pie de un paciente',
    labels: ['Dolor de pies y tobillos', 'Cuidado de pies con diabetes', 'Siga caminando'],
    alts: ['Podiatra revisando un pie', 'Médico examinando el tobillo de un paciente', 'Persona caminando con comodidad al aire libre'],
    intro: [
      'El cuidado de los pies en {city} le ayuda a mantenerse en pie. Nuestros proveedores tratan el dolor de pies y tobillos, los problemas de piel y uñas, y ayudan a proteger sus pies si tiene diabetes.',
      'En nuestra ubicación de {clinic}, el cuidado de los pies es parte de su plan de salud completo. Sus pies nos dicen mucho sobre su circulación, sus nervios y su salud en general.',
    ],
    help: [
      ['Dolor de talón, arco y tobillo', 'Alivio para las molestias comunes por el trabajo, el deporte o el calzado gastado.'],
      ['Revisión de pies con diabetes', 'Exámenes regulares para encontrar llagas o cambios en los nervios a tiempo.'],
      ['Uñas y piel', 'Cuidado para uñas encarnadas, uñas gruesas, callos y hongos.'],
      ['Zapatos y soporte', 'Consejos sobre zapatos y plantillas que se ajusten a sus pies.'],
    ],
    when: [
      ['Le duele el talón al pararse', 'El dolor de talón por la mañana es común y se puede tratar.'],
      ['Tiene diabetes', 'Un examen anual de los pies es importante, y antes si ve una llaga.'],
      ['Una uña o una llaga no sana', 'No espere. Los problemas pequeños pueden volverse grandes.'],
      ['Pasa todo el día de pie', 'Un buen cuidado de los pies ayuda a los trabajadores de {city} a sentirse cómodos.'],
    ],
    steps: [
      ['Paso 1 · Examen', 'En {clinic}, le preguntamos sobre su dolor y su vida diaria y examinamos sus pies, su piel y su forma de caminar.'],
      ['Paso 2 · Tratamiento', 'Tratamos la causa con pasos sencillos como estiramientos, soportes o cuidado de uñas y piel. Lo referimos cuando necesita algo más.'],
    ],
    faq: [
      ['¿Necesito cirugía para el dolor de pies?', 'La mayoría de los problemas de los pies mejoran con atención sencilla y sin cirugía.'],
      ['¿Por qué las personas con diabetes necesitan exámenes de los pies?', 'La diabetes puede reducir la sensibilidad y el flujo de sangre, así que las lesiones pequeñas pueden pasar sin notarse.'],
      ['¿Pueden tratar las uñas encarnadas?', 'Sí. Llame a nuestra clínica de {city} si su dedo está rojo, adolorido o hinchado.'],
    ],
  },
  nephrology: {
    title: 'Nefrología', short: 'nefrología y cuidado de los riñones',
    summary: 'Atención experta y cariñosa de los riñones para proteger su salud, frenar la enfermedad renal y mantenerlo informado en cada paso.',
    heroAlt: 'Médico explicando la salud de los riñones a un paciente',
    labels: ['Entienda sus riñones', 'Proteja su salud', 'Planee con su equipo'],
    alts: ['Médico hablando con un paciente sobre la salud de los riñones', 'Paciente y médico revisando resultados', 'Médico y paciente hablando de un plan de atención'],
    intro: [
      'La nefrología en {city} significa atención para sus riñones. Ellos limpian su sangre y controlan la presión arterial, así que mantenerlos sanos es clave. Nuestro equipo busca problemas de los riñones a tiempo y ayuda a proteger la función renal que usted tiene.',
      'En nuestra ubicación de {clinic}, la atención de los riñones trabaja de la mano con su proveedor de atención primaria. La diabetes y la presión alta son causas comunes de enfermedad renal, así que las tratamos juntas.',
    ],
    help: [
      ['Pruebas y detección de los riñones', 'Análisis sencillos de sangre y orina que muestran qué tan bien funcionan sus riñones.'],
      ['Atención de la enfermedad renal crónica', 'Planes para frenar el daño y proteger su salud.'],
      ['Control de la presión arterial y la diabetes', 'Las dos maneras más importantes de proteger sus riñones.'],
      ['Orientación sobre medicinas y dieta', 'Medicinas seguras y elecciones de comida que apoyan sus riñones en {city}.'],
    ],
    when: [
      ['Tiene diabetes o presión alta', 'Las revisiones regulares de los riñones son importantes.'],
      ['Sus resultados muestran un cambio', 'La atención a tiempo puede frenar la enfermedad renal.'],
      ['Nota hinchazón u orina con espuma', 'Pueden ser señales de un problema de los riñones.'],
      ['La enfermedad renal es común en su familia', 'Las pruebas de detección ayudan a encontrar problemas antes de que aparezcan síntomas.'],
    ],
    steps: [
      ['Paso 1 · Pruebas y revisión', 'En {clinic}, repasamos su historial y pedimos análisis sencillos de sangre y orina para ver cómo están sus riñones.'],
      ['Paso 2 · Proteger y planear', 'Creamos un plan de medicinas, comida y revisiones regulares, y explicamos cada paso con palabras sencillas.'],
    ],
    faq: [
      ['¿Cuáles son las primeras señales de enfermedad renal?', 'Muchas veces no hay ninguna. Por eso las pruebas importan, sobre todo con diabetes o presión alta.'],
      ['¿Se puede frenar la enfermedad renal?', 'Sí. La atención a tiempo, una presión arterial y un azúcar saludables y las medicinas correctas pueden ayudar.'],
      ['¿Necesito una referencia?', 'Llame a nuestra clínica de {city}. Le diremos la mejor manera de empezar.'],
    ],
  },
  obgyn: {
    title: 'Ginecología y Obstetricia (OB-GYN)', short: 'ginecología y salud de la mujer',
    summary: 'Servicios de salud de la mujer con cariño, desde los exámenes anuales hasta la atención del embarazo, en un lugar cálido donde se siente escuchada.',
    heroAlt: 'Proveedora de OB-GYN hablando con una paciente embarazada',
    labels: ['Exámenes de salud de la mujer', 'Atención del embarazo', 'Apoyo en cada etapa'],
    alts: ['Proveedora hablando con una mujer sobre su salud', 'Madre con su hijo pequeño después de una visita', 'Familia sonriendo con su proveedora'],
    intro: [
      'La atención de OB-GYN en {city} apoya a las mujeres en cada etapa de la vida. Nuestro equipo ofrece exámenes anuales, atención del embarazo y ayuda con preocupaciones comunes de salud de la mujer, con respeto y sin prisa.',
      'En nuestra ubicación de {clinic}, la salud de la mujer es parte de su plan de salud completo. Su proveedora trabaja con su equipo de medicina familiar, así que su atención se mantiene conectada y cerca de casa.',
    ],
    help: [
      ['Exámenes anuales de la mujer', 'Visitas de mujer sana, exámenes de senos y pélvicos y pruebas de detección como el Papanicolaou.'],
      ['Embarazo y atención prenatal', 'Chequeos, pruebas y orientación para usted y su bebé durante el embarazo.'],
      ['Planificación familiar', 'Conversaciones honestas sobre anticonceptivos y cómo planear su familia.'],
      ['Preocupaciones comunes', 'Ayuda con períodos irregulares, dolor pélvico, infecciones y cambios de la menopausia.'],
    ],
    when: [
      ['Cree que puede estar embarazada', 'La atención prenatal temprana ayuda a que usted y su bebé se mantengan sanos.'],
      ['Le toca su examen anual o una prueba de detección', 'Las visitas regulares detectan los problemas a tiempo.'],
      ['Su período cambia o tiene dolor pélvico', 'Estos síntomas son comunes y se pueden tratar.'],
      ['Tiene preguntas sobre anticonceptivos o la menopausia', 'Su proveedora puede explicarle sus opciones con claridad.'],
    ],
    steps: [
      ['Paso 1 · Su visita', 'En {clinic}, escuchamos su historial de salud y sus preocupaciones, y luego hacemos el examen o las pruebas que necesita.'],
      ['Paso 2 · Su plan', 'Explicamos los resultados con palabras sencillas y creamos un plan con usted, con seguimiento y referencias si hacen falta.'],
    ],
    faq: [
      ['¿Cada cuánto debo hacerme un examen de salud de la mujer?', 'Muchas mujeres necesitan una visita anual. Su proveedora le dirá cada cuánto necesita pruebas como el Papanicolaou.'],
      ['¿Pueden atenderme durante el embarazo?', 'Sí. Llame a nuestro equipo de {city} para preguntar por la atención prenatal y su primera visita.'],
      ['¿Hablan español?', 'Sí. Nuestros equipos incluyen proveedores y personal bilingües que hablan inglés y español.'],
      ['¿Aceptan Medi-Cal?', 'Aceptamos Medi-Cal, Medicare y muchos planes privados. Llámenos y revisaremos su cobertura.'],
    ],
  },
  'behavioral-health': {
    title: 'Salud Conductual', short: 'salud conductual y consejería',
    summary: 'Consejería amable y privada y apoyo de salud mental con clínicos con licencia, para que no tenga que cargar solo con las cosas difíciles.',
    heroAlt: 'Persona hablando con un consejero en una sala tranquila',
    labels: ['Consejería y apoyo', 'Atención del estrés y el ánimo', 'Salud de la persona completa'],
    alts: ['Consejero escuchando a un cliente', 'Paciente hablando con un proveedor por video', 'Adolescente y su padre o madre sentados juntos'],
    intro: [
      'La salud conductual en {city} significa atención para su mente y sus emociones, igual que cuidamos su cuerpo. Nuestros clínicos con licencia escuchan con amabilidad y le ayudan a encontrar pasos que funcionen para usted.',
      'En nuestra ubicación de {clinic}, la salud mental es parte de su plan de salud completo. Su consejero trabaja con su equipo de medicina familiar, así que su atención se mantiene conectada.',
    ],
    help: [
      ['Consejería', 'Un lugar seguro para hablar del estrés, el duelo, las relaciones y los cambios en la vida.'],
      ['Ansiedad y ánimo bajo', 'Apoyo y un plan para la preocupación, la tristeza y los problemas para dormir.'],
      ['Atención para adolescentes y familias', 'Ayuda para los jóvenes y para las familias que los apoyan.'],
      ['Conexión con más ayuda', 'Referencias para medicinas, apoyo por uso de sustancias y servicios de la comunidad.'],
    ],
    when: [
      ['Se siente estresado, triste o preocupado casi todos los días', 'Usted merece apoyo. Pedir ayuda es un primer paso valiente.'],
      ['El sueño, el apetito o la energía han cambiado', 'Pueden ser señales de que su mente necesita cuidado.'],
      ['Una pérdida o un gran cambio le cuesta manejar', 'La consejería puede ayudarle a salir adelante.'],
      ['Alguien que usted quiere está pasando un mal momento', 'Podemos ayudarle a usted y a su familia a encontrar el apoyo correcto.'],
    ],
    steps: [
      ['Paso 1 · Una primera visita cariñosa', 'En {clinic}, escuchamos lo que está pasando, hacemos unas preguntas sencillas y hablamos de lo que usted quiere cambiar.'],
      ['Paso 2 · Su plan de apoyo', 'Creamos un plan con usted, como visitas de consejería, hábitos saludables y referencias si necesita más ayuda.'],
    ],
    faq: [
      ['¿Es privado lo que digo?', 'Sus visitas son privadas y están protegidas por la ley. Hay excepciones limitadas por seguridad, y su clínico se las explicará.'],
      ['¿Necesito una referencia?', 'A menudo puede empezar llamando a su clínica. Le ayudaremos a encontrar el primer paso correcto.'],
      ['¿Atienden a niños y adolescentes?', 'Llame a nuestro equipo de {city} para preguntar por la atención para jóvenes.'],
      ['¿Y si estoy en crisis?', 'Si está en peligro o piensa en hacerse daño, llame o envíe un mensaje al 988 (Línea de Prevención del Suicidio y Crisis) o llame al 911 de inmediato.'],
    ],
  },
};
