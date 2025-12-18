export interface LinkItem {
  id: string;
  title: string;
  url: string;
  category?: string;
}

export interface LinkCardProps {
  item: LinkItem;
  onClick?: (item: LinkItem) => void;
}
