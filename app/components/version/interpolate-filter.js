(function () {

'use strict';

    angular.module('filterModule', ['versionModule'])

    .filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }]);

})();
