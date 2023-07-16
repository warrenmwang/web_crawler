# Web Crawler & Internal Link Indexer

<i>last updated 07/16/2023</i>

Simple CLI javascript program to index the links of a website.

[Install `nvm` (node version manager)](https://github.com/nvm-sh/nvm#installing-and-updating)

To start using it I would do:
1. Clone repo
2. Use `nvm` to use the right node version: `nvm use`
 - If you don't have the node version, you'll need to also run `nvm install`
3. Get dependencies: `npm install`
4. Run: `npm run start URL saveHTMLFlag`

Example usage:
`npm run start http://localroger.com/prime-intellect/ true`
> Scrapes and saves the html contents of the website of [localroger.com/prime-intellect](http://localroger.com/prime-intellect)