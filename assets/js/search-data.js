// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-首页",
    title: "首页",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-著作",
          title: "著作",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/book/";
          },
        },{id: "nav-论文",
          title: "论文",
          description: "实验室相关论文工作。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "论文实现的相关项目。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-团队",
          title: "团队",
          description: "实验室成员。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-新闻",
          title: "新闻",
          description: "实验室新闻。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "members-baiyirui",
          title: 'Baiyirui',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/baiyirui/";
            },},{id: "members-caowenzhuo",
          title: 'Caowenzhuo',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/caowenzhuo/";
            },},{id: "members-chenjiayun",
          title: 'Chenjiayun',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/chenjiayun/";
            },},{id: "members-guojiaming",
          title: 'Guojiaming',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/guojiaming/";
            },},{id: "members-hezhiyu",
          title: 'Hezhiyu',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/hezhiyu/";
            },},{id: "members-huangsicong",
          title: 'Huangsicong',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/huangsicong/";
            },},{id: "members-hujunjie",
          title: 'Hujunjie',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/hujunjie/";
            },},{id: "members-jiangnan",
          title: 'Jiangnan',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/jiangnan/";
            },},{id: "members-liupuchun",
          title: 'Liupuchun',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/liupuchun/";
            },},{id: "members-liuxin",
          title: 'Liuxin',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/liuxin/";
            },},{id: "members-liyan",
          title: 'Liyan',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/liyan/";
            },},{id: "members-luyifan",
          title: 'Luyifan',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/luyifan/";
            },},{id: "members-qianfeifan",
          title: 'Qianfeifan',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/qianfeifan/";
            },},{id: "members-songqiyang",
          title: 'Songqiyang',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/songqiyang/";
            },},{id: "members-songyanni",
          title: 'Songyanni',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/songyanni/";
            },},{id: "members-wanyisen",
          title: 'Wanyisen',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/wanyisen/";
            },},{id: "members-xieqiang",
          title: 'Xieqiang',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/xieqiang/";
            },},{id: "members-xushaowen",
          title: 'Xushaowen',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/xushaowen/";
            },},{id: "members-yanghaoran",
          title: 'Yanghaoran',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/yanghaoran/";
            },},{id: "members-yangxiangcong",
          title: 'Yangxiangcong',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/yangxiangcong/";
            },},{id: "members-yanxiaolong",
          title: 'Yanxiaolong',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/yanxiaolong/";
            },},{id: "members-yaowentao",
          title: 'Yaowentao',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/yaowentao/";
            },},{id: "members-zhangyixin",
          title: 'Zhangyixin',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/zhangyixin/";
            },},{id: "members-zhangzhicong",
          title: 'Zhangzhicong',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/zhangzhicong/";
            },},{id: "members-zhaoyuanbo",
          title: 'Zhaoyuanbo',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/zhaoyuanbo/";
            },},{id: "members-研究员-博导",
          title: '研究员 博导',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/jiaxiaoqi/";
            },},{id: "members-正高级工程师-博导",
          title: '正高级工程师 博导',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/lvzhiqiang/";
            },},{id: "members-正高级工程师-硕导",
          title: '正高级工程师 硕导',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/songzhenyu/";
            },},{id: "members-副研究员",
          title: '副研究员',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/zhouqihang/";
            },},{id: "news-2023年10月15日秋日团建",
          title: '2023年10月15日秋日团建',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/team-building@judianchuanba/";
            },},{id: "news-陈家赟的报告-ccgrid-2024",
          title: '陈家赟的报告 @ CCGRID 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/chenjiayun@ccgrid/";
            },},{id: "news-姜楠的报告-ifipsec-2024",
          title: '姜楠的报告 @ IFIPSEC 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/jiangnan@sec2024/";
            },},{id: "news-张艺馨的报告-iscc-2024",
          title: '张艺馨的报告 @ ISCC 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/zhangyixin@iscc2024/";
            },},{id: "news-张志聪的报告-icpads-2024",
          title: '张志聪的报告 @ ICPADS 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/zhangzhicong@icpads2024/";
            },},{id: "news-2024年10月25日年度团建",
          title: '2024年10月25日年度团建',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/team-building@diliuji/";
            },},{id: "news-徐少文的报告-socc-2024",
          title: '徐少文的报告 @ SoCC 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/xushaowen@socc2024/";
            },},{id: "news-陈家赟的报告-acsac-2024",
          title: '陈家赟的报告 @ ACSAC 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/chenjiayun@acsac2024/";
            },},{id: "news-trustcom-2024",
          title: 'TrustCom 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/dams@trustcom2024/";
            },},{id: "news-ndss-2025",
          title: 'NDSS 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/dams@ndss2025/";
            },},{id: "projects-conmonitor",
          title: 'ConMonitor',
          description: "Lightweight Container Protection with Virtualization and VM Functions",
          section: "Projects",handler: () => {
              window.location.href = "/projects/conmonitor-lightweight-container-protection-with-virtualization-and-vm-functions/";
            },},{id: "projects-cubevisor",
          title: 'CubeVisor',
          description: "A Multi-realm Architecture Design for Running VM with ARM CCA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cubevisor-a-multi-realm-architecture-design-for-running-vm-with-arm-cca/";
            },},{id: "projects-hclave",
          title: 'HClave',
          description: "An isolated execution environment design for hypervisor runtime security",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hclave-an-isolated-execution-environment-design-for-hypervisor-runtime-security/";
            },},{id: "projects-log2policy",
          title: 'Log2Policy',
          description: "An Approach to Generate Fine-Grained Access Control Rules for Microservices from Scratch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/log2policy-an-approach-to-generate-fine-grained-access-control-rules-for-microservices-from-scratch/";
            },},{id: "projects-rcontainer",
          title: 'RContainer',
          description: "A Secure Container Architecture through Extending ARM CCA Hardware Primitives",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rcontainer-a-secure-container-architecutre-through-extending-arm-cca-hardware-primitives/";
            },},{id: "projects-secfortress",
          title: 'SecFortress',
          description: "Securing Hypervisor using Cross-layer Isolation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/secfortress-securing-hypervisor-using-cross-layer-isolation/";
            },},{id: "projects-sedspec",
          title: 'SEDSpec',
          description: "Securing Emulated Devices by Enforcing Execution Specification",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sedspec-securing-emulated-devices-by-enforcing-execution-specification/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dams-group", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
