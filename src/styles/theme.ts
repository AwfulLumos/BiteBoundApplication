// Global Theme and Color Constants
// Import this file in your style files to maintain consistency

export const Colors = {
  // Primary Colors - Warm Orange Scheme
  primary: '#FF9644',          // Orange
  primaryLight: '#FFCE99',     // Light Orange
  primaryDark: '#562F00',      // Dark Brown
  
  // Backgrounds
  background: '#FFFDF1',       // Cream/Off-white
  backgroundLight: '#FFFDF1',
  cardBackground: '#FFFFFF',
  
  // Neutrals
  white: '#FFFFFF',
  black: '#000000',
  
  // Text Colors
  textDark: '#562F00',         // Dark Brown
  textMedium: '#8B5A1A',       // Medium Brown
  textLight: '#B8936D',        // Light Brown
  
  // Borders
  border: '#FFCE99',           // Light Orange
  borderLight: '#FFE5CC',
  
  // Status Colors
  success: '#4ECDC4',
  error: '#FF4757',
  warning: '#FF9644',
  info: '#3742FA',
  
  // Overlay
  overlay: 'rgba(86, 47, 0, 0.5)',  // Dark Brown overlay
};

export const Typography = {
  // Font Sizes
  fontSize: {
    tiny: 10,
    small: 12,
    regular: 14,
    medium: 16,
    large: 18,
    xlarge: 20,
    xxlarge: 24,
    huge: 28,
    massive: 32,
  },
  
  // Font Weights
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  
  // Line Heights
  lineHeight: {
    tight: 18,
    normal: 22,
    relaxed: 24,
    loose: 28,
  },
};

export const Spacing = {
  // Padding/Margin values
  tiny: 4,
  small: 8,
  medium: 12,
  regular: 16,
  large: 20,
  xlarge: 24,
  xxlarge: 32,
  huge: 40,
};

export const BorderRadius = {
  small: 4,
  medium: 8,
  large: 12,
  xlarge: 16,
  round: 50,
};

export const Shadows = {
  small: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  large: {
    shadowColor: Colors.black,
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
};

export const Layout = {
  sidebarWidth: 280,
  headerHeight: 60,
  bottomNavHeight: 60,
};
