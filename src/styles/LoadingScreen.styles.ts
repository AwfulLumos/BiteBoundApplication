import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFDF1',
  },
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  logoImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  logo: {
    fontSize: 80,
  },
  spinner: {
    marginVertical: 20,
  },
  message: {
    marginTop: 16,
    fontSize: 18,
    fontFamily: 'NunitoSans_600SemiBold',
    color: '#FF9644',
    fontWeight: '600',
  },
});
