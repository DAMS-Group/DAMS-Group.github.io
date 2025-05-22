---
layout: page
title: EnclavePDP
description: A General Framework to Verify Data Integrity in Cloud Using Intel SGX
img: https://octodex.github.com/images/inspectocat.jpg
pub_year: 2020
category: Publications
related_publications: true
redirect: javascript:void(0)
---

As the cloud storage service becomes pervasive, verifying the integrity of their outsourced data on cloud remotely turns out to be challenging for users. Existing Provable Data Possession (PDP) schemes mostly resort to a Third Party Auditor (TPA) to verify the integrity on behalf of users, thus reducing their communication and computation burden. However, such schemes demand fully trusted TPA, that is, placing TPA in the Trusted Computing Base (TCB), which is not always a reasonable assumption. In this paper, we propose EnclavePDP, a secure and general data integrity verification framework that relies on Intel SGX to establish the TCB for PDP schemes, thus eliminating the TPA from the TCB. EnclavePDP supports both new and existing PDP schemes by integrating core functionalities of cryptography libraries into Intel SGX. We choose 10 existing representative PDP schemes, and port them into EnclavePDP with reasonable effort. By deploying EnclavePDP in a real-world cloud storage platform and running the 10 PDP schemes respectively, we demonstrate that EnclavePDP can eliminate the dependence on TPA and introduce reasonable performance overhead.
