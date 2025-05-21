---
layout: post
title: 【学术报告】徐少文的报告 @ SoCC 2024
date: 2024-12-20 14:00:00+0800
inline: false
related_posts: false
giscus_comments: false
category: 学术活动
---

徐少文于2024年12月20日在美国华盛顿参加ACM云计算论坛（Proceedings of the ACM Symposium on Cloud Computing, SoCC 2024），在会议上汇报了题为《ConMonitor: Lightweight Container Protection with Virtualization and VM Functions》的学术研究成果。

<div style="text-align: center;">
    <img alt="徐少文@SoCC2024" src="/assets/img/news/conferences/xushaowen@socc2024.jpg" width="60%" style="margin: 0 auto" />
</div>

该工作基于轻量级虚拟化和VMFUNC机制实现了安全容器架构ConMonitor，其通过为每个容器创建独立的EPT页表，实现容器和容器、容器和内存之间的内存隔离，并且通过VMFUNC机制实现EPT指针的快速切换。

<div style="text-align: center;">
    <img alt="徐少文@SoCC2024-2" src="/assets/img/news/conferences/xushaowen@socc2024-2.jpg" width="60%" style="margin: 0 auto" />
</div>

ConMonitor通过引入轻量级虚拟化软件ConVisor，剥夺了操作系统对物理内存的控制权限。ConMonitor系统的TCB由ConVisor和Container Guardian 构成。

<div style="text-align: center;">
    <img alt="徐少文@SoCC2024-3" src="/assets/img/news/conferences/xushaowen@socc2024-3.jpg" width="60%" style="margin: 0 auto" />
</div>

ConVisor运行在Root模式，负责为容器创建隔离环境、监控操作系统敏感操作并支持VMFUNC指令；为应对VMFUNC指令带来的额外攻击面，ConMonitor在Non Root R0模式下引入Container Guardian，它与内核运行在同一特权级，可快速的上下文切换，无需切换CPU的特权级。Container Guardian主要为内核提供敏感操作服务，内核执行敏感操作时需将控制流交给Container Guardian，在执行完成后在返回到内核。ConVisor通过EPT限制内核对容器内存的访问权限，直接访问会引发EPT Violation并陷入到ConVisor中。

<div style="text-align: center;">
    <img alt="徐少文@SoCC2024-4" src="/assets/img/news/conferences/xushaowen@socc2024-4.jpg" width="60%" style="margin: 0 auto" />
</div>

ConMonitor在无需硬件TEE的情况下，针对操作系统内核参与的攻击行为实现了容器应用机密性和完整性保护框架。其重要组件ConVisor提供了轻量级 Hypervisor范式，并且利用VMFUNC机制减少不必要的虚拟机退出，实验表明ConMonitor能够保护容器应用的机密性和完整性，且只引入了不多于15%的性能开销。

<div style="text-align: center;">
    <img alt="徐少文@SoCC2024-5" src="/assets/img/news/conferences/xushaowen@socc2024-5.jpg" width="60%" style="margin: 0 auto" />
</div>
