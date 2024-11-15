type ButtonProperties = {
  ariaLabel: string;
  isActive?: boolean;
  type?: 'circle' | 'rectangle';
  onClick: () => void;
};

export type { ButtonProperties };
