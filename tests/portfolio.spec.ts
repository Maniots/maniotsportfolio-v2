import { expect, test } from '@playwright/test'

const base = '/maniotsportfolio-v2/'

test('navigates through work and keeps the selected language', async ({ page }) => {
  await page.goto(base)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Creative code')
  await page.getByRole('button', { name: 'Passa all’italiano' }).click()
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('lang', 'it')
  await expect(page.getByRole('button', { name: 'Switch to English' })).toBeVisible()
})

test('contact page exposes direct email and clipboard feedback', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto(`${base}contact`)
  await expect(page.locator('.contact-email')).toHaveAttribute('href', 'mailto:manuelrizzo2006@gmail.com')
  await page.getByRole('button', { name: /Copy address/ }).click()
  await expect(page.getByRole('status')).toContainText('Email copied')
})

test('responsive navigation reaches About', async ({ page }, testInfo) => {
  await page.goto(base)
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Open menu' }).click()
    await page.getByRole('link', { name: 'About' }).click()
  } else {
    await page.locator('.desktop-nav').getByRole('link', { name: 'About' }).click()
  }
  await expect(page).toHaveURL(/\/about$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Curious by nature')
})

test('home stays inside the viewport and project images load', async ({ page }) => {
  await page.goto(base)
  const dimensions = await page.evaluate(() => ({ width: innerWidth, content: document.documentElement.scrollWidth }))
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.width)
  await expect.poll(() => page.locator('.project-image img').evaluateAll((images) =>
    images.every((image) => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0),
  )).toBe(true)
})

test('reduced motion collapses decorative transitions', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto(base)
  const duration = await page.locator('.project-image img').first().evaluate((element) => getComputedStyle(element).transitionDuration)
  expect(Number.parseFloat(duration)).toBeLessThanOrEqual(0.00001)
})
