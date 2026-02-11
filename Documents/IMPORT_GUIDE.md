# 🚀 Quick Reference - Import Guide

## 📦 How to Import in Your Project

### Import Components
```tsx
// Single component
import { Sidebar } from '../components';

// Multiple components
import { LoadingScreen, Sidebar, BottomNavigation } from '../components';
```

### Import Types
```tsx
// Option 1: From components (re-exported)
import { MenuItem, SidebarProps } from '../components';

// Option 2: Direct from types folder
import { MenuItem, SidebarProps } from '../types';
```

### Import Styles
```tsx
// For a specific component
import { sidebarStyles as styles } from '../styles';

// Multiple styles
import { homeScreenStyles, sidebarStyles } from '../styles';
```

### Import Theme
```tsx
import { Colors, Typography, Spacing } from '../styles/theme';

// Use in StyleSheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: Spacing.large,
  },
});
```

---

## 📁 File Locations Quick Map

| What You Need | Import From |
|---------------|-------------|
| Components | `'../components'` |
| Types | `'../types'` or `'../components'` |
| Styles | `'../styles'` |
| Theme | `'../styles/theme'` |

---

## 🎨 Component File Example

```tsx
// src/components/MyComponent/MyComponent.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { myComponentStyles as styles } from '../../styles';
import { MyComponentProps } from '../../types';

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default MyComponent;
```

---

## 📝 Common Patterns

### Pattern 1: Screen with Multiple Components
```tsx
// src/screens/RecipeScreen.tsx
import React from 'react';
import { View } from 'react-native';
import { Sidebar, LoadingScreen } from '../components';
import { MenuItem } from '../types';
import { recipeScreenStyles as styles } from '../styles';
```

### Pattern 2: New Component with Theme
```tsx
// src/components/Button/Button.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { buttonStyles as styles } from '../../styles';
import { Colors } from '../../styles/theme';
```

### Pattern 3: Complex Types
```tsx
// src/types/Recipe.types.ts
export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
}

export interface RecipeListProps {
  recipes: Recipe[];
  onSelect: (id: string) => void;
}
```

---

## ⚡ Tips

1. **Always use relative imports** based on your current location
2. **Import from central locations** (`../styles`, `../types`)
3. **Rename styles** using `as` for clarity: `import { homeScreenStyles as styles }`
4. **Use theme constants** instead of hardcoded values
5. **Export from index files** for cleaner imports

---

## 🔍 Directory Depth Guide

```
From components/MyComponent/:
  ├── Styles:  ../../styles
  ├── Types:   ../../types
  ├── Theme:   ../../styles/theme
  └── Other:   ../OtherComponent

From screens/:
  ├── Styles:  ../styles
  ├── Types:   ../types
  ├── Theme:   ../styles/theme
  └── Comps:   ../components

From root (App.tsx):
  ├── Styles:  ./src/styles
  ├── Types:   ./src/types
  └── Comps:   ./src/components
```

---

**Keep this guide handy while developing! 📌**
