const listImages = [
    "https://wallpapers.com/images/hd/cat-desktop-1920-x-1080-wallpaper-xg9vpzrmhc04x84w.jpg",
    "https://wallpapers.com/images/hd/cat-desktop-1920-x-1080-wallpaper-xg9vpzrmhc04x84w.jpg",
    "https://wallpapers.com/images/hd/cat-desktop-1920-x-1080-wallpaper-xg9vpzrmhc04x84w.jpg",
    "https://wallpapers.com/images/hd/cat-desktop-1920-x-1080-wallpaper-xg9vpzrmhc04x84w.jpg",
    "https://wallpapers.com/images/hd/cat-desktop-1920-x-1080-wallpaper-xg9vpzrmhc04x84w.jpg",
    "https://wallpapers.com/images/hd/cat-desktop-1920-x-1080-wallpaper-xg9vpzrmhc04x84w.jpg",
    "https://wallpapers.com/images/hd/cat-desktop-1920-x-1080-wallpaper-xg9vpzrmhc04x84w.jpg",
    "https://wallpapers.com/images/hd/cat-desktop-1920-x-1080-wallpaper-xg9vpzrmhc04x84w.jpg",
    "https://wallpapers.com/images/hd/cat-desktop-1920-x-1080-wallpaper-xg9vpzrmhc04x84w.jpg",
    "https://wallpapers.com/images/hd/cat-desktop-1920-x-1080-wallpaper-xg9vpzrmhc04x84w.jpg",
];


const generateContentImageHtml = (imageUrl) => {
    return `<article class="col-4"><img class="img-fluid border border-secondary rounded object-fit-cover w-100 h-100"
                src="${imageUrl}"
                alt=""></article>`;
}

const generateGallery = () => {
    const element = document.querySelector('#pills-tabContent div.row')
    listImages.map(url => {
        element.innerHTML += generateContentImageHtml(url)
    })
}

generateGallery()