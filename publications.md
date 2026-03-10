---
layout: default
title: Publications
description: Publications of Daiki Tomojiri-Kadotani
page_css: /assets/css/pages/publications.css
permalink: /publications/
---

<section class="page-section">
  <h1>Publications</h1>
  <p class="lead">
    Selected publications and research outputs.
  </p>

  {% for group in site.data.publications %}
    <h2 class="publication-year">{{ group.year }}</h2>
    <ul class="publication-list">
      {% for pub in group.entries %}
      <li class="publication-item">
        <div>{{ pub.authors }}</div>
        <div class="publication-title">{{ pub.title }}</div>
        <div class="publication-meta">
          <em>{{ pub.journal }}</em>
          {% if pub.doi %}
            · <a href="{{ pub.doi }}" target="_blank" rel="noopener noreferrer">DOI</a>
          {% endif %}
        </div>
      </li>
      {% endfor %}
    </ul>
  {% endfor %}
</section>