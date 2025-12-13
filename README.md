# nuzlooke-server

welcome to the nuzlooke server repo! This is the server code for my capstone project at UVU Spring 2021

## Post Graduation Update

I was bumming off the goodwill and AWS billing of the professor in charge of my capstone.
Consequently, this project will have to be modified a bit in order to deal with the lack of free
access to Elastic Beanstalk.

I have 25G of forever free DynamoDB (for now at least)... which means I might move most
of the server code to the client since it was mainly used to talk to Dynamo, something the
client can easily do, and the real difficult stuff was actually just bad design...

## December 2025 Update

I've been going through this some more after migrating tasks out of ClickUp and into Obsidian.md and have a little bit of a game plan. I don't think I'll completely "fix" everything or pursue this too heavily for production. I think I'll instead get this to a demoable state using docker as the deployment vehicle.

- for "production", i'll use a single docker image that's based on ubuntu or something
- for "dev", i'll use docker compose

this will likely force me to merge the the client repo into this repo, or have some kind of shell script that ensures the client is available

## Local dev

### First time

```bash
cp .example.env .env
nvm use
npm install
npm run dev
```

### Subsequent Times

```bash
nvm use
npm run dev
```

## SSL

this is assuming you have the app running in elastic beanstalk in AWS

- use Certificate Manager and follow instructions to create
- go to elastic beanstalk
- go to configuration > load balancer
- add listener
   - port 443
   - https
   - select the ssl cert from Certificate Manager
   - add
- apply
- remember to go to the _https_ version of your elastic beanstalk deployment...
