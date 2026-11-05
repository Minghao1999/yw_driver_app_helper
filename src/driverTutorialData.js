import { getDeliveryFailureSopProcedures } from './deliveryFailureSopData.js'
import { getLocalizedImageSource } from './imageSources.js'

const driverImage = (number, alt) => ({
  ...getLocalizedImageSource('driver', number),
  imageNumber: number,
  alt,
})

const localizeDriverImage = (image, language, alt = image.alt) => ({
  ...image,
  ...getLocalizedImageSource('driver', image.imageNumber, language),
  alt,
})

const driverChapters = [
  {
    id: 'driver-check-in-scan',
    number: '01',
    title: '司机签到扫描',
    eyebrow: '司机端',
    accent: 'mint',
    entry: [],
    procedures: [],
    images: [
      driverImage(11, '到仓后在待签到页面点击我已到达'),
      driverImage(12, '点击开始扫描进行取货签到'),
      driverImage(13, '逐个扫描包裹单号并完成签到'),
    ],
  },
  {
    id: 'driver-start-delivery',
    number: '02',
    title: '司机去派送',
    eyebrow: '司机端',
    accent: 'orange',
    entry: [],
    procedures: [],
    note: '如果没有到达地点，点击【我已到达】会有弹出框\n选择【补传照片】：可以做派送成功或者派送失败。\n选择【纠正地址】：会上报司机目前所在位置供审核人员参考。',
    noteLinks: [
      { label: '派送失败', href: '#delivery-failed' },
      { label: '纠正地址', href: '#correct-address' },
    ],
    images: [
      driverImage(14, '从待派送列表进入对应派送任务'),
      driverImage(15, '跳转到默认导航软件前往派送地址'),
      driverImage(16, '到达位置后点击我已到达并扫描验证'),
      driverImage(17, '按要求拍照并选择送货地点'),
      driverImage(18, '在列表中选择具体送货地点'),
      driverImage(19, '确认照片和送货地点信息'),
      driverImage(20, '点击提交完成派送'),
    ],
  },
  {
    id: 'apartment-code',
    number: '03',
    title: '登记公寓密码',
    eyebrow: '司机端',
    accent: 'blue',
    entry: [],
    procedures: [],
    images: [
      driverImage(21, '在派送任务中点击登记公寓密码'),
      driverImage(22, '输入公寓密码并点击确定'),
    ],
  },
  {
    id: 'correct-address',
    number: '04',
    title: '纠正地址',
    eyebrow: '司机端',
    accent: 'mint',
    entry: [],
    procedures: [],
    images: [
      driverImage(23, '当前位置与应用地址较远时点击我已到达'),
      driverImage(24, '在弹出菜单中选择纠正地址'),
      driverImage(25, '拖动地图标记并确认纠正位置'),
      driverImage(26, '地址上报后选择补传照片或取消'),
    ],
  },
  {
    id: 'feedback-messages',
    number: '05',
    title: '查看反馈消息',
    eyebrow: '司机端',
    accent: 'orange',
    entry: [],
    procedures: [],
    images: [
      driverImage(27, '在派送任务页面点击反馈'),
      driverImage(28, '在消息中心查看未读和已读反馈'),
    ],
  },
  {
    id: 'other-boxes-pending-packages',
    number: '06',
    title: '其他分箱：在今天的分箱中查询之前的待派送包裹',
    tocTitle: '其他分箱',
    eyebrow: '司机端',
    accent: 'blue',
    compactTitle: true,
    entry: [],
    procedures: [],
    images: [
      driverImage(29, '在派送任务页面点击其他分箱'),
      driverImage(30, '红色图标显示之前分箱中的待派送包裹'),
      driverImage(31, '点击红色图标查看包裹信息'),
      driverImage(32, '点击我已到达后进入其他分箱操作'),
    ],
  },
  {
    id: 'blacklist-address',
    number: '07',
    title: '拉黑地址',
    isNew: true,
    eyebrow: '司机端',
    accent: 'mint',
    entry: [],
    procedures: [],
    note: '即使拉黑地址，也需要点击“我已到达”，并操作“派送成功”或“派送失败”。',
    images: [
      driverImage(1, '派送任务中的拉黑地址入口'),
      driverImage(2, '拉黑地址的拍照上传、备注与确认页面'),
    ],
  },
  {
    id: 'delivery-failed',
    number: '08',
    title: '派送失败',
    isNew: true,
    eyebrow: '司机端',
    accent: 'orange',
    entry: [],
    note: undefined,
    images: [],
    procedures: [
      {
        id: 'delivery-failed-guide',
        title: '操作指南',
        images: [
          driverImage(3, '点击我已到达并扫描包裹单号'),
          driverImage(4, '拍照上传页面中的无法派送入口'),
          driverImage(5, '补充派送失败证据并选择原因'),
          driverImage(6, '选择具体的派送失败原因'),
          driverImage(7, '选择其他原因时填写备注'),
          driverImage(8, '拍摄派送失败证据并确认'),
        ],
      },
    ],
  },
  {
    id: 'delivery-countdown',
    number: '09',
    title: '查看包裹派送倒计时',
    isNew: true,
    eyebrow: '司机端',
    accent: 'blue',
    entry: [],
    procedures: [],
    images: [driverImage(9, '包裹派送剩余时间倒计时')],
  },
  {
    id: 'package-status',
    number: '10',
    title: '查看分箱内不同状态包裹',
    isNew: true,
    eyebrow: '司机端',
    accent: 'mint',
    entry: [],
    procedures: [],
    images: [driverImage(10, '按状态查看分箱内包裹')],
  },
]

