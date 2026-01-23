
import { CloudService, ProductHighlight, CaseStudy, HardwareItem, SystemItem } from './types';

// 混合云场景化解决方案矩阵 (Scene 01 - 05)
export const CLOUD_SCENARIO_SOLUTIONS = [
  {
    id: 'ms-ai-landing',
    sceneNum: '01',
    title: 'Azure × M365 × Copilot 企业级 AI 落地',
    problem: '想用 Copilot 和 AI 提升员工效率，但必须保证数据安全、权限可控、合规可审计。',
    summary: '我们帮助企业，把 Azure 的 AI 能力，真正变成员工每天都在用、且安全可控的生产力工具。',
    value: [
      '以 Microsoft Azure 作为 AI 与数据底座',
      '基于 Microsoft 365 的真实办公场景引入 AI',
      '围绕 Microsoft Copilot 进行企业级启用与治理',
      '同步设计身份、权限与安全策略，确保 AI 使用可控、安全、可持续'
    ],
    targetScenarios: [
      'Copilot 企业级落地',
      '内部知识库 / 文档 / 流程的 AI 助手化',
      'AI 提升办公效率，同时不引入新的安全风险'
    ],
    platforms: [
      { name: 'Azure', icon: 'https://img.icons8.com/color/48/azure-1.png' },
      { name: 'M365', icon: 'https://img.icons8.com/fluency/48/microsoft-365.png' },
      { name: 'Copilot', icon: 'https://img.icons8.com/fluency/48/microsoft-copilot.png' }
    ],
    accent: '#0078d4'
  },
  {
    id: 'elastic-concurrency',
    sceneNum: '02',
    title: '高并发与弹性业务系统',
    problem: '业务面临突发百倍流量波动，且核心交易数据受监管要求必须存储在国内节点，同时需确保海外分支访问不卡顿。',
    summary: '解决微软云在国内部分物理区域覆盖及等保三级合规层面的灵活性不足，通过腾讯云/AWS 混合部署实现弹性。',
    value: [
      '利用国内云广泛的可用区实现三级等保合规闭环',
      '架构层面设计跨云弹性伸缩与多源数据同步',
      '针对大促/活动场景设计极速扩容预案'
    ],
    platforms: [
      { name: 'Tencent', icon: 'https://img.icons8.com/fluency/48/cloud-link.png' },
      { name: 'AWS', icon: 'https://img.icons8.com/color/48/amazon-web-services.png' }
    ],
    accent: '#FF9900'
  },
  {
    id: 'realtime-video',
    sceneNum: '03',
    title: '实时互动与音视频系统',
    problem: '全球协同中，东南亚或国内二三线城市访问微软 Teams/云视频存在卡顿，需在极差网络环境下保障低延迟通讯。',
    summary: '依托腾讯云全球领先的 TRTC 协议与边缘节点，补齐国际平台在边缘网络覆盖与本地化协议优化上的短板。',
    value: [
      '依托腾讯云 CDN/边缘节点实现毫秒级推流',
      '针对复杂网络环境进行协议层面的丢包补偿优化',
      '全链路音视频监控与异常节点自动调度'
    ],
    platforms: [
      { name: 'Tencent', icon: 'https://img.icons8.com/fluency/48/cloud-link.png' }
    ],
    accent: '#00A4FF'
  },
  {
    id: 'ai-data-driven',
    sceneNum: '04',
    title: 'AI 能力与数据驱动业务',
    problem: '国内业务需适配经过网信办备案的国产大模型，且需利用百度智能云在中文语义理解及本地行业数据治理的独特优势。',
    summary: '在海外沿用微软/谷歌算力的同时，国内侧引入百度文心一言等合规能力，构建双循环的 AI 技术架构。',
    value: [
      '百度文心系列大模型国内合规落地方案',
      '利用国产 AI 算力底座加速本地数据处理',
      '双引擎 AI 路由架构，实现国内外能力无缝切换'
    ],
    platforms: [
      { name: 'Baidu', icon: 'https://img.icons8.com/color/48/baidu.png' },
      { name: 'Google Cloud', icon: 'https://img.icons8.com/color/48/google-cloud.png' }
    ],
    accent: '#4285F4'
  },
  {
    id: 'industry-compliance',
    sceneNum: '05',
    title: '行业型系统与本地化需求',
    problem: '政府、国资等强监管行业要求系统架构必须完全国产化或本地私有化部署，国际公有云难以满足物理隔离需求。',
    summary: '深耕智慧政务与智能制造，结合百度云/腾讯云的信创底座，提供定制化的行业合规架构与长期维护。',
    value: [
      '完全符合国产信创标准的系统集成方案',
      '行业场景深度理解，重视数据主权与物理隔离',
      '长期稳定的本地化 MSP 代管运维服务'
    ],
    platforms: [
      { name: 'Baidu', icon: 'https://img.icons8.com/color/48/baidu.png' },
      { name: 'Tencent', icon: 'https://img.icons8.com/fluency/48/cloud-link.png' }
    ],
    accent: '#00D1FF'
  }
];

