# Dashboard Features

## Overview
Your Home screen has been redesigned as a modern dashboard with animated cards and statistics.

## New Components

### 1. DashboardCard
**Location:** `src/components/DashboardCard/DashboardCard.tsx`

**Features:**
- Spring animation on press (scales down and back up)
- Customizable icon, color, title, and description
- Smooth touch feedback
- Gradient-ready design with shadows

**Usage:**
```typescript
<DashboardCard
  title="Browse Recipes"
  description="Explore our collection of delicious recipes"
  icon="🍳"
  color="#FF6B6B"
  onPress={() => handleCardPress('recipes')}
/>
```

### 2. QuickStat
**Location:** `src/components/QuickStat/QuickStat.tsx`

**Features:**
- Fade-in animation on mount
- Displays key statistics
- Color-coded icon containers
- Compact design for stat rows

**Usage:**
```typescript
<QuickStat 
  label="Total Recipes" 
  value="12" 
  icon="📖" 
  color="#FF6B6B" 
/>
```

## Dashboard Layout

### Header Section
- **Title:** "Dashboard"
- **Subtitle:** "Welcome back Chef!"
- **Menu Button:** Hamburger icon to toggle sidebar

### Quick Stats Row
Three stat cards displaying:
1. **Total Recipes:** 12 (📖)
2. **Favorites:** 5 (❤️)
3. **Categories:** 8 (📂)

### Action Cards
Five interactive cards for main features:

1. **Browse Recipes** (🍳)
   - Color: Coral (#FF6B6B)
   - Action: Navigate to recipes list

2. **My Favorites** (❤️)
   - Color: Turquoise (#4ECDC4)
   - Action: View saved favorites

3. **Categories** (📂)
   - Color: Orange (#FFB84D)
   - Action: Browse by category

4. **Shopping List** (🛒)
   - Color: Purple (#A29BFE)
   - Action: Manage shopping list

5. **Settings** (⚙️)
   - Color: Gray (#95A5A6)
   - Action: Customize app

## Animations

### TypeScript with React Native Animated API
We're using TypeScript with React Native's built-in Animated API (no external libraries needed).

**DashboardCard Animation:**
- Type: Spring animation
- Effect: Scale down (0.95) on press, bounce back on release
- Duration: ~300ms with natural spring physics

**QuickStat Animation:**
- Type: Timing animation
- Effect: Fade in from opacity 0 to 1
- Duration: 600ms
- Trigger: Component mount

## Styling

All styles are centralized in `src/styles/`:
- `HomeScreen.styles.ts` - Dashboard layout styles
- `DashboardCard.styles.ts` - Card component styles
- `QuickStat.styles.ts` - Stat component styles

### Design System
Global constants in `src/styles/theme.ts`:
- **Colors:** Primary, secondary, accent, neutral palettes
- **Typography:** Font sizes, weights, line heights
- **Spacing:** Consistent padding/margin values
- **Shadows:** Elevation levels for depth
- **BorderRadius:** Rounded corner values

## File Structure
```
src/
├── components/
│   ├── DashboardCard/
│   │   └── DashboardCard.tsx
│   ├── QuickStat/
│   │   └── QuickStat.tsx
│   └── index.ts (exports all components)
├── screens/
│   └── HomeScreen.tsx (dashboard)
├── styles/
│   ├── DashboardCard.styles.ts
│   ├── QuickStat.styles.ts
│   ├── HomeScreen.styles.ts
│   ├── theme.ts
│   └── index.ts (exports all styles)
└── types/
    ├── DashboardCard.types.ts
    └── index.ts (exports all types)
```

## Next Steps

### To Update Stats
Edit the values in `HomeScreen.tsx`:
```typescript
<QuickStat label="Total Recipes" value="12" icon="📖" color="#FF6B6B" />
```

### To Add More Cards
Add new DashboardCard components with desired properties:
```typescript
<DashboardCard
  title="New Feature"
  description="Description here"
  icon="🎯"
  color="#YOUR_COLOR"
  onPress={() => handleCardPress('feature-name')}
/>
```

### To Modify Animations
**DashboardCard:** Edit spring config in `DashboardCard.tsx`
```typescript
Animated.spring(scaleAnim, {
  toValue: 1,
  friction: 5,  // Increase for less bounce
  tension: 100, // Increase for faster animation
  useNativeDriver: true,
}).start();
```

**QuickStat:** Edit timing config in `QuickStat.tsx`
```typescript
Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 600, // Change duration (ms)
  useNativeDriver: true,
}).start();
```

## Testing
Run your app with:
```bash
npm start
```

Then:
1. Tap the hamburger menu to open sidebar
2. Try pressing each dashboard card (check console for logs)
3. Observe the spring animation on card press
4. Watch the fade-in animation when stats appear

## Dependencies
No additional packages needed! Everything uses:
- React Native's built-in Animated API
- TypeScript (already configured)
- Expo framework
