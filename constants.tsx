
import { CloudService, ProductHighlight, CaseStudy, HardwareItem, SystemItem } from './types';

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
  { id: 'ipc', name: '工控机定制', icon: 'https://img.icons8.com/fluency/96/computer-tower.png', category: 'hardware', description: 'Customized industrial PCs' },
  { id: 'oem', name: 'OEM 一体机', icon: 'https://img.icons8.com/fluency/96/monitor.png', category: 'hardware', description: 'All-in-one hardware solutions' },
  { id: 'factory', name: '智能工厂', icon: 'https://img.icons8.com/fluency/96/factory.png', category: 'solution', description: 'Smart manufacturing integration' },
  { id: 'campus', name: '智慧园区', icon: 'https://img.icons8.com/fluency/96/city.png', category: 'solution', description: 'IoT campus management' },
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
    title: "触手可及的企业灵感采集器",
    subtitle: "极致轻薄，贴合手机背部的 AI 伴侣",
    description: "专为职场精英打造。采用超薄机身设计，通过磁吸完美贴合于手机背部，随时记录电话通话、商务洽谈。一键高清录音，实时同步至 Super Magic 云端进行多角色话者分离，它是您形影不离的数字哨兵。",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800",
    isImageLeft: false
  },
  {
    tag: "集成优势 02: 营销与销售赋能",
    title: "让每一场销售对话都成为企业资产",
    subtitle: "全自动 CRM 填充与销售策略分析",
    description: "在销售场景下，Super Magic Note 能精准捕获客户痛点。录音结束后，系统自动提取商机信息并同步至 CRM，同时生成销售复盘建议。",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    isImageLeft: true
  },
  {
    tag: "技术底座 03: 极智续航",
    title: "30 天超长待机，时刻准备",
    subtitle: "为高强度商务行程量身定制",
    description: "采用超低功耗处理芯片，支持连续 15 小时录音及 30 天待机。配备磁吸闪充，告别电量焦虑。无论身处何地，它都是您包里最可靠、最安静的数字化伙伴。",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
    isImageLeft: false
  },
  {
    tag: "时光沉淀 04: 个人记事助手",
    title: "梳理日常，留住每一份珍贵回忆",
    subtitle: "从业务谈判到温情通话的全面沉淀",
    description: "Super Magic Note 不仅是工作工具，更是您的个人生命记录仪。它能自动整理每日电话沟通内容，将碎片语音转化为结构化时光轴。AI 为您梳理逻辑、沉淀情感，构建一个可追溯、永不褪色的个人数字记忆库。",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
    isImageLeft: true
  }
];

export const SOFTWARE_CASES: CaseStudy[] = [
  {
    id: 'scase1',
    company: '华南智造集团',
    logo: 'https://img.icons8.com/fluency/96/organization.png',
    stats: '效率提升 300%',
    description: '通过 Super Magic 部署私有化知识库，覆盖 50,000+ 份技术文档。将一线工人故障排查时间从 2 小时缩短至 5 分钟，实现了真正意义上的知识资产实时检索与专家经验数字化沉淀。',
    videoThumb: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'scase2',
    company: '全球领航外服',
    logo: 'https://img.icons8.com/fluency/96/conference-call.png',
    stats: '筛选周期缩短 80%',
    description: '构建“神奇招聘流程”，AI 自动解析海量简历并对照 JD 进行多维度评分。日均处理简历从 200 份跃升至 2000 份，HR 仅需参与最后决策面试，将繁琐筛选彻底自动化。',
    videoThumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
  }
];

export const HARDWARE_CASES: CaseStudy[] = [
  {
    id: 'hcase1',
    company: '鼎峰地产销售团队',
    logo: 'https://img.icons8.com/fluency/96/home.png',
    stats: '客诉率降低 40%',
    description: '全员配备 Super Magic Note 记录带看过程。AI 自动复盘销售话术偏差，并为每位客户生成精准需求画像。',
    videoThumb: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'hcase2',
    company: '睿翼法律咨询',
    logo: 'https://img.icons8.com/fluency/96/law.png',
    stats: '笔录效率提升 500%',
    description: '律师使用硬件记录电话咨询，Super Magic 自动生成合规性摘要及后续行动清单，确保法律建议零遗漏。',
    videoThumb: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600'
  }
];

export const HONORS = [
  { title: "国家高新技术企业", detail: "2024年 科技部认定", icon: "🏢" },
  { title: "ISO 9001 质量认证", detail: "国际标准 体系认证", icon: "📜" },
  { title: "AI 卓越创新奖", detail: "2024 年度行业殊荣", icon: "🏆" },
  { title: "20+ 项软件著作权", detail: "核心技术 自主研发", icon: "🛡️" },
  { title: "智能硬件外观专利", detail: "S1系列 设计专利", icon: "🎨" },
  { title: "AAA级 诚信企业", detail: "行业信用 最高等级", icon: "🤝" }
];

export const CLIENT_LOGOS = [
  { name: "中国南方电网", logo: "https://img.icons8.com/color/96/lightning-bolt.png" },
  { name: "华为", logo: "https://img.icons8.com/color/96/huawei.png" },
  { name: "比亚迪", logo: "https://img.icons8.com/color/96/tesla-model-x.png" },
  { name: "腾讯", logo: "https://img.icons8.com/color/96/tencent-qq.png" },
  { name: "格力", logo: "https://img.icons8.com/color/96/air-conditioner.png" },
  { name: "顺丰速运", logo: "https://img.icons8.com/color/96/delivery-man.png" },
  { name: "美的集团", logo: "https://img.icons8.com/color/96/washing-machine.png" },
  { name: "中集集团", logo: "https://img.icons8.com/color/96/cargo-ship.png" },
  { name: "汇丰银行", logo: "https://img.icons8.com/color/96/bank.png" },
  { name: "平安保险", logo: "https://img.icons8.com/color/96/shield.png" },
  { name: "广汽集团", logo: "https://img.icons8.com/color/96/car.png" },
  { name: "三一重工", logo: "https://img.icons8.com/color/96/excavator.png" },
  { name: "阿里巴巴", logo: "https://img.icons8.com/color/96/alibaba.png" },
  { name: "小米集团", logo: "https://img.icons8.com/color/96/xiaomi.png" },
  { name: "京东集团", logo: "https://img.icons8.com/color/96/jd-com.png" },
  { name: "字节跳动", logo: "https://img.icons8.com/color/96/tiktok.png" },
  { name: "联想集团", logo: "https://img.icons8.com/color/96/lenovo.png" },
  { name: "中国移动", logo: "https://img.icons8.com/color/96/antenna.png" }
];

export const PRODUCT_PILLARS = SOFTWARE_PILLARS;
export const CASES = SOFTWARE_CASES;

export const HARDWARE: HardwareItem[] = [
  { id: 'h1', name: 'Super Magic Note S1', spec: 'AI Recorder / 30-Day Standby / MagSafe', image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400' },
  { id: 'h2', name: 'Industrial IPC Gen-X', spec: 'Intel i9 / 64GB RAM / IP67 Rated', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400' },
  { id: 'h3', name: 'Edge Gateway Pro', spec: 'Dual 5G / PoE Support / Metal Case', image: 'https://images.unsplash.com/photo-1558494949-ef8b5655d939?auto=format&fit=crop&q=80&w=400' },
];
