import {test,expect,Browser,Page} from "@playwright/test"
import { webkit,chromium,firefox } from 'playwright'

test("api testing",async ({request})=>{
    const browser:Browser = await chromium.launch({headless:false});
   const page:Page = await browser.newPage();
    const resp1 = await request.get("https://fake-json-api.mock.beeceptor.com/users");
    expect(resp1.ok()).toBeTruthy();

   //console.log(resp1.json());

    const users =await resp1.json();
    
    users.forEach((user: { id: number; name: string; email: string; company: string }) => {
        console.log(`ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Company: ${user.company}`);
        console.log('------------------------');
    });

    await browser.close();
}
)
