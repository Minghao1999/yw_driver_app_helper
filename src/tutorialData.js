const image = (number, alt) => ({
  src: `/tutorial/image${number}.${number === 19 ? 'jpg' : 'png'}`,
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
    entry: [image(1, '首页中司机管理入口')],
    procedures: [
      {
        id: 'add-driver',
        title: '如何添加新司机',
        summary: '创建司机账号，并设置名称、密码和启用状态。',
        steps: ['在司机管理页点击“添加司机”', '输入名称', '输入密码', '选择启用或停用状态', '点击“保存并添加”'],
        images: [image(2, '司机管理页中的添加司机按钮'), image(3, '添加司机表单与保存按钮')],
      },
      {
        id: 'edit-driver',
        title: '如何修改司机信息',
        summary: '从司机列表进入编辑页，更新密码或状态。',
        steps: ['在司机列表中点击需要修改信息的司机', '如需修改密码则输入新密码；不修改时可留空', '修改启用或停用状态', '点击“保存”'],
        images: [image(4, '在司机列表中选择需要修改的司机'), image(5, '编辑司机页面中的密码状态与保存操作')],
      },
      {
        id: 'search-driver',
        title: '如何查询司机',
        summary: '支持按账号精确查询，或按名称进行模糊查询。',
        steps: ['输入司机账号或名称', '点击“查询”'],
        note: '账号需要精确查询；名称可以模糊查询。',
        images: [image(6, '司机管理页面的查询输入框与查询按钮')],
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
    entry: [image(7, '首页中的路线拆分入口'), image(8, '待签到分箱中的拆分分箱按钮')],
    procedures: [
      {
        id: 'split-sequence',
        title: '如何按顺序拆分分箱',
        summary: '指定点数范围和司机，按点位顺序完成拆分。',
        steps: ['点击“按顺序拆分”', '输入拆分点数', '选择司机', '点击勾选按钮确认', '如需继续拆分，可再次选择点数范围', '指定司机', '拆分完成后点击“应用”'],
        images: [image(9, '拆分总览中的按顺序拆分按钮'), image(10, '输入拆分点数并选择司机'), image(11, '继续选择点数范围并应用拆分')],
        children: [
          {
            id: 'one-tap-split',
            title: '如何使用一键拆',
            summary: '可按司机人数均分，也可按包裹数量均分。',
            steps: ['点击地图右侧“一键拆”', '选择“按司机均分”并输入司机人数，或选择“按包裹数量均分”并输入包裹数量', '点击“确定”', '点击“应用”'],
            images: [image(12, '一键拆中按司机均分的操作'), image(13, '一键拆中按包裹数量均分的操作')],
          },
        ],
      },
      {
        id: 'split-area',
        title: '如何按区域拆分分箱',
        summary: '在地图上圈选区域，确认后分配司机。',
        steps: ['点击“按区域拆分”', '在地图上用点画框选择区域', '点击勾选按钮并分配司机', '点击“应用”'],
        note: '可点击不同分箱标签查看结果；如需重做，可点击删除后重新操作。',
        images: [image(14, '拆分总览中的按区域拆分按钮'), image(15, '在地图中圈选区域并分配司机'), image(16, '按区域拆分后的分箱结果与删除入口')],
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
    entry: [image(17, '首页中的路线规划入口'), image(18, '待签到分箱中的路线规划按钮'), image(19, '路线规划页面中的已保存方案')],
    procedures: [
      {
        id: 'split-fence',
        title: '如何拆分围栏',
        summary: '在围栏区域内画线，完成围栏拆分。',
        steps: ['进入往期已保存方案', '在已有区域内以点画线', '点击“完成”'],
        images: [image(20, '在已有区域内画线并点击完成'), image(21, '围栏拆分后的效果')],
      },
      {
        id: 'reorder-fence',
        title: '如何修改围栏顺序',
        summary: '通过拖拽顶部围栏标签调整顺序。',
        steps: ['长按顶部围栏标签', '拖拽到目标位置后松开'],
        images: [image(22, '长按并拖拽顶部标签修改围栏顺序')],
      },
      {
        id: 'set-start-end',
        title: '如何在围栏内更改起始点和终点',
        summary: '依次设置每个围栏的起点和终点。',
        steps: ['点击“设起点”', '点击围栏内任意位置设置起点', '点击“设终点”', '点击围栏内任意位置设置终点', '点击“路线规划”', '规划成功后点击“应用”'],
        note: '必须为每一个围栏设置终点；上一个围栏的终点会成为下一个围栏的起点。',
        images: [image(23, '在围栏内设置起点和终点'), image(24, '多个围栏设置终点并应用路线规划')],
      },
      {
        id: 'map-provider',
        title: '如何换地图供应商',
        summary: '在底部供应商菜单中切换地图来源。',
        steps: ['点击底部当前地图供应商名称', '在列表中选择 NEXT_BILLION、GOOGLE 或 OPTIMO'],
        images: [image(25, '底部地图供应商切换入口'), image(26, '地图供应商选择列表')],
      },
      {
        id: 'save-plan',
        title: '如何保存和另存为',
        summary: '覆盖当前方案，或保留原方案并新建副本。',
        steps: ['点击“保存”可覆盖原方案', '点击“另存为”可新建方案'],
        images: [image(27, '点击保存覆盖原方案'), image(28, '点击另存为新建方案')],
      },
    ],
  },
]

export const allProcedureCount = chapters.reduce(
  (total, chapter) => total + chapter.procedures.reduce(
    (chapterTotal, procedure) => chapterTotal + 1 + (procedure.children?.length ?? 0),
    0,
  ),
  0,
)
