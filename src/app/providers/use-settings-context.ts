import { useContext } from 'react';

import { SettingsContext } from './settings-context';

const useSettingsContext = () => {
  const data = useContext(SettingsContext);

  if (!data) {
    throw new Error('Settings Context not found');
  }

  return data;
};

export { useSettingsContext };
