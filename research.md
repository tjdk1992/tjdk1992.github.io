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
    My research explores how biodiversity, ecosystems, and human societies interact in aquatic and coastal environments. I combine ecological field studies, molecular tools such as environmental DNA, and socio-ecological approaches to understand how human activities reshape ecosystems and how societies respond to these changes. A central theme of my work is the study of human-modified ecosystems, including tropical river deltas, artificial freshwater habitats, coral reef islands, and developed coastlines. These environments provide valuable opportunities to examine how ecological processes, resource use, and governance systems evolve in the Anthropocene.
  </p>

  <p>
    Across these systems, I integrate methods from community ecology, molecular ecology, and environmental social science. My research ranges from monitoring fish biodiversity using environmental DNA, to examining how invasive species become embedded in local food systems, to investigating the dynamics of marine debris on coastlines. I also explore the human dimensions of biodiversity through digital data sources such as social media and online search behavior. By linking ecological processes with human perceptions and resource use, my work aims to contribute to more adaptive and context-sensitive approaches to biodiversity conservation and ecosystem management.
  </p>
</section>

<section class="research-topic">
  <h2>Socio-Ecological Systems in Tropical Delta Landscapes</h2>

  <div class="research-lead">
    <figure class="research-figure">
      <img src="{{ '/assets/img/research/market_sold_suckermouth.jpg' | relative_url }}" alt="Sailfin catfish sold in a local market in Can Tho City, Mekong Delta, Vietnam">
      <figcaption>
        Sailfin catfish (Pterygoplichthys spp.) sold in a local market in Can Tho City, Mekong Delta, Vietnam.
      </figcaption>
    </figure>

    <div class="research-description">
      <p>
        River deltas are among the most productive yet heavily modified ecosystems on Earth. My research explores the complex interactions between ecological change, fisheries, and human livelihoods in tropical delta landscapes, particularly in Southeast Asia. These regions are characterized by intensive agriculture, dense populations, and extensive aquatic resource use, making them ideal systems for studying how environmental change interacts with social and economic processes.
      </p>

      <p>
        In the lower Chao Phraya River basin in Thailand, my work has examined how non-native fish species introduced for aquaculture have transformed both ecological communities and local resource use. Rather than viewing invasive species solely as ecological threats, this research investigates how introduced species can become embedded within local food systems and economies. Through ecological surveys, stomach content analyses, and extensive market interviews, I have explored how different species provide ecosystem services and disservices across ecological and socio-economic dimensions.
      </p>

      <p>
        More recently, my research in the Mekong Delta has focused on the emergence of invasive sailfin catfish (Pterygoplichthys spp.) as a food resource. By combining landscape analysis with market surveys, this work examines how land-use contexts—such as rice-dominated agricultural landscapes—shape the distribution and commercialization of invasive fish species. These studies highlight the importance of understanding ecosystems as socio-ecological systems, where environmental change, economic incentives, and cultural practices interact to shape resource use.
      </p>

    </div>
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
  <h2>Land–Sea Linkages and Coral Reef Island Socio-Ecological Systems</h2>

  <div class="research-description">
    <p>
      Coral reef islands represent some of the most tightly interconnected socio-ecological systems on the planet. In these environments, terrestrial ecosystems, freshwater resources, coastal waters, and local livelihoods are closely linked through rapid water circulation and limited resource availability. My research examines how land-based processes influence the health of shallow coral reef ecosystems and how island communities adapt to environmental change.
    </p>

    <p>
      Working within transdisciplinary research initiatives focused on coral reef islands in the Western Pacific, I study how nutrient inputs and land-use change affect coastal ecosystems. These islands experience multiple environmental pressures, including climate change, sea-level rise, population growth, and tourism development. Understanding how terrestrial nutrient flows and hydrological processes influence coral reef health is essential for developing sustainable management strategies.
    </p>

    <p>
      Beyond ecological processes, this research also addresses governance and community engagement. Coral reef islands often depend on multiple interconnected resources—such as groundwater, fisheries, and forest ecosystems—for their livelihoods. Effective management therefore requires collaborative approaches that integrate scientific knowledge with local practices and cultural values. By linking natural science research with social and governance perspectives, this work aims to support adaptive governance frameworks that enhance the resilience of island socio-ecological systems.
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
  <h2>Environmental DNA and Aquatic Biodiversity Monitoring</h2>

  <div class="research-description">
    <p>
      Understanding how biodiversity is distributed across aquatic ecosystems—and how it changes over time—is a central challenge in ecology and conservation. My research uses environmental DNA (eDNA) to monitor fish communities and biodiversity in rivers, lakes, and coastal waters. eDNA refers to genetic material released by organisms into the environment, which can be collected from water samples and analyzed to detect species presence. This approach allows researchers to survey biodiversity efficiently and non-invasively, even in environments where traditional sampling methods are difficult or disruptive.
    </p>
    
    <p>
      In my work, I apply both species-specific eDNA assays and metabarcoding techniques to investigate ecological processes such as seasonal migration, habitat use, and community assembly. For example, by quantifying eDNA concentrations across river systems in Kyoto, I have examined seasonal movements of Japanese seabass and identified environmental factors influencing their distribution. In Lake Biwa, Japan’s largest freshwater lake, I have used eDNA metabarcoding to compare fish communities between natural habitats and artificial environments such as fishing ports. These studies reveal that artificial habitats can support diverse fish assemblages that differ in composition and ecological processes from nearby natural habitats.
    </p>

    <p> 
      By integrating molecular ecology with community ecology and statistical modeling, this research contributes to developing efficient biodiversity monitoring frameworks. In an era when many ecosystems are strongly influenced by human activities, such tools are increasingly important for tracking ecological change and informing conservation strategies.
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
  <h2>Marine Debris Dynamics and Coastal Environmental Processes</h2>

  <div class="research-description">
    <p>
      Marine debris is now recognized as one of the most pervasive forms of human impact on marine ecosystems. While much research has focused on the distribution of debris in the ocean, less attention has been given to the processes that occur after debris reaches the coast. My research investigates how coastal environments influence the accumulation, movement, and burial of marine debris on shorelines.
    </p>

    <p>
      Field studies conducted along the coasts of the Seto Inland Sea in Japan have shown that coastal protection structures such as detached breakwaters can unintentionally create environments that trap and bury debris within beach sediments. These structures alter sediment transport and beach morphology, producing sandy environments where stranded debris becomes buried by wind-blown sand. As a result, large quantities of debris can accumulate beneath the surface of beaches, forming hidden reservoirs of pollution.
    </p>

    <p>
      Understanding these processes is essential for effective coastal management. Buried debris may re-emerge during storms, gradually degrade into microplastics, or affect coastal ecosystems in ways that are not yet fully understood. By combining geomorphological observations with ecological perspectives, my research seeks to clarify the dynamics of coastal debris and contribute to more effective strategies for mitigating marine pollution.
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
  <h2>Human–nature interactions: iEcology and Culturomics</h2>

  <div class="research-description">
    <p>
      Conservation outcomes depend not only on ecological processes but also on how people perceive and interact with nature. A growing part of my research investigates the human dimensions of biodiversity by analyzing large-scale digital data sources. Using approaches often referred to as culturomics or digital ecology, I analyze patterns of public attention toward species and environmental issues using online data such as Wikipedia pageviews, Google Trends searches, and social media content.
    </p>

    <p>
      These studies explore how cultural familiarity, seasonal experiences with nature, and media exposure influence public interest in biodiversity. For example, analyses of Japanese Wikipedia pageviews have revealed strong seasonal patterns in public interest in certain bird species, reflecting cultural traditions and phenological events such as characteristic bird calls. Similarly, social media analyses have been used to investigate how people discuss non-native species and which aspects of these species attract public attention.
    </p>

    <p>
      Understanding these patterns is important because public awareness and engagement play a crucial role in environmental governance. Digital indicators of public attention can provide insights into societal perceptions of biodiversity and help identify opportunities for communication, education, and conservation outreach. By integrating ecological questions with large-scale behavioral data, this research contributes to emerging interdisciplinary approaches that link biodiversity science with the study of human behavior.
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