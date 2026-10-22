// Spanish text for the legal pages. Same order as legal.ts (paired by position).
// Draft translation: a lawyer should review it before it is relied on.
import { legalContact as c } from './legal';

type Sec = { h: string; p?: string[]; ul?: string[] };
export type LegalEs = { title: string; short: string; desc: string; intro: string; sections: Sec[] };

const ask = (what: string): Sec => ({ h: 'Contáctenos', p: [`${what} Comuníquese con ${c.name} al ${c.phone}, por correo electrónico a ${c.email}, o por correo postal a ${c.address}.`] });

export const legalEs: Record<string, LegalEs> = {
  'privacy-policy': {
    title: 'Política de privacidad', short: 'Cómo recopilamos y usamos la información del sitio web.', desc: 'Cómo Living Water Clinic recopila, usa y protege la información de los visitantes de este sitio web.',
    intro: 'Nos importa su privacidad. Esta política explica qué información recopilamos en este sitio web, cómo la usamos y las opciones que usted tiene. Cubre solo nuestro sitio web. Sus expedientes médicos están protegidos por nuestro Aviso de Prácticas de Privacidad.',
    sections: [
      { h: 'Información que recopilamos', p: ['Información que usted nos da, como su nombre, número de teléfono, correo electrónico y mensaje cuando usa nuestro formulario de contacto o pide una cita.', 'Información que se recopila automáticamente, como su dirección IP, tipo de navegador, dispositivo, páginas visitadas y la hora de su visita. Esto se limita a los registros normales del servidor del sitio web. Por ahora no usamos herramientas de analítica ni rastreadores de publicidad en este sitio web.'], ul: [] },
      { h: 'Por favor no envíe datos de salud por el sitio web', p: ['Los formularios de nuestro sitio web no son una forma segura de compartir información médica. No incluya diagnósticos, resultados de pruebas ni otros datos privados de salud. Llame a su clínica si tiene preguntas sobre su atención.'] },
      { h: 'Cómo usamos la información', ul: ['Para responder sus preguntas y programar citas', 'Para operar, proteger y mejorar este sitio web', 'Para cumplir con obligaciones legales', 'Para enviarle recordatorios o novedades que usted pidió'] },
      { h: 'Cómo compartimos la información', p: ['No vendemos su información personal. La compartimos solo con proveedores de servicios de confianza que nos ayudan a operar el sitio web, y solo en lo necesario. También podemos compartirla cuando la ley lo exija.'] },
      { h: 'Cookies y rastreo', p: ['Usamos solo las cookies y herramientas similares necesarias para que el sitio funcione, y una pequeña configuración que recuerda su idioma y su elección de cookies. No usamos cookies de publicidad, y no usamos herramientas de analítica ni píxeles de rastreo (como Google Analytics o Meta Pixel) en este sitio web. Vea nuestra Política de cookies para más detalles y sus opciones.'] },
      { h: 'Enlaces de terceros y mapas', p: ['Nuestro sitio tiene enlaces a otros sitios web, como nuestro portal del paciente y las páginas de pago en línea. Esos sitios tienen sus propias reglas de privacidad. No somos responsables de ellos.', 'Los mapas de Google se cargan solo después de que usted haga clic en “Cargar mapa” o acepte las cookies. Cuando se carga un mapa, Google puede recibir su dirección IP y puede colocar sus propias cookies.'] },
      { h: 'Seguridad', p: ['Tomamos medidas razonables para proteger su información. Ningún método de enviar datos por internet es totalmente seguro.'] },
      { h: 'Sus derechos de privacidad en California', p: ['Esta sección es para residentes de California. La información de salud cubierta por HIPAA sigue reglas distintas, descritas en nuestro Aviso de Prácticas de Privacidad.', 'Lo que recopilamos a través de este sitio web: identificadores (nombre, correo electrónico, número de teléfono, dirección IP), los datos que usted pone en un mensaje o en una solicitud de cita, y actividad en internet, como las páginas vistas y el tipo de navegador. Lo recopilamos para responderle, programar citas, operar y proteger el sitio web y cumplir con obligaciones legales. Guardamos los registros del servidor del sitio web por un tiempo limitado, y los mensajes solo el tiempo necesario para responderlos o el que exija la ley.', 'No vendemos su información personal. No la compartimos para publicidad conductual entre contextos, y no usamos ni divulgamos información personal sensible para deducir características sobre usted.', 'Usted puede pedirnos que le digamos qué información personal tenemos sobre usted, que la corrijamos o que la eliminemos, y puede pedirnos que no la vendamos ni la compartamos. No lo trataremos de manera distinta por usar estos derechos. Puede usar un agente autorizado para hacer una solicitud en su nombre. Es posible que primero necesitemos confirmar su identidad.', 'Señales de preferencia de exclusión: si su navegador envía una señal de Control Global de Privacidad (GPC) o de No rastrear, la tratamos como una decisión de mantener solo las cookies necesarias, y no cargaremos contenido opcional de terceros, como mapas, hasta que usted haga clic para cargarlo.'] },
      ask('Para hacer una solicitud sobre su información personal,'),
      { h: 'Menores de edad', p: ['Este sitio web es para adultos. No recopilamos a sabiendas información de niños menores de 13 años a través del sitio web.'] },
      { h: 'Cambios a esta política', p: ['Es posible que actualicemos esta política. La fecha en la parte de arriba muestra la versión más reciente.'] },
      ask('¿Preguntas o solicitudes sobre privacidad?'),
    ],
  },
  'notice-of-privacy-practices': {
    title: 'Aviso de Prácticas de Privacidad', short: 'Cómo se puede usar su información de salud y cuáles son sus derechos (HIPAA).', desc: 'Aviso de Prácticas de Privacidad de HIPAA para Living Water Clinic y Clínica Agua Viva: cómo se usa su información de salud y cuáles son sus derechos.',
    intro: 'Este aviso describe cómo se puede usar y compartir la información médica sobre usted, y cómo puede tener acceso a ella. Por favor léalo con atención.',
    sections: [
      { h: 'Nuestras obligaciones', p: ['La ley nos exige mantener privada su información de salud, darle este aviso y cumplir con el aviso que esté vigente. Le avisaremos si hay una violación de seguridad que pudo haber expuesto su información.'] },
      { h: 'Cómo podemos usar y compartir su información', ul: ['Tratamiento: para darle atención y coordinarla con otros proveedores', 'Pago: para cobrarle a usted o a su plan de seguro', 'Operaciones de atención médica: para operar nuestras clínicas, revisar la calidad y capacitar al personal', 'Cuando la ley lo exija, para salud pública, reportes de abuso, supervisión de la salud, órdenes judiciales y necesidades legales similares', 'Para reducir una amenaza grave a la salud o la seguridad'] },
      { h: 'Usos que necesitan su permiso por escrito', p: ['Necesitamos su permiso por escrito para la mayoría de los usos de notas de psicoterapia, para mercadeo y para la venta de información de salud. Usted puede cancelar su permiso por escrito en cualquier momento.'] },
      { h: 'Sus derechos', ul: ['Ver y obtener una copia de sus expedientes', 'Pedirnos que corrijamos información que usted cree que es incorrecta', 'Pedir comunicación privada, por ejemplo a otro teléfono o dirección', 'Pedirnos que limitemos ciertos usos o formas de compartir', 'Obtener una lista de ciertas veces que compartimos su información', 'Obtener una copia en papel de este aviso', 'Elegir a alguien para que actúe en su nombre'] },
      { h: 'Quejas', p: ['Si cree que se violaron sus derechos de privacidad, puede presentar una queja con nosotros o con la Oficina de Derechos Civiles del Departamento de Salud y Servicios Humanos de EE. UU. No lo castigaremos por presentar una queja.'] },
      { h: 'Cambios a este aviso', p: ['Es posible que cambiemos este aviso. El nuevo aviso se aplicará a toda la información que tengamos. Lo publicaremos en nuestras clínicas y en este sitio web.'] },
      ask('Para usar sus derechos o hacer una pregunta, hable con nuestro Oficial de Privacidad.'),
    ],
  },
  'cookie-policy': {
    title: 'Política de cookies', short: 'Qué cookies usamos y cómo controlarlas.', desc: 'Cómo Living Water Clinic usa cookies y herramientas similares, y cómo puede cambiar sus opciones.',
    intro: 'Las cookies son pequeños archivos de texto que un sitio web guarda en su dispositivo. Esta página explica las cookies y herramientas similares que usamos y cómo puede controlarlas.',
    sections: [
      { h: 'Cookies que usamos', ul: ['Estrictamente necesarias: se necesitan para que el sitio funcione y para recordar su elección de cookies. Siempre están activadas.', 'Preferencias: recuerdan elecciones como su idioma (inglés o español).', 'Contenido de terceros: Google Maps se carga solo después de que usted acepte las cookies o haga clic en “Cargar mapa”. Cuando se carga, Google puede colocar sus propias cookies o recopilar su dirección IP. Nuestras fuentes de letra están en nuestro propio servidor, así que no se envía ninguna solicitud de fuentes a Google.', 'No usamos cookies ni píxeles de analítica, publicidad o redes sociales en este sitio web.'] },
      { h: 'Sus opciones', p: ['Cuando nos visita por primera vez, puede elegir “Aceptar todo”, “Rechazar opcionales” o “Elegir” para activar o desactivar cada tipo: Necesarias (siempre activadas), Mapas y contenido externo, Analítica y Publicidad. “Rechazar opcionales” mantiene desactivado el contenido opcional de terceros, como los mapas, hasta que usted haga clic para cargarlo. Puede cambiar sus opciones en cualquier momento con “Configuración de cookies” en el pie de página de cada página. Si su navegador envía una señal de Control Global de Privacidad (GPC) o de No rastrear, mantenemos desactivadas la Analítica y la Publicidad. También puede bloquear o borrar las cookies en la configuración de su navegador. Es posible que algunas partes del sitio no funcionen bien sin ellas.'] },
      { h: 'Cuánto tiempo las guardamos', p: ['Su elección de cookies y su configuración de idioma se guardan en su dispositivo hasta que usted borre los datos de su navegador.'] },
      { h: 'Cambios', p: ['Si agregamos herramientas nuevas, como analítica del sitio, actualizaremos esta página, nos aseguraremos de que sigan desactivadas hasta que usted las acepte, y le pediremos su elección otra vez.'] },
      ask('¿Preguntas sobre las cookies?'),
    ],
  },
  'accessibility': {
    title: 'Declaración de accesibilidad', short: 'Nuestra promesa de que este sitio sea fácil de usar para todos.', desc: 'Living Water Clinic se compromete a que su sitio web sea accesible para personas con discapacidades. Conozca nuestras metas y cómo obtener ayuda.',
    intro: 'Living Water Clinic se compromete a que este sitio web sea fácil de usar para todos, incluidas las personas con discapacidades. Queremos que cada paciente encuentre información sobre la atención sin barreras.',
    sections: [
      { h: 'Nuestra meta', p: ['Trabajamos para seguir las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, Nivel AA. Probamos y mejoramos el sitio cada vez que lo actualizamos.'] },
      { h: 'Lo que hacemos', ul: ['Usamos títulos, enlaces y etiquetas claros', 'Permitimos el uso del teclado y ofrecemos un enlace “Saltar al contenido”', 'Ofrecemos descripciones en texto de las imágenes', 'Mantenemos un buen contraste de color y tamaños de letra fáciles de leer', 'Ofrecemos el sitio en inglés y en español', 'Respetamos la configuración de su dispositivo para reducir el movimiento'] },
      { h: 'Limitaciones conocidas', p: ['Es posible que parte del contenido de otras empresas, como los mapas incrustados, no sea totalmente accesible. Algunos documentos más antiguos también pueden ser más difíciles de usar. Estamos trabajando para corregirlo.'] },
      { h: '¿Necesita ayuda?', p: ['Si tiene problemas para usar cualquier parte de este sitio, o necesita información en otro formato, por favor díganoslo. Le ayudaremos por teléfono o buscaremos otra forma de darle la información. Por favor indique en qué página estaba y qué problema tuvo.'] },
      ask('Envíenos sus comentarios sobre accesibilidad.'),
    ],
  },
  'terms-of-use': {
    title: 'Términos de uso', short: 'Reglas para usar este sitio web.', desc: 'Términos y condiciones para usar el sitio web de Living Water Clinic.',
    intro: 'Al usar este sitio web, usted acepta estos términos. Si no está de acuerdo, por favor no use el sitio.',
    sections: [
      { h: 'Solo información general', p: ['Este sitio da información general. No da consejo médico, diagnóstico ni tratamiento, y no crea una relación entre paciente y proveedor. Vea nuestro Aviso médico.'] },
      { h: 'Uso aceptable', p: ['Usted acepta no usar el sitio para nada ilegal, para dañarlo o sobrecargarlo, ni para intentar entrar a información que no debe ver.'] },
      { h: 'Contenido que usted envía', p: ['Si nos envía un mensaje, una reseña o comentarios, por favor no incluya información privada o confidencial, como datos de salud, números de teléfono o direcciones. No publique contenido vulgar, de odio, amenazante, falso o ilegal, ni publicidad.'] },
      { h: 'Enlaces a otros sitios', p: ['Este sitio tiene enlaces a otros sitios web que no controlamos. Un enlace no significa que recomendemos ese sitio. No somos responsables de su contenido.'] },
      { h: 'Nuestro contenido', p: ['El texto, las imágenes y los logotipos de este sitio pertenecen a Living Water Clinic o a quienes le dan licencia. Usted puede ver e imprimir páginas para uso personal. Cualquier otro uso necesita nuestro permiso por escrito.'] },
      { h: 'Sin garantía y límites de responsabilidad', p: ['El sitio se ofrece “tal como está”. En la mayor medida que permita la ley, no somos responsables de pérdidas por el uso del sitio.'] },
      { h: 'Cambios', p: ['Podemos cambiar estos términos, y el sitio, en cualquier momento. La fecha en la parte de arriba muestra la versión más reciente.'] },
      { h: 'Ley aplicable', p: ['Estos términos se rigen por las leyes del Estado de California.'] },
      ask('¿Preguntas sobre estos términos?'),
    ],
  },
  'nondiscrimination': {
    title: 'No discriminación y acceso al idioma', short: 'Igualdad en la atención para todos, con ayuda gratuita con el idioma.', desc: 'Living Water Clinic no discrimina. Hay ayuda gratuita con el idioma y apoyos para personas con discapacidades.',
    intro: 'Living Water Clinic y Clínica Agua Viva cumplen con las leyes federales y de California sobre derechos civiles. No discriminamos, excluimos ni tratamos de manera distinta a las personas por su raza, color, origen nacional, edad, discapacidad, sexo, orientación sexual, identidad de género o religión.',
    sections: [
      { h: 'Ayuda gratuita para usted', ul: ['Intérpretes e información escrita gratuitos en otros idiomas', 'Apoyos y servicios gratuitos para personas con discapacidades, como intérpretes de lengua de señas e información escrita en otros formatos', 'Nuestro personal y nuestros proveedores hablan inglés y español'] },
      { h: 'Cómo pedir ayuda', p: [`Dígale a cualquier miembro del personal o llame al ${c.phone}. Si es sordo o tiene dificultad para oír, puede usar el Servicio de Retransmisión de California marcando 711.`] },
      { h: 'Ayuda en español', p: ['Si habla español, hay servicios gratuitos de asistencia con el idioma disponibles para usted. Llame al ' + c.phone + '.'] },
      { h: 'Si siente que lo trataron de manera injusta', p: ['Puede presentar un reclamo con nosotros. También puede presentar una queja de derechos civiles ante la Oficina de Derechos Civiles del Departamento de Salud y Servicios Humanos de EE. UU., o ante el Departamento de Servicios de Atención Médica de California. No tomaremos represalias contra usted por presentarla.'] },
      ask('Para presentar un reclamo u obtener ayuda.'),
    ],
  },
  'medical-disclaimer': {
    title: 'Aviso médico', short: 'El contenido del sitio web no es consejo médico.', desc: 'La información del sitio web de Living Water Clinic es general y no es consejo médico. En una emergencia, llame al 911.',
    intro: 'La información de este sitio web es solo para educación general. No reemplaza el consejo de su propio médico o equipo de atención.',
    sections: [
      { h: 'No es consejo médico', p: ['No use este sitio para diagnosticar o tratar un problema de salud. Siempre pregunte a un proveedor calificado sobre su salud y antes de empezar o dejar cualquier tratamiento.'] },
      { h: 'En una emergencia', p: ['Si cree que tiene una emergencia médica, llame al 911 o vaya a la sala de emergencias más cercana de inmediato. No espere una respuesta de este sitio web, de un formulario ni de un correo electrónico.'] },
      { h: 'Sin relación de paciente', p: ['Usar este sitio web, enviar un mensaje o leer nuestro blog no lo convierte en paciente de Living Water Clinic.'] },
      { h: 'Exactitud', p: ['Tratamos de mantener la información correcta y al día, pero no podemos prometer que esté completa. Los servicios y los horarios pueden ser distintos en cada clínica. Por favor llame a su clínica para confirmar.'] },
      ask('¿Tiene una pregunta sobre su atención?'),
    ],
  },
};

export const legalChromeEs: Record<string, string> = {
  'Legal': 'Legal',
  'Other policies': 'Otras políticas',
  'Open cookie settings': 'Abrir configuración de cookies',
  'Contact us': 'Contáctenos',
  'Ayuda en español': 'Ayuda en español',
  'Last updated: October 14, 2026': 'Última actualización: 14 de octubre de 2026',
  'Spanish translation for convenience. It is a draft and may be reviewed by a lawyer. If anything is unclear, the English version applies.': 'Traducción al español para su comodidad. Es un borrador y puede ser revisada por un abogado. Si algo no está claro, aplica la versión en inglés.',
};
