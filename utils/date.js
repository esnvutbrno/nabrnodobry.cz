const {DateTime, Duration, Settings} = require("luxon");

Settings.defaultLocale = "en-US";

Settings.defaultZone = 'Europe/Prague';

// DateTime.defaultZone = 'Europe/Prague';

export {DateTime, Duration, Settings};
