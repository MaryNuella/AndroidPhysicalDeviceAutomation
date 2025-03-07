import { remote } from "webdriverio";
import { expect } from "chai";



let driver;


const opts = {
  path: "/",
  port: 4723,
  capabilities: {
    "appium:platformName": "Android",
    "appium:deviceName": "Samsung",
    "appium:appPackage": "com.invest.sea",
    "appium:automationName": "UiAutomator2",
    "appium:appActivity": ".MainActivity",
  },
};


describe("Performance Test with Appium", function () {
  
  this.timeout(130000);
  
  
  before(async function () {
    this.timeout(130000);
    try{
   driver = await remote(opts);
    } catch (error) {
      console.error("Failed to create session", error);
    }
   
  });

 async function scrollDown(driver) {
   const screen = await driver.getWindowRect();
   const startX = screen.width / 2; 
   const startY = screen.height * 0.8; 
   const endY = screen.height * 0.2; 

   await driver.performActions([ 
     {
       type: "pointer",
       id: "finger1",
       parameters: { pointerType: "touch" },
       actions: [
         { type: "pointerMove", duration: 0, x: startX, y: startY },
         { type: "pointerDown", button: 0 },
         { type: "pause", duration: 500 }, 
         { type: "pointerMove", duration: 1500, x: startX, y: endY }, 
         { type: "pointerUp", button: 0 },
       ],
     },
   ]);

   await driver.pause(2000);
 }

  
  after(async function () {
    this.timeout(15000);
    try{
    await driver.deleteSession();
    } catch (error) {
      console.error("Error deleting session", error);
    }
  });


  it("should open the app and get the performance data", async function () {
    this.timeout(200000);

    await driver.pause(5000);

    const el1 = await driver.$("accessibility id:Sign In");
    await el1.click();
    const el2 = await driver.$(
      'android=new UiSelector().className("android.widget.EditText").instance(0)'
    );
    await el2.click();
    await el2.addValue("06757339");
    const el3 = await driver.$(
      'android=new UiSelector().className("android.widget.EditText").instance(1)'
    );
    await el3.click();
    await el3.addValue("somethingInHere");
    const el4 = await driver.$("accessibility id:Log in");
    await el4.click();

    await driver.pause(8000);

    const el5 = await driver.$("accessibility id:3");
    await el5.click();

    const el6 = await driver.$("accessibility id:4");
    await el6.click();

    await driver.pause(2000);

    await scrollDown(driver);

    const el7 = await driver.$("accessibility id:8");
    await el7.waitForDisplayed({ timeout: 2000 });
    await el7.click();

    const el8 = await driver.$("accessibility id:0");
    await el8.click();

    await driver.pause(5000);

    const el9 = await driver.$("accessibility id:3");
    await el9.click();
    const el10 = await driver.$("accessibility id:4");
    await el10.click();
    const el11 = await driver.$("accessibility id:8");
    await el11.click();
    const el12 = await driver.$("accessibility id:0");
    await el12.click();
    const el13 = await driver.$("accessibility id:Close");
    await el13.click();

    await driver.pause(2000);

    
    const el14 = await driver.$(
      'android=new UiSelector().className("android.widget.ImageView").instance(0)'
    );
    await el14.click();

    const el15 = await driver.$("accessibility id:Proceed");
    await el15.click();

    const el16 = await driver.$("class name:android.widget.EditText");
    await el16.click();
    await el16.addValue("Mary Test");

    await driver.pressKeyCode(66); 
    await driver.pause(1000);
    await scrollDown(driver);

    const el18 = await driver.$(
      'android=new UiSelector().className("android.widget.EditText").instance(1)'
    );
    await el18.click();
    await el18.addValue("10000");

    const el19 = await driver.$("accessibility id:Continue");
    await el19.click();

    const el20 = await driver.$("accessibility id:90 Days • 14.00% p.a");
    await el20.click();

    const el21 = await driver.$("class name:android.widget.EditText");
    await el21.click();
    await el21.addValue("20000");

    const el22 = await driver.$("accessibility id:Preview investment");
    await el22.click();

    await driver.pause(2000);
    await scrollDown(driver);

    const el23 = await driver.$("accessibility id:Proceed");
    await el23.click();

    const el24 = await driver.$("accessibility id:Close");
    await el24.click();

    await driver.pause(2000);
    const el25 = await driver.$(
      'android=new UiSelector().className("android.view.View").instance(5)'
    );
    await el25.click();
    const el26 = await driver.$(
      'android=new UiSelector().className("android.view.View").instance(5)'
    );
    await el26.click();
    const el27 = await driver.$(
      'android=new UiSelector().className("android.view.View").instance(5)'
    );
    await el27.click();

    await driver.pause(2000);
    const el30 = await driver.$(
      'android=new UiSelector().description("Invest\nTab 2 of 4")'
    );
    await el30.click();
    const el31 = await driver.$(
      'android=new UiSelector().description("Learn\nTab 3 of 4")'
    );
    await el31.click();
    const el32 = await driver.$(
      'android=new UiSelector().description("Help\nTab 4 of 4")'
    );
    await el32.click();
    const el33 = await driver.$(
      'android=new UiSelector().className("android.view.View").instance(5)'
    );
    await el33.click();
    const el34 = await driver.$("class name:android.widget.Button");
    await el34.click();
    const el35 = await driver.$("accessibility id:Close");
    await el35.click();

    await driver.pause(2000);
    const el36 = await driver.$(
      'android=new UiSelector().description("Home\nTab 1 of 4")'
    );
    await el36.click();

    await driver.pause(5000); 

   
    const performanceDataTypes = await driver.getPerformanceDataTypes();
    console.log("📊 Available Performance Data Types:", performanceDataTypes);

    
    const cpuData = await driver.getPerformanceData("com.invest.sea","cpuinfo",10);
    console.log("🔥 CPU Usage Data:", cpuData);

    
    const memoryData = await driver.getPerformanceData("com.invest.sea","memoryinfo",10);
    console.log("🛑 Memory Usage Data:", memoryData);

   
    const networkData = await driver.getPerformanceData(
      "com.invest.sea",
      "networkinfo",
      10
    );
    console.log("🌐 Network Traffic Data:", networkData);

    // Capture Battery Consumption
    const batteryData = await driver.getPerformanceData(
      "com.invest.sea",
      "batteryinfo",
      10
    );
    console.log("⚡ Battery Consumption Data:", batteryData);


    await driver.pause(2000);


  });


});




