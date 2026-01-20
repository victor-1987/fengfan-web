
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
    tag: "知识资产 02: 企业知识库",
    title: "越用越懂你的企业大脑",
    subtitle: "从海量文档到即刻洞察",
    description: "支持 PDF、Markdown、Notion 及内部数据库的一键连接。AI 会根据您的业务背景进行深度学习，不论是新人入职培训还是复杂的合同合规审查，它都能给出基于“事实”的精准回复。",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=800",
    isImageLeft: true
  },
  {
    tag: "业务自动化 03: 无代码工作流",
    title: "神奇流程 Workflow",
    subtitle: "像搭积木一样编排业务逻辑",
    description: "将验证过的业务 SOP 转化为自动化流水线。无需代码，通过可视化拖拽即可调度 AI 处理复杂的表单解析、数据归纳、邮件自动回复及 CRM 智能更新。",
    image: "https://images.unsplash.com/photo-1454165833767-131f72a10e60?auto=format&fit=crop&q=80&w=800",
    isImageLeft: false
  },
  {
    tag: "协同作战 04: 多 Agent 协作",
    title: "三位一体的 AI 团队",
    subtitle: "分析、执行、校验，组团干活",
    description: "不再是单一模型的单打独斗。Super Magic 同时编排三组角色：负责深度洞察的分析员、负责落地执行的执行官、负责质量关口的校验卫士。多 Agent 协同工作，产出具有专业级确定性的结果。",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    isImageLeft: true
  },
  {
    tag: "安全底座 05: 私有化部署",
    title: "企业级安全保障",
    subtitle: "数据不出内网，安全尽在掌握",
    description: "针对金融、政务等高敏感行业，提供完整的本地化/专有云部署方案。支持国产算力平台，确保所有商业机密与核心数据在物理隔离的环境下稳定运行。",
    image: "https://images.unsplash.com/photo-1558494949-ef8b5655d939?auto=format&fit=crop&q=80&w=800",
    isImageLeft: false
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
    description: "在销售场景下，Super Magic Note 能精准捕获客户痛点。录音结束后，系统自动提取商机信息并同步至 CRM，同时生成销售复盘建议。无需手动录入，让销售人员专注于成交。",
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

export const PRODUCT_PILLARS: ProductHighlight[] = [
  ...SOFTWARE_PILLARS
];

export const CASES: CaseStudy[] = [
  {
    id: 'case1',
    company: '华南智造集团',
    logo: 'https://img.icons8.com/fluency/96/organization.png',
    stats: '效率提升 300%',
    description: '通过 Super Magic 部署私有化知识库，覆盖 50,000+ 份技术文档。实现了知识资产实时检索与专家经验数字化沉淀。',
    videoThumb: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'case2',
    company: '全球领航外服',
    logo: 'https://img.icons8.com/fluency/96/conference-call.png',
    stats: '筛选周期缩短 80%',
    description: '构建“神奇招聘流程”，AI 自动解析海量简历并对照 JD 进行多维度评分。日均处理简历从 200 份跃升至 2000 份。',
    videoThumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
  }
];

export const HARDWARE: HardwareItem[] = [
  { id: 'h1', name: 'Super Magic Note S1', spec: 'AI Recorder / 30-Day Standby / WiFi-6 Sync', image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=400' },
  { id: 'h2', name: 'Industrial IPC Gen-X', spec: 'Intel i9 / 64GB RAM / IP67 Rated', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400' },
  { id: 'h3', name: 'OEM All-in-One AI', spec: '24" Touch / Integrated NPU / Rugged', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=400' },
];
