---
title: Why approval cannot live in the prompt
description: An instruction that says "always ask before merging" is a suggestion. Here is where we moved the check, and what it cost us to move it.
date: 2026-08-20
author: mara
tags: ['permissions', 'architecture']
---

Early on, the rule that the agent should ask before merging lived in the
system prompt. It worked almost every time, which is the worst possible
result: often enough to trust, not often enough to be safe.

## The failure was boring

A long run filled its context, the early instructions fell out of the useful
window, and the model did the reasonable thing with what it could still see.
Nobody jailbroke anything. The instruction simply stopped being present.

## Where the check lives now

Approval is enforced in the tool layer. `merge` is not an instruction the
agent is asked to respect, it is a call that returns a pending state and
suspends the run.

The agent cannot route around it because it is not being asked to.

## What it cost

Two weeks, and a worse demo. The version that asks for permission is less
impressive to watch than the version that just does it. That is the trade,
and we would make it again — the demo is watched once, the tool runs every
day.
