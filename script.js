const imageData = [
    {
        url: "https://www.universetoday.com/article_images/milky_way.jpg",
        text: "The Milky Way"
    },
    {
        url: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:468,cw:1205,ch:1205,q:80,w:1205/hCXYB5YKXzdq2WEHYEe36d.jpg",
        text: "Andromeda Galaxy"
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/NGC_2537_I_FUV_g2006.jpeg",
        text: "Bear's Paw Galaxy (NGC 2537)"
    },
    {
        url: "https://astrobackyard.com/wp-content/uploads/2022/03/bodes-galaxy-astrophotography.jpg",
        text: "Bode's Galaxy (Messier 81 OR NGC 3031)"
    },
    {
        url: "https://www.sciencenews.org/wp-content/uploads/sites/2/2009/09/10982.jpg",
        text: "Barred Spiral Galaxy(NGC 6302)"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMVAFM60HnNHg0Xtkb1uqLr9qvlwe5yhgHQ&s",
        text: "Cigar Galaxy (Messier 82 OR NGC 3034"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWLOx_3BjOdbLL0ekow1MAmmAiGLH29AizQ&s",
        text: "Cocoon Galaxy (NGC 4490)"
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/NGC_6872.png",
        text: "Condor Galaxy (NGC 6872)"
    },
    {
        url: "https://insider.si.edu/wp-content/uploads/2011/03/n4151.jpg",
        text: "Eye of Sauron Galaxy (NGC 4151)"
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Seyfert_Galaxy_NGC_7742.jpg/330px-Seyfert_Galaxy_NGC_7742.jpg",
        text: "Fried Egg Galaxy (NGC 7742)"
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/d/da/Hoag%27s_object.jpg",
        text: "Hoag's Object"
    },
    {
        url: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Ngc2442_wide_field_cropped.jpg",
        text: "Meathook Galaxy (NGC 2442 and NGC 2443)"
    },
    {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5KUMPNgA_Xb3Kbl3zOqviWSrYUArWXNajw&s",
        text: "Pinwheel Galaxy (Messier 101)"
    }
];

function displayRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageData.length);
    const selectedData = imageData[randomIndex];
    const imageElement = document.getElementById("random-image");
    const textElement = document.getElementById("image-text");
    imageElement.src = selectedData.url;
    imageElement.alt = selectedData.text;
    textElement.textContent = selectedData.text;
}
document.addEventListener('DOMContentLoaded', (event) => {
    displayRandomImage();
});