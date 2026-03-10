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
    <div class="publication-year-block">
      <h2>{{ group.year }}</h2>

      {% for pub in group.entries %}

        {% assign authors = pub.authors
          | replace: "Tomojiri-Kadotani, D.", "<strong>Tomojiri-Kadotani, D.</strong>"
          | replace: "Tomojiri, D.", "<strong>Tomojiri, D.</strong>"
        %}

        <p class="publication-entry">
          {{ authors }} ({{ group.year }}) {{ pub.title }}.
          <span class="journal">{{ pub.journal }}</span>{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}({{ pub.issue }}){% endif %}{% if pub.pages %}: {{ pub.pages }}{% endif %}.
          {% if pub.doi and pub.doi != "" %}
            <a href="{{ pub.doi }}" target="_blank" rel="noopener noreferrer">LINK</a>
          {% endif %}
        </p>

      {% endfor %}
    </div>
  {% endfor %}

</section>