# Issues

A collection of todo's, ideas, fixmes, etc.

Initially, all these were in Trello, then I moved them to ClickUp, then to Obsidian, then to an Obsidian Project in the repo, and now here.

I'll probably keep some obsidian stuff just in case, but for the most part, I want it pretty platform agnostic.

## custom api class for pokeapi

#needs-info

## custom game console icons for gamecordians

## custom gym icon

failed vs completed

auto set or manual set

## error messages should be in the store and pulled that way

#needs-info

in fact... there's probably a lot of stuff that can go in the store

## error not thrown when same email used through different means

#p1 #bug

register with dallen.baldwin@gmail.com after registering through google with that email

it doesn't throw an error and should because dallen.baldwin@gmail.com should already be a user

## filters should be saved in vuex

#needs-info

maybe even the database

## gym update route on api

#needs-info

bulbapedia moved over to a new cdn so all those cdn paths i was saving are gone.

it would be wise to build out a gym updating path on the api that users could use to pull updated gym data from the server or reconfigure the client to hold those urls

## hovering pokecordian

#needs-info

hovering on pokecordian meta data will send a get request to pokeapi for that metadata's info and place it into a menu that shows up as a tooltip

## ivysaur can't evolve

#bug #p2

## make finished better

#needs-info

failed vs completed

auto set or manual set

## move gyms to the client

#needs-info

there's no reason to save them in the database

## move pokeapi resources to the client

#needs-info

there's no reason to save them in the database

## move production

#milestone #p0 #in-progress

move it to a webserver, docker container, lambda + dynamo client, something

AWS has lambdas and 25G of Dynamo Free Forever (unless they revoke it)...

## encounters controllers.md

#needs-info

### newEncounter

### resetEncounter

## replace axios with fetch

#p1

lts/jod has access to fetch. replace axios with it

i was able to replace the facebook API (maybe, who even knows. i don't care much to continue using facebook login) code with fetch

but the PokeAPI will need some work as there more functions in that controller that interface with the associated axios client

## resouce update if error detected

#needs-info

bulbapedia changing their cdn was a little scary since i'm relying on it so much. it would be a good idea to set error handlers on images to prompt users to update resources

## sort by nickname doesn't work

#bug #p2

## spinner for games with new encounter style

#needs-info #p2

after the let's go games, potential encounters are rendered before the actual encounter. better for gameplay, worse for nuzlockes

build a randomizer into the app so users can spin for a Pokemon in the area rather than closing their eyes or something dumb

### things to consider

- level cap
- HM locks
