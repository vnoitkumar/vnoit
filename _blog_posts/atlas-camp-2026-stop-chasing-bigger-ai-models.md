---
title: "My Biggest Takeaway from Atlas Camp 2026? Stop Chasing Bigger AI Models"
excerpt: "Two days of AI keynotes and demos at Atlas Camp 2026. The idea that stuck with me afterwards had nothing to do with bigger models."
coverImage: "/assets/images/blogs/atlas-camp-2026-stop-chasing-bigger-ai-models/atlas-camp-bengaluru-2026-cover.jpg"
date: "2026-06-25"
readTime: "6 min read"
author:
  name: Vinoth (Vnoit)
  picture: "/assets/images/authors/vinoth-200x200-v2.jpg"
ogImage:
  url: "/assets/images/blogs/atlas-camp-2026-stop-chasing-bigger-ai-models/atlas-camp-bengaluru-2026-cover.jpg"
twitterHandle: "@vnoitkumar"
coverImageBlurHash: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAALABQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDAguS9wrzKzkdfmxmrIdFDs8G/eMAufu/Ss6IkgA8jNaEpJhlyc424/wC+hXU4uysybkDSqhwEz+NFV5OXNFdX1V/zE8x//9k="
---

Atlas Camp Bengaluru 2026 packed a lot into two days. Keynotes, product reveals, live demos, and the kind of hallway conversations you remember longer than the talks.

I couldn't take all of it in. But a few things stuck with me, and they're worth writing down.

Most of them came back to one idea. And it wasn't bigger models or smarter agents. It was context: how information gets from where it lives to where it's needed.

That's the thread I kept pulling on across both days.

## First Time in India

A small detail that's easy to miss: this was the first Atlas Camp in India.

