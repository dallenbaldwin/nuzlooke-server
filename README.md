# nuzlooke-server

welcome to the nuzlooke server repo! This is the server code for my capstone project at UVU Spring 2021

## Local dev

-  set up [localstack](https://dev.to/goodidea/how-to-fake-aws-locally-with-localstack-27me)
   -  check the logs if s3 doesn't go where you're expecting
-  run the server: `npm run serve`
-  enjoy

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
