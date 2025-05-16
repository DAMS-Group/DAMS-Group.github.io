---
layout: page
title: SeChannel
description: A Secure and Lightweight Channel Protection Approach for TEE Systems
img: assets/img/octocat/manufacturetocat.png
pub_year: 2024
category: Publications
related_publications: true
redirect: javascript:void(0)
---

Trusted Execution Environments (TEEs) are essential for securing sensitive data by isolating it from potentially vulnerable execution environments. In ARM-based devices, TEEs utilize TrustZone technology to create a secure world for Trusted Applications (TAs) and a normal world for Client Applications (CAs), ensuring strict isolation through hardware mechanisms. Despite this protection, current TEE systems lack robust mechanisms for securing TA access, leaving them vulnerable to attacks that exploit cross-world communication channels. This paper introduces SeChannel, a lightweight solution for securing communication channels in TrustZone-assisted TEEs. Unlike existing methods, SeChannel requires no additional hardware and avoids the performance penalties of encryption and memory copying. By leveraging existing ARM Trusted Firmware (ATF), SeChannel implements fine-grained access control to ensure that communication between CAs and TAs is authenticated and protected. It verifies shared memory addresses and TA sessions, preventing unauthorized access by the Rich OS. We implement a prototype of SeChannel on the Hikey960 development board with minimal code modifications to the existing system. Our evaluation demonstrates that SeChannel significantly enhances the security of TrustZone-assisted TEEs with negligible performance overhead.
