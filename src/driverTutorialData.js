const driverImage = (number, alt) => ({
  src: `/driver/image${number}.png`,
  alt,
})

const driverChapters = [
  {
    id: 'blacklist-address',
    number: '01',
    title: '拉黑地址',
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
    number: '02',
    title: '派送失败',
    eyebrow: '司机端',
    accent: 'orange',
    entry: [],
    procedures: [],
    note: '如果没有到达地点，会有弹出框\n选择【补传照片】：直接进入拍照界面\n选择【纠正地址】：会上报司机目前所在位置供审核人员参考',
    images: [
      driverImage(3, '点击我已到达并扫描包裹单号'),
      driverImage(4, '拍照上传页面中的无法派送入口'),
      driverImage(5, '补充派送失败证据并选择原因'),
      driverImage(6, '选择具体的派送失败原因'),
      driverImage(7, '选择其他原因时填写备注'),
      driverImage(8, '拍摄派送失败证据并确认'),
    ],
  },
  {
    id: 'delivery-countdown',
    number: '03',
    title: '查看包裹派送倒计时',
    eyebrow: '司机端',
    accent: 'blue',
    entry: [],
    procedures: [],
    images: [driverImage(9, '包裹派送剩余时间倒计时')],
  },
  {
    id: 'package-status',
    number: '04',
    title: '查看分箱内不同状态包裹',
    eyebrow: '司机端',
    accent: 'mint',
    entry: [],
    procedures: [],
    images: [driverImage(10, '按状态查看分箱内包裹')],
  },
]

const driverTranslations = {
  en: {
    'blacklist-address': {
      title: 'Blacklist an address',
      eyebrow: 'Driver Guide',
      note: 'Even after blacklisting an address, tap “I have arrived” and complete either “Delivered” or “Delivery failed”.',
      imageAlts: ['Blacklist address entry on a delivery task', 'Photo upload, note, and confirmation for a blacklisted address'],
    },
    'delivery-failed': {
      title: 'Report a failed delivery',
      eyebrow: 'Driver Guide',
      note: 'A pop-up appears if you have not reached the location.\nSelect “Upload additional photos” to go directly to the camera screen.\nSelect “Correct address” to submit the driver’s current location for the review team’s reference.',
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
    'blacklist-address': {
      title: 'Bloquear una dirección',
      eyebrow: 'Guía del conductor',
      note: 'Incluso después de bloquear una dirección, pulsa «He llegado» y completa «Entregado» o «Entrega fallida».',
      imageAlts: ['Acceso para bloquear la dirección en una tarea de entrega', 'Carga de fotos, nota y confirmación de una dirección bloqueada'],
    },
    'delivery-failed': {
      title: 'Registrar una entrega fallida',
      eyebrow: 'Guía del conductor',
      note: 'Aparecerá una ventana emergente si todavía no has llegado al lugar.\nSelecciona «Subir fotos adicionales» para ir directamente a la pantalla de la cámara.\nSelecciona «Corregir dirección» para enviar la ubicación actual del conductor como referencia para el equipo de revisión.',
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

  if (!locale) return driverChapters

  return driverChapters.map((chapter) => {
    const translation = locale[chapter.id]
    return {
      ...chapter,
      ...translation,
      images: chapter.images.map((image, index) => ({
        ...image,
        alt: translation.imageAlts[index] ?? image.alt,
      })),
    }
  })
}
