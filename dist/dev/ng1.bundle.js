webpackJsonp([2],{

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(511);
__webpack_require__(512);
__webpack_require__(514);
__webpack_require__(516);
__webpack_require__(517);
__webpack_require__(518);


/***/ }),

/***/ 511:
/***/ (function(module, exports) {

(function () {
    'use strict';
    // Declare app level module which depends on views, and components
    angular.module('myHybridApp', [
        'ngRoute',
        'primaryModule',
        'secondaryModule',
        'versionModule'
    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
            // $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({ redirectTo: '/view1' });
        }]);
})();


/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    angular.module('primaryModule', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view1', {
                template: __webpack_require__(513),
                controller: 'View1Ctrl'
            });
        }])
        .controller('View1Ctrl', [function () {
        }]);
})();


/***/ }),

/***/ 513:
/***/ (function(module, exports) {

module.exports = "<p>This is the partial for view 1.</p>\n";

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    angular.module('secondaryModule', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view2', {
                template: __webpack_require__(515),
                controller: 'View2Ctrl'
            });
        }])
        .controller('View2Ctrl', [function () {
        }]);
})();


/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "<p>This is the partial for view 2.</p>\n<p>\n  Showing of 'interpolate' filter:\n  {{ 'Current version is v%VERSION%.' | interpolate }}\n</p>\n";

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

(function () {
    'use strict';
    angular.module('versionModule', [
        'filterModule',
        'directiveModule'
    ]).value('version', '0.5');
})();


/***/ }),

/***/ 517:
/***/ (function(module, exports) {

(function () {
    'use strict';
    angular.module('directiveModule', ['versionModule'])
        .directive('appVersion', ['version', function (version) {
            return function (scope, elm, attrs) {
                elm.text(version);
            };
        }]);
})();


/***/ }),

/***/ 518:
/***/ (function(module, exports) {

(function () {
    'use strict';
    angular.module('filterModule', ['versionModule'])
        .filter('interpolate', ['version', function (version) {
            return function (text) {
                return String(text).replace(/\%VERSION\%/mg, version);
            };
        }]);
})();


/***/ })

},[510]);
//# sourceMappingURL=ng1.bundle.js.map