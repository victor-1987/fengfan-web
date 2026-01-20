
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

export const PRODUCT_PILLARS: ProductHighlight[] = [
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

export const CASES: CaseStudy[] = [
  {
    id: 'case1',
    company: '华南智造集团',
    logo: 'https://img.icons8.com/fluency/96/organization.png',
    stats: '效率提升 300%',
    description: '通过 Super Magic 部署私有化知识库，覆盖 50,000+ 份技术文档。将一线工人故障排查时间从 2 小时缩短至 5 分钟，实现了真正意义上的知识资产实时检索与专家经验数字化沉淀。',
    videoThumb: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'case2',
    company: '全球领航外服',
    logo: 'https://img.icons8.com/fluency/96/conference-call.png',
    stats: '筛选周期缩短 80%',
    description: '构建“神奇招聘流程”，AI 自动解析海量简历并对照 JD 进行多维度评分。日均处理简历从 200 份跃升至 2000 份，HR 仅需参与最后决策面试，将繁琐筛选彻底自动化。',
    videoThumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'case3',
    company: '数码科技港',
    logo: 'https://img.icons8.com/fluency/96/city-buildings.png',
    stats: '运营成本降低 45%',
    description: '利用 Agent 模式编排园区物业管理小狐狸。自动处理租户投诉、生成维修工单并同步跟进备件库存，实现了园区管理的“全自动驾驶”闭环。',
    videoThumb: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'case4',
    company: '金石金融证券',
    logo: 'https://img.icons8.com/fluency/96/bank.png',
    stats: '报告生成零延迟',
    description: '集成 Workflow 模式用于每日研报生成。AI 实时监控全球市场波动，自动抓取财报数据并填充至标准化模板，确保在开盘前 30 分钟完成 20+ 份专业深度报告的产出。',
    videoThumb: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'case5',
    company: '云端创意设计',
    logo: 'https://img.icons8.com/fluency/96/adobe-creative-cloud.png',
    stats: '创意产出量提升 5 倍',
    description: '设计总监指挥多组 AI 团队进行草图深化与配色 experiment。通过“项目/文件”中心模式，所有历史改稿记录与配色逻辑均可溯源，大幅降低了团队沟通的磨合成本。',
    videoThumb: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600'
  }
];

export const HARDWARE: HardwareItem[] = [
  { id: 'h1', name: 'Industrial IPC Gen-X', spec: 'Intel i9 / 64GB RAM / IP67 Rated', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400' },
  { id: 'h2', name: 'OEM All-in-One AI', spec: '24" Touch / Integrated NPU / Rugged', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=400' },
  { id: 'h3', name: 'Edge Gateway Pro', spec: 'Dual 5G / PoE Support / Metal Case', image: 'https://images.unsplash.com/photo-1558494949-ef8b5655d939?auto=format&fit=crop&q=80&w=400' },
];
