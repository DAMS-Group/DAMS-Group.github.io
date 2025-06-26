---
layout: post
title: 【论文录用】USENIX Security 2025
date: 2025-06-11 14:00:00+0800
inline: false
related_posts: false
giscus_comments: false
category: 学术活动
---

恭喜高子博的论文《I Know What You Said: Unveiling Hardware Cache Side-Channels in Local Large Language Model Inference》被 USENIX Security 录用。

本地部署的大型语言模型（LLMs）因其在隐私敏感任务中的应用而备受关注，包括Meta、Google和Intel等公司都在本地LLM开发中扮演了重要角色。然而，现有研究尚未揭示本地 LLM 在硬件缓存侧信道方面的安全性。尽我们所知，本文首次发现了本地 LLM 推理中的新型侧信道漏洞：token值和token位置泄露，这些漏洞泄露模型的输入和输出文本，从而威胁用户隐私。具体而言，本文发现token embedding操作的缓存访问模式泄露了token的索引值，而自回归解码阶段的时序泄露了token的位置。为了展示这些泄露的潜在危害，本文设计了一种针对开源和商业 LLM 推理系统的新型窃听攻击框架。该框架利用与 LLM 同时运行的间谍应用程序来探测缓存访问时序并生成缓存trace，然后将这些含有噪声的缓存trace映射到受害者的对话文本。值得注意的是，该攻击不会直接与受害者的 LLM 进行交互，并且可以在没有任何特权的情况下执行。本文在多种实际部署本地 LLM 模型（例如 Llama、Falcon 和 Gemma）上评估了这一攻击，结果表明本文攻击在重建输入和输出文本方面取得了较高准确率。恢复的输出文本平均编辑距离相似度为 98.0%，重建的输入文本平均余弦相似度为 94.8%。
