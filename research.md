---
layout: default
title: Research
description: tmjdk-oecologist
page_css: /assets/css/pages/research.css
permalink: /research/
---

<section class="welcome">
  <h1>Research</h1>

  <p>
    My research focuses on how ecological processes interact with human activities and social systems, particularly in aquatic environments in Asia. I combine ecological field surveys, biodiversity monitoring, statistical modeling, and interdisciplinary approaches linking natural and social sciences.
  </p>

  <p>
    Broadly, my work centers on aquatic ecology, biological invasions, environmental DNA, coral reef systems, and socio-ecological interactions in Asia. Below are examples of research themes and selected papers associated with each topic.
  </p>
</section>

<section class="research-topic">
  <h2>Market integration of invasive sailfin catfish</h2>

  <figure class="research-figure">
    <img src="{{ '/assets/img/research/market_sold_suckermouth.jpg' | relative_url }}" alt="Sailfin catfish sold in a local market in Can Tho City, Mekong Delta, Vietnam">
    <figcaption>
      Sailfin catfish (Pterygoplichthys spp.) sold in a local market in Can Tho City, Mekong Delta, Vietnam.
    </figcaption>
  </figure>

  <div class="research-description">
    <p>
      Invasive fishes are increasingly incorporated into local food systems, yet the landscape contexts and market mechanisms underlying this process remain poorly understood. We investigated the market occurrence and economic position of sailfin catfish (Pterygoplichthys spp.) in Can Tho City, Mekong Delta, Vietnam.
    </p>

    <p>
      We surveyed 53 local retail markets in 2025, quantified sailfin catfish presence, and linked each market to surrounding land-use/land-cover (LULC) composition within a 1000-m radius. The study highlights how invasive species can become integrated into food systems through interactions between landscape structure and market incentives.
    </p>

    <p>
      <a href="#" class="paperlink">LINK to paper</a>
    </p>
  </div>

  <div class="key-papers">
    <h3>Key papers</h3>
    <ul>
      {% assign target_dois = "https://doi.org/10.20798/awhswhs.9.0_35|https://doi.org/10.1080/02705060.2019.1585392" | split: "|" %}
      {% for group in site.data.publications %}
        {% for pub in group.entries %}
          {% if target_dois contains pub.doi %}
            {% assign authors = pub.authors
              | replace: "Tomojiri-Kadotani, D.", "<strong>Tomojiri-Kadotani, D.</strong>"
              | replace: "Tomojiri, D.", "<strong>Tomojiri, D.</strong>"
            %}
            <li>
              {{ authors }} ({{ group.year }}). {{ pub.title }}.
              <em>{{ pub.journal }}</em>.
              {% if pub.doi and pub.doi != "" %}
                <a href="{{ pub.doi }}" target="_blank" rel="noopener noreferrer">LINK</a>
              {% endif %}
            </li>
          {% endif %}
        {% endfor %}
      {% endfor %}
    </ul>
  </div>
</section>

<section class="research-topic">
  <h2>Environmental DNA and fish community ecology</h2>

  <div class="research-description">
    <p>
      Another major focus of my research is the application of environmental DNA metabarcoding to freshwater fish communities. Using repeated surveys along riverine gradients, I study spatial and temporal variation in fish assemblages, including patterns of beta diversity, replacement, and nestedness.
    </p>

    <p>
      This line of research aims to understand how fish communities are structured along environmental gradients and how molecular approaches can contribute to biodiversity monitoring and conservation planning in inland waters.
    </p>
  </div>

  <div class="key-papers">
    <h3>Key papers</h3>
    <ul>
      <li>Add key eDNA-related papers here.</li>
    </ul>
  </div>
</section>

<section class="research-topic">
  <h2>Coral reef bleaching and environmental stressors</h2>

  <div class="research-description">
    <p>
      I investigate coral reef bleaching dynamics using long-term field monitoring data and environmental covariates. My interest lies in understanding how local stressors interact with thermal anomalies to shape bleaching severity, recovery, and community-level responses across reef sites.
    </p>

    <p>
      This work combines ecological monitoring, statistical modeling, and site-based comparisons to examine how environmental heterogeneity influences bleaching outcomes.
    </p>
  </div>

  <div class="key-papers">
    <h3>Key papers</h3>
    <ul>
      <li>Add key coral reef papers here.</li>
    </ul>
  </div>
</section>

<section class="research-topic">
  <h2>Socio-ecological systems and human–nature interactions</h2>

  <div class="research-description">
    <p>
      Beyond ecological monitoring, I am interested in how ecosystems are linked to people through livelihood practices, governance, public awareness, and local environmental knowledge. My broader research perspective is shaped by area studies and socio-ecological thinking, especially in relation to novel ecosystems and environmental change in Asia.
    </p>

    <p>
      Through this perspective, I seek to connect ecological processes with the cultural, institutional, and economic contexts in which environmental management takes place.
    </p>
  </div>

  <div class="key-papers">
    <h3>Key papers</h3>
    <ul>
      {% assign target_dois = "https://doi.org/10.1016/j.marpolbul.2022.113917|https://doi.org/10.1007/s10344-023-01749-0" | split: "|" %}
      {% for group in site.data.publications %}
        {% for pub in group.entries %}
          {% if target_dois contains pub.doi %}
            {% assign authors = pub.authors
              | replace: "Tomojiri-Kadotani, D.", "<strong>Tomojiri-Kadotani, D.</strong>"
              | replace: "Tomojiri, D.", "<strong>Tomojiri, D.</strong>"
            %}
            <li>
              {{ authors }} ({{ group.year }}). {{ pub.title }}.
              <em>{{ pub.journal }}</em>.
              {% if pub.doi and pub.doi != "" %}
                <a href="{{ pub.doi }}" target="_blank" rel="noopener noreferrer">LINK</a>
              {% endif %}
            </li>
          {% endif %}
        {% endfor %}
      {% endfor %}
    </ul>
  </div>
</section>