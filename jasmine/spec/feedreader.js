/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
   /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
   describe('RSS Feeds', function() {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it('feeds defined', function() {
         expect(allFeeds).toBeDefined();
         expect(allFeeds.length).not.toBe(0);
      });


      

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
      it('feed URLs are defined and are not empty', function() {

         for (var i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].url).toBeDefined(); // Defined Url
            expect(allFeeds[i].url).not.toBe(''); // Not to be Empty
         }
      });


   /* TODO: Write a test that loops through each feed
    * in the allFeeds object and ensures it has a name defined
    * and that the name is not empty.
    */
      it('feed Names are defined and are not empty', function() {
            
         for (var i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].name).toBeDefined(); // Defined Name
            expect(allFeeds[i].name).not.toBe(''); // Not to be Empty
         }
      });
   });


   
   /* TODO: Write a new test suite named "The menu" */
   /* TODO: Write a test that ensures the menu element is
    * hidden by default. You'll have to analyze the HTML and
    * the CSS to determine how we're performing the
    * hiding/showing of the menu element.
    */

   describe('The menu', function() {

      it('side menus is hidden initially', function() {                  //.menu-hidden class used from app.js
         expect($('body').hasClass('menu-hidden')).toBeTruthy();  // to hide the side menu by default
      });

    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */

      it('menu visibility changes when burger icon is clicked', function() {
         $('.menu-icon-link').trigger('click'); 						   //.menu-icon-link class used from app.js
         expect($('body').hasClass('menu-hidden')).toBeFalsy();    // to enable menu toggle funtion using the burger icon
         $('.menu-icon-link').trigger('click'); 						 //Click again to change state
         expect($('body').hasClass('menu-hidden')).toBeTruthy(); // Hides it when clicked again
      });
   });

   


   /* TODO: Write a new test suite named "Initial Entries"
   /* TODO: Write a test that ensures when the loadFeed
    * function is called and completes its work, there is at least
    * a single .entry element within the .feed container.
    * Remember, loadFeed() is asynchronous so this test will require
    * the use of Jasmine's beforeEach and asynchronous done() function.
    */

   describe('Initial Entries', function() {

      beforeEach(function(done) {
         loadFeed(1, done);
      });

      it('there is at least a single .entry within the .feed container', function() {
         expect($('.feed .entry').length).toBeGreaterThan(0);
      });
   });
   



   /* TODO: Write a new test suite named "New Feed Selection"
   /* TODO: Write a test that ensures when a new feed is loaded
    * by the loadFeed function that the content actually changes.
    * Remember, loadFeed() is asynchronous.
    */

   describe('New Feed Selection', function() {

      var InitialFeedLoad;
      var FeedReload;

      beforeEach(function(done) {
         loadFeed(0, function() {                           // loading the initial feed
            InitialFeedLoad = $('.feed').text();  
            done();
         });
      });

      it('content changes when new feed is loaded', function(done) {
         loadFeed(1, function() {                         // reloading to get the new feed and making 
            FeedReload = $('.header-title').text();       // sure the title of the feed is different.
            expect(InitialFeedLoad).not.toBe(FeedReload); // Running comparison test to check they are different
            done();
         });
      });
   });
   
}());


/* Credits:
 * https://jasmine.github.io/2.0/introduction.html
 */
