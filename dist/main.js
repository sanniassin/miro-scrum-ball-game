/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    appId: '3074457352753106105',
    balls: {
        initialAmount: 2,
        radius: 50
    },
    bucket: {
        widthHeight: 200
    },
    card: {
        height: 60
    },
    rules: {
        memberBallLimit: 1
    }
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var BucketType;
(function (BucketType) {
    BucketType["source"] = "source";
    BucketType["target"] = "target";
    BucketType["draw"] = "draw";
})(BucketType || (BucketType = {}));
/* harmony default export */ __webpack_exports__["a"] = (BucketType);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketModel; });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _static_bucketType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _static_formType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);



class BucketModel {
    static get(type, widgets) {
        return widgets.find(w => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId] &&
            w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].bucket &&
            w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId].bucketType === type);
    }
    static getMeta(type, widgets) {
        const widget = BucketModel.get(type, widgets);
        return widget ? widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId] : null;
    }
    static isBallInBucket(type, ball, widgets) {
        const widget = widgets.find(w => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId] &&
            w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].bucket &&
            w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId].bucketType === type);
        if (!widget) {
            return false;
        }
        return (ball.x - ball.width / 2) >= (widget.x - widget.width / 2) && (ball.x + ball.width / 2) <= (widget.x + widget.width / 2) &&
            (ball.y - ball.height / 2) >= (widget.y - widget.height / 2) && (ball.y + ball.height / 2) <= (widget.y + widget.height / 2);
    }
    static async create(type, x, y, color, ownerId) {
        await miro.board.widgets.create({
            type: 'shape',
            style: {
                backgroundColor: color,
                textAlign: 'c',
                textAlignVertical: 'm',
                fontSize: 36,
                bold: 1
            },
            height: _config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].bucket.widthHeight,
            width: _config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].bucket.widthHeight,
            x,
            y,
            text: type === _static_bucketType__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].source ? '' : '0',
            metadata: {
                [_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId]: {
                    owner: ownerId,
                    bucketType: type,
                    formType: _static_formType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].bucket,
                    ballsCount: 0
                }
            },
            capabilities: {
                editable: false
            }
        });
    }
    static async updateBallsCount(type, widgets, ballsCount) {
        const bucket = BucketModel.get(type, widgets);
        bucket.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId].ballsCount = ballsCount;
        bucket.text = ballsCount.toString();
        await miro.board.widgets.update(bucket);
    }
    static checkBucketsOverFlow(widgets) {
        const buckets = widgets.filter(w => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId] && w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].bucket);
        for (let i = 0; i < buckets.length; i++) {
            for (let s = 0; s < buckets.length; s++) {
                if (i == s) {
                    continue;
                }
                const startXI = buckets[i].x - buckets[i].width / 2;
                const endXI = buckets[i].x + buckets[i].width / 2;
                const startXS = buckets[s].x - buckets[s].width / 2;
                const endXS = buckets[s].x + buckets[s].width / 2;
                const startYI = buckets[i].x - buckets[i].height / 2;
                const endYI = buckets[i].x + buckets[i].height / 2;
                const startYS = buckets[s].x - buckets[s].height / 2;
                const endYS = buckets[s].x + buckets[s].height / 2;
                if (((startXI >= startXS && startXI <= endXS) || (endXI >= startXS && endXI <= endXS)) &&
                    ((startYI >= startYS && startYI <= endYS) || (endYI >= startYS && endYI <= endYS))) {
                    return true;
                }
            }
        }
        return false;
    }
    static async resetBucketsPosition(x, y, widgets) {
        const sourceBucket = widgets.find(w => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId].bucketType === _static_bucketType__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].source);
        const targetBucket = widgets.find(w => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId].bucketType === _static_bucketType__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].target);
        const drawBucket = widgets.find(w => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].appId].bucketType === _static_bucketType__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].draw);
        Object.assign(sourceBucket, {
            x,
            y
        });
        await miro.board.widgets.update(sourceBucket);
        Object.assign(targetBucket, {
            x: x + _config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].bucket.widthHeight + 100,
            y
        });
        await miro.board.widgets.update(targetBucket);
        Object.assign(drawBucket, {
            x: x + (_config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].bucket.widthHeight + 100) * 2,
            y
        });
        await miro.board.widgets.update(drawBucket);
    }
    static async resetProportions(bucket) {
        Object.assign(bucket, {
            height: _config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].bucket.widthHeight,
            width: _config_index__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].bucket.widthHeight
        });
        await miro.board.widgets.update(bucket);
    }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BallModel; });
