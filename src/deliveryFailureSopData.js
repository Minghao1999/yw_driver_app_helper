const sopImage = (number, alt) => ({
  src: `/driver/delivery-failure-sop/image${number}.png`,
  alt,
})

const zh = [
  {
    id: 'delivery-failure-sop',
    title: '派送失败原因选择与二次派送操作规范',
    images: [],
    sop: {
      type: 'overview',
      audience: '适用于 DSP 司机及车队长',
      principle: '核心原则：先定位一级分类，再选择实际适用的二级原因；确认现场、上传真实证据、提交失败后按要求退仓。',
      requirement: '关键要求：“其他 Other”必须填写具体失败原因（文字）并上传对应现场图片；不得使用黑图、旧图或虚假照片。',
      columns: ['一级分类', '二级原因', '判断重点'],
      rows: [
        ['A 地址错误', 'A1 地址不完整', '地址关键信息缺失，或 GPS 与实际位置严重不符，无法准确确认派送地址'],
        ['A 地址错误', 'A2 地址永久关闭', '核实收件地点已永久关闭，包括商业地址永久关闭'],
        ['A 地址错误', 'A3 无单元号', '多单元楼宇缺少 Unit / Apt / Suite 号码'],
        ['B 无法进入', 'B1 商业地址关闭', '商业场所暂时关闭或处于非营业时间（如周末、假期）'],
        ['B 无法进入', 'B2 收件人已搬离', '已核实收件人不在当前地址'],
        ['B 无法进入', 'B3 其他 Other', '不属于其他原因；备注文字 + 现场图片均必填；常见情况包括：无门禁密码（No Access Code）、恶犬阻挡或攻击（Aggressive Dog / Dog Attack）、道路封闭（Road Closure）、枪击事件（Shooting Incident）及其他突发安全风险'],
        ['C 军事地址 / 邮政地址', 'C1 军事地址', '军事基地、军事设施、APO / FPO / DPO 等军事邮政地址'],
        ['C 军事地址 / 邮政地址', 'C2 邮局地址', 'USPS 邮局、PO Box 等当前派送线路无法直接妥投的邮局收件地址'],
      ],
    },
  },
  {
    id: 'delivery-failure-process',
    title: '标准操作流程与提交要求',
    images: [],
    sop: {
      type: 'steps',
      steps: [
        '到达收件地址现场，核对地址和定位。',
        '确认现场状况，优先尝试合理的联系或核实方式（安全情况除外）。',
        '按系统中的一级分类 → 二级原因选择最准确的失败类型。',
        '上传符合该原因要求的现场 POD、地址或定位截图、联系记录等证据。',
        '核对失败原因、备注及图片已成功提交。',
        '无法妥投的包裹需在司机取货日 3 天内退回仓库。',
      ],
      rule: 'POD 真实性底线：必须是本次派送现场的真实照片。不得上传黑图、旧照片、虚假图片或虚假 GPS 信息。',
    },
  },
  {
    id: 'delivery-failure-standards',
    title: '分类详细操作标准',
    images: [],
    sop: {
      type: 'standards',
      items: [
        {
          code: 'A', title: '地址错误 / Incorrect Address',
          summaryLabel: '一级分类通用判断', summary: '地址信息缺失、GPS 与实际收件地址严重不符、门牌无法确认、地址无法定位，或收件地点已永久关闭；必须根据实际情形选择对应二级原因。',
          evidenceLabel: '通用证据', evidence: '现场环境、门牌或楼栋信息、GPS 定位截图、派送 APP 定位页面；独栋住宅拍整体房屋与门牌，公寓拍楼号、入口或 Call Box。',
          avoidLabel: '禁止操作', avoid: '未到现场直接失败；仅凭地图判断；黑图、旧照片、虚假 GPS 照片。',
        },
        {
          code: 'A1', title: '地址不完整 / Incomplete Address',
          summaryLabel: '适用场景', summary: '主体地址存在，但缺少楼栋号、公司名称、收件人信息等关键信息；或 GPS 定位与实际收件地址严重不符，导致无法准确确认可派送位置。',
          evidenceLabel: '正确处理 / POD', evidence: '现场核对建筑物及门牌，优先联系收件人补充或核实地址；上传现场照片、地址信息截图、GPS / 派送 APP 定位截图及联系记录。',
          avoidLabel: '不得选择', avoid: '仅凭 GPS 偏差而未到现场核实就直接失败；将缺少 Apt / Unit / Suite 的情况误选本项（应选择“无单元号”）。',
        },
        {
          code: 'A2', title: '地址永久关闭 / Address Permanently Closed',
          summaryLabel: '适用场景', summary: '收件地点实际存在，但现场核实其已经永久关闭，且无法找到有效收件人；包括商业地址永久关闭。',
          evidenceLabel: '正确处理 / POD', evidence: '核实地址及关闭状态；拍摄门牌、场所名称、关闭公告（如有）与周边环境。无法确认永久关闭时先联系客户，并保留联系记录。',
          avoidLabel: '不得选择', avoid: '仅因暂时关门、未到营业时间或无人应答就选择永久关闭。',
        },
        {
          code: 'A3', title: '无单元号 / Missing Unit Number',
          summaryLabel: '适用场景', summary: '多单元住宅、公寓或办公楼未提供 Apt / Unit / Suite 等具体号码。',
          evidenceLabel: '正确处理 / POD', evidence: '确认楼宇有多个单元且地址确实缺少单元号；联系客户索取，失败后上传楼宇照片、地址截图及联系记录。',
          avoidLabel: '不得选择', avoid: '已有单元号却未核对；因门禁限制或无人应答误选“无单元号”。',
        },
        {
          code: 'B', title: '无法进入 / No Access',
          summaryLabel: '一级分类通用判断', summary: '到场后因 Gate、安保、门禁、道路封闭、施工或其他客观阻碍无法完成派送。',
          evidenceLabel: '通用证据', evidence: '拍摄 Gate、Call Box、路障、安保限制、道路关闭通知等客观阻碍；存在联系或呼叫记录时同步留证。',
          avoidLabel: '禁止操作', avoid: '未到现场直接操作；未作合理尝试便失败；仅因停车困难或个人原因选择无法进入。',
        },
        {
          code: 'B1', title: '商业地址关闭 / Business Closed',
          summaryLabel: '适用场景', summary: '商业地址因午休、节假日、提前关门、非营业时间等暂时停止营业。',
          evidenceLabel: '正确处理 / POD', evidence: '到场核实并上传店铺门头、营业时间牌、卷帘门或现场关闭状态；优先拍清营业时间。',
          avoidLabel: '不得选择', avoid: '未到现场直接失败；已永久停业却选择临时关闭。',
        },
        {
          code: 'B2', title: '收件人已搬离 / Recipient Moved',
          summaryLabel: '适用场景', summary: '经现场核实收件人已搬走、公司迁址，或现场人员确认收件人不在该地址。',
          evidenceLabel: '正确处理 / POD', evidence: '上传门牌及现场证据；如有搬离通知、物业反馈或新住户说明，优先记录。',
          avoidLabel: '不得选择', avoid: '仅联系不上客户就判断其已搬离；与地址错误混淆。',
        },
        {
          code: 'B3', title: '其他 / Other',
          summaryLabel: '适用场景', summary: '不属于其他原因；备注文字 + 现场图片均必填；常见情况包括：无门禁密码（No Access Code）、恶犬阻挡或攻击（Aggressive Dog / Dog Attack）、道路封闭（Road Closure）、枪击事件（Shooting Incident）及其他突发安全风险。',
          evidenceLabel: '正确处理 / POD', evidence: '在确保安全的条件下核实情况；必须在备注填写具体原因（文字），并上传现场有效图片证据。',
          avoidLabel: '不得选择', avoid: '仅勾选 Other 而不填写文字；不上传图片；虚报风险或以个人原因替代真实失败原因。',
        },
        {
          code: 'C', title: '军事地址 / 邮政地址 / Military / Postal Address',
          summaryLabel: '一级分类通用判断', summary: '收件地点属于军事设施或特殊邮局收件地址，当前派送线路无法直接妥投；需在下级原因中区分“军事地址”与“邮局地址”。',
          evidenceLabel: '通用证据', evidence: '完整收件地址截图、地址类型及可安全、合法获取的现场或官方地址信息；遵守军事区域的安全与拍摄规定。',
          avoidLabel: '禁止操作', avoid: '未核实地址属性便提交失败；把普通商业或住宅地址、一般门禁受阻情况误选为军事 / 邮政地址。',
        },
        {
          code: 'C1', title: '军事地址 / Military Address',
          summaryLabel: '适用场景', summary: '收件地址为军事基地、军事设施或 APO / FPO / DPO 等军事邮政地址，且当前线路无法妥投。',
          evidenceLabel: '正确处理 / POD', evidence: '核实军事地址属性；上传完整地址截图及允许获取的外部或官方证明。不得擅自进入或拍摄军事禁区。',
          avoidLabel: '不得选择', avoid: '普通 USPS PO Box / 邮局收件地址，或仅因普通门禁限制无法进入的地址。',
        },
        {
          code: 'C2', title: '邮局地址 / Post Office Address',
          summaryLabel: '适用场景', summary: '收件地址为 USPS 邮局、PO Box 等邮局收件地址，且当前派送线路无法直接妥投。',
          evidenceLabel: '正确处理 / POD', evidence: '核实 USPS / PO Box 属性；提交完整地址截图和可取得的邮局标识或地址证明，必要时联系收件人确认。',
          avoidLabel: '不得选择', avoid: 'APO / FPO / DPO 等军事邮政地址，或能够正常派送的普通街道地址。',
        },
      ],
    },
  },
  {
    id: 'delivery-failure-quick-reference',
    title: '快速判断对照表',
    images: [],
    sop: {
      type: 'table',
      intro: '在现场先判断实际问题，再定位系统中的父类与子类。',
      columns: ['现场情况', '系统分类路径', '需要保留的证据'],
      rows: [
        ['地址缺公司名或楼栋号', '地址错误 → 地址不完整', '先联系收件人；地址截图 + 联系记录'],
        ['GPS 与实际收件地址严重不符', '地址错误 → 地址不完整', '现场门牌 / 建筑照片 + GPS / APP 定位截图 + 联系记录'],
        ['公寓缺 Apt / Unit / Suite', '地址错误 → 无单元号', '确认多单元；联系记录 + 楼栋照片'],
        ['地点明确永久关闭', '地址错误 → 地址永久关闭', '现场门牌、永久关闭证明'],
        ['商业场所永久停业', '地址错误 → 地址永久关闭', '按系统提供的选项；现场关闭证据'],
        ['商业店铺午休或已过营业时间', '无法进入 → 商业地址关闭', '门头 + 营业时间牌 + 关门状态'],
        ['经核实收件人已搬走', '无法进入 → 收件人已搬离', '门牌 + 搬迁通知或现场反馈'],
        ['无门禁密码、恶犬阻挡或攻击、道路封闭、枪击事件及其他突发安全风险', '无法进入 → 其他 Other', '具体原因文字 + 有效现场图片'],
        ['军事基地 / APO / FPO / DPO', '军事 / 邮政地址 → 军事地址', '完整地址截图 + 合法可取得的证明'],
        ['USPS 邮局 / PO Box', '军事 / 邮政地址 → 邮局地址', '完整地址截图 + 邮局标识 / 地址证明'],
      ],
    },
  },
  {
    id: 'delivery-failure-pod-examples',
    title: '正确 POD 图片示例',
    images: [],
    sop: {
      type: 'evidence',
      intro: '示例用于说明“包裹标签 + 房屋或楼宇整体 + 门牌或房号”的组合证据，不代表所有失败原因均可仅凭这组图片提交。',
      examples: [
        { title: '独栋住宅', image: sopImage(1, '独栋住宅的包裹标签、房屋整体和门牌组合证据') },
        { title: '公寓', image: sopImage(2, '公寓的包裹标签、楼宇入口和房号组合证据') },
      ],
    },
  },
  {
    id: 'delivery-failure-compliance',
    title: '考核机制与退仓要求',
    images: [],
    sop: {
      type: 'table',
      columns: ['违规情形', '处理标准'],
      rows: [
        ['失败类型选错', '由车队长组织培训，并要求修正错误行为。'],
        ['恶意上传虚假 POD 或黑图', '按原 SOP 标准扣罚 USD 100。'],
        ['未及时退回包裹', '无法妥投包裹需在司机取货日 3 天内退仓；逾期按原 SOP 视为丢失并按丢失赔偿。'],
      ],
    },
  },
]

