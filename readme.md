# Tenzi Backend Repository

This repository contains the backend code for the Tenzi application. Below is a breakdown of the key components and instructions for contributing to the repository.

## CI/CD Pipeline
The repository includes a CI/CD pipeline that runs on pull requests to the main and development branches. The pipeline performs the following steps:
- Checks out the repository
- Sets up Node.js
- Installs dependencies
- Runs Jest tests
- Checks code coverage
- Performs linting with ESLint
- Builds the application
- Deploys to production when changes are pushed to the main branch

## Deployment to Render
The deployment to Render is configured using the `render.yaml` file, which specifies the build and start commands for the [tenzi-backend](file:///home/mayhem/Documents/Tenzi_Finance/tenzi_backend/.github/workflows/ci-cd.yml#44%2C11-44%2C11) service.

## Contribution Instructions
To contribute to the repository, follow these steps:
0. Clone the develoment branch
1. Create a feature branch
2. Pass unit tests using [npm test](file:///home/mayhem/Documents/Tenzi_Finance/tenzi_backend/.github/workflows/ci-cd.yml#28%2C14-28%2C14)
3. Create a pull request for review
4. After approval, merge the pull request into the development branch
5. Perform integration testing
6. Merge changes into the master branch, triggering automatic deployment to Render

## Testing
To ensure everything works as expected, follow these testing steps:
1. Local Testing: Create a feature branch, run unit tests locally, and ensure changes pass the tests.
2. Pull Request Testing: Create a pull request, have it reviewed, and merge it into the development branch after approval.
3. Integration Testing: After merging into the development branch, perform integration testing to ensure the changes work well with the existing codebase.
4. Master Branch Deployment: Merge changes into the master branch to trigger automatic deployment to Render.

For any additional information, refer to the codebase and the existing documentation.