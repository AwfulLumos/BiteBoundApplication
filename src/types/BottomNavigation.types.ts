import { ReactNode } from 'react';

export interface NavigationTab {
  id: string;
  label: string;
  icon?: ReactNode | ((isActive: boolean) => ReactNode);
  badge?: string | number;
}

export interface BottomNavigationProps {
  tabs: NavigationTab[];
  activeTab: string;
  onTabPress: (tabId: string) => void;
  backgroundColor?: string;
  activeColor?: string;
  inactiveColor?: string;
}