const en = [
  {
    id: 'delivery-failure-sop', title: 'Delivery Failure Reason Selection & Re-delivery SOP', images: [],
    sop: {
      type: 'overview',
      audience: 'For DSP Drivers and Fleet Managers',
      principle: 'Core principle: Select the primary category first, then the most accurate secondary reason. Verify conditions on site, upload genuine evidence, submit the failed delivery, and return the parcel as required.',
      requirement: 'Mandatory rule: For “Other,” drivers must enter the specific failure reason in writing and upload corresponding on-site photos. Black images, old photos, and fabricated photos are prohibited.',
      columns: ['Primary Failure Category', 'Specific Secondary Reason', 'Decision Criteria'],
      rows: [
        ['A Incorrect Address', 'A1 Incomplete Address', 'Essential address details missing OR GPS significantly differs from actual delivery location, preventing reliable identification.'],
        ['A Incorrect Address', 'A2 Address Permanently Closed', 'Confirmed permanent closure of the destination, including a permanently closed business.'],
        ['A Incorrect Address', 'A3 Missing Unit Number', 'The Apt / Unit / Suite number is missing for a multi-unit building.'],
        ['B No Access', 'B1 Business Closed', 'Business temporarily closed or outside operating hours (e.g., weekend or holiday).'],
        ['B No Access', 'B2 Recipient Moved', 'Recipient confirmed to be no longer at the address.'],
        ['B No Access', 'B3 Other', 'No other reason applies. Written remarks AND on-site photos required. Examples: no access code, aggressive dog/dog attack, road closure, shooting incident, other sudden safety risks.'],
        ['C Military / Postal Address', 'C1 Military Address', 'Military bases or facilities and military postal addresses: APO / FPO / DPO.'],
        ['C Military / Postal Address', 'C2 Post Office Address', 'USPS post offices, PO Boxes, and other post office receiving addresses the current route cannot serve directly.'],
      ],
    },
  },
  {
    id: 'delivery-failure-process', title: 'Standard Workflow and Submission Requirements', images: [],
    sop: {
      type: 'steps',
      steps: [
        'Arrive at the delivery address. Verify the address and location.',
        'Assess actual conditions and make reasonable contact/verification attempts, except where unsafe.',
        'Choose the most accurate Primary Category → Secondary Reason in the system.',
        'Upload valid on-site POD, address/GPS screenshots, contact logs, and other required evidence.',
        'Confirm the failure reason, remarks, and photos have been submitted successfully.',
        'Return all undeliverable parcels to the warehouse within 3 days of driver pickup.',
      ],
      rule: 'POD authenticity: Photos must genuinely show the location during this delivery attempt. Black images, old photos, fabricated images, and false GPS information are prohibited.',
    },
  },
  {
    id: 'delivery-failure-standards', title: 'Detailed Selection and Operating Standards', images: [],
    sop: {
      type: 'standards',
      items: [
        { code: 'A', title: 'Incorrect Address', summaryLabel: 'General criteria', summary: 'Missing essential address information, a serious mismatch between the GPS pin and the actual delivery address, an unidentifiable street number, an unlocatable address, or a permanently closed destination. Always select the applicable secondary reason.', evidenceLabel: 'General evidence', evidence: 'On-site surroundings, street number/building identification, GPS screenshots, and the delivery app location screen. For houses, photograph the full building and street number; for apartments, photograph the building number, entrance, or call box.', avoidLabel: 'Prohibited', avoid: 'Marking the delivery failed without arriving on site; relying on a map alone; uploading black images, old photos, or fake GPS images.' },
        { code: 'A1', title: 'Incomplete Address', summaryLabel: 'Applicable when', summary: 'The address exists but lacks essential details, such as building number, business name, or recipient information; OR the GPS location differs substantially from the actual delivery address, preventing reliable identification of the delivery point.', evidenceLabel: 'Required action / POD', evidence: 'Verify the building and street number on site. First contact the recipient to obtain or confirm the address. Upload on-site photos, the address details, GPS/delivery app location screenshots, and contact records.', avoidLabel: 'Do not select', avoid: 'Failing a delivery based solely on a GPS discrepancy without an on-site check; using this category when only the Apt / Unit / Suite number is missing (select “Missing Unit Number” instead).' },
        { code: 'A2', title: 'Address Permanently Closed', summaryLabel: 'Applicable when', summary: 'The delivery location physically exists but has been verified as permanently closed, with no valid recipient available. This includes permanently closed business addresses.', evidenceLabel: 'Required action / POD', evidence: 'Verify the address and closure status. Photograph the street number, business name, permanent closure notice (if any), and surroundings. If permanent closure is uncertain, contact the recipient and retain the contact record.', avoidLabel: 'Do not select', avoid: 'Using permanent closure for a temporary closure, a business that has not yet opened, or a location where no one answers.' },
        { code: 'A3', title: 'Missing Unit Number', summaryLabel: 'Applicable when', summary: 'A multi-unit residence, apartment building, or office building has no Apt / Unit / Suite number in the address.', evidenceLabel: 'Required action / POD', evidence: 'Confirm that the building has multiple units and that the unit number is genuinely missing. Contact the recipient to request it. If unresolved, upload a building photo, address screenshot, and contact record.', avoidLabel: 'Do not select', avoid: 'Failing to check a unit number already supplied, or choosing this reason when the real obstacle is access control or no answer.' },
        { code: 'B', title: 'No Access', summaryLabel: 'General criteria', summary: 'The driver reaches the location but cannot complete delivery because of a gate, security restrictions, access controls, road closure, construction, or another objective barrier.', evidenceLabel: 'General evidence', evidence: 'Photograph gates, call boxes, roadblocks, security restrictions, or road closure notices. Keep contact or call records where available.', avoidLabel: 'Prohibited', avoid: 'Failing delivery without arriving or making reasonable attempts; selecting No Access solely due to parking difficulty or personal inconvenience.' },
        { code: 'B1', title: 'Business Closed', summaryLabel: 'Applicable when', summary: 'A business is temporarily closed because of a lunch break, holiday, early closing, or delivery outside business hours.', evidenceLabel: 'Required action / POD', evidence: 'Check on site and upload a photo of the storefront, posted business hours, shutter, or visibly closed premises. Capture posted business hours clearly whenever possible.', avoidLabel: 'Do not select', avoid: 'Failing without visiting the site; marking a permanently closed business as temporarily closed.' },
        { code: 'B2', title: 'Recipient Moved', summaryLabel: 'Applicable when', summary: 'An on-site check establishes that the recipient has moved out, the company has relocated, or someone at the location confirms that the recipient is no longer there.', evidenceLabel: 'Required action / POD', evidence: 'Upload the street number and on-site evidence. Record a relocation notice, property manager’s statement, or new occupant’s explanation when available.', avoidLabel: 'Do not select', avoid: 'Concluding that the recipient moved merely because they cannot be reached; confusing this reason with Incorrect Address.' },
        { code: 'B3', title: 'Other', summaryLabel: 'Applicable when', summary: 'None of the other reasons applies, for example no access code, an aggressive dog or dog attack risk, road closure, shooting incident, or another exceptional safety risk.', evidenceLabel: 'Required action / POD', evidence: 'Verify the situation only when safe. A specific written reason in the remarks AND valid on-site photographic evidence are both mandatory.', avoidLabel: 'Do not select', avoid: 'Checking “Other” without written explanation or photo evidence; reporting a false safety risk; substituting personal reasons for the actual failure reason.' },
        { code: 'C', title: 'Military / Postal Address', summaryLabel: 'General criteria', summary: 'The destination is a military facility or special postal receiving address that cannot be served directly by the current delivery route. Distinguish between “Military Address” and “Post Office Address” at the secondary level.', evidenceLabel: 'General evidence', evidence: 'A screenshot of the complete recipient address, the address type, and any site or official address evidence that may be obtained safely and lawfully. Follow all military security and photography rules.', avoidLabel: 'Prohibited', avoid: 'Submitting a failure before verifying the address type; misclassifying ordinary residential/commercial locations or general gate-access issues as military/postal addresses.' },
        { code: 'C1', title: 'Military Address', summaryLabel: 'Applicable when', summary: 'The recipient address is a military base, military facility, or military postal address (APO / FPO / DPO), and the current route cannot deliver to it.', evidenceLabel: 'Required action / POD', evidence: 'Verify that the destination is a military address. Upload the complete address screenshot and external or official evidence permitted by local rules. Do not enter or photograph restricted military areas without authorization.', avoidLabel: 'Do not select', avoid: 'Ordinary USPS PO Box/post office destinations or addresses that are only blocked by normal gate-access restrictions.' },
        { code: 'C2', title: 'Post Office Address', summaryLabel: 'Applicable when', summary: 'The recipient address is a USPS post office or PO Box receiving address that the current delivery route cannot serve directly.', evidenceLabel: 'Required action / POD', evidence: 'Confirm the USPS / PO Box address type. Upload the complete address screenshot and available post office signage or address proof. Contact the recipient if clarification is necessary.', avoidLabel: 'Do not select', avoid: 'Military postal addresses such as APO / FPO / DPO or ordinary street addresses where normal delivery is possible.' },
      ],
    },
  },
  {
    id: 'delivery-failure-quick-reference', title: 'Quick Decision Reference', images: [],
    sop: {
      type: 'table', intro: 'Assess the actual issue at the delivery site first, then choose the correct parent category and secondary reason. The following cases follow the SOP classification structure.',
      columns: ['On-Site Situation', 'System Classification Path', 'Evidence to Keep'],
      rows: [
        ['Business name / building number missing', 'Incorrect Address → Incomplete Address', 'Contact recipient; address screenshot + contact record.'],
        ['GPS greatly differs from actual address', 'Incorrect Address → Incomplete Address', 'On-site number/building photos + GPS/app screenshot + contact record.'],
        ['Apartment missing Apt / Unit / Suite', 'Incorrect Address → Missing Unit Number', 'Confirm multiple units; contact record + building photo.'],
        ['Destination confirmed permanently closed', 'Incorrect Address → Address Permanently Closed', 'Street number and evidence of permanent closure.'],
        ['Business permanently closed', 'Incorrect Address → Address Permanently Closed', 'Use system option; photo evidence of permanent closure.'],
        ['Business closed for lunch / after hours', 'No Access → Business Closed', 'Storefront + posted hours + closed premises.'],
        ['Recipient confirmed moved out', 'No Access → Recipient Moved', 'Street number + relocation notice / on-site statement.'],
        ['No access code / aggressive dog / road closure', 'No Access → Other', 'Specific written reason + valid on-site photos.'],
        ['Military base / APO / FPO / DPO', 'Military / Postal Address → Military Address', 'Complete address screenshot + legally obtainable evidence.'],
        ['USPS post office / PO Box', 'Military / Postal Address → Post Office Address', 'Complete address screenshot + post office signage/address proof.'],
      ],
    },
  },
  {
    id: 'delivery-failure-pod-examples', title: 'Examples of Acceptable POD Photos', images: [],
    sop: {
      type: 'evidence',
      intro: 'These examples show the combination of “parcel label + full house/building view + street or unit number.” This set of photos alone may not satisfy every failure reason.',
      examples: [
        { title: 'Single House', image: sopImage(1, 'Package label, full house, and street-number evidence for a single house') },
        { title: 'Apartment', image: sopImage(2, 'Package label, building entrance, and unit-number evidence for an apartment') },
      ],
    },
  },
  {
    id: 'delivery-failure-compliance', title: 'Compliance, Penalties, and Parcel Returns', images: [],
    sop: {
      type: 'table', columns: ['Violation', 'Standard / Action'],
      rows: [
        ['Incorrect failure reason selected', 'Fleet manager conducts training and requires corrective action.'],
        ['Intentional fake POD / black image', 'USD 100 penalty, as stated in the original SOP.'],
        ['Parcel returned late', 'Undeliverable parcels must return within 3 days of driver pickup; late parcels are treated as lost and compensated as such under the original SOP.'],
      ],
    },
  },
]

