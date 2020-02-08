const image = document.getElementById('image');
const canvas = document.getElementById('canvas');
const sliders = document.querySelectorAll('.sliders');
const colorPickers = document.querySelectorAll('.color-pickers');
const controls = document.getElementById('controls');

sliders.forEach(input => input.addEventListener('input', updateFilter));
colorPickers.forEach(input => input.addEventListener('input', updateColor));
loadImage();

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
    let contentToColor = this.dataset.contentToColor;
    let selectedColor = this.value;
    if (contentToColor = 'canvas') {
        canvas.style.backgroundColor = selectedColor;
    };
}