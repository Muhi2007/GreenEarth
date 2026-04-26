# Project Requirements Document (PRD)
## GreenEarth GetStarted Page - Navigation & Map Enhancements

**Date:** 2026-04-26  
**Status:** In Development  
**Priority:** High

---

## Executive Summary

This PRD outlines two critical UI/UX improvements for the GreenEarth GetStarted page:
1. **Navigation Bar Font Color Visibility** - Fix contrast issues with font colors on transparent vs. dark backgrounds
2. **Enhanced Map Overlay** - Improve map detail to show streets, buildings, and location context for water infrastructure visualization

---

## Problem Statement

### Problem 1: Navigation Bar Font Visibility
**Issue:** The navigation bar uses a fixed light font color (`text-text-inverse` - #F5F5F0) for all background states.
- ✗ When background is transparent (scrolled=false), light text has poor contrast against the page background
- ✓ When background is dark (scrolled=true), light text has good contrast

**Impact:** Poor readability and accessibility when users view the top of the page with transparent navbar.

**Current Implementation:**
- Navigation component: `/src/components/Navbar.tsx`
- Font color: Always `text-text-inverse` (light cream)
- Background states:
  - Transparent: `bg-transparent`
  - Dark: `bg-bg-dark/97` with backdrop blur

### Problem 2: Map Overlay Too Simple
**Issue:** The map uses a minimal OpenStreetMap style (demotiles.maplibre.org) that lacks street names, building details, and location context.
- ✗ Users cannot determine which street/area has water leaks
- ✗ Missing landmarks, street names, and building outlines
- ✓ Current map shows pipe networks, sensor points, and heatmaps correctly

**Impact:** Users cannot correlate anomalies to real-world locations and streets, reducing situational awareness.

**Current Implementation:**
- Map style: `https://demotiles.maplibre.org/style.json` (minimal detail)
- Location: `/src/lib/hooks/useMapboxMap.ts` (line 20)
- Map data: Baku, Azerbaijan (center: [49.8671, 40.4093], zoom: 13)

---

## Requirements

### Requirement 1: Dynamic Navigation Font Colors

**Feature ID:** NAV-001  
**Title:** Adaptive Navigation Bar Font Colors Based on Background State

**Functional Requirements:**
1. Navigation bar font should dynamically change based on background color state:
   - **Transparent Background (scrolled=false):** Font color = Black (#000000 or text-gray-900)
   - **Dark Background (scrolled=true):** Font color = White (#FFFFFF or text-white)

2. All navigation text elements should be updated:
   - Main navigation links
   - Dropdown menu items
   - Hover states should maintain visual hierarchy
   - Active states should maintain brand color consistency

3. Preserve existing functionality:
   - Smooth scroll detection at 20px threshold
   - Backdrop blur effect on dark background
   - Hover and active states
   - Dropdown menu interactions

**Non-Functional Requirements:**
- No impact on animation smoothness
- No performance degradation
- Maintain consistent visual design language

**Acceptance Criteria:**
- [ ] Navigation text is clearly readable on transparent background (black text)
- [ ] Navigation text is clearly readable on dark background (white text)
- [ ] Transition between states is smooth and not jarring
- [ ] All interactive elements (hover, click) work correctly
- [ ] Accessibility standards met (WCAG AA contrast ratios)

---

### Requirement 2: Enhanced Map Styling

**Feature ID:** MAP-001  
**Title:** Upgrade Map Style to Show Streets, Buildings, and Location Context

**Functional Requirements:**
1. Replace minimal map style with enhanced style that displays:
   - Street names and labels
   - Building outlines and details
   - Landmarks and POIs (points of interest)
   - Better visual hierarchy and readability

2. Map style must:
   - Work with Maplibre GL (current library)
   - Support free/open usage without API token requirements
   - Maintain performance at zoom levels 10-18
   - Display correctly over pipe networks and sensor overlays
   - Be suitable for urban infrastructure monitoring

3. Maintain all existing functionality:
   - Pipe network visualization layers
   - Sensor point markers
   - Anomaly heatmap
   - Layer visibility toggles
   - Zoom, pan, and 3D controls

**Recommended Map Style:**  
**CartoDB Positron GL** - `https://basemaps.cartocdn.com/gl/positron-gl-style/style.json`
- ✓ Shows street names, building details, landmarks
- ✓ Free and no API key required
- ✓ Compatible with Maplibre GL
- ✓ Light theme matches current design
- ✓ Good performance and rendering
- ✓ Used by many production mapping applications

**Non-Functional Requirements:**
- Map loading time should not increase significantly
- Performance should remain stable at all zoom levels
- Layer rendering order must be preserved (pipes on top of basemap)
- Mobile performance must be maintained

**Acceptance Criteria:**
- [ ] Map displays street names at zoom levels 13+
- [ ] Buildings are visible with distinct outlines
- [ ] Infrastructure layers (pipes, sensors) are visible over map
- [ ] No visual conflicts between map style and infrastructure overlays
- [ ] Mobile view remains functional and readable
- [ ] All controls (zoom, pan, rotate) work smoothly

---

## Implementation Plan

### Phase 1: Navigation Bar Fix
**Estimated Effort:** 1-2 hours

**Tasks:**
1. Update `/src/components/Navbar.tsx`:
   - Add conditional className logic for font colors based on scroll state
   - Change from static `text-text-inverse` to dynamic color selection
   - Update all nav text elements (links, dropdowns, labels)
   - Update hover states to maintain visual hierarchy

2. Test:
   - Verify text visibility at top of page (transparent background)
   - Verify text visibility after scroll (dark background)
   - Test all interactive states (hover, active, focus)
   - Check contrast ratios meet WCAG standards

### Phase 2: Map Style Enhancement
**Estimated Effort:** 2-3 hours

**Tasks:**
1. Update `/src/lib/hooks/useMapboxMap.ts`:
   - Change style URL from demotiles to CartoDB Positron GL
   - Test loading and rendering
   - Verify no layout shifting or performance issues

2. Verify layer rendering:
   - Ensure pipes remain visible and distinct
   - Check sensor points are clickable and visible
   - Verify heatmap displays correctly
   - Test all layer visibility toggles

3. Test across zoom levels:
   - Zoom 10-13: Regional view with streets
   - Zoom 14-16: City blocks with buildings
   - Zoom 17-18: Detailed street view

4. Mobile testing:
   - Verify map is responsive
   - Test touch controls
   - Check control panel layout

---

## Files to Modify

### Phase 1 - Navigation Fix
- `/src/components/Navbar.tsx` - Main navigation component with scroll detection

### Phase 2 - Map Enhancement
- `/src/lib/hooks/useMapboxMap.ts` - Map style URL configuration (line 20)

---

## Design Considerations

### Navigation Bar Colors
- **Transparent State Font:** `text-gray-900` (black) or `#000000`
  - Provides contrast against light page backgrounds
  - Maintains readability for all users
  
- **Dark State Font:** `text-white` (white) or `#FFFFFF`
  - Maintains readability against dark background
  - Consistent with current dark theme approach

### Map Style Selection
- **CartoDB Positron:** Light, clean style with street details
  - Color palette: Grays, blues, greens (complements infrastructure data)
  - Suitable for analytical/monitoring applications
  - No authentication required
  - Widely used in production systems

---

## Success Metrics

### Navigation Bar
- ✓ 100% text readability in both background states
- ✓ WCAG AA contrast ratio met (4.5:1 for normal text)
- ✓ No increase in bounce rate due to UI clarity
- ✓ User testing confirms improved navigation experience

### Map Enhancement
- ✓ Users can identify specific streets where anomalies occur
- ✓ Map detail improves situational awareness (qualitative feedback)
- ✓ No degradation in map performance (same load times ±10%)
- ✓ All infrastructure overlays remain visible and functional
- ✓ Mobile usability maintained or improved

---

## Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|-----------|
| Map style change breaks layer rendering | High | Low | Test layer rendering before deployment |
| Font color change reduces brand consistency | Medium | Low | Verify colors match design system |
| Performance degradation on mobile | Medium | Low | Monitor load times and FPS |
| Contrast issues persist after change | Medium | Low | Use automated accessibility testing |

---

## Rollback Plan

- **Navigation Fix:** Simple revert of Navbar.tsx className changes
- **Map Style:** Change URL back to `https://demotiles.maplibre.org/style.json`
- Both changes are non-breaking and can be reverted within minutes

---

## Future Enhancements

1. User preference for light/dark map theme
2. Custom map style matching brand colors
3. Satellite/aerial imagery toggle option
4. Street view integration for specific leak locations
5. Historical map data for trend analysis

