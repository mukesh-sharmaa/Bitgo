import { test, expect } from "@playwright/test";

const pageUrl = 'https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732';
const headingLocator = '//h3[text()="25 of 2875 Transactions"]';

test("testcase1", async({page}) => {
    await page.goto(pageUrl);
    await expect(page).toHaveTitle(/Block/);

    //Validate the section has the heading "25 of 2875 Transactions"
    await expect(page.locator(headingLocator)).toBeVisible();
});