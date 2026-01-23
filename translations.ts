
export type Language = 'zh' | 'en' | 'hk';

export const TRANSLATIONS = {
  zh: {
    common: {
      bookDemo: "预约演示",
      freeTrial: "免费试用",
      learnMore: "了解更多",
      exploreSolution: "探索方案",
      contactUs: "联系我们",
      platformLive: "平台运行中",
      officialPartner: "微软官方合作伙伴",
      consultNow: "立即开启咨询",
      submit: "立即提交咨询",
      success: "提交成功",
      back: "返回",
      learnMoreArrow: "了解更多 →"
    },
    nav: {
      home: "首页",
      supermagic: "Super Magic",
      cloud: "全云服务",
      systems: "系统集成",
      about: "关于我们"
    },
    hero: {
      slides: [
        {
          title: "Azure AI Foundry | 统一平台",
          subtitle: "构建、部署与管理生成式 AI",
          description: "利用最先进的模型目录，实现从原型到生产的无缝衔接，保障企业级安全与合规。",
          btnText: "探索 Foundry 方案"
        },
        {
          title: "Microsoft 365 | AI 驱动生产力",
          subtitle: "重塑组织的生产力基座",
          description: "深度整合办公生态，通过 AI 协同工具打破信息孤岛，让协作更智能。",
          btnText: "现代化办公转型"
        },
        {
          title: "Copilot Studio | 低代码 Agent",
          subtitle: "打造专属企业级数字员工",
          description: "快速编排业务逻辑，实现自动化客户服务与内部流程管理。",
          btnText: "定制 AI Agent"
        }
      ]
    },
    home: {
      strategyTag: "核心战略",
      strategyTitle: "以微软云为核心的多云架构方案服务商",
      strategyDesc: "从场景出发，为企业订制从 AI 基座架构到全球生产力协同的一体化集成方案。",
      whyUs: [
        { title: "微软云深度认证", desc: "微软年度核心合作伙伴，获 Azure AI 及 Modern Workplace 专家级能力认证。" },
        { title: "多云架构设计能力", desc: "深度整合异构云资源，提供跨云迁移、多云协同及统一代管 (MSP) 服务。" },
        { title: "行业解决方案经验", desc: "深耕 10+ 垂直行业，沉淀百余项大中型政企数字化转型实战全案。" },
        { title: "本地 + 国际合规支持", desc: "覆盖三级等保与全球合规标准，保障出海与本地化业务的数据主权安全。" }
      ],
      pillarTitle: "打造企业生产系统的数字化底座",
      pillarDesc: "覆盖 IT 基础、数据分析、生成式 AI 到办公协同。锋范科技助您构建高可用、零信任的生产力引擎。",
      scenarios: [
        { title: "企业 IT 底座与核心上云", desc: "承载企业生产系统的关键应用。从 Windows Server 迁移到 Azure IaaS/PaaS 高可用架构。" },
        { title: "混合云与统一身份中枢", desc: "利用 Azure Arc 管理本地数据中心，通过 Entra ID 构建全球统一身份治理体系。" },
        { title: "企业级 AI 与数据中枢", desc: "基于 Azure OpenAI 的大模型私有部署。结合 Microsoft Fabric 实现一体化落地。" },
        { title: "办公生态与业务自动化", desc: "整合 M365 与 Teams 协作基座。利用 Power Platform 将流程转化为生产力。" },
        { title: "全域安全与全球合规", desc: "利用 Defender 与 Sentinel 构建全栈防御，支持全球合规及中国三级等保。" }
      ],
      matrixTitle: "混合云场景化解决方案矩阵",
      matrixDesc: "针对国际云在境内合规、边缘覆盖及国产化适配上的不足，我们整合异构云平台，提供端到端的架构补强服务。",
      matrixItems: [
        { 
          title: "Azure × M365 × Copilot 企业级 AI 落地", 
          problem: "想用 Copilot 和 AI 提升员工效率，但必须保证数据安全、权限可控、合规可审计。",
          values: ["以 Microsoft Azure 作为 AI 与数据底座", "基于 Microsoft 365 的真实办公场景引入 AI", "围绕 Microsoft Copilot 进行企业级启用与治理", "同步设计身份、权限与安全策略，确保 AI 使用可控"]
        },
        { 
          title: "高并发与弹性业务系统", 
          problem: "业务面临突发百倍流量波动，且核心交易数据受监管要求必须存储在国内节点。",
          values: ["利用国内云广泛的可用区实现三级等保合规闭环", "架构层面设计跨云弹性伸缩与多源数据同步", "针对大促/活动场景设计极速扩容预案"]
        },
        { 
          title: "实时互动与音视频系统", 
          problem: "全球协同中，东南亚或国内二三线城市访问微软 Teams 存在卡顿，需保障低延迟。",
          values: ["依托腾讯云 CDN/边缘节点实现毫秒级推流", "针对复杂网络环境进行协议层面的丢包补偿优化", "全链路音视频监控与异常节点自动调度"]
        },
        { 
          title: "AI 能力与数据驱动业务", 
          problem: "国内业务需适配网信办备案大模型，需利用国产云在中文语义理解上的优势。",
          values: ["国产大模型国内合规落地方案", "利用国产 AI 算力底座加速本地数据处理", "双引擎 AI 路由架构，实现国内外能力无缝切换"]
        },
        { 
          title: "行业型系统与本地化需求", 
          problem: "强监管行业要求系统架构必须完全国产化或私有化部署，满足物理隔离需求。",
          values: ["符合国产信创标准的系统集成方案", "行业场景深度理解，重视数据主权与物理隔离", "长期稳定的本地化 MSP 代管运维服务"]
        }
      ],
      casesTitle: "行业提效实录",
      casesItems: [
        { industry: "互联网旅游", title: "某领航旅游服务商 AI 研发转型", desc: "引入 GitHub Copilot 辅助代码编写，自动生成单元测试，提升研发质量。", metric: "30% 研发加速" },
        { industry: "智慧零售", title: "某新零售平台数字化 OS 出海", desc: "利用 Azure 全球区域覆盖，支撑万级线下门店实时库存联动与线上交易。", metric: "70% 部署缩减" },
        { industry: "游戏出海", title: "某跨国手游运营商高并发基座", desc: "通过云端高性能存储与加速网络，解决实时竞技延时难题，实现全球同服。", metric: "延时 < 50ms" }
      ]
    },
    supermagic: {
      heroTag: "AI 操作系统",
      heroTitle: "企业级 AI <br /> 智能操作系统",
      heroSubtitle: "整合全球最顶尖的大模型能力，通过 Agentic Workflow 深度重塑企业业务流程，实现从对话到交付的闭环。",
      ctaTitle: "准备好开启您的 AI 转型了吗？",
      ctaSubtitle: "预约一场 Super Magic 产品演示，我们将为您展示如何降低 50% 以上的重复性决策成本。",
      pillars: [
        { tag: "架构核心 01: 项目中心", title: "成果不沉淀，AI 没意义", subtitle: "从“对话型”到“项目型”的本质跨越", description: "Super Magic 以「项目」为核心容器，所有文件、决策与产出自动沉淀，构建企业级知识系统。" },
        { tag: "架构核心 02: 工作流引擎", title: "标准化是效率的唯一基石", subtitle: "Agentic Workflow 业务编排", description: "将专家的经验拆解为可复制的 AI 工作流，确保每一个环节都有确定的、高标准的产出。" },
        { tag: "架构核心 03: 私有知识库", title: "让 AI 拥有企业灵魂", subtitle: "RAG 增强检索与数据主权", description: "基于企业私有文档、ERP 数据实时调取，让 AI 真正懂您的产品，且数据物理隔离。" },
        { tag: "架构核心 04: 多模路由调度", title: "不选最贵的，只选最合适的", subtitle: "智能混合算力分发", description: "根据任务复杂度自动切换模型，在保持性能的同时，为您降低 60% 的算力成本。" },
        { tag: "架构核心 05: 软硬协同生态", title: "打破屏幕的边界", subtitle: "从 Cloud 到 Edge 的无缝集成", description: "与 Magic Note 等硬件深度打通，实现物理世界的语音、图像数据实时上云。" }
      ]
    },
    about: {
      tag: "始于 2023 | 创新与卓越",
      title: "广东锋范科技集团",
      subtitle: "一家极富创新性的高新技术公司。我们深耕用户关键应用领域，提供综合性 IT 信息科技服务。",
      modelTag: "业务模式",
      modelTitle: "以咨询为先导，以产品为依托，以服务为核心",
      models: [
        { t: "咨询为先导", d: "深度调研客户业务场景，提供专业的信息系统建设顶层设计方案。", icon: "📝" },
        { t: "产品为依托", d: "整合全球优质云端生态与锋范自研 AI 硬件，构建坚实技术基座。", icon: "📦" },
        { t: "服务为核心", d: "提供全生命周期运维与代管服务，确保数字化系统持续创造价值。", icon: "🛠️" }
      ],
      stats: [
        { label: "国家级高新技术企业", unit: "家", value: "3", icon: "🛡️" },
        { label: "系统集成企业", unit: "家", value: "2", icon: "🌐" },
        { label: "工厂定制企业", unit: "家", value: "1", icon: "🏭" },
        { label: "集团员工总数", unit: "+人", value: "200", icon: "👥" },
        { label: "年销售额", unit: "亿+", value: "3", icon: "💰" }
      ],
      industriesTitle: "跨行业领域的深耕与成功",
      industriesDesc: "锋范科技在政府、制造、能源、教育等多个关键领域，均拥有高品质的整体化解决方案和海量成功案例。",
      industries: [
        { name: "数字政府", icon: "🏛️", desc: "助力政务数字化转型，构建高效透明的服务体系。" },
        { name: "智能制造", icon: "⚙️", desc: "工业 4.0 深度集成，重塑生产力边界。" },
        { name: "智慧能源", icon: "⚡", desc: "能源调度与安全监控，保障工业血液稳健流动。" },
        { name: "智慧教育", icon: "🎓", desc: "AI 赋能教学场景，打造现代化智慧校园。" }
      ],
      officesTitle: "集团布局：深耕本土，连接全球",
      offices: [
        { id: 'hq', name: '广东锋范科技集团（总部）', address: '中国 · 广东省 · 东莞市科技产业园区锋范科技大厦', type: 'GROUP HEADQUARTERS' },
        { id: 'hk', name: '锋范（香港）科技有限公司', address: '中国 · 香港特别行政区 · 九龙观塘鸿图道 1 号', type: 'GLOBAL BRANCH' }
      ],
      honorTitle: "资质与荣誉：合规、稳健、持续进化",
      ctaTitle: "追求卓越，止於至善",
      ctaDesc: "锋范科技集团始终致力为用户关键应用领域提供全方位的 IT 信息科技服务。"
    },
    footer: {
      ctaTitle: "开启 AI 转型",
      ctaDesc: "专家顾问 24h 内快速响应，定制您的数字化增长基座。",
      formName: "您的称呼",
      formPhone: "联系电话",
      formEmail: "企业邮箱",
      formCompany: "所属公司",
      formRequirement: "请简述您的咨询意向...",
      wechatTitle: "扫码关注锋范科技",
      wechatSub: "OFFICIAL WECHAT ACCOUNT",
      wechatNote: "获取最新 AI 落地案例与行业资讯",
      section1: "Home与服务",
      section2: "云端生态",
      section3: "Contact Us",
      copyright: "© 2025 广东锋范科技有限公司 版权所有"
    }
  },
  en: {
    common: {
      bookDemo: "Book Demo",
      freeTrial: "Free Trial",
      learnMore: "Learn More",
      exploreSolution: "Explore Solution",
      contactUs: "Contact Us",
      platformLive: "Live",
      officialPartner: "Microsoft Official Partner",
      consultNow: "Consult Now",
      submit: "Submit",
      success: "Success",
      back: "Back",
      learnMoreArrow: "Learn More →"
    },
    nav: {
      home: "Home",
      supermagic: "Super Magic",
      cloud: "Cloud",
      systems: "Systems",
      about: "About"
    },
    hero: {
      slides: [
        {
          title: "Azure AI Foundry | Unified Platform",
          subtitle: "Build & Deploy GenAI",
          description: "Use advanced model catalogs for seamless prototyping to production with enterprise security.",
          btnText: "Explore Foundry"
        },
        {
          title: "Microsoft 365 | AI Productivity",
          subtitle: "Reshaping Productivity Foundation",
          description: "Deeply integrate office ecosystems to break silos through AI collaboration tools.",
          btnText: "Modern Workplace"
        },
        {
          title: "Copilot Studio | Low-Code Agent",
          subtitle: "Custom Enterprise Digital Staff",
          description: "Orchestrate business logic quickly to achieve automated customer service.",
          btnText: "Custom AI Agent"
        }
      ]
    },
    home: {
      strategyTag: "CORE STRATEGY",
      strategyTitle: "Multi-Cloud Architect with Microsoft Cloud at Core",
      strategyDesc: "Tailored integrated solutions from AI foundation to global productivity collaboration.",
      whyUs: [
        { title: "Microsoft Cloud Certified", desc: "Core partner with expert certification in Azure AI and Modern Workplace." },
        { title: "Multi-Cloud Capability", desc: "Deeply integrate heterogeneous cloud resources for cross-cloud migration and MSP." },
        { title: "Industry Experience", desc: "10+ vertical industries with hundreds of digital transformation cases." },
        { title: "Global Compliance", desc: "Supporting local MLPS 2.0 and global standards for data sovereignty." }
      ],
      pillarTitle: "Digital Foundation for Enterprise Production",
      pillarDesc: "IT infra, data analytics, and GenAI. Build highly available engines for your organization.",
      scenarios: [
        { title: "Enterprise Foundation", desc: "Powering critical applications. Smooth migration from Windows Server to Azure." },
        { title: "Hybrid & Identity", desc: "Manage local datacenters via Azure Arc and global identity via Entra ID." },
        { title: "AI & Data Center", desc: "Private deployment of Azure OpenAI and unified data via Microsoft Fabric." },
        { title: "Modern Workplace", desc: "Integrate M365 and Teams to transform processes into productivity." },
        { title: "Global Security", desc: "Sentinel and Defender defense for global compliance and security." }
      ],
      matrixTitle: "Mixed Cloud Solution Matrix",
      matrixDesc: "Addressing compliance and localization gaps of international clouds with end-to-end integration.",
      matrixItems: [
        { 
          title: "Azure × M365 × Copilot AI Landing", 
          problem: "Need Copilot for efficiency but must ensure data security and role-based access.",
          values: ["Azure as AI & Data Foundation", "Scenario-based AI via M365", "Enterprise-level Copilot governance", "Security-first identity & permission design"]
        },
        { 
          title: "High-Concurrency Elastic Systems", 
          problem: "Business faces 100x traffic spikes with strict local data storage requirements.",
          values: ["MLPS 2.0 compliance via local cloud zones", "Cross-cloud elastic scaling & data sync", "Pre-set rapid expansion for peak events"]
        },
        { 
          title: "Real-time Interaction Systems", 
          problem: "Latency issues in Teams or cloud video in remote regions or SE Asia.",
          values: ["Millisecond streaming via CDN edge nodes", "Packet loss compensation at protocol level", "Automated monitoring & node scheduling"]
        },
        { 
          title: "AI & Data Driven Business", 
          problem: "Need localized GenAI models with native language understanding and compliance.",
          values: ["Localized GenAI compliance solutions", "Native AI computing foundation", "Dual-engine AI routing architecture"]
        },
        { 
          title: "Industry Compliance Systems", 
          problem: "Strict regulations require fully localized or private cloud deployments.",
          values: ["Localization compliant integration", "Focus on data sovereignty", "Long-term MSP managed services"]
        }
      ],
      casesTitle: "Industry Success Stories",
      casesItems: [
        { industry: "Travel", title: "Travel Leader AI R&D Transformation", desc: "Using GitHub Copilot to automate unit tests and boost code quality.", metric: "30% Acceleration" },
        { industry: "Retail", title: "Retail OS Global Expansion", desc: "Using Azure Global regions to sync thousands of offline stores with online trade.", metric: "70% Deployment Cut" },
        { industry: "Gaming", title: "Multi-national Gaming Infrastructure", desc: "High-perf storage and network to solve latency for millions of players.", metric: "Latency < 50ms" }
      ]
    },
    supermagic: {
      heroTag: "AI OPERATING SYSTEM",
      heroTitle: "Enterprise AI <br /> Smart OS",
      heroSubtitle: "Integrating top-tier model capabilities worldwide, reshaping business processes with Agentic Workflow.",
      ctaTitle: "Ready to start your AI transformation?",
      ctaSubtitle: "Book a Super Magic demo to see how to reduce repetitive decision costs by over 50%.",
      pillars: [
        { tag: "Core 01: Project Center", title: "Persistence Matters", subtitle: "Dialogue to Project Leap", description: "Super Magic uses projects as core containers to automatically settle all files and decisions." },
        { tag: "Core 02: Workflow Engine", title: "Standardize for Efficiency", subtitle: "Agentic Workflow Orchestration", description: "Deconstruct expert experience into repeatable AI workflows for consistent high-quality output." },
        { tag: "Core 03: Knowledge Base", title: "AI with Company Soul", subtitle: "RAG & Data Sovereignty", description: "Real-time access to private documents and ERP data, ensuring the AI truly understands your business." },
        { tag: "Core 04: Multi-Model Router", title: "The Optimal Choice", subtitle: "Smart Hybrid Compute Scheduling", description: "Automatically switch models based on task complexity to reduce compute costs by 60%." },
        { tag: "Core 05: Synergistic Ecosystem", title: "Beyond the Screen", subtitle: "Cloud to Edge Integration", description: "Deeply integrated with Magic Note hardware for real-time physical world data sync." }
      ]
    },
    about: {
      tag: "Since 2023 | Excellence",
      title: "FengFan Tech Group",
      subtitle: "An innovative high-tech company providing comprehensive IT services for critical applications.",
      modelTag: "Business Model",
      modelTitle: "Consulting Led, Product Based, Service Cored",
      models: [
        { t: "Consulting Led", d: "Deeply researching customer scenarios to provide top-level IT design.", icon: "📝" },
        { t: "Product Based", d: "Integrating global cloud ecosystems with FengFan's own AI hardware.", icon: "📦" },
        { t: "Service Cored", d: "Full lifecycle maintenance ensuring continuous value creation.", icon: "🛠️" }
      ],
      stats: [
        { label: "High-Tech Enterprises", unit: "", value: "3", icon: "🛡️" },
        { label: "System Integration firms", unit: "", value: "2", icon: "🌐" },
        { label: "Factory Customization firms", unit: "", value: "1", icon: "🏭" },
        { label: "Total Employees", unit: "+", value: "200", icon: "👥" },
        { label: "Annual Revenue", unit: "B+", value: "3", icon: "💰" }
      ],
      industriesTitle: "Deep Industry Expertise",
      industriesDesc: "Providing high-quality solutions across Government, Manufacturing, Energy, and Education sectors.",
      industries: [
        { name: "Digital Gov", icon: "🏛️", desc: "Helping government digital transformation with efficient systems." },
        { name: "Smart Mfg", icon: "⚙️", desc: "Industry 4.0 integration reshaping productivity boundaries." },
        { name: "Smart Energy", icon: "⚡", desc: "Monitoring and dispatching for industrial reliability." },
        { name: "Smart Edu", icon: "🎓", desc: "AI-powered teaching for modern campus environments." }
      ],
      officesTitle: "Global Network",
      offices: [
        { id: 'hq', name: 'FengFan Tech Group (HQ)', address: 'FengFan Tower, Tech Park, Dongguan, China', type: 'GROUP HEADQUARTERS' },
        { id: 'hk', name: 'FengFan (HK) Tech Co., Ltd.', address: 'Hung To Road, Kwun Tong, Hong Kong', type: 'GLOBAL BRANCH' }
      ],
      honorTitle: "Honors & Qualifications",
      ctaTitle: "Excellence in Everything",
      ctaDesc: "FengFan Group is committed to providing full IT services for critical user domains."
    },
    footer: {
      ctaTitle: "Start AI Journey",
      ctaDesc: "Expert response within 24h to customize your digital foundation.",
      formName: "Your Name",
      formPhone: "Phone",
      formEmail: "Email",
      formCompany: "Company",
      formRequirement: "Your requirement...",
      wechatTitle: "Follow Us on WeChat",
      wechatSub: "OFFICIAL WECHAT ACCOUNT",
      wechatNote: "Get the latest AI cases and industry insights",
      section1: "Services",
      section2: "Cloud Ecosystem",
      section3: "Contact Us",
      copyright: "© 2025 FengFan Tech Group. All rights reserved."
    }
  },
  hk: {
    common: {
      bookDemo: "預約演示",
      freeTrial: "免費試用",
      learnMore: "瞭解更多",
      exploreSolution: "探索方案",
      contactUs: "聯繫我們",
      platformLive: "平台運行中",
      officialPartner: "微軟官方合作伙伴",
      consultNow: "立即開啓諮詢",
      submit: "立即提交諮詢",
      success: "提交成功",
      back: "返回",
      learnMoreArrow: "瞭解更多 →"
    },
    nav: {
      home: "首頁",
      supermagic: "Super Magic",
      cloud: "全雲服務",
      systems: "系統集成",
      about: "關於我們"
    },
    hero: {
      slides: [
        {
          title: "Azure AI Foundry | 統一平台",
          subtitle: "構建、部署與管理生成式 AI",
          description: "利用最先進的模型目錄，實現從原型到生產的無縫銜接，保障企業級安全與合規。",
          btnText: "探索 Foundry 方案"
        },
        {
          title: "Microsoft 365 | AI 驅動生產力",
          subtitle: "重塑組織的生產力基座",
          description: "深度整合辦公生態，通過 AI 協同工具打破信息孤島，讓協作更智能。",
          btnText: "現代化辦公轉型"
        },
        {
          title: "Copilot Studio | 低代碼 Agent",
          subtitle: "打造專屬企業級數位員工",
          description: "快速編排業務邏輯，實現自動化客戶服務與內部流程管理。",
          btnText: "定製 AI Agent"
        }
      ]
    },
    home: {
      strategyTag: "核心戰略",
      strategyTitle: "以微軟雲為核心的多雲架構方案服務商",
      strategyDesc: "從場景出發，為企業訂制從 AI 基座架構到全球生產力協同的一體化集成方案。",
      whyUs: [
        { title: "微軟雲深度認證", desc: "微軟年度核心合作伙伴，獲 Azure AI 及 Modern Workplace 專家級能力認證。" },
        { title: "多雲架構設計能力", desc: "深度整合異構雲資源，提供跨雲遷移、多雲協同及統一代管 (MSP) 服務。" },
        { title: "行業解決方案經驗", desc: "深耕 10+ 垂直行業，沈澱百餘項大中型政企數位化轉型實戰全案。" },
        { title: "本地 + 國際合規支持", desc: "覆蓋三級等保與全球合規標準，保障出海與本地化業務的數據主權安全。" }
      ],
      pillarTitle: "打造企業生產系統的數位化底座",
      pillarDesc: "覆盖 IT 基礎、數據分析、生成式 AI 到辦公協同。鋒範科技助您構建高可用、零信任的生產力引擎。",
      scenarios: [
        { title: "企業 IT 底座与核心上雲", desc: "承載企業生產系統的關鍵應用。從 Windows Server 遷移到 Azure IaaS/PaaS 高可用架構。" },
        { title: "混合雲與統一身份中枢", desc: "利用 Azure Arc 管理本地數據中心，通過 Entra ID 構建全球統一身份治理體系。" },
        { title: "企業級 AI 與數據中枢", desc: "基於 Azure OpenAI 的大模型私有部署。結合 Microsoft Fabric 实现一體化落地。" },
        { title: "辦公生態與業務自動化", desc: "整合 M365 與 Teams 協作基座。利用 Power Platform 将流程轉化為生產力。" },
        { title: "全域安全與全球合規", desc: "利用 Defender 與 Sentinel 構建全棧防御，支持全球合規及中國三級等保。" }
      ],
      matrixTitle: "混合雲場景化解決方案矩陣",
      matrixDesc: "針對國際雲在境內合規、邊緣覆蓋及國產化適配上的不足，我們整合異構雲平台，提供端到端的架構補強服務。",
      matrixItems: [
        { 
          title: "Azure × M365 × Copilot 企業級 AI 落地", 
          problem: "想用 Copilot 和 AI 提升員工效率，但必須保證數據安全、權限可控、合規可審計。",
          values: ["以 Microsoft Azure 作為 AI 與數據底座", "基於 Microsoft 365 的真實辦公場景引入 AI", "圍繞 Microsoft Copilot 進行企業級啓用與治理", "同步設計身份、權限與安全策略，確保 AI 使用可控"]
        },
        { 
          title: "高併發與彈性業務系統", 
          problem: "業務面臨突發百倍流量波動，且核心交易數據受監管要求必須存儲在國內節點。",
          values: ["利用國內雲廣泛的可用區實現三級等保合規閉環", "架構層面設計跨雲彈性伸縮與多源數據同步", "針對大促/活動場景設計極速擴容預案"]
        },
        { 
          title: "實時互動與音視頻系統", 
          problem: "全球協同中，東南亞或國內二三線城市訪問微軟 Teams 存在卡頓，需保障低延遲。",
          values: ["依托騰訊雲 CDN/邊緣節點實現毫秒級推流", "針對複雜網絡環境進行協議層面的丟包補償優化", "全鏈路音視頻監控與異常節點自動調度"]
        },
        { 
          title: "AI 能力與數據驅動業務", 
          problem: "國內業務需適配經過網信辦備案的大模型，利用國產雲在中文語義理解上的優勢。",
          values: ["國產大模型合規落地方案", "利用國產 AI 算力底座加速本地數據處理", "雙引擎 AI 路由架構，實現國內外能力無縫切換"]
        },
        { 
          title: "行業型系統與本地化需求", 
          problem: "強監管行業要求系統架構必須完全國產化或私有化部署，滿足物理隔離需求。",
          values: ["符合國產信創標準的系統集成方案", "行業場景深度理解，重視數據主權與物理隔離", "長期穩定的本地化 MSP 代管運維服務"]
        }
      ],
      casesTitle: "行業提效實錄",
      casesItems: [
        { industry: "互聯網旅遊", title: "某領航旅遊服務商 AI 研發轉型", desc: "引入 GitHub Copilot 輔助代碼編寫，自動生成單元測試，提升研發質量。", metric: "30% 研發加速" },
        { industry: "智慧零售", title: "某新零售平台數位化 OS 出海", desc: "利用 Azure 全球區域覆蓋，支撐萬級線下門店實時庫存聯動與線上交易。", metric: "70% 部署縮減" },
        { industry: "遊戲出海", title: "某跨國手遊運營商高併發基座", desc: "通過雲端高性能存儲與加速網絡，解決實時競技延時難題，實現全球同服。", metric: "延時 < 50ms" }
      ]
    },
    supermagic: {
      heroTag: "AI 操作系統",
      heroTitle: "企業級 AI <br /> 智能操作系統",
      heroSubtitle: "整合全球最頂尖的大模型能力，通過 Agentic Workflow 深度重塑企業業務流程，實現從對話到交付的閉環。",
      ctaTitle: "準備好開啓您的 AI 轉型了嗎？",
      ctaSubtitle: "預約一場 Super Magic 產品演示，我們將為您展示如何降低 50% 以上的重複性決策成本。",
      pillars: [
        { tag: "架构核心 01: 項目中心", title: "成果不沉澱，AI 沒意義", subtitle: "從“對話型”到“項目型”的本質跨越", description: "Super Magic 以「項目」為核心容器，所有文件、決策與產出自動沉澱，構建企業級知識系統。" },
        { tag: "架构核心 02: 工作流引擎", title: "標準化是效率的唯一基石", subtitle: "Agentic Workflow 業務編排", description: "將專家的經驗拆解為可複製的 AI 工作流，確保每一個環節都有確定的、高標準的產出。" },
        { tag: "架构核心 03: 私有知識庫", title: "讓 AI 擁有企業靈魂", subtitle: "RAG 增強檢索與數據主權", description: "基於企業私有文檔、ERP 數據實時調取，讓 AI 真正懂您的產品，且數據物理隔離。" },
        { tag: "架构核心 04: 多模路由調度", title: "不選最貴的，只選最合適的", subtitle: "智能混合算力分發", description: "根據任務複雜度自動切換模型，在保持性能的同時，為您降低 60% 的算力成本。" },
        { tag: "架构核心 05: 軟硬協同生態", title: "打破屏幕的邊界", subtitle: "從 Cloud 到 Edge 的無縫集成", description: "與 Magic Note 等硬件深度打通，實現物理世界的語音、圖像數據實時上雲。" }
      ]
    },
    about: {
      tag: "始於 2023 | 創新與卓越",
      title: "廣東鋒範科技集團",
      subtitle: "一家極富創新性的高新技術公司。我們深耕用戶關鍵應用領域，提供綜合性 IT 信息科技服務。",
      modelTag: "業務模式",
      modelTitle: "以諮詢為先導，以產品為依托，以服務為核心",
      models: [
        { t: "諮詢為先導", d: "深度調研客戶業務場景，提供專業的信息系統建設頂層設計方案。", icon: "📝" },
        { t: "產品為依托", d: "整合全球優質雲端生態與鋒範自研 AI 硬件，構建堅實技術基座。", icon: "📦" },
        { t: "服務為核心", d: "提供全生命週期運維與代管服務，確保數位化系統持續創造價值。", icon: "🛠️" }
      ],
      stats: [
        { label: "國家級高新技術企業", unit: "家", value: "3", icon: "🛡️" },
        { label: "系統集成企業", unit: "家", value: "2", icon: "🌐" },
        { label: "工廠定製企業", unit: "家", value: "1", icon: "🏭" },
        { label: "集團員工總數", unit: "+人", value: "200", icon: "👥" },
        { label: "年銷售額", unit: "億+", value: "3", icon: "💰" }
      ],
      industriesTitle: "跨行業領域的深耕與成功",
      industriesDesc: "鋒範科技在政府、製造、能源、教育等多個關鍵領域，均擁有高品質的整體化解決方案和海量成功案例。",
      industries: [
        { name: "數位政府", icon: "🏛️", desc: "助力政務數位化轉型，構建高效透明的服務體系。" },
        { name: "智能製造", icon: "⚙️", desc: "工業 4.0 深度集成，重塑生產力邊界。" },
        { name: "智慧能源", icon: "⚡", desc: "能源調度與安全監控，保障工業血液穩健流動。" },
        { name: "智慧教育", icon: "🎓", desc: "AI 賦能教學場景，打造現代化智慧校園。" }
      ],
      officesTitle: "集團佈局：深耕本土，連接全球",
      offices: [
        { id: 'hq', name: '廣東鋒範科技集團（總部）', address: '中國 · 廣東省 · 東莞市科技產業園區鋒範科技大廈', type: 'GROUP HEADQUARTERS' },
        { id: 'hk', name: '鋒範（香港）科技有限公司', address: '中國 · 香港特別行政區 · 九龍觀塘鴻圖道 1 號', type: 'GLOBAL BRANCH' }
      ],
      honorTitle: "資質與榮譽：合規、穩健、持續進化",
      ctaTitle: "追求卓越，止於至善",
      ctaDesc: "鋒範科技集團始終致力為用戶關鍵應用領域提供全方位的 IT 信息科技服務。"
    },
    footer: {
      ctaTitle: "開啓 AI 轉型",
      ctaDesc: "專家顧問 24h 内快速響應，定製您的數位化增長基座。",
      formName: "您的稱呼",
      formPhone: "聯繫電話",
      formEmail: "企業郵箱",
      formCompany: "所属公司",
      formRequirement: "請簡述您的諮詢意向...",
      wechatTitle: "掃碼關注鋒範科技",
      wechatSub: "OFFICIAL WECHAT ACCOUNT",
      wechatNote: "獲取最新 AI 落地案例與行業資訊",
      section1: "Home與服務",
      section2: "雲端生態",
      section3: "Contact Us",
      copyright: "© 2025 廣東鋒範科技有限公司 版權所有"
    }
  }
};

export type TranslationType = typeof TRANSLATIONS['zh'];
