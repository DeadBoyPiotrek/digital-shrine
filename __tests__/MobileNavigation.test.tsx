import { MobileNavigation } from '@/components/nav/mobileNavigation/MobileNavigation';
import { render } from '../test-utils';
import './matchMedia.mock';

describe('MobileNavigation', () => {
  test('is not displayed', () => {
    const { queryByRole } = render(<MobileNavigation />);
    const list = queryByRole('list');
    expect(list).toBeNull();
  });
});