const driverTranslations = {
  en: {
    'driver-check-in-scan': {
      title: 'Driver check-in scanning',
      eyebrow: 'Driver Guide',
      imageAlts: ['Tap I have arrived on the Pending Check-in page', 'Tap Start Scanning to check in the pickup', 'Scan each package number and complete check-in'],
    },
    'driver-start-delivery': {
      title: 'Start delivering',
      eyebrow: 'Driver Guide',
      note: 'If you have not reached the location, tapping “I have arrived” opens a pop-up.\nSelect “Upload additional photos” to complete a successful delivery or report a failed delivery.\nSelect “Correct address” to submit the driver’s current location for the review team’s reference.',
      noteLinks: [
        { label: 'failed delivery', href: '#delivery-failed' },
        { label: 'Correct address', href: '#correct-address' },
      ],
      imageAlts: ['Open the delivery task from the Pending Delivery list', 'Open the default navigation app and travel to the address', 'Tap I have arrived and scan to verify', 'Take the required photos and choose a delivery location', 'Choose the exact delivery location from the list', 'Confirm the photos and delivery-location information', 'Submit to complete the delivery'],
    },
    'apartment-code': {
      title: 'Register an apartment access code',
      eyebrow: 'Driver Guide',
      imageAlts: ['Open apartment-code registration from the delivery task', 'Enter the apartment access code and confirm'],
    },
    'correct-address': {
      title: 'Correct an address',
      eyebrow: 'Driver Guide',
      imageAlts: ['Tap I have arrived when the current location is far from the app address', 'Select Correct Address from the pop-up menu', 'Move the map marker and confirm the corrected location', 'After reporting the address, choose Upload Additional Photos or Cancel'],
    },
    'feedback-messages': {
      title: 'View feedback messages',
      eyebrow: 'Driver Guide',
      imageAlts: ['Open Feedback from the delivery-task page', 'View unread and read feedback in Message Center'],
    },
    'other-boxes-pending-packages': {
      title: 'Find earlier pending packages in today’s other boxes',
      tocTitle: 'Other boxes',
      eyebrow: 'Driver Guide',
      imageAlts: ['Open Other Boxes from the delivery-task page', 'Red icons show pending packages from earlier boxes', 'Tap a red icon to view the package information', 'Tap I have arrived to continue with the package from another box'],
    },
    'blacklist-address': {
      title: 'Blacklist an address',
      eyebrow: 'Driver Guide',
      note: 'Even after blacklisting an address, tap “I have arrived” and complete either “Delivered” or “Delivery failed”.',
      imageAlts: ['Blacklist address entry on a delivery task', 'Photo upload, note, and confirmation for a blacklisted address'],
    },
    'delivery-failed': {
      title: 'Report a failed delivery',
      eyebrow: 'Driver Guide',
      guideTitle: 'Operation Guide',
      imageAlts: ['Tap I have arrived and scan the package number', 'Unable to deliver entry on the photo upload page', 'Add failed-delivery evidence and select a reason', 'Select a specific failed-delivery reason', 'Enter a note when Other is selected', 'Capture failed-delivery evidence and confirm'],
    },
    'delivery-countdown': {
      title: 'View the delivery countdown',
      eyebrow: 'Driver Guide',
      imageAlts: ['Remaining package delivery time'],
    },
    'package-status': {
      title: 'View packages by status',
      eyebrow: 'Driver Guide',
      imageAlts: ['View packages in a bin by status'],
    },
  },
  es: {
    'driver-check-in-scan': {
      title: 'Escaneo de registro del conductor',
      eyebrow: 'Guía del conductor',
      imageAlts: ['Pulsa He llegado en la página Pendiente de registro', 'Pulsa Iniciar escaneo para registrar la recogida', 'Escanea cada número de paquete y completa el registro'],
    },
    'driver-start-delivery': {
      title: 'Iniciar las entregas',
      eyebrow: 'Guía del conductor',
      note: 'Si todavía no has llegado al lugar, al pulsar «He llegado» aparecerá una ventana emergente.\nSelecciona «Subir fotos adicionales» para completar una entrega exitosa o registrar una entrega fallida.\nSelecciona «Corregir dirección» para enviar la ubicación actual del conductor como referencia para el equipo de revisión.',
      noteLinks: [
        { label: 'entrega fallida', href: '#delivery-failed' },
        { label: 'Corregir dirección', href: '#correct-address' },
      ],
      imageAlts: ['Abre la tarea desde la lista Pendiente de entrega', 'Abre la aplicación de navegación predeterminada y dirígete a la dirección', 'Pulsa He llegado y escanea para verificar', 'Toma las fotos requeridas y elige el lugar de entrega', 'Elige el lugar exacto de entrega en la lista', 'Confirma las fotos y el lugar de entrega', 'Envía la información para completar la entrega'],
    },
    'apartment-code': {
      title: 'Registrar el código de acceso del apartamento',
      eyebrow: 'Guía del conductor',
      imageAlts: ['Abre el registro del código del apartamento desde la tarea', 'Introduce el código de acceso del apartamento y confirma'],
    },
    'correct-address': {
      title: 'Corregir una dirección',
      eyebrow: 'Guía del conductor',
      imageAlts: ['Pulsa He llegado cuando la ubicación actual está lejos de la dirección de la aplicación', 'Selecciona Corregir dirección en el menú emergente', 'Mueve el marcador del mapa y confirma la ubicación corregida', 'Después de informar la dirección, selecciona Subir fotos adicionales o Cancelar'],
    },
    'feedback-messages': {
      title: 'Ver mensajes de comentarios',
      eyebrow: 'Guía del conductor',
      imageAlts: ['Abre Comentarios desde la página de la tarea', 'Consulta los mensajes leídos y no leídos en el Centro de mensajes'],
    },
    'other-boxes-pending-packages': {
      title: 'Buscar paquetes pendientes anteriores en otras cajas de hoy',
      tocTitle: 'Otras cajas',
      eyebrow: 'Guía del conductor',
      imageAlts: ['Abre Otras cajas desde la página de la tarea', 'Los iconos rojos muestran paquetes pendientes de cajas anteriores', 'Pulsa un icono rojo para ver la información del paquete', 'Pulsa He llegado para continuar con el paquete de otra caja'],
    },
    'blacklist-address': {
      title: 'Bloquear una dirección',
      eyebrow: 'Guía del conductor',
      note: 'Incluso después de bloquear una dirección, pulsa «He llegado» y completa «Entregado» o «Entrega fallida».',
      imageAlts: ['Acceso para bloquear la dirección en una tarea de entrega', 'Carga de fotos, nota y confirmación de una dirección bloqueada'],
    },
    'delivery-failed': {
      title: 'Registrar una entrega fallida',
      eyebrow: 'Guía del conductor',
      guideTitle: 'Guía de operación',
      imageAlts: ['Pulsa He llegado y escanea el número del paquete', 'Acceso No se puede entregar en la pantalla de carga de fotos', 'Añade pruebas de la entrega fallida y elige un motivo', 'Elige un motivo específico de entrega fallida', 'Escribe una nota al elegir Otro', 'Captura las pruebas de la entrega fallida y confirma'],
    },
    'delivery-countdown': {
      title: 'Ver la cuenta atrás de entrega',
      eyebrow: 'Guía del conductor',
      imageAlts: ['Tiempo restante para entregar el paquete'],
    },
    'package-status': {
      title: 'Ver paquetes por estado',
      eyebrow: 'Guía del conductor',
      imageAlts: ['Ver los paquetes de una caja según su estado'],
    },
  },
}

export const getLocalizedDriverChapters = (language = 'zh') => {
  const locale = driverTranslations[language]

  return driverChapters.map((chapter) => {
    const translation = locale?.[chapter.id]
    const isDeliveryFailed = chapter.id === 'delivery-failed'
    const guide = isDeliveryFailed ? chapter.procedures[0] : null
    const localizedGuide = guide ? {
      ...guide,
      title: translation?.guideTitle ?? guide.title,
      note: translation?.note ?? guide.note,
      images: guide.images.map((image, index) => localizeDriverImage(
        image,
        language,
        translation?.imageAlts?.[index] ?? image.alt,
      )),
    } : null

    return {
      ...chapter,
      ...(translation ?? {}),
      note: isDeliveryFailed ? undefined : translation?.note ?? chapter.note,
      images: chapter.images.map((image, index) => localizeDriverImage(
        image,
        language,
        translation?.imageAlts?.[index] ?? image.alt,
      )),
      procedures: isDeliveryFailed
        ? [localizedGuide, ...getDeliveryFailureSopProcedures(language)]
        : chapter.procedures,
    }
  })
}