/* harmony import */ var _static_formType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _BucketModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);





class BallModel {
    static async get(ballId) {
        const widgets = await miro.board.widgets.get();
        return widgets.find(w => w.id === ballId) || null;
    }
    static getMeta(widget) {
        return widget ? widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId] : null;
    }
    static async create(x, y, owner, index, color, bucketType, ownerId) {
        await miro.board.widgets.create({
            type: 'shape',
            style: {
                backgroundColor: color,
                shapeType: 4
            },
            height: 50,
            width: 50,
            x,
            y,
            metadata: {
                [_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId]: {
                    owner,
                    participatedUserIds: [ownerId],
                    bucketType,
                    formType: _static_formType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ball
                }
            }
        });
    }
    static userCardWithBall(ball, widgets) {
        const usersCards = _UserModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getAllCreatedUsers(widgets);
        return usersCards.find(s => {
            return (ball.x - ball.width / 2) >= (s.bounds.x - s.bounds.width / 2) && (ball.x + ball.width / 2) <= (s.bounds.x + s.bounds.width / 2) &&
                (ball.y - ball.height / 2) >= (s.bounds.y - s.bounds.height / 2) && (ball.y + ball.height / 2) <= (s.bounds.y + s.bounds.height / 2);
        });
    }
    static getUserBallsAmount(userStickerWidget, widgets) {
        if (!userStickerWidget) {
            return 1;
        }
        const userBallsAmount = widgets.filter((w) => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId] &&
            w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ball &&
            (w.x - w.width / 2) >= (userStickerWidget.bounds.x - userStickerWidget.bounds.width / 2) && (w.x + w.width / 2) <= (userStickerWidget.bounds.x + userStickerWidget.bounds.width / 2) &&
            (w.y - w.height / 2) >= (userStickerWidget.bounds.y - userStickerWidget.bounds.height / 2) && (w.y + w.height / 2) <= (userStickerWidget.bounds.y + userStickerWidget.bounds.height / 2)).length;
        return userBallsAmount ? userBallsAmount : 1;
    }
    static getBucketBallsAmount(bucketType, widgets) {
        const bucketMeta = _BucketModel__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getMeta(bucketType, widgets);
        return bucketMeta.ballsCount;
    }
    static getBucketBalls(bucketType, widgets) {
        return widgets.filter(w => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId] &&
            w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ball &&
            w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].bucketType === bucketType);
    }
    static async updateMeta(ball, ballMeta) {
        Object.assign(ball, {
            metadata: {
                [_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId]: ballMeta
            }
        });
        await miro.board.widgets.update({
            id: ball.id,
            metadata: {
                [_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId]: ballMeta
            },
            text: (ballMeta.participatedUserIds.length - 1).toString()
        });
    }
    static async moveToBucket(bucketType, ball, widgets) {
        const bucket = _BucketModel__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].get(bucketType, widgets);
        const update = {
            id: ball.id,
            x: bucket.x,
            y: bucket.y,
            text: '',
            metadata: ball.metadata
        };
        Object.assign(ball, update);
        await miro.board.widgets.update(update);
    }
    static async destroy(ball) {
        await miro.board.widgets.deleteById([ball.id]);
    }
    static async resetProportions(ball) {
        Object.assign(ball, {
            bounds: {
                ...ball.bounds,
                height: _config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].balls.radius,
                width: _config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].balls.radius
            },
            height: _config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].balls.radius,
            width: _config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].balls.radius
        });
        await miro.board.widgets.update(ball);
    }
    static async checkBallProportions(ball) {
        if (ball.bounds.height !== _config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].balls.radius || ball.bounds.width !== _config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].balls.radius) {
            await BallModel.resetProportions(ball);
        }
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var FormType;
(function (FormType) {
    FormType[FormType["ball"] = 1] = "ball";
    FormType[FormType["bucket"] = 2] = "bucket";
    FormType[FormType["card"] = 3] = "card";
    FormType[FormType["userSticker"] = 4] = "userSticker";
})(FormType || (FormType = {}));
/* harmony default export */ __webpack_exports__["a"] = (FormType);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    ball: '#2d9bf0',
    sourceBucket: '#fac710',
    targetBucket: '#cee741',
    drawBucket: '#d62828',
    sticker: '#f16c7f'
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
/* harmony import */ var _static_formType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _static_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _static_bucketType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _BucketModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _BallModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _POModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var _CommonUserModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);










