# After theme installation

1. Copy `app` directory from the theme into the project root directory.

2. Change browserSync proxy to your project url in `webpack.mix.js`.

3. In console navigate to the theme directory and install all needed packages via `npm` command.

`npm install`

4. Run laravel mix command to compile all assets.

`npx mix`

## Watching SASS and JS file changes

You can run watch command while styling the theme to automatically compile you assets.

`npm mix watch`
