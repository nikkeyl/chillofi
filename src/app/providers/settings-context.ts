import { createContext } from 'react';

type SettingsContextValues = {
  image: string;
  randomImage: () => void;
};

const SettingsContext = createContext<SettingsContextValues | null>(null);

export { SettingsContext, type SettingsContextValues };
