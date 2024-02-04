// //-------------------------------Permanent values--------------------------------//
let translations;
let currentLanguage = 'kn'; 


// Dictionary to map json files
let dictionaryJson = {
    "navbar"             : "../json/header.json",
    "home"               : "../json/index.json",
    "about"              : "../json/about.json",
    "academics"          : "../json/academics.json",
    "admissions"         : "../json/admissions.json",
    "facilities"         : "../json/facilities.json",
    "departments_primary": "../json/departments_primary.json",
    "departments_high"   : "../json/departments_high.json",
    "departments_pu"     : "../json/departments_pu.json",
    "gallery"            : "../json/gallery.json",   
};



//-----------------------------------Change Language-----------------------------------//
function updateContent(page, language) {
    console.log(page);

    // -----------Navbar Translations--------------//
    var jsonFileUrl = dictionaryJson['navbar'];
    //var idArray = dictionaryArray['navbar'];

    fetch(jsonFileUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var enArray = data[language];
            for (var i = 0; i < enArray.length; i++) {
                var entry = enArray[i];
                Object.entries(entry).forEach(function([key, value]) {
                    document.getElementById(key).innerText = value;
                });
            }
        })
        .catch(function(error) {
            console.error("Error fetching JSON:", error);
    });

    // ---------Current file Translations-----------//
    var jsonFileUrl = dictionaryJson[page];

    fetch(jsonFileUrl)
    .then(async function(response) {
        try {
            const data = await response.json();

            var enArray = data[language];
            for (var i = 0; i < enArray.length; i++) {
                var entry = enArray[i];
                Object.entries(entry).forEach(function([key, value]) {
                    document.getElementById(key).innerText = value;
                });
            }

            var enClassArray = (language === 'kn') ? data.knClass : data.enclass;
            for (var i = 0; i < enClassArray.length; i++) {
                var entryClass = enClassArray[i];
                Object.entries(entryClass).forEach(function([key, value]) {
                    var elements = document.getElementsByClassName(key);

                    for (var j = 0; j < elements.length; j++) {
                        elements[j].innerHTML = value;
                        console.log(value);
                    }
                });
            }

        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    })
    .catch(function(error) {
        console.error("Error fetching JSON:", error);
        // Handle the fetch error if needed
    });
}

//--------------------------------------------------------------------------------------//



//--------------------------------------Set current language----------------------------//
function toggleLanguage(page) {
    currentLanguage = currentLanguage === 'en' ? 'kn' : 'en';
    updateContent(page, currentLanguage);
}
//--------------------------------------------------------------------------------------