---
layout: page
title: LightArmor
description: A Lightweight Trusted Operating System Isolation Approach for Mobile Systems
img: assets/img/octocat/scubatocat.png
pub_year: 2024
category: Publications
related_publications: true
redirect: javascript:void(0)
---

Mobile systems extensively leverage Trusted Execution Environments (TEEs) to protect sensitive applications. However, the Trusted Operating System (TOS), as a critical component of TEE, has exposed many vulnerabilities in recent years. With the high privilege of TOS, an attacker who gains control of TOS can take over arbitrary system components, and the privacy of the system can no longer be guaranteed. Although existing methods provide multiple dependent environments to confine the impact into a single TOS instance, they cause substantial memory duplicates of TOS within the resource-constrained TEE. This paper proposes a lightweight isolation approach called LightArmor for TEE-based mobile systems. LightArmor provides protection mechanisms in a tiny context (LArmor) that guarantees the security of other components even if TOS is compromised. Specifically, LightArmor deprives TOS of memory management privilege and provides protection mechanisms to limit TOS's ability to perform privileged operations. To guarantee the security of LArmor, we feature a non-bypassable memory isolation mechanism through virtualizing memory management unit. We evaluate LightArmor in a real-world Hikey960 development board. Experimental results demonstrate that LightArmor can enhance system security with a negligible performance overhead. 