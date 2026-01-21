
import { CloudService, ProductHighlight, CaseStudy, HardwareItem, SystemItem } from './types';

export const MICROSOFT_SOLUTIONS = [
  {
    id: 'm365',
    title: 'Modern Workplace',
    subtitle: 'Microsoft 365 & Copilot',
    description: '通过 AI 驱动的协同工具重塑办公体验。从企业邮箱到 Copilot 助手，助力组织实现真正的数字化办公转型。',
    icon: 'https://img.icons8.com/color/96/microsoft-365.png',
    features: ['Copilot 效率套件', 'Teams 协作空间', '高级信息安全保护']
  },
  {
    id: 'azure',
    title: 'Azure Cloud',
    subtitle: '智能云基座与 AI 模型',
    description: '提供企业级 IaaS 与 PaaS 服务。支持 OpenAI 模型私有化部署、高可用架构及全球内容分发。',
    icon: 'https://img.icons8.com/color/96/azure-1.png',
    features: ['Azure OpenAI 服务', '混合云架构设计', '全球边缘计算']
  },
  {
    id: 'security',
    title: 'Security & Trust',
    subtitle: '全域安全与零信任体系',
    description: '结合 Microsoft Sentinel 与 Defender，为企业构建从身份验证到数据链路的全程安全防护壁垒。',
    icon: 'https://img.icons8.com/color/96/microsoft-admin.png',
    features: ['零信任安全架构', '合规性实时监测', '威胁检测与响应']
  },
  {
    id: 'managed',
    title: 'Managed Services',
    subtitle: '24/7 全托管专家支持',
    description: '提供资深架构师级别的一站式云代管服务，包括实时监控、自动扩容与成本优化建议。',
    icon: 'https://img.icons8.com/fluency/96/online-support.png',
    features: ['多云环境统一治理', '架构深度调优', '企业级 SLA 保障']
  }
];

export const MICROSOFT_CASES = [
  {
    id: 'ms-case-1',
    industry: '智能制造',
    product: 'AZURE AI + IOT',
    title: '某全球 500 强制造企业云端转型',
    description: '通过 Azure IoT Hub 与 OpenAI 模型，实现设备预测性维护，降低非计划停机时间。',
    metric: '25% 停机缩减',
    icon: 'https://img.icons8.com/color/96/azure-1.png',
    accent: '#3B82F6' // 柔和蓝
  },
  {
    id: 'ms-case-2',
    industry: '现代金融',
    product: 'M365 + COPILOT',
    title: '头部券商现代化办公协作升级',
    description: '全员部署 Microsoft 365 与 Copilot，通过 AI 自动生成投研周报，研究效率大幅提升。',
    metric: '40% 效率提升',
    icon: 'https://img.icons8.com/color/96/microsoft-365.png',
    accent: '#F97316' // 柔和橙
  },
  {
    id: 'ms-case-3',
    industry: '能源化工',
    product: 'AZURE OPENAI',
    title: '智慧能源安全生产管控平台',
    description: '利用 Azure OpenAI 识别生产安全隐患报告，实现风险预警自动化，响应速度倍增。',
    metric: '200% 响应加速',
    icon: 'https://img.icons8.com/color/96/bot.png',
    accent: '#84CC16' // 柔和绿
  },
  {
    id: 'ms-case-4',
    industry: '新零售',
    product: 'DYNAMICS 365 + AI',
    title: '知名快消品牌供应链智能预测',
    description: '集成 Dynamics 365 与机器学习模型，实现全渠道库存实时联动，优化周转率。',
    metric: '35% 周转优化',
    icon: 'https://img.icons8.com/color/96/microsoft-dynamics-365.png',
    accent: '#06B6D4' // 柔和青
  },
  {
    id: 'ms-case-5',
    industry: '医疗健康',
    product: 'MIXED REALITY + AZURE',
    title: '智慧医疗远程专家协作系统',
    description: '通过 HoloLens 2 与 Azure 渲染服务，实现手术现场远程指导，降低误操作风险。',
    metric: '15% 风险降低',
    icon: 'https://img.icons8.com/color/96/hololens.png',
    accent: '#8B5CF6' // 柔和紫
  },
  {
    id: 'ms-case-6',
    industry: '现代物流',
    product: 'AZURE DIGITAL TWINS',
    title: '自动化分拣中心数字孪生',
    description: '构建物流园区数字孪生模型，模拟最优配送路径，物流综合能效比显著提升。',
    metric: '22% 能效提升',
    icon: 'https://img.icons8.com/color/96/cloud-lighting.png',
    accent: '#EAB308' // 柔和金
  }
];

