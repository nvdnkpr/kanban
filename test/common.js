"use strict";

global.sinon = require("sinon");
global.chai = require("chai");
global.expect = require("chai").expect;

global.chai.use(require("sinon-chai"));

global.kanban = require("../");
