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
    id: 'delivery-failure-sop', title: 'Delivery Failure Selection & Re-delivery SOP', images: [],
    sop: {
      type: 'overview',
      audience: 'For DSP drivers and fleet managers',
      principle: 'Core principle: identify the primary category first, then select the secondary reason that matches the actual situation. Verify the scene, upload genuine evidence, submit the failure, and return the package as required.',
      requirement: 'Key requirement: “Other” requires a written explanation of the specific failure reason and matching on-site photos. Black images, old photos, and fabricated photos are prohibited.',
      columns: ['Primary category', 'Secondary reason', 'Decision point'],
      rows: [
        ['A Incorrect Address', 'A1 Incomplete Address', 'Key address information is missing, or GPS differs significantly from the actual location, preventing accurate confirmation of the delivery address'],
        ['A Incorrect Address', 'A2 Address Permanently Closed', 'The destination has been verified as permanently closed, including a permanently closed business'],
        ['A Incorrect Address', 'A3 Missing Unit Number', 'A multi-unit building is missing the Unit / Apt / Suite number'],
        ['B No Access', 'B1 Business Closed', 'The business is temporarily closed or outside business hours, such as on a weekend or holiday'],
        ['B No Access', 'B2 Recipient Moved', 'The recipient has been verified as no longer at the address'],
        ['B No Access', 'B3 Other', 'Does not fall under another reason; a written note + on-site photo are both required. Common cases include: No Access Code, Aggressive Dog / Dog Attack, Road Closure, Shooting Incident, and other unexpected safety risks'],
        ['C Military / Postal Address', 'C1 Military Address', 'Military base, military facility, or a military postal address such as APO / FPO / DPO'],
        ['C Military / Postal Address', 'C2 Post Office Address', 'USPS post office, PO Box, or another post-office address the current delivery route cannot serve directly'],
      ],
    },
  },
  {
    id: 'delivery-failure-process', title: 'Standard Process and Submission Requirements', images: [],
    sop: {
      type: 'steps',
      steps: [
        'Arrive at the delivery address and verify the address and location.',
        'Confirm the on-site conditions and first attempt reasonable contact or verification, except when safety is at risk.',
        'Select the most accurate failure type using the primary category and then the secondary reason in the app.',
        'Upload the required on-site POD, address or location screenshots, contact records, and other evidence.',
        'Confirm that the failure reason, note, and images were submitted successfully.',
        'Undeliverable packages must be returned to the warehouse within 3 days of the driver pickup date.',
      ],
      rule: 'POD authenticity requirement: photos must be genuine images from the current delivery attempt. Black images, old photos, fabricated images, and false GPS information are prohibited.',
    },
  },
  {
    id: 'delivery-failure-standards', title: 'Detailed Standards by Category', images: [],
    sop: {
      type: 'standards',
      items: [
        { code: 'A', title: 'Incorrect Address', summaryLabel: 'Primary-category rule', summary: 'Address information is missing, GPS differs significantly from the actual delivery address, the street number cannot be confirmed, the address cannot be located, or the destination is permanently closed. Select the applicable secondary reason based on the actual situation.', evidenceLabel: 'General evidence', evidence: 'Photograph the surroundings, street number or building information, GPS screen, and delivery-app location. For a house, capture the full house and number; for an apartment, capture the building number, entrance, or call box.', avoidLabel: 'Prohibited', avoid: 'Failing before arriving, relying only on a map, or using black images, old photos, or false GPS images.' },
        { code: 'A1', title: 'Incomplete Address', summaryLabel: 'When to use', summary: 'The main address exists but lacks key information such as a building number, company name, or recipient details; or GPS differs significantly from the actual delivery address, preventing accurate confirmation of a deliverable location.', evidenceLabel: 'Correct handling / POD', evidence: 'Verify the building and street number on site, then contact the recipient to complete or confirm the address. Upload on-site photos, the address screen, GPS / delivery-app location screenshots, and contact records.', avoidLabel: 'Do not select when', avoid: 'The failure is based only on a GPS discrepancy without on-site verification, or a missing Apt / Unit / Suite is being classified here instead of as Missing Unit Number.' },
        { code: 'A2', title: 'Address Permanently Closed', summaryLabel: 'When to use', summary: 'The location exists, but on-site verification confirms it is permanently closed and no valid recipient can be found, including a permanently closed business.', evidenceLabel: 'Correct handling / POD', evidence: 'Verify the address and closure. Photograph the street number, business name, closure notice if available, and surroundings. If permanent closure cannot be confirmed, contact the customer and retain the record.', avoidLabel: 'Do not select when', avoid: 'The location is only temporarily closed, not yet open, or no one answers.' },
        { code: 'A3', title: 'Missing Unit Number', summaryLabel: 'When to use', summary: 'A multi-unit residence, apartment building, or office building is missing an Apt / Unit / Suite number.', evidenceLabel: 'Correct handling / POD', evidence: 'Confirm that the building has multiple units and that the unit number is truly missing. Contact the customer; if unsuccessful, upload a building photo, address screen, and contact record.', avoidLabel: 'Do not select when', avoid: 'A unit number is available but was not checked, or access restrictions or no answer are being misclassified as a missing unit number.' },
        { code: 'B', title: 'No Access', summaryLabel: 'Primary-category rule', summary: 'After arriving, delivery cannot be completed because of a gate, security, access control, road closure, construction, or another objective obstruction.', evidenceLabel: 'General evidence', evidence: 'Photograph the gate, call box, barrier, security restriction, road-closure notice, or other obstruction. Keep contact or call records when available.', avoidLabel: 'Prohibited', avoid: 'Failing before arrival, making no reasonable attempt, or selecting No Access only because parking is difficult or for a personal reason.' },
        { code: 'B1', title: 'Business Closed', summaryLabel: 'When to use', summary: 'A business is temporarily closed for lunch, a holiday, early closing, or outside business hours.', evidenceLabel: 'Correct handling / POD', evidence: 'Verify on site and upload the storefront, posted business hours, shutter, or visible closed condition. Capture the business hours clearly whenever possible.', avoidLabel: 'Do not select when', avoid: 'The driver did not arrive, or the business is permanently closed.' },
        { code: 'B2', title: 'Recipient Moved', summaryLabel: 'When to use', summary: 'On-site verification confirms the recipient moved, the company relocated, or a person at the location confirms the recipient is no longer there.', evidenceLabel: 'Correct handling / POD', evidence: 'Upload the street number and on-site evidence. Record a move notice, property-management feedback, or a new resident’s statement when available.', avoidLabel: 'Do not select when', avoid: 'The customer is merely unreachable or the issue is actually an incorrect address.' },
        { code: 'B3', title: 'Other', summaryLabel: 'When to use', summary: 'Does not fall under another reason; a written note + on-site photo are both required. Common cases include: No Access Code, Aggressive Dog / Dog Attack, Road Closure, Shooting Incident, and other unexpected safety risks.', evidenceLabel: 'Correct handling / POD', evidence: 'Verify the situation when safe. Enter the specific reason in the note and upload valid on-site photo evidence.', avoidLabel: 'Do not select when', avoid: 'Other is selected without a written reason, no image is uploaded, or a risk is fabricated or replaced by a personal reason.' },
        { code: 'C', title: 'Military / Postal Address', summaryLabel: 'Primary-category rule', summary: 'The destination is a military facility or special post-office address that the current route cannot serve directly. Select Military Address or Post Office Address as the secondary reason.', evidenceLabel: 'General evidence', evidence: 'Keep a complete address screenshot, the address type, and any on-site or official address information that can be obtained safely and legally. Follow all military-area safety and photography rules.', avoidLabel: 'Prohibited', avoid: 'Submitting a failure without verifying the address type, or treating a normal business, residence, or ordinary access restriction as a military / postal address.' },
        { code: 'C1', title: 'Military Address', summaryLabel: 'When to use', summary: 'The destination is a military base, military facility, or military postal address such as APO / FPO / DPO, and the current route cannot deliver it.', evidenceLabel: 'Correct handling / POD', evidence: 'Verify the military address type. Upload the complete address screen and any external or official proof that may be obtained. Do not enter or photograph a restricted military area.', avoidLabel: 'Do not select when', avoid: 'The destination is a regular USPS PO Box / post-office address, or access is blocked only by an ordinary gate.' },
        { code: 'C2', title: 'Post Office Address', summaryLabel: 'When to use', summary: 'The destination is a USPS post office, PO Box, or another post-office address that the current route cannot serve directly.', evidenceLabel: 'Correct handling / POD', evidence: 'Verify the USPS / PO Box address type. Submit the complete address screen and obtainable post-office signage or address proof; contact the recipient when necessary.', avoidLabel: 'Do not select when', avoid: 'The destination is an APO / FPO / DPO military postal address or a normal street address that can be delivered.' },
      ],
    },
  },
  {
    id: 'delivery-failure-quick-reference', title: 'Quick Decision Reference', images: [],
    sop: {
      type: 'table', intro: 'Identify the actual on-site issue first, then locate the matching parent and child options in the system.',
      columns: ['On-site situation', 'System category path', 'Evidence to retain'],
      rows: [
        ['Company name or building number is missing', 'Incorrect Address → Incomplete Address', 'Contact recipient first; address screen + contact record'],
        ['GPS differs significantly from the actual delivery address', 'Incorrect Address → Incomplete Address', 'Street number / building photo + GPS / app location screenshot + contact record'],
        ['Apartment is missing Apt / Unit / Suite', 'Incorrect Address → Missing Unit Number', 'Confirm multi-unit building; contact record + building photo'],
        ['Location is clearly permanently closed', 'Incorrect Address → Address Permanently Closed', 'Street number + proof of permanent closure'],
        ['Business is permanently closed', 'Incorrect Address → Address Permanently Closed', 'Use the available system option; on-site closure evidence'],
        ['Business is at lunch or outside business hours', 'No Access → Business Closed', 'Storefront + business-hours sign + closed condition'],
        ['Recipient has been verified as moved', 'No Access → Recipient Moved', 'Street number + move notice or on-site feedback'],
        ['No access code, aggressive dog / dog attack, road closure, shooting incident, or another unexpected safety risk', 'No Access → Other', 'Specific written reason + valid on-site photo'],
        ['Military base / APO / FPO / DPO', 'Military / Postal Address → Military Address', 'Complete address screen + legally obtainable proof'],
        ['USPS post office / PO Box', 'Military / Postal Address → Post Office Address', 'Complete address screen + post-office sign / address proof'],
      ],
    },
  },
  {
    id: 'delivery-failure-pod-examples', title: 'Correct POD Examples', images: [],
    sop: {
      type: 'evidence',
      intro: 'These examples show the combined evidence of a package label, the full house or building, and the street or unit number. This does not mean that every failure reason can be submitted with only these images.',
      examples: [
        { title: 'Single House', image: sopImage(1, 'Package label, full house, and street-number evidence for a single house') },
        { title: 'Apartment', image: sopImage(2, 'Package label, building entrance, and unit-number evidence for an apartment') },
      ],
    },
  },
  {
    id: 'delivery-failure-compliance', title: 'Compliance and Package Return Requirements', images: [],
    sop: {
      type: 'table', columns: ['Violation', 'Handling standard'],
      rows: [
        ['Incorrect failure type selected', 'The fleet manager provides training and requires the incorrect behavior to be corrected.'],
        ['Deliberately uploading false POD or black images', 'USD 100 penalty under the original SOP standard.'],
        ['Package not returned on time', 'Undeliverable packages must be returned within 3 days of the driver pickup date. An overdue package is treated as lost under the original SOP and compensated as a lost package.'],
      ],
    },
  },
]