export const CLOUD_SERVICES: CloudService[] = [
  { id: 'azure', name: 'Azure', icon: 'https://img.icons8.com/color/96/azure-1.png', category: 'public', description: 'Enterprise cloud by Microsoft' },
  { id: 'aws', name: 'AWS', icon: 'https://img.icons8.com/color/96/amazon-web-services.png', category: 'public', description: 'World leading cloud platform' },
  { id: 'baidu', name: 'Baidu Cloud', icon: 'https://img.icons8.com/fluency/96/cloud-lighting.png', category: 'public', description: 'Intelligent cloud services & AI' },
  { id: 'tencent', name: 'Tencent Cloud', icon: 'https://img.icons8.com/fluency/96/cloud-link.png', category: 'public', description: 'Leading cloud services in China' },
  { id: 'm365', name: 'Microsoft 365', icon: 'https://img.icons8.com/color/96/microsoft-365.png', category: 'software', description: 'Office productivity suite' },
  { id: 'wps', name: '金山云办公', icon: 'https://img.icons8.com/color/96/wps-office.png', category: 'software', description: 'Leading office tools' },
  { id: 'adobe', name: 'Adobe', icon: 'https://img.icons8.com/color/96/adobe-creative-cloud.png', category: 'software', description: 'Creative design software' },
  { id: 'cad', name: 'AutoCAD', icon: 'https://img.icons8.com/color/96/autodesk-autocad.png', category: 'software', description: 'Precision engineering' },
];

export const SYSTEM_ITEMS: SystemItem[] = [
  { id: 'smart-security', name: '智慧安防', icon: 'https://img.icons8.com/fluency/96/security-camera.png', category: 'solution', description: 'AI 驱动的全域安全感知系统' },
  { id: 'digital-human', name: '数字人', icon: 'https://img.icons8.com/fluency/96/human-head.png', category: 'solution', description: '24/7 交互式智能数字大使' },
  { id: 'smart-factory', name: '智慧工厂', icon: 'https://img.icons8.com/fluency/96/factory.png', category: 'solution', description: '工业 4.0 智能制造与物联集成' },
  { id: 'digital-gov', name: '数字政务平台', icon: 'https://img.icons8.com/fluency/96/museum.png', category: 'solution', description: '高效、透明的数字化城市管理' },
];

export const SOFTWARE_PILLARS: ProductHighlight[] = [
  {
    tag: "架构核心 01: 项目中心",
    title: "成果不沉淀，AI 没意义",
    subtitle: "从“对话型”到“项目型”的本质跨越",
    description: "大多数 AI 聊完即走，成果无法闭环。Super Magic 以「项目」为核心容器，所有文件、决策与产出自动沉淀，构建一个永不离线、持续进化的企业级知识操作系统。",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
    isImageLeft: false
  },
  {
    tag: "架构核心 02: 多 Agent 协作",
    title: "三位一体的 AI 团队",
    subtitle: "分析、执行、校验，组团干活",
    description: "不再是单一模型的单打独斗。Super Magic 同时编排三组角色：负责深度洞察的分析员、负责落地执行的执行官、负责质量关口的校验卫士。多 Agent 协同工作，产出具有专业级确定性的结果。",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    isImageLeft: true
  },
  {
    tag: "架构核心 03: 双模驱动",
    title: "确定性生产 vs 非确定性探索",
    subtitle: "Workflow 驱动业务，Agent 驱动增长",
    description: "我们解决了 AI 应用的两极化难题。左手是流动的、充满创意的 Agent 探索模式（解决复杂问题）；右手是结构化的、稳如磐石的 Workflow 自动化模式（解决标准化业务）。双模并行，既保证稳健产出，又释放无限创意。",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    isImageLeft: false
  },
  {
    tag: "架构核心 04: 全域集成与弹性部署",
    title: "部署随心，模型智选",
    subtitle: "海内外全系模型兼容 & 智能混合路由",
    description: "独创「模型智能链路」调度技术。Super Magic 无缝整合 OpenAI GPT-4o, Claude 3.5, Gemini 1.5 等国际顶尖模型，以及 DeepSeek-V3, Qwen-Max, Zhipu GLM-4 等国内卓越模型。系统根据任务敏感度与合规需求，在“私有化本地模型”与“高性能公有云模型”间动态切换，实现主权安全与效率的极致对等。",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    isImageLeft: true
  }
];

