# Maigie Frontend Design Guidelines

These guidelines ensure **consistent, clean, accessible, and scalable** UI across Maigie’s **Web (Vite + shadcn-ui)** and **Mobile (Expo)** apps.

---

# 🎨 1. Design Philosophy

Maigie’s visual direction is built around:

* **Clarity** — information should be obvious at a glance
* **Calm UI** — minimal visual noise, steady spacing, soft shadows
* **Intelligence-first** — UI must reflect that the system is smart and adaptive
* **Consistency** — components behave the same across web & mobile
* **Accessibility** — readable typography, strong contrast, proper semantics

---

# 📚 2. Foundations

## 2.1 Colors

Use the core palette:

* **Primary**: #4D53FF
* **Secondary**: #6C7CFF
* **Accent**: #101729
* **Surface**: #FFFFFF
* **Muted**: #F2F3F8
* **Success**: #22C55E
* **Warning**: #F59E0B
* **Error**: #EF4444

### Usage Rules

* Primary is for actions and highlights
* Muted for cards and low-focus areas
* Dark text on light surfaces
* Avoid using accent for large backgrounds (too heavy)

---

# 🧱 3. Layout & Spacing

## 3.1 Spacing Scale

Use a consistent 4-based spacing scale:

```
4, 8, 12, 16, 20, 24, 32, 40, 48
```

### Rules:

* Minimum padding inside cards/components: **16px**
* Default layout gutter: **24px**
* Dashboard grid gap: **24px**

## 3.2 Responsive Breakpoints

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Use `md:` as the first major layout breakpoint.

---

# 🖼️ 4. Component Guidelines

Built for **shadcn-ui**, but mobile mirrors the same logic.

## 4.1 Buttons

* Primary button: Solid, rounded-lg, medium shadow
* Secondary button: Ghost or outline
* Always include loading states

## 4.2 Cards

* Rounded-xl or rounded-2xl
* Soft shadows (`shadow-sm` or `shadow-md`)
* 16px–20px padding
* Avoid dense layouts

## 4.3 Inputs

* Height: **44–48px**
* Rounded-lg
* Clear placeholder text
* Required fields must be visually marked

## 4.4 Modals

* Max width: **480px**
* Body uses vertical spacing **16–20px**
* Always dim with 50–60% backdrop

---

# 🔤 5. Typography

Use a clean, modern sans-serif (e.g., Inter).

## Scale:

```
h1: 32–40px / semibold
h2: 24–28px / semibold
h3: 20–22px / semibold
body: 16px / medium
label: 14px / medium
caption: 12px / regular
```

### Rules

* Avoid more than **2 type sizes** in a single module
* Limit paragraphs to **70–80 characters** per line
* Use **font-medium** for UI labels (not regular)

---

# 🧭 6. Navigation

## Web

* Left sidebar for dashboard pages
* Top bar for user profile, notifications, search
* Breadcrumbs for inner pages

## Mobile

* Bottom tab navigation for primary sections
* Stack navigation for detail screens
* Avoid more than **5** primary tabs

---

# 🧩 7. Dashboard Standards

All dashboard widgets follow:

* Card layout
* Title + icon
* Subtext (optional)
* List/preview of data
* CTA or expand button

Widgets:

* Courses
* Goals
* Schedule/Forecast
* Resources
* Reminders
* AI Suggestions

---

# 🤖 8. AI UI/UX Guidelines

## Chat Interface

* Messages bubble-based, minimal ornamentation
* Streamed responses
* Typing indicator

## AI-Generated Elements

Whenever AI creates something (course, goal, schedule):

* Show an **AI Created** label
* Provide **Edit** action
* Auto-insert into dashboard widgets

## Clarification UX

If the AI needs more info:

* Use input options (chips)
* Never overwhelm with long questions

---

# 🔔 9. Notifications

Types:

* Reminders
* Schedule events
* AI insights

Rules:

* Never send more than 3 notifications/day by default
* Quiet hours supported

---

# 🧭 10. State Management

## Web

* Zustand or Jotai for local state
* React Query for server state

## Mobile

* Zustand
* React Query
* SQLite offline cache

---

# ⚡ 11. Performance Rules

* Lazy-load AI module
* Prefetch course and schedule data
* Virtualize long lists
* Avoid unnecessary re-renders in chat

---

# 🏁 12. Accessibility

* Minimum contrast ratio: **4.5:1**
* All icons must have aria-labels
* Keyboard navigation required
* Focus states must be clearly visible

---

# 🧪 13. Testing UI

Use:

* **Playwright** for E2E
* **React Testing Library** for components

Test for:

* Accessibility (axe)
* Layout responsiveness
* Flow correctness (subscription, login, AI chat)

---

# 🎯 14. Subscription UX

Make it:

* Transparent and simple
* 3 tiers max
* CTA should be visible at all times
* Always clarify renewal rules

### Required Screens

* Pricing page
* Upgrade/downgrade
* Billing history
* Failed payment recovery flow

---

# 🎉 15. Final Notes

These guidelines ensure Maigie maintains:

* **Consistency** across platforms
* **Accessibility** for users
* **Scalability** for development
* **Clarity** in learning workflows

They will evolve as Maigie grows — updates will be versioned and documented.
