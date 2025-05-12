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
---

{% include book.liquid %}
