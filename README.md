# Getting Started

TLDR: need to clone with a unique project name and rename database

1. git clone git@github.com:jimibue/starter-f21.git <new_project_name>
2. cd <new_project_name>
3. bundle
4. rename database to something unique may use new_project_name in `database.yml`
   - search for `starter_f21` and replace `<new_project_name>`
5. rails db:create db:migrate db:seed
6. cd client
7. yarn

## to test

1. rails s -p 3001
2. cd client && yarn start

## HANDLE GITHUB need new repo

two ways do this

1. remove remote to github add new one (easiest, preferred)

   - `git remote rm origin`
   - create a new github repo
   - `git remote add origin sshlinktorepo`

2. remove git repo entirely and recreate a new a repo

- `rm -rf .git`
- `git init`
- `git add .`
- `git commit -m 'init'`
- `git remote add origin sshlink`


