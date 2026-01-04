import { DocumentData, BlockType } from './types';

const STANDARD_SIGNATURES = [
  { role: 'DIRECCIÓN ADMINISTRATIVA', area: 'AUTORIZACIÓN' },
  { role: 'DIRECCIÓN COMERCIAL', area: 'VISTO BUENO' },
  { role: 'DIRECCIÓN DE OPERACIONES', area: 'VISTO BUENO' },
  { role: 'GERENCIA ADMINISTRATIVA', area: 'REVISIÓN' },
  { role: 'TALENTO HUMANO', area: 'ELABORACIÓN' },
];

export const INITIAL_DOCUMENTS: DocumentData[] = [
  {
    id: 'doc-008',
    title: 'MANUAL DEL COLABORADOR',
    subtitle: '"Stay on track - Bienvenido a la familia PROVEIN"',
    code: 'PRO-TH-MAN-001-V4.3',
    version: 'V4.3',
    pageCount: 8,
    updatedAt: '2025-01-15',
    companyName: 'CONSUMIBLES PROVEIN S.A.P.I. DE C.V.',
    sections: [
      {
        id: 'sec-mc-1',
        title: 'BIENVENIDA A LA FAMILIA',
        number: 'I',
        blocks: [
          { 
            type: BlockType.HIGHLIGHT, 
            content: "¡Hola! Es un placer darte la bienvenida. No llegas solo a una empresa, llegas a una familia que trabaja con pasión. En PROVEIN nos mueve la innovación, la calidad humana y el compromiso. Desde nuestros inicios, nuestro propósito ha sido crecer de la mano de nuestra gente. Tu talento es la pieza que nos faltaba. Te invitamos a ser curioso, a proponer y a disfrutar tu trabajo. ¡Bienvenido a bordo!" 
          },
          { type: BlockType.HEADER, content: "1.1 TU HUB DIGITAL PROVEIN" },
          { type: BlockType.PARAGRAPH, content: "Para facilitar tu integración y tu día a día, hemos centralizado toda la información clave en nuestro Sitio Interno de Google. Es tu herramienta oficial para consultar: Directorio, Historia, Eventos, Manuales y Formatos." },
          { type: BlockType.HEADER, content: "1.2 TU ACOMPAÑAMIENTO (ONBOARDING)" },
          { type: BlockType.PARAGRAPH, content: "Tu experiencia es vital para nosotros desde el día uno. Recibirás una encuesta de seguimiento en los siguientes hitos:" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 3 },
            content: [
              { title: "7 DÍAS", text: "INGRESO - Validación de herramientas y accesos." },
              { title: "30 DÍAS", text: "ADAPTACIÓN - Claridad de funciones y Jefe Inmediato." },
              { title: "45 DÍAS", text: "CONSOLIDACIÓN - Ajuste cultural previo a planta." },
            ]
          }
        ]
      },
      {
        id: 'sec-mc-2',
        title: 'NUESTRA IDENTIDAD',
        number: 'II',
        blocks: [
          { type: BlockType.HEADER, content: "2.1 MISIÓN Y VISIÓN" },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "MISIÓN", 
            options: { highlightColor: 'blue' },
            content: "Comprometernos con nuestros clientes a alcanzar sus metas de negocio, suministrándoles productos, servicios y soluciones de constante innovación, basándonos en el crecimiento personal y profesional de nuestros colaboradores." 
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "VISIÓN", 
            options: { highlightColor: 'blue' },
            content: "Ser la compañía elegida por nuestra innovación y servicio de clase mundial. Reconocida por su calidad humana, optimismo y profesionalismo." 
          },
          { type: BlockType.HEADER, content: "2.2 NUESTROS VALORES INSTITUCIONALES" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { title: "CONFIANZA", text: "Construimos relaciones sólidas y duraderas basadas en la credibilidad y la seguridad que brindamos." },
              { title: "HUMANISMO", text: "Respetamos la dignidad humana por encima de cualquier interés económico." },
              { title: "RESPONSABILIDAD", text: "Asumimos las consecuencias de nuestros actos y decisiones." },
              { title: "COMPROMISO", text: "Nos entregamos al logro de los objetivos con pasión, lealtad y dedicación." },
            ]
          },
          { type: BlockType.HEADER, content: "2.3 NUESTRO ADN" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { title: "COLABORADORES", text: "Encabezan nuestro ADN. Son el motor y la prioridad absoluta." },
              { title: "CLIENTES", text: "Nuestra razón de ser. Trabajamos para superar sus expectativas." },
              { title: "GOBIERNO", text: "Somos amigos del gobierno, operando siempre con estricto apego a la ley." },
              { title: "ACCIONISTAS", text: "Cuidamos a los accionistas protegiendo y rentabilizando su inversión." },
              { title: "PROVEEDORES", text: "Socios estratégicos en nuestra cadena de valor." },
              { title: "ENTORNO FÍSICO", text: "Somos responsables. Separamos basura e invitamos a traer reciclables desde casa." },
            ]
          }
        ]
      },
      {
        id: 'sec-mc-3',
        title: 'CONDICIONES LABORALES Y BENEFICIOS',
        number: 'III',
        blocks: [
          { type: BlockType.HEADER, content: "3.1 CONCILIACIÓN Y DESCONEXIÓN" },
          { type: BlockType.PARAGRAPH, content: "Respetamos tu tiempo personal conforme a la NOM-037. Promovemos el derecho a la desconexión fuera del horario laboral establecido, asegurando un descanso efectivo." },
          { type: BlockType.HEADER, content: "3.2 HERRAMIENTAS DIGITALES Y ASISTENCIA" },
          {
            type: BlockType.LIST,
            content: [
              "CORREO Y FIRMA: Todo colaborador debe contar con su correo corporativo y firma electrónica estandarizada.",
              "REGISTRO DIARIO: Obligatorio registrar asistencia (entrada y salida) en la app oficial.",
              "PUNTUALIDAD: Contamos con una tolerancia de 20 minutos al ingreso.",
              "FLEXIBILIDAD: 'Tiempo por Tiempo' coordinado con el Jefe Inmediato para compensar llegadas tarde (Max 40 min)."
            ]
          },
          { 
             type: BlockType.HIGHLIGHT, 
             title: "LINK DE REGISTRO (APPSHEET)", 
             content: "https://www.appsheet.com/start/2c62b481-c2d4-4bfa-8423-5a85fc828d16?platform=desktop" 
          },
          { type: BlockType.HEADER, content: "3.3 POLÍTICA DE VEHÍCULOS UTILITARIOS" },
          { type: BlockType.PARAGRAPH, content: "Para mayor detalle ver Manual de Remuneración (doc-001 Sección XVI)." },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'TIPO', accessor: 'tipo', width: '30%' },
                { header: 'USO PERMITIDO', accessor: 'uso', width: '70%' },
              ],
              rows: [
                { tipo: 'TIPO A (Utilitario)', uso: 'Uso estrictamente laboral. Debe pernoctar en las instalaciones. Prohibido uso personal.' },
                { tipo: 'TIPO B (Asignado)', uso: 'Uso laboral y personal razonable. Permitido el resguardo en domicilio.' },
                { tipo: 'TIPO C (Propio)', uso: 'Esquema de apoyo por mantenimiento y gasolina sujeto a bitácora.' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-mc-4',
        title: 'COMPENSACIÓN Y PROTECCIÓN',
        number: 'IV',
        blocks: [
          { type: BlockType.HEADER, content: "4.1 ESTRUCTURA SALARIAL (MANUAL DOC-001)" },
          { type: BlockType.PARAGRAPH, content: "Tu ingreso se compone de una Suma Mensual Fija (SMF) que integra tu Sueldo Nominal + Pago por Productividad." },
          {
            type: BlockType.LIST,
            content: [
              "PAGOS NÓMINA: Quincenales (días 10 y 25) vía Santander.",
              "PAGOS COMISIONES: Mensuales (día 15) para personal eligible (Cobranza efectiva).",
              "AGUINALDO: 15 días sobre la SMF (Sueldo + Productividad). Ver detalle en Manual Remuneración.",
              "PRIMA VACACIONAL: 25% sobre los días correspondientes (Base SMF).",
              "BONO TRIMESTRAL: Variable basado en KPIs. Se paga el día 25 del mes siguiente al cierre de Q."
            ]
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "LAS 10 REGLAS DE ORO (BONOS)", 
            content: "Para cobrar tu bono trimestral, la meta debe ser: 1. Consensuada, 2. Entendida, 3. Alcanzable, 4. Medible, 5. Firmada, 6. Valuada, 7. Pagada el 25, 8. Validada, 9. Rango 80-120%, 10. Con continuidad." 
          },
          { type: BlockType.HEADER, content: "4.2 PROTECCIÓN SUPERIOR (SEGUROS)" },
          { type: BlockType.PARAGRAPH, content: "Consulta la Política de Elegibilidad de Planes de Seguro (doc-004) para detalles de cobertura." },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 1 },
            content: [
              { title: "GMM MENORES (TLMEDIK)", text: "Cobertura universal de salud preventiva y consultas de primer contacto." },
              { title: "SEGURO DE VIDA (INSIGNIA LIFE)", text: "Suma asegurada de 24 a 60 meses de sueldo según categoría." },
              { title: "GMM MAYORES (BX+)", text: "Cobertura diferenciada por subgrupo institucional según adscripción. Hijos hasta 24 años." },
            ]
          },
          { type: BlockType.HEADER, content: "4.3 POLÍTICA DE VIÁTICOS Y VIAJES" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'CATEGORÍA', accessor: 'cat', width: '30%' },
                { header: 'REGLA DE ORO', accessor: 'rule', width: '70%' },
              ],
              rows: [
                { cat: 'TRANSPORTE', rule: 'Uso obligatorio de Uber/Didi por seguridad y facturación.' },
                { cat: 'VUELOS', rule: 'Tarifa económica con 15 días de anticipación.' },
                { cat: 'COMPROBACIÓN', rule: 'Deadline: 3 días hábiles tras el regreso.' },
                { cat: 'NO DEDUCIBLES', rule: 'Serán descontados vía nómina automáticamente (Alcohol prohibido).' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-mc-5',
        title: 'VACACIONES Y DESARROLLO',
        number: 'V',
        blocks: [
          { type: BlockType.HEADER, content: "5.1 TABLA DE VACACIONES VIGENTE" },
          { type: BlockType.PARAGRAPH, content: "Cumplimos cabalmente con la reforma de 'Vacaciones Dignas' (Art. 76 LFT). Adicionalmente, ofrecemos un beneficio de permiso en el primer año." },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'AÑOS DE SERVICIO', accessor: 'y', width: '40%' },
                { header: 'DÍAS DE VACACIONES LFT', accessor: 'd', width: '60%' },
              ],
              rows: [
                { y: 'Año 1', d: '12 días (+2 días de Permiso con Goce - NO VACACIONES)' },
                { y: 'Año 2', d: '14 días' },
                { y: 'Año 3', d: '16 días' },
                { y: 'Año 4', d: '18 días' },
                { y: 'Año 5', d: '20 días' },
                { y: '6 a 10 años', d: '22 días' },
                { y: '11 a 15 años', d: '24 días' },
                { y: '16 a 20 años', d: '26 días' },
                { y: '21 a 25 años', d: '28 días' },
                { y: '26 a 30 años', d: '30 días' },
                { y: '31 a 35 años', d: '32 días' },
              ]
            }
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "ACLARACIÓN SOBRE LOS 2 DÍAS EXTRA (AÑO 1)", 
            content: "Los 2 días adicionales otorgados a los 6 meses de antigüedad son un PERMISO CON GOCE DE SUELDO, no se suman al saldo de vacaciones oficial y caducan obligatoriamente al cumplir el primer aniversario. Es un beneficio exclusivo de bienvenida." 
          },
          { type: BlockType.HEADER, content: "5.2 DESARROLLO Y PAGO POR OBJETIVOS" },
          { type: BlockType.LIST, content: ["PAGO POR OBJETIVOS: Ciclo anual con cortes trimestrales para validación de metas y pago de bonos.", "PIP (PLAN DE MEJORA): Se activa si la calificación es menor al 70% dos veces seguidas.", "MOVILIDAD INTERNA: Requiere mínimo 12 meses en puesto actual, KPI > 90 y sin actas administrativas.", "EDUCACIÓN (BECAS): Provein cubre el 80% si tu asistencia es >95% y promedio >9.0 (Ver Manual doc-001).", "REFERIDOS: Bono de $4,000 MXN por talento recomendado contratado."] }
        ]
      },
      {
        id: 'sec-mc-6',
        title: 'CÓDIGO DE VESTIMENTA Y CULTURA',
        number: 'VI',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Estilo Corporativo: SMART CASUAL." },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { title: "DAMAS (SÍ)", text: "Blusa casual, polo, sweater, sacos, gabardina, faldas (media/larga), jeans (buen estado), flats, botines, tenis casuales limpios." },
              { title: "CABALLEROS (SÍ)", text: "Camisas casuales, polo, sweater, gabardina, sacos, blazer, jeans (buen estado), zapatos casuales, tenis casuales limpios." },
            ]
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "LO QUE NO ESTÁ PERMITIDO", 
            options: { highlightColor: 'red' },
            content: "Shorts, bermudas, ropa deportiva (pants), camisetas sin mangas, mensajes ofensivos, tops cortos, minifaldas, escotes pronunciados, jeans rotos, gorras en oficina, chanclas/sandalias de baño." 
          },
          { type: BlockType.HEADER, content: "6.2 CULTURA Y CONVIVENCIA" },
          { type: BlockType.PARAGRAPH, content: "Política de Refrigerador (Viernes): Limpieza general semanal. Alimentos no etiquetados o en mal estado serán desechados." },
          { type: BlockType.HEADER, content: "6.3 PROCESO DE SUBSANACIÓN (NO REPRESALIAS)" },
          { type: BlockType.PARAGRAPH, content: "Para reportar acoso o discriminación (Ver Código de Ética doc-003). Cualquier reporte es confidencial y libre de represalias." },
          {
             type: BlockType.GRID_CARDS,
             options: { columns: 2 },
             content: [
               { title: "BUZÓN DIGITAL", text: "https://forms.gle/npN4cJPepPChegUu5" },
               { title: "CORREO DIRECTO", text: "talentohumano@provein.com.mx" }
             ]
          }
        ]
      },
      {
        id: 'sec-mc-7',
        title: 'PROCESO DE SALIDA Y TRADICIONES',
        number: 'VII',
        blocks: [
          { type: BlockType.HEADER, content: "7.1 SALIDA ORDENADA" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { title: "CARTA NO ADEUDO", text: "Entrega obligatoria de activos (Laptop, Celular, Vehículo Utilitario, Tarjeta de Gasolina) con firmas de todas las áreas." },
              { title: "ENCUESTA DE SALIDA", text: "Requisito indispensable: https://forms.gle/bR1kiouQ4BQvFvi37" },
            ]
          },
          { type: BlockType.HEADER, content: "7.2 NUESTRAS TRADICIONES" },
          {
            type: BlockType.LIST,
            content: [
              "Kick Off Anual (Enero).",
              "RODI (Reuniones de Integración).",
              "Cumpleaños (Salida 2:00 PM).",
              "Viernes Santo (Día Libre).",
              "Día del Niño, Madres y Padres.",
              "Fiestas Patrias y Día de Muertos.",
              "Thanksgiving (Comida Gratitud).",
              "Cierre de Año (24 y 31 Dic)."
            ]
          },
          {
             type: BlockType.HIGHLIGHT, 
             title: "VIGENCIA Y CONTROL DE VERSIONES", 
             options: { highlightColor: 'blue' },
             content: "El presente Manual del Colaborador entra en vigor a partir de su fecha de actualización. Esta versión anula y sustituye automáticamente a cualquier manual anterior."
          },
          {
            type: BlockType.SIGNATURE,
            content: [
               { role: 'TALENTO HUMANO', area: 'EMISOR' },
               { role: 'COLABORADOR', area: 'FIRMA DE RECIBIDO Y CONFORMIDAD' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'doc-002',
    title: 'PROPUESTA DE REMUNERACIÓN 2026',
    subtitle: 'Herramienta Interactiva de Cálculo Salarial y Beneficios.',
    code: 'PRO-TH-FOR-001-V108.0',
    version: 'V108.0',
    pageCount: 2,
    updatedAt: '2025-06-15',
    companyName: 'CONSUMIBLES PROVEIN S.A.P.I. DE C.V.',
    sections: []
  },
  {
    id: 'doc-003',
    title: 'CÓDIGO DE ÉTICA Y CONDUCTA',
    subtitle: 'Marco normativo integral alineado a las Normas Oficiales Mexicanas (NOM-035/NOM-025), LFT y mejores prácticas corporativas.',
    code: 'PRO-TH-POL-002-V1.1',
    version: 'V1.1',
    pageCount: 16,
    updatedAt: '2025-10-20',
    companyName: 'CONSUMIBLES PROVEIN S.A.P.I. DE C.V.',
    sections: [
      {
        id: 'sec-eth-control',
        title: 'GOBERNANZA TÉCNICA',
        number: 'I',
        blocks: [
          { type: BlockType.HEADER, content: "1.1 HISTORIAL DE REVISIONES Y CONTROL DOCUMENTAL" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'VERSIÓN', accessor: 'ver', width: '15%' },
                { header: 'FECHA', accessor: 'date', width: '20%' },
                { header: 'DESCRIPCIÓN DEL CAMBIO', accessor: 'desc', width: '40%' },
                { header: 'APROBADO POR', accessor: 'auth', width: '25%' },
              ],
              rows: [
                { ver: '1.0', date: '01/Jun/2025', desc: 'Emisión original.', auth: 'Comité de Ética' },
                { ver: '1.1', date: '20/Oct/2025', desc: 'Actualización normativa: Inclusión de Lavado de Activos, Ciberseguridad y Trabajo Forzoso.', auth: 'Dir. Administrativa' },
              ]
            }
          },
          { type: BlockType.HEADER, content: "1.2 ALCANCE Y VIGENCIA" },
          { type: BlockType.PARAGRAPH, content: "Este Código es de aplicación obligatoria para todos los empleados, directivos, filiales, subsidiarias y contratistas de CONSUMIBLES PROVEIN S.A.P.I. DE C.V. Entra en vigor el día de su publicación y permanece vigente hasta su próxima revisión bianual." }
        ]
      },
      {
        id: 'sec-eth-1',
        title: 'PRINCIPIOS DE CONDUCTA ESPERADA',
        number: 'II',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "En CONSUMIBLES PROVEIN, nuestra reputación es nuestro activo más valioso. Nuestra conducta se rige por cuatro pilares fundamentales que definen quiénes somos y cómo operamos en el mercado mexicano:" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { title: "CONFIANZA", text: "Construimos relaciones sólidas y duraderas basadas en la credibilidad técnica, la transparencia administrativa y la seguridad que brindamos a nuestros socios comerciales." },
              { title: "HUMANISMO", text: "Respetamos la dignidad humana por encima de cualquier interés económico. Valoramos a la persona como el centro de nuestra operación." },
              { title: "RESPONSABILIDAD", text: "Asumimos las consecuencias de nuestros actos y decisiones. Operamos con conciencia social y cumplimiento normativo estricto." },
              { title: "COMPROMISO", text: "Nos entregamos al logro de los objetivos con pasión, lealtad y dedicación, buscando siempre la excelencia en el servicio." },
            ]
          }
        ]
      },
      {
        id: 'sec-eth-2',
        title: 'DERECHOS HUMANOS Y PRÁCTICAS LABORALES',
        number: 'III',
        blocks: [
          { type: BlockType.HEADER, content: "3.1 IGUALDAD Y NO DISCRIMINACIÓN (NOM-025)" },
          { type: BlockType.PARAGRAPH, content: "PROVEIN garantiza procesos de reclutamiento, selección y ascenso basados exclusivamente en el mérito técnico, prohibiendo cualquier distinción por género, edad, discapacidad, religión, estado civil o preferencia sexual." },
          { type: BlockType.HEADER, content: "3.2 PREVENCIÓN DE RIESGOS PSICOSOCIALES (NOM-035)" },
          { type: BlockType.PARAGRAPH, content: "Alineados a la NOM-035, nos comprometemos a promover un Entorno Organizacional Favorable (EOF), previniendo factores de riesgo psicosocial como cargas de trabajo contradictorias y violencia laboral." },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "3.3 LIBERTAD DE ASOCIACIÓN (OIT C87 y C98)", 
            options: { highlightColor: 'blue' },
            content: "PROVEIN reconoce y respeta el derecho de todos sus colaboradores a la libertad de asociación y a la negociación colectiva, garantizando que no existan represalias ni discriminación contra representantes de los trabajadores." 
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "3.4 PROHIBICIÓN DE TRABAJO FORZOSO Y TRÁFICO DE PERSONAS", 
            options: { highlightColor: 'red' },
            content: "En cumplimiento con los estándares internacionales (OIT Convenio 29), PROVEIN prohíbe terminantemente el uso de trabajo forzoso, esclavitud moderna, servidumbre por deudas o tráfico de personas en sus operaciones y cadena de suministro. Todo trabajo es voluntario y libre de renunciar." 
          }
        ]
      },
      {
        id: 'sec-eth-3',
        title: 'INTEGRIDAD EN NEGOCIOS Y ANTICORRUPCIÓN',
        number: 'IV',
        blocks: [
          { type: BlockType.HEADER, content: "4.1 ANTICORRUPCIÓN Y SOBORNO (LGRA)" },
          { type: BlockType.PARAGRAPH, content: "Ningún colaborador puede ofrecer, prometer o aceptar sobornos, dádivas o pagos de facilitación a funcionarios públicos o privados para obtener ventajas indebidas." },
          { type: BlockType.HEADER, content: "4.2 CONFLICTO DE INTERESES Y REGALOS" },
          { type: BlockType.PARAGRAPH, content: "Los colaboradores deben declarar cualquier relación personal o económica que pueda interferir con sus deberes. Regalos > $500 MXN están prohibidos." },
          { type: BlockType.HEADER, content: "4.3 PREVENCIÓN DE LAVADO DE DINERO (AML) Y FRAUDE" },
          { type: BlockType.PARAGRAPH, content: "PROVEIN cumple con las leyes antilavado de activos. Queda estrictamente prohibido participar en transacciones que involucren recursos de procedencia ilícita." },
          {
             type: BlockType.LIST,
             content: [
               "Conoce a tu Cliente (KYC): Validar la identidad fiscal de todos los socios comerciales.",
               "Fraude Interno: La alteración de registros financieros o inventarios será sancionada con rescisión inmediata y denuncia penal."
             ]
          }
        ]
      },
      {
        id: 'sec-eth-4',
        title: 'COMPETENCIA LEAL Y CONDUCTA EN EL MERCADO',
        number: 'V',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Competimos de manera vigorosa pero justa, respetando las leyes antimonopolio y de competencia económica." },
          {
            type: BlockType.LIST,
            content: [
              "Trato Justo: No manipulamos, ocultamos ni abusamos de información privilegiada.",
              "Publicidad Honesta: Comunicaciones basadas en datos veraces.",
              "Respeto a Terceros: Evitamos comentarios despectivos sobre la competencia."
            ]
          }
        ]
      },
      {
        id: 'sec-eth-5',
        title: 'SEGURIDAD DE LA INFORMACIÓN Y PRIVACIDAD',
        number: 'VI',
        blocks: [
          { type: BlockType.HEADER, content: "6.1 PROTECCIÓN DE DATOS (LFPDPPP)" },
          { type: BlockType.PARAGRAPH, content: "PROVEIN trata la información personal de clientes y colaboradores con estricta confidencialidad." },
          { type: BlockType.HEADER, content: "6.2 CIBERSEGURIDAD Y ACTIVOS DIGITALES" },
          { type: BlockType.PARAGRAPH, content: "Es responsabilidad de todo colaborador proteger los activos digitales de la empresa." },
          {
             type: BlockType.LIST,
             content: [
               "Contraseñas: No compartir credenciales de acceso.",
               "Phishing: Reportar correos sospechosos al área de Sistemas.",
               "Dispositivos: No conectar USBs desconocidos ni instalar software no autorizado."
             ]
          }
        ]
      },
      {
        id: 'sec-eth-6',
        title: 'USO ADECUADO DE RECURSOS',
        number: 'VII',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Los activos de la empresa son herramientas exclusivas para el desempeño laboral productivo." },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'RECURSO', accessor: 'rec', width: '30%' },
                { header: 'POLÍTICA DE USO', accessor: 'pol', width: '70%' },
              ],
              rows: [
                { rec: 'VEHÍCULOS UTILITARIOS', pol: 'Uso exclusivo de trabajo. Resguardo obligatorio. Prohibido uso personal.' },
                { rec: 'EQUIPO DE CÓMPUTO', pol: 'Prohibida la instalación de software pirata. Monitoreo constante.' },
                { rec: 'INTERNET', pol: 'Uso profesional. Prohibido contenido inapropiado o descargas ilegales.' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-eth-7',
        title: 'SEGURIDAD, SALUD Y MEDIO AMBIENTE',
        number: 'VIII',
        blocks: [
          { type: BlockType.HEADER, content: "8.1 CULTURA DE PREVENCIÓN" },
          { type: BlockType.PARAGRAPH, content: "La seguridad es responsabilidad de todos. Colaboramos activamente con la Comisión Mixta de Seguridad e Higiene." },
          { type: BlockType.HEADER, content: "8.2 RESPONSABILIDAD AMBIENTAL" },
          { type: BlockType.PARAGRAPH, content: "Nos comprometemos a minimizar nuestro impacto ambiental mediante el reciclaje y uso eficiente de recursos." },
          { type: BlockType.HIGHLIGHT, title: "INICIATIVA HOGAR SOSTENIBLE", content: "Invitamos a colaboradores a traer residuos reciclables limpios (PET, cartón) para su correcta disposición." }
        ]
      },
      {
        id: 'sec-eth-8',
        title: 'REDES SOCIALES',
        number: 'IX',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "El uso de redes sociales debe ser responsable. Al identificarte como colaborador, eres embajador de la marca. Evita publicaciones ofensivas." }
        ]
      },
      {
        id: 'sec-eth-redflags',
        title: 'GUÍA DE TOMA DE DECISIONES ÉTICAS',
        number: 'X',
        blocks: [
          { type: BlockType.HEADER, content: "10.1 MARCADORES DE ALARMA (RED FLAGS)" },
          { type: BlockType.PARAGRAPH, content: "Si te enfrentas a una situación difícil, hazte estas preguntas antes de actuar:" },
          {
             type: BlockType.GRID_CARDS,
             options: { columns: 2 },
             content: [
               { title: "¿ES LEGAL?", text: "¿Cumple con la ley y las políticas internas de PROVEIN?" },
               { title: "¿ES CORRECTO?", text: "¿Me sentiría cómodo si esta acción apareciera en las noticias o se lo contara a mi familia?" },
               { title: "¿ES SEGURO?", text: "¿Pone en riesgo a personas, la reputación de la empresa o el medio ambiente?" },
               { title: "ANTE LA DUDA", text: "Pregunta. Contacta al Comité de Ética antes de actuar." },
             ]
          }
        ]
      },
      {
        id: 'sec-eth-9',
        title: 'CANALES DE DENUNCIA Y NO REPRESALIAS',
        number: 'XI',
        blocks: [
          { type: BlockType.HEADER, content: "11.1 CANALES CONFIDENCIALES" },
          { type: BlockType.PARAGRAPH, content: "PROVEIN fomenta una cultura de puertas abiertas. Reporta violaciones al código:" },
          { type: BlockType.HIGHLIGHT, title: "BUZÓN DIGITAL", options: { highlightColor: 'red' }, content: "https://forms.gle/npN4cJPepPChegUu5" },
          { type: BlockType.HEADER, content: "11.2 GARANTÍA DE NO REPRESALIAS" },
          { type: BlockType.PARAGRAPH, content: "PROVEIN garantiza que NO habrá represalias ni consecuencias negativas para quien denuncie de buena fe. Toda denuncia será investigada objetivamente." },
          {
            type: BlockType.SIGNATURE,
            content: [
              { role: 'DIRECCIÓN ADMINISTRATIVA', area: 'APROBACIÓN FINAL' },
              { role: 'COMITÉ DE ÉTICA', area: 'VALIDACIÓN NORMATIVA' },
              { role: 'COLABORADOR', area: 'LECTURA Y COMPROMISO' },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'doc-004',
    title: 'POLÍTICA DE ELEGIBILIDAD DE PLANES DE SEGURO',
    subtitle: 'Reglas para la asignación y gestión de coberturas de GMM y Vida.',
    code: 'PRO-TH-POL-003-V1.0',
    version: 'V1.0',
    pageCount: 4,
    updatedAt: '2025-11-01',
    companyName: 'CONSUMIBLES PROVEIN S.A.P.I. DE C.V.',
    sections: [
      {
        id: 'sec-seg-1',
        title: 'OBJETIVO DE LA POLÍTICA',
        number: 'I',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Establecer las reglas claras y transparentes para la elegibilidad, la inclusión de dependientes y las características de las coberturas de los planes de seguros (GMMayores, GMMenores y Seguro de Vida) otorgados por Consumibles PROVEIN a sus colaboradores, en función de su subgrupo de adscripción y tipo de jornada." },
          { type: BlockType.HIGHLIGHT, title: "REQUISITO DE ONBOARDING", content: "La lectura, comprensión y firma de conformidad de la presente política es un requisito indispensable durante el proceso de inducción (Onboarding) de todo nuevo colaborador." }
        ]
      },
      {
        id: 'sec-seg-2',
        title: 'MARCO ORGANIZACIONAL DE LOS SUBGRUPOS',
        number: 'II',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Para la correcta aplicación de esta política, los subgrupos están adscritos a las siguientes entidades:" },
          { type: BlockType.HIGHLIGHT, title: "PROVEIN (SUBGRUPOS 1, 2, 3, 4, 5 Y 6)", options: { highlightColor: 'blue' }, content: "Colaboradores adscritos a Consumibles PROVEIN." },
          { type: BlockType.HEADER, content: "2.1 DETALLE DE SUBGRUPOS Y COBERTURAS" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'SUB', accessor: 'sub', width: '10%' },
                { header: 'SA', accessor: 'sa', width: '15%' },
                { header: 'DED', accessor: 'ded', width: '15%' },
                { header: 'COA', accessor: 'coa', width: '15%' },
                { header: 'CARACTERÍSTICAS', accessor: 'car', width: '45%' },
              ],
              rows: [
                { sub: '1', sa: '5,000,000', ded: '3,000.00', coa: '5.00%', car: 'Region: 14-0119 Nivel: 6 ESTAN Tope Coa: (1) Hon Q: (1). Roles: Operativo, Supervisor, Coordinador y Líder.' },
                { sub: '2', sa: '5,000,000', ded: '3,000.00', coa: '5.00%', car: 'Region: 14-0119 Nivel: 6 ESTAN Tope Coa: (1) Hon Q: (1). Roles: Operativo, Supervisor, Coordinador y Líder.' },
                { sub: '3', sa: '20,000,000', ded: '10,000.00', coa: '10.00%', car: 'Region: 14-0119 Nivel: 5 MEDIO Tope Coa: (1) Hon Q: (1). Roles: Gerencia.' },
                { sub: '4', sa: '40,000,000', ded: '10,000.00', coa: '10.00%', car: 'Region: 14-0119 Nivel: 5 MEDIO Tope Coa: (1) Hon Q: (1). Jefaturas + 1 dependiente.' },
                { sub: '5', sa: '125,000,000', ded: '15,000.00', coa: '10.00%', car: 'Region: 14-0119 Nivel: 5 MEDIO Tope Coa: (1) Hon Q: (1). Directores.' },
                { sub: '6', sa: '20,000,000', ded: '20,000.00', coa: '10.00%', car: 'Region: 15-01 Nivel: 5 MEDIO Tope Coa: (1) Hon Q: (1). Roles: Operativo, Supervisor.' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-seg-3',
        title: 'APLICACIÓN GENERAL (COBERTURA UNIVERSAL)',
        number: 'III',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Las siguientes prestaciones son de cobertura universal y aplican a la totalidad de los colaboradores, con la única excepción de la regla de elección para el personal de jornada reducida (Ver Sección 5)." },
          { type: BlockType.HEADER, content: "CUMPLIMIENTO NOM-035" },
          { type: BlockType.PARAGRAPH, content: "En apego a la NOM-035-STPS-2018, estos planes de beneficios forman parte de las medidas para promover un Entorno Organizacional Favorable." },
          { type: BlockType.HEADER, content: "3.1 FECHAS DE RENOVACIÓN ANUAL DE PÓLIZAS" },
          {
            type: BlockType.LIST,
            content: [
              "Seguro de Gastos Médicos Menores: 12 de junio.",
              "Seguro de Gastos Médicos Mayores: 22 de noviembre.",
              "Seguro de Vida: 1ro de diciembre."
            ]
          },
          { type: BlockType.HEADER, content: "3.2 SEGURO DE GASTOS MÉDICOS MENORES (GMMENORES)" },
          { type: BlockType.HIGHLIGHT, title: "ELEGIBILIDAD", content: "Todos los colaboradores son elegibles para la cobertura GMMenores. Incluye gastos funerarios para el Colaborador y dos familiares más." },
          { type: BlockType.HEADER, content: "3.3 SEGURO DE VIDA (SV)" },
          { type: BlockType.PARAGRAPH, content: "El Seguro de Vida aplica a todos los colaboradores, excepto a los subgrupos 4. La Suma Asegurada varía por categoría: Dirección (60 meses), Gerencia (48 meses), Jefaturas (36 meses), General (24 meses)." }
        ]
      },
      {
        id: 'sec-seg-4',
        title: 'POLÍTICAS ESPECÍFICAS DEL SEGURO DE GASTOS MÉDICOS MAYORES',
        number: 'IV',
        blocks: [
          { type: BlockType.HEADER, content: "4.1 COBERTURA DE MATERNIDAD" },
          { type: BlockType.HIGHLIGHT, title: "ALCANCE DE COBERTURA", content: "La cobertura de maternidad es una prestación que aplica a TODOS los subgrupos (1 al 6), pero es exclusiva para las colaboradoras titulares." },
          { type: BlockType.HEADER, content: "4.2 ELEGIBILIDAD PARA INCLUSIÓN DE DEPENDIENTES ECONÓMICOS" },
          { type: BlockType.PARAGRAPH, content: "Solo los colaboradores titulares de los subgrupos 3, 4 y 5 podrán incluir dependientes económicos (cónyuge e hijos) en la póliza." },
          { type: BlockType.HEADER, content: "A. RESTRICCIÓN DE EDAD DE DEPENDIENTES (HIJOS)" },
          { type: BlockType.PARAGRAPH, content: "Regla General: La edad límite para asegurar a los hijos como dependientes es de 24 años." },
          { type: BlockType.HEADER, content: "4.3 GASTOS FUNERARIOS" },
          { type: BlockType.PARAGRAPH, content: "En la póliza de Gastos Médicos Mayores, la cobertura de gastos funerarios aplica exclusivamente para el colaborador titular." }
        ]
      },
      {
        id: 'sec-seg-5',
        title: 'DISPOSICIÓN ESPECIAL PARA PERSONAL DE JORNADA REDUCIDA',
        number: 'V',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Para el personal contratado bajo la modalidad de Jornada Reducida, se establece un esquema de prestación única dada la naturaleza de su relación laboral:" },
          { type: BlockType.HIGHLIGHT, title: "COBERTURA APLICABLE", options: { highlightColor: 'red' }, content: "El colaborador de jornada reducida tendrá acceso únicamente a: Seguro de Vida (SV) y Seguro de Gastos Médicos Menores (GMMenores) juntos." }
        ]
      },
      {
        id: 'sec-seg-6',
        title: 'PROCESO DE MOVIMIENTOS',
        number: 'VI',
        blocks: [
          {
             type: BlockType.LIST,
             content: [
               "Cualquier alta, baja o modificación en la elección de coberturas debe ser notificada y gestionada a través del departamento de Talento Humano.",
               "Las bajas de dependientes son responsabilidad de la Aseguradora una vez notificada la incidencia."
             ]
          }
        ]
      },
      {
        id: 'sec-seg-7',
        title: 'APROBACIÓN Y AUTORIZACIÓN',
        number: 'VII',
        blocks: [
          {
             type: BlockType.HIGHLIGHT,
             title: "VIGENCIA Y CONTROL DE VERSIONES",
             options: { highlightColor: 'blue' },
             content: "La presente Política de Seguros entra en vigor a partir de su fecha de actualización. Esta versión anula y sustituye automáticamente a cualquier política anterior."
          },
          {
            type: BlockType.SIGNATURE,
            content: STANDARD_SIGNATURES
          }
        ]
      }
    ]
  },
  {
    id: 'doc-001',
    title: 'MANUAL DE REMUNERACIÓN',
    subtitle: 'Protocolo normativo institucional para la gestión técnica de compensaciones, bonos por desempeño, movilidad estratégica y formación profesional integral.',
    code: 'PRO-TH-POL-001-V107.0',
    version: 'V107.0',
    pageCount: 22,
    updatedAt: '2025-02-23',
    companyName: 'CONSUMIBLES PROVEIN S.A.P.I. DE C.V.',
    sections: [
      {
        id: 'sec-1',
        title: 'ESTRUCTURA EMPRESARIAL',
        number: 'I',
        blocks: [
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { title: "CERTEZA LEGAL", text: "Documento alineado a la Ley Federal del Trabajo para garantizar transparencia en la remuneración integral de todos nuestros colaboradores." },
              { title: "DIRECCIÓN UNIFICADA", text: "Validado por las Direcciones Administrativa, Comercial y de Operaciones como el estándar único institucional de equidad y meritocracia técnica." }
            ]
          }
        ]
      },
      {
        id: 'sec-2',
        title: 'SUSTENTO JURÍDICO Y FILOSOFÍA',
        number: 'II',
        blocks: [
          {
            type: BlockType.HEADER,
            content: "2.1 APEGO A LA NORMATIVIDAD LABORAL MEXICANA"
          },
          {
            type: BlockType.PARAGRAPH,
            content: "CONSUMIBLES PROVEIN fundamenta su política de compensación en el cumplimiento irrestricto de la Ley Federal del Trabajo (LFT). Buscamos fomentar una cultura de certidumbre administrativa que proteja tanto la estabilidad del personal como la salud financiera institucional a través de reglas claras, procesos de pago transparentes y auditorías constantes de cumplimiento normativo."
          },
          {
            type: BlockType.HIGHLIGHT,
            title: "ARTÍCULOS 82, 83 Y 84 LFT",
            content: "Estos artículos definen el salario como la retribución que el patrón debe pagar al trabajador por su labor técnica u operativa. La remuneración puede fijarse por unidad de tiempo, por unidad de obra, por comisión o a precio alzado. PROVEIN garantiza que tu sueldo nominal y todas las prestaciones adicionales respetan plenamente estas definiciones legales de ingreso integrado."
          },
          {
            type: BlockType.PARAGRAPH,
            content: "Nuestra filosofía organizacional sostiene que la remuneración justa es el pilar de la excelencia operativa. Por ello, este manual estructura un sistema de incentivos técnicos que premia el esfuerzo extraordinario, la disciplina operativa y el compromiso incondicional con la visión comercial de la empresa en el largo plazo."
          },
          {
            type: BlockType.HEADER,
            content: "2.2 CONFIDENCIALIDAD Y ÉTICA SALARIAL"
          },
          {
            type: BlockType.PARAGRAPH,
            content: "Tu estructura de remuneración total es información privada y confidencial. La empresa considera la divulgación de salarios propios o ajenos como una falta administrativa grave que atenta contra la armonía del equipo. La reserva de esta información protege la meritocracia individual y evita conflictos innecesarios basados en especulaciones externas al proceso oficial."
          }
        ]
      },
      {
        id: 'sec-3',
        title: 'LIDERAZGO Y VALIDACIÓN DIRECTIVA',
        number: 'III',
        blocks: [
          { type: BlockType.HEADER, content: "3.1 AUTORIDAD TRIPARTITA UNIFICADA" },
          { type: BlockType.PARAGRAPH, content: "Las decisiones estratégicas sobre la estructura de remuneración se toman de forma colegiada por el bloque directivo institucional. Esto asegura que cada inversión en el talento humano tenga un sustento operativo, comercial y financiero equilibrado para la rentabilidad de la empresa." }
        ]
      },
      {
        id: 'sec-4',
        title: 'PROTOCOLO DE INGRESO Y CARTA OFERTA',
        number: 'IV',
        blocks: [
          { type: BlockType.HEADER, content: "4.1 SEGURIDAD EN LA CARTA OFERTA INDIVIDUAL" },
          { type: BlockType.PARAGRAPH, content: "La Carta Oferta es el instrumento primario que define tu compensación total. Para su validez institucional absoluta y activación oficial en nómina, debe contar con las firmas físicas de las siguientes 6 figuras obligatorias del gobierno interno:" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { number: "01.", title: "Dirección Administrativa", text: "Certifica la disponibilidad de flujo presupuestal para sostener la posición." },
              { number: "02.", title: "Dirección de Área", text: "Valida la alineación estratégica de la contratación con los objetivos macro del departamento." },
              { number: "03.", title: "Gerencia Administrativa", text: "Valida documentación fiscal y registro patronal sin errores." },
              { number: "04.", title: "Gerencia de Área", text: "Confirma metas (KPIs) técnicamente correctas para el puesto." },
              { number: "05.", title: "Talento Humano", text: "Supervisa contrato de ley, expediente y activación de seguros." },
              { number: "06.", title: "Colaborador", text: "Aceptación plena e informada de términos y reglamento." },
            ]
          }
        ]
      },
      {
        id: 'sec-5',
        title: 'ARQUITECTURA TÉCNICA DE TU PAGO',
        number: 'V',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "PROVEIN estructura tu pago de forma técnica para maximizar tu beneficio real y cumplir con las obligaciones fiscales ante el SAT e IMSS de forma exacta quincenalmente:" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'CONCEPTO INSTITUCIONAL', accessor: 'col1', width: '25%' },
                { header: 'METODOLOGÍA DE CÁLCULO', accessor: 'col2', width: '55%' },
                { header: 'BASE LEGAL', accessor: 'col3', width: '20%' },
              ],
              rows: [
                { col1: 'Sueldo Nominal', col2: 'Monto registrado ante el IMSS para cotizaciones de retiro, incapacidad y vivienda oficial.', col3: 'Art. 82 LFT' },
                { col1: 'Bono de Puntualidad', col2: '10% mensual extra sobre nominal por cumplimiento estricto de horario quincenal de entrada.', col3: 'Asistencia' },
                { col1: 'Bono de Asistencia', col2: '10% mensual extra por presencia física efectiva en la jornada laborada sin faltas.', col3: 'Asistencia' },
                { col1: 'Vales de Despensa', col2: 'Apoyo mensual en monedero para bienestar del hogar, dispersado de forma quincenal.', col3: 'Previsión' },
                { col1: 'Bono Trimestral', col2: 'Incentivo variable pagado cada 3 meses según cumplimiento de KPIs (80%-120%).', col3: 'Contrato' },
                { col1: 'Sueldo Fiscal Neto', col2: 'Remuneración real recibida tras retenciones legales de ISR y Cuota IMSS obrera vigente.', col3: 'Ingreso Neto' },
                { col1: 'Pago Productividad', col2: 'Monto neto fijo garantizado por la eficiencia técnica demostrada en el cargo asignado.', col3: 'PROVEIN' },
                { col1: 'SUMA MENSUAL FIJA', col2: 'Base integral garantizada para el personal activo en el periodo devengado mensual.', col3: 'ESTÁNDAR SMF' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-6',
        title: 'GRATIFICACIONES ANUALES SUPERIORES',
        number: 'VI',
        blocks: [
          { type: BlockType.HEADER, content: "6.1 TU AGUINALDO INSTITUCIONAL MENSUALIZADO" },
          { type: BlockType.HIGHLIGHT, title: "ARTÍCULO 87 LFT", content: "PROVEIN otorga una Prestación Superior al calcular tu aguinaldo sobre la Suma Mensual Fija (SMF). Mientras que la ley federal exige un mínimo de 15 días de sueldo base nominal, nosotros multiplicamos tu cuota diaria integrada por el total de tus ingresos fijos actuales." },
          { type: BlockType.PARAGRAPH, content: "RESTRICCIÓN: LOS VALES DE DESPENSA SE EXCLUYEN DE ESTE CÁLCULO ANUAL. EL PAGO SE LIQUIDA ANTES DEL 20 DE DICIEMBRE DE CADA PERIODO ANUAL DE FORMA OBLIGATORIA." },
          { type: BlockType.HEADER, content: "6.2 TU PRIMA VACACIONAL TÉCNICA" },
          { type: BlockType.HIGHLIGHT, title: "ARTÍCULO 80 LFT", content: "Te pagamos el 25% extra sobre los salarios devengables durante tu periodo de vacaciones oficiales. La base institucional se compone de tu Sueldo Nominal + Pago de Productividad mensualizado vigente." },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "EXCLUSIÓN OPERATIVA ABSOLUTA", 
            options: { highlightColor: 'red' },
            content: "LOS BONOS DE ASISTENCIA, EL BONO DE PUNTUALIDAD QUINCENAL Y LOS VALES DE DESPENSA NO INTEGRAN, BAJO NINGUNA CIRCUNSTANCIA, ESTA BASE TÉCNICA ESPECÍFICA DE CÁLCULO PARA EL PERSONAL ACTIVO. EL CÁLCULO SE LIMITA ESTRICTAMENTE AL SUELDO NOMINAL Y LA PRODUCTIVIDAD." 
          },
          { type: BlockType.HEADER, content: "6.3 POLÍTICA DE VACACIONES Y PERMISOS" },
          { type: BlockType.PARAGRAPH, content: "La cantidad de días de vacaciones se otorga estrictamente conforme a la tabla vigente de la Ley Federal del Trabajo. Adicionalmente, PROVEIN otorga un permiso especial condicionado:" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'AÑOS DE SERVICIO', accessor: 'years', width: '40%' },
                { header: 'DÍAS DE VACACIONES LFT', accessor: 'days', width: '60%' },
              ],
              rows: [
                { years: 'Año 1', days: '12 días (+2 Días de Permiso con Goce - NO SON VACACIONES)' },
                { years: 'Año 2', days: '14 días' },
                { years: 'Año 3', days: '16 días' },
                { years: 'Año 4', days: '18 días' },
                { years: 'Año 5', days: '20 días' },
                { years: '6 a 10 años', days: '22 días' },
                { years: '11 a 15 años', days: '24 días' },
                { years: '16 a 20 años', days: '26 días' },
                { years: '21 a 25 años', days: '28 días' },
                { years: '26 a 30 años', days: '30 días' },
                { years: '31 a 35 años', days: '32 días' },
              ]
            }
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "CONDICIÓN DE LOS 2 DÍAS EXTRA (AÑO 1)", 
            options: { highlightColor: 'blue' },
            content: "Al cumplir los primeros 6 meses, se otorgan 2 Días de Permiso con Goce de Sueldo. ESTOS DÍAS NO SE SUMAN A VACACIONES NI SE PAGAN EN FINIQUITO. Son un beneficio de uso exclusivo que CADUCA AUTOMÁTICAMENTE al cumplir el primer aniversario de servicio." 
          }
        ]
      },
      {
        id: 'sec-7',
        title: 'GESTIÓN DE AUSENCIAS E INCIDENCIAS',
        number: 'VII',
        blocks: [
          { type: BlockType.HEADER, content: "7.1 APLICACIÓN PROPORCIONAL DE DESCUENTOS" },
          { type: BlockType.HIGHLIGHT, title: "ALCANCE DEL DESCUENTO", content: "El descuento por falta injustificada o permiso sin goce de sueldo se calcula proporcionalmente sobre todos los conceptos del paquete de compensación: Sueldo Nominal, Bonos, Vales de Despensa y Productividad." },
          { type: BlockType.FORMULA, content: "(Monto Total Mensual del Concepto / 30.41667) x Días de Falta = Descuento Real" },
          { type: BlockType.PARAGRAPH, content: "Ejemplo: Si faltas 1 día, se te descontará 1/30 parte de tus Vales, 1/30 parte de tu Productividad, etc. No existen conceptos blindados ante el ausentismo." },
          { type: BlockType.HEADER, content: "7.2 DÍAS DE JORNADA REDUCIDA" },
          { type: BlockType.PARAGRAPH, content: "Los días con jornada reducida (Ej. 10 de Mayo, 24 y 31 de Diciembre) son una cortesía institucional. Para efectos de nómina, la ausencia en estos días implica el descuento de 1.0 día completo de salario y prestaciones." }
        ]
      },
      {
        id: 'sec-8',
        title: 'SALUD, INCAPACIDADES Y PAGOS PROTEGIDOS',
        number: 'VIII',
        blocks: [
          { type: BlockType.HEADER, content: "8.1 TABLA DE PAGOS DURANTE INCAPACIDADES" },
          { type: BlockType.PARAGRAPH, content: "PROVEIN protege tu ingreso de forma diferenciada según el tipo de incidencia, incluyendo explícitamente el tratamiento de Productividad, Bonos y Vales de Despensa:" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 1 },
            content: [
              { title: "ENFERMEDAD GENERAL (Criterio Estricto)", text: "• Días 1 al 3: PAGO $0.00. (Ni la empresa ni el IMSS pagan estos días).\n• Días 4 al 30: Se paga en la misma proporción (%) que designe el IMSS para el subsidio. Esto aplica a: Sueldo, Productividad, Bonos y Vales." },
              { title: "MATERNIDAD, PATERNIDAD Y ACCIDENTE", text: "• Garantía Total: Se paga al 100% la Productividad, Bonos de Puntualidad, Asistencia y Vales de Despensa.\n• En Maternidad/Accidente: El salario nominal lo cubre el IMSS al 100%.\n• En Paternidad: La empresa cubre el 100% de todo el paquete." },
              { title: "REGLA DE INCLUSIÓN", text: "Los Bonos de Puntualidad, Asistencia y Vales de Despensa TAMBIÉN SE INCLUYEN en estos cálculos. Si es Maternidad/Accidente se pagan completos; si es Enfermedad General, sufren el descuento proporcional o nulo según los días." },
            ]
          }
        ]
      },
      {
        id: 'sec-9',
        title: 'GESTIÓN DE TIEMPO EXTRAORDINARIO',
        number: 'IX',
        blocks: [
          { type: BlockType.HEADER, content: "9.1 POLÍTICA TÉCNICA DE TIEMPO POR TIEMPO" },
          { type: BlockType.PARAGRAPH, content: "No realizamos pagos monetarios por horas extra; operamos bajo un sistema de canje de descanso compensatorio consensuado, respetando los límites del Artículo 66 LFT:" },
          {
            type: BlockType.LIST,
            content: [
              "Máximo Diario: 3 horas adicionales autorizadas por jornada laboral registrada.",
              "Frecuencia Semanal: Las labores extraordinarias no ocurrirán más de 3 veces en una semana.",
              "Tope de Canje: Un máximo de 9 horas semanales acumulables para canje por descanso equivalente.",
              "Autorización y Validación: Toda labor excedente bajo este esquema requiere la validación expresa de la Dirección y Gerencia de cada Área correspondiente previa a su ejecución real."
            ]
          }
        ]
      },
      {
        id: 'sec-10',
        title: 'GESTIÓN TÉCNICA DE BONOS TRIMESTRALES',
        number: 'X',
        blocks: [
          { type: BlockType.HEADER, content: "10.1 CONDICIONES DE ACTIVACIÓN DEL INCENTIVO" },
          { type: BlockType.PARAGRAPH, content: "Los Bonos Trimestrales se activarán exclusivamente bajo el cumplimiento estricto de estos 2 requisitos técnicos:" },
          {
            type: BlockType.LIST,
            options: { isOrdered: true },
            content: [
              "Dominio y Antigüedad: El colaborador debe tener al menos 3 meses de antigüedad activa y demostrar el dominio total de la operación asignada sin contratiempos técnicos.",
              "Formalización TH: Las metas deben quedar establecidas y firmadas antes de cada trimestre natural con el área de Talento Humano para su registro oficial y validación quincenal."
            ]
          }
        ]
      },
      {
        id: 'sec-11',
        title: 'LAS 10 REGLAS DE ORO DEL PAGO TRIMESTRAL',
        number: 'XI',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Normas obligatorias para garantizar la objetividad y transparencia del pago variable trimestral:" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { number: "01.", title: "Consensuado", text: "Acuerdo total previo entre colaborador, Jefe Inmediato y Talento Humano oficial." },
              { number: "02.", title: "Entendido", text: "Definición técnica clara sin duda alguna por todas las partes involucradas en el flujo." },
              { number: "03.", title: "Alcanzable", text: "Meta retadora pero posible de lograr físicamente en el periodo evaluado trimestral." },
              { number: "04.", title: "Medible", text: "El indicador debe cuantificarse vía sistema administrativo o datos reales internos." },
              { number: "05.", title: "Escrito y Firmado", text: "Firma física obligatoria del Colaborador, Jefe y Talento Humano institucional." },
              { number: "06.", title: "Valuado", text: "Por el colaborador con Visto Bueno de Jefe Inmediato y Talento Humano." },
              { number: "07.", title: "Pagado el día 25", text: "En la quincena del día 25 inmediata siguiente al trimestre según calendario." },
              { number: "08.", title: "Autoevaluación", text: "Calificación validada técnicamente por Jefe Inmediato y Talento Humano antes de dispersar." },
              { number: "09.", title: "Rango (80%-120%)", text: "Calificación < 80% = Pago $0.00. El tope máximo de pago es al 120% del valor." },
              { number: "10.", title: "Continuidad", text: "Indispensable tener autorizado el periodo siguiente para liberar el pago actual acumulado." },
            ]
          }
        ]
      },
      {
        id: 'sec-12',
        title: 'CICLOS DE PAGO DE BONOS POR OBJETIVOS CUMPLIDOS',
        number: 'XII',
        blocks: [
          { type: BlockType.HEADER, content: "12.1 CRONOGRAMA OFICIAL DE REVISIÓN Y PAGO" },
          { type: BlockType.PARAGRAPH, content: "El cronograma institucional para el establecimiento de metas y la dispersión bancaria de los bonos trimestrales se rige por las siguientes fechas fijas (Quincena 2):" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'TRIMESTRE NATURAL', accessor: 'c1', width: '25%' },
                { header: 'ESTABLECIMIENTO DE META', accessor: 'c2', width: '25%' },
                { header: 'VALIDACIÓN DE OBJETIVOS', accessor: 'c3', width: '25%' },
                { header: 'DÍA DE PAGO (QUINCENA 2)', accessor: 'c4', width: '25%' },
              ],
              rows: [
                { c1: 'ENE - MAR', c2: '23 de Diciembre', c3: '1 al 15 de Abril', c4: '25 de Abril' },
                { c1: 'ABR - JUN', c2: '25 de Marzo', c3: '1 al 15 de Julio', c4: '25 de Julio' },
                { c1: 'JUL - SEP', c2: '25 de Junio', c3: '1 al 15 de Octubre', c4: '25 de Octubre' },
                { c1: 'OCT - DIC', c2: '25 de Septiembre', c3: '10 al 15 de Enero', c4: '25 de Enero' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-13',
        title: 'POLÍTICAS DE MODALIDADES DE CIERRE DE VENTAS (COMERCIAL)',
        number: 'XIII',
        blocks: [
          { type: BlockType.HEADER, content: "13.1 OBJETIVO" },
          { type: BlockType.PARAGRAPH, content: "Establecer lineamientos claros y transparentes para la asignación de cierres de ventas y comisiones, con base en la participación efectiva de los colaboradores comerciales en los distintos tipos de proyectos." },
          { type: BlockType.HEADER, content: "13.2 DEFINICIONES TÉCNICAS" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { title: "CV (CIERRE DE VENTA)", text: "Hace referencia al proceso completo o parcial mediante el cual el colaborador concreta una venta. Involucra desde prospección hasta cobro de factura. Aplica a proyectos nuevos o productos nuevos con alta intervención." },
              { title: "CC (CUIDA Y CRECE)", text: "Seguimiento, mantenimiento y crecimiento de cuentas existentes. Incluye atención continua, resolución de problemas y acciones de fidelización para aumento de ventas." },
            ]
          },
          { type: BlockType.HEADER, content: "13.3 TABLA MAESTRA DE CÓDIGOS DE ASIGNACIÓN" },
          { type: BlockType.PARAGRAPH, content: "La asignación de cada código debe basarse en la participación real y comprobable del colaborador en el proceso de venta o seguimiento. Los porcentajes se calculan sobre el margen operativo." },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'CÓDIGO', accessor: 'cod', width: '10%' },
                { header: '%', accessor: 'pct', width: '10%' },
                { header: 'DESCRIPCIÓN OPERATIVA', accessor: 'desc', width: '80%' },
              ],
              rows: [
                { cod: 'CV8', pct: '8%', desc: 'Cierre de Venta COMPLETO. Desde prospección hasta pago. Proyectos integrales con alta intervención técnica y comercial (Se busca o llega el cliente).' },
                { cod: 'CV4', pct: '4%', desc: 'Cierre de Venta PARCIAL o RECUPERADO. Agente toma proyecto avanzado y lo cierra. También válido para ventas compartidas (50/50).' },
                { cod: 'CV5', pct: '5%', desc: 'Cierre de Venta IN HOUSE. Completo desde prospección hasta pago en proyectos integrales InHouse.' },
                { cod: 'CC1', pct: '1%', desc: 'Cuida y Crece BÁSICO. Seguimiento a cliente activo con ventas regulares y de baja intervención.' },
                { cod: 'CC4', pct: '4%', desc: 'MANTENIMIENTO ALTA COMPLEJIDAD. Comisión especial por mantener/recuperar proyecto heredado de alto volumen (Requiere validación).' },
                { cod: 'CC2', pct: '2%', desc: 'Cuida y Crece AVANZADO. Requiere min. 12 intervenciones/año, 4 sesiones presenciales, catálogo semestral, capacitación técnica y mediciones.' },
                { cod: 'CVS1', pct: '1%', desc: 'Cierre de Ventas SUPERVISOR. Asignación directa por rol de supervisión.' },
                { cod: 'CVS2', pct: '2%', desc: 'Cierre Supervisor APOYO. Comisión compartida por coordinación en proyectos de mediana complejidad (CV4).' },
                { cod: 'CVS3', pct: '3%', desc: 'Cierre COMPARTIDO KAM. Para KAM de su cuenta InHouse.' },
                { cod: 'CVS4', pct: '4%', desc: 'Cierre Supervisor INTEGRAL. Comisión compartida por apoyo en coordinación y entrega de proyectos integrales (CV8).' },
              ]
            }
          },
          { type: BlockType.HIGHLIGHT, title: "CANDADO DE EVIDENCIA (CC2 y CC4)", options: { highlightColor: 'red' }, content: "Para aplicar los códigos CC2 o CC4 es OBLIGATORIO contar con evidencia documentada de todas las actividades e intervenciones realizadas. Sin evidencia, no se autoriza el pago del porcentaje superior." },
          { type: BlockType.HEADER, content: "13.4 LINEAMIENTOS DE PROYECTOS COMPARTIDOS Y HEREDADOS" },
          {
            type: BlockType.LIST,
            content: [
              "Comunicación: Toda participación compartida debe ser comunicada, justificada y documentada oportunamente.",
              "Proporcionalidad: Se evaluará la intervención efectiva de cada colaborador para determinar la asignación.",
              "Herencia: En caso de salida o rotación, se evalúa el avance para reasignar. Si otro agente asume la atención, el original recibe asignación de 'Supervisor' por 3 meses (transición).",
              "Conflictos: En caso de duda, la Dirección Comercial resolverá mediante revisión de evidencia operativa."
            ]
          },
          { type: BlockType.HEADER, content: "13.5 BASE DE CÁLCULO Y RETENCIÓN DE COMISIONES" },
          { type: BlockType.PARAGRAPH, content: "Los porcentajes se calculan sobre el MARGEN OPERATIVO, antes de deducir gastos administrativos y costos de venta." },
          { type: BlockType.HIGHLIGHT, title: "POLÍTICA DE RETENCIÓN POR STOCK", options: { highlightColor: 'red' }, content: "Si la venta implica la compra de stock adicional por política del proveedor, la comisión se RETENDRÁ hasta que el 100% del stock sea facturado y cobrado. Esta medida protege la rentabilidad y asegura la venta efectiva." },
          { type: BlockType.HEADER, content: "13.6 INCENTIVOS ABIERTOS" },
          { type: BlockType.HIGHLIGHT, title: "VENTAS POR CUALQUIER COLABORADOR", options: { highlightColor: 'blue' }, content: "Cualquier colaborador de la empresa podrá gestionar y cerrar ventas (directa o indirectamente). Según el nivel de participación, se asignará el cierre correspondiente. Si la venta se vuelve recurrente, se pagarán comisiones al colaborador involucrado siempre que siga atendiéndola." },
          { type: BlockType.HEADER, content: "13.7 DISPUTAS Y REVISIÓN" },
          { type: BlockType.PARAGRAPH, content: "Si un colaborador no está conforme con la asignación, podrá solicitar revisión formal con evidencia (correos, cotizaciones). La comisión se paga íntegra (sin retención salvo deuda) una vez confirmada la liquidación de la factura por el cliente." },
          { type: BlockType.HEADER, content: "13.8 FECHA DE PAGO (DÍA 15)" },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "CALENDARIO DE DISPERSIÓN COMERCIAL", 
            options: { highlightColor: 'blue' },
            content: "El pago de comisiones se realizará invariablemente el DÍA 15 DEL MES INMEDIATO SIGUIENTE al cobro efectivo de la factura. No se realizan anticipos ni pagos fuera de corte." 
          }
        ]
      },
      {
        id: 'sec-14',
        title: 'CATÁLOGO DE BENEFICIOS PROVEIN',
        number: 'XIV',
        blocks: [
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'ID', accessor: 'id', width: '10%' },
                { header: 'PRESTACIÓN INSTITUCIONAL', accessor: 'prest', width: '25%' },
                { header: 'DESCRIPCIÓN DEL APOYO', accessor: 'desc', width: '50%' },
                { header: 'ESTATUS', accessor: 'stat', width: '15%' },
              ],
              rows: [
                { id: '01', prest: 'IMSS / INFONAVIT', desc: 'Alta oficial al 100% sobre Sueldo Nominal desde tu primer día de ingreso técnico oficial a la empresa.', stat: 'Ley' },
                { id: '01-B', prest: 'AFORE (Sistema de Ahorro)', desc: 'Aportaciones patronales bimestrales a tu cuenta individual para el retiro, cesantía y vejez.', stat: 'Ley' },
                { id: '01-C', prest: 'FONACOT', desc: 'Afiliación activa del centro de trabajo para garantizar tu acceso a créditos gubernamentales preferenciales.', stat: 'Ley' },
                { id: '02', prest: 'Vales de Despensa', desc: 'Apoyo quincenal en monedero para bienestar familiar bajo reglas de previsión social vigentes oficiales.', stat: 'Superior' },
                { id: '06', prest: 'Gastos Médicos Mayores', desc: 'Atención hospitalaria y consultas privadas bajo pólizas institucionales vigentes de prestigio corporativo. (Ver POL-003)', stat: 'Seguro' },
                { id: '06-B', prest: 'Gastos Médicos Menores', desc: 'Consultas de primer contacto y medicina preventiva. (Ver POL-003)', stat: 'Seguro' },
                { id: '07', prest: 'Seguro de Vida', desc: 'Protección financiera para tus beneficiarios legales registrados oficialmente ante TH y la aseguradora. (Ver POL-003)', stat: 'Seguro' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-15',
        title: 'NATURALEZA DE LOS BENEFICIOS ADICIONALES',
        number: 'XV',
        blocks: [
          { type: BlockType.HEADER, content: "15.1 FACULTAD DE MODIFICACIÓN Y SALVAGUARDA" },
          { type: BlockType.PARAGRAPH, content: 'Las prestaciones categorizadas como "Superiores" en el catálogo institucional son beneficios otorgados por CONSUMIBLES PROVEIN por encima de los mínimos obligatorios marcados por la LFT.' },
          { 
            type: BlockType.HIGHLIGHT, 
            options: { highlightColor: 'red' },
            title: "Cláusula de Salvaguarda", 
            content: "La empresa se reserva el derecho de modificar, ajustar o suprimir dichos beneficios adicionales según viabilidad financiera o cambios estratégicos, siempre respetando los derechos ya devengados quincenalmente y los mínimos legales irrenunciables."
          },
          { type: BlockType.PARAGRAPH, content: "Dicha facultad de cambio se aplicará respetando los mínimos de ley irrenunciables (Aguinaldo, Prima Vacacional, Vacaciones, IMSS). Cualquier ajuste sustancial será notificado con 30 días de anticipación por Talento Humano." }
        ]
      },
      {
        id: 'sec-16',
        title: 'GESTIÓN DE MOVILIDAD Y TRASLADOS',
        number: 'XVI',
        blocks: [
          { type: BlockType.HEADER, content: "16.1 ESQUEMAS DE VEHÍCULOS" },
          { type: BlockType.PARAGRAPH, content: "PROVEIN asigna herramientas de movilidad según el perfil del puesto, clasificándose en 3 categorías estrictas:" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 1 },
            content: [
              { title: "A. VEHÍCULO UTILITARIO (RESTRINGIDO)", text: "Unidad de trabajo pura. Debe pernoctar obligatoriamente en las instalaciones de la empresa (encierro). Uso personal prohibido." },
              { title: "B. VEHÍCULO ASIGNADO (PRESTACIÓN)", text: "Unidad de la empresa asignada a directivos/gerentes. Se permite su resguardo en domicilio y uso personal razonable, siguiendo las políticas de cuidado." },
              { title: "C. VEHÍCULO PROPIO (APOYO)", text: "El colaborador usa su auto. Recibe apoyo para mantenimiento preventivo semestral sujeto a bitácora de kilometraje validada por Operaciones." },
            ]
          },
          { type: BlockType.HEADER, content: "16.2 ESQUEMAS DE COMBUSTIBLE" },
          {
            type: BlockType.LIST,
            content: [
              "Carga Utilitaria: Para unidades Tipo A. 100% deducible y controlada por kilometraje de ruta.",
              "Carga Ejecutiva/Uso Personal: Para unidades Tipo B. Incluye un tope mensual autorizado para cobertura mixta.",
              "Vales de Gasolina (Tope Fijo): Monto fijo mensual para colaboradores con Auto Propio (Tipo C) o esquemas comerciales específicos."
            ]
          }
        ]
      },
      {
        id: 'sec-17',
        title: 'LÍMITES DE SEGURIDAD DE MOVILIDAD',
        number: 'XVII',
        blocks: [
          { type: BlockType.HEADER, content: "17.1 CÓDIGO DE CONDUCTA DE ACTIVOS Y SEGURIDAD" },
          { type: BlockType.PARAGRAPH, content: "Para asegurar el uso productivo de estos recursos de traslados, se establecen los siguientes lineamientos técnicos obligatorios de control preventivo:" },
          {
            type: BlockType.LIST,
            content: [
              "Uso Exclusivo: La tarjeta de gasolina y el mantenimiento son intransferibles y exclusivos para fines productivos comerciales quincenales oficiales. No se permite el canje por efectivo bajo ningún motivo.",
              "Imagen Corporativa: El vehículo representa a PROVEIN ante el cliente. Debe mantenerse en condiciones óptimas de limpieza mecánica y estética aceptable para visitas diarias registradas quincenalmente.",
              "Suspensión Técnica: El apoyo se detiene automáticamente si se pierde la vigencia de la licencia de conducir o si el puesto deja de requerir movilidad operativa por cambio de funciones técnicas internas.",
              "Mantenimiento: La empresa no cubrirá daños derivados de ignorar alertas mecánicas o ruidos mayores por descuido evidente del usuario (cambio de aceite, frenos, luces quincenales de seguridad)."
            ]
          }
        ]
      },
      {
        id: 'sec-18',
        title: 'PROGRAMA DE APOYO ACADÉMICO UNIFICADO',
        number: 'XVIII',
        blocks: [
          { type: BlockType.HEADER, content: "18.1 ESQUEMA 80/20 Y CANDADOS DE CONTINUIDAD LABORAL" },
          { type: BlockType.PARAGRAPH, content: "Fomentamos tu formación académica técnico basado en el Art. 153-A LFT en programas autorizados por TH. El beneficio se rige por el compromiso laboral total mensual:" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'Asistencia Laboral', accessor: 'asist', width: '25%' },
                { header: 'Promedio Académico', accessor: 'prom', width: '25%' },
                { header: 'Empresa Cubre', accessor: 'emp', width: '25%' },
                { header: 'Tú Pagas', accessor: 'tu', width: '25%' },
              ],
              rows: [
                { asist: '95% a 100%', prom: '9.0 a 10.0', emp: '80%', tu: '20%' },
                { asist: '90% a 94%', prom: '8.0 a 8.9', emp: '50%', tu: '50%' },
                { asist: '80% a 89%', prom: '7.0 a 7.9', emp: '20%', tu: '80%' },
              ]
            }
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "Cláusula de Reembolso por Deserción", 
            options: { highlightColor: 'red' },
            content: "Si el colaborador decide abandonar sus estudios antes de concluirlos, o es dado de baja de la institución académica, estará obligado a liquidar/reembolsar el 100% del apoyo económico que la empresa haya erogado hasta ese momento."
          },
          {
            type: BlockType.PARAGRAPH,
            content: "El beneficio también se cancela automáticamente (**Pago $0.00**) si la asistencia laboral mensual es inferior al 80%."
          }
        ]
      },
      {
        id: 'sec-19',
        title: 'PROCEDIMIENTOS DE EGRESO Y ENTREGA DE ACTIVOS',
        number: 'XIX',
        blocks: [
          { type: BlockType.HEADER, content: "19.1 LIQUIDACIÓN Y HOJA DE NO ADEUDO" },
          { type: BlockType.PARAGRAPH, content: "Al concluir la relación laboral, es obligatorio recabar las firmas de no adeudo de las siguientes áreas para liberar el finiquito:" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { title: "TALENTO HUMANO", text: "Entrega de credenciales, uniformes y cierre de expediente." },
              { title: "SISTEMAS (IT)", text: "Devolución de laptop, celular, periféricos y accesos digitales." },
              { title: "TESORERÍA", text: "Entrega de Vehículo Utilitario, Tarjeta de Gasolina, caja chica y viáticos pendientes." },
              { title: "CUENTAS POR PAGAR", text: "Validación de facturas o comprobaciones de gastos pendientes." },
            ]
          }
        ]
      },
      {
        id: 'sec-20',
        title: 'GLOSARIO TÉCNICO Y VALIDACIÓN FINAL',
        number: 'XX',
        blocks: [
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { title: "Sueldo Nominal", text: "Monto bruto registrado ante el IMSS." },
              { title: "IMSS", text: "Instituto Mexicano del Seguro Social (Seguridad Social)." },
              { title: "AFORE", text: "Administradora de Fondos para el Retiro." },
              { title: "FONACOT", text: "Fondo Nacional para el Consumo de los Trabajadores." },
              { title: "Margen Comercial", text: "Diferencia entre precio de venta y costo directo, base para comisiones." },
              { title: "Utilidad", text: "Ganancia final de la empresa tras gastos operativos." },
              { title: "Vehículo Utilitario", text: "Unidad de trabajo restringida a resguardo en planta." },
              { title: "Vehículo Asignado", text: "Unidad con beneficio de uso personal permitido." },
            ]
          },
          { 
            type: BlockType.HIGHLIGHT, 
            options: { highlightColor: 'blue' },
            title: "VIGENCIA Y CONTROL DE VERSIONES", 
            content: "El presente Manual de Remuneración V107.0 entra en vigor a partir de su fecha de actualización. Esta versión anula y sustituye automáticamente a cualquier versión, política o acuerdo anterior, dejando sin efecto las disposiciones previas que se le opongan." 
          },
          {
            type: BlockType.SIGNATURE,
            content: STANDARD_SIGNATURES
          },
          {
            type: BlockType.PARAGRAPH,
            content: "C O N S U M I B L E S   P R O V E I N   S . A . P . I .   D E   C . V .   |   M É X I C O   2 0 2 5"
          }
        ]
      }
    ]
  },
  {
    id: 'doc-005',
    title: 'MANUAL DE TALENTO HUMANO',
    subtitle: 'Compendio de Procedimientos Internos para la Gestión Estratégica del Capital Humano.',
    code: 'PRO-TH-MAN-005-V3.0',
    version: 'V3.0',
    pageCount: 24,
    updatedAt: '2025-06-15',
    companyName: 'CONSUMIBLES PROVEIN S.A.P.I. DE C.V.',
    sections: [
      {
        id: 'sec-th-1',
        title: 'DISPOSICIONES GENERALES',
        number: 'I',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "El presente manual tiene por objeto establecer los lineamientos obligatorios para la administración del personal en CONSUMIBLES PROVEIN S.A.P.I. DE C.V. Su aplicación es responsabilidad exclusiva del Departamento de Talento Humano, quien deberá vigilar su cumplimiento en todas las sedes operativas." },
          { type: BlockType.HEADER, content: "1.1 ALCANCE" },
          { type: BlockType.PARAGRAPH, content: "Este documento abarca desde la planificación de la plantilla hasta la desvinculación laboral, sirviendo como guía maestra para auditores internos y externos en materia laboral y de seguridad social." }
        ]
      },
      {
        id: 'sec-th-2',
        title: 'POLÍTICA DE ÉTICA Y RESTRICCIONES LEGALES',
        number: 'II',
        blocks: [
          { 
            type: BlockType.HIGHLIGHT, 
            title: "CERO TOLERANCIA AL TRABAJO INFANTIL", 
            options: { highlightColor: 'red' },
            content: "En estricto apego al Artículo 22 de la LFT, queda prohibida la contratación de menores de 18 años. El analista de Talento Humano debe validar la mayoría de edad mediante INE/Pasaporte y CURP antes de iniciar cualquier entrevista." 
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "NO DISCRIMINACIÓN (ART. 2 LFT)", 
            content: "Nuestros procesos de selección se basan en competencias. Está prohibido solicitar pruebas de embarazo (Art. 133 LFT), carta de antecedentes no penales (salvo por seguridad) o discriminar por género, religión o condición social." 
          }
        ]
      },
      {
        id: 'sec-th-3',
        title: 'PLANEACIÓN DE PLANTILLA Y REQUISICIONES',
        number: 'III',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Ningún proceso de reclutamiento puede iniciar sin una validación presupuestal previa." },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'TIPO DE VACANTE', accessor: 'tipo', width: '30%' },
                { header: 'REQUISITOS DE APROBACIÓN', accessor: 'req', width: '70%' },
              ],
              rows: [
                { tipo: 'REPOSICIÓN (Baja)', req: 'Requiere firma de Gerencia de Área y Carta de Renuncia/Baja del antecesor.' },
                { tipo: 'NUEVA CREACIÓN', req: 'Obligatorio: VoBo de Dirección Administrativa (Impacto presupuestal anual).' },
                { tipo: 'TEMPORAL', req: 'Contrato por Tiempo Determinado justificado (Incapacidad, Proyecto especial).' },
              ]
            }
          },
          { type: BlockType.PARAGRAPH, content: "El Perfil de Puesto debe estar actualizado en el sistema antes de publicar la vacante." }
        ]
      },
      {
        id: 'sec-th-4',
        title: 'PROCEDIMIENTO DE RECLUTAMIENTO Y ATRACCIÓN',
        number: 'IV',
        blocks: [
          { type: BlockType.HEADER, content: "4.1 FUENTES DE RECLUTAMIENTO" },
          { type: BlockType.PARAGRAPH, content: "Se dará prioridad al reclutamiento interno para fomentar el crecimiento (Plan de Carrera). Si no hay candidatos internos viables en 5 días hábiles, se procederá a fuentes externas:" },
          {
             type: BlockType.LIST,
             content: [
               "Portales Digitales: LinkedIn (Mandos medios/altos), Indeed, OCC Mundial.",
               "Bolsas Universitarias: Para programas de Trainees y Becarios.",
               "Ferias de Empleo: Para puestos operativos masivos."
             ]
          }
        ]
      },
      {
        id: 'sec-th-5',
        title: 'SELECCIÓN Y EVALUACIÓN INTEGRAL',
        number: 'V',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "El proceso de filtrado debe asegurar la idoneidad técnica y cultural del candidato mediante 4 filtros obligatorios:" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { number: "1", title: "ENTREVISTA PROFUNDA", text: "Modelo STAR (Situación, Tarea, Acción, Resultado) para medir competencias reales." },
              { number: "2", title: "BATERÍA PSICOMÉTRICA (PLATAFORMA PSICOTEST)", text: "Aplicación digital obligatoria mediante el proveedor oficial 'Psicotest' para evaluar inteligencia, personalidad y valores." },
              { number: "3", title: "VALIDACIÓN REFERENCIAS", text: "Verificación telefónica con últimos 2 empleadores (Desempeño y Motivo de Salida)." },
              { number: "4", title: "EXAMEN TÉCNICO", text: "Prueba de conocimientos aplicada por el Jefe Inmediato del área solicitante." },
            ]
          },
          { 
             type: BlockType.HIGHLIGHT, 
             title: "EXPEDIENTE CULTURAL", 
             content: "Aplicar formulario de Gustos e Intereses para la base de datos de cultura: https://forms.gle/1t3y2r2oeziRSxd66" 
          }
        ]
      },
      {
        id: 'sec-th-6',
        title: 'CONTRATACIÓN Y GESTIÓN DE EXPEDIENTES',
        number: 'VI',
        blocks: [
          { type: BlockType.HEADER, content: "6.1 ARMADO DEL EXPEDIENTE LEGAL (CHECKLIST)" },
          { type: BlockType.PARAGRAPH, content: "El expediente del colaborador se integra en dos formatos: Físico (resguardo bajo llave) y Digital (Nube corporativa). Debe contener estrictamente en este orden:" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'SECCIÓN', accessor: 'sec', width: '20%' },
                { header: 'DOCUMENTOS OBLIGATORIOS', accessor: 'docs', width: '80%' },
              ],
              rows: [
                { sec: 'A. LEGAL', docs: 'Contrato firmado, Carta Oferta, Código de Ética, Aviso de Privacidad, Reglamento Interior de Trabajo (Acuse), Acuerdo de Confidencialidad.' },
                { sec: 'B. IDENTIDAD', docs: 'INE, CURP, Acta de Nacimiento, Comprobante de Domicilio (<3 meses).' },
                { sec: 'C. FISCAL/IMSS', docs: 'Constancia Situación Fiscal (CSF), Número de Seguridad Social (NSS), Alta IDSE.' },
                { sec: 'D. ACADÉMICO', docs: 'Título, Cédula Profesional, Certificados de cursos relevantes.' },
                { sec: 'E. BANCARIO', docs: 'Carátula de cuenta Santander o Carta de Apertura firmada.' },
              ]
            }
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "PROTOCOLOS DE LECTURA Y FIRMA", 
            content: "Es requisito indispensable e innegociable que el colaborador lea en su totalidad el Reglamento Interior de Trabajo y el Acuerdo de Confidencialidad. Debe firmar el acuse de recibido/leído y el acuerdo respectivo antes de iniciar labores." 
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "LINK DE CARGA DIGITAL", 
            content: "Instruir al candidato para cargar sus datos aquí: https://forms.gle/dUNXMrjavwfRHqki6" 
          },
          { type: BlockType.HEADER, content: "6.2 ALTA PATRONAL (REGLA DE ORO)" },
          { type: BlockType.PARAGRAPH, content: "El movimiento afiliatorio en el IDSE debe realizarse al menos 24 horas antes del ingreso físico a las instalaciones para cubrir cualquier riesgo de trayecto." }
        ]
      },
      {
        id: 'sec-th-7',
        title: 'PROTOCOLO DE ONBOARDING (DÍA 1)',
        number: 'VII',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "La primera impresión define la retención. Talento Humano debe coordinar:" },
          {
             type: BlockType.LIST,
             content: [
               "Bienvenida: Recibimiento en recepción y recorrido por las instalaciones (Cafetería, Baños, Salidas de Emergencia).",
               "Entrega de Herramientas: Laptop, Celular y Vehículo (según puesto) mediante carta responsiva.",
               "Accesos Digitales: Configuración de correo, ERP y registro en AppSheet (Checador): https://www.appsheet.com/start/2c62b481-c2d4-4bfa-8423-5a85fc828d16?platform=desktop",
               "Inducción: Presentación de la Historia, Misión, Visión y Valores de PROVEIN."
             ]
          }
        ]
      },
      {
        id: 'sec-th-8',
        title: 'SEGUIMIENTO A LA ADAPTACIÓN (ENCUESTAS)',
        number: 'VIII',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Para mitigar la rotación temprana, es responsabilidad obligatoria del área de Talento Humano aplicar el siguiente esquema de seguimiento:" },
          {
             type: BlockType.TABLE,
             content: {
               columns: [
                 { header: 'PERIODO', accessor: 'period', width: '25%' },
                 { header: 'TIPO DE EVALUACIÓN', accessor: 'type', width: '35%' },
                 { header: 'OBJETIVO ESTRATÉGICO', accessor: 'obj', width: '40%' },
               ],
               rows: [
                 { period: 'DÍA 7', type: 'Encuesta Inicial (Welcome)', obj: 'Verificar entrega de herramientas, accesos y trato del equipo.' },
                 { period: 'DÍA 30', type: 'Adaptación al Puesto', obj: 'Evaluar claridad de funciones y relación con el Jefe Inmediato.' },
                 { period: 'DÍA 45', type: 'Ajuste Cultural', obj: 'Confirmar alineación con valores antes del fin del periodo de prueba.' },
               ]
             }
          }
        ]
      },
      {
        id: 'sec-th-9',
        title: 'ADMINISTRACIÓN DE PERSONAL Y NÓMINA',
        number: 'IX',
        blocks: [
          { type: BlockType.HEADER, content: "9.1 CALENDARIO DE PAGOS Y CORTES" },
          { type: BlockType.PARAGRAPH, content: "La nómina se dispersa los días 10 y 25 de cada mes. En caso de que la fecha de pago coincida con fin de semana o día festivo, el depósito se realizará el día hábil anterior inmediato." },
          { 
             type: BlockType.HIGHLIGHT, 
             title: "FECHAS DE CORTE (PRENÓMINA)", 
             content: "Para el cálculo de incidencias, los cortes se realizan los días 8 (para la quincena del 10) y 23 (para la quincena del 25)." 
          },
          { type: BlockType.HEADER, content: "9.2 APP 'VACACIONES Y ASISTENCIA'" },
          { type: BlockType.PARAGRAPH, content: "Toda la gestión de asistencia (check-in/check-out), solicitud de vacaciones y permisos especiales se realiza exclusivamente a través de la aplicación oficial 'Vacaciones y Asistencia' en AppSheet. No se aceptan solicitudes por WhatsApp o correo." },
          { type: BlockType.HEADER, content: "9.3 GESTIÓN DE SEGUROS CORPORATIVOS" },
          { type: BlockType.PARAGRAPH, content: "La administración de las pólizas de Gastos Médicos y Vida debe alinearse estrictamente a la Política de Elegibilidad de Planes de Seguro (PRO-TH-POL-003). Es responsabilidad de Talento Humano gestionar las altas, bajas y renovaciones en las fechas estipuladas (Junio, Noviembre y Diciembre) respetando los subgrupos autorizados." }
        ]
      },
      {
        id: 'sec-th-10',
        title: 'ESTRUCTURA SALARIAL Y ALINEACIÓN',
        number: 'X',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "La gestión de pagos, bonos trimestrales y comisiones se rige estrictamente por el MANUAL DE REMUNERACIÓN (PRO-TH-POL-001). Talento Humano debe asegurar que toda oferta y pago respete la estructura de Suma Mensual Fija (SMF), el Pago por Productividad y las 10 Reglas de Oro para el pago de bonos variables." },
          { type: BlockType.HIGHLIGHT, title: "REFERENCIA CRUZADA", content: "Ver DOCUMENTO 001: MANUAL DE REMUNERACIÓN para detalles técnicos de cálculo de nómina y prestaciones." }
        ]
      },
      {
        id: 'sec-th-11',
        title: 'CAPACITACIÓN Y ADIESTRAMIENTO (DC-3)',
        number: 'XI',
        blocks: [
          { type: BlockType.HEADER, content: "11.1 CUMPLIMIENTO LEGAL STPS" },
          { type: BlockType.PARAGRAPH, content: "Conforme al Art. 153 de la LFT, PROVEIN está obligado a capacitar a su personal. Talento Humano debe:" },
          {
            type: BlockType.LIST,
            content: [
              "Elaborar la DNC (Detección de Necesidades de Capacitación) anualmente en Noviembre.",
              "Registrar los planes y programas ante la STPS (Formato DC-2).",
              "Emitir las constancias de habilidades laborales (Formato DC-3) a los participantes que aprueben los cursos internos o externos."
            ]
          }
        ]
      },
      {
        id: 'sec-th-12',
        title: 'PAGO DE BONOS POR OBJETIVOS CUMPLIDOS',
        number: 'XII',
        blocks: [
          { type: BlockType.HEADER, content: "12.1 CICLO DE PAGO DE BONOS POR OBJETIVOS CUMPLIDOS (ALINEACIÓN NORMATIVA)" },
          { type: BlockType.PARAGRAPH, content: "Conforme al Capítulo XI del MANUAL DE REMUNERACIÓN (PRO-TH-POL-001), este proceso no se trata de una evaluación subjetiva del desempeño, sino de una validación técnica del cumplimiento de objetivos que detona el pago de bonos variables. Se establecen metas claras y se revisan en las siguientes fechas fijas para liberar los pagos:" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'TRIMESTRE', accessor: 'c1', width: '25%' },
                { header: 'ESTABLECIMIENTO META', accessor: 'c2', width: '25%' },
                { header: 'VALIDACIÓN DE OBJETIVOS', accessor: 'c3', width: '25%' },
                { header: 'PAGO DE BONO (DÍA 25)', accessor: 'c4', width: '25%' },
              ],
              rows: [
                { c1: 'ENE - MAR', c2: '23 de Diciembre', c3: '1 al 15 de Abril', c4: '25 de Abril' },
                { c1: 'ABR - JUN', c2: '25 de Marzo', c3: '1 al 15 de Julio', c4: '25 de Julio' },
                { c1: 'JUL - SEP', c2: '25 de Junio', c3: '1 al 15 de Octubre', c4: '25 de Octubre' },
                { c1: 'OCT - DIC', c2: '25 de Septiembre', c3: '10 al 15 de Enero', c4: '25 de Enero' },
              ]
            }
          },
          { 
             type: BlockType.HIGHLIGHT, 
             title: "REGLAS DE ORO Y RANGO DE PAGO", 
             content: "Talento Humano vigilará que se cumplan las 10 Reglas de Oro del Pago Trimestral. La calificación mínima para liberar pago es del 80% y el tope máximo de sobrecumplimiento es del 120%. Si no se llega al 80%, el pago es $0.00." 
          },
          { type: BlockType.HEADER, content: "12.2 FEEDBACK CONTINUO" },
          { type: BlockType.PARAGRAPH, content: "Es obligación de los líderes realizar sesiones 1 a 1 al menos una vez al mes para revisar avances de los objetivos trimestrales vigentes, asegurando que el colaborador no llegue 'a ciegas' a la fecha de corte y maximice su oportunidad de cobro." }
        ]
      },
      {
        id: 'sec-th-13',
        title: 'RELACIONES LABORALES Y DISCIPLINA',
        number: 'XIII',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Para mantener el orden y la disciplina, se aplicará el Reglamento Interior de Trabajo mediante el siguiente protocolo progresivo de sanciones:" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'NIVEL', accessor: 'lvl', width: '15%' },
                { header: 'SANCIÓN', accessor: 'sanc', width: '25%' },
                { header: 'CAUSALES (EJEMPLOS)', accessor: 'cause', width: '60%' },
              ],
              rows: [
                { lvl: '1', sanc: 'Amonestación Verbal', cause: 'Retardos menores, descuido leve de equipo, vestimenta inapropiada.' },
                { lvl: '2', sanc: 'Acta Administrativa', cause: 'Faltas injustificadas, incumplimiento de procesos, reincidencia de nivel 1.' },
                { lvl: '3', sanc: 'Suspensión (1-8 días)', cause: 'Faltas de respeto, negligencia operativa, acumulación de 3 actas.' },
                { lvl: '4', sanc: 'Rescisión (Baja)', cause: 'Robo, acoso, violencia, alcoholismo, revelar secretos industriales (Art. 47 LFT).' },
              ]
            }
          },
          { 
             type: BlockType.HIGHLIGHT, 
             title: "IMPORTANTE", 
             options: { highlightColor: 'red' },
             content: "Toda sanción debe documentarse con firma del colaborador y dos testigos. La negativa a firmar no invalida el acta si los testigos firman." 
          }
        ]
      },
      {
        id: 'sec-th-14',
        title: 'SEGURIDAD E HIGIENE',
        number: 'XIV',
        blocks: [
          { type: BlockType.HEADER, content: "14.1 COMISIÓN MIXTA (CMSH)" },
          { type: BlockType.PARAGRAPH, content: "Talento Humano debe coordinar los recorridos trimestrales de la Comisión Mixta para detectar actos y condiciones inseguras en las instalaciones." },
          { type: BlockType.HEADER, content: "14.2 PROTOCOLO DE ACCIDENTES" },
          { type: BlockType.PARAGRAPH, content: "En caso de accidente laboral:" },
          {
            type: BlockType.LIST,
            options: { isOrdered: true },
            content: [
              "Brindar primeros auxilios y trasladar al IMSS.",
              "Llenar formato ST-7 (Aviso de accidente).",
              "Realizar investigación del accidente en las siguientes 24 horas."
            ]
          }
        ]
      },
      {
        id: 'sec-th-nom035',
        title: 'PREVENCIÓN DE RIESGOS PSICOSOCIALES Y NORMATIVIDAD',
        number: 'XV',
        blocks: [
          { type: BlockType.HEADER, content: "15.1 POLÍTICA DE PREVENCIÓN DE RIESGOS (NOM-035)" },
          { type: BlockType.PARAGRAPH, content: "En cumplimiento con la NOM-035-STPS-2018, PROVEIN implementa, mantiene y difunde una política de prevención de riesgos psicosociales que contempla: la prevención de la violencia laboral, la promoción de un entorno organizacional favorable y los mecanismos de denuncia." },
          {
             type: BlockType.HIGHLIGHT,
             title: "COMITÉS ACTIVOS",
             content: "Para el seguimiento de estos temas, operan activamente el Comité de Ética y el Comité de Atención a los Riesgos Psicosociales, encargados de vigilar el cumplimiento normativo."
          },
          {
             type: BlockType.HIGHLIGHT,
             title: "OBLIGACIONES DEL PATRÓN Y TRABAJADORES",
             content: "Es obligación de la empresa identificar a los trabajadores que fueron sujetos a acontecimientos traumáticos severos (ATS). Es obligación de los colaboradores participar en los cuestionarios de identificación y reportar prácticas opuestas al entorno favorable."
          },
          { type: BlockType.HEADER, content: "15.2 CALENDARIO DE CUMPLIMIENTO NORMATIVO STPS" },
          { type: BlockType.PARAGRAPH, content: "El departamento de Talento Humano está obligado a ejecutar los siguientes diagnósticos normativos en las fechas establecidas:" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'NORMA', accessor: 'nom', width: '20%' },
                { header: 'DESCRIPCIÓN', accessor: 'desc', width: '50%' },
                { header: 'FRECUENCIA', accessor: 'freq', width: '30%' },
              ],
              rows: [
                { nom: 'NOM-035', desc: 'Factores de Riesgo Psicosocial y Entorno Organizacional (Guías II y III)', freq: 'Cada 2 Años (Octubre)' },
                { nom: 'NOM-019', desc: 'Comisión de Seguridad e Higiene (Recorridos de Verificación)', freq: 'Trimestral (Mar, Jun, Sep, Dic)' },
                { nom: 'NOM-030', desc: 'Servicios Preventivos de Seguridad y Salud (Diagnóstico)', freq: 'Anual (Enero)' },
                { nom: 'NOM-025', desc: 'Igualdad Laboral y No Discriminación (Auditoría Interna)', freq: 'Anual (Noviembre)' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-th-15',
        title: 'COMUNICACIÓN Y CULTURA DIGITAL',
        number: 'XVI',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Talento Humano es el guardián de la cultura. Debe gestionar el siguiente calendario operativo anual y asegurar la fluidez de la información institucional:" },
          { type: BlockType.HEADER, content: "16.1 CANALES DE COMUNICACIÓN OFICIALES" },
          { type: BlockType.PARAGRAPH, content: "PROVEIN ha digitalizado sus comunicaciones para garantizar el acceso inmediato a la información. Se suprimen los tableros físicos en favor de las siguientes plataformas:" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 3 },
            content: [
              { title: "SITIO INTERNO (GOOGLE)", text: "El HUB central de información. Contiene manuales, directorio, noticias y formatos descargables." },
              { title: "CORREO ELECTRÓNICO", text: "Canal formal para comunicados oficiales, políticas y avisos legales de la Dirección Administrativa." },
              { title: "GRUPO DE WHATSAPP", text: "Canal de difusión inmediata para avisos operativos urgentes y recordatorios breves." },
            ]
          },
          { type: BlockType.HEADER, content: "16.2 CALENDARIO DE EVENTOS Y TRADICIONES" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { title: "CLIMA LABORAL", text: "Aplicación de encuesta de Clima Organizacional y eNPS de forma semestral en FEBRERO y AGOSTO." },
              { title: "CUMPLEAÑOS", text: "Publicación individual y felicitación institucional en el día exacto del aniversario del colaborador." },
              { title: "EVENTOS ANUALES", text: "• Kick-off Anual (Enero)\n• Día de las Madres y Padres\n• Independencia (16 Sep)\n• Día de Muertos\n• Thanksgiving\n• Brindis Fin de Año" },
              { title: "RODI", text: "Reuniones de Integración periódicas para fortalecer la cohesión de los equipos de trabajo." },
            ]
          }
        ]
      },
      {
        id: 'sec-th-16',
        title: 'PROCEDIMIENTO DE DESVINCULACIÓN (OFFBOARDING)',
        number: 'XVII',
        blocks: [
          { type: BlockType.HEADER, content: "17.1 TIPOS DE BAJA" },
          { type: BlockType.LIST, content: ["Voluntaria (Renuncia).", "Involuntaria (Rescisión o Despido).", "Término de Contrato."] },
          { type: BlockType.HEADER, content: "17.2 FLUJO DE SALIDA" },
          { type: BlockType.PARAGRAPH, content: "Para asegurar un cierre ordenado:" },
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 1 },
            content: [
              { number: "PASO 1", title: "ENTREVISTA DE SALIDA", text: "Aplicar encuesta obligatoria para detectar áreas de mejora: https://forms.gle/bR1kiouQ4BQvFvi37" },
              { number: "PASO 2", title: "CARTA NO ADEUDO", text: "Validar entrega de activos con Finanzas, Sistemas, Vehículo Utilitario y Tarjeta de Gasolina." },
              { number: "PASO 3", title: "CÁLCULO FINIQUITO", text: "Elaborar desglose de partes proporcionales (Aguinaldo, Vacaciones, Prima) y Fondo de Ahorro." },
              { number: "PASO 4", title: "FIRMA LEGAL", text: "Recabar firma de renuncia, finiquito y recibo de nómina ante testigos." },
              { number: "PASO 5", title: "BAJAS SISTEMAS", text: "Ejecutar baja en IDSE (IMSS), Portal de Seguros y Accesos Informáticos el mismo día." },
            ]
          }
        ]
      },
      {
        id: 'sec-th-17',
        title: 'AUDITORÍA Y MÉTRICAS (KPIs)',
        number: 'XVIII',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "El departamento de Talento Humano será evaluado mensualmente bajo los siguientes indicadores:" },
          {
             type: BlockType.TABLE,
             content: {
               columns: [
                 { header: 'KPI', accessor: 'kpi', width: '30%' },
                 { header: 'META', accessor: 'goal', width: '20%' },
                 { header: 'FÓRMULA', accessor: 'form', width: '50%' },
               ],
               rows: [
                 { kpi: 'Rotación Mensual', goal: '< 3%', form: '(Bajas / Plantilla Promedio) * 100' },
                 { kpi: 'Tiempo de Cobertura', goal: '< 15 días', form: 'Días desde requisición hasta contratación.' },
                 { kpi: 'Efectividad Capacitación', goal: '> 90%', form: 'Cumplimiento al Plan Anual de Capacitación.' },
               ]
             }
          }
        ]
      },
      {
        id: 'sec-th-20',
        title: 'NORMATIVA DE JORNADA LABORAL Y TIEMPO',
        number: 'XX',
        blocks: [
          { type: BlockType.HEADER, content: "20.1 CONTROL DE ASISTENCIA DIGITAL" },
          { type: BlockType.PARAGRAPH, content: "El registro de asistencia es obligatorio para todo el personal mediante la aplicación oficial AppSheet. Es responsabilidad de Talento Humano auditar diariamente las entradas y salidas para la correcta ejecución de la pre-nómina." },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "TOLERANCIA Y RETARDOS", 
            content: "Se establece una tolerancia máxima de 20 minutos al ingreso. Los retardos acumulados afectarán directamente el Bono de Puntualidad (perdiendo el 10% mensual si se excede la tolerancia permitida)." 
          },
          { type: BlockType.HEADER, content: "20.2 POLÍTICA DE TIEMPO POR TIEMPO" },
          { type: BlockType.PARAGRAPH, content: "Para fomentar la flexibilidad sin afectar la operación, se permite la compensación de tiempo (llegadas tarde o salidas anticipadas) bajo el esquema 'Tiempo por Tiempo', siempre que no exceda los 40 minutos y sea coordinado previamente con el Jefe Inmediato." }
        ]
      },
      {
        id: 'sec-th-21',
        title: 'IMAGEN CORPORATIVA Y ESPACIOS',
        number: 'XXI',
        blocks: [
          { type: BlockType.HEADER, content: "21.1 CÓDIGO DE VESTIMENTA" },
          { type: BlockType.PARAGRAPH, content: "Talento Humano debe velar por la imagen profesional de la organización. El código establecido es 'SMART CASUAL'. Se permite el uso de jeans en buen estado, camisas tipo polo y calzado cómodo pero presentable. Queda estrictamente prohibido el uso de ropa deportiva, gorras en interiores o prendas rotas." },
          { type: BlockType.HEADER, content: "21.2 POLÍTICA DE ÁREAS COMUNES (REFRIGERADOR)" },
          { type: BlockType.PARAGRAPH, content: "Para mantener la higiene y el orden en el comedor, se establece la regla de limpieza general todos los viernes. Talento Humano supervisará que cualquier alimento no etiquetado o perecedero sea desechado al final de la semana para evitar focos de infección." }
        ]
      },
      {
        id: 'sec-th-22',
        title: 'MOVILIDAD Y VIÁTICOS',
        number: 'XXII',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Talento Humano colabora con la Dirección Administrativa en la validación de las políticas de viaje:" },
          {
            type: BlockType.LIST,
            content: [
              "Transporte Terrestre: Uso obligatorio de plataformas digitales (Uber/Didi) por temas de seguridad y facturación fiscal.",
              "Vuelos: Compra anticipada de 15 días en tarifa económica.",
              "Comprobaciones: Deben realizarse en un plazo máximo de 3 días hábiles tras el regreso del viaje."
            ]
          }
        ]
      },
      {
        id: 'sec-th-18',
        title: 'VALIDACIÓN Y VIGENCIA',
        number: 'XXIII',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Este manual entra en vigor a partir de su firma y se revisará anualmente." },
          { 
            type: BlockType.HIGHLIGHT, 
            options: { highlightColor: 'blue' },
            title: "VIGENCIA Y CONTROL DE VERSIONES", 
            content: "El presente Manual de Talento Humano entra en vigor a partir de su fecha de actualización. Esta versión anula y sustituye automáticamente a cualquier manual anterior, dejando sin efecto las disposiciones previas que se le opongan." 
          },
          {
            type: BlockType.SIGNATURE,
            content: STANDARD_SIGNATURES
          },
          {
            type: BlockType.PARAGRAPH,
            content: "C O N S U M I B L E S   P R O V E I N   S . A . P . I .   D E   C . V .   |   M É X I C O   2 0 2 5"
          }
        ]
      }
    ]
  },
  {
    id: 'doc-009',
    title: 'POLÍTICA INTEGRAL DE PERMISOS Y VACACIONES',
    subtitle: 'Propuesta de Política de Permisos y Vacaciones - Recursos Humanos y Desarrollo Organizacional.',
    code: 'PRO-TH-POL-004-V2.2',
    version: 'V2.2 (ACTUALIZADA LFT)',
    pageCount: 18,
    updatedAt: '2025-10-15',
    companyName: 'CONSUMIBLES PROVEIN S.A.P.I. DE C.V.',
    sections: [
      {
        id: 'sec-pol4-obj',
        title: 'OBJETIVO Y BENEFICIOS ORGANIZACIONALES',
        number: 'I',
        blocks: [
          { type: BlockType.HEADER, content: "1.1 OBJETIVO" },
          { type: BlockType.PARAGRAPH, content: "Establecer lineamientos claros, equitativos y comprobables para la solicitud, autorización y control de permisos, alineados con la Ley Federal del Trabajo, fomentando un balance vida-trabajo y asegurando continuidad operativa." },
          { type: BlockType.HEADER, content: "1.2 BENEFICIOS ORGANIZACIONALES" },
          { 
            type: BlockType.LIST, 
            content: [
              "✅ Elimina la discrecionalidad y favoritismo.",
              "✅ Brinda certeza y claridad a Jefes Inmediatos y colaboradores.",
              "✅ Cumple con la LFT y la NOM-035.",
              "✅ Mejora el clima laboral y reduce conflictos.",
              "✅ Profesionaliza el proceso de permisos.",
              "✅ Facilita auditorías y control documental.",
              "✅ Reduce ausencias imprevistas."
            ] 
          }
        ]
      },
      {
        id: 'sec-pol4-types',
        title: 'CATÁLOGO MAESTRO DE PERMISOS (TIPOS Y EVIDENCIA)',
        number: 'II',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Tabla detallada de permisos autorizados, su duración, pago y la evidencia obligatoria requerida para su goce." },
          { type: BlockType.HIGHLIGHT, title: "CANDADO DE EVIDENCIA", options: { highlightColor: 'red' }, content: "Cualquier permiso con goce de sueldo está condicionado estrictamente a la presentación de la evidencia documental. En caso de no presentarla en las 24 horas siguientes al regreso, el permiso se reclasificará automáticamente como 'SIN GOCE DE SUELDO' y aplicará descuento." },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "FLEXIBILIDAD POR FUERZA MAYOR", 
            options: { highlightColor: 'blue' },
            content: "En casos extraordinarios (como obtención de actas de defunción o documentos legales complejos), Talento Humano podrá autorizar una prórroga para la entrega de evidencia, siempre que el colaborador notifique la demora."
          },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'TIPO DE PERMISO', accessor: 'tipo', width: '25%' },
                { header: 'DURACIÓN / DÍAS', accessor: 'dias', width: '25%' },
                { header: '¿CON GOCE?', accessor: 'pago', width: '10%' },
                { header: 'EVIDENCIA OBLIGATORIA', accessor: 'evi', width: '40%' },
              ],
              rows: [
                { tipo: 'Vacaciones (LFT)', dias: 'Según antigüedad', pago: '✅ SÍ', evi: 'Solicitud en sistema + validación de Talento Humano.' },
                { tipo: 'Paternidad (Art. 132 LFT)', dias: '5 Días Laborables', pago: '✅ SÍ', evi: 'Certificado de nacimiento.' },
                { tipo: 'Lactancia (Art. 170 LFT)', dias: '1 hr reducción (hasta 6m)', pago: '✅ SÍ', evi: 'Certificado médico / Acuerdo horario.' },
                { tipo: 'Cuidados Familiares Graves', dias: 'A evaluar por caso', pago: '❌ NO', evi: 'Dictamen médico de hospitalización (Padres/Hijos).' },
                { tipo: 'Cita Médica', dias: '2 días por año', pago: '✅ SÍ', evi: 'Receta o comprobante de cita.' },
                { tipo: 'Enfermedad sin incapacidad IMSS', dias: '3 días (Max 1 evento/año)', pago: '✅ SÍ', evi: 'Receta médica + ticket de medicamentos (Obligatorio).' },
                { tipo: 'Enfermedad / Incapacidad IMSS', dias: 'Según incapacidad', pago: '✅ SÍ', evi: 'Incapacidad oficial del IMSS.' },
                { tipo: 'Trámite oficial (INE, Pasaporte)', dias: '1 día por trámite', pago: '✅ SÍ', evi: 'Cita + evidencia del trámite realizado.' },
                { tipo: 'Permiso escolar (Hijos)', dias: '3 medios días al año', pago: '✅ SÍ', evi: 'Circular o carta escolar.' },
                { tipo: 'Cumpleaños', dias: '1 medio día al año', pago: '✅ SÍ', evi: 'Se verifica por fecha de nacimiento.' },
                { tipo: 'Fallecimiento Familiar DIRECTO', dias: '5 Días Naturales', pago: '✅ SÍ', evi: 'Acta de defunción. (Ver Glosario).' },
                { tipo: 'Fallecimiento Familiar EXTENDIDO', dias: '2 Días Naturales', pago: '✅ SÍ', evi: 'Acta de defunción. (Ver Glosario).' },
                { tipo: 'Matrimonio', dias: 'Hasta 2 días hábiles', pago: '✅ SÍ', evi: 'Acta de matrimonio.' },
                { tipo: 'Permiso personal sin goce', dias: 'Según evaluación', pago: '❌ NO', evi: 'Justificación breve en formulario.' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-pol4-cond',
        title: 'CONDICIONES GENERALES Y GESTIÓN OPERATIVA',
        number: 'III',
        blocks: [
          { type: BlockType.HEADER, content: "3.1 DÍAS ESPECIALES Y FESTIVOS OFICIALES" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'FECHA / EVENTO', accessor: 'fecha', width: '30%' },
                { header: 'BENEFICIO', accessor: 'ben', width: '30%' },
                { header: 'ALCANCE', accessor: 'alcance', width: '25%' },
                { header: 'GOCE', accessor: 'goce', width: '15%' },
              ],
              rows: [
                { fecha: 'Viernes Santo', ben: '1 Día Completo', alcance: 'General (Todos)', goce: '✅ SÍ' },
                { fecha: '10 de Mayo (Día de las Madres)', ben: 'Medio Día (Salida 14:00 hrs)', alcance: 'Exclusivo Madres Colaboradoras', goce: '✅ SÍ' },
                { fecha: '24 de Diciembre', ben: 'Medio Día (Salida 14:00 hrs)', alcance: 'General (Todos)', goce: '✅ SÍ' },
                { fecha: '31 de Diciembre', ben: 'Medio Día (Salida 14:00 hrs)', alcance: 'General (Todos)', goce: '✅ SÍ' },
                { fecha: 'Cumpleaños', ben: 'Medio Día (Salida 14:00 hrs)', alcance: 'General (Todos)', goce: '✅ SÍ' },
              ]
            }
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "PAGO EN DÍAS FESTIVOS OFICIALES (ART. 75 LFT)", 
            content: "Si por necesidades operativas se requiere que un colaborador trabaje en un día de descanso obligatorio (Festivo Oficial), se le pagará, independientemente del salario que le corresponda por el descanso, un salario doble por el servicio prestado (Salario Diario + 200%)." 
          },
          { type: BlockType.HEADER, content: "3.2 REGLAS GENERALES DE OPERACIÓN" },
          { 
            type: BlockType.LIST, 
            content: [
              "Todo permiso con goce debe contar con evidencia comprobable. De no presentarse, se considerará automáticamente como sin goce.",
              "Todos los permisos están sujetos a disponibilidad operativa y autorización del Jefe Inmediato."
            ] 
          },
          { type: BlockType.HEADER, content: "3.4 TIEMPOS DE ANTICIPACIÓN REQUERIDOS" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'TIPO DE SOLICITUD', accessor: 'tipo', width: '40%' },
                { header: 'ANTICIPACIÓN MÍNIMA', accessor: 'ant', width: '60%' },
              ],
              rows: [
                { tipo: 'Permisos Menores (Citas, Trámites)', ant: '48 Horas (2 Días Hábiles)' },
                { tipo: 'Vacaciones Cortas (< 1 semana)', ant: '1 Semana (5 Días Hábiles)' },
                { tipo: 'Permiso Matrimonio', ant: '15 Días Hábiles' },
                { tipo: 'Vacaciones Largas (12 días continuos)', ant: '2 Meses (60 Días)' },
              ]
            }
          },
          { type: BlockType.HEADER, content: "3.5 REGLAS DE CONTINUIDAD OPERATIVA" },
          { type: BlockType.PARAGRAPH, content: "Para evitar afectaciones al servicio, se establecen los siguientes candados:" },
          {
             type: BlockType.LIST,
             content: [
               "Límite de Simultaneidad: Máximo el 20% del personal de un área puede estar ausente al mismo tiempo.",
               "Equipos Pequeños (<5 personas): Solo 1 persona ausente a la vez.",
               "BLACKOUT (Periodos Restringidos): Se restringen vacaciones durante el Cierre de Mes (Día 28 al 5) e Inventarios Anuales/Cíclicos, salvo emergencia comprobable."
             ]
          }
        ]
      },
      {
        id: 'sec-pol4-ho',
        title: 'HOME OFFICE: CONCILIACIÓN Y SEGURIDAD',
        number: 'IV',
        blocks: [
          { type: BlockType.HEADER, content: "4.1 ELEGIBILIDAD OPERATIVA" },
          { type: BlockType.PARAGRAPH, content: "El esquema de Home Office es exclusivo para puestos cuyas funciones sean 100% compatibles con el trabajo remoto. NO APLICA para puestos operativos presenciales." },
          { type: BlockType.HEADER, content: "4.2 HOME OFFICE RECURRENTE (CONCILIACIÓN)" },
          { type: BlockType.PARAGRAPH, content: "Aplicable para colaboradores con necesidades de conciliación (cuidado hijos/salud), limitado a 27 horas mensuales." },
          { type: BlockType.HEADER, content: "4.5 GASTOS Y SERVICIOS" },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "NO PAGO DE SERVICIOS (<40%)", 
            content: "Dado que esta modalidad es híbrida/ocasional y NO excede el 40% de la jornada laboral, NO constituye una relación de Teletrabajo permanente bajo la LFT. Por lo tanto, la empresa NO está obligada al pago proporcional de electricidad, internet o adecuación ergonómica. El colaborador asume la responsabilidad de su conectividad." 
          },
          { type: BlockType.HEADER, content: "4.6 SEGURIDAD Y ACCIDENTES" },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "REPORTE DE ACCIDENTES EN CASA", 
            options: { highlightColor: 'red' },
            content: "Cualquier accidente ocurrido durante el horario pactado de Home Office debe ser reportado de inmediato al Jefe Inmediato y a Talento Humano. Esto es indispensable para la calificación de Riesgo de Trabajo ante el IMSS; de lo contrario, podría considerarse enfermedad general o accidente no laboral." 
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "PROTOCOLO DE FALLAS TÉCNICAS", 
            content: "Si el colaborador experimenta fallas de luz o internet, está obligado a trasladarse a las instalaciones de la empresa o solicitar permiso sin goce por el tiempo no laborado." 
          }
        ]
      },
      {
        id: 'sec-pol4-ho-occ',
        title: 'HOME OFFICE OCASIONAL',
        number: 'V',
        blocks: [
          { type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'MODALIDAD', accessor: 'mod', width: '30%' },
                { header: 'CRITERIO', accessor: 'crit', width: '30%' },
                { header: 'EVIDENCIA', accessor: 'evi', width: '40%' },
              ],
              rows: [
                { mod: 'Home Office Ocasional', crit: '⚠️ A criterio del Jefe Inmediato', evi: 'Justificación + plan de trabajo entregable.' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-pol4-sem',
        title: 'SEMÁFORO DE CONTROL Y RIESGO',
        number: 'VI',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Guía para Jefes Inmediatos en la toma de decisiones sobre autorizaciones:" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'NIVEL', accessor: 'nivel', width: '15%' },
                { header: 'DEFINICIÓN', accessor: 'def', width: '35%' },
                { header: 'EJEMPLO', accessor: 'ex', width: '20%' },
                { header: 'ACCIÓN REQUERIDA', accessor: 'act', width: '30%' },
              ],
              rows: [
                { nivel: '🟢 BAJO', def: 'Evidencia clara y permiso dentro de política.', ex: 'Vacaciones, IMSS, Escolar.', act: 'Autorización inmediata.' },
                { nivel: '🟡 MEDIO', def: 'Aplica política, pero puede haber mal uso.', ex: 'Trámite oficial, Home Office.', act: 'Validación de Talento Humano + Jefe Inmediato.' },
                { nivel: '🔴 ALTO', def: 'Fuera de política o abuso sin evidencia.', ex: 'Faltas repetidas, sin sustento.', act: 'Evaluación de Talento Humano + posible sanción.' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-pol4-auto',
        title: 'PROCESO AUTOMATIZADO Y SISTEMA',
        number: 'VII',
        blocks: [
          { type: BlockType.HEADER, content: "7.1 FLUJO DEL PROCESO DIGITAL" },
          { 
            type: BlockType.LIST, 
            options: { isOrdered: true },
            content: [
              "El colaborador llena el formulario digital desde un QR.",
              "El Jefe Inmediato recibe notificación por correo y aprueba/rechaza con un clic.",
              "Talento Humano coteja y genera automáticamente el PDF del permiso.",
              "El comprobante se envía automáticamente al correo del colaborador."
            ] 
          },
          { type: BlockType.HEADER, content: "7.2 ¿QUÉ INCLUYE EL SISTEMA?" },
          {
             type: BlockType.GRID_CARDS,
             options: { columns: 2 },
             content: [
               { text: "✔️ Registro inmediato" },
               { text: "✔️ Evidencia opcional respaldada" },
               { text: "✔️ Conteo automático de días" },
               { text: "✔️ Validación Talento Humano + Jefe Inmediato" },
               { text: "✔️ Generación de carta en PDF" },
               { text: "✔️ Envío por correo al colaborador" },
               { text: "✔️ Semáforo de riesgos" },
             ]
          }
        ]
      },
      {
        id: 'sec-pol4-vac',
        title: 'VACACIONES (LEY FEDERAL DEL TRABAJO)',
        number: 'VIII',
        blocks: [
          { type: BlockType.HEADER, content: "8.1 MARCO LEGAL Y REFORMA 2023" },
          { type: BlockType.PARAGRAPH, content: "De conformidad con la reforma de 'Vacaciones Dignas' publicada el 27 de diciembre de 2022 en el DOF, PROVEIN garantiza el derecho de todos sus colaboradores a disfrutar de un periodo anual de vacaciones pagadas, que en ningún caso podrá ser inferior a 12 días laborables desde el primer año de servicios." },
          { 
            type: BlockType.LIST, 
            content: [
              "Art. 76: Mínimo 12 días laborables desde el primer año.",
              "Art. 78: Del total del periodo, la persona trabajadora disfrutará de doce días de vacaciones continuos, por lo menos. Dicho periodo, a potestad del trabajador, podrá ser distribuido en la forma y tiempo que así lo requiera.",
              "Art. 81: Las vacaciones deberán concederse dentro de los seis meses siguientes al cumplimiento del año de servicios."
            ] 
          },
          { type: BlockType.HEADER, content: "8.2 TABLA DE VACACIONES VIGENTE (LFT 2025)" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'AÑOS DE SERVICIO', accessor: 'y', width: '40%' },
                { header: 'DÍAS DE VACACIONES LFT', accessor: 'd', width: '60%' },
              ],
              rows: [
                { y: 'Año 1', d: '12 días' },
                { y: 'Año 2', d: '14 días' },
                { y: 'Año 3', d: '16 días' },
                { y: 'Año 4', d: '18 días' },
                { y: 'Año 5', d: '20 días' },
                { y: '6 a 10 años', d: '22 días' },
                { y: '11 a 15 años', d: '24 días' },
                { y: '16 a 20 años', d: '26 días' },
                { y: '21 a 25 años', d: '28 días' },
                { y: '26 a 30 años', d: '30 días' },
                { y: '31 a 35 años', d: '32 días' },
              ]
            }
          },
          {
             type: BlockType.HIGHLIGHT,
             title: "REGLA DE DÍAS LABORABLES (CANDADO)",
             content: "En Provein, los días de vacaciones se descuentan únicamente de días laborables (Lunes a Viernes). Si el colaborador labora de lunes a viernes, sábados y domingos no se cuentan como vacaciones. Esto protege el descanso semanal y clarifica el saldo."
          },
          { type: BlockType.HEADER, content: "8.6 PRIMA VACACIONAL (ART. 80 LFT)" },
          { type: BlockType.PARAGRAPH, content: "Los trabajadores tendrán derecho a una prima no menor de veinticinco por ciento (25%) sobre los salarios que les correspondan durante el período de vacaciones." },
          { 
             type: BlockType.HIGHLIGHT, 
             title: "MOMENTO DE PAGO", 
             options: { highlightColor: 'blue' },
             content: "El pago de la Prima Vacacional se dispersará en la nómina inmediata anterior al inicio del disfrute de las vacaciones, asegurando que el colaborador cuente con el recurso para su descanso."
          },
          { type: BlockType.HEADER, content: "8.7 VIGENCIA Y PRESCRIPCIÓN (ART. 516 LFT)" },
          { type: BlockType.PARAGRAPH, content: "Las vacaciones deben concederse dentro de los 6 meses siguientes al cumplimiento del año de servicios. Una vez transcurrido este periodo, el trabajador tiene un año adicional para reclamarlas. En total, el derecho a reclamar y disfrutar vacaciones prescribe legalmente a los 18 meses (un año y medio) después de la fecha de aniversario." }
        ]
      },
      {
        id: 'sec-pol4-perm',
        title: 'GESTIÓN DE TIEMPO COMPENSATORIO (TIEMPO POR TIEMPO)',
        number: 'IX',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Acuerdo voluntario entre colaborador y empleador para intercambiar tiempo laborado fuera de horario por tiempo de descanso equivalente, atendiendo necesidades personales sin afectar la operación ni la jornada semanal pactada." },
          { type: BlockType.HEADER, content: "9.1 PROCESO DE SOLICITUD Y VALIDACIÓN" },
          {
             type: BlockType.LIST,
             options: { isOrdered: true },
             content: [
               "Presentar solicitud escrita o digital explicando motivo, fecha y forma exacta de reposición.",
               "Obtener autorización expresa del Jefe Inmediato en la plataforma.",
               "Validación de Talento Humano: Asegurar que se compense dentro del periodo permitido para no generar pasivos laborales."
             ]
          },
          { type: BlockType.HEADER, content: "9.2 REGLAS OPERATIVAS ESTRICTAS" },
          {
            type: BlockType.LIST,
            content: [
              "No es un permiso con goce ni sin goce; es una recuperación de tiempo laborado efectivamente.",
              "No aplica para justificar faltas injustificadas o retardos no informados.",
              "Se podrá negar la permuta si compromete la operación crítica (Cierres mensuales, inventarios).",
              "El tiempo a favor no es acumulable indefinidamente."
            ]
          },
          { type: BlockType.HEADER, content: "9.3 MARCO LEGAL Y HORAS EXTRA" },
          {
             type: BlockType.HIGHLIGHT,
             title: "COMPENSACIÓN VS PAGO",
             options: { highlightColor: 'blue' },
             content: "Este esquema de 'Tiempo por Tiempo' opera como un mecanismo de flexibilidad laboral y NO constituye tiempo extraordinario pagado. Al solicitar este esquema, el colaborador acepta canjear el tiempo adicional por descanso (1 hora x 1 hora) en lugar de retribución económica, fomentando el balance vida-trabajo y evitando la generación de horas extra (Art. 66-68 LFT)."
          },
          { type: BlockType.HEADER, content: "9.4 CADUCIDAD DEL TIEMPO A FAVOR" },
          {
             type: BlockType.HIGHLIGHT,
             title: "REGLA DE LOS 30 DÍAS",
             options: { highlightColor: 'red' },
             content: "Todo tiempo generado a favor del colaborador debe ser disfrutado (compensado) dentro de los 30 días naturales siguientes a su generación. Si el colaborador no solicita su compensación en este lapso, el tiempo caduca automáticamente y no podrá ser reclamado ni pagado posteriormente."
          }
        ]
      },
      {
        id: 'sec-pol4-conflict',
        title: 'MECANISMOS DE SOLUCIÓN DE CONFLICTOS',
        number: 'X',
        blocks: [
          { type: BlockType.HEADER, content: "10.1 PROCEDIMIENTO ANTE RECHAZOS" },
          { type: BlockType.PARAGRAPH, content: "Si un colaborador considera que su solicitud de permiso o vacaciones ha sido rechazada injustificadamente o existe un bloqueo sistemático por parte de su Jefe Inmediato, podrá activar el siguiente mecanismo:" },
          { 
            type: BlockType.LIST, 
            options: { isOrdered: true },
            content: [
              "Solicitar por escrito (correo) la razón operativa del rechazo al Jefe Inmediato.",
              "Si no hay respuesta o la justificación no es clara, escalar el caso a la Gerencia de Talento Humano con evidencia de la solicitud.",
              "Talento Humano mediará la situación revisando los niveles de concurrencia y la política vigente para emitir un fallo definitivo."
            ] 
          }
        ]
      },
      {
        id: 'sec-pol4-glos',
        title: 'GLOSARIO Y DEFINICIONES DE CONTROL',
        number: 'XI',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Definiciones para la correcta interpretación de esta política:" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'TÉRMINO', accessor: 'term', width: '30%' },
                { header: 'DEFINICIÓN INSTITUCIONAL', accessor: 'def', width: '70%' },
              ],
              rows: [
                { term: 'FAMILIAR DIRECTO', def: 'Incluye exclusivamente: Cónyuge (Esposo/a), Hijos (biológicos o adoptivos) y Padres del colaborador.' },
                { term: 'FAMILIAR EXTENDIDO', def: 'Incluye: Abuelos, Hermanos y Suegros.' },
                { term: 'DÍA HÁBIL', def: 'Días laborables según contrato (Lunes a Viernes). No incluye fines de semana ni festivos oficiales.' },
                { term: 'DÍA NATURAL', def: 'Días calendario corridos. Incluye sábados, domingos y días festivos. (Ej. De viernes a lunes son 4 días naturales).' },
                { term: 'HOME OFFICE HÍBRIDO', def: 'Modalidad ocasional o recurrente que NO excede las 27 horas mensuales o el 40% del tiempo laboral.' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-pol4-priv',
        title: 'PROTECCIÓN DE DATOS EN SOLICITUDES MÉDICAS',
        number: 'XII',
        blocks: [
          { type: BlockType.HEADER, content: "12.1 MANEJO DE INFORMACIÓN SENSIBLE" },
          { type: BlockType.PARAGRAPH, content: "Toda la documentación médica presentada como evidencia (recetas, diagnósticos, incapacidades) será tratada como información sensible conforme a la LFPDPPP." },
          {
             type: BlockType.HIGHLIGHT,
             title: "CONFIDENCIALIDAD",
             content: "El área de Talento Humano es la única autorizada para resguardar estos documentos. Los Jefes Inmediatos solo recibirán la validación de procedencia (Sí/No) sin acceso a los detalles clínicos del padecimiento, protegiendo la privacidad del colaborador."
          }
        ]
      },
      {
        id: 'sec-pol4-carta',
        title: 'CARTA DE ACEPTACIÓN DE POLÍTICA (ANEXO)',
        number: 'XIII',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "Este formato debe ser firmado por cada colaborador al momento de la difusión de la política." },
          {
             type: BlockType.HIGHLIGHT,
             title: "DECLARACIÓN DE CONFORMIDAD",
             content: "Declaro que he leído, comprendido y acepto la Política de Permisos y Vacaciones. Me comprometo a: Solicitar permisos con anticipación, Entregar evidencia correspondiente, Usar los permisos de forma responsable y Mantener comunicación con mi Jefe Inmediato y Talento Humano."
          },
          {
            type: BlockType.SIGNATURE,
            content: [
              { role: 'COLABORADOR', area: 'FIRMA DE ACEPTACIÓN' },
              { role: 'TALENTO HUMANO', area: 'TESTIGO' },
            ]
          }
        ]
      },
      {
        id: 'sec-pol4-auth',
        title: 'VALIDACIÓN Y AUTORIZACIÓN',
        number: 'XIV',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "El presente documento ha sido revisado y aprobado por el comité directivo para su implementación inmediata." },
          {
            type: BlockType.SIGNATURE,
            content: STANDARD_SIGNATURES
          }
        ]
      }
    ]
  },
  {
    id: 'doc-007',
    title: 'REPORTE DE CLIMA ORGANIZACIONAL Y ENPS 2025',
    subtitle: 'Resultados de la evaluación anual: Fortalezas culturales y optimización operativa.',
    code: 'PRO-TH-REP-001-V1.2',
    version: 'V1.2 (DETALLADA)',
    pageCount: 5,
    updatedAt: '2025-08-25',
    companyName: 'CONSUMIBLES PROVEIN S.A.P.I. DE C.V.',
    sections: [
      {
        id: 'sec-rep-index',
        title: 'ÍNDICE DE CONTENIDO',
        number: '0',
        blocks: [
          {
            type: BlockType.LIST,
            content: [
              "I. Ficha Técnica y Participación",
              "II. Metodología de Evaluación",
              "III. Resultados Generales e Históricos",
              "IV. Análisis Dimensional por Área",
              "V. Plan de Fortalecimiento Institucional",
              "VI. Validación y Firmas"
            ]
          }
        ]
      },
      {
        id: 'sec-rep-1',
        title: 'FICHA TÉCNICA Y ALCANCE',
        number: 'I',
        blocks: [
          { type: BlockType.PARAGRAPH, content: "El presente reporte consolida los resultados obtenidos en la evaluación de Clima Laboral y Employee Net Promoter Score (eNPS) aplicada a la totalidad de la plantilla activa." },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'CONCEPTO', accessor: 'conc', width: '30%' },
                { header: 'DETALLE TÉCNICO', accessor: 'det', width: '70%' },
              ],
              rows: [
                { conc: 'PERIODO DE APLICACIÓN', det: '14 al 22 de Agosto de 2025' },
                { conc: 'FECHA DE EMISIÓN DEL REPORTE', det: '25 de Agosto de 2025' },
                { conc: 'POBLACIÓN TOTAL (N)', det: '34 Colaboradores Activos' },
                { conc: 'RESPUESTAS RECIBIDAS', det: '34 Encuestas Completas' },
                { conc: 'TASA DE PARTICIPACIÓN', det: '100% (Muestra Total Representativa)' },
                { conc: 'DEPARTAMENTOS', det: 'Administración, Comercial, Operaciones, Logística' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-rep-method',
        title: 'METODOLOGÍA DE EVALUACIÓN',
        number: 'II',
        blocks: [
          { type: BlockType.HEADER, content: "2.1 ÍNDICE DE CLIMA (ESCALA LIKERT)" },
          { type: BlockType.PARAGRAPH, content: "Se utilizó una escala del 1 al 5 para medir la satisfacción en 5 dimensiones clave, donde: 1=Pésimo, 3=Regular, 5=Excelente." },
          { type: BlockType.HEADER, content: "2.2 eNPS (EMPLOYEE NET PROMOTER SCORE)" },
          { type: BlockType.PARAGRAPH, content: "Métrica de lealtad basada en la pregunta: '¿Recomendarías a PROVEIN como un buen lugar para trabajar?'. Fórmula: %Promotores (9-10) menos %Detractores (0-6). El rango va de -100 a +100." }
        ]
      },
      {
        id: 'sec-rep-2',
        title: 'RESULTADOS GENERALES E HISTÓRICOS',
        number: 'III',
        blocks: [
          {
            type: BlockType.GRID_CARDS,
            options: { columns: 2 },
            content: [
              { title: "ÍNDICE GLOBAL DE CLIMA: 4.2 / 5.0", text: "Resultado SÓLIDO. Mejora de +0.3 puntos vs 2024. La percepción general es de un ambiente humano y seguro." },
              { title: "eNPS (LEALTAD): +47", text: "EXCELENTE. Supera el benchmark de la industria (+30). Tenemos una base leal sólida." },
            ]
          },
          { type: BlockType.HEADER, content: "3.1 DESGLOSE POR DIMENSIÓN" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'DIMENSIÓN', accessor: 'dim', width: '40%' },
                { header: 'PUNTAJE 2025', accessor: 'pt', width: '20%' },
                { header: 'VS 2024', accessor: 'hist', width: '40%' },
              ],
              rows: [
                { dim: 'Sentido de Pertenencia y Orgullo', pt: '4.7 ★', hist: '▲ +0.2 (Fortaleza Cultural)' },
                { dim: 'Liderazgo y Dirección', pt: '4.5', hist: '▲ +0.4 (Mejora significativa)' },
                { dim: 'Condiciones Físicas y Herramientas', pt: '4.1', hist: '▼ -0.1 (Foco de Atención)' },
                { dim: 'Compensación y Beneficios', pt: '3.9', hist: '▲ +0.1 (Estable)' },
                { dim: 'Comunicación Interna', pt: '4.0', hist: '▬  0.0 (Sin cambios)' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-rep-3',
        title: 'ANÁLISIS DEPARTAMENTAL',
        number: 'IV',
        blocks: [
          { type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'ÁREA', accessor: 'area', width: '20%' },
                { header: 'PUNTAJE', accessor: 'pt', width: '15%' },
                { header: 'PERCEPCIÓN Y HALLAZGOS', accessor: 'perc', width: '65%' },
              ],
              rows: [
                { area: 'OPERACIONES', pt: '4.6 (Alto)', perc: 'Fortaleza Cultural. El equipo valora la integración y el liderazgo directo. Hallazgo: Alta cohesión en almacén.' },
                { area: 'ADMINISTRACIÓN', pt: '4.3 (Sólido)', perc: 'Estabilidad. Satisfechos con el liderazgo, pero solicitan renovación de mobiliario (sillas).' },
                { area: 'COMERCIAL', pt: '3.9 (Medio)', perc: 'Foco de Atención. Solicitan herramientas digitales (CRM) para reducir carga administrativa manual.' },
              ]
            }
          }
        ]
      },
      {
        id: 'sec-rep-4',
        title: 'PLAN DE FORTALECIMIENTO INSTITUCIONAL 2025-2026',
        number: 'V',
        blocks: [
          { type: BlockType.HEADER, content: "5.1 ACCIONES ESTRATÉGICAS AUTORIZADAS" },
          {
            type: BlockType.TABLE,
            content: {
              columns: [
                { header: 'ACCIÓN CONCRETA', accessor: 'act', width: '35%' },
                { header: 'PRESUPUESTO', accessor: 'pres', width: '15%' },
                { header: 'FECHA LÍMITE', accessor: 'date', width: '20%' },
                { header: 'KPI DE ÉXITO', accessor: 'kpi', width: '30%' },
              ],
              rows: [
                { act: 'PROYECTO CONFORT: Renovación de 12 Sillas Ergonómicas (Admin)', pres: '$45,000 MXN', date: '30 Sep 2025', kpi: 'Reducción de quejas ergonómicas a 0.' },
                { act: 'DESARROLLO INTERNO: CRM Comercial en AppSheet', pres: '$0.00 (In-House)', date: '15 Dic 2025', kpi: 'Adopción 100% / Costo Cero.' },
                { act: 'AUTOMATIZACIÓN: App de Reembolsos (AppSheet)', pres: '$0.00 (In-House)', date: '30 Oct 2025', kpi: 'Reembolsos en < 24 horas.' },
                { act: 'INTEGRACIÓN: Desayunos de Bienvenida (Nuevo Ingreso)', pres: 'Variable (Por Evento)', date: 'Inmediato', kpi: 'Pago a todo el departamento.' },
              ]
            }
          },
          { 
            type: BlockType.HIGHLIGHT, 
            title: "COMPROMISO DIRECTIVO", 
            content: "La Dirección Administrativa autoriza los montos y desarrollos tecnológicos internos para asegurar que cada colaborador cuente con las herramientas y el entorno óptimo para su desarrollo." 
          }
        ]
      },
      {
        id: 'sec-rep-5',
        title: 'VALIDACIÓN Y FIRMAS DE AUTORIZACIÓN',
        number: 'VI',
        blocks: [
          { 
             type: BlockType.HIGHLIGHT, 
             title: "VIGENCIA Y CONTROL", 
             options: { highlightColor: 'blue' },
             content: "El presente reporte es oficial y definitivo. Las acciones aquí planteadas son de ejecución obligatoria para las áreas responsables."
          },
          {
            type: BlockType.SIGNATURE,
            content: [
               { role: 'TALENTO HUMANO', area: 'ELABORACIÓN Y ANÁLISIS' },
               { role: 'DIRECCIÓN ADMINISTRATIVA', area: 'AUTORIZACIÓN DE PRESUPUESTO' },
               { role: 'DIRECCIÓN DE OPERACIONES', area: 'VISTO BUENO FINAL' }
            ]
          }
        ]
      }
    ]
  }
];