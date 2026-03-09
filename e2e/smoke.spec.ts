import { expect, test } from '@playwright/test'

test('la home carga correctamente', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('body')).toBeVisible()
})
