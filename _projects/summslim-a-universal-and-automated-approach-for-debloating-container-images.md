---
layout: page
title: SummSlim
description: A Universal and Automated Approach for Debloating Container Images
img: assets/img/octocat/skatetocat.png
pub_year: 2024
category: Publications
related_publications: true
redirect: https://github.com/prcuzz/SummSlim
---

Container technology has become a cornerstone of cloud computing, offering notable benefits such as enhanced resource utilization and streamlined deployment processes. The adoption of container technology by leading cloud service providers has steadily increased over the years. However, during the image construction phase, the reuse of base images and the execution of certain commands often results in the retention of redundant files, leading to resource wastage and potential security vulnerabilities. In this research, we systematically review and analyze existing methodologies, identify shortcomings in current approaches, and propose an automated image debloating tool named SummSlim according to the characteristics of the container image construction process. We selected 195 official images from Docker Hub for testing and evaluated the effectiveness of SummSlim with a success rate of 98.46%. Then we compare and analyze the images before and after debloating, and make some novel suggestions for developers. To the best of our knowledge, SummSlim is the first practically available universal image debloating tool. 