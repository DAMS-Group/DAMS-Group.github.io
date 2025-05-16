---
layout: page
title: USB Catcher
description: Detection of Controlled Emissions via Conducted Compromising Emanations
img: assets/img/octocat/dinotocat.png
pub_year: 2024
category: Publications
related_publications: true
redirect: javascript:void(0)
---

The security of the Universal Serial Bus (USB) is critical due to its widespread use. Attackers can exploit electromagnetic emissions from USB devices to steal sensitive information, and detecting controlled emissions from USB has long been a challenging issue. Existing methods for detecting controlled emissions based on radiated compromising emanations are often hindered by environmental noise, electromagnetic interference, and device variability, leading to reduced detection capability. To address these challenges, this paper, for the first time, proposes a method for detecting controlled emissions from USB devices through conducted compromising emanations. First, we construct a dataset of USB leakage signals based on conducted compromising emanations. Then, we propose a multiscale time-frequency processing technique for USB leakage signals, applying time-frequency analysis to generate spectrograms containing both time-domain and frequency-domain features. By leveraging multiscale data augmentation, the accuracy and generalization of detection model are enhanced. Finally, we employ a Residual Network to automatically extract features and detect abnormal signals. Extensive experiments demonstrate that this method can effectively identify controlled emissions from USB devices, achieving an AUC of 99.52% and an ACC of 96.74%, providing a robust solution for anomaly detection and enhancing the security of USB devices. 