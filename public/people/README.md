# Avatars

Drop image files here and point at them from the YAML.

```
public/people/priya.jpg   →   avatar: /people/priya.jpg
```

Used by two collections:

- `src/content/testimonials/testimonials.yaml`
- `src/content/authors/authors.yaml`

Leave `avatar: null` and the component draws initials instead, with a colour
derived from the name. That is the default on purpose — a template that ships
photographs of people who do not exist is a licensing problem for whoever
downloads it, and readers can tell.

**Sizes.** Square, 160×160 or larger. They render at 32px and 40px, so
anything above 160 is wasted bytes. `.webp` or `.avif` if you have them.
