import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
// Two cards per row with proper spacing
const STAT_WIDTH = (screenWidth - 64) / 2; // 20px padding each side + 24px gap in middle

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#562F00',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
    width: STAT_WIDTH,
    minWidth: STAT_WIDTH,
    height: 160,
    borderWidth: 2,
    borderColor: '#FFCE99',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#562F00',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  icon: {
    fontSize: 32,
  },
  value: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'Oswald_700Bold',
    color: '#562F00',
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    fontFamily: 'NunitoSans_600SemiBold',
    color: '#8B5A1A',
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 16,
  },
});
