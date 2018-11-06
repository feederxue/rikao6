require.config({
    baseUrl: './js',
    paths: {
        "file": "./libs/flexible",
        "swiper": "./libs/swiper4/swiper-4.3.5.min"
    }
});
require(['file'], function() {

})