/**
 * Everything the landing page says, in one file.
 *
 * Components read from here so that changing copy never means opening a
 * component. Two things live elsewhere because they are lists people grow over
 * time and want schema validation on:
 *
 *   - the permission matrix  → src/content/tools/tools.yaml
 *   - testimonials           → src/content/testimonials/testimonials.yaml
 *
 * To reorder, add or remove whole sections, edit src/pages/index.astro — it is
 * a plain list of components on purpose.
 */

/**
 * Logo bar.
 *
 * An abstract Lucide mark plus a wordmark, rather than real brand logos from
 * something like simple-icons. Putting real brands here would claim customers
 * you do not have, and hands a trademark problem to everyone who downloads
 * the template. Swap `icon` for an <img> once you have permission from an
 * actual customer.
 *
 * `icon` is any name from https://lucide.dev — all of them are available.
 */
export const companies = [
  { name: 'Northgate', icon: 'lucide:hexagon', hue: 250 },
  { name: 'Basalt', icon: 'lucide:layers', hue: 300 },
  { name: 'Quorum Labs', icon: 'lucide:orbit', hue: 200 },
  { name: 'Ferrite', icon: 'lucide:magnet', hue: 25 },
  { name: 'Meridian', icon: 'lucide:globe', hue: 168 },
  { name: 'Hollowpoint', icon: 'lucide:circle-dot', hue: 95 },
]

export const features = [
  {
    title: 'Scoped at the call site',
    body: 'Permissions are enforced where the tool is invoked, not asked for politely in a system prompt. A revoked tool is gone on the next run, mid-task included.',
  },
  {
    title: 'Every run leaves a trace',
    body: 'Each step records the tool, the arguments, the result and the elapsed time. When something goes wrong you get a transcript, not a shrug.',
  },
  {
    title: 'Priced by work, not by seat',
    body: 'You pay for completed runs. A run that stalls, loops, or gets rejected at handoff does not bill.',
  },
]

/** Agent-shaped proof. "10,000 happy customers" says nothing to someone deciding
 *  whether to let software touch their repository; escalation and refusal rates do. */
export const stats = [
  { value: '1.24M', label: 'runs completed', note: 'last 30 days' },
  { value: '3.1%', label: 'escalated to a person', note: 'and none of them silently' },
  { value: '0', label: 'unapproved merges', note: 'since the check moved out of the prompt' },
  { value: '11s', label: 'median time to first tool call', note: 'p95 is 34s' },
]

export const tiers = [
  { name: 'Free', price: '$0', unit: 'forever', line: '20 runs a month', featured: false, cta: 'Start free', href: '/contact',
    points: ['All tools, same permissions', 'Full run transcripts', 'Community support'] },
  { name: 'Team', price: '$29', unit: 'per month', line: 'then $0.40 per run', featured: true, cta: 'Start free trial', href: '/contact',
    points: ['Unlimited approvers', '90-day transcript retention', 'Slack and email handoff', 'Priority queue'] },
  { name: 'Enterprise', price: 'Talk to us', unit: '', line: 'volume pricing', featured: false, cta: 'Contact sales', href: '/contact',
    points: ['Self-hosted runners', 'SSO and audit export', 'Custom tool allowlists', 'A person who answers'] },
]

export const faqs = [
  { q: 'What counts as a run?', a: 'One goal, from the first plan to either a result or a rejected handoff. Retries inside a run are not billed separately.' },
  { q: 'Can it act without asking?', a: 'Only for actions you have not listed under approval. Everything on that list suspends the run and waits, and the list is enforced in the tool layer rather than the prompt.' },
  { q: 'What happens when it stalls?', a: 'The run is cancelled at the step budget and not billed. You get the transcript either way.' },
  { q: 'Where does my code go?', a: 'Into the runner for the length of the run, and nowhere else. Self-hosted runners are available if that is still one place too many.' },
  { q: 'Which models does it use?', a: 'Whichever you configure, including your own keys. The permission layer does not change with the model.' },
  { q: 'Can I revoke a tool mid-task?', a: 'Yes. Permissions are read at the call site, so the next call fails closed even in the middle of a run.' },
]
