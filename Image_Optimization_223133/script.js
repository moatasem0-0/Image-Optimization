const imageInput = document.getElementById('image-input');
const fileSizeWarning = document.getElementById('file-size-warning');
const optimizationOptions = document.getElementById('optimization-options');
const previewContainer = document.getElementById('preview-container');
const chooseOptimizedButton = document.getElementById('choose-optimized');

let selectedQuality = null;

imageInput.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
        fileSizeWarning.style.display = 'block';
        optimizationOptions.style.display = 'block';
        await generateOptimizedPreviews(file);
    } else {
        fileSizeWarning.style.display = 'none';
        optimizationOptions.style.display = 'none';
        alert('Image size is acceptable. No optimization needed.');
    }
});

async function generateOptimizedPreviews(file) {
    const qualities = [0.75, 0.5, 0.25];
    previewContainer.innerHTML = '';

    for (const quality of qualities) {
        const optimizedImage = await optimizeImage(file, quality);
        const container = document.createElement('div');
        const img = document.createElement('img');
        const label = document.createElement('p');

        img.src = optimizedImage;
        img.alt = `Quality ${quality * 100}%`;
        img.dataset.quality = quality;
        img.addEventListener('click', () => selectImage(quality));

        label.textContent = `${quality * 100}% Quality`;

        container.appendChild(img);
        container.appendChild(label);
        previewContainer.appendChild(container);
    }
}

function optimizeImage(file, quality) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                resolve(canvas.toDataURL('image/jpeg', quality));
            };
        };
        reader.readAsDataURL(file);
    });
}

function selectImage(quality) {
    const images = previewContainer.querySelectorAll('img');
    images.forEach(img => img.style.border = '1px solid #ddd');
    const selectedImage = Array.from(images).find(img => img.dataset.quality == quality);
    selectedImage.style.border = '2px solid blue';
    chooseOptimizedButton.disabled = false;
    selectedQuality = quality;
}

chooseOptimizedButton.addEventListener('click', () => {
    if (selectedQuality !== null) {
        alert(`You have chosen the image with ${selectedQuality * 100}% quality.`);
    }
});
