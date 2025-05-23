---
layout: page
title: SEEF-ALDR
description: A Speaker Embedding Enhancement Framework via Adversarial Learning based Disentangled Representation
img: https://octodex.github.com/images/steroidtocat.png
pub_year: 2020
category: Publications
related_publications: true
redirect: javascript:void(0)
---

Speaker verification, as a biometric authentication mechanism, has been widely used due to the pervasiveness of voice control on smart devices. However, the task of “in-the-wild” speaker verification is still challenging, considering the speech samples may contain lots of identity-unrelated information, e.g., background noise, reverberation, emotion, etc. Previous works focus on optimizing the model to improve verification accuracy, without taking into account the elimination of the impact from the identity-unrelated information. To solve the above problem, we propose SEEF-ALDR, a novel Speaker Embedding Enhancement Framework via Adversarial Learning based Disentangled Representation, to reinforce the performance of existing models on speaker verification. The key idea is to retrieve as much speaker identity information as possible from the original speech, thus minimizing the impact of identity-unrelated information on the speaker verification task by using adversarial learning. Experimental results demonstrate that the proposed framework can significantly improve the performance of speaker verification by 20.3% and 23.8% on average over 13 tested baselines on dataset Voxceleb1 and 8 tested baselines on dataset Voxceleb2 respectively, without adjusting the structure or hyper-parameters of them. Furthermore, the ablation study was conducted to evaluate the contribution of each module in SEEF-ALDR. Finally, porting an existing model into the proposed framework is straightforward and cost-efficient, with very little effort from the model owners due to the modular design of the framework.
