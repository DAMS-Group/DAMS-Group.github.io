---
layout: page
title: CIPO
description: Efficient, Lightweight and Programmable Packet Scheduling
img: assets/img/octocat/fintechtocat.png
pub_year: 2024
category: Publications
related_publications: true
redirect: javascript:void(0)
---

With the rapid development of network devices and increasingly high CPU workloads, packet scheduling will have to be offloaded to hardware. Programmable packet scheduling allows scheduling algorithms to be programmed into network devices without modifying the hardware. It not only retains the flexibility of software but also the scalability of hardware. In existing primitives, the most expressive Push-In-ExtractOut (PIEO) is prohibitively expensive to implement due to its complexity. While its variant, Push-In-Pick-Out (PIPO), offers some improvements, it suffers from insufficient scalability. In this paper, we propose the Classify-In-Push-Out (CIPO) primitive. The core idea of CIPO is to track the rank and predicate of recent packets through a sliding window, filter and classify packets using a prediction-based two-dimensional classification algorithm and a finite number of First-In-First-Out (FIFO) queues. Through theoretical analysis and evaluation with a range of real workloads, CIPO proves that it has a scheduling performance similar to the most expressive scheduling primitive. Importantly, CIPO requires fewer hardware resources while still providing sufficient expressiveness. Primitive on FPGA show that the CIPO-based scheduler achieves an average of 1.24x higher throughput than the PIEO-based scheduler but uses only an average of 26.2% of look-up tables (LUTs) and 12.2% of the block RAM of the latter.
