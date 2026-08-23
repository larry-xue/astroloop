---
title: What a run actually costs
description: We billed per seat for two months. Here is why we stopped, and what the numbers looked like on both sides of the change.
date: 2026-08-14
author: mara
tags: ['pricing', 'operations']
---

For the first two months we charged per seat, because that is what every
pricing page we had ever read did. It took one support thread to see the
problem.

## Seats punish the wrong person

A customer wrote in asking whether they should remove two colleagues from the
workspace. They were not using the agent much. They were the two people who
approved its riskiest actions.

Per-seat pricing had made the safety mechanism a line item.

## What we changed

A run is one goal, from the first plan to either a result or a rejected
handoff. Retries inside a run are free. Approvers are free. A run that stalls
past its step budget is cancelled and not billed.

- If it does not finish, you do not pay
- If you decline the handoff, you do not pay
- If it retries a tool six times and then succeeds, that is still one run

## The part we got wrong first

Our initial version billed on tool calls. It was simpler to implement and
completely wrong: the agent could do the same work in three calls or thirty
depending on the day, and customers had no way to predict a bill.

Charging for outcomes rather than effort moved the variance onto us, which is
where it belongs — we are the ones who can reduce it.
