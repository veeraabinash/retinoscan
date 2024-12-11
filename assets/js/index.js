const swiper = new Swiper('.product-carousel', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            // shadow: true,
            translate: ["-120%", 0, -500],
        },
        next: {
            // shadow: true,
            translate: ["120%", 0, -500],
        },
    },

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});

const swiper2 = new Swiper('.select-diseases', {
    // Optional parameters
    direction: 'vertical',
    slidesPerView: 6,
    // freeMode: true,
    // loop: true,
    // keyboard: {
    //     enabled: true,
    // },
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: true,
    // },

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.disease-next-button',
        prevEl: '.disease-prev-button',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});


// Dropzone.options.myAwesomeDropzone = { // camelized version of the `id`
//     paramName: "file", // The name that will be used to transfer the file
//     maxFilesize: 2, // MB
//     maxFiles: 1,
//     uploadMultiple: false,
//     accept: function(file, done) {
//         if (file.name == "justinbieber.jpg") {
//             done("Naha, you don't.");
//         } else { done(); }
//     }
// };




// Get all elements with the class "test-types"
let diseaseDivs = document.querySelectorAll('.test-types');

// Function to remove "test-active" class from all divs
function removeActiveClass() {
    diseaseDivs.forEach(function(div) {
        div.classList.remove('test-active');
    });
}


// Define a diseaseData object
let diseaseData = {
    "dGlaucoma": {
        "Disease Report": [
            { name: "Glaucoma", percent: 75.8 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 99.3 },
        ],
    },

    "dARMD": {
        "Disease Report": [
            { name: "ARMD", percent: 73.7 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 99.3 },
        ],
    },

    "dDME": {
        "Disease Report": [
            { name: "BRVO", percent: 40.3 },
        ],
        "DR Report": [
            { name: "dr_2", percent: 100 },
        ],
        "Additional Report": [
            { name: "Hard Exudates", percent: 78.9 },
            { name: "DME", percent: 53.7 },
            { name: "HM", percent: 25.4 },
        ],
    },

    "dDR1": {
        "Disease Report": [
            { name: "No Disease", percent: 87.6 },
        ],
        "DR Report": [
            { name: "dr_1", percent: 100 },
        ],
        "Additional Report": [
            { name: "Micraneurysms", percent: 21.2 },
        ],
    },

    "dDR2": {
        "Disease Report": [
            { name: "Drusen", percent: 64.9 },
            { name: "Chorioretinitis", percent: 38.2 },
        ],
        "DR Report": [
            { name: "dr_2", percent: 100 },
        ],
        "Additional Report": [
            { name: "Micraneurysms", percent: 59.7 },
            { name: "Hard Exudates", percent: 80.4 },
            { name: "DME", percent: 46.4 },
            { name: "HM", percent: 29 },
        ],
    },

    "dDR3": {
        "DR Report": [
            { name: "dr_3", percent: 100 },
        ],
        "Additional Report": [
            { name: "Micraneurysms", percent: 75.6 },
            { name: "Hard Exudates", percent: 50 },
            { name: "Cotton Wool Spot", percent: 38.2 },
            { name: "DME", percent: 37.7 },
            { name: "HM", percent: 69.3 },

        ],
    },

    "dDR4": {
        "Disease Report": [
            { name: "Hypertensive DR", percent: 40.9 },
        ],
        "DR Report": [
            { name: "dr_4", percent: 100 },
        ],
        "Additional Report": [
            { name: "Hard Exudates", percent: 92.7 },
            { name: "DME", percent: 86.1 },
            { name: "FPD", percent: 41.7 },
            { name: "NVD", percent: 85 },
            { name: "NVE", percent: 77.3 },
            { name: "HM", percent: 60 },
        ],
    },

    "dDrusen": {
        "Disease Report": [
            { name: "Drusen", percent: 59.3 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 93.8 },
        ],
    },

    "dLaser": {
        "Disease Report": [
            { name: "ERM", percent: 68.7 },
            { name: "Myopic Degeneration", percent: 56.7 },
        ],
        "DR Report": [
            { name: "dr_4", percent: 100 },
        ],
        "Additional Report": [
            { name: "Laser", percent: 80.8 },
            { name: "Hard Exudates", percent: 82.1 },
            { name: "DME", percent: 59.1 },
            { name: "Micraneurysms", percent: 38.8 },
            { name: "HM", percent: 35.3 },
        ],
    },

    "dPeripapillaryAtrophy": {
        "Disease Report": [
            { name: "Peripapilary Atrophy", percent: 92.5 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 99.8 },
        ],
    },

    "dNVD": {
        "Disease Report": [
            { name: "Drusen", percent: 51.4 },
        ],
        "DR Report": [
            { name: "dr_4", percent: 100 },
        ],
        "Additional Report": [
            { name: "NVD", percent: 88.4 },
            { name: "Micraneurysms", percent: 70.7 },
            { name: "Hard Exudates", percent: 97.4 },
            { name: "Cotton Wool Spot", percent: 71.6 },
            { name: "DME", percent: 97.9 },
            { name: "NVE", percent: 90.2 },
            { name: "HM", percent: 58 },
            { name: "Viterous HM", percent: 40.3 },
        ],
    },

    "dNVE": {
        "DR Report": [
            { name: "dr_4", percent: 100 },
        ],
        "Additional Report": [
            { name: "NVE", percent: 96 },
            { name: "Hard Exudates", percent: 98.6 },
            { name: "DME", percent: 96.9 },
            { name: "FPE", percent: 86.4 },
            { name: "NVD", percent: 97.4 },
            { name: "Viterous HM", percent: 88.5 },
            { name: "HM", percent: 45.3 },
        ],
    },

    "dMyopicDegeneration": {
        "Disease Report": [
            { name: "Myopic Degeneration", percent: 94.9 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 98.5 },
        ],
    },

    "dSoftExudates": {
        "DR Report": [
            { name: "dr_3", percent: 100 },
        ],
        "Additional Report": [
            { name: "Hard Exudates", percent: 93.9 },,
            { name: "Cotton Wool Spot", percent: 96.1 },
            { name: "DME", percent: 97.2 },
            { name: "High HM", percent: 70.2 },
            { name: "Micraneurysms", percent: 29.2 },
        ],
    },

    "dTortousVessels": {
        "Disease Report": [
            { name: "Tortuous vessels", percent: 71.7 },
        ],
        "DR Report": [
            { name: "dr_0", percent: 100 },
        ],
        "Additional Report": [
            { name: "no_dr", percent: 100 },
        ],
    },
    "dNormal": {
        "Disease Report": [
            { name: "Normal", percent: 93.2 },
        ],
    },
    "dDrusenOCT": {
        "Disease Report": [
            { name: "Drusen", percent: 92.6 },
        ],
    },
    "dDME_OCT": {
        "Disease Report": [
            { name: "DME", percent: 93.1 },
        ],
    },
    "dCNV": {
        "Disease Report": [
            { name: "CNV", percent: 71.2 },
        ],
    },
    "dAMD": {
        "Disease Report": [
            { name: "AMD", percent: 93.7 },
        ],
    },
    "dCSR": {
        "Disease Report": [
            { name: "CSR", percent: 91.6 },
        ],
    },
    "dDR_OCT": {
        "Disease Report": [
            { name: "DR", percent: 84.5 },
        ],
    },
    "dMH": {
        "Disease Report": [
            { name: "MH", percent: 88.2 },
        ],
    },
};
// This function returns an HTML string for a disease section
function createDiseaseSection(headline, diseases) {
    let diseaseSections = `
    <div class="disease-section-headline">${headline}</div>
    `;

    diseases.forEach(function(disease) {
        diseaseSections += `
        <div class="possible-diseases-section">
            <div class="disease-data">
                <div class="disease-name">${disease.name}</div>
                <div class="detect-percent">${disease.percent}%</div>
            </div>
            <div class="progress">
                <div class="progress-bar disease-progress" style="width: ${disease.percent}%" role="progressbar" aria-valuenow="${disease.percent}%" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        `;
    });

    return diseaseSections;
}



