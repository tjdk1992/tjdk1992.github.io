---
layout: default
title: Publication
description: Publications of Daiki Tomojiri
page_css: /assets/css/pages/home.css
permalink: /publications/
---

<section class="welcome">
  <h1>Publication</h1>

  {% for group in site.data.publications %}
    <h2>{{ group.year }}</h2>
    {% for pub in group.entries %}
      <p>
        {{ pub.authors }}<br>
        <strong>{{ pub.title }}</strong><br>
        <em>{{ pub.journal }}</em>
        {% if pub.doi %}
          <br><a href="{{ pub.doi }}" target="_blank" rel="noopener noreferrer">DOI</a>
        {% endif %}
      </p>
    {% endfor %}
  {% endfor %}
</section>