---
bg: "Other_side.jpg"
layout: page
permalink: /code/
title: "Code"
crawlertitle: "Lane's Code"
summary: "Lane Schwartz"
active: true
order: 04
---

St. Lawrence Island Yupik
* [Records of permission from stakeholders in the St. Lawrence Island Yupik community](https://github.com/SaintLawrenceIslandYupik/permission)
* [Finite-state morphological analyzer](https://github.com/SaintLawrenceIslandYupik/finite_state_morphology)
* [Electronic dictionary & other web tools](https://github.com/SaintLawrenceIslandYupik/web_tools)


Unsupervised grammar induction
* [Normalizing Flow](https://github.com/lifengjin/acl_flow)
* [DIMI](https://github.com/lifengjin/dimi_emnlp18)
* [DB-PCFG](https://github.com/lifengjin/db-pcfg)
* [UHHMM](https://github.com/tmills/uhhmm)

Machine translation
* [Moses](https://github.com/moses-smt/mosesdecoder)
* [Joshua](https://github.com/joshua-decoder/joshua)

<!--
{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}

  <h2 class="category-key" id="{{ t | downcase }}">{{ t | capitalize }}</h2>

  <ul class="year">
    {% for post in posts %}
      {% if post.tags contains t %}
        <li>
          {% if post.lastmod %}
            <a href="{{ post.url | relative_url}}">{{ post.title }}</a>
            <span class="date">{{ post.lastmod | date: "%Y-%m-%d"  }}</span>
          {% else %}
            <a href="{{ post.url | relative_url}}">{{ post.title }}</a>
            <span class="date">{{ post.date | date: "%Y-%m-%d"  }}</span>
          {% endif %}
        </li>
      {% endif %}
    {% endfor %}
  </ul>

{% endfor %}
-->
