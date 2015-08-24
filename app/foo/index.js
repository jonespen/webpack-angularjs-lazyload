import fooController from './foo.controller.js';
import './foo.scss';

module.exports = angular.module('foo', [])
.controller('FooController', fooController);