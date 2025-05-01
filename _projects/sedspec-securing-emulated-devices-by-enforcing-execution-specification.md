---
layout: page
title: SEDSpec
description: Securing Emulated Devices by Enforcing Execution Specification
img: assets/img/octocat/mcefeeline.jpg
importance: 1
category: Publications
related_publications: true
redirect: javascript:void(0)
---

Device emulation is a vital aspect of virtualization, yet remains vulnerable to security threats. Prior research has focused on monitoring I/O data flow or identifying internal device anomalies but often falls short in precision and automation. In this paper, we propose a novel method that leverages the normal operations of an emulated device to formulate an execution specification. The specification acts as a criterion to evaluate the device’s behavior and state transitions. We implement SEDSpec, a prototype system that automatically generates the execution specification for an emulated device and devises three check strategies for identifying any deviations from this specification, thereby ensuring normal operations and enhancing the security of the emulated device. We evaluate SEDSpec with five different execution specifications. The results show that SEDSpec can detect anomalies caused by vulnerability exploitation while maintaining the devices’ regular functioning with minimal performance overhead.