export const MICROSOFT_SCENARIOS = [
  {
    id: 'infra',
    title: '企业 IT 底座与核心上云',
    subtitle: 'Enterprise Foundation',
    description: '承载企业生产系统的关键应用。从 Windows Server/SQL Server 的平滑迁移，到 Azure IaaS/PaaS 的高可用架构设计。',
    icon: 'https://img.icons8.com/color/96/azure-1.png',
    accent: '#0078d4',
    features: ['核心数据库安全迁移', '核心 ERP/CRM 稳健运行', 'VMware 在线热迁移']
  },
  {
    id: 'hybrid',
    title: '混合云与统一身份中枢',
    subtitle: 'Hybrid & Identity',
    description: '锋范技术杀手锏：利用 Azure Arc 管理本地数据中心，通过 Entra ID 构建全球统一身份治理体系。',
    icon: 'https://img.icons8.com/fluency/96/microsoft-admin.png',
    accent: '#00a4ef',
    features: ['Azure Arc 跨云治理', 'Entra ID 零信任身份治理', '本地与云端资源映射']
  },
  {
    id: 'ai-data',
    title: '企业级 AI 与数据中枢',
    subtitle: 'AI & Data Fabric',
    description: '基于 Azure OpenAI 的大模型私有化部署。结合 Microsoft Fabric 实现从数据集成到 AI 智能看板的一体化落地。',
    icon: 'https://img.icons8.com/fluency/96/microsoft-copilot.png',
    accent: '#7fba00',
    features: ['Azure OpenAI 私有部署', 'Microsoft Fabric 全栈数据', '智能看板调度']
  },
  {
    id: 'workplace',
    title: '办公生态与业务自动化',
    subtitle: 'Modern Workplace',
    description: '整合 Microsoft 365 与 Teams 协作基座。利用 Power Platform 低代码工具，将 IT 流程直接转化为业务生产力。',
    icon: 'https://img.icons8.com/fluency/96/microsoft-365.png',
    accent: '#f25022',
    features: ['Teams 跨区域协同', 'Power Apps 流程定制', 'Copilot 生产力增强']
  },
  {
    id: 'security',
    title: '全域安全与全球合规',
    subtitle: 'Security & Compliance',
    description: 'CIO 关注的核心。利用 Defender 与 Sentinel 构建全栈防御，支持全球业务合规及中国三级等保。',
    icon: 'https://img.icons8.com/color/96/checked-shield.png',
    accent: '#ffb900',
    features: ['Defender 全端防护', 'Sentinel 威胁检测', '全球数据主权合规']
  }
];

