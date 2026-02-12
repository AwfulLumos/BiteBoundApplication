import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
// Two cards per row with proper spacing
const STAT_WIDTH = (screenWidth - 64) / 2; // 20px padding each side + 24px gap in middle

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#562F00',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    width: STAT_WIDTH,
    minWidth: STAT_WIDTH,
    height: 140,
    borderWidth: 2,
    borderColor: '#FFCE99',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#562F00',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    fontSize: 28,
  },
  value: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Oswald_700Bold',
    color: '#562F00',
    marginBottom: 4,
  },
  label: {
    fontSize: 11,
    fontFamily: 'NunitoSans_600SemiBold',
    color: '#8B5A1A',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 14,
  },
});
