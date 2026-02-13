
type MenuLeaf = {
  key: string;
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean
};


type MenuGroup = MenuLeaf & {
  children: MenuLeaf[];
};

export type CustomMenuItemType = MenuLeaf | MenuGroup;
