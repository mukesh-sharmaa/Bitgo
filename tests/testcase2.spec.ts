import { test, expect } from "@playwright/test";

const pageUrl = 'https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732';
const transactionsBoxClass = '.transaction-box';

test("testcase2", async({page}) => {
    await page.goto(pageUrl);
    await expect(page).toHaveTitle(/Block/);
    const transactionsBox = page.locator(transactionsBoxClass);
    const transactionsBoxCount = await transactionsBox.count();
    for (let i = 0; i < transactionsBoxCount; i++) {
        const transaction = transactionsBox.nth(i);
        const ins = await transaction.locator('.vins .vin').count();
        const outs = await transaction.locator('.vouts .vout').count();
        if (ins === 1 && outs === 2) {
        const txnId = await transaction.locator('.txn a').textContent();
        console.log('Txn Hash - ', txnId?.trim());
    }
}
});