export const WHY_US_FEATURES = [
  {
    id: 'cert',
    title: '微软云深度认证',
    desc: '微软年度核心合作伙伴，获 Azure AI 及 Modern Workplace 专家级能力认证。',
    icon: 'https://img.icons8.com/color/96/microsoft.png'
  },
  {
    id: 'multi-cloud',
    title: '多云架构设计能力',
    desc: '深度整合异构云资源，提供跨云迁移、多云协同及统一代管 (MSP) 服务。',
    icon: 'https://img.icons8.com/fluency/96/network.png'
  },
  {
    id: 'experience',
    title: '行业解决方案经验',
    desc: '深耕 10+ 垂直行业，沉淀百余项大中型政企数字化转型实战全案。',
    icon: 'https://img.icons8.com/fluency/96/briefcase.png'
  },
  {
    id: 'compliance',
    title: '本地 + 国际合规支持',
    desc: '覆盖三级等保与全球合规标准，保障出海与本地化业务的数据主权安全。',
    icon: 'https://img.icons8.com/fluency/96/security-checked.png'
  }
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
    tag: "架构核心 02: 工作流引擎",
    title: "标准化是效率的唯一基石",
    subtitle: "Agentic Workflow 业务编排",
    description: "将专家的经验拆解为可复制的 AI 工作流。不论是简历初筛还是复杂的周报编写，Super Magic 确保每一个环节都有确定的、高标准的产出。",
    image: "https://images.unsplash.com/photo-1551288049-bbda38656a73?auto=format&fit=crop&q=80&w=800",
    isImageLeft: true
  },
  {
    tag: "架构核心 03: 私有知识库",
    title: "让 AI 拥有企业灵魂",
    subtitle: "RAG 增强检索与数据主权",
    description: "拒绝通用的“假大空”回答。基于企业私有文档、ERP 数据实时调取，让 AI 真正懂您的产品、懂您的流程，且数据物理隔离，安全无忧。",
    image: "https://images.unsplash.com/photo-1558494949-ef8b5655d939?auto=format&fit=crop&q=80&w=800",
    isImageLeft: false
  },
  {
    tag: "架构核心 04: 多模路由调度",
    title: "不选最贵的，只选最合适的",
    subtitle: "智能混合算力分发",
    description: "Super Magic 会根据任务复杂度自动切换模型。简单翻译用 DeepSeek，逻辑推理用 GPT-4o，在保持极致性能的同时，为您降低 60% 的算力成本。",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=800",
    isImageLeft: true
  },
  {
    tag: "架构核心 05: 软硬协同生态",
    title: "打破屏幕的边界",
    subtitle: "从 Cloud 到 Edge 的无缝集成",
    description: "Super Magic 不止是屏幕里的对话框。它与 Magic Note 等硬件深度打通，实现物理世界的语音、图像数据实时上云，构建全场景的 AI 感知网。",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=800",
    isImageLeft: false
  }
];

export const HARDWARE_PILLARS: ProductHighlight[] = [
  {
    tag: "智能硬件 01: Super Magic Note",
    title: "触手及的企业灵感采集器",
    subtitle: "极致轻薄，贴合手机背部的 AI 伴侣",
    description: "专为职场精英打造。采用超薄机身设计，通过磁吸完美贴合于手机背部，随时记录电话通话、商务洽谈。一键高清录音，实时同步至 Super Magic platform，自动完成摘要提取与待办梳理。",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=800",
    isImageLeft: false
  }
];

export const HONORS = [
  { icon: "🏆", title: "国家级高新技术企业" },
  { icon: "📜", title: "ISO9001 质量管理体系认证" },
  { icon: "🛡️", title: "信息安全等级保护三级" },
  { icon: "💡", title: "年度最具创新力 AI 企业" },
  { icon: "🌐", title: "微软年度核心合作伙伴" },
];

