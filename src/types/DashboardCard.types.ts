export interface DashboardCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  onPress: () => void;
}

export interface QuickStatProps {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}
