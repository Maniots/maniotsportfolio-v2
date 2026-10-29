import { expect, test, type Page } from '@playwright/test'

const base = '/maniotsportfolio-v2/'

async function expectProjectsVisible(page: Page, count: number) {
  const cards = page.locator('.project-card')
  await expect(cards).toHaveCount(count)
  for (const card of await cards.all()) {
    await card.scrollIntoViewIfNeeded()
    await expect(card).toHaveCSS('opacity', '1')
    await expect(card.locator('.project-image')).toBeInViewport()
  }
}

test('project cards remain visible after returning with the case-study back link', async ({ page }) => {
  await page.goto(`${base}projects`)
  for (let visit = 0; visit < 2; visit++) {
    await page.locator('.project-image').first().click()
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('EverySync')
    await page.locator('.back-link').click()
    await expect(page).toHaveURL(`${base}projects`)
    await expectProjectsVisible(page, 5)
  }
})

for (const { path, count } of [{ path: '', count: 3 }, { path: 'projects', count: 5 }]) {
  test(`project cards remain visible after browser back and forward from /${path}`, async ({ page }) => {
    await page.goto(`${base}${path}`)
    await page.locator('.project-image').first().click()
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('EverySync')
    await page.goBack()
    await expectProjectsVisible(page, count)
    if (!path) {
      const capabilities = page.locator('.capability-grid article')
      for (const capability of await capabilities.all()) {
        await capability.scrollIntoViewIfNeeded()
        await expect(capability).toHaveCSS('opacity', '1')
      }
    }
    await page.goForward()
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('EverySync')
    await page.goBack()
    await expectProjectsVisible(page, count)
  })
}

test('project cards remain visible after returning with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto(`${base}projects`)
  await page.locator('.project-image').first().click()
  await page.locator('.back-link').click()
  await expectProjectsVisible(page, 5)
})
