const darkmodeElements = [
    // big box cards
    { identifier: '.big-stats-box', darkmodeClass: 'boxes-dark-bg-color' },
    { identifier: '.nickname', darkmodeClass: 'blue-text' },
    { identifier: '.follower-number', darkmodeClass: 'white-text' },
    { identifier: '.followers-label', darkmodeClass: 'white-text' },
    
    // small box cards
    { identifier: '.sm-stats-box', darkmodeClass: 'boxes-dark-bg-color' },
    { identifier: '.sm-total-number', darkmodeClass: 'white-text' },
    { identifier: '.data-point-name', darkmodeClass: 'blue-text' },

    // body and titles
    { identifier: 'body', darkmodeClass: 'dark-body' },
    { identifier: '#main-title', darkmodeClass: 'white-text' },
    { identifier: '#subtitle', darkmodeClass: 'blue-text' },
    { identifier: '#darkmode-label', darkmodeClass: 'white-text' },
    { identifier: '#overview-title', darkmodeClass: 'white-text' },

    // misc.
    { identifier: '.attribution', darkmodeClass: 'white-text' },
    { identifier: '.toggle-border', darkmodeClass: 'dark-toggle' },
    { identifier: '#darkmode-toggle', darkmodeClass: 'white-text'}
];

$('i').click(function(){
    for(let i = 0; i < darkmodeElements.length; i++) {
        console.log(darkmodeElements[i].identifier + " => " + darkmodeElements[i].darkmodeClass);
        $(darkmodeElements[i].identifier).toggleClass(darkmodeElements[i].darkmodeClass);
    }
})

// $('input').click(() => {
    
//     for(let i = 0; i < darkmodeElements.length; i++) {
//         $(darkmodeElements[i].identifier).fadeToggle(10, function(){
//             $(darkmodeElements[i].identifier).toggleClass(darkmodeElements[i].darkmodeClass)
//         });
//     }
// })