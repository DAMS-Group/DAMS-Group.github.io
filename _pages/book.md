---
layout: default
title: 著作
permalink: /book/
nav: true
nav_order: 2
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page

# 书本照片
about_profile:
  align: right
  image: book.png
  image_circular: false # crops the image to make it circular

intro: 本书系统性地剖析了Linux系统虚拟化的核心技术，构建了从基础原理、实现细节到安全攻防的完整虚拟化知识体系。书中内容涵盖CPU、内存、I/O与中断虚拟化等核心模块，结合QEMU/KVM等主流开源框架的代码实例，揭示虚拟化软件的设计逻辑与底层实现机制。在此基础上，本书专门设置了虚拟化安全章节，系统介绍了虚拟化赋能的安全特性、虚拟化引入的潜在威胁，以及相应的防御方法。
authors: 贾晓启 周启航
---

{% include book.liquid %}
