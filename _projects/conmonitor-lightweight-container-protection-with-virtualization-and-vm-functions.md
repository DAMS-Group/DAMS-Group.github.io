---
layout: page
title: ConMonitor
description: Lightweight Container Protection with Virtualization and VM Functions
img: https://octodex.github.com/images/justicetocat.jpg
pub_year: 2024
category: Publications
related_publications: true
redirect: javascript:void(0)
---

Containers are widely used in multi-tenant cloud computing for their ease of deployment, minimal overhead, and fast start-up. However, the intrinsic shared kernel model of containers poses significant security threats, risking confidentiality and integrity from co-located containers or compromised OS. Researchers have proposed various methods to protect containers from untrusted OS, but few consider both the universality and efficiency. In this paper, we present ConMonitor—a lightweight and efficient container protection architecture. ConMonitor protects the security of container application data by introducing a compact virtualization software, called ConVisor, as a trusted computing base. ConVisor enforces isolation of the physical memory between containers and the kernel, and monitors the sensitive operations performed by the OS. To ensure the security of ConMonitor, we implement a Container Guardian to serve as an intermediary for the kernel, managing sensitive operations. Moreover, we also leverage the VMFUNC feature to achieve fast context switching, thereby mitigating the performance penalty associated with frequent context switching. We have implemented ConMonitor on Intel CPU with Virtualization Technology, and the evaluation results show that ConMonitor can protect the security of container applications with a negligible performance overhead.
