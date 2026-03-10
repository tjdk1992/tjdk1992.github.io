---
layout: default
title: Publication
description: tmjdk-oecologist
page_css: /assets/css/pages/publications.css
permalink: /publications/
---

<section class="welcome">
  <h1>Publication</h1>

  {% for group in site.data.publications %}
    <h2>{{ group.year }}</h2>

    {% for pub in group.entries %}
      <p class="publication-entry">
        {{ pub.authors }}<br>
        “{{ pub.title }}”<br>
        <span class="journal">{{ pub.journal }}</span>
        {% if pub.doi and pub.doi != "" %}
          <br><a href="{{ pub.doi }}" target="_blank" rel="noopener noreferrer">{{ pub.doi }}</a>
        {% endif %}
      </p>
    {% endfor %}
  {% endfor %}
</section>