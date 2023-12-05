

const { JSDOM } = require('jsdom');

const dom = new JSDOM('<html><body><button id="read-more">Show More ↓</button><div class="extended-part-span"></div><div class="extended-part"></div></body></html>');
global.document = dom.window.document;

const { showMoreBtn } = require('../index');

// Test case
test('toggle show more/less on button click', () => {
  showMoreBtn.click();

  expect(document.querySelector('.extended-part-span').classList.contains('extended-part-span--show')).toBe(true);
  expect(document.querySelector('.extended-part').classList.contains('extended-part--show')).toBe(true);
  expect(showMoreBtn.textContent).toBe('Show Less ↑');

  showMoreBtn.click();
  expect(document.querySelector('.extended-part-span').classList.contains('extended-part-span--show')).toBe(false);
  expect(document.querySelector('.extended-part').classList.contains('extended-part--show')).toBe(false);
  expect(showMoreBtn.textContent).toBe('Show More ↓');

  showMoreBtn.click();
  expect(document.querySelector('.extended-part-span').classList.contains('extended-part-span--show')).toBe(true);
  expect(document.querySelector('.extended-part').classList.contains('extended-part--show')).toBe(true);
  expect(showMoreBtn.textContent).toBe('Show Less ↑');
});
