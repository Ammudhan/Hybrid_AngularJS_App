webpackJsonp([2],{

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(160);
__webpack_require__(162);
__webpack_require__(163);
__webpack_require__(164);


/***/ }),

/***/ 157:
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

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    angular.module('primaryModule', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view1', {
                template: __webpack_require__(159),
                controller: 'View1Ctrl'
            });
        }])
        .controller('View1Ctrl', [function () {
        }]);
})();


/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<p>This is the partial for view 1.</p>\n";

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    angular.module('secondaryModule', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/view2', {
                template: __webpack_require__(161),
                controller: 'View2Ctrl'
            });
        }])
        .controller('View2Ctrl', [function () {
        }]);
})();


/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<p>This is the partial for view 2.</p>\n<p>\n  Showing of 'interpolate' filter:\n  {{ 'Current version is v%VERSION%.' | interpolate }}\n</p>\n";

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

(function () {
    'use strict';
    angular.module('versionModule', [
        'filterModule',
        'directiveModule'
    ]).value('version', '0.8');
})();


/***/ }),

/***/ 163:
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

/***/ 164:
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

},[156]);
//# sourceMappingURL=ng1.bundle.js.map