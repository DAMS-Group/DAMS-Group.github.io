---
layout: post
title: 姜楠的学术报告 @ TrustCom 2024
date: 2024-12-17 14:00:00+0800
inline: false
related_posts: false
giscus_comments: true
category: 学术活动
---

姜楠于2024年12月17日在海南发表学术报告《SeChannel: A Secure and Lightweight Channel Protection Approach for TEE Systems》。

报告介绍了在基于ARM TrustZone技术的可信执行环境（TEE）系统中，跨世界通信通道存在的安全隐患及现有保护方法的不足。论文提出SeChannel，这是一种轻量级的通信通道保护方案。它借助ARM可信固件（ATF）实现细粒度访问控制，通过验证共享内存地址和TA会话来防止不受信任的Rich OS进行未经授权的访问。SeChannel无需额外硬件，避免了加密和内存复制带来的性能开销。在Hikey960开发板上基于OP-TEE实现的原型显示，SeChannel能有效增强通信通道安全性，且性能开销可忽略不计。

{% include figure.liquid loading="eager" path="assets/img/news/conferences/dams@trustcom2024.jpg" title="姜楠@TrustCom2024" class="img-fluid rounded z-depth-1" width="80%" center="true" %}
