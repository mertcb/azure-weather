# Deploy NodeJS Application to Azure with GitHub Actions Workshop

This is the GitHub repository of the workshop done by Microsoft Alpha LS Ambassador Mert Can Bilgiç. 

## What is Azure Weather

Azure Weather is simply a weather tracking application that deployed on Microsoft Azure with GitHub Actions.

You can find the example application [here](https://nodeweather2.azurewebsites.net)

## How to use this repository?

1) Create a App Service on Azure
2) Clone this repository
3) Download Publish Profile of your Azure App Service
4) Change "publishUrl" property to "|azure-app-name|.scm.azurewebsites.net:443" on the Publish Profile that you downloaded.
5) Add the Publish Profile to GitHub Secrets, which is at Settings->Secrets. Name the secret as "AZURE_WEBAPP_PUBLISH_PROFILE" .
6) Change "appName" property to your App Service Name in ./github/workflows/deploy.yml file.
7) Push the repository on GitHub!
