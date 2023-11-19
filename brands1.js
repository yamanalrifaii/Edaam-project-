document.addEventListener('DOMContentLoaded', function () {
    const businesses = [
        { name: 'Mamaesh', image: '../Web project/mamaesh.jpeg', description: '@mamaeshme', link: 'https://www.instagram.com/mamaeshme/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='},
        { name: 'Bait Maryam', image: '../Web project/bait_maryam.png', description: '@bait.maryam', link: 'https://www.instagram.com/bait.maryam/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Maizdxb', image: '../Web project/maiz.jpeg', description: '@maizdxb', link: 'https://www.instagram.com/maizdxb/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Yava Dubai', image: '../Web project/yava.jpeg', description: '@yavadubai', link: 'https://www.instagram.com/yavadubai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Bait Jafra', image: '../Web project/bait_jafra.jpeg', description: '@bait.jafra', link: 'https://www.instagram.com/bait.jafra/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },


        { name: 'Boca Dubai', image: '../Web project/boca.png', description: '@bocadubai', link: 'https://www.instagram.com/bocadubai/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'The palestinian bakery', image: '../Web project/bakrey.jpeg', description: '@thepalestinianbakery', link: 'https://www.instagram.com/thepalestinianbakery/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Firas Sweets', image: '../Web project/firas.jpeg', description: '@firassweets', link: 'https://www.instagram.com/firassweets/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Basboosa plus', image: '../Web project/basboosa.jpeg', description: '@basboosaplus', link: 'https://www.instagram.com/basboosaplus/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },

        { name: 'The big barbeque', image: '../Web project/bigbarbeque.jpeg', description: '@thebigbarbeque', link: 'https://www.instagram.com/thebigbarbeque/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Mishkah', image: '../Web project/mishkah.jpeg', description: '@mishkah.ae', link: 'https://www.instagram.com/mishkah.ae/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
        { name: 'Nablus Kanafeh', image: '../Web project/nablus.png', description: '@nablus.kanafeh', link: 'https://www.instagram.com/nablus.kanafeh/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' },
    ];

    const businessListContainer = document.getElementById('businessList');

    businesses.forEach(business => {
    const card = createBusinessCard(business);
    businessListContainer.appendChild(card);
    });
});

function createBusinessCard(business) {
    const card = document.createElement('div');
    card.classList.add('business-card');

      // Create an anchor element for the link
    const link = document.createElement('a');
    link.href = business.link;
    link.target = '_blank'; // Open link in a new tab/window

    const image = document.createElement('img');
    image.src = business.image;
    image.alt = business.name;

    link.appendChild(image);

    const name = document.createElement('h2');
    name.textContent = business.name;

    const description = document.createElement('p');
    description.textContent = business.description;

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(link);

    return card;
}

