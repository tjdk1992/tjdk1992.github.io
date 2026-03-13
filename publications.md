---
layout: default
title: Publications
description: Peer-reviewed publications by Daiki Tomojiri-Kadotani, including studies on coral reef bleaching, environmental DNA (eDNA), fish community ecology, invasive species, and socio-ecological systems.
page_css: /assets/css/pages/publications.css
permalink: /publications/
---

<section class="welcome">

<h1>Publication</h1>

<p>
Only peer-reviewed papers published in scientific journals are recorded here.
More detailed latest information on my achievement is available from the
<a href="https://researchmap.jp/" target="_blank">researchmap</a>.
</p>

<figure class="page-figure">
<img src="{{ '/assets/img/publication/reservoir.jpg' | relative_url }}" alt="Reservoir">
<figcaption>
OLYMPUS E-M5 Mark-II with M.ZUIKO DIGITAL 12–50 mm @ Distributing reservoir, Rayong, Thailand
</figcaption>
</figure>

{% for group in site.data.publications %}
<div class="publication-year-block">

<h2>{{ group.year }}</h2>

{% for pub in group.entries %}

{% assign authors = pub.authors
| replace: "Tomojiri-Kadotani, D.", "<strong>Tomojiri-Kadotani, D.</strong>"
| replace: "Tomojiri, D.", "<strong>Tomojiri, D.</strong>"
%}

<p class="publication-entry">
{{ authors }} ({{ group.year }}). {{ pub.title }}.
<span class="journal">{{ pub.journal }}</span>{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}({{ pub.issue }}){% endif %}{% if pub.pages %}: {{ pub.pages }}{% endif %}.
{% if pub.doi and pub.doi != "" %}
<a href="{{ pub.doi }}" target="_blank">LINK</a>
{% endif %}
</p>

{% endfor %}

</div>
{% endfor %}

</section>