class UserModel extends _CommonUserModel__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"] {
    constructor(widget) {
        super();
        this.widget = widget;
    }
    static get(userId, widgets) {
        const widget = widgets.find(w => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId] &&
            w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner === userId &&
            w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].userSticker) || null;
        return widget ? new UserModel(widget) : null;
    }
    /*
      public static getMeta(widget: IWidget): Meta | null {
        return widget ? widget.metadata[config.appId] : null;
      }
    */
    static async create(userId, username, x, y) {
        const [result] = await miro.board.widgets.create({
            type: 'sticker',
            text: username,
            style: {
                stickerBackgroundColor: _static_colors__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].sticker
            },
            x,
            y,
            metadata: {
                [_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId]: {
                    owner: userId,
                    formType: _static_formType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].userSticker
                }
            },
            capabilities: {
                editable: false
            }
        });
        await miro.board.widgets.sendBackward(result.id);
        return new UserModel(result);
    }
    static getAllCreatedUsers(widgets) {
        return widgets.filter(w => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId] && w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].userSticker);
    }
    async customCheck(userId, widgets) {
        const userWidget = UserModel.get(userId, widgets);
        if (!userWidget) {
            await this.stopTrack();
            return false;
        }
        return true;
    }
    async checkCanvas() {
        const widgets = await miro.board.widgets.get();
        const userId = await miro.currentUser.getId();
        const userWidget = UserModel.get(userId, widgets);
        if (!userWidget) {
            miro.removeListener('CANVAS_CLICKED', this.listener);
            this.listener = null;
            return;
        }
        const areBucketsOverFlow = _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].checkBucketsOverFlow(widgets);
        if (areBucketsOverFlow) {
            await _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].resetBucketsPosition(0, 0, widgets);
        }
        for (const widget of widgets) {
            if (widget.metadata && widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId] && widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].bucket) {
                await this.checkBucketProportions(widget);
            }
            if (widget.metadata &&
                widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId] &&
                widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ball) {
                if (widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner === userId) {
                    await _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].checkBallProportions(widget);
                    await this.checkOwnBallPosition(userId, widget, widgets);
                    continue;
                }
                if (widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner !== userId && widget.lastModifiedUserId === userId) {
                    console.log('super user owner', widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner, widget.lastModifiedUserId);
                    await this.checkWrongMovedBallPosition(widget, widgets);
                }
            }
        }
    }
    async checkOwnBallPosition(userId, ball, widgets) {
        const ballMeta = _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getMeta(ball);
        const userCardWithBall = _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].userCardWithBall(ball, widgets);
        const allUserBallsCount = _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getUserBallsAmount(userCardWithBall, widgets);
        const drawBucketMeta = _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getMeta(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets);
        if (userCardWithBall &&
            this.widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner === userCardWithBall.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner &&
            allUserBallsCount > _config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].rules.memberBallLimit) {
            console.log('user reached limit in balls. Moving to draw bucket');
            _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
            _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets, drawBucketMeta.ballsCount + 1);
            return;
        }
        if (userCardWithBall && userId !== userCardWithBall.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner) {
            if (ball.lastModifiedUserId !== userId) {
                console.log('wrong user touched ball');
                _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
                _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets, drawBucketMeta.ballsCount + 1);
                return;
            }
            if (ballMeta.participatedUserIds.indexOf(userCardWithBall.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner) === -1) {
                ballMeta.participatedUserIds.push(userCardWithBall.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner);
            }
            ballMeta.owner = userCardWithBall.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner;
            ballMeta.bucketType = null;
            _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].updateMeta(ball, ballMeta);
            return;
        }
        const usersWidgets = UserModel.getAllCreatedUsers(widgets);
        const targetBucketMeta = _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getMeta(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].target, widgets);
        const isInTargetBucket = _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].isBallInBucket(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].target, ball, widgets);
        if (isInTargetBucket) {
            if (usersWidgets.length + 1 > ballMeta.participatedUserIds.length) {
                console.log('not all peers touched balls', usersWidgets.length, ballMeta.participatedUserIds);
                _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
                _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets, drawBucketMeta.ballsCount + 1);
                return;
            }
            _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
            _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].target, widgets, targetBucketMeta.ballsCount + 1);
            return;
        }
        if (!userCardWithBall && !isInTargetBucket) {
            console.log('outside of all valid cards');
            _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
            _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets, drawBucketMeta.ballsCount + 1);
            return;
        }
    }
    async checkWrongMovedBallPosition(ball, widgets) {
        const POId = _POModel__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].getOwnerId(widgets);
        if (ball.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner === POId) {
            console.log('i`ve moved owner ball');
            _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].moveToBucket(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].source, ball, widgets);
            return;
        }
        const drawBucketMeta = _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].getMeta(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets);
        console.log('wrong user 123');
        // todo check
        _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
        _BucketModel__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets, drawBucketMeta.ballsCount + 1);
    }
    async stopTrack() {
        await miro.board.widgets.deleteById(this.widget.id);
        miro.removeListener('CANVAS_CLICKED', this.listener);
        this.listener = null;
    }
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getLocale; });

