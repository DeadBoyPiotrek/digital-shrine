import { act } from 'react-dom/test-utils';
import {
  MobileNavSettingsProvider,
  useMobileNavSettings,
} from '../app/context/mobileNavSettings';
import { renderHook } from '../test-utils';

describe('useMobileNavSettings', () => {
  test('test default state of mobile navigation state hook ', () => {
    const { result } = renderHook(() => useMobileNavSettings(), {
      wrapper: MobileNavSettingsProvider,
    });
    expect(result.current.isOpen).toBe(false);
    act(() => {
      result.current.setIsOpen(true);
    });
    expect(result.current.isOpen).toBe(true);
    act(() => {
      result.current.setIsOpen(false);
    });
    expect(result.current.isOpen).toBe(false);
  });
});
