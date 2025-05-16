---
layout: page
title: vASP
description: Full VM Life-cycle Protection Based on Active Security Processor Architecture
img: assets/img/octocat/catstello.png
pub_year: 2024
category: Publications
related_publications: true
redirect: javascript:void(0)
---

Cloud computing has been applied on a large scale due to its competitive advantages. However, the introduction of virtualization brings new risks, which can come from within the VM and the host. Due to the abstraction of hardware resources by the hypervisor, traditional trusted computing methods, such as TPM and ASP, are no longer available in cloud environments. Existing work focusing on enabling trusted computing in cloud computing is primarily based on TPM and vTPM, but there are still issues such as the trusted chain not covering all stages of the VM life cycle and the integrity measurement operation potentially causing high overhead. In this paper, we present the vASP architecture, which solves the limitation of the ASP architecture in a cloud environment. Using customization features provided by the ASP, we customize interfaces for the vASP architecture and pass the trusted relationship to the upper layer to form a complete chain of trust. The vASP front-end plugs into the hypervisor actively and regularly operates the dynamic measurement process of the guest to ensure that data from the guest machine are not tampered with. With the introduction of vASP in the cloud computing platform, the security of vASP components during VM operation is also a concern. As a result, we propose a full VM life-cycle protection method through verification and measurement mechanisms that cannot be bypassed to ensure that vASP maintains a match with specific VMs. We have implemented the vASP architecture on a commercial platform deployed with ASP architecture and evaluated it. The result shows that the vASP architecture can protect VM integrity well during full life-cycle and has very low overhead compared to the native virtualization architecture.
