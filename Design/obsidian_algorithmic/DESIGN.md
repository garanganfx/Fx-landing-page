---
name: Obsidian Algorithmic
colors:
  surface: '#0b1511'
  surface-dim: '#0b1511'
  surface-bright: '#313c36'
  surface-container-lowest: '#06100c'
  surface-container-low: '#131e19'
  surface-container: '#17221d'
  surface-container-high: '#212c27'
  surface-container-highest: '#2c3732'
  on-surface: '#d9e5dd'
  on-surface-variant: '#bccabc'
  inverse-surface: '#d9e5dd'
  inverse-on-surface: '#28332d'
  outline: '#869487'
  outline-variant: '#3d4a3f'
  surface-tint: '#52df8e'
  primary: '#52df8e'
  on-primary: '#00391c'
  primary-container: '#19b86b'
  on-primary-container: '#004121'
  inverse-primary: '#006d3c'
  secondary: '#b7cbbf'
  on-secondary: '#23342b'
  secondary-container: '#394b41'
  on-secondary-container: '#a6baae'
  tertiary: '#c0c9c2'
  on-tertiary: '#2a322e'
  tertiary-container: '#9aa39d'
  on-tertiary-container: '#313935'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72fda7'
  primary-fixed-dim: '#52df8e'
  on-primary-fixed: '#00210e'
  on-primary-fixed-variant: '#00522c'
  secondary-fixed: '#d3e7da'
  secondary-fixed-dim: '#b7cbbf'
  on-secondary-fixed: '#0e1f17'
  on-secondary-fixed-variant: '#394b41'
  tertiary-fixed: '#dce5de'
  tertiary-fixed-dim: '#c0c9c2'
  on-tertiary-fixed: '#151d19'
  on-tertiary-fixed-variant: '#404944'
  background: '#0b1511'
  on-background: '#d9e5dd'
  surface-variant: '#2c3732'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  metric-xl:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  metric-md:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-ui:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets sophisticated retail forex traders, prop firm contenders, and quantitative finance hobbyists seeking institution-grade automated execution (Expert Advisors). The emotional target is authoritative confidence, mathematical precision, and exclusive club membership.

The aesthetic fuses **Modern Tactical FinTech** with **Subtle Cyber-Glassmorphism**:
- Deep obsidian and carbon surfaces suppress visual noise, allowing critical numeric trading data to claim optical dominance.
- Crisp neon emerald accents evoke profit velocity, terminal interfaces, and high-frequency trade signals without descending into gaudy neon tropes.
- UI elements feature hairline borders, micro-glows, and tight computational geometry that project institutional robustness and technological superiority over retail competitors.

## Colors

The system uses a strictly controlled dark chromatic architecture designed to reduce visual fatigue during multi-session chart monitoring while establishing high-contrast data legibility:

- **Canvas & Obsidian Base (`#070A09`)**: Core canvas background; anchors the entire viewport in near-absolute black with a faint chlorophyll tint.
- **Surface Tier 1 / Cards (`#0F1713`)**: Carbon-emerald container fill for dashboard cards, pricing modules, and breakdown containers.
- **Surface Tier 2 / Highlights (`#13241C`)**: Slightly elevated interactive elements, secondary button fills, and timeline nodes.
- **Primary Accent (`#19B86B`)**: High-saturation emerald reserved for primary CTAs, positive PnL readouts, verified checkmarks, and active status indicators.
- **Data & Text Primary (`#E8F0EB`)**: High-luminance mint-tinted white for maximum contrast on primary values, headings, and key stats.
- **Structural Muted (`#89958E`)**: Cool slate tone for captions, table headers, secondary labels, and structural hair lines.
- **Hairline Accent Glows (`rgba(25, 184, 107, 0.2)`)**: Surface edge borders and active metric ring outlines.

## Typography

The typographical pairing splits tactical utility across three roles:
- **Headings (Space Grotesk)**: Geometric, assertive, and technically expressive. Uses tight negative letter-spacing for sharp, high-impact titles that anchor pricing modules and system declarations.
- **Narrative & UI Body (Inter)**: Clean, neutral, hyper-legible font engineered for sustained readability in data-heavy contexts.
- **Telemetry & Numbers (JetBrains Mono)**: Fixed-width tabular digits enforce structural grid stability on fluctuating currency units, win-rate ratios, drawdowns, and algorithmic timestamps.

## Layout & Spacing

The layout is constructed on an adaptable fluid grid:
- **Mobile (< 768px)**: 4-column layout, `1rem` outer canvas padding, edge-to-edge touch targets, single-column stack for pricing and metrics.
- **Tablet (768px - 1024px)**: 8-column layout, `1.5rem` outer canvas margin, 2-column card structures.
- **Desktop (1024px+)**: 12-column fixed-max-width (`1280px`) fluid grid centered with `3rem` margins, enabling 3-column metric cards and dynamic comparison grids.

