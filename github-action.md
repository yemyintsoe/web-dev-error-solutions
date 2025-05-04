# GitHub Actions
You can see predefined action template here

`Go to github > Actions >`


# Creating custom workflow
```
> laravel-app
  > .github
    > workflows
      - deploy.yml
```
Write required scripts in the `deploy.yml` file

# Add Actions secrets and variables
`Go to GitHub > project > setting > secrets and variables > actions`
Add secrets and variables under Repository secrets 
- Private Key that used to log in to the server
- VPS IP
- VPS User
