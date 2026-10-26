import { expect, test } from '@playwright/test'

const base = '/maniotsportfolio-v2'

test('direct project route renders a case study', async ({ page }) => {
  await page.goto(`${base}/projects/everysync`)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('EverySync')
  await expect(page.getByRole('link', { name: /Source code/ })).toHaveAttribute('href', 'https://github.com/Maniots/OneDriveSync')
})

test('unknown route offers recovery', async ({ page }) => {
  await page.goto(`${base}/missing-page`)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('off-map')
  await expect(page.getByRole('link', { name: /Return home/ })).toBeVisible()
})
