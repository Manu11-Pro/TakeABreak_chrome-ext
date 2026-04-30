chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "breakAlarm") {
    chrome.notifications.create("break-id-" + Date.now(), {
      type: "basic",
      iconUrl: chrome.runtime.getURL("icon128_notification.png"),
      title: "Take a break!",
      message: "Time for your 15-minute rest!, you have been doing this for 45 minutes",
      priority: 2
    });
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("breakAlarm", { delayInMinutes: 45 });
});