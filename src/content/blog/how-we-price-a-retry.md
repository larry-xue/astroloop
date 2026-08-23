---
title: How we price a retry
description: A run that fails six times and then succeeds is one run. Getting to that sentence took three pricing models and one very annoyed customer.
date: 2026-07-09
author: mara
tags: ['pricing', 'operations']
---

Our first billing model charged per tool call, because tool calls were easy to
count. A customer wrote in with a spreadsheet showing that the same task had
cost them $0.60 one week and $4.20 the next.

They were right, and the variance was entirely ours: the agent had gotten
worse at picking the right tool first.

## Who should carry the variance

We had accidentally moved our own reliability problem onto the customer's
invoice. Every improvement we made to tool selection was, from their side,
indistinguishable from a random discount.

So we moved it back. A run is one goal. Retries inside it are free. If it
takes thirty calls to do what should take three, that is our cost to bear and
our incentive to fix.

## What that forced us to build

Charging for outcomes only works if you can tell when an outcome happened, so
we had to define completion precisely enough to bill on it:

- A result the user accepted
- A handoff the user rejected — closed, unbilled
- A run cancelled at the step budget — closed, unbilled

The third category is the one that keeps us honest. It is a running count of
how often we take money for nothing, and it is zero by construction.
