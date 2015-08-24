import barController from './bar.controller.js';
import './bar.scss';

module.exports = angular.module('bar', [])
.controller('BarController', barController);
