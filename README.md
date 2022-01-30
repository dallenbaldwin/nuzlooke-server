# nuzlooke-server

welcome to the nuzlooke server repo! This is the server code for my capstone project at UVU Spring 2021

## Post Graduation Update

I was bumming off the goodwill and AWS billing of the professor in charge of my capstone.
Consequently, this project will have to be modified a bit in order to deal with the lack of
access to Elastic Beanstalk.

I have 25G of forever free DynamoDB (for now at least)... which means I might move most
of the server code to the client since it was mainly used to talk to Dynamo, something the
client can easily do, and the real difficult stuff was actually just bad design...

## Local dev

-  create a folder in the root called `.localstack`
-  run the server: `npm serve`
-  enjoy
-  run `npm run dc:down` when finished to turn off the containers

## SSL

-  use Certificate Manager and follow instructions to create
-  go to elastic beanstalk
-  go to configuration > load balancer
-  add listener
   -  port 443
   -  https
   -  select the ssl cert from Certificate Manager
   -  add
-  apply
-  remember to go to the _https_ version of your elastic beanstalk deployment...