// CONCATENATED MODULE: ./src/locales/en.ts
/* harmony default export */ var en = ({
    modal: {
        name: "Scrum balls game",
        startGamePO: 'Start game as PO',
        resetGamePO: 'Reset Scores',
        endGamePO: 'End Game',
        joinGameUser: 'Join Game',
        leaveGameUser: 'Leave Game',
        description: 'You can check out game rules <a href="#" onclick="window.open(`https://github.com/ega-forever/miro-scrum-ball-game/blob/master/rules-en.md`, `_blank`)">here</a>'
    },
    cards: {
        poCard: 'Game PO'
    }
});

// CONCATENATED MODULE: ./src/locales/ru.ts
/* harmony default export */ var ru = ({
    modal: {
        name: "Волшебные шары",
        startGamePO: 'Начать игру как ВП',
        resetGamePO: 'обнулить счетчики',
        endGamePO: 'Закончить игру',
        joinGameUser: 'Присоединиться к игре',
        leaveGameUser: 'Покинуть игру',
        description: 'Посмотреть правила игры можно <a href="#" onclick="window.open(`https://github.com/ega-forever/miro-scrum-ball-game/blob/master/rules-ru.md`, `_blank`)">тут</a>'
    },
    cards: {
        poCard: 'ВП'
    }
});

// CONCATENATED MODULE: ./src/locales/index.ts


const getLocale = (locale) => {
    if (locale.toLowerCase().includes('ru')) {
        return ru;
    }
    return en;
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var ActionType;
(function (ActionType) {
    ActionType[ActionType["startNewGamePO"] = 1] = "startNewGamePO";
    ActionType[ActionType["leaveGameUser"] = 2] = "leaveGameUser";
    ActionType[ActionType["joinGameUser"] = 3] = "joinGameUser";
    ActionType[ActionType["endGamePO"] = 4] = "endGamePO";
    ActionType[ActionType["resetGamePO"] = 5] = "resetGamePO";
})(ActionType || (ActionType = {}));
/* harmony default export */ __webpack_exports__["a"] = (ActionType);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return POModel; });
/* harmony import */ var _static_formType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _static_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _BucketModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _static_bucketType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _BallModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _UserModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _CommonUserModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _locales_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);











