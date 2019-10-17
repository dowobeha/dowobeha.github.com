---
bg: "North_beach.jpg"
layout: default
crawlertitle: "Lane's Research"
title: "Research"
summary: "Lane Schwartz"
active: true
order: 01
---

<!--<h1>Publications</h1>-->


{% for publication in site.data.publications %}
<p class="{{ publication.type }}">
{% if publication.type != 'interview' %}
{% if publication.type == 'invitedtalk' %}
<span class="invitedTalk">Invited talk: </span>
{% endif %}
<span class="publicationTitle">{% if publication.pdf %}<a href="{{ publication.pdf }}">{% endif %}{{ publication.title }}{% if publication.pdf %}</a>{% endif %}</span><br />
{% if publication.authors %}
<span class="publicationAuthor">{% if publication.authors.size == 2 %}{{ publication.authors | join: " and " }}{% else %}{{ publication.authors | join: ", " }}{% endif %}</span><br />
{% elsif publication.editors %}
<span class="publicationEditor">{% if publication.editors.size == 2 %}{{ publication.editors | join: " and " }}{% else %}{{ publication.editors | join: ", " }}{% endif %}, editor{% if publication.editors.size > 1 %}s{% endif %}.</span><br />
{% endif %}
{% endif %}
  {% if publication.type == 'inproceedings' or publication.type == 'invitedtalk' %}
    <span class="publicationVenue">{{ publication.venue }}</span><br />
  {% elsif publication.type == 'journal' %}
    <span class="publicationJournal">{{ publication.journal }}</span><br />
    {% if publication.volume and publication.number and publication.pages %}<span class="publicationVolume">Vol. {{ publication.volume }}({{ publication.number }}):{{ publication.pages }},
    {% elsif publication.volume and publication.pages %}<span class="publicationVolume">Vol. {{ publication.volume }}:{{ publication.pages }},
    {% elsif publication.volume %}<span class="publicationVolume">Vol. {{ publication.volume }},
    {% endif %}

  {% elsif publication.type == 'chapter' %}
    <span class="publicationBook">{{ publication.book }}</span><br />
    {% if publication.series and publication.number and publication.publisher %}
       <span class="publicationBookSeries">{{ publication.series }}</span>, <span class="publicationBookSeriesNumber">{{ publication.number }}</span>, <span class="publicationPublisher">{{ publication.publisher }}</span><br />
    {% endif %}
    {% if publication.editors %}
      <span class="publicationEditor">{% if publication.editors.size == 2 %}{{ publication.editors | join: " and " }}{% else %}{{ publication.editors | join: ", " }}{% endif %}, editor{% if publication.editors.size > 1 %}s{% endif %}.</span>
    {% endif %}
  {% elsif publication.type == 'presentation' %}
    Presentation at the <span class="publicationVenue">{{ publication.venue }}</span><br />
    {% if publication.award %}
      <span class="publicationAward">{{ publication.award }}</span><br />
    {% endif %}
  {% elsif publication.type == 'interview' %}
    <span class="publicationInterviewedDescription"><a href="{{ publication.link }}">{{ publication.description }}</a></span>
    {% if publication.followup %}
      <span class="publicationInterviewedFollowup">(<a href="{{ publication.followup }}">followup story</a>)</span>
    {% endif %}
    <br />
    <span class="publicationAuthor">{% if publication.authors.size == 2 %}{{ publication.authors | join: " and " }}{% else %}{{ publication.authors | join: ", " }}{% endif %}</span>,
    <span class="publicationVenue">{{ publication.venue }}</span>,
  {% elsif publication.type == 'phdthesis' %}
  <span class="thesis">Ph.D. Thesis</span>, <span class="thesisInstitute">{{ publication.institute }}</span><br />
  {% elsif publication.type == 'mphilthesis' %}
  <span class="thesis">M.Phil. Thesis</span>, <span class="thesisInstitute">{{ publication.institute }}</span><br />
  {% elsif publication.type == 'msthesis' %}
  <span class="thesis">M.S. Thesis</span>, <span class="thesisInstitute">{{ publication.institute }}</span><br />
  {% elsif publication.type == 'mathesis' %}
  <span class="thesis">M.A. Thesis</span>, <span class="thesisInstitute">{{ publication.institute }}</span><br />
  {% elsif publication.type == 'bsthesis' %}
  <span class="thesis">B.S. Thesis</span>, <span class="thesisInstitute">{{ publication.institute }}</span><br />
  {% elsif publication.type == 'bathesis' %}
  <span class="thesis">B.A. Thesis</span>, <span class="thesisInstitute">{{ publication.institute }}</span><br />
  {% endif %}
  {% if publication.address %}
    <span class="publicationAddress">{{ publication.address }}</span>,
  {% endif %}
  <span class="publicationDate">{{ publication.month }} {{ publication.year }}.</span><br />
{% assign needDash = false %}
{% if publication.abstract %}{% assign needDash = true %}<span><a href="{{ publication.abstract }}">abstract</a></span>{% endif %}
{% if publication.bib %}{% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ publication.bib }}">bib</a></span>{% endif %}
{% if publication.code %}{% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ publication.code }}">code</a></span>{% endif %}
{% if publication.demo %}{% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ publication.demo }}">demo</a></span>{% endif %}
{% if publication.opening_video %}{% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ publication.opening_video }}">video (opening presentation)</a></span>{% endif %}
{% if publication.closing_video %}{% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ publication.closing_video }}">video (closing presentation)</a></span>{% endif %}
{% if publication.video %}{% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ publication.video }}">video</a></span>{% endif %}
{% if publication.latex %}{% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ publication.latex }}">latex</a></span>{% endif %}
{% if publication.poster.pdf %}{% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ publication.poster.pdf }}">poster</a>{% if publication.poster.latex %} (<a href="{{ publication.poster.latex }}">source</a>){% elsif publication.poster.pages %} (<a href="{{ publication.poster.pages }}">source</a>){% endif %}</span>{% endif %}
{% if publication.presentation %}{% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ publication.presentation }}">presentation</a></span>{% endif %}
{% if publication.program.pdf %}{% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ publication.program.pdf }}">program</a>{% if publication.program.latex %} (<a href="{{ publication.program.latex }}">latex</a>){% endif %}</span>{% endif %}
{% if publication.slides.pdf %}{% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ publication.slides.pdf }}">slides</a>{% if publication.slides.latex %} (<a href="{{ publication.slides.latex }}">source</a>){% elsif publication.slides.keynote %} (<a href="{{ publication.slides.keynote }}">source</a>){% endif %}</span>{% endif %}
{% if publication.extras.size > 0 %}
  <br />
  {% assign needDash = false %}
  {% for extra in publication.extras %}
    {% if needDash %} - {% endif %}{% assign needDash = true %}<span><a href="{{ extra.link }}">{{ extra.type }}</a></span>
  {% endfor %}
{% endif %}
{% endfor %}

<!--
{% for post in site.posts limit: 5 %}
  <article class="index-page">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {{ post.excerpt }}
  </article>
{% endfor %}
-->
