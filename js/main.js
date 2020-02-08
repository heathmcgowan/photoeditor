const image = document.getElementById('image');
const canvas = document.getElementById('canvas');
const sliders = document.querySelectorAll('.sliders');
const colorPickers = document.querySelectorAll('.color-pickers');
const controls = document.getElementById('controls');
const rotateCheckbox = document.getElementById('spin-checkbox');
const displayedText = document.getElementById('text-overlay');

// Event listeners
sliders.forEach(input => input.addEventListener('input', updateFilter));

colorPickers.forEach(input => input.addEventListener('input', updateColor));

loadImage();

rotateCheckbox.addEventListener('change', function() {
    if (this.checked) {
        image.classList.add('spin');
        document.getElementById('slider-scaleXY').disabled = true;
        document.getElementById('slider-scaleX').disabled = true;
        document.getElementById('slider-scaleY').disabled = true;
        document.getElementById('slider-translateX').disabled = true;
        document.getElementById('slider-translateY').disabled = true;
        document.getElementById('slider-skewX').disabled = true;
        document.getElementById('slider-skewY').disabled = true;
        document.getElementById('slider-rotate').disabled = true;
        let translateSettings = document.querySelectorAll('.translate-setting');
        for (var i = 0; 1 < translateSettings.length; i++) {
            translateSettings[i].style.opacity = 0.2;
        };
    } else {
        image.classList.remove('spin');
        document.getElementById('slider-scaleXY').disabled = false;
        document.getElementById('slider-scaleX').disabled = false;
        document.getElementById('slider-scaleY').disabled = false;
        document.getElementById('slider-translateX').disabled = false;
        document.getElementById('slider-translateY').disabled = false;
        document.getElementById('slider-skewX').disabled = false;
        document.getElementById('slider-skewY').disabled = false;
        document.getElementById('slider-rotate').disabled = false;
        let translateSettings = document.querySelectorAll('.translate-setting');
        for (var i = 0; 1 < translateSettings.length; i++) {
            translateSettings[i].style.opacity = 1;
        };
    }
});


function loadImage() {
    let imageUrl = document.getElementById('image-url').value;
    image.src = imageUrl;
    controls.style.display = "flex";
}

function updateFilter() {
    let filter = this.dataset.filter;
    let filterValue = this.value;
    let suffix = this.dataset.suffix;
    document.documentElement.style.setProperty(`--${filter}`, filterValue + suffix);
    document.getElementById(`${filter}-value`).innerHTML = filterValue + suffix;
}

function updateColor() {
    let contentToColor = this.dataset.contenttocolor;
    let selectedColor = this.value;
    if (contentToColor == 'canvas') {
        canvas.style.backgroundColor = selectedColor;
    } else if (contentToColor == 'text') {
        document.documentElement.style.setProperty('--textColor', selectedColor);
    } else if (contentToColor == 'text-shadow') {
        document.documentElement.style.setProperty('--textShadowColor', selectedColor);
    };
}

function addText() {
    let customTextString = document.getElementById('custom-text').value;
    displayedText.innerHTML = customTextString;
}

function removeText() {
    displayedText.innerHTML = "";
}