class POModel extends _CommonUserModel__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"] {
    constructor(widget) {
        super();
        this.widget = widget;
    }
    static async create(userId, username, x, y, widgets, locale) {
        const buckets = [
            {
                type: _static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].source,
                color: _static_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].sourceBucket,
                x,
                y,
                text: ''
            },
            {
                type: _static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].target,
                color: _static_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].targetBucket,
                x: x + _config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].bucket.widthHeight + 100,
                y,
                text: '0'
            },
            {
                type: _static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw,
                color: _static_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].drawBucket,
                x: x + (_config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].bucket.widthHeight + 100) * 2,
                y,
                height: _config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].bucket.widthHeight,
                width: _config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].bucket.widthHeight,
                text: '0'
            }
        ];
        for (const bucket of buckets) {
            let b = _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get(bucket.type, widgets);
            if (!b) {
                await _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].create(bucket.type, bucket.x, bucket.y, bucket.color, userId);
            }
        }
        const [widget] = await miro.board.widgets.create({
            type: 'card',
            title: `${Object(_locales_index__WEBPACK_IMPORTED_MODULE_8__[/* getLocale */ "a"])(locale).cards.poCard}: ${username}`,
            x: x - _config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].bucket.widthHeight - 100,
            y: y + _config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].card.height + _config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].card.height / 2,
            metadata: {
                [_config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].appId]: {
                    owner: userId,
                    formType: _static_formType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].card
                }
            }
        });
        for (let i = 0; i < _config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].balls.initialAmount; i++) {
            await _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].create(buckets[0].x, buckets[0].y, userId, i, _static_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ball, buckets[0].type, userId);
        }
        return new POModel(widget);
    }
    static getOwnerId(widgets) {
        const bucketMeta = _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getMeta(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].source, widgets);
        return bucketMeta ? bucketMeta.owner : null;
    }
    static get(widgets) {
        const bucketMeta = _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getMeta(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].source, widgets);
        if (!bucketMeta) {
            return null;
        }
        const widget = widgets.find(w => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].appId] &&
            w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].appId].owner === bucketMeta.owner &&
            w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].card) || null;
        return widget ? new POModel(widget) : null;
    }
    async customCheck(userId, widgets) {
        if (POModel.getOwnerId(widgets) === null) {
            await this.stopTrack();
            return false;
        }
        await this.checkIfSourceBucketHasEnoughBalls(userId, widgets);
        return true;
    }
    async checkIfSourceBucketHasEnoughBalls(userId, widgets) {
        const sourceBucket = _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].source, widgets);
        const sourceBucketMeta = _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getMeta(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].source, widgets);
        const ballsInSourceBucket = _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getBucketBalls(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].source, widgets);
        for (let i = 0; i <= (_config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].balls.initialAmount - ballsInSourceBucket.length); i++) {
            await _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].create(sourceBucket.x, sourceBucket.y, sourceBucketMeta.owner, 1, _static_colors__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ball, _static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].source, userId);
        }
    }
    async checkOwnBallPosition(userId, ball, widgets) {
        const ballMeta = _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getMeta(ball);
        const userCardWithBall = _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].userCardWithBall(ball, widgets);
        const drawBucketMeta = _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getMeta(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets);
        const targetBucketMeta = _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getMeta(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].target, widgets);
        if (userCardWithBall && ball.lastModifiedUserId !== userId) {
            _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
            _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets, drawBucketMeta.ballsCount + 1);
            return;
        }
        const usersWidgets = _UserModel__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].getAllCreatedUsers(widgets); // todo replace with enum
        const isInTargetBucket = _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].isBallInBucket(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].target, ball, widgets);
        if (isInTargetBucket && usersWidgets.length + 1 > ballMeta.participatedUserIds.length) {
            console.log('not all peers touched balls');
            _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
            _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets, drawBucketMeta.ballsCount + 1);
            return;
        }
        if (isInTargetBucket && usersWidgets.length === ballMeta.participatedUserIds.length) {
            console.log('move ball to target');
            _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
            _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].target, widgets, targetBucketMeta.ballsCount + 1);
            return;
        }
        const isInSourceBucket = _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].isBallInBucket(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].source, ball, widgets);
        /*    const isInDrawBucket = BucketModel.isBallInBucket(BucketType.draw, ball, widgets);
    
            if (!isInDrawBucket && ballMeta.bucketType === bucketType.draw) {
              ballMeta.bucketType = BucketType.draw;
              BallModel.destroy(ball);
              BucketModel.updateBallsCount(BucketType.draw, widgets, drawBucketMeta.ballsCount + 1)
              return;
            }*/
        if (userCardWithBall) {
            const allUserBallsCount = _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].getUserBallsAmount(userCardWithBall, widgets);
            if (userCardWithBall &&
                allUserBallsCount > _config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].rules.memberBallLimit) {
                console.log('user reached limit in balls. Moving to draw bucket');
                _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
                _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets, drawBucketMeta.ballsCount + 1);
                return;
            }
            ballMeta.participatedUserIds.push(userCardWithBall.metadata[_config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].appId].owner);
            ballMeta.owner = userCardWithBall.metadata[_config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].appId].owner;
            ballMeta.bucketType = null;
            _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].updateMeta(ball, ballMeta);
            return;
        }
        if (!userCardWithBall && !isInSourceBucket && !isInTargetBucket) {
            console.log('outside of all cards');
            _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
            _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets, drawBucketMeta.ballsCount + 1);
            return;
        }
    }
    async checkWrongMovedBallPosition(ball, widgets) {
        const userCardWithBall = _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].userCardWithBall(ball, widgets);
        const drawBucketMeta = _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getMeta(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets);
        if (!userCardWithBall || userCardWithBall.metadata[_config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].appId].owner !== ball.metadata[_config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].appId].owner) {
            console.log('out of user card!!');
            _BallModel__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].destroy(ball);
            _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets, drawBucketMeta.ballsCount + 1);
        }
    }
    async stopTrack() {
        const widgets = await miro.board.widgets.get();
        const filtered = widgets.filter(w => w.metadata[_config_index__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].appId]);
        for (const widget of filtered) {
            await miro.board.widgets.deleteById([widget.id]);
        }
        miro.removeListener('CANVAS_CLICKED', this.listener);
        this.listener = null;
    }
    async resetScores() {
        const widgets = await miro.board.widgets.get();
        _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].draw, widgets, 0);
        _BucketModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].updateBallsCount(_static_bucketType__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].target, widgets, 0);
    }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonUserModel; });
