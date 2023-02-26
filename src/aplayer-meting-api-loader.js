export class APlayerMettingAPILoader {
    constructor(options) {
        APlayerMettingAPILoader.instances = {};

        this.options = options;
        this.init();
    }

    instances() {
        return APlayerMettingAPILoader.instances;
    }

    init() {
        const _this = this;
        this.getPlaylist(_this.options.playlists[0], function (data) {
            if (_this.options['audio'] === undefined) {
                _this.options['audio'] = [];
            }
            _this.options.audio = _this.options.audio.concat(data);

            if (_this.options['elementId'] === undefined) {
                _this.options['elementId'] = 'aplayer';
            }

            if (_this.options['api'] === undefined) {
                _this.options['api'] = 'https://api.i-meto.com/meting/api';
            }

            _this.options.element = document.getElementById(
                _this.options.elementId
            );

            _this.aplayer = new APlayer(_this.options);
            _this.lazyLoading();
        });
    }

    lazyLoading() {
        const _this = this;
        for (var i = 1; i < this.options.playlists.length; i++) {
            this.getPlaylist(this.options.playlists[i], function (data) {
                _this.aplayer.list.add(data);
                console.log('lazyLoaded: playlist +1');
            });
        }
    }

    getPlaylist(playlist, success) {
        const _this = this;
        axios
            .get(_this.options['api'], {
                params: playlist,
            })
            .then(function (response) {
                if (response.status == 200) {
                    success(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
