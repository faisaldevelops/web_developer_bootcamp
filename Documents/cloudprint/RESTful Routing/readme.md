#RESTful Routing

##Introduction
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD

BLOG

CREATE
READ    /allBlogs
UPDATE  /updateBlog/:id
DESTROY /destroyBlog/:id


* 7 RESTful Routes

/photos/ 	         GET 	            index      List all photos
/photos/new        GET 	            new        Show new photo form
/photos 	         POST 	            create     Create a new photo and then redirect somewhere
/photos/:id 	     GET 	            show       Show info about one specific photo
/photos/:id/edit 	GET 	            edit       Show edit form for one dog
/photos/:id 	     PATCH/PUT 	  update     Update a particular dog, then redirect somewhere
/photos/:id 	     DELETE 	       destroy    Delete a particular dog, then redirect somewhere


#Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template
* Add Simple Nav Bar

# Basic Layout
* Add Header and Footer Partials
* Include Semantic UI
* Add Simple Nav

#Putting the C in CRUD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

#SHOWtime
* Add Show route
* Add Show template
* Add links to show page
* Style show template

#Edit/Update
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override

Start from that PUT confusion