/* harmony import */ var _BucketModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _static_formType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _BallModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);




class CommonUserModel {
    addCanvasListener() {
        if (this.listener) {
            return;
        }
        this.listener = this.checkCanvas.bind(this);
        miro.addListener('CANVAS_CLICKED', this.listener);
    }
    hasCanvasListener() {
        return !!this.listener;
    }
    async checkCanvas() {
        const widgets = await miro.board.widgets.get();
        const userId = await miro.currentUser.getId();
        if (!(await this.customCheck(userId, widgets))) {
            return;
        }
        const areBucketsOverFlow = _BucketModel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].checkBucketsOverFlow(widgets);
        if (areBucketsOverFlow) {
            await _BucketModel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].resetBucketsPosition(0, 0, widgets);
        }
        for (const widget of widgets) {
            if (widget.metadata && widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId] && widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].bucket) {
                await this.checkBucketProportions(widget);
            }
            if (widget.metadata &&
                widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId] &&
                widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].formType === _static_formType__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].ball) {
                if (widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner === userId) {
                    await _BallModel__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].checkBallProportions(widget);
                    await this.checkOwnBallPosition(userId, widget, widgets);
                }
                if (widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].appId].owner !== userId && widget.lastModifiedUserId === userId) {
                    await this.checkWrongMovedBallPosition(widget, widgets);
                }
            }
        }
    }
    async customCheck(userId, widgets) {
        return true;
    }
    async checkOwnBallPosition(userId, ball, widgets) {
    }
    async checkWrongMovedBallPosition(ball, widgets) { }
    async checkBucketProportions(bucket) {
        if (bucket.height !== _config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].bucket.widthHeight || bucket.width !== _config_index__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].bucket.widthHeight) {
            await _BucketModel__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].resetProportions(bucket);
        }
    }
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _models_POModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);




