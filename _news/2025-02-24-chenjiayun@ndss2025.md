---
layout: post
title: 【学术报告】陈家赟的报告 @ NDSS 2025
date: 2025-02-24 14:00:00+0800
inline: false
related_posts: false
giscus_comments: false
category: 学术活动
---

陈家赟于2025年2月24日在美国圣迭戈参加ISOC网络和分布式系统安全峰会（ISOC Network and Distributed System Security Symposium, NDSS 2025），在会议上汇报了题为《RContainer: A Secure Container Architecture through Extending ARM CCA Hardware Primitives》的学术研究成果。

该工作提出了一种名为RContainer的新型安全容器架构，通过扩展ARM机密计算架构（CCA）硬件原语，保护容器免受不可信操作系统的影响，并在容器之间强制实施强隔离。RContainer引入了一个小型可信的迷你操作系统，与降级的操作系统一起运行，负责监控操作系统与容器之间的控制流。实验结果表明，RContainer能够显著增强容器安全性，同时仅带来适度的性能开销和最小的可信计算基（TCB）。

<div style="text-align: center;">
    <img alt="陈家赟@NDSS2025" src="/assets/img/news/conferences/chenjiayun@ndss2025.png" width="60%" style="margin: 0 auto" />
</div>
