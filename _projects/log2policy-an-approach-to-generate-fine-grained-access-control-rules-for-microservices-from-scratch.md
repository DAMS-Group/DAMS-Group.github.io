---
layout: page
title: Log2Policy
description: An Approach to Generate Fine-Grained Access Control Rules for Microservices from Scratch
img: https://octodex.github.com/images/snowtocat_final.jpg
pub_year: 2023
category: Publications
related_publications: true
redirect: javascript:void(0)
---

Microservice application architecture is one of the most widely used service architectures in the industry. To prevent a compromised microservice from abusing other microservices, authorization policy is applied to regulate the access among them. However, configuring access control policy manually is challenging due to the complexity and dynamic nature of microservice applications. In this paper, we present Log2Policy, a novel approach to generate microservice authorization policy based on access logs. Our approach consists of three fundamental techniques: (1) a log-based topological graph generation mechanism that automatically infers the invocation logic among microservices, (2) a machine learning based attributes mining method that extracts the relevant attributes of requests, and (3) a policy upgrade mechanism based on traffic management that can significantly reduce the upgrade time. We have implemented a prototype of Log2Policy on mainstream microservice infrastructures and have evaluated it with several microservice applications. The results show that Log2Policy can generate fine-grained and effective access control rules and upgrade them with negligible overhead.
