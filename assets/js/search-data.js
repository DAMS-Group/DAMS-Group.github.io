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
        },{id: "nav-发表",
          title: "发表",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-团队",
          title: "团队",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-新闻",
          title: "新闻",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "members-chenjiayun",
          title: 'Chenjiayun',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/chenjiayun/";
            },},{id: "members-chenyang",
          title: 'Chenyang',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/chenyang/";
            },},{id: "members-guofeng",
          title: 'Guofeng',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/guofeng/";
            },},{id: "members-heyun",
          title: 'Heyun',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/heyun/";
            },},{id: "members-hujunjie",
          title: 'Hujunjie',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/hujunjie/";
            },},{id: "members-lihaiyang",
          title: 'Lihaiyang',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/lihaiyang/";
            },},{id: "members-zhangzhicong",
          title: 'Zhangzhicong',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/zhangzhicong/";
            },},{id: "members-baiyirui",
          title: 'Baiyirui',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/baiyirui/";
            },},{id: "members-caowenzhuo",
          title: 'Caowenzhuo',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/caowenzhuo/";
            },},{id: "members-fanjuncheng",
          title: 'Fanjuncheng',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/fanjuncheng/";
            },},{id: "members-gaozibo",
          title: 'Gaozibo',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/gaozibo/";
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
            },},{id: "members-liyakai",
          title: 'Liyakai',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/liyakai/";
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
            },},{id: "members-shanlixiao",
          title: 'Shanlixiao',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/shanlixiao/";
            },},{id: "members-songyanni",
          title: 'Songyanni',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/songyanni/";
            },},{id: "members-wangjie",
          title: 'Wangjie',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/wangjie/";
            },},{id: "members-wangjuchen",
          title: 'Wangjuchen',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/wangjuchen/";
            },},{id: "members-wanyisen",
          title: 'Wanyisen',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/wanyisen/";
            },},{id: "members-xiadeguo",
          title: 'Xiadeguo',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/xiadeguo/";
            },},{id: "members-xieqiang",
          title: 'Xieqiang',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/xieqiang/";
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
            },},{id: "members-zhaoyuanbo",
          title: 'Zhaoyuanbo',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/zhaoyuanbo/";
            },},{id: "members-zhengqiutong",
          title: 'Zhengqiutong',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/zhengqiutong/";
            },},{id: "members-高级工程师",
          title: '高级工程师',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/duhaichao/";
            },},{id: "members-工程师",
          title: '工程师',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/jiangnan/";
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
            },},{id: "members-高级工程师-硕导",
          title: '高级工程师 硕导',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/songchen/";
            },},{id: "members-助理研究员",
          title: '助理研究员',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/songqiyang/";
            },},{id: "members-正高级工程师-博导",
          title: '正高级工程师 博导',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/songzhenyu/";
            },},{id: "members-高级工程师-硕导",
          title: '高级工程师 硕导',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/xieyamin/";
            },},{id: "members-工程师",
          title: '工程师',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/xushaowen/";
            },},{id: "members-工程师",
          title: '工程师',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/zhangyixin/";
            },},{id: "members-高级工程师-硕导",
          title: '高级工程师 硕导',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/zhoumengting/";
            },},{id: "members-副研究员-硕导",
          title: '副研究员 硕导',
          description: "",
          section: "Members",handler: () => {
              window.location.href = "/members/zhouqihang/";
            },},{id: "news-论文录用-acsac-2023",
          title: '【论文录用】ACSAC 2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@acsac2023/";
            },},{id: "news-团建活动-2023年10月15日秋日团建",
          title: '【团建活动】2023年10月15日秋日团建',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/team-building-2023/";
            },},{id: "news-学术报告-徐少文的报告-acsac-2023",
          title: '【学术报告】徐少文的报告 @ ACSAC 2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/xushaowen@acsac2023/";
            },},{id: "news-论文录用-ccgrid-2024",
          title: '【论文录用】CCGrid 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@ccgrid2024/";
            },},{id: "news-论文录用-iscc-2024",
          title: '【论文录用】ISCC 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@iscc2024/";
            },},{id: "news-学术报告-陈家赟的报告-ccgrid-2024",
          title: '【学术报告】陈家赟的报告 @ CCGrid 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/chenjiayun@ccgrid/";
            },},{id: "news-学术报告-李亚凯的报告-geekcon-international-2024",
          title: '【学术报告】李亚凯的报告 @ GeekCon International 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/liyankai@geekcon2024/";
            },},{id: "news-学术报告-姜楠的报告-ifipsec-2024",
          title: '【学术报告】姜楠的报告 @ IFIPSEC 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/jiangnan@ifipsec2024/";
            },},{id: "news-学术报告-张艺馨的报告-iscc-2024",
          title: '【学术报告】张艺馨的报告 @ ISCC 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/zhangyixin@iscc2024/";
            },},{id: "news-论文录用-icpads-2024",
          title: '【论文录用】ICPADS 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@icpads2024/";
            },},{id: "news-论文录用-acsac-2024",
          title: '【论文录用】ACSAC 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@acsac2024/";
            },},{id: "news-学术报告-张志聪的报告-icpads-2024",
          title: '【学术报告】张志聪的报告 @ ICPADS 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/zhangzhicong@icpads2024/";
            },},{id: "news-团建活动-2024年10月25日年度团建",
          title: '【团建活动】2024年10月25日年度团建',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/team-building-2024/";
            },},{id: "news-论文录用-trustcom-2024",
          title: '【论文录用】TrustCom 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@trustcom2024/";
            },},{id: "news-论文录用-socc-2024",
          title: '【论文录用】SoCC 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@socc2024/";
            },},{id: "news-论文录用-ndss-2025",
          title: '【论文录用】NDSS 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@ndss2025/";
            },},{id: "news-学术报告-陈家赟的报告-acsac-2024",
          title: '【学术报告】陈家赟的报告 @ ACSAC 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/chenjiayun@acsac2024/";
            },},{id: "news-学术报告-姜楠的学术报告-trustcom-2024",
          title: '【学术报告】姜楠的学术报告 @ TrustCom 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/jiangnan@trustcom2024/";
            },},{id: "news-学术报告-徐少文的报告-socc-2024",
          title: '【学术报告】徐少文的报告 @ SoCC 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/xushaowen@socc2024/";
            },},{id: "news-学术报告-张艺馨的学术报告-trustcom-2024",
          title: '【学术报告】张艺馨的学术报告 @ TrustCom 2024',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/zhangyixin@trustcom2024/";
            },},{id: "news-学术报告-陈家赟的报告-ndss-2025",
          title: '【学术报告】陈家赟的报告 @ NDSS 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/chenjiayun@ndss2025/";
            },},{id: "news-学术报告-宋奇阳的学术报告-ndss-2025",
          title: '【学术报告】宋奇阳的学术报告 @ NDSS 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/songqiyang@ndss2025/";
            },},{id: "news-论文录用-mobisys-2025",
          title: '【论文录用】MobiSys 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@mobisys2025/";
            },},{id: "news-论文录用-sigmetrics-2025",
          title: '【论文录用】SIGMETRICS 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@sigmetrics2025/";
            },},{id: "news-论文录用-usenix-security-2025",
          title: '【论文录用】USENIX Security 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@usenixsecurity2025/";
            },},{id: "news-文体活动-2025-quot-信工杯-quot-羽毛球比赛创佳绩",
          title: '【文体活动】2025&amp;quot;信工杯&amp;quot;羽毛球比赛创佳绩',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/badminton-competition-2025/";
            },},{id: "news-论文录用-ecai-2025",
          title: '【论文录用】ECAI 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@ecai2025/";
            },},{id: "news-学术报告-姜楠的学术报告-mobisys-2025",
          title: '【学术报告】姜楠的学术报告 @ MobiSys 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/jiangnan@mobisys2025/";
            },},{id: "news-论文录用-acm-ccs-2025",
          title: '【论文录用】ACM CCS 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@ccs2025/";
            },},{id: "news-论文录用-aaai-2026",
          title: '【论文录用】AAAI 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@aaai2026/";
            },},{id: "news-论文录用-ndss-2026",
          title: '【论文录用】NDSS 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@ndss2026/";
            },},{id: "news-论文录用-usenix-security-2026",
          title: '【论文录用】USENIX Security 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@security2026/";
            },},{id: "news-学术报告-刘昕的学术报告-ecai-2025",
          title: '【学术报告】刘昕的学术报告 @ ECAI 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/liuxin@ecai2025/";
            },},{id: "news-论文录用-ieee-tc",
          title: '【论文录用】IEEE TC',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@tc2026/";
            },},{id: "news-论文录用-www-2026",
          title: '【论文录用】WWW 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@www2026/";
            },},{id: "news-论文录用-asplos-2026",
          title: '【论文录用】ASPLOS 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@asplos2026/";
            },},{id: "news-团建活动-2026年1月19日年度团建",
          title: '【团建活动】2026年1月19日年度团建',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/team-building-2026/";
            },},{id: "news-论文录用-ieee-secon-2026",
          title: '【论文录用】IEEE SECON 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@ieeesecon2026/";
            },},{id: "news-论文录用-dsn-2026",
          title: '【论文录用】DSN 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@dsn2026/";
            },},{id: "news-论文录用-usenix-security-2026",
          title: '【论文录用】USENIX Security 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/accept@usenixsecurity2026-gaozibo/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/dams-group", "_blank");
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
