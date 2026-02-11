import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { BottomNavigationProps, NavigationTab } from '../../types';
import { bottomNavigationStyles as styles } from '../../styles';

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  tabs,
  activeTab,
  onTabPress,
  backgroundColor = '#FFFFFF',
  activeColor = '#FF6B6B',
  inactiveColor = '#999999',
}) => {
  const renderTab = (tab: NavigationTab) => {
    const isActive = activeTab === tab.id;
    const color = isActive ? activeColor : inactiveColor;

    return (
      <TouchableOpacity
        key={tab.id}
        style={styles.tab}
        onPress={() => onTabPress(tab.id)}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          {tab.icon && (
            typeof tab.icon === 'function' 
              ? tab.icon(isActive) 
              : tab.icon
          )}
          {tab.badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{tab.badge}</Text>
            </View>
          )}
        </View>
        <Text style={[styles.label, { color }]} numberOfLines={1}>
          {tab.label}
        </Text>
        {isActive && <View style={[styles.activeIndicator, { backgroundColor: activeColor }]} />}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <View style={[styles.container, { backgroundColor }]}>
        {tabs.map(renderTab)}
      </View>
    </SafeAreaView>
  );
};

export default BottomNavigation;
