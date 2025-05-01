---
layout: page
title: 新闻
permalink: /news/
description: 实验室新闻。
nav: true
nav_order: 1
---

<div class="news-container">
  <!-- 左侧导航栏 -->
  <div class="news-sidebar">
    <h3>导航栏</h3>
    <div class="news-timeline">
      {% if site.news != blank %}
        {% assign news = site.news | reverse %}
        {% for item in news %}
          <div class="timeline-item">
            <div class="timeline-date">{{ item.date | date: '%Y-%m-%d' }}</div>
            <a href="#news-{{ forloop.index }}">{{ item.title }}</a>
          </div>
        {% endfor %}
      {% endif %}
    </div>
  </div>

  <!-- 右侧内容区 -->
  <div class="news-content">
    {% if site.news != blank %}
      {% assign news = site.news | reverse %}
      {% for item in news %}
        <div id="news-{{ forloop.index }}" class="news-card">
          <div class="news-date">{{ item.date | date: '%Y-%m-%d' }}</div>
          <h4>
            {% if item.inline %}
              {{ item.title }}
            {% else %}
              <a href="{{ item.url | relative_url }}">{{ item.title }}</a>
            {% endif %}
          </h4>
          <div class="news-content">
            {% if item.inline %}
              {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
            {% else %}
              {% assign first_paragraph = item.content | split: '</p>' | first | remove: '<p>' %}
              {{ first_paragraph }}
              <a href="{{ item.url | relative_url }}" class="read-more">阅读更多</a>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    {% else %}
      <p>暂无新闻...</p>
    {% endif %}
  </div>
</div>
