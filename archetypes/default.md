---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
slug: '{{ replaceRE "^\\d{4}-\\d{2}-\\d{2}-" "" .File.ContentBaseName | urlize }}'
draft: true
categories: ["Draft"]
tags: ["Draft"]
intro: intro
description: desc
keywords: ["Draft"]
---
