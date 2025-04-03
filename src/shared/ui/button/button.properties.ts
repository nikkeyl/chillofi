type Properties = {
  label: string;
  labelledBy: string;
  text: string;
  isActive?: boolean;
  type?: 'switch' | 'play';
  onClick: () => void;
};

export type { Properties };