// Function to remove animation classes
function removeAnimationClasses() {
    topLeftQuadrant.classList.remove('animate-top-left');
    topRightQuadrant.classList.remove('animate-top-right');
    bottomLeftQuadrant.classList.remove('animate-bottom-left');
    bottomRightQuadrant.classList.remove('animate-bottom-right');
}

const topLeftQuadrant = document.querySelector('.top-left');
const topRightQuadrant = document.querySelector('.top-right');
const bottomLeftQuadrant = document.querySelector('.bottom-left');
const bottomRightQuadrant = document.querySelector('.bottom-right');

// Attach event listeners for animationend event
// [topLeftQuadrant, topRightQuadrant, bottomLeftQuadrant, bottomRightQuadrant].forEach(el => {
//     el.addEventListener('animationend', () => {
//         removeAnimationClasses();
//     });
// });

// Loop through each element
// Add an event listener to each div
diseaseDivs.forEach(function(div) {
    // Add an event listener to each div
    div.addEventListener('click', function() {
        // Remove "test-active" class from all divs
        removeActiveClass();

        // Add "test-active" class to the clicked div
        this.classList.add('test-active');

        // Add animation classes
        topLeftQuadrant.classList.add('animate-top-left');
        topRightQuadrant.classList.add('animate-top-right');
        bottomLeftQuadrant.classList.add('animate-bottom-left');
        bottomRightQuadrant.classList.add('animate-bottom-right');

        // Use setTimeout to delay the following actions by 2 seconds
        setTimeout(() => {
            // Get the image path and disease info from data attributes
            let imagePath = this.getAttribute('data-image-path');
            let heatmapPath = this.getAttribute('data-heatmap-path');
  
            // Get the image element
            let imageElement = document.getElementById('dEyeImage');
            // Change the source of the image
            imageElement.src = imagePath;

            let heatmapImage = document.getElementById('heatmapImage');
            heatmapImage.classList.remove('heatmapImageAfter');
            heatmapImage.src = heatmapPath;

            // Get the disease data from the diseaseData object
            let data = diseaseData[this.id];

            // Get the div for possible diseases
            let possibleDiseasesDiv = document.getElementById('dPossibleDiseases');
  
            // Clear the existing content of the div
            possibleDiseasesDiv.innerHTML = "";
  
            // Add new content to the div
            for (let headline in data) {
                possibleDiseasesDiv.innerHTML += createDiseaseSection(headline, data[headline]);
            }

            // Remove animation classes after the image and disease data have changed
            removeAnimationClasses();
        }, 2000);
    });
});