Vertical rhythm adheres strictly to an 8px base grid. Complex FinTech data points use compact 4px micro-spacings (`space-xs`) to maintain data density without losing legibility.

## Elevation & Depth

Visual hierarchy uses a layered **Tonal + Micro-Glow** model instead of traditional blurred dropshadows, which wash out on deep black backgrounds:

1. **Base Ground (Level 0)**: `#070A09` solid fill.
2. **Surface Plane (Level 1)**: `#0F1713` with a 1px border of `rgba(137, 149, 142, 0.15)`. Used for standard content tiles and inactive accordion items.
3. **Elevated Trading Card (Level 2)**: `#13241C` background paired with a 1px border of `rgba(25, 184, 107, 0.3)`. Applied to interactive cards, active tabs, and live terminal states.
4. **Primary Focus / High Tier (Level 3)**: `#0F1713` fill backed by an ambient emerald aura (`0 0 32px rgba(25, 184, 107, 0.12)` and `inset 0 1px 0 rgba(25, 184, 107, 0.4)`). Reserved for recommended pricing tiers, verified live trading signals, and primary floating toolbars.

## Shapes

The design system enforces a **Soft-Precision (`1`)** shape language:
- Standard container cards, dialogs, and panels feature `0.25rem` (4px) to `0.5rem` (8px) corner radii, signaling engineering accuracy and mechanical discipline.
- System metrics badges, status indicators, and pill tags break this pattern deliberately with fully rounded ends (`9999px`) to immediately denote real-time micro-states, live trades, and telemetry.
- Border weights are locked to a strict 1px hairline standard across all components.

## Components

### Buttons
- **Primary Action**: `#19B86B` fill, `#070A09` text (Inter SemiBold), subtle top inset highlight (`rgba(255, 255, 255, 0.2)`), hover transition with `box-shadow: 0 0 16px rgba(25, 184, 107, 0.45)`.
- **Secondary / Ghost**: `#13241C` fill, `#E8F0EB` text, 1px border of `rgba(25, 184, 107, 0.35)`.
- **Destructive / Stop-Loss**: Deep crimson-tinted background (`#2B1113`) with `#FF5C5C` text and border for risk management warnings.

### Live Profit Metrics Pills
- Compact inline components for telemetry.
- Background of `#13241C`, 1px border in `rgba(25, 184, 107, 0.3)`.
- Monospaced JetBrains Mono green text (`#19B86B`) preceded by a pulsing 6px emerald status dot (CSS animation `pulse 2s infinite`).

### Verification Badges (Myfxbook / MQL5 / Prop Firm)
- Shield or ribbon layout badge.
- Outer container: 1px hairline border in `rgba(25, 184, 107, 0.4)` over `#0F1713`.
- Contains official third-party micro-icon, timestamp, and a lock/check glyph signifying verified track records.

### Strategy Breakdown Cards
- Grid-aligned analytical cards displaying: Drawdown %, Win Rate %, Profit Factor, and Monthly Avg.
- Large numeric values in `metric-xl` (JetBrains Mono) placed above micro-labels in `#89958E`.
- Card footers feature sparkline charts rendered with an emerald stroke and gradient fill fade to `#0F1713`.

### Multi-Tier Pricing Cards
- Standard Tier: `#0F1713` fill, slate borders.
- Pro / Recommended Tier: Distinct 1px border in `#19B86B`, ambient exterior drop-glow (`0 0 24px rgba(25, 184, 107, 0.15)`), and a top-anchored banner tag labeled `MOST POPULAR EA LICENSE`.
- Feature matrix: Nested checkmarks in `#19B86B` and deactivated features dimmed to `#89958E`.

### Step-by-Step Setup Timeline
- Vertical track line in `rgba(25, 184, 107, 0.2)`.
- Step nodes: Octagonal or rounded 24px nodes with JetBrains Mono numeral indices.
- Active step node: Solid `#19B86B` fill with `#070A09` numeral and an outer ping ring.

### Accordion FAQ
- Collapsed: `#0F1713` card with `#E8F0EB` question and a right-aligned minimalist plus/chevron icon.
- Expanded: Top border shifts to `rgba(25, 184, 107, 0.4)`, answer expands smoothly in `#89958E` (Inter body-md).

### Social Proof Cards
- Grid cards displaying client reviews, prop firm passing certificates, and MT4/MT5 verified balance screenshots.
- Top-right corner includes a verified trade pill: `+XX.XX% ROI (VERIFIED)`.

### Floating Community CTA Bar
- Docked fixed-bottom mobile navigation bar.
- Uses heavy backdrop-blur (`blur(16px)`) with `rgba(15, 23, 19, 0.85)` background and top border in `rgba(25, 184, 107, 0.3)`.
- Dual quick-action direct links: Instant Telegram Signal Channel and WhatsApp Concierge VIP desk.