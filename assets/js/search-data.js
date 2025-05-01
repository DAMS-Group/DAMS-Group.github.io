// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-首页",
    title: "首页",
    section: "Navigation",
    handler: () => {
      window.location.href = "/book/";
    },
  },{id: "nav-新闻",
          title: "新闻",
          description: "实验室新闻。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/book/news/";
          },
        },{id: "nav-教材",
          title: "教材",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/book/blog/";
          },
        },{id: "nav-论文",
          title: "论文",
          description: "实验室相关论文工作。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/book/publications/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "论文实现的相关项目。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/book/projects/";
          },
        },{id: "nav-成员",
          title: "成员",
          description: "实验室成员。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/book/people/";
          },
        },{id: "news-ai技术在医疗领域的应用与未来展望",
          title: 'AI技术在医疗领域的应用与未来展望',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/book/news/announcement_1/";
            },},{id: "news-量子计算-推动全球科技变革的新力量",
          title: '量子计算：推动全球科技变革的新力量',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/book/news/announcement_2/";
            },},{id: "news-计算机科学在气候变化研究中的创新应用",
          title: '计算机科学在气候变化研究中的创新应用',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/book/news/announcement_3/";
            },},{id: "profiles-cwz",
          title: 'Cwz',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/book/profiles/cwz/";
            },},{id: "profiles-jn",
          title: 'Jn',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/book/profiles/jn/";
            },},{id: "profiles-qff",
          title: 'Qff',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/book/profiles/qff/";
            },},{id: "profiles-syn",
          title: 'Syn',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/book/profiles/syn/";
            },},{id: "profiles-xsw",
          title: 'Xsw',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/book/profiles/xsw/";
            },},{id: "profiles-zqh",
          title: 'Zqh',
          description: "",
          section: "Profiles",handler: () => {
              window.location.href = "/book/profiles/zqh/";
            },},{id: "projects-conmonitor",
          title: 'ConMonitor',
          description: "Lightweight Container Protection with Virtualization and VM Functions",
          section: "Projects",handler: () => {
              window.location.href = "/book/projects/conmonitor-lightweight-container-protection-with-virtualization-and-vm-functions/";
            },},{id: "projects-cubevisor",
          title: 'CubeVisor',
          description: "A Multi-realm Architecture Design for Running VM with ARM CCA",
          section: "Projects",handler: () => {
              window.location.href = "/book/projects/cubevisor-a-multi-realm-architecture-design-for-running-vm-with-arm-cca/";
            },},{id: "projects-hclave",
          title: 'HClave',
          description: "An isolated execution environment design for hypervisor runtime security",
          section: "Projects",handler: () => {
              window.location.href = "/book/projects/hclave-an-isolated-execution-environment-design-for-hypervisor-runtime-security/";
            },},{id: "projects-log2policy",
          title: 'Log2Policy',
          description: "An Approach to Generate Fine-Grained Access Control Rules for Microservices from Scratch",
          section: "Projects",handler: () => {
              window.location.href = "/book/projects/log2policy-an-approach-to-generate-fine-grained-access-control-rules-for-microservices-from-scratch/";
            },},{id: "projects-rcontainer",
          title: 'RContainer',
          description: "A Secure Container Architecture through Extending ARM CCA Hardware Primitives",
          section: "Projects",handler: () => {
              window.location.href = "/book/projects/rcontainer-a-secure-container-architecutre-through-extending-arm-cca-hardware-primitives/";
            },},{id: "projects-secfortress",
          title: 'SecFortress',
          description: "Securing Hypervisor using Cross-layer Isolation",
          section: "Projects",handler: () => {
              window.location.href = "/book/projects/secfortress-securing-hypervisor-using-cross-layer-isolation/";
            },},{id: "projects-sedspec",
          title: 'SEDSpec',
          description: "Securing Emulated Devices by Enforcing Execution Specification",
          section: "Projects",handler: () => {
              window.location.href = "/book/projects/sedspec-securing-emulated-devices-by-enforcing-execution-specification/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6F%6E%74%61%63%74@%64%61%6D%73.%6E%65%74.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dams-lab", "_blank");
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
