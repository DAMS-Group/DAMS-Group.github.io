---
layout: post
title: 【论文录用】TrustCom 2024
date: 2024-11-02 14:00:00+0800
inline: false
related_posts: false
giscus_comments: false
category: 学术活动
---

恭喜张艺馨和姜楠的论文被 TrustCom 2024 录用！

张艺馨的论文《USB Catcher: Detection of Controlled Emissions via Conducted Compromising Emanations》提出了一种通过传导泄漏发射检测USB受控电磁辐射的方法。该方法针对现有基于辐射泄漏发射的检测方法易受环境噪声、电磁干扰和设备个体差异影响、检测能力较弱的问题，首先构建了基于传导泄漏发射的USB泄漏信号数据集。随后，提出了基于多尺度时频图的USB泄漏信号处理技术，应用时频分析生成同时包含时域和频域特征的时频图，并通过多尺度数据增广提升检测模型的准确率和泛化性。最后，论文采用基于残差网络（ResNet）的深度学习模型自动提取特征并检测异常信号。大量实验表明，该方法能够有效识别USB设备的受控电磁辐射，AUC可达99.52%，ACC可达96.74%，为检测USB受控电磁辐射提供了稳健的解决方案，增强了USB设备的安全性。

姜楠的论文《SeChannel: A Secure and Lightweight Channel Protection Approach for TEE Systems》介绍了在基于ARM TrustZone技术的可信执行环境（TEE）系统中，跨世界通信通道存在的安全隐患及现有保护方法的不足。论文提出SeChannel，这是一种轻量级的通信通道保护方案。它借助ARM可信固件（ATF）实现细粒度访问控制，通过验证共享内存地址和TA会话来防止不受信任的Rich OS进行未经授权的访问。SeChannel无需额外硬件，避免了加密和内存复制带来的性能开销。在Hikey960开发板上基于OP-TEE实现的原型显示，SeChannel能有效增强通信通道安全性，且性能开销可忽略不计。
