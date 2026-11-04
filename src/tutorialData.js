import { getLocalizedImageSource } from './imageSources.js'

const tutorialImage = (number, alt) => ({
  ...getLocalizedImageSource('tutorial', number, 'zh', number === 19 ? 'jpg' : 'png'),
  imageNumber: number,
  alt,
})

const localizeImage = (item, language, alt = item.alt) => ({
  ...item,
  ...getLocalizedImageSource(
    'tutorial',
    item.imageNumber,
    language,
    item.imageNumber === 19 ? 'jpg' : 'png',
  ),
  alt,
})

export const chapters = [
  {
    id: 'driver-management',
    number: '01',
    title: '司机管理',
    eyebrow: 'Driver management',
    description: '添加、修改与查询司机账号。',
    accent: 'mint',
    entry: [tutorialImage(1, '首页中司机管理入口')],
    procedures: [
      {
        id: 'add-driver',
        title: '如何添加新司机',
        summary: '创建司机账号，并设置名称、密码和启用状态。',
        steps: ['在司机管理页点击“添加司机”', '输入名称', '输入密码', '选择启用或停用状态', '点击“保存并添加”'],
        images: [tutorialImage(2, '司机管理页中的添加司机按钮'), tutorialImage(3, '添加司机表单与保存按钮')],
      },
      {
        id: 'edit-driver',
        title: '如何修改司机信息',
        summary: '从司机列表进入编辑页，更新密码或状态。',
        steps: ['在司机列表中点击需要修改信息的司机', '如需修改密码则输入新密码；不修改时可留空', '修改启用或停用状态', '点击“保存”'],
        images: [tutorialImage(4, '在司机列表中选择需要修改的司机'), tutorialImage(5, '编辑司机页面中的密码状态与保存操作')],
      },
      {
        id: 'search-driver',
        title: '如何查询司机',
        summary: '支持按账号精确查询，或按名称进行模糊查询。',
        steps: ['输入司机账号或名称', '点击“查询”'],
        note: '账号需要精确查询；名称可以模糊查询。',
        images: [tutorialImage(6, '司机管理页面的查询输入框与查询按钮')],
      },
    ],
  },
  {
    id: 'route-splitting',
    number: '02',
    title: '路线拆分',
    eyebrow: 'Route splitting',
    description: '按顺序、司机、包裹数量或区域拆分分箱。',
    accent: 'orange',
    note: '只有分箱状态为“待签到”时，才可以拆分分箱。',
    entry: [tutorialImage(7, '首页中的路线拆分入口'), tutorialImage(8, '待签到分箱中的拆分分箱按钮')],
    procedures: [
      {
        id: 'split-sequence',
        title: '如何按顺序拆分分箱',
        summary: '指定点数范围和司机，按点位顺序完成拆分。',
        steps: ['点击“按顺序拆分”', '输入拆分点数', '选择司机', '点击勾选按钮确认', '如需继续拆分，可再次选择点数范围', '指定司机', '拆分完成后点击“应用”'],
        images: [tutorialImage(9, '拆分总览中的按顺序拆分按钮'), tutorialImage(10, '输入拆分点数并选择司机'), tutorialImage(11, '继续选择点数范围并应用拆分')],
        children: [
          {
            id: 'one-tap-split',
            title: '如何使用一键拆',
            summary: '可按司机人数均分，也可按包裹数量均分。',
            steps: ['点击地图右侧“一键拆”', '选择“按司机均分”并输入司机人数，或选择“按包裹数量均分”并输入包裹数量', '点击“确定”', '点击“应用”'],
            images: [tutorialImage(12, '一键拆中按司机均分的操作'), tutorialImage(13, '一键拆中按包裹数量均分的操作')],
          },
        ],
      },
      {
        id: 'split-area',
        title: '如何按区域拆分分箱',
        summary: '在地图上圈选区域，确认后分配司机。',
        steps: ['点击“按区域拆分”', '在地图上用点画框选择区域', '点击勾选按钮并分配司机', '点击“应用”'],
        images: [tutorialImage(14, '拆分总览中的按区域拆分按钮'), tutorialImage(15, '在地图中圈选区域并分配司机'), tutorialImage(16, '按区域拆分后的分箱结果与删除入口')],
      },
    ],
  },
  {
    id: 'route-planning',
    number: '03',
    title: '路线规划',
    eyebrow: 'Route planning',
    description: '拆分围栏、调整顺序、设置起终点并保存方案。',
    accent: 'blue',
    note: '只有分箱状态为“待签到”时，才可以进行路线规划。',
    entry: [tutorialImage(17, '首页中的路线规划入口'), tutorialImage(18, '待签到分箱中的路线规划按钮'), tutorialImage(19, '路线规划页面中的已保存方案')],
    procedures: [
      {
        id: 'split-fence',
        title: '如何拆分围栏',
        summary: '在围栏区域内画线，完成围栏拆分。',
        steps: ['进入往期已保存方案', '在已有区域内以点画线', '点击“完成”'],
        images: [tutorialImage(20, '在已有区域内画线并点击完成'), tutorialImage(21, '围栏拆分后的效果')],
      },
      {
        id: 'reorder-fence',
        title: '如何修改围栏顺序',
        summary: '通过拖拽顶部围栏标签调整顺序。',
        steps: ['长按顶部围栏标签', '拖拽到目标位置后松开'],
        images: [tutorialImage(22, '长按并拖拽顶部标签修改围栏顺序')],
      },
      {
        id: 'set-start-end',
        title: '如何在围栏内更改起始点和终点',
        summary: '依次设置每个围栏的起点和终点。',
        steps: ['点击“设起点”', '点击围栏内任意位置设置起点', '点击“设终点”', '点击围栏内任意位置设置终点', '点击“路线规划”', '规划成功后点击“应用”'],
        note: '必须为每一个围栏设置终点；上一个围栏的终点会成为下一个围栏的起点。',
        images: [tutorialImage(23, '在围栏内设置起点和终点'), tutorialImage(24, '多个围栏设置终点并应用路线规划')],
      },
      {
        id: 'map-provider',
        title: '如何换地图供应商',
        summary: '在底部供应商菜单中切换地图来源。',
        steps: ['点击底部当前地图供应商名称', '在列表中选择 NEXT_BILLION、GOOGLE 或 OPTIMO', '修改后点击“应用”'],
        images: [tutorialImage(25, '底部地图供应商切换入口'), tutorialImage(26, '地图供应商选择列表'), tutorialImage(27, '修改地图供应商后点击应用')],
      },
      {
        id: 'save-plan',
        title: '如何保存和另存为',
        summary: '覆盖当前方案，或保留原方案并新建副本。',
        steps: ['点击“保存”可覆盖原方案', '点击“另存为”可新建方案'],
        images: [tutorialImage(28, '点击保存覆盖原方案'), tutorialImage(29, '点击另存为新建方案')],
      },
    ],
  },
]

