/**
 * docsify-plugin-meting-api
 * lisuke <1657787678@qq.com>
 */

import { APlayerMettingAPILoader } from './aplayer-meting-api-loader';

const MetingAPIOptions = {
    elementId: 'aplayer',
    api: 'https://api.i-meto.com/meting/api',
    fixed: true,
    autoplay: true,
    lrcType: 3,
    order: 'random',
    loop: 'all',
    mutex: true,
    theme: '#b7daff',
    playlists: [],
};

function plugin(hook, vm) {
    let dom = Docsify.dom;

    if (!window.$docsify.MetingAPI) {
        return;
    }

    hook.mounted(function () {
        let aplayer = dom.create('div');
        aplayer.id = window.$docsify.MetingAPI.elementId;
        dom.appendTo(dom.body, aplayer);
    });

    hook.ready(function () {
        let apml = new APlayerMettingAPILoader(window.$docsify.MetingAPI);
    });
}

window.$docsify = window.$docsify || {};

window.$docsify.MetingAPI = Object.assign(
    MetingAPIOptions,
    window.$docsify.MetingAPI
);

window.$docsify.plugins = (window.$docsify.plugins || []).concat(plugin);
