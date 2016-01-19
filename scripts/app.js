(function (exports, console, Vue, Router, vueEngine, descriptionComponent, linkListComponent, projectListComponent, cardComponent) {
    'use strict';

    // Blatant advertising and shameless self-promotion 
    console.log('This page\'s source code is available over at https://github.com/DeadlyBrad42/bradmason.net for your viewing pleasure.');

    // Load data from data.json
    //TODO: Remove this test data
    var appData = {
        "title": "About",
        "text": [
            "I'm Brad Mason, a software developer located in <a href=\"http://maps.google.com/maps?q=pittsburgh,+pa&amp;z=12\">Pittsburgh</a>. I work at <a href=\"http://www.acatar.com/\">Acatar</a>, a small company that believes it can change online education in a big way.",
            "I spend a lot of my spare time <a href=\"/#games\">making games</a> and <a href=\"/#projects\">building other projects</a>, both because I enjoy expanding my technical knowledge and because I enjoy the act of creating to add something new and interesting to the world."
        ],
        "links": [
            {
                "text": "Email",
                "url": "mailto:BradTMason@gmail.com",
                "type": "email"
            },
            {
                "text": "R&eacute;sum&eacute;",
                "url": "/assets/bin/resume.pdf",
                "type": "pdf"
            }
        ]
    };

    // Register routes
    // var router = new Router({
    //     '/': function() {
    //         app.currentData = appData;
    //         analytics('/');
    //     },
    //     '/about': function() {
    //         app.currentData = appData;
    //         analytics('/about');
    //     },
    //     '/projects': function() {
    //         app.currentData = appData;
    //         analytics('/projects');
    //     },
    //     '/games': function() {
    //         app.currentData = appData;
    //         analytics('/games');
    //     },
    // });
    // router.init();

    // Intialize Vue components
    Vue.component('vue-description', descriptionComponent);
    Vue.component('vue-linklist', linkListComponent);
    Vue.component('vue-projectlist', projectListComponent);
    Vue.component('vue-card', cardComponent);

    // Start Vue
    Vue.config.debug = true;
    exports.app = new Vue(vueEngine);

})(window, console, Vue, VueRouter, window.vueEngine, window.descriptionComponent, window.linkListComponent, window.projectListComponent, window.cardComponent);
