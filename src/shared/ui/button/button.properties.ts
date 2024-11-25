type ButtonProperties = {
  ariaLabel: string;
  ariaLabelledBy: string;
  text: string;
  isActive?: boolean;
  type?: 'switch' | 'play';
  onClick: () => void;
};

export type { ButtonProperties };
