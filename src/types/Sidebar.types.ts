import { ReactNode } from 'react';

export interface MenuItem {
  id: string;
  label: string;
  icon?: ReactNode;
  badge?: string | number;
}

export interface SidebarProps {
  menuItems: MenuItem[];
  onItemPress: (itemId: string) => void;
  activeItem?: string;
  headerTitle?: string;
  headerComponent?: ReactNode;
}