const translations = {
  en: {
    'driver-management': {
      title: 'Driver Management',
      eyebrow: 'Driver management',
      description: 'Add, edit, and search driver accounts.',
      entryTitle: 'Open Driver Management',
      entryAlts: ['Driver Management entry on the Home screen'],
      procedures: {
        'add-driver': {
          title: 'Add a new driver',
          steps: ['On the Driver Management page, select “Add Driver”', 'Enter the name', 'Enter the password', 'Select Enabled or Disabled', 'Select “Save and Add”'],
          imageAlts: ['Add Driver button on the Driver Management page', 'Add Driver form and Save and Add button'],
        },
        'edit-driver': {
          title: 'Edit driver information',
          steps: ['Select the driver you want to edit from the driver list', 'Enter a new password if needed; leave it blank to keep the current password', 'Change the status to Enabled or Disabled', 'Select “Save”'],
          imageAlts: ['Selecting a driver from the driver list', 'Password, status, and Save controls on the Edit Driver page'],
        },
        'search-driver': {
          title: 'Search for a driver',
          steps: ['Enter the driver account or name', 'Select “Search”'],
          note: 'Account searches require an exact match; names support partial matches.',
          imageAlts: ['Search field and Search button on the Driver Management page'],
        },
      },
    },
    'route-splitting': {
      title: 'Route Splitting',
      eyebrow: 'Route splitting',
      description: 'Split boxes by sequence, driver count, package count, or area.',
      note: 'Boxes can only be split when their status is “Pending Check-in.”',
      entryTitle: 'Open Route Splitting',
      entryAlts: ['Route Splitting entry on the Home screen', 'Split Boxes button for a Pending Check-in box'],
      procedures: {
        'split-sequence': {
          title: 'Split boxes in sequence',
          steps: ['Select “Split in Sequence”', 'Enter the number of stops to split', 'Select a driver', 'Select the checkmark to confirm', 'To continue splitting, select another range of stops', 'Assign a driver', 'When finished, select “Apply”'],
          imageAlts: ['Split in Sequence option in the split overview', 'Entering the number of stops and selecting a driver', 'Selecting another stop range and applying the split'],
          children: {
            'one-tap-split': {
              title: 'Use one-tap split',
              steps: ['Select “One-tap Split” on the right side of the map', 'Choose equal split by driver and enter the number of drivers, or choose equal split by package count and enter the package count', 'Select “Confirm”', 'Select “Apply”'],
              imageAlts: ['One-tap split distributed equally by driver', 'One-tap split distributed equally by package count'],
            },
          },
        },
        'split-area': {
          title: 'Split boxes by area',
          steps: ['Select “Split by Area”', 'Draw a boundary on the map by placing points around the area', 'Select the checkmark and assign a driver', 'Select “Apply”'],
          imageAlts: ['Split by Area option in the split overview', 'Drawing an area on the map and assigning a driver', 'Area split results and delete control'],
        },
      },
    },
    'route-planning': {
      title: 'Route Planning',
      eyebrow: 'Route planning',
      description: 'Split geofences, reorder them, set start and end points, and save plans.',
      note: 'Route planning is only available when the box status is “Pending Check-in.”',
      entryTitle: 'Open Route Planning',
      entryAlts: ['Route Planning entry on the Home screen', 'Route Planning button for a Pending Check-in box', 'Saved plans on the Route Planning page'],
      procedures: {
        'split-fence': {
          title: 'Split a geofence',
          steps: ['Open a previously saved plan', 'Draw a line inside the existing area by placing points', 'Select “Done”'],
          imageAlts: ['Drawing a line inside an existing area and selecting Done', 'Result after splitting a geofence'],
        },
        'reorder-fence': {
          title: 'Reorder geofences',
          steps: ['Press and hold a geofence tab at the top', 'Drag it to the desired position and release'],
          imageAlts: ['Pressing and dragging a top tab to reorder geofences'],
        },
        'set-start-end': {
          title: 'Set geofence start and end',
          steps: ['Select “Set Start”', 'Select any location inside the geofence as the start point', 'Select “Set End”', 'Select any location inside the geofence as the end point', 'Select “Route Planning”', 'After planning succeeds, select “Apply”'],
          note: 'Every geofence must have an end point. The previous geofence’s end point becomes the next geofence’s start point.',
          imageAlts: ['Setting start and end points inside a geofence', 'Setting end points for multiple geofences and applying route planning'],
        },
        'map-provider': {
          title: 'Change map provider',
          steps: ['Select the current map provider name at the bottom', 'Choose NEXT_BILLION, GOOGLE, or OPTIMO from the list', 'Select “Apply” after making the change'],
          imageAlts: ['Map provider control at the bottom of the page', 'Map provider selection list', 'Selecting Apply after changing the map provider'],
        },
        'save-plan': {
          title: 'Save and Save As',
          steps: ['Select “Save” to overwrite the current plan', 'Select “Save As” to create a new plan'],
          imageAlts: ['Selecting Save to overwrite the current plan', 'Selecting Save As to create a new plan'],
        },
      },
    },
  },
  es: {
    'driver-management': {
      title: 'Gestión de conductores',
      eyebrow: 'Gestión de conductores',
      description: 'Añade, edita y busca cuentas de conductores.',
      entryTitle: 'Abrir Gestión de conductores',
      entryAlts: ['Acceso a Gestión de conductores en la pantalla de Inicio'],
      procedures: {
        'add-driver': {
          title: 'Añadir un conductor',
          steps: ['En Gestión de conductores, pulsa «Añadir conductor»', 'Introduce el nombre', 'Introduce la contraseña', 'Selecciona Activado o Desactivado', 'Pulsa «Guardar y añadir»'],
          imageAlts: ['Botón Añadir conductor en Gestión de conductores', 'Formulario para añadir un conductor y botón Guardar y añadir'],
        },
        'edit-driver': {
          title: 'Editar datos del conductor',
          steps: ['Selecciona en la lista el conductor que deseas editar', 'Introduce una contraseña nueva si es necesario; déjala en blanco para conservar la actual', 'Cambia el estado a Activado o Desactivado', 'Pulsa «Guardar»'],
          imageAlts: ['Selección de un conductor en la lista', 'Contraseña, estado y botón Guardar en la página de edición'],
        },
        'search-driver': {
          title: 'Buscar un conductor',
          steps: ['Introduce la cuenta o el nombre del conductor', 'Pulsa «Buscar»'],
          note: 'La cuenta requiere una coincidencia exacta; el nombre permite coincidencias parciales.',
          imageAlts: ['Campo y botón de búsqueda en Gestión de conductores'],
        },
      },
    },
    'route-splitting': {
      title: 'División de rutas',
      eyebrow: 'División de rutas',
      description: 'Divide cajas por orden, conductores, cantidad de paquetes o zona.',
      note: 'Solo se pueden dividir cajas con el estado «Pendiente de check-in».',
      entryTitle: 'Abrir División de rutas',
      entryAlts: ['Acceso a División de rutas en la pantalla de Inicio', 'Botón Dividir cajas para una caja Pendiente de check-in'],
      procedures: {
        'split-sequence': {
          title: 'Dividir cajas en orden',
          steps: ['Pulsa «Dividir en orden»', 'Introduce el número de paradas que deseas separar', 'Selecciona un conductor', 'Pulsa la marca de verificación para confirmar', 'Para seguir dividiendo, selecciona otro intervalo de paradas', 'Asigna un conductor', 'Cuando termines, pulsa «Aplicar»'],
          imageAlts: ['Opción Dividir en orden en el resumen', 'Introducción del número de paradas y selección de conductor', 'Selección de otro intervalo y aplicación de la división'],
          children: {
            'one-tap-split': {
              title: 'Usar división rápida',
              steps: ['Pulsa «División rápida» a la derecha del mapa', 'Elige repartir por conductores e introduce su número, o repartir por cantidad de paquetes e introduce la cantidad', 'Pulsa «Confirmar»', 'Pulsa «Aplicar»'],
              imageAlts: ['División rápida repartida por conductores', 'División rápida repartida por cantidad de paquetes'],
            },
          },
        },
        'split-area': {
          title: 'Dividir cajas por zona',
          steps: ['Pulsa «Dividir por zona»', 'Dibuja un límite en el mapa colocando puntos alrededor de la zona', 'Pulsa la marca de verificación y asigna un conductor', 'Pulsa «Aplicar»'],
          imageAlts: ['Opción Dividir por zona en el resumen', 'Dibujo de una zona en el mapa y asignación de conductor', 'Resultado de la división por zona y control para eliminar'],
        },
      },
    },
    'route-planning': {
      title: 'Planificación de rutas',
      eyebrow: 'Planificación de rutas',
      description: 'Divide y ordena geocercas, define puntos de inicio y fin, y guarda planes.',
      note: 'La planificación de rutas solo está disponible con el estado «Pendiente de check-in».',
      entryTitle: 'Abrir Planificación de rutas',
      entryAlts: ['Acceso a Planificación de rutas en la pantalla de Inicio', 'Botón Planificación de rutas para una caja Pendiente de check-in', 'Planes guardados en la página de Planificación de rutas'],
      procedures: {
        'split-fence': {
          title: 'Dividir una geocerca',
          steps: ['Abre un plan guardado anteriormente', 'Dibuja una línea dentro de la zona colocando puntos', 'Pulsa «Finalizar»'],
          imageAlts: ['Dibujo de una línea dentro de una zona y selección de Finalizar', 'Resultado de dividir una geocerca'],
        },
        'reorder-fence': {
          title: 'Reordenar geocercas',
          steps: ['Mantén pulsada una pestaña de geocerca en la parte superior', 'Arrástrala a la posición deseada y suéltala'],
          imageAlts: ['Pulsación y arrastre de una pestaña superior para reordenar geocercas'],
        },
        'set-start-end': {
          title: 'Cambiar inicio y fin de geocerca',
          steps: ['Pulsa «Definir inicio»', 'Pulsa cualquier lugar dentro de la geocerca para definir el inicio', 'Pulsa «Definir fin»', 'Pulsa cualquier lugar dentro de la geocerca para definir el final', 'Pulsa «Planificación de rutas»', 'Cuando finalice correctamente, pulsa «Aplicar»'],
          note: 'Cada geocerca debe tener un punto final. El final de la geocerca anterior se convierte en el inicio de la siguiente.',
          imageAlts: ['Definición de los puntos de inicio y fin dentro de una geocerca', 'Definición de puntos finales en varias geocercas y aplicación de la ruta'],
        },
        'map-provider': {
          title: 'Cambiar proveedor de mapas',
          steps: ['Pulsa el nombre del proveedor de mapas actual en la parte inferior', 'Elige NEXT_BILLION, GOOGLE u OPTIMO en la lista', 'Pulsa «Aplicar» después de realizar el cambio'],
          imageAlts: ['Control del proveedor de mapas en la parte inferior', 'Lista de proveedores de mapas', 'Selección de Aplicar después de cambiar el proveedor de mapas'],
        },
        'save-plan': {
          title: 'Guardar y Guardar como',
          steps: ['Pulsa «Guardar» para sobrescribir el plan actual', 'Pulsa «Guardar como» para crear un plan nuevo'],
          imageAlts: ['Selección de Guardar para sobrescribir el plan actual', 'Selección de Guardar como para crear un plan nuevo'],
        },
      },
    },
  },
}

const localizeProcedure = (procedure, translation = {}, language = 'zh') => ({
  ...procedure,
  ...translation,
  images: procedure.images.map((item, index) => localizeImage(
    item,
    language,
    translation.imageAlts?.[index] ?? item.alt,
  )),
  children: procedure.children?.map((child) => localizeProcedure(
    child,
    translation.children?.[child.id],
    language,
  )),
})

export const getLocalizedChapters = (language = 'zh') => {
  const locale = translations[language]

  return chapters.map((chapter) => {
    if (!locale) return { ...chapter, entryTitle: `从首页进入${chapter.title}` }

    const translation = locale[chapter.id]
    return {
      ...chapter,
      ...translation,
      entry: chapter.entry.map((item, index) => localizeImage(
        item,
        language,
        translation.entryAlts?.[index] ?? item.alt,
      )),
      procedures: chapter.procedures.map((procedure) => localizeProcedure(
        procedure,
        translation.procedures?.[procedure.id],
        language,
      )),
    }
  })
}

export const allProcedureCount = chapters.reduce(
  (total, chapter) => total + chapter.procedures.reduce(
    (chapterTotal, procedure) => chapterTotal + 1 + (procedure.children?.length ?? 0),
    0,
  ),
  0,
)
