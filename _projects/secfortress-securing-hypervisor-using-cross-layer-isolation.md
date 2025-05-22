---
layout: page
title: SecFortress
description: Securing Hypervisor using Cross-layer Isolation
img: https://octodex.github.com/images/securitocat.png
pub_year: 2022
category: Publications
related_publications: true
redirect: javascript:void(0)
---

Virtualization is the corner stone of cloud computing, but the hypervisor, the crucial software component that enables virtualization, is known to suffer from various attacks. It is challenging to secure the hypervisor due to at least two reasons. On one hand, commercial hypervisors are usually integrated into a privileged Operating System (OS), which brings in a larger attack surface. On the other hand, multiple Virtual Machines (VM) share a single hypervisor, thus a malicious VM could leverage the hypervisor as a bridge to launch “cross-VM” attacks. In this work, we propose SecFortress, a dependable hypervisor design that decouples the virtualization layer into a mediator, an outerOS, and multiple HypBoxes through a cross-layer isolation approach. SecFortress extends the nested kernel approach to de-privilege the outerOS from accessing the mediator’s memory and creates an isolated hypervisor instance, HypBox, to confine the impacts from the untrusted VMs. We implemented SecFortress based on KVM and evaluated its effectiveness and efficiency through case studies and performance evaluation. Experimental results show that SecFortress can significantly improve the security of the hypervisor with negligible runtime overhead.
