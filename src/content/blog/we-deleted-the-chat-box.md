---
title: We deleted the chat box
description: The first version had a conversational interface because everything does. Removing it made the product easier to trust and considerably harder to demo.
date: 2026-07-24
author: junhee
tags: ['product-design', 'agents']
---

For six months the product was a chat window. You described what you wanted,
it asked clarifying questions, and eventually work happened. This is how
almost every agent product looks, and we did not think hard about why.

## Chat made the boundary invisible

In a chat interface, "please do not merge without asking me" and "the system
cannot merge without approval" look identical. Both are sentences in the same
box. Users could not tell which of their instructions were policy and which
were suggestions, and honestly, neither could we at a glance.

## What replaced it

A goal field, a plan you can edit before it runs, and a permission
configuration that lives in a file rather than a conversation.

It is less magical. You cannot argue with it. That turns out to be the
feature — the whole value of a boundary is that it does not negotiate.

## The cost

Our demo got worse. Watching someone type a wish into a box and receive a pull
request is a better thirty seconds of video than watching them fill in a form.

We shipped it anyway, because the demo is watched once and the boundary is
load-bearing every day after that. Trials went up. Time-to-first-run went
down, which surprised us until we realised that clarifying questions were
mostly friction, not intelligence.
