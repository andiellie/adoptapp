import imgNews1 from "figma:asset/064607ad31efc39e740b11e8a85d270cfbee62cb.png";
import imgNews2 from "figma:asset/2252db058bfc3324b6b2a7b1ebe05fe7ffa4117b.png";
import imgNews3 from "figma:asset/691d827d6dc24a303db8d1ef1d2f2ecbf2f60fe1.png";
import imgNews4 from "figma:asset/29884d2e6244084cd314d910d9d118fc539c2241.png";
import imgNews5 from "figma:asset/6a5815e65e2329f4166bc2ccd61ac0b4e990a840.png";

export interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  category: string;
  date: string;
  author: string;
  tags: string[];
}

export const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "Nueva Ley de Bienestar Animal en CDMX",
    excerpt: "La Ciudad de México ahora exige el registro obligatorio de mascotas en el RUAC, además de promover la esterilización, vacunación y socialización responsable.",
    content: [
      "La Ciudad de México ha dado un paso significativo hacia la protección y el bienestar de los animales con la implementación de una nueva ley que establece requisitos claros para los dueños de mascotas.",
      "La legislación, que entró en vigor el 1 de marzo de 2026, establece que todos los propietarios de mascotas deben registrar a sus animales en el Registro Único de Animales de Compañía (RUAC). Este registro es completamente gratuito y permite a las autoridades mantener un control más efectivo sobre la población de mascotas en la capital.",
      "Entre los puntos más destacados de la ley se encuentran:",
      "• Registro obligatorio en el RUAC para todas las mascotas\n• Promoción de programas de esterilización gratuita\n• Campañas de vacunación antirrábica masiva\n• Fomento de la socialización responsable entre mascotas\n• Sanciones para quienes abandonen o maltraten animales",
      "La Secretaría del Medio Ambiente de la CDMX ha instalado módulos de registro en todas las alcaldías, donde los ciudadanos pueden registrar a sus mascotas de forma rápida y sencilla. Además, se están llevando a cabo jornadas de esterilización gratuita en diferentes puntos de la ciudad.",
      "\"Esta ley representa un cambio cultural importante. Queremos que la Ciudad de México sea un ejemplo en cuanto al trato digno y respetuoso hacia los animales de compañía\", declaró la titular de la Secretaría del Medio Ambiente.",
      "Los expertos en bienestar animal han aplaudido la iniciativa, señalando que el registro de mascotas es un primer paso fundamental para combatir el abandono y mejorar las condiciones de vida de los animales en la ciudad.",
      "Se estima que hay más de 1.5 millones de perros y gatos en la CDMX, y las autoridades esperan que al menos el 80% estén registrados en el RUAC durante el primer año de implementación de la ley."
    ],
    image: imgNews1,
    category: "México",
    date: "2026-03-08",
    author: "María González",
    tags: ["Legislación", "CDMX", "Bienestar Animal", "RUAC"]
  },
  {
    id: 2,
    title: "Prohibición de Restricciones a Mascotas en Condominios",
    excerpt: "El Estado de México prohíbe a arrendadores impedir que los inquilinos tengan mascotas, fomentando el respeto y el bienestar animal en comunidades.",
    content: [
      "Una nueva normativa en el Estado de México está revolucionando el mercado de arrendamiento al prohibir que los propietarios de inmuebles nieguen el derecho de los inquilinos a tener mascotas.",
      "La reforma al Código Civil del Estado de México, aprobada por unanimidad en el Congreso local, establece que ningún contrato de arrendamiento podrá incluir cláusulas que prohíban expresamente la tenencia de animales de compañía.",
      "Esta medida busca proteger tanto los derechos de los arrendatarios como el bienestar de las mascotas, reconociendo el vínculo emocional entre las personas y sus animales de compañía.",
      "Sin embargo, la ley establece responsabilidades claras para los inquilinos:",
      "• Los dueños deben asegurar que sus mascotas no causen daños a la propiedad\n• Deben mantener condiciones higiénicas adecuadas\n• Son responsables de cualquier molestia ocasionada a los vecinos\n• Deben respetar los reglamentos internos de los condominios en cuanto a áreas comunes\n• Los gastos de reparación por daños causados por mascotas corren por cuenta del inquilino",
      "\"Esta ley no solo beneficia a los dueños de mascotas, sino que también reconoce el papel fundamental que los animales de compañía juegan en la salud mental y emocional de las personas\", explicó el diputado promotor de la iniciativa.",
      "Organizaciones de protección animal han celebrado la medida, señalando que una de las principales causas de abandono de mascotas es la dificultad para encontrar viviendas que acepten animales.",
      "Los propietarios de inmuebles tienen un plazo de 90 días para ajustar sus contratos de arrendamiento a la nueva normativa. Quienes violen esta disposición podrán ser sancionados con multas que van desde los 5,000 hasta los 50,000 pesos.",
      "La medida ya ha comenzado a tener efecto en el mercado inmobiliario, con varios arrendadores actualizando sus políticas para adaptarse a la nueva ley."
    ],
    image: imgNews5,
    category: "México",
    date: "2026-03-05",
    author: "Carlos Ramírez",
    tags: ["Legislación", "Estado de México", "Arrendamiento", "Derechos"]
  },
  {
    id: 3,
    title: "Gato Perdido Vuelve a Casa Tras 11 Años",
    excerpt: "Un gato en Reino Unido fue reunido con su familia gracias a su microchip, destacando la importancia de esta tecnología.",
    content: [
      "Una historia conmovedora ha captado la atención del Reino Unido: un gato llamado Oliver ha sido reunido con su familia después de 11 años de estar desaparecido, gracias a su microchip de identificación.",
      "Oliver desapareció en 2015 cuando tenía solo dos años de edad. Su familia, los Thompson, buscaron incansablemente durante meses, colocando carteles por todo el vecindario y publicando en redes sociales, pero sin éxito.",
      "Recientemente, un refugio de animales en una ciudad a 50 kilómetros de distancia recogió a un gato callejero que parecía mayor y mostraba signos de haber vivido en la calle durante años. Como parte del protocolo estándar, el personal del refugio escaneó al gato en busca de un microchip.",
      "\"No podíamos creer lo que veíamos cuando apareció la información en el escáner\", comentó Sarah Jenkins, coordinadora del refugio. \"El chip estaba registrado a nombre de la familia Thompson, y los datos de contacto estaban actualizados\".",
      "El reencuentro fue emotivo. La familia Thompson, que ahora incluye dos niños pequeños que nunca conocieron a Oliver, recibió la llamada que nunca pensaron que llegaría.",
      "\"Cuando recibimos la llamada del refugio, no lo podíamos creer. Después de tantos años, habíamos perdido la esperanza\", explicó Emma Thompson, la propietaria de Oliver. \"Ver a Oliver nuevamente fue como un milagro. Aunque ha envejecido, lo reconocimos inmediatamente\".",
      "Los veterinarios que examinaron a Oliver determinaron que, a pesar de su edad avanzada y algunas cicatrices que indican su vida en las calles, está en buen estado de salud general.",
      "Esta historia ha reavivado las campañas de concientización sobre la importancia del microchip en mascotas. Las organizaciones de protección animal enfatizan que:",
      "• El microchip es la forma más efectiva de identificación permanente\n• Los datos de contacto deben mantenerse siempre actualizados\n• El procedimiento de implantación es rápido, seguro e indoloro\n• El costo es mínimo comparado con los beneficios\n• Aumenta significativamente las posibilidades de recuperar una mascota perdida",
      "\"La historia de Oliver demuestra que nunca es demasiado tarde para recuperar a una mascota perdida, siempre y cuando tenga microchip\", concluyó la vocera de la Asociación Británica de Protección Animal."
    ],
    image: imgNews2,
    category: "El mundo",
    date: "2026-03-03",
    author: "Laura Stevens",
    tags: ["Reino Unido", "Microchip", "Reencuentro", "Historia Inspiradora"]
  },
  {
    id: 4,
    title: "Refugio Temporal para Mascotas en Inundaciones",
    excerpt: "Tras las inundaciones en Valencia, voluntarios atendieron a más de 300 mascotas rescatadas, ofreciendo atención médica y refugio.",
    content: [
      "Las recientes inundaciones que afectaron la región de Valencia, España, no solo pusieron en peligro la vida de miles de personas, sino también la de sus mascotas. En respuesta a esta emergencia, un grupo de voluntarios y organizaciones de protección animal establecieron un refugio temporal que ha salvado la vida de más de 300 animales.",
      "El refugio, instalado en un polideportivo municipal, comenzó a operar apenas 24 horas después de que las lluvias torrenciales causaran el desbordamiento del río Júcar. Veterinarios, cuidadores y voluntarios trabajaron sin descanso para rescatar, atender y refugiar a perros, gatos y otros animales de compañía.",
      "\"Vimos muchos casos desgarradores\", relató la Dra. Carmen Sánchez, veterinaria voluntaria. \"Animales que habían pasado horas en el agua, separados de sus familias, asustados y en algunos casos heridos. Nuestro objetivo fue proporcionarles la atención médica necesaria y un lugar seguro\".",
      "El refugio proporcionó diversos servicios:",
      "• Atención veterinaria de emergencia las 24 horas\n• Alimentación y agua limpia\n• Área de descanso y recuperación\n• Sistema de registro fotográfico para ayudar a reunir mascotas con sus dueños\n• Baños y desinfección\n• Vacunación de emergencia cuando fue necesario",
      "Uno de los mayores desafíos fue reunir a las mascotas con sus dueños. Para ello, los organizadores crearon una base de datos con fotografías de todos los animales rescatados y la compartieron en redes sociales y con las autoridades locales.",
      "\"Hemos logrado reunir a más del 70% de las mascotas con sus familias\", explicó Miguel Torres, coordinador del refugio. \"Es increíblemente emotivo ver esos reencuentros. Muchas personas pensaban que habían perdido a sus mascotas para siempre\".",
      "La comunidad valenciana ha respondido con generosidad, donando alimentos, mantas, medicamentos y recursos económicos para mantener el refugio operativo. Empresas locales de alimentos para mascotas también han contribuido con suministros.",
      "Los animales que no han podido ser reunidos con sus dueños permanecerán en el refugio temporal hasta que sean reclamados o hasta que se encuentren hogares de adopción adecuados. Varias organizaciones de protección animal de toda España se han ofrecido a ayudar en el proceso de adopción.",
      "Las autoridades locales han anunciado que están trabajando en un protocolo de emergencia para mascotas en desastres naturales, inspirado en la experiencia de este refugio temporal.",
      "\"Esta tragedia nos ha enseñado la importancia de incluir a las mascotas en los planes de emergencia\", concluyó la alcaldesa de Valencia. \"Los animales de compañía son parte de nuestras familias y merecen la misma protección en situaciones de crisis\"."
    ],
    image: imgNews3,
    category: "El mundo",
    date: "2026-03-01",
    author: "Pablo Martínez",
    tags: ["España", "Valencia", "Emergencia", "Rescate", "Voluntarios"]
  },
  {
    id: 5,
    title: "Robos de Mascotas en México en Aumento",
    excerpt: "El robo de mascotas se incrementa en México. Activistas exigen que se tipifique como delito para proteger a los animales y sus dueños.",
    content: [
      "El robo de mascotas se ha convertido en una problemática creciente en varias ciudades de México, con un incremento del 35% en los reportes durante el último año, según datos de organizaciones de protección animal.",
      "Los delincuentes están utilizando diversas modalidades para sustraer animales de compañía, desde el robo directo en espacios públicos hasta el engaño a los dueños con falsas ofertas de adopción o servicios veterinarios.",
      "\"He recibido más de 50 reportes de robo de mascotas solo en este mes\", explicó Sofía Hernández, directora de una organización de protección animal en la Ciudad de México. \"Las víctimas describen una angustia terrible, comparable a la pérdida de un ser querido\".",
      "Los casos más comunes incluyen:",
      "• Robo de perros de raza en parques y áreas públicas\n• Sustracción de mascotas desde patios o jardines\n• Engaños a través de redes sociales ofreciendo servicios gratuitos\n• Robo durante paseos o en la puerta de las casas\n• Falsas adopciones donde los delincuentes revenden los animales",
      "Las razas más afectadas son aquellas con mayor valor comercial: Bulldog Francés, Pomerania, Husky Siberiano, Golden Retriever y gatos de raza como Persa y Ragdoll. Sin embargo, también se han reportado robos de perros mestizos.",
      "Activistas y organizaciones civiles están presionando al Congreso para que se tipifique el robo de mascotas como un delito específico con sanciones más severas. Actualmente, en la mayoría de los estados, el robo de animales se considera solo como un delito patrimonial menor.",
      "\"Las mascotas no son objetos, son seres sintientes y miembros de la familia\", argumentó el abogado Roberto Flores, quien está impulsando una iniciativa de ley. \"La legislación debe reflejar el valor emocional y el vínculo que existe entre las personas y sus animales de compañía\".",
      "La propuesta de ley incluye:",
      "• Penas de 2 a 6 años de prisión para quienes roben mascotas\n• Multas económicas significativas\n• Agravantes si el animal sufre daño físico o emocional\n• Prohibición de tener mascotas para los condenados\n• Creación de un registro nacional de mascotas robadas",
      "Mientras tanto, los expertos recomiendan medidas preventivas:",
      "• Microchipar a todas las mascotas\n• No dejar animales solos en espacios públicos\n• Usar correas y arneses seguros\n• Ser cauteloso con extraños que muestren interés excesivo en las mascotas\n• Mantener fotografías actualizadas de las mascotas\n• Registrar características distintivas\n• No publicar información detallada sobre las mascotas en redes sociales",
      "Varias plataformas digitales han creado grupos de búsqueda y apoyo donde los dueños pueden reportar mascotas robadas y coordinar esfuerzos de búsqueda. Estos grupos han ayudado a recuperar decenas de animales en los últimos meses.",
      "\"No bajaremos la guardia hasta que tengamos una ley que realmente proteja a nuestras mascotas y castigue severamente a quienes las roban\", concluyó Hernández. \"Cada animal robado representa una familia destrozada\"."
    ],
    image: imgNews4,
    category: "México",
    date: "2026-02-28",
    author: "Andrea López",
    tags: ["Seguridad", "Legislación", "Robo", "Prevención"]
  }
];
