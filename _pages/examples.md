---
layout: examplesList
id: exemplos
title: Todos os exemplos
permalink: /exemplos/
description: TBD

breadcrumb:
  - url: /
    title: Página inicial
---

<ol>
  {% for example in site.examples %}
    <li>
      <a
        class="{% if example.title == page.title %}examples-isCurrentPage{% endif%}"
        href="{{ example.url | relative_url }}">
          {{ example.title }}
      </a>
    </li>
  {% endfor %}
</ol>
