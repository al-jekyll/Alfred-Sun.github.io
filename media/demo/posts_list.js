---
layout: null
---

var _POSTS = {
	"list": [{% for post in site.posts limit: 10 %}{
		"title": "{{post.title}}",
		"url": "{{site.url}}{{post.url}}",
		"date": "{{post.date|date_to_string}}"
		}{% if forloop.last == false %},{% endif %}{% endfor %}
	]
};