export const HARDWARE_PILLARS: ProductHighlight[] = [
  {
    tag: "智能硬件 01: Super Magic Note",
    title: "触手及的企业灵感采集器",
    subtitle: "极致轻薄，贴合手机背部的 AI 伴侣",
    description: "专为职场精英打造。采用超薄机身设计，通过磁吸完美贴合于手机背部，随时记录电话通话、商务洽谈。一键高清录音，实时同步至 Super Magic 平台，自动完成摘要提取与待办梳理。",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=800",
    isImageLeft: false
  },
  {
    tag: "智能硬件 02: Mag-Pad",
    title: "工业级现场指挥终端",
    subtitle: "三防设计，赋能一线工程师",
    description: "专为复杂工业环境打造。 Mag-Pad 集成了高性能边缘算力，可在无网环境下实时运行视觉识别算法，助力巡检人员快速定位设备故障并调取 AI 维护手册。",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800",
    isImageLeft: true
  }
];

export const HONORS = [
  { icon: "🏆", title: "国家级高新技术企业" },
  { icon: "📜", title: "ISO9001 质量管理体系认证" },
  { icon: "🛡️", title: "信息安全等级保护三级" },
  { icon: "💡", title: "年度最具创新力 AI 企业" },
  { icon: "🌐", title: "微软年度核心合作伙伴" },
  { icon: "💎", title: "粤港澳大湾区独角兽潜力奖" },
];

export const CLIENT_LOGOS = [
  { name: "Huawei", logo: "https://img.icons8.com/color/96/huawei.png" },
  { name: "BYD", logo: "https://img.icons8.com/color/96/byd.png" },
  { name: "Tencent", logo: "https://img.icons8.com/color/96/tencent-qq.png" },
  { name: "Midea", logo: "https://img.icons8.com/color/96/midea.png" },
  { name: "DJI", logo: "https://img.icons8.com/color/96/dji.png" },
  { name: "Xiaomi", logo: "https://img.icons8.com/color/96/xiaomi.png" },
];

export const SOFTWARE_CASES: CaseStudy[] = [
  {
    id: "sc-1",
    company: "某大型跨国制造集团",
    logo: "https://img.icons8.com/color/96/factory.png",
    stats: "效率提升 300%",
    description: "通过部署 Super Magic 智能工作流，该集团实现了全球供应链数据的实时自动化分析与决策建议，将订单处理周期从 3 天缩短至 4 小时。",
    videoThumb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "sc-2",
    company: "头部金融证券公司",
    logo: "https://img.icons8.com/color/96/bank.png",
    stats: "合规率 99.9%",
    description: "利用 Super Magic 私有化知识库与多 Agent 协作系统，自动解析每日上万份投研报告，并进行风险预警合规性检查。",
    videoThumb: "https://images.unsplash.com/photo-1551288049-bbda38656a73?auto=format&fit=crop&q=80&w=800"
  }
];

export const HARDWARE_CASES: CaseStudy[] = [
  {
    id: "hc-1",
    company: "智慧政务政务中心",
    logo: "https://img.icons8.com/color/96/government.png",
    stats: "处理量 +150%",
    description: "全员配备 Super Magic Note，在窗口服务中实时记录并分析民众诉求，自动生成工单，极大地提升了政务办理效率与透明度。",
    videoThumb: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "hc-2",
    company: "能源化工监测站",
    logo: "https://img.icons8.com/color/96/oil-rig.png",
    stats: "零安全事故",
    description: "通过 Mag-Pad 与边缘视觉 Agent 集成，实现对高危区域的 24 小时无人值守式巡检与环境监测预警。",
    videoThumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  }
];

export const HARDWARE: HardwareItem[] = [
  { id: "h1", name: "Mag-Box 边缘计算站", spec: "128核 CPU / 4x RTX 4090 / IP67 防护", image: "https://images.unsplash.com/photo-1558494949-ef8b5655d939?auto=format&fit=crop&q=80&w=800" },
  { id: "h2", name: "Super Magic Note Pro", spec: "磁吸超薄 / 4麦克风阵列 / 30天待机", image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=800" },
  { id: "h3", name: "Mag-Pad 工业平板", spec: "12.9寸 2K 屏 / 5G 全频段 / 防摔耐腐蚀", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800" },
  { id: "h4", name: "Vision Agent 摄像头", spec: "4K 超清 / 边缘 AI 识别 / 红外热成像", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800" },
];