const init = async () => {
    const startIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>BUSINESS</title><g id="scrum_ball_game" data-name="02.TARGET"><path d="M25.06,9.76a11,11,0,1,1-2.82-2.82l1.43-1.43a13,13,0,1,0,2.82,2.82Z"/><path d="M20.06,9.12A7.9,7.9,0,0,0,16,8a8,8,0,1,0,8,8,7.9,7.9,0,0,0-1.12-4.06l-1.47,1.47A5.9,5.9,0,0,1,22,16a6,6,0,1,1-6-6,5.9,5.9,0,0,1,2.59.59Z"/><circle cx="16" cy="16" r="2"/><path d="M28.78,3.22V.78L26.59,3l-.44,1.77a1,1,0,0,0-.58.27l-7.77,7.77a1,1,0,1,0,1.41,1.41L27,6.43a1,1,0,0,0,.27-.58L29,5.41l2.2-2.2Z"/></g></svg>`;
    let currentUserId;
    let widgets;
    let PO;
    let user;
    try {
        currentUserId = await miro.currentUser.getId();
        widgets = await miro.board.widgets.get();
        PO = _models_POModel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].get(widgets);
        user = _models_UserModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].get(currentUserId, widgets);
    }
    catch (e) {
    }
    if (PO && PO.widget.metadata[_config_index__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].appId].owner === currentUserId && !PO.hasCanvasListener()) {
        PO.addCanvasListener();
    }
    if (user && !user.hasCanvasListener()) {
        user.addCanvasListener();
    }
    const onClick = async () => {
        const isAuthorized = await miro.isAuthorized();
        const boardInfo = await miro.board.info.get();
        if (!isAuthorized) {
            await miro.authorize({
                response_type: 'token',
                // redirect_uri: 'https://ega-forever.github.io/miro-scrum-ball-game/auth-success.html', todo
                redirect_uri: 'https://d26ba36540f4.ngrok.io/auth-success.html',
                state: JSON.stringify({ board: `https://miro.com/app/board/${boardInfo.id}/` })
            });
            return;
        }
        const result = await miro.board.ui.openModal('modal.html', {
            width: 450,
            height: 150
        });
        if (result) {
            await processSelectedAction(result.option, result.locale);
        }
        return;
    };
    await miro.initialize({
        extensionPoints: {
            bottomBar: async () => {
                return {
                    title: 'Scrum balls',
                    svgIcon: startIcon,
                    onClick: onClick
                };
            }
        }
    });
    const processSelectedAction = async (option, locale) => {
        // @ts-ignore
        const onlineUsers = await miro.board.getOnlineUsers();
        currentUserId = await miro.currentUser.getId();
        const currentUsername = onlineUsers.find(u => u.id === currentUserId).name;
        widgets = await miro.board.widgets.get();
        if (option === _static_actionType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].startNewGamePO) {
            PO = await _models_POModel__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].create(currentUserId, currentUsername, 0 - _config_index__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].bucket.widthHeight - 100, 0, widgets, locale);
            PO.addCanvasListener();
        }
        if (option === _static_actionType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].leaveGameUser) {
            await user.stopTrack();
        }
        if (option === _static_actionType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].joinGameUser) {
            user = await _models_UserModel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].create(currentUserId, currentUsername, -_config_index__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].bucket.widthHeight * 2 - 100, 0);
            user.addCanvasListener();
        }
        if (option === _static_actionType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].endGamePO) {
            await PO.stopTrack();
        }
        if (option === _static_actionType__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].resetGamePO) {
            await PO.resetScores();
        }
    };
};
miro.onReady(init);


/***/ })
/******/ ]);