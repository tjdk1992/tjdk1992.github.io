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

        <div class="publication-entry">

          <p class="publication-authors">
            {{ authors }}
          </p>

          <p class="publication-title">
            “{{ pub.title }}”
          </p>

          <p class="publication-journal-line">
            <span class="journal">{{ pub.journal }}</span>

            {% if pub.doi and pub.doi != "" %}
              <br>
              <a href="{{ pub.doi }}" target="_blank" rel="noopener noreferrer">
                {{ pub.doi }}
              </a>
            {% endif %}

          </p>

        </div>

      {% endfor %}
    </div>
  {% endfor %}

</section>