const es = [
  {
    id: 'delivery-failure-sop', title: 'Procedimiento de selección de motivos de entrega fallida y segundo intento (SOP)', images: [],
    sop: {
      type: 'overview',
      audience: 'Para conductores DSP y jefes de flota',
      principle: 'Principio básico: Seleccione primero la categoría principal y luego el motivo secundario más preciso. Verifique la situación en el lugar, cargue pruebas auténticas, registre la entrega fallida y devuelva el paquete según lo establecido.',
      requirement: 'Requisito obligatorio: Al seleccionar “Otros”, se debe indicar por escrito el motivo específico y subir fotos reales del lugar. Se prohíben fotos negras, antiguas o falsificadas.',
      columns: ['Categoría principal', 'Motivo secundario específico', 'Criterio de selección'],
      rows: [
        ['A Dirección incorrecta / Incorrect Address', 'A1 Dirección incompleta / Incomplete Address', 'Faltan datos esenciales O el GPS difiere mucho de la ubicación real, lo que impide identificar bien la dirección.'],
        ['A Dirección incorrecta / Incorrect Address', 'A2 Dirección cerrada permanentemente / Address Permanently Closed', 'Cierre definitivo comprobado, incluido el de un establecimiento comercial.'],
        ['A Dirección incorrecta / Incorrect Address', 'A3 Falta número de unidad / Missing Unit Number', 'Falta el número Apt / Unit / Suite en un edificio de varias unidades.'],
        ['B Sin acceso / No Access', 'B1 Negocio cerrado / Business Closed', 'Negocio cerrado temporalmente o fuera del horario de atención (fin de semana o feriado).'],
        ['B Sin acceso / No Access', 'B2 Destinatario se mudó / Recipient Moved', 'Se ha confirmado que el destinatario ya no reside o trabaja en esa dirección.'],
        ['B Sin acceso / No Access', 'B3 Otros / Other', 'Ningún otro motivo aplica. Se requieren comentarios escritos Y fotos del lugar. Ejemplos: falta código de acceso, perro agresivo/ataque, calle cerrada, tiroteo u otros riesgos imprevistos.'],
        ['C Dirección militar / postal / Military / Postal Address', 'C1 Dirección militar / Military Address', 'Bases, instalaciones militares y direcciones postales militares APO / FPO / DPO.'],
        ['C Dirección militar / postal / Military / Postal Address', 'C2 Dirección de oficina postal / Post Office Address', 'Oficinas USPS, PO Box y otras direcciones postales que la ruta no puede atender directamente.'],
      ],
    },
  },
  {
    id: 'delivery-failure-process', title: 'Procedimiento estándar y requisitos de registro', images: [],
    sop: {
      type: 'steps',
      steps: [
        'Llegue a la dirección de entrega y verifique la dirección y la ubicación.',
        'Compruebe las condiciones e intente contactar o verificar razonablemente, salvo que exista riesgo.',
        'Elija en el sistema Categoría principal → Motivo secundario más preciso.',
        'Suba POD válido del lugar, capturas de dirección/GPS, registros de contacto y otras pruebas requeridas.',
        'Confirme que el motivo, los comentarios y las fotos se enviaron correctamente.',
        'Devuelva al almacén los paquetes no entregados dentro de los 3 días posteriores a la recogida.',
      ],
      rule: 'Autenticidad del POD: Las fotos deben corresponder al lugar y a este intento de entrega. Se prohíben imágenes negras, fotos antiguas o falsificadas y datos GPS falsos.',
    },
  },
  {
    id: 'delivery-failure-standards', title: 'Reglas detalladas para seleccionar cada motivo', images: [],
    sop: {
      type: 'standards',
      items: [
        { code: 'A', title: 'Dirección incorrecta / Incorrect Address', summaryLabel: 'Criterios generales', summary: 'Faltan datos esenciales de la dirección, el GPS difiere considerablemente de la ubicación real de entrega, no se identifica el número del inmueble, no se puede localizar la dirección o el destino está cerrado permanentemente. Seleccione siempre el motivo secundario correspondiente.', evidenceLabel: 'Pruebas generales', evidence: 'Fotos del entorno, número del inmueble o identificación del edificio, capturas del GPS y de la ubicación en la app de reparto. En casas, fotografíe toda la fachada y el número; en apartamentos, el edificio, la entrada o el intercomunicador.', avoidLabel: 'Prohibido', avoid: 'Registrar el fallo sin llegar al lugar; decidir solo con el mapa; cargar imágenes negras, fotos antiguas o capturas GPS falsas.' },
        { code: 'A1', title: 'Dirección incompleta / Incomplete Address', summaryLabel: 'Cuándo corresponde', summary: 'La dirección existe, pero faltan datos esenciales, como número del edificio, nombre de la empresa o información del destinatario; O la ubicación GPS difiere considerablemente de la dirección real y no permite identificar con certeza el punto de entrega.', evidenceLabel: 'Acción requerida / POD', evidence: 'Verifique en persona el edificio y su número. Primero contacte al destinatario para completar o confirmar la dirección. Cargue fotos del lugar, captura de la dirección, capturas del GPS/de la app y registros de contacto.', avoidLabel: 'No seleccionar', avoid: 'Si solo existe una discrepancia GPS y no se verificó el lugar; cuando falta únicamente el número Apt / Unit / Suite (seleccione “Falta número de unidad”).' },
        { code: 'A2', title: 'Dirección cerrada permanentemente / Address Permanently Closed', summaryLabel: 'Cuándo corresponde', summary: 'El lugar de entrega existe, pero se ha confirmado en persona que cerró permanentemente y no hay un destinatario válido. Incluye locales comerciales cerrados de forma definitiva.', evidenceLabel: 'Acción requerida / POD', evidence: 'Verifique la dirección y el cierre. Fotografíe el número, el nombre del establecimiento, el aviso de cierre definitivo (si existe) y el entorno. Si el cierre no está confirmado, contacte al destinatario y conserve el registro.', avoidLabel: 'No seleccionar', avoid: 'Por un cierre temporal, por estar fuera del horario comercial o porque nadie responde.' },
        { code: 'A3', title: 'Falta número de unidad / Missing Unit Number', summaryLabel: 'Cuándo corresponde', summary: 'Falta el número de Apt / Unit / Suite en una vivienda, edificio de apartamentos u oficina con varias unidades.', evidenceLabel: 'Acción requerida / POD', evidence: 'Confirme que existen varias unidades y que realmente falta el número. Contacte al destinatario para solicitarlo. Si no se resuelve, cargue una foto del edificio, captura de la dirección y registro de contacto.', avoidLabel: 'No seleccionar', avoid: 'Si ya existe un número de unidad y no se comprobó; ni cuando el problema real sea el control de acceso o que nadie responde.' },
        { code: 'B', title: 'Sin acceso / No Access', summaryLabel: 'Criterios generales', summary: 'El conductor llega al lugar, pero no puede entregar debido a portones, seguridad, control de acceso, vías cerradas, obras u otro impedimento objetivo.', evidenceLabel: 'Pruebas generales', evidence: 'Fotografíe portones, intercomunicadores, barricadas, restricciones de seguridad o avisos de cierre de calles. Conserve los registros de contacto o llamadas disponibles.', avoidLabel: 'Prohibido', avoid: 'Registrar el fallo sin llegar al lugar o sin intentarlo razonablemente; elegir “Sin acceso” solo por dificultad de estacionamiento o motivos personales.' },
        { code: 'B1', title: 'Negocio cerrado / Business Closed', summaryLabel: 'Cuándo corresponde', summary: 'El comercio está cerrado temporalmente por descanso, feriado, cierre anticipado o porque la entrega ocurre fuera del horario comercial.', evidenceLabel: 'Acción requerida / POD', evidence: 'Verifique en persona y cargue fotos de la fachada, el horario publicado, la persiana o el local cerrado. Siempre que sea posible, muestre claramente el horario.', avoidLabel: 'No seleccionar', avoid: 'Si no visitó el lugar o si el negocio cerró permanentemente.' },
        { code: 'B2', title: 'Destinatario se mudó / Recipient Moved', summaryLabel: 'Cuándo corresponde', summary: 'La verificación presencial confirma que el destinatario se mudó, la empresa cambió de sede o alguien en el lugar confirma que el destinatario ya no está allí.', evidenceLabel: 'Acción requerida / POD', evidence: 'Suba fotos del número del inmueble y pruebas del lugar. Registre cualquier aviso de mudanza o información del administrador o nuevo ocupante.', avoidLabel: 'No seleccionar', avoid: 'Por no lograr contactar al destinatario; no confundir con “Dirección incorrecta”.' },
        { code: 'B3', title: 'Otros / Other', summaryLabel: 'Cuándo corresponde', summary: 'Ningún otro motivo aplica; por ejemplo, no hay código de acceso, existe un perro agresivo o riesgo de ataque, la calle está cerrada, hubo un tiroteo u otro riesgo excepcional de seguridad.', evidenceLabel: 'Acción requerida / POD', evidence: 'Verifique la situación solo si es seguro hacerlo. Es obligatorio escribir el motivo específico en los comentarios Y adjuntar fotos válidas del lugar.', avoidLabel: 'No seleccionar', avoid: '“Otros” sin explicación escrita o sin fotos; reportar riesgos falsos; sustituir el motivo real por razones personales.' },
        { code: 'C', title: 'Dirección militar / postal / Military / Postal Address', summaryLabel: 'Criterios generales', summary: 'El destino es una instalación militar o una dirección postal especial que la ruta actual no puede atender directamente. Distinga entre “Dirección militar” y “Dirección de oficina postal” en el segundo nivel.', evidenceLabel: 'Pruebas generales', evidence: 'Captura de la dirección completa, tipo de dirección y cualquier prueba del lugar o información oficial que pueda obtenerse de forma segura y legal. Respete las normas de seguridad y fotografía de zonas militares.', avoidLabel: 'Prohibido', avoid: 'Registrar el fallo sin verificar el tipo de dirección; clasificar viviendas, comercios comunes o problemas normales de acceso como direcciones militares o postales.' },
        { code: 'C1', title: 'Dirección militar / Military Address', summaryLabel: 'Cuándo corresponde', summary: 'La dirección es una base o instalación militar o una dirección postal militar (APO / FPO / DPO), y la ruta actual no puede realizar la entrega.', evidenceLabel: 'Acción requerida / POD', evidence: 'Confirme que es una dirección militar. Cargue la captura de la dirección completa y pruebas externas u oficiales permitidas. No entre ni tome fotos en zonas militares restringidas sin autorización.', avoidLabel: 'No seleccionar', avoid: 'Apartados USPS PO Box u oficinas postales normales, ni direcciones bloqueadas únicamente por controles de acceso comunes.' },
        { code: 'C2', title: 'Dirección de oficina postal / Post Office Address', summaryLabel: 'Cuándo corresponde', summary: 'La dirección corresponde a una oficina de USPS o un PO Box al que la ruta actual no puede entregar directamente.', evidenceLabel: 'Acción requerida / POD', evidence: 'Verifique que se trata de USPS / PO Box. Cargue la captura de la dirección completa y la señalización o prueba de dirección disponible. Contacte al destinatario si hace falta aclaración.', avoidLabel: 'No seleccionar', avoid: 'Direcciones postales militares APO / FPO / DPO ni direcciones de calle donde se pueda entregar normalmente.' },
      ],
    },
  },
  {
    id: 'delivery-failure-quick-reference', title: 'Tabla rápida de identificación', images: [],
    sop: {
      type: 'table', intro: 'Evalúe primero el problema real en el lugar y después elija la categoría principal y el motivo secundario correctos. Los siguientes casos siguen la estructura de clasificación del SOP.',
      columns: ['Situación en el lugar', 'Ruta de clasificación en el sistema', 'Pruebas que debe conservar'],
      rows: [
        ['Falta nombre de empresa / número de edificio', 'Dirección incorrecta → Dirección incompleta', 'Contactar al destinatario; captura de dirección + registro de contacto.'],
        ['El GPS difiere mucho de la dirección real', 'Dirección incorrecta → Dirección incompleta', 'Fotos del número/edificio + captura GPS/app + registro de contacto.'],
        ['Apartamento sin Apt / Unit / Suite', 'Dirección incorrecta → Falta número de unidad', 'Confirmar varias unidades; registro de contacto + foto del edificio.'],
        ['Destino confirmado cerrado para siempre', 'Dirección incorrecta → Dirección cerrada permanentemente', 'Número del inmueble y prueba de cierre definitivo.'],
        ['Comercio cerrado definitivamente', 'Dirección incorrecta → Dirección cerrada permanentemente', 'Opción del sistema; fotos que prueben el cierre permanente.'],
        ['Negocio cerrado por descanso / fuera de horario', 'Sin acceso → Negocio cerrado', 'Fachada + horario publicado + local cerrado.'],
        ['Se confirma que el destinatario se mudó', 'Sin acceso → Destinatario se mudó', 'Número del inmueble + aviso de mudanza / declaración en el lugar.'],
        ['Sin código de acceso / perro agresivo / calle cerrada', 'Sin acceso → Otros', 'Motivo específico por escrito + fotos válidas del lugar.'],
        ['Base militar / APO / FPO / DPO', 'Dirección militar / postal → Dirección militar', 'Captura completa de dirección + pruebas obtenidas legalmente.'],
        ['Oficina USPS / PO Box', 'Dirección militar / postal → Dirección de oficina postal', 'Captura completa + letrero de USPS / prueba de dirección.'],
      ],
    },
  },
  {
    id: 'delivery-failure-pod-examples', title: 'Ejemplos de fotos POD aceptables', images: [],
    sop: {
      type: 'evidence',
      intro: 'Los ejemplos muestran “etiqueta del paquete + vista completa de la casa/edificio + número de calle o unidad”. Estas fotos por sí solas podrían no cumplir los requisitos de todos los motivos.',
      examples: [
        { title: 'Casa unifamiliar / Single House', image: sopImage(1, 'Etiqueta del paquete, vista completa de la casa y número de calle') },
        { title: 'Apartamento / Apartment', image: sopImage(2, 'Etiqueta del paquete, entrada del edificio y número de unidad') },
      ],
    },
  },
  {
    id: 'delivery-failure-compliance', title: 'Cumplimiento, sanciones y devolución de paquetes', images: [],
    sop: {
      type: 'table', columns: ['Infracción', 'Medida correspondiente'],
      rows: [
        ['Motivo de fallo incorrecto', 'El jefe de flota impartirá capacitación y exigirá corregir la conducta.'],
        ['POD falso intencional / imagen negra', 'Multa de USD 100 conforme al SOP original.'],
        ['Devolución tardía del paquete', 'Los paquetes no entregados deben volver dentro de los 3 días desde la recogida; los retrasados se consideran perdidos y se indemnizan como tales según el SOP original.'],
      ],
    },
  },
]

const locales = { zh, en, es }

export const getDeliveryFailureSopProcedures = (language = 'zh') => locales[language] ?? zh
