import { expect, test } from '@playwright/experimental-ct-react';
import FilterTag from './index';

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result === null) return '';
  return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
}

test.describe('FilterTag', () => {

  test('should render', async ({ page, mount }) => {
    await mount(<FilterTag name="All" active={true} />);

    await expect(page.locator('text=All')).toBeVisible();
  });

  test('should render an active Tag', async ({ page, mount }) => {
    await mount(<FilterTag name="All" active={true} />);

    await expect(page.locator('text=All')).toHaveCSS('color', hexToRgb('#333333'));

    const containter = page.locator('text=All >> xpath=..');

    await expect(containter).toHaveCSS('background-color', hexToRgb('#ffffff'));
  });

  test('should render a no active Tag', async ({ page, mount }) => {
    await mount(<FilterTag name="All" active={false} />);

    await expect(page.locator('text=All')).toHaveCSS('color', hexToRgb('#cccccc'));
  });

});