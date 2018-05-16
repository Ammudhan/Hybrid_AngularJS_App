(function () {

'use strict';

    angular.module('directiveModule', ['versionModule'])

    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);

})();
