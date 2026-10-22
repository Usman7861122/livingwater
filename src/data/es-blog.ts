// Spanish text for blog posts. Same order as posts.ts.
export type PostEs = { title: string; excerpt: string; alt: string; body: { h?: string; p?: string[]; ul?: string[] }[]; cta: string };

export const postsEs: Record<string, PostEs> = {
  'early-signs-of-diabetes': {
    title: 'No deje que la diabetes lo tome por sorpresa: conozca las primeras señales',
    excerpt: 'Conozca las primeras señales de alerta de la diabetes y cuándo hacerse una prueba de detección.',
    alt: 'Un paciente midiéndose el azúcar en la sangre con un proveedor de atención',
    body: [
      { p: ['La diabetes puede crecer despacio. Muchas personas se sienten bien por años, así que es fácil no notar las primeras señales. Detectarla a tiempo le da más opciones y mejor salud en el futuro.'] },
      { h: 'Primeras señales comunes', ul: ['Sentir mucha sed u orinar con frecuencia', 'Sentirse cansado todo el tiempo', 'Visión borrosa', 'Cortadas o llagas que sanan despacio', 'Hormigueo o adormecimiento en manos y pies', 'Pérdida de peso que no puede explicar'] },
      { h: '¿Quién debe hacerse la prueba?', p: ['Hable con su proveedor sobre la prueba de detección si tiene más de 35 años, si uno de sus padres o hermanos tiene diabetes, si tiene sobrepeso o si no es muy activo. Un análisis de sangre sencillo puede mostrar cómo está usted.'] },
      { h: 'Qué puede hacer ahora', ul: ['Mueva su cuerpo 30 minutos casi todos los días', 'Elija agua en lugar de bebidas azucaradas', 'Coma más verduras, frijoles y granos integrales', 'Mantenga su chequeo anual'] },
      { p: ['Si ya tiene diabetes, nuestro equipo puede ayudarle con educación, monitoreo y un plan que se ajuste a su vida, en inglés o en español.'] },
    ],
    cta: 'Conozca la atención de la diabetes',
  },
  'bilingual-diabetes-doctor-porterville': {
    title: 'Atención bilingüe de la diabetes en Porterville: apoyo en inglés y español',
    excerpt: 'Es más fácil atender la diabetes cuando puede hablar de ella en el idioma que mejor conoce.',
    alt: 'Un proveedor explicando un plan para la diabetes a un paciente',
    body: [
      { p: ['Vivir con diabetes significa tomar muchas decisiones todos los días: comida, medicina, ejercicio y chequeos. Estas conversaciones son más fáciles cuando su proveedor habla su idioma.'] },
      { h: 'Por qué importa el idioma', p: ['Cuando entiende su plan, puede seguirlo. Nuestros proveedores y personal bilingües explican las pruebas, las medicinas y las metas en inglés o en español, y se toman el tiempo de responder sus preguntas.'] },
      { h: 'Qué puede incluir la atención', ul: ['Revisiones de azúcar en la sangre y pruebas de A1C', 'Revisión de medicinas', 'Orientación sobre comida y actividad', 'Revisiones de pies, ojos y riñones', 'Ayuda con los suministros y con referencias cuando hagan falta'] },
      { h: 'Visítenos en Porterville', p: ['Nuestra clínica de Porterville está en West Henderson Avenue. Llame antes para programar una visita. Aceptamos Medi-Cal, Medicare y muchos planes privados, y ofrecemos un programa de tarifa variable.'] },
    ],
    cta: 'Ver la clínica de Porterville',
  },
  'hand-cut-stitches-urgent-care-porterville': {
    title: '¿Se cortó la mano? Cuándo necesita puntos y adónde ir en Porterville',
    excerpt: 'Qué hacer de inmediato después de una cortada y cómo saber si necesita puntos.',
    alt: 'Una enfermera atendiendo una lesión en la mano',
    body: [
      { p: ['Las cortadas pasan en la cocina, en el trabajo y en el patio. La mayoría son pequeñas, pero algunas necesitan un proveedor.'] },
      { h: 'Primeros pasos', ul: ['Lávese las manos y luego presione un paño limpio sobre la cortada', 'Levante la mano por encima del corazón', 'Enjuague con agua limpia cuando el sangrado disminuya', 'Cubra con una venda limpia'] },
      { h: 'Puede necesitar puntos si', ul: ['La cortada es profunda o los bordes quedan abiertos', 'El sangrado no disminuye después de 10 minutos de presión firme', 'La cortada está en una articulación, la palma o un dedo', 'Se ve grasa, músculo o hueso', 'Hay tierra u óxido en la herida'] },
      { h: 'Llame al 911 o vaya a emergencias si', p: ['El sangrado es abundante y no para, o no puede mover los dedos. También vaya si se cortó una parte del cuerpo.'] },
      { p: ['Para otras cortadas, llame a su Living Water Clinic más cercana. Los puntos funcionan mejor cuando se ponen pronto, y es posible que también necesite una vacuna contra el tétano si la suya no está al día.'] },
    ],
    cta: 'Opciones de atención urgente',
  },
  'pediatric-wellness-checkup-woodlake': {
    title: 'Chequeos pediátricos de bienestar a precio accesible en Woodlake',
    excerpt: 'Los chequeos regulares ayudan a que los niños crezcan fuertes y se mantengan en buen camino.',
    alt: 'Un niño sonriente en un chequeo de bienestar',
    body: [
      { p: ['Un chequeo de bienestar es una visita para un niño sano. Ayuda a su proveedor a seguir el crecimiento, el aprendizaje y la salud, y a detectar a tiempo los problemas pequeños.'] },
      { h: 'Qué pasa en un chequeo', ul: ['Revisión de estatura, peso y crecimiento', 'Vacunas, incluidos los requisitos escolares', 'Revisión de la vista, el oído y el desarrollo', 'Tiempo para hacer sus preguntas sobre el sueño, la comida y el comportamiento'] },
      { h: 'El costo no debe detenerlo', p: ['Aceptamos Medi-Cal y muchos planes privados. Si no tiene seguro, pregunte por nuestro Programa de Descuento de Tarifa Variable.'] },
      { h: 'Visítenos en Woodlake', p: ['Nuestra clínica de Woodlake está en North Palm Street. Llame para programar una visita antes de que empiece el año escolar.'] },
    ],
    cta: 'Ver la clínica de Woodlake',
  },
  'child-ear-pain-lindsay': {
    title: '¿Su hijo tiene mucho dolor de oído? Qué hacer y adónde ir en Lindsay',
    excerpt: 'El dolor de oído muchas veces empieza de repente. Así puede ayudar a su hijo y cuándo llamarnos.',
    alt: 'Un proveedor revisando el oído de un niño',
    body: [
      { p: ['Las infecciones de oído son comunes en los niños y pueden aparecer de noche. Es difícil ver sufrir a su hijo, pero puede dar unos pasos sencillos.'] },
      { h: 'Señales de una infección de oído', ul: ['Jalarse o frotarse el oído', 'Llorar más de lo normal o tener problemas para dormir', 'Fiebre', 'Líquido que sale del oído', 'Dificultad para oír o responder'] },
      { h: 'Qué puede hacer en casa', ul: ['Pregunte a su proveedor por una medicina para el dolor adecuada para la edad y el peso de su hijo', 'Ponga un paño tibio sobre el oído', 'Mantenga a su hijo en reposo y tomando líquidos'] },
      { h: 'Vea a un proveedor pronto si', p: ['El dolor dura más de un día, hay fiebre, sale líquido del oído o su hijo es un bebé menor de 6 meses con cualquier fiebre. Vaya a emergencias si su hijo está muy somnoliento, tiene el cuello rígido o hinchazón detrás del oído.'] },
      { p: ['Nuestras clínicas de Lindsay están aquí para ayudar. Llame para preguntar por la disponibilidad el mismo día.'] },
    ],
    cta: 'Ver la clínica de Lindsay',
  },
};