const es = [
  {
    id: 'delivery-failure-sop', title: 'Selección del motivo de entrega fallida', images: [],
    sop: {
      type: 'overview',
      audience: 'Para conductores y jefes de flota de DSP',
      principle: 'Principio básico: identifica primero la categoría principal y después el motivo secundario que corresponda a la situación real. Verifica el lugar, sube pruebas auténticas, registra el fallo y devuelve el paquete según lo indicado.',
      requirement: 'Requisito clave: «Otro» exige una explicación escrita del motivo específico y fotos correspondientes del lugar. Se prohíben imágenes negras, fotos antiguas o fotos falsas.',
      columns: ['Categoría principal', 'Motivo secundario', 'Criterio de decisión'],
      rows: [
        ['A Dirección incorrecta', 'A1 Dirección incompleta', 'Falta información esencial de la dirección o el GPS difiere mucho de la ubicación real, por lo que no se puede confirmar con precisión la dirección de entrega'],
        ['A Dirección incorrecta', 'A2 Dirección cerrada permanentemente', 'Se ha verificado que el destino cerró de forma permanente, incluido un negocio'],
        ['A Dirección incorrecta', 'A3 Falta el número de unidad', 'Falta el número Unit / Apt / Suite en un edificio con varias unidades'],
        ['B Sin acceso', 'B1 Negocio cerrado', 'El negocio está cerrado temporalmente o fuera de horario, por ejemplo durante un fin de semana o festivo'],
        ['B Sin acceso', 'B2 Destinatario se mudó', 'Se ha verificado que el destinatario ya no está en la dirección'],
        ['B Sin acceso', 'B3 Otro', 'No corresponde a ningún otro motivo; son obligatorios el texto de la nota + la foto del lugar. Los casos comunes incluyen: falta de código de acceso (No Access Code), perro agresivo o ataque de perro (Aggressive Dog / Dog Attack), cierre de carretera (Road Closure), tiroteo (Shooting Incident) y otros riesgos de seguridad imprevistos'],
        ['C Dirección militar / postal', 'C1 Dirección militar', 'Base militar, instalación militar o dirección postal militar como APO / FPO / DPO'],
        ['C Dirección militar / postal', 'C2 Dirección de oficina postal', 'Oficina de USPS, PO Box u otra dirección postal que la ruta actual no puede atender directamente'],
      ],
    },
  },
  {
    id: 'delivery-failure-process', title: 'Proceso estándar y requisitos de envío', images: [],
    sop: {
      type: 'steps',
      steps: [
        'Llega a la dirección de entrega y verifica la dirección y la ubicación.',
        'Confirma la situación del lugar e intenta primero un contacto o una verificación razonable, salvo que exista un riesgo de seguridad.',
        'Selecciona el tipo de fallo más preciso mediante la categoría principal y después el motivo secundario de la aplicación.',
        'Sube el POD del lugar, capturas de la dirección o ubicación, registros de contacto y demás pruebas requeridas.',
        'Confirma que el motivo, la nota y las imágenes se enviaron correctamente.',
        'Los paquetes no entregables deben devolverse al almacén dentro de los 3 días posteriores a la fecha de recogida del conductor.',
      ],
      rule: 'Requisito de autenticidad del POD: las fotos deben corresponder al intento de entrega actual. Se prohíben imágenes negras, fotos antiguas, imágenes falsas o información GPS falsa.',
    },
  },
  {
    id: 'delivery-failure-standards', title: 'Normas detalladas por categoría', images: [],
    sop: {
      type: 'standards',
      items: [
        { code: 'A', title: 'Dirección incorrecta', summaryLabel: 'Regla de la categoría principal', summary: 'Falta información de la dirección, el GPS difiere mucho de la dirección real, no se puede confirmar el número, no se puede localizar la dirección o el lugar cerró permanentemente. Selecciona el motivo secundario que corresponda a la situación real.', evidenceLabel: 'Pruebas generales', evidence: 'Fotografía el entorno, el número o la información del edificio, la pantalla GPS y la ubicación en la aplicación. Para una casa, muestra la vivienda completa y el número; para un apartamento, el número del edificio, la entrada o el call box.', avoidLabel: 'Prohibido', avoid: 'Registrar el fallo sin llegar, basarse solo en el mapa o usar imágenes negras, fotos antiguas o imágenes GPS falsas.' },
        { code: 'A1', title: 'Dirección incompleta', summaryLabel: 'Cuándo usarlo', summary: 'La dirección principal existe, pero falta información esencial, como el número del edificio, el nombre de la empresa o los datos del destinatario; o el GPS difiere mucho de la dirección real y no permite confirmar una ubicación entregable.', evidenceLabel: 'Procedimiento correcto / POD', evidence: 'Verifica en el lugar el edificio y el número; después contacta al destinatario para completar o confirmar la dirección. Sube fotos del lugar, la pantalla de la dirección, capturas del GPS / ubicación de la aplicación y los registros de contacto.', avoidLabel: 'No seleccionar cuando', avoid: 'El fallo se basa únicamente en una diferencia del GPS sin verificación en el lugar, o falta Apt / Unit / Suite y debería seleccionarse Falta el número de unidad.' },
        { code: 'A2', title: 'Dirección cerrada permanentemente', summaryLabel: 'Cuándo usarlo', summary: 'El lugar existe, pero la verificación confirma un cierre permanente y no se encuentra un destinatario válido, incluido un negocio cerrado permanentemente.', evidenceLabel: 'Procedimiento correcto / POD', evidence: 'Verifica la dirección y el cierre. Fotografía el número, el nombre del lugar, el aviso de cierre si existe y el entorno. Si no puedes confirmar el cierre permanente, contacta al cliente y conserva el registro.', avoidLabel: 'No seleccionar cuando', avoid: 'El lugar solo está cerrado temporalmente, aún no ha abierto o nadie responde.' },
        { code: 'A3', title: 'Falta el número de unidad', summaryLabel: 'Cuándo usarlo', summary: 'Una vivienda, apartamento u oficina con varias unidades no incluye el número Apt / Unit / Suite.', evidenceLabel: 'Procedimiento correcto / POD', evidence: 'Confirma que el edificio tiene varias unidades y que realmente falta el número. Contacta al cliente; si no responde, sube una foto del edificio, la dirección y el registro de contacto.', avoidLabel: 'No seleccionar cuando', avoid: 'Existe un número y no se verificó, o se confunde una restricción de acceso o la falta de respuesta con un número faltante.' },
        { code: 'B', title: 'Sin acceso', summaryLabel: 'Regla de la categoría principal', summary: 'Después de llegar, no se puede completar la entrega por una puerta, seguridad, control de acceso, carretera cerrada, obras u otro obstáculo objetivo.', evidenceLabel: 'Pruebas generales', evidence: 'Fotografía la puerta, call box, barrera, restricción de seguridad, aviso de carretera cerrada u otro obstáculo. Conserva también los registros de contacto o llamada.', avoidLabel: 'Prohibido', avoid: 'Registrar el fallo antes de llegar, no realizar un intento razonable o elegir Sin acceso solo por dificultad para estacionar o por un motivo personal.' },
        { code: 'B1', title: 'Negocio cerrado', summaryLabel: 'Cuándo usarlo', summary: 'El negocio está cerrado temporalmente por almuerzo, festivo, cierre anticipado o fuera de horario.', evidenceLabel: 'Procedimiento correcto / POD', evidence: 'Verifica el lugar y sube la fachada, el horario publicado, la persiana o el estado de cierre. Fotografía claramente el horario siempre que sea posible.', avoidLabel: 'No seleccionar cuando', avoid: 'No se llegó al lugar o el negocio cerró permanentemente.' },
        { code: 'B2', title: 'Destinatario se mudó', summaryLabel: 'Cuándo usarlo', summary: 'La verificación confirma que el destinatario se mudó, la empresa cambió de dirección o alguien en el lugar confirma que ya no está allí.', evidenceLabel: 'Procedimiento correcto / POD', evidence: 'Sube el número y pruebas del lugar. Registra un aviso de mudanza, comentarios de la administración o la declaración del nuevo residente cuando existan.', avoidLabel: 'No seleccionar cuando', avoid: 'El cliente simplemente no responde o el problema es una dirección incorrecta.' },
        { code: 'B3', title: 'Otro', summaryLabel: 'Cuándo usarlo', summary: 'No corresponde a ningún otro motivo; son obligatorios el texto de la nota + la foto del lugar. Los casos comunes incluyen: falta de código de acceso (No Access Code), perro agresivo o ataque de perro (Aggressive Dog / Dog Attack), cierre de carretera (Road Closure), tiroteo (Shooting Incident) y otros riesgos de seguridad imprevistos.', evidenceLabel: 'Procedimiento correcto / POD', evidence: 'Verifica la situación cuando sea seguro. Escribe el motivo específico en la nota y sube una foto válida del lugar.', avoidLabel: 'No seleccionar cuando', avoid: 'Se elige Otro sin texto, no se sube una imagen o se inventa un riesgo o se sustituye por un motivo personal.' },
        { code: 'C', title: 'Dirección militar / postal', summaryLabel: 'Regla de la categoría principal', summary: 'El destino es una instalación militar o una dirección especial de oficina postal que la ruta actual no puede atender directamente. Selecciona Dirección militar o Dirección de oficina postal como motivo secundario.', evidenceLabel: 'Pruebas generales', evidence: 'Conserva una captura completa de la dirección, el tipo de dirección y la información del lugar u oficial que pueda obtenerse de forma segura y legal. Respeta las normas de seguridad y fotografía de las zonas militares.', avoidLabel: 'Prohibido', avoid: 'Registrar el fallo sin verificar el tipo de dirección o clasificar una empresa, vivienda o restricción de acceso normal como dirección militar / postal.' },
        { code: 'C1', title: 'Dirección militar', summaryLabel: 'Cuándo usarlo', summary: 'El destino es una base militar, instalación militar o dirección postal militar como APO / FPO / DPO, y la ruta actual no puede entregarlo.', evidenceLabel: 'Procedimiento correcto / POD', evidence: 'Verifica que sea una dirección militar. Sube la pantalla completa de la dirección y cualquier prueba externa u oficial permitida. No entres ni fotografíes una zona militar restringida.', avoidLabel: 'No seleccionar cuando', avoid: 'Es un USPS PO Box o una oficina postal normal, o el acceso solo está bloqueado por una puerta común.' },
        { code: 'C2', title: 'Dirección de oficina postal', summaryLabel: 'Cuándo usarlo', summary: 'El destino es una oficina de USPS, PO Box u otra dirección de oficina postal que la ruta actual no puede atender directamente.', evidenceLabel: 'Procedimiento correcto / POD', evidence: 'Verifica que sea USPS / PO Box. Presenta la pantalla completa de la dirección y las señales o pruebas disponibles de la oficina postal; contacta al destinatario cuando sea necesario.', avoidLabel: 'No seleccionar cuando', avoid: 'Es una dirección postal militar APO / FPO / DPO o una dirección normal de calle que sí puede entregarse.' },
      ],
    },
  },
  {
    id: 'delivery-failure-quick-reference', title: 'Referencia rápida para decidir', images: [],
    sop: {
      type: 'table', intro: 'Identifica primero el problema real en el lugar y después busca las opciones principal y secundaria correspondientes.',
      columns: ['Situación en el lugar', 'Ruta de clasificación', 'Pruebas que se deben conservar'],
      rows: [
        ['Falta el nombre de la empresa o el número del edificio', 'Dirección incorrecta → Dirección incompleta', 'Contactar primero; pantalla de dirección + registro'],
        ['El GPS difiere mucho de la dirección real de entrega', 'Dirección incorrecta → Dirección incompleta', 'Número / foto del edificio + captura GPS / aplicación + registro de contacto'],
        ['Falta Apt / Unit / Suite', 'Dirección incorrecta → Falta el número de unidad', 'Confirmar varias unidades; registro + foto del edificio'],
        ['Lugar claramente cerrado de forma permanente', 'Dirección incorrecta → Dirección cerrada permanentemente', 'Número + prueba del cierre permanente'],
        ['Negocio cerrado permanentemente', 'Dirección incorrecta → Dirección cerrada permanentemente', 'Opción del sistema + prueba del cierre'],
        ['Negocio en almuerzo o fuera de horario', 'Sin acceso → Negocio cerrado', 'Fachada + horario + estado de cierre'],
        ['Destinatario confirmado como mudado', 'Sin acceso → Destinatario se mudó', 'Número + aviso de mudanza o información del lugar'],
        ['Sin código, perro agresivo / ataque de perro, carretera cerrada, tiroteo u otro riesgo de seguridad imprevisto', 'Sin acceso → Otro', 'Motivo específico escrito + foto válida'],
        ['Base militar / APO / FPO / DPO', 'Dirección militar / postal → Dirección militar', 'Pantalla completa de la dirección + prueba obtenida legalmente'],
        ['Oficina de USPS / PO Box', 'Dirección militar / postal → Dirección de oficina postal', 'Pantalla completa + señal de la oficina / prueba de la dirección'],
      ],
    },
  },
  {
    id: 'delivery-failure-pod-examples', title: 'Ejemplos correctos de POD', images: [],
    sop: {
      type: 'evidence',
      intro: 'Los ejemplos muestran el conjunto de etiqueta del paquete, vivienda o edificio completo y número de calle o unidad. No significa que todos los motivos puedan enviarse solo con estas imágenes.',
      examples: [
        { title: 'Casa independiente', image: sopImage(1, 'Etiqueta, casa completa y número para una vivienda independiente') },
        { title: 'Apartamento', image: sopImage(2, 'Etiqueta, entrada del edificio y número de unidad para un apartamento') },
      ],
    },
  },
  {
    id: 'delivery-failure-compliance', title: 'Control y requisitos de devolución', images: [],
    sop: {
      type: 'table', columns: ['Incumplimiento', 'Criterio de gestión'],
      rows: [
        ['Tipo de fallo incorrecto', 'El jefe de flota organiza la formación y exige corregir la conducta.'],
        ['POD falso o imagen negra subida deliberadamente', 'Penalización de USD 100 según la norma original.'],
        ['Paquete no devuelto a tiempo', 'Los paquetes no entregables deben devolverse en los 3 días posteriores a la recogida. Un paquete atrasado se considera perdido y se compensa como pérdida.'],
      ],
    },
  },
]

const locales = { zh, en, es }

export const getDeliveryFailureSopProcedures = (language = 'zh') => locales[language] ?? zh