![The welcome area at Atlas Camp Bengaluru 2026, Atlassian's developer conference in India](/assets/images/blogs/atlas-camp-2026-stop-chasing-bigger-ai-models/atlas-camp-bengaluru-2026-welcome.jpg)

Atlassian has run this conference in other parts of the world for years. This was the first time it landed here, in Bengaluru.

I was curious why Bengaluru specifically. The reason turned out to be simple. A reasonable part of their customer base is in India. And they've had an office in Bengaluru since 2018, their first in the country.

So bringing the event here wasn't really a stretch. It was closer to coming home.

## A Journey from Jira to Agile

One of the keynote highlights was a piece of Atlassian history I hadn't thought about in years.

![The opening keynote at Atlas Camp Bengaluru 2026, Atlassian's developer conference](/assets/images/blogs/atlas-camp-2026-stop-chasing-bigger-ai-models/atlas-camp-bengaluru-2026-keynote.jpg)

Jira started as a bug tracker. GreenHopper added Agile capabilities like boards, backlogs, and sprint planning. The plugin became so popular that Atlassian acquired it, and GreenHopper eventually became Jira Software.

It's a useful story. Not just as company history, but as a pattern: platforms evolve when communities find new ways to use them.

The Agile movement, championed by companies like Thoughtworks, didn't just change how teams work. It changed the tools they reach for every day.

That pattern is happening again.

## AI Everywhere, Yet Less Talk About "AI"

One session was titled "AI Everywhere."

Ironically, I heard the word "AI" less than I expected.

The vocabulary in the room was different:

* [Rovo MCP](/glossary#rovo-mcp)
* [OpenAI](/glossary#openai)
* [Claude](/glossary#claude)
* [Forge](/glossary#forge) LLM
* [Rovo Skills](/glossary#rovo-skills)

![A session on Atlassian Rovo Skills at Atlas Camp Bengaluru 2026](/assets/images/blogs/atlas-camp-2026-stop-chasing-bigger-ai-models/atlas-camp-bengaluru-2026-rovo-skills.jpg)

At first, I found it odd that OpenAI and Claude kept coming up at an Atlassian conference. As the sessions went on, it made sense.

Atlassian isn't trying to build the AI itself. They're building products, workflows, and developer experiences on top of whatever AI can offer.

That feels like the right level to build at.

Most developers don't care which model generated an answer. They care whether the answer is useful and grounded in the right context.

## Why Context Matters More Than Models

This landed differently for me because of my own day-to-day.

When I start a new Claude Opus session, even with a 1M [context window](/glossary#context-window), a lot of time goes into gathering context before useful work can begin.

I usually need to pull in:

* Jira stories
* Technical design documents
* Initiative specifications
* Architecture decisions
* Existing codebase references

[MCP](/glossary#mcp), a standard that lets AI tools pull information from external sources like Jira and Confluence, helps retrieve some of this. Even so, the model still needs time to understand the problem before it can produce something useful.

This is where Atlassian's tools become interesting.

Much of the required context already lives in the platform:

* Requirements in Jira
* Technical designs in Confluence
* Code in Bitbucket
* Decisions linked across all of it

The opportunity isn't just better models. It's reducing the gap between context and execution.

## The Magic Is in Retrieval

During a break, I had a chance to ask Tim Pettersen and Adam Moore something I'd been sitting with. Tim heads up Ecosystem Solution Architecture at Atlassian, and Adam works on Ecosystem product, so they knew this space well.

<figure>
<img src="/assets/images/blogs/atlas-camp-2026-stop-chasing-bigger-ai-models/vinoth-kumar-tim-pettersen-atlas-camp-2026.jpg" alt="Vinoth Kumar with Tim Pettersen, Atlassian's Head of Ecosystem Solution Architecture, at Atlas Camp Bengaluru 2026" width="1356" height="1800" loading="lazy" />
<figcaption>With Tim Pettersen, Head of Ecosystem Solution Architecture at Atlassian.</figcaption>
</figure>

How can [Rovo](/glossary#rovo) answer a question like "When will my salary be credited?" by pulling from thousands of documents in seconds?

My mental model was built around how [LLMs](/glossary#llm), or large language models, work. If it takes real effort to give a model the right context, how does an enterprise system do this at scale?

The answer changed how I was thinking about it.

The magic isn't in the model. It's in how context is collected, indexed, connected, and retrieved.

In organisations with tens of thousands of Confluence pages, the system doesn't read everything from scratch each time. It finds the most relevant content first, then applies reasoning on top of that.

So how does it find the right content so quickly?

This is where a [vector database](/glossary#vector-database) comes in. Instead of matching exact keywords, it stores text as numbers that capture meaning. A search for "salary" can then surface a payroll policy that never uses that word.

That approach has a name: [RAG](/glossary#rag), or retrieval-augmented generation. Find the most relevant pieces first, then let the model reason over them.

The challenge is less about intelligence and more about retrieval.

## Not Every Problem Needs the Biggest Model

Another observation: not every task requires the most capable model available.

Different models can handle different parts of a workflow:

* Prompt refinement
* Context retrieval
* Workflow planning
* Answer generation
* Classification and routing

People often imagine one giant model doing everything. In practice, the future looks more like [orchestration](/glossary#orchestration): different models handling different steps, each suited to its part of the job. The right model, for the right task, at the right time.

## Connecting the Dots: Spec-to-Code

Many teams are working toward [Spec-to-Code](/glossary#spec-to-code), the idea of going from a written requirement directly to production-ready software.

Most conversations stop at code generation.

But a question kept coming up for me throughout the day:

What if generating code isn't the hard part? What if understanding context is?

Atlassian already holds a lot of what a Spec-to-Code system would need:

* Stories in Jira
* Technical designs in Confluence
* Source code in Bitbucket
* Team decisions linked across the tools

When all of that is already connected, it stops feeling distant. It starts feeling like closing a gap.

This wouldn't replace developers. It would just make it easier to get from understanding a problem to actually solving it.

## Where Developers Are Actually Spending Their Time

I shared a lunch table with Adarsh Sridhara, Head of Product at Atlassian, and asked something I'd been curious about.

<figure>
<img src="/assets/images/blogs/atlas-camp-2026-stop-chasing-bigger-ai-models/vinoth-kumar-adarsh-sridhara-atlas-camp-2026.jpg" alt="Vinoth Kumar with Adarsh Sridhara, Atlassian's Head of Product, at Atlas Camp Bengaluru 2026" width="1350" height="1800" loading="lazy" />
<figcaption>With Adarsh Sridhara, Head of Product at Atlassian.</figcaption>
</figure>

As AI gets better at writing code, where are developers actually spending their time?

The answer wasn't surprising. But hearing it out loud was useful.

Less time on boilerplate. More time on:

* Design
* Architecture
* Problem framing
* Trade-off analysis
* Technical decision making

Code generation is improving quickly. Engineering judgment isn't something you can automate yet. The focus is already shifting: from how to build things to whether to build them this way at all.

## Developers Are Becoming Builders

One more thing I noticed, and it stuck with me.

Look at how the event described who it was for: "app builders, software leaders, and AI trailblazers." Not developers. Builders.

At first that reads like marketing. But it lined up with everything else I'd been hearing all event.

"Developer" is a word about writing code. "Builder" is a word about making something, with whatever tools get the job done. As AI takes on more of the typing, the label is quietly shifting to match.

The word is catching up to the work.

## The Bigger Takeaway

Two days of models, agents, and capabilities. The thing I carried home was simpler.

It was context.

The Jira-to-GreenHopper story showed how tools evolve when communities find new ways to use them. The conversations around Rovo showed that AI gets dramatically more useful when it has the right information. The Spec-to-Code discussions showed that generating code is often the easy part. Understanding requirements, architecture, and intent is where the real work is.

One idea kept coming up:

> The future isn't about bigger context windows or more powerful models. It's about having the right context available at the right time.

And that's probably why developers stay at the centre of this.

As AI takes on more of the implementation work, our role shifts toward defining problems, designing systems, and making the calls that require judgment.

The tools keep changing. The need for good engineering stays the same.
