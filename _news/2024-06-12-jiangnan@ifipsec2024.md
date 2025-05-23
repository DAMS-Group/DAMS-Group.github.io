---
layout: post
title: 【学术报告】姜楠的报告 @ IFIPSEC 2024
date: 2024-06-12 14:00:00+0800
inline: false
related_posts: false
giscus_comments: false
category: 学术活动
---

姜楠于2024年6月12日在英国爱丁堡参加IFIP国际信息安全会议（IFIP Information Security Conference，IFIPSEC 2024），在会议上汇报了题为《LightArmor: A Lightweight Trusted Operating System Isolation Approach for Mobile Systems》的学术研究成果。

在移动系统安全领域，智能设备中敏感数据易受攻击，基于ARM TrustZone技术的可信执行环境（TEE）虽用于保护敏感应用，但其中的可信操作系统（TOS）存在诸多漏洞，现有应对方法存在不足。论文提出了LightArmor，这是一种针对基于TEE的移动系统的轻量级TOS隔离方法。它将TOS的MMU操作剥离到小型执行环境LArmor，通过MMU虚拟化实现内存隔离保障LArmor安全，并部署保护机制限制TOS特权操作。经在Hikey960开发板上评估，LightArmor能有效增强系统安全性，且性能开销和内存消耗都较低。

<div style="text-align: center;">
    <img alt="姜楠@IFIPSEC2024" src="/assets/img/news/conferences/jiangnan@ifipsec2024.jpg" width="60%" style="margin: 0 auto" />
</div>