export const HARDWARE: HardwareItem[] = [
  { id: "h1", name: "Mag-Box 边缘计算站", spec: "128核 CPU / 4x RTX 4090 / IP67 防护", image: "https://images.unsplash.com/photo-1558494949-ef8b5655d939?auto=format&fit=crop&q=80&w=800" },
  { id: "h2", name: "Super Magic Note Pro", spec: "磁吸超薄 / 4麦克风阵列 / 30天待机", image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?auto=format&fit=crop&q=80&w=800" },
];

// FIX: Added missing exported constants used by Navbar, Home, and CaseStudy components.

export const CLOUD_SERVICES: CloudService[] = [
  { id: 'azure', name: 'Microsoft Azure', icon: 'https://img.icons8.com/color/48/azure-1.png', category: 'public', description: '企业级云底座与 AI 服务' },
  { id: 'aws', name: 'Amazon Web Services', icon: 'https://img.icons8.com/color/48/amazon-web-services.png', category: 'public', description: '全球领先的云基础设施' },
  { id: 'google', name: 'Google Cloud', icon: 'https://img.icons8.com/color/48/google-cloud.png', category: 'public', description: '领先的 AI 与数据分析能力' },
  { id: 'tencent', name: 'Tencent Cloud', icon: 'https://img.icons8.com/fluency/48/cloud-link.png', category: 'public', description: '国内领先的音视频与社交云' },
  { id: 'baidu', name: 'Baidu AI Cloud', icon: 'https://img.icons8.com/color/48/baidu.png', category: 'public', description: '国产大模型与智能底座' },
  { id: 'adobe', name: 'Adobe Creative Cloud', icon: 'https://img.icons8.com/color/48/adobe-creative-cloud.png', category: 'software', description: '创意设计与数字营销专家' },
  { id: 'cad', name: 'Autodesk CAD', icon: 'https://img.icons8.com/color/48/autocad.png', category: 'software', description: '工业设计与 3D 建模基准' },
  { id: 'office', name: 'Microsoft 365', icon: 'https://img.icons8.com/fluency/48/microsoft-365.png', category: 'software', description: '现代化办公与协作套件' }
];

export const MICROSOFT_CASES: CaseStudy[] = [
  { 
    id: 'ms-case-1', 
    industry: '互联网旅游', 
    product: 'GitHub Copilot',
    title: '某领航旅游服务商 AI 研发转型', 
    description: '引入 GitHub Copilot 辅助代码编写，自动生成单元测试，提升研发质量。', 
    metric: '30% 研发加速',
    icon: 'https://img.icons8.com/color/48/github--v1.png',
    accent: '#0078d4'
  },
  { 
    id: 'ms-case-2', 
    industry: '智慧零售', 
    title: '某新零售平台数字化 OS 出海', 
    product: 'Azure Global',
    description: '利用 Azure 全球区域覆盖，支撑万级线下门店实时库存联动与线上交易。', 
    metric: '70% 部署缩减',
    icon: 'https://img.icons8.com/color/48/azure-1.png',
    accent: '#00a4ef'
  },
  { 
    id: 'ms-case-3', 
    industry: '游戏出海', 
    title: '某跨国手游运营商高并发基座', 
    product: 'Azure High Performance',
    description: '通过云端高性能存储与加速网络，解决实时竞技延时难题，实现全球同服。', 
    metric: '延时 < 50ms',
    icon: 'https://img.icons8.com/color/48/controller.png',
    accent: '#7fba00'
  }
];

export const SOFTWARE_CASES: CaseStudy[] = [
  {
    id: 'sw-case-1',
    company: '华润置地',
    logo: 'https://img.icons8.com/color/48/real-estate.png',
    title: '项目管理数字化',
    description: '通过 Super Magic 深度融入业务核心后的确定性产出。',
    stats: '95',
    metric: '95%',
    videoThumb: 'https://images.unsplash.com/photo-1551288049-bbda38656a73?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'sw-case-2',
    company: '比亚迪',
    logo: 'https://img.icons8.com/color/48/car.png',
    title: 'AI 驱动供应链',
    description: '不谈虚词，只看数据。见证 Super Magic 深度融入业务核心后的确定性产出。',
    stats: '88',
    metric: '88%',
    videoThumb: 'https://images.unsplash.com/photo-1551288049-bbda38656a73?auto=format&fit=crop&q=80&w=1200'
  }
];

export const HARDWARE_CASES: CaseStudy[] = [
  {
    id: 'hw-case-1',
    company: '广汽埃安',
    logo: 'https://img.icons8.com/color/48/factory.png',
    title: '智能车间监测',
    description: '通过 Super Magic Note 实现前端数据的精准捕捉与数字化闭环。',
    stats: '92',
    metric: '92%',
    videoThumb: 'https://images.unsplash.com/photo-1551288049-bbda38656a73?auto=format&fit=crop&q=80&w=1200'
  }
];
