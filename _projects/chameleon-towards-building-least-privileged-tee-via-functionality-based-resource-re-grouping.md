---
layout: page
title: Chameleon
description: Towards Building Least-privileged TEE via Functionality-based Resource Re-grouping
img: assets/img/octocat/umbrellatocat.jpg
pub_year: 2025
category: Publications
related_publications: true
redirect: https://github.com/TZChameleon/CHAMELEON
---

TrustZone-assisted Trusted Execution Environment (TEE) has been widely employed in mobile devices to protect sensitive applications. With increased customization demands, Trusted Applications (TAs) have become more flexible and complex, exposing numerous vulnerabilities within the TEE. Furthermore, due to the unrestricted Trusted Operating System (TOS) services provided to TA, an attacker can exploit vulnerabilities to compromise the whole TEE system. In this paper, we propose a novel customized TOS partition approach, called Chameleon, to enhance the security of the TrustZone-assisted TEE system. Inspired by the principle of least privilege and our TEE vulnerability analysis, we first categorize the TOS into TOS service modules and basic kernel modules. Then, we selectively encapsulate these modules into distinct Capsules based on the TA’s functional requirements, providing each TA with a separate execution environment (TA-entity). To enforce access control and confine vulnerable modules within a TA-entity, we introduce T-Visor, which serves as our Trusted Computing Base. Our prototype implementation, built upon Linaro’s OP-TEE, requires only 2.9K Lines of Code (LoC) modifications. Evaluation on a Hikey960 board demonstrates that Chameleon reduces the attack surface of TOS services to 51% and mitigates 122 out of 138 CVEs (88.41%) with negligible performance overhead.
