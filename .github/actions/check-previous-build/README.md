# Check Previous Build Action

This is a GitHub action that makes a request for the current businesses in the Carry Through COVID API, and only requests a rebuild if these differ from the previous build.

## Making changes

This is a bit of a weird case because the script requires some node modules, therefore, a bundled version of the application needs to be created for the GitHub action.

1. Make changes to app
2. Run `npm run build` to create a bundled version of the app
3. Commit and push changes to GitHub branch
4. Open PR

Once the PR is merged, the updated application will be run on the cron schedule.
