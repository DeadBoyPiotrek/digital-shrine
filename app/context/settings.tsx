import { createContext, FC, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const SettingsContext = createContext<SettingsContextData | null>(null);

export const SettingsProvider: FC<Props> = ({ children }) => {
  const value = useProviderSettings();
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

const useProviderSettings = () => {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
};

export const useSettings = () => {
  const settings = useContext(SettingsContext);
  if (!settings) {
    throw new Error('useSettings must be used inside SettingsProvider');
  }
  return settings;
};

type SettingsContextData = ReturnType<typeof useProviderSettings>;
