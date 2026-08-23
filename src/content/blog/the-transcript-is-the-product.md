---
title: The transcript is the product
description: We built the run transcript as a debugging tool for ourselves. It turned out to be the thing customers actually evaluate us on.
date: 2026-08-06
author: sam
tags: ['observability', 'product']
---

The transcript started as an internal debugging view. It was ugly, it was
behind a flag, and it existed because we could not otherwise work out why a
run had taken nineteen steps to do something that should have taken four.

Then a customer asked for access to it, and then three more did.

## What they were actually asking for

Not logs. They had logs. What they wanted was the ability to answer one
question in front of somebody else: *why did it do that.*

A log tells you what happened. A transcript tells you what the agent believed
at the time, which tool it reached for, what came back, and what it concluded.
The difference matters when the person asking is your own security team.

## What we changed after opening it up

- **Arguments are shown in full.** We used to truncate them. Truncation is
  where the interesting part always was.
- **Refusals are first-class entries.** "Did not call `merge`, requires
  approval" is a line in the transcript, not an absence of a line. An absence
  looks like a bug.
- **Timing is per step.** Not because anyone optimises from it, but because a
  step that took 40 seconds is the one you want to read first.

## The uncomfortable part

Opening the transcript meant customers could see every time the agent did
something stupid. We expected that to cost us trials.

It did the opposite, and in hindsight the reason is obvious: everyone already
assumed it sometimes did something stupid. Showing them exactly when and how
was the only way to be believed about the rest.
