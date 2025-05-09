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
  },{id: "nav-教材",
          title: "教材",
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
        },{id: "nav-成员",
          title: "成员",
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
        },{id: "members-caowenzhuo",
          title: 'Caowenzhuo',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/caowenzhuo/";
            },},{id: "members-qianfeifan",
          title: 'Qianfeifan',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/qianfeifan/";
            },},{id: "members-songyanni",
          title: 'Songyanni',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/songyanni/";
            },},{id: "members-jiangnan",
          title: 'Jiangnan',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/jiangnan/";
            },},{id: "members-jiaxiaoqi",
          title: 'Jiaxiaoqi',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/jiaxiaoqi/";
            },},{id: "members-xushaowen",
          title: 'Xushaowen',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/xushaowen/";
            },},{id: "members-zhouqihang",
          title: 'Zhouqihang',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/zhouqihang/";
            },},{id: "news-2023年团建",
          title: '2023年团建',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-team-building/";
            },},{id: "news-2024年团建",
          title: '2024年团建',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-team-building/";
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
