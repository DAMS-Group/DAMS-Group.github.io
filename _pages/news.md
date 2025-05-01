---
layout: page
title: 新闻
permalink: /news/
description: 实验室新闻。
nav: true
nav_order: 1
---

<div class="news-container" style="display: flex; gap: 2rem; margin: 0 auto; max-width: 1200px;">
  <!-- 左侧导航栏 -->
  <div class="news-sidebar" style="flex: 0 0 200px; background: #f8f9fa; padding: 1.2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); position: sticky; top: 2rem; align-self: flex-start; height: fit-content; max-height: calc(100vh - 4rem); overflow-y: auto;">
    <h3 style="margin-bottom: 1.2rem; color: #2c3e50; font-weight: 600; position: sticky; top: 0; background: #f8f9fa; padding: 0.5rem 0; z-index: 1;">导航栏</h3>
    <div class="news-timeline" style="padding-right: 0.5rem;">
      {% if site.news != blank %}
        {% assign news = site.news | reverse %}
        {% for item in news %}
          <div class="timeline-item" style="margin-bottom: 0.8rem; padding-left: 0.8rem; border-left: 2px solid #3498db; position: relative; transition: all 0.3s ease;">
            <div style="font-size: 0.85rem; color: #666;">{{ item.date | date: '%Y-%m-%d' }}</div>
            <a href="#news-{{ forloop.index }}" style="color: #2c3e50; text-decoration: none; font-weight: 500; display: block; margin-top: 0.2rem; transition: color 0.2s; font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" onmouseover="this.style.color='#3498db'; this.parentNode.style.transform='translateX(5px)'; this.parentNode.style.borderLeftColor='#2980b9';" onmouseout="this.style.color='#2c3e50'; this.parentNode.style.transform='translateX(0)'; this.parentNode.style.borderLeftColor='#3498db';">{{ item.title }}</a>
          </div>
        {% endfor %}
      {% endif %}
    </div>
  </div>

  <!-- 右侧内容区 -->
  <div class="news-content" style="flex: 1; min-width: 0;">
    {% if site.news != blank %}
      {% assign news = site.news | reverse %}
      {% for item in news %}
        <div id="news-{{ forloop.index }}" class="news-card" style="background: white; padding: 1.5rem; margin-bottom: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: transform 0.2s;">
          <div class="news-date" style="color: #666; font-size: 0.9rem; margin-bottom: 0.5rem;">{{ item.date | date: '%Y-%m-%d' }}</div>
          <h4 style="color: #2c3e50; margin-bottom: 1rem; font-weight: 600;">
            {% if item.inline %}
              {{ item.title }}
            {% else %}
              <a href="{{ item.url | relative_url }}" style="color: inherit; text-decoration: none;">{{ item.title }}</a>
            {% endif %}
          </h4>
          <div class="news-content" style="color: #444; line-height: 1.6;">
            {% if item.inline %}
              {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
            {% else %}
              {% assign first_paragraph = item.content | split: '</p>' | first | remove: '<p>' %}
              {{ first_paragraph }}
              <a href="{{ item.url | relative_url }}" style="color: #3498db; text-decoration: none; display: inline-block; margin-top: 0.5rem; transition: all 0.3s ease;" onmouseover="this.style.color='#2980b9'; this.style.transform='translateX(5px)';" onmouseout="this.style.color='#3498db'; this.style.transform='translateX(0)';">阅读更多</a>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    {% else %}
      <p>暂无新闻...</p>
    {% endif %}
  </div>
</div>
