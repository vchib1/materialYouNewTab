// English (Default)
const en = {
    // Menu Items
    "github": "GitHub",
    "feedback": "Feedback",

    // Shortcuts
    "shortcutsText": "Shortcuts",
    "enableShortcutsText": "Show saved shortcuts",
    "editShortcutsText": "Edit Shortcuts",
    "shortcutsInfoText": "Choose which shortcuts get shown",
    "editShortcutsList": "Saved Shortcuts",
    "editShortcutsListInfo": "You can add new shortcuts by clicking the \"+\" icon or edit existing ones by clicking on the shortcut name or URL.",
    "adaptiveIconText": "Adaptive Icons",
    "adaptiveIconInfoText": "Shortcut icons will match the theme color and appear smaller",
    "bookmarksText": "Bookmarks",
    "bookmarksInfo": "Show bookmarks sidebar",
    "ai_tools_button": "AI-Tools",
    "enable_ai_tools": "Show shortcuts for AI tools",
    "googleAppsMenuText": "Google Apps",
    "googleAppsMenuInfo": "Show shortcuts for Google Apps",
    "googleAppsHover": "Google Apps",    // Keep this shorter

    // To-do List
    "todoListText": "To Do List",
    "todoListInfo": "Show a daily To Do list",
    "todoListHover": "ToDo List",    // Keep this short
    "todoPlaceholder": "Add task...",

    // Digital Clock
    "digitalclocktitle": "Digital Clock",
    "digitalclockinfo": "Switch to the digital clock",
    "timeformattitle": "12-Hour Format",
    "timeformatinfo": "Use 12-hour time format",
    "greetingtitle": "Greeting",
    "greetinginfo": "Show greeting below custom text",

    // Misc
    "userTextTitle": "Customizable Text",
    "userTextInfo": "Show custom text below the clock",
    "fahrenheitCelsiusCheckbox": "Switch to Fahrenheit",
    "fahrenheitCelsiusText": "Refresh the page to apply changes",
    "hideWeatherTitle": "Hide Weather",
    "hideWeatherInfo": "Disable the weather widgets",
    "hideWeatherBox": "Hide Weather Card",    // Toggle for mobile devices only
    "hideWeatherBoxInfo": "Show only temperature pill",

    // Search
    "micIconTitle": "Hide Microphone Icon",
    "micIconInfo": "If voice typing is not working",
    "switchSearchModes": "Switch Search Modes",
    "switchSearchModesInfo": "Click on ‘Search With’ to change the mode",
    "hideSearchWith": "Hide Search Engines",
    "hideSearchWithInfo": "Switch between search engines by clicking its icon",
    "motivationalQuotesText": "Motivational Quotes",
    "motivationalQuotesInfo": "Show quotes below the searchbar",
    "search_suggestions_button": "Search Suggestions",
    "search_suggestions_text": "Enable search suggestions",

    // Proxy
    "useproxytitletext": "Proxy Bypass",
    "useproxyText": "If search suggestions aren't working",
    "ProxyText": "CORS Bypass Proxy",
    "ProxySubtext": "Add your own CORS bypass proxy",
    "HostproxyButton": "Host your own proxy",

    // Location
    "useGPS": "Use GPS",
    "useGPSInfo": "Enable GPS for live location updates",
    "UserLocText": "Enter your Location",
    "UserLocSubtext": "If the weather location isn't correct",
    "userLoc": "Your City or Coordinates (Latitude, Longitude)",
    "PrivacyPolicy": "Privacy policy",

    // Weather
    "WeatherApiText": "Enter your WeatherAPI key",    // For 'WeatherAPI' string, only transliterate
    "WeatherApiSubtext": "If the weather functionality isn't working",
    "userAPI": "Your weatherAPI key",
    "LearnMoreButton": "Learn more",
    "saveAPI": "Save",

    // Body Items
    // Calendar
    "days": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    "months": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    // Bookmarks
    "bookmarksHeading": "Bookmarks",
    "bookmarkSortBy": "Sort by",
    "sortAlphabetical": "A-Z",
    "sortTimeAdded": "Old-New",
    "bookmarkViewAs": "View as",
    "bookmarkViewGrid": "Grid",    // Keep this shorter
    "bookmarkViewList": "List",    // Keep this shorter
    "bookmarkSearch": "Search bookmark",
    "editBookmarkHeading": "Edit Bookmark",
    "editBookmarkName": "Bookmark Name",
    "editBookmarkURL": "Bookmark URL",

    // New Tab Item
    "conditionText": "Hello! How are you today?",
    "humidityLevel": "Humidity",
    "feelsLike": "Feels",
    "location": "Earth",
    "enterBtn": "Search",
    "searchPlaceholder": "Type here...",
    "listenPlaceholder": "Listening...",
    "searchWithHint": "Search With",
    "searchOnHint": "Search On",
    "userText": "Click here to edit",

    // Greeting
    greeting: {
        "morning": "Good Morning!",
        "afternoon": "Good Afternoon!",
        "evening": "Good Evening!"
    },

    // Search Engines
    "defaultEngine": "Default",
    "googleEngine": "Google",
    "duckEngine": "Duck",    // DuckDuckGo
    "bingEngine": "Bing",
    "braveEngine": "Brave",
    "youtubeEngine": "YouTube",
    "gImagesEngine": "Images",
    "wikipediaEngine": "Wikipedia",

    // AI Tools
    "ai_tools": "AI Tools",
    "chatGPT": "ChatGPT",
    "gemini": "Gemini",
    "copilot": "Copilot",
    "claude": "Claude",
    "perplexity": "Perplexity",
    "deepseek": "DeepSeek",
    "metaAI": "Meta AI",

    // Theme
    "enableDarkMode": "Dark Mode (Experimental)",
    "enableDarkModeInfo": "Enable dark mode themes",

    // Wallpaper and settings
    "uploadWallpaperText": "Upload Wallpaper",    // Keep this short
    "rangColor": "Pick color",    // Keep this short
    "backupText": "Backup",
    "restoreText": "Restore",
    "resetsettings": "Reset Settings",
    "menuCloseText": "Close",

    // Dialog boxes (alerts)
    "okText": "OK",
    "yesText": "Yes",
    "noText": "No",
    "agreeText": "I Agree",
    "cancelText": "Cancel",
    "confirmWallpaper": "Would you like to set a new image as your wallpaper for the day?",
    "confirmRestore": "Are you sure you want to reset your settings? This action cannot be undone.",
    "Nobackgroundset": "No background image is currently set.",
    "clearbackgroundimage": "Are you sure you want to clear the background image?",
    "ProxyDisclaimer": "All proxy features are off by default.\n\nIf you enable search suggestions and CORS bypass proxy, it is strongly recommended to host your own proxy for enhanced privacy.\n\nBy default, the proxy will be set to https://mynt-proxy.rhythmcorehq.com, meaning all your data will go through this service, which may pose privacy concerns.",
    "GPSDisclaimer": "Your location data is used solely to provide accurate weather updates. It is temporarily stored within the browser and neither shared with any third-party services nor accessible to us.\n\nBy enabling GPS, you consent to sharing your location with the extension locally.",
    "failedbackup": "Backup failed: ",
    "restorecompleted": "Restore completed successfully!",
    "restorefailed": "Restore failed: ",
    "invalidBackup": "Invalid backup file selected.",
    "deleteBookmark": "Are you sure you want to delete the bookmark \"{title}\"?",  // Do not translate {title}
    "UnsupportedBrowser": "Bookmarks are not supported in your browser.",
    "minOneshortcut": "You must keep at least one shortcut.",
};
