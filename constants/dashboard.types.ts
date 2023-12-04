export enum SidebarTabTypes {
  Dashboard,
  Projects,
  Tasks,
  Profile,
}

export type DashboardSidebarTabProps = {
  link: string;
  emoji: string;
  title: string;
  selected: SidebarTabTypes;
  type: SidebarTabTypes;
  onClick: () => any;
};

export type DashboardProfileSettingsTabProps = {
  title: string;
};
