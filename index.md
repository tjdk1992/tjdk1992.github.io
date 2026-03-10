---
layout: default
title: About
description: Personal academic website of Daiki Tomojiri-Kadotani
page_css: /assets/css/pages/home.css
---

<section class="page-section">
  <h1 class="hero-title">About</h1>
  <p class="lead">
    I am a postdoctoral researcher working on aquatic ecology, biodiversity, and socio-ecological systems,
    with a particular focus on coral reefs, freshwater fish communities, and human–nature interactions in Asia.
  </p>

  <div class="hero-links">
    <a class="button-link" href="{{ site.data.profile.cv_file | relative_url }}">Download CV</a>
    <a class="button-link" href="{{ '/publications/' | relative_url }}">View Publications</a>
  </div>
</section>

<section class="page-section about-grid">
  <div>
    <h2>Research interests</h2>
    <p>
      My research integrates field ecology, biodiversity monitoring, and interdisciplinary environmental studies.
      I am particularly interested in how ecological communities respond to environmental change, land-use pressure,
      and governance contexts across coastal and inland waters.
    </p>
    <p>
      My work has included coral bleaching monitoring, eDNA metabarcoding of riverine fish communities,
      amphibian and bird acoustic monitoring, invasive species use and perception, and culturomics approaches
      to marine debris and public awareness.
    </p>

    <h2>Current focus</h2>
    <p>
      I am currently developing research on aquatic biodiversity, community assembly, and conservation-relevant
      ecological patterns, while also engaging with broader socio-ecological questions relevant to sustainability
      and environmental management.
    </p>
  </div>

  <div>
    <div class="card">
      <h3>Keywords</h3>
      <p>
        Aquatic ecology, coral reefs, eDNA, biodiversity, fish communities, socio-ecological systems,
        environmental governance, invasive species, culturomics
      </p>
    </div>

    <div class="card">
      <h3>Affiliations</h3>
      <p>{{ site.data.profile.affiliation_1 }}</p>
      <p>{{ site.data.profile.affiliation_2 }}</p>
    </div>
  </div>
</section>