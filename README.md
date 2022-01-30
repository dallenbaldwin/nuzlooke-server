# nuzlooke-server

welcome to the nuzlooke server repo! This is the server code for my capstone project at UVU Spring 2021

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
