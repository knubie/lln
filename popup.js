var langName = 'English';
var countryName = '';

var googleCodes =
    {
        "off": "NONE",
        "af": "Afrikaans",
        "sq": "Albanian",
        "am": "Amharic",
        "ar": "Arabic",
        "hy": "Armenian",
        "az": "Azeerbaijani",
        "eu": "Basque",
        "be": "Belarusian",
        "bn": "Bengali",
        "bs": "Bosnian",
        "bg": "Bulgarian",
        "ca": "Catalan",
        "ceb": "Cebuano",
        "zh-CN": "Chinese (Simplified)",
        "zh-TW": "Chinese (Traditional)",
        "co": "Corsican",
        "hr": "Croatian",
        "cs": "Czech",
        "da": "Danish",
        "nl": "Dutch",
        "en": "English",
        "eo": "Esperanto",
        "et": "Estonian",
        "fi": "Finnish",
        "fr": "French",
        "fy": "Frisian",
        "gl": "Galician",
        "ka": "Georgian",
        "de": "German",
        "el": "Greek",
        "gu": "Gujarati",
        "ht": "Haitian Creole",
        "ha": "Hausa",
        "haw": "Hawaiian",
        "he": "Hebrew",
        "hi": "Hindi",
        "hmn": "Hmong",
        "hu": "Hungarian",
        "is": "Icelandic",
        "ig": "Igbo",
        "id": "Indonesian",
        "ga": "Irish",
        "it": "Italian",
        "ja": "Japanese",
        "jw": "Javanese",
        "kn": "Kannada",
        "kk": "Kazakh",
        "km": "Khmer",
        "ko": "Korean",
        "ku": "Kurdish",
        "ky": "Kyrgyz",
        "lo": "Lao",
        "la": "Latin",
        "lv": "Latvian",
        "lt": "Lithuanian",
        "lb": "Luxembourgish",
        "mk": "Macedonian",
        "mg": "Malagasy",
        "ms": "Malay",
        "ml": "Malayalam",
        "mt": "Maltese",
        "mi": "Maori",
        "mr": "Marathi",
        "mn": "Mongolian",
        "my": "Myanmar (Burmese)",
        "ne": "Nepali",
        "no": "Norwegian",
        "ny": "Nyanja (Chichewa)",
        "ps": "Pashto",
        "fa": "Persian",
        "pl": "Polish",
        "pt": "Portuguese (Portugal, Brazil)",
        "pa": "Punjabi",
        "ro": "Romanian",
        "ru": "Russian",
        "sm": "Samoan",
        "gd": "Scots Gaelic",
        "sr": "Serbian",
        "st": "Sesotho",
        "sn": "Shona",
        "sd": "Sindhi",
        "si": "Sinhala (Sinhalese)",
        "sk": "Slovak",
        "sl": "Slovenian",
        "so": "Somali",
        "es": "Spanish",
        "su": "Sundanese",
        "sw": "Swahili",
        "sv": "Swedish",
        "tl": "Tagalog (Filipino)",
        "tg": "Tajik",
        "ta": "Tamil",
        "te": "Telugu",
        "th": "Thai",
        "tr": "Turkish",
        "uk": "Ukrainian",
        "ur": "Urdu",
        "uz": "Uzbek",
        "vi": "Vietnamese",
        "cy": "Welsh",
        "xh": "Xhosa",
        "yi": "Yiddish",
        "yo": "Yoruba",
        "zu": "Zulu"
    };

chrome.storage.sync.get({ userCountry: '' },
    function (options) {
        countryName = options.userCountry;
        updateCatalogeUrl();
    }
);

chrome.storage.sync.get({ sourceLanguageCode: '' },
    function (options) {
        var langCode = (options.sourceLanguageCode && (options.sourceLanguageCode !== 'off')) ? options.sourceLanguageCode : 'en';
        langName = googleCodes[langCode] || 'English';
        updateCatalogeUrl();
    }
);

document.getElementById("addressBarCatLink").addEventListener('click', function(){
    var href = this.href;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.update(tab.id, {url: href});
    });
});

function updateCatalogeUrl(){
    var calcURL = "http://www.languagelearningwithnetflix.com/catalogue.html" + '#language=' + encodeURI(langName) + '&country=' + encodeURI(countryName);
    document.getElementById('addressBarCatLink').href = calcURL;
}

document.getElementById("appName").innerHTML = chrome.i18n.getMessage('appName');
document.getElementById("addressBarCatLink").innerHTML = chrome.i18n.getMessage('catalogue');
document.getElementById("helpLink").innerHTML = chrome.i18n.getMessage('help');
document.getElementById("feedbackLink").innerHTML = chrome.i18n.getMessage('feedback');
document.getElementById("fbLink").innerHTML = chrome.i18n.getMessage('facebook');
