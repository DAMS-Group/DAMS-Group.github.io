---
layout: page
title: HClave
description: An Isolated Execution Environment Design for Hypervisor Runtime Security
img: assets/img/octocat/vinyltocat.png
importance: 1
category: Publications
related_publications: true
redirect: javascript:void(0)
---

Virtualization is the cornerstone of cloud computing, but the hypervisor, the crucial software component that enables virtualization, is known to suffer from various attacks. It is challenging to secure the hypervisor due to at least two reasons. On one hand, commercial hypervisors are usually integrated into a privileged Operating System (OS), which brings in a larger attack surface. On the other hand, multiple Virtual Machines (VM) share a single hypervisor, thus a malicious VM could leverage the hypervisor as a bridge to launch "cross-VM" attacks. In this work, we propose HClave, an isolated execution environment (IEE) design for hypervisor runtime. We decouple the virtualization layer into a tiny trusted computing base (TCB), a large non-secure OS, and multiple HClave IEEs through a bidirectional isolation approach. HClave extends the nested kernel approach to deprive the traditional OS from accessing the tiny TCB's memory and creates an IEE for hypervisor runtime. We implemented HClave based on KVM and evaluated its effectiveness and efficiency through case studies. Experimental results show that HClave can significantly improve the security of the hypervisor with reasonable runtime overhead.
