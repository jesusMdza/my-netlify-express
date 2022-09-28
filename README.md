# my-netlify-express
Express app hosted on netlify with working HTML and CSS

/dist
- Production files

/public
- Testing files


Commands:
`npm run dev`: Run app locally

Branches
(main) production branch
(staging) staging branch

Pushing changes to either branch will automatically update within netlify

Local css and js testing:
When testing css or js files, update the src to something like this. Production ignores the "/.netlify/functions/express" route but the local environment does not.
<link rel="stylesheet" href="/.netlify/functions/express/style.css">


Demo Link: https://moonlit-truffle-451fe5.netlify.app/
