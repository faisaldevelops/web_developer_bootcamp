#YelpCamp

  * Add Landing Page(Homepage)
  * Add campgrounds Page that lists all campgrounds

  Each Campground has:
  * Name
  * Image



#Layout and Basic Styling
  * Create our header and footer partials
  * Add in Bootstrap(4.5)





#Creating New Campgrounds
  * Setup new campground POST route
  * Add in body-parser
  * Setup route to show form
  * Add basic unstyled form
  * Add data to our array
  * Use REST convention for naming


#Style the campgrounds Page
  * Add a better header/title
  * Make campgrounds display in a grid
    `jumbotron` `btn btn-primary btn-large`
    * New bootstrap 4.5 has removed thumbnail by figure see docs
    * style='display:flex; flex-wrap:wrap;' -> use it in case the grid doesn't appear as grid when checking the responsiveness of page
    * img-thumbnail will replace thumbnail


#Style the Navbar and Form
  * Add a navbar to all templates
  * Style the new campground form

#Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes!

#Show Page
* Review RESTful routes we've seen so far
* Add Description to our campground model
* Show db.collection.drop()
* Add a show route/template
* used mongo's new function findById()

#RESTFUL ROUTES
name    url         verb    desc.
=================================================
INDEX   /dogs       GET   display a list of all dog
NEW     /dogs/new   GET   displays form to make a new dogs
CREATE  /dogs       POST  Add new dog to DB
SHOW    /dogs/:id   GET   Shows info about one dog
