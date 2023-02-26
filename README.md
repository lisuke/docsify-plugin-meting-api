# docsify-plugin-meting-api
a docsify plugin for meting-api.

[meting-api](https://github.com/topics/meting) plugin for [Docsify](https://docsify.js.org).

## Install

1. Insert APlayer into **head** tag (index.html)

```html
    <!-- require APlayer -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
    <script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
```

2. Then insert docsify-plugin-meting-api plugin into **body** tag

```html
    <!-- docsify-plugin-meting-api -->
    <!-- required axios -->
    <script type="text/javascript" src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script type="text/javascript" src="/docsify-plugin-meting-api.js"></script>
```

## Usage

You can set **MetingAPI** option, example:

```html
window.$docsify = {
    MetingAPI: {
        elementId: 'meting',
        api: 'https://api.i-meto.com/meting/api',
        fixed: true,
        autoplay: true,
        lrcType: 3,
        order: 'random',
        loop: 'all',
        mutex: true,
        theme: '#b7daff',
        playlists: [
            { server: 'netease', type: 'playlist', id: '7597958861' },
            { server: 'netease', type: 'playlist', id: '379025025' },
            { server: 'netease', type: 'playlist', id: '7383516738' },
        ],
    },
};
```

## Example

1. Run `npm i`
2. Run `npm run demo`
3. Go to [http://localhost:3000/](http://localhost:3000/)

## License

[MIT](LICENSE)

## TODO

- ...