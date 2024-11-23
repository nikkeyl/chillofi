type ButtonProperties = {
  ariaLabel: string;
  text: string;
  isActive?: boolean;
  type?: 'switch' | 'play';
  onClick: () => void;
};

export type { ButtonProperties };
