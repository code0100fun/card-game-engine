'use strict';



;define("card-game-engine/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("card-game-engine/app", ["exports", "ember-resolver", "ember-load-initializers", "card-game-engine/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("card-game-engine/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("card-game-engine/components/card", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="rounded overflow-hidden {{this.cardSizeClass}}" ...attributes>
    {{#if @image}}
      <img class="w-full h-full" src={{@image}} alt="Card Back">
    {{else if @placeholder}}
    {{else}}
      <img class="w-full h-full" src="https://marvelcdb.com/bundles/cards/01029a.png" alt="Card Back">
    {{/if}}
  </div>
  */
  {
    id: "SR2EEX4o",
    block: "{\"symbols\":[\"@placeholder\",\"@image\",\"&attrs\"],\"statements\":[[9,\"div\",false],[14,\"class\",[32,[\"rounded overflow-hidden \",[27,[24,0],[\"cardSizeClass\"]]]],null],[15,3],[10],[1,1,0,0,\"\\n\"],[5,[27,[26,0,\"BlockHead\"],[]],[[27,[24,2],[]]],null,[[\"default\",\"else\"],[{\"statements\":[[1,1,0,0,\"    \"],[9,\"img\",true],[12,\"class\",\"w-full h-full\",null],[13,\"src\",[27,[24,2],[]],null],[12,\"alt\",\"Card Back\",null],[10],[11],[1,1,0,0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[5,[27,[26,0,\"BlockHead\"],[]],[[27,[24,1],[]]],null,[[\"default\",\"else\"],[{\"statements\":[],\"parameters\":[]},{\"statements\":[[1,1,0,0,\"    \"],[9,\"img\",true],[12,\"class\",\"w-full h-full\",null],[12,\"src\",\"https://marvelcdb.com/bundles/cards/01029a.png\",null],[12,\"alt\",\"Card Back\",null],[10],[11],[1,1,0,0,\"\\n  \"]],\"parameters\":[]}]]]],\"parameters\":[]}]]],[11]],\"hasEval\":false,\"upvars\":[\"if\"]}",
    meta: {
      moduleName: "card-game-engine/components/card.hbs"
    }
  });

  class Card extends _component.default {
    get cardSizeClass() {
      return `card-size-${this.args.size}-${this.args.scale}`;
    }

  }

  _exports.default = Card;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Card);
});
;define("card-game-engine/components/drag-container", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class DragContainer extends _component.default {}

  _exports.default = DragContainer;
});
;define("card-game-engine/components/draggable", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div
    class="{{this.dragSnapClass}} z-10 {{if this.isDragging 'z-20 pointer-events-none'}}"
    style={{this.dragStyle}}
    {{did-insert this.didInsert}}
    {{on "mousedown" (fn this.onMouseDown)}}
    ...attributes>
    {{yield}}
  </div>
  */
  {
    id: "xF8cs+8d",
    block: "{\"symbols\":[\"&attrs\",\"&default\"],\"statements\":[[9,\"div\",false],[14,\"class\",[32,[[27,[24,0],[\"dragSnapClass\"]],\" z-10 \",[31,44,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"isDragging\"]],\"z-20 pointer-events-none\"],null]]],null],[14,\"style\",[27,[24,0],[\"dragStyle\"]],null],[15,1],[3,0,0,[27,[26,1,\"ModifierHead\"],[]],[[27,[24,0],[\"didInsert\"]]],null],[3,0,0,[27,[26,3,\"ModifierHead\"],[]],[\"mousedown\",[31,172,2,[27,[26,2,\"CallHead\"],[]],[[27,[24,0],[\"onMouseDown\"]]],null]],null],[10],[1,1,0,0,\"\\n  \"],[16,2,null],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"if\",\"did-insert\",\"fn\",\"on\"]}",
    meta: {
      moduleName: "card-game-engine/components/draggable.hbs"
    }
  });

  let Draggable = (_dec = Ember.inject.service('dragging'), (_class = (_temp = class Draggable extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "dragging", _descriptor, this);

      _initializerDefineProperty(this, "x", _descriptor2, this);

      _initializerDefineProperty(this, "y", _descriptor3, this);

      _initializerDefineProperty(this, "isDragging", _descriptor4, this);

      _defineProperty(this, "dragOffsetX", 0);

      _defineProperty(this, "dragOffsetY", 0);

      _defineProperty(this, "el", null);
    }

    get dragStyle() {
      return Ember.String.htmlSafe(`top: ${this.y}px; left: ${this.x}px;`);
    }

    get dragSnapClass() {
      return this.isAbsolutePosition ? 'absolute' : '';
    }

    get isAbsolutePosition() {
      var _this$args$dropZone;

      return !((_this$args$dropZone = this.args.dropZone) === null || _this$args$dropZone === void 0 ? void 0 : _this$args$dropZone.snap) || this.isDragging;
    }

    recalculatePosition() {
      if (!this.isAbsolutePosition) {
        this.x = this.el.offsetLeft;
        this.y = this.el.offsetTop;
        Ember.set(this.args.item, 'x', this.x);
        Ember.set(this.args.item, 'y', this.y);
      }
    }

    didInsert(el) {
      this.el = el;
      this.x = this.args.item.x || 0;
      this.y = this.args.item.y || 0;

      if (this.args.dropZone) {
        this.args.dropZone.addDraggable(this);
      }

      this.recalculatePosition();
    }

    willDestroy() {
      if (this.args.dropZone) {
        this.args.dropZone.removeDraggable(this);
      }
    }

    onMouseDown(event) {
      this.recalculatePosition();
      this.isDragging = true;
      this.dragOffsetX = event.clientX - this.x;
      this.dragOffsetY = event.clientY - this.y;
      document.addEventListener('mouseup', this.onMouseUp);
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('dragstart', this.stopDragStart);
      this.dragging.startDrag(this.args.item, this.args.dropZone);
    }

    onMouseUp(_event) {
      this.isDragging = false;
      this.dragOffsetX = 0;
      this.dragOffsetY = 0;
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('dragstart', this.stopDragStart);
      this.dragging.endDrag(this.args.item, this.args.dropZone);
    }

    onMouseMove(event) {
      this.x = event.clientX - this.dragOffsetX;
      this.y = event.clientY - this.dragOffsetY;
      Ember.set(this.args.item, 'x', this.x);
      Ember.set(this.args.item, 'y', this.y);
      this.dragging.dragMove(this.args.item, this.args.dropZone);
    }

    stopDragStart(event) {
      event.preventDefault();
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dragging", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "x", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "y", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "isDragging", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "didInsert", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "didInsert"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onMouseDown", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onMouseUp", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseUp"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onMouseMove", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseMove"), _class.prototype)), _class));
  _exports.default = Draggable;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Draggable);
});
;define("card-game-engine/components/drop-zone", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div
    class="relative {{if this.dragHover @dragHoverClass}}"
    {{on "mouseenter" (fn this.onMouseEnter)}}
    {{on "mouseleave" (fn this.onMouseLeave)}}
    {{did-insert this.didInsert}}
    ...attributes>
    {{yield (hash
      items=this.items
      itemCount=this.itemCount
      draggable=(component 'draggable' dropZone=this)
    )}}
  </div>
  */
  {
    id: "Zr5FA2xz",
    block: "{\"symbols\":[\"@dragHoverClass\",\"&attrs\",\"&default\"],\"statements\":[[9,\"div\",false],[14,\"class\",[32,[\"relative \",[31,25,2,[27,[26,0,\"CallHead\"],[]],[[27,[24,0],[\"dragHover\"]],[27,[24,1],[]]],null]]],null],[15,2],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[\"mouseenter\",[31,83,2,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[\"onMouseEnter\"]]],null]],null],[3,0,0,[27,[26,2,\"ModifierHead\"],[]],[\"mouseleave\",[31,128,2,[27,[26,1,\"CallHead\"],[]],[[27,[24,0],[\"onMouseLeave\"]]],null]],null],[3,0,0,[27,[26,3,\"ModifierHead\"],[]],[[27,[24,0],[\"didInsert\"]]],null],[10],[1,1,0,0,\"\\n  \"],[16,3,[[31,212,4,[27,[26,5,\"CallHead\"],[]],null,[[\"items\",\"itemCount\",\"draggable\"],[[27,[24,0],[\"items\"]],[27,[24,0],[\"itemCount\"]],[31,282,9,[27,[26,4,\"CallHead\"],[]],[\"draggable\"],[[\"dropZone\"],[[27,[24,0],[]]]]]]]]]],[1,1,0,0,\"\\n\"],[11]],\"hasEval\":false,\"upvars\":[\"if\",\"fn\",\"on\",\"did-insert\",\"component\",\"hash\"]}",
    meta: {
      moduleName: "card-game-engine/components/drop-zone.hbs"
    }
  });

  let DropZone = (_dec = Ember.inject.service('dragging'), (_class = (_temp = class DropZone extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "dragging", _descriptor, this);

      _initializerDefineProperty(this, "mouseOver", _descriptor2, this);

      _initializerDefineProperty(this, "items", _descriptor3, this);

      _defineProperty(this, "el", null);

      _defineProperty(this, "draggables", []);
    }

    get dragHover() {
      return this.mouseOver && this.dragging.currentDragItem !== null;
    }

    get snap() {
      return this.args.snap;
    }

    get itemCount() {
      var _this$items;

      let count = 0;
      (_this$items = this.items) === null || _this$items === void 0 ? void 0 : _this$items.forEach(item => {
        if (!item.placeholder && this.dragging.currentDragItem !== item) {
          count++;
        }
      });
      return count;
    }

    didInsert(el) {
      this.items = this.args.items;
      this.el = el;
    }

    get offset() {
      const el = this.el;
      return {
        x: el.offsetLeft,
        y: el.offsetTop
      };
    }

    addDraggable(draggable) {
      this.draggables.push(draggable);
    }

    removeDraggable(draggable) {
      this.draggables.removeObject(draggable);
    }

    recalculateDraggables() {
      this.draggables.forEach(d => d.recalculatePosition());
    }

    onMouseEnter() {
      this.mouseOver = true;
      this.dragging.enterDropZone(this);
    }

    onMouseLeave() {
      this.mouseOver = false;
      this.dragging.leaveDropZone(this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "dragging", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "mouseOver", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "items", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "didInsert", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "didInsert"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onMouseEnter", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseEnter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "onMouseLeave", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onMouseLeave"), _class.prototype)), _class));
  _exports.default = DropZone;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DropZone);
});
;define("card-game-engine/components/markdown-to-html", ["exports", "ember-cli-showdown/components/markdown-to-html"], function (_exports, _markdownToHtml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _markdownToHtml.default;
    }
  });
});
;define("card-game-engine/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("card-game-engine/config/environment.d", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = config;
  /**
   * Type declarations for
   *    import config from './config/environment'
   *
   * For now these need to be managed by the developer
   * since different ember addons can materialize new entries.
   */

  _exports.default = _default;
});
;define("card-game-engine/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("card-game-engine/helpers/app-version", ["exports", "card-game-engine/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("card-game-engine/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("card-game-engine/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("card-game-engine/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "card-game-engine/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("card-game-engine/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("card-game-engine/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("card-game-engine/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("card-game-engine/initializers/export-application-global", ["exports", "card-game-engine/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("card-game-engine/initializers/register-showdown-extensions", ["exports", "showdown", "showdown-highlight"], function (_exports, _showdown, _showdownHighlight) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    console.log('load highlight');

    _showdown.default.extension('highlight', _showdownHighlight.default);
  }

  var _default = {
    name: 'register-showdown-extensions',
    initialize
  };
  _exports.default = _default;
});
;define("card-game-engine/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("card-game-engine/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("card-game-engine/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("card-game-engine/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("card-game-engine/router", ["exports", "card-game-engine/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("card-game-engine/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("card-game-engine/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("card-game-engine/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("card-game-engine/services/dragging", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let Dragging = (_class = (_temp = class Dragging extends Ember.Service.extend({// anything which *must* be merged to prototype here
  }) {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "currentDropZone", _descriptor, this);

      _initializerDefineProperty(this, "currentDragItem", _descriptor2, this);
    }

    enterDropZone(dropZone) {
      this.currentDropZone = dropZone;
    }

    leaveDropZone(dropZone) {
      this.currentDropZone = null;

      if (this.currentDragItem) {
        this.removePlaceholders(dropZone);
      }

      Ember.run.next(null, () => {
        dropZone.recalculateDraggables();
      });
    }

    removePlaceholders(dropZone) {
      if (dropZone.items) {
        const items = dropZone.items.filter(item => !item.placeholder);
        Ember.set(dropZone, 'items', items);
      }
    }

    findPlaceholders(dropZone) {
      const placeholders = [];

      if (dropZone.items) {
        dropZone.items.forEach((item, i) => {
          if (item.placeholder) {
            placeholders.push(i);
          }
        });
      }

      return placeholders;
    }

    findClosestIndex(item, parentZone, targetZone) {
      var _targetZone$items;

      let d2 = Infinity;
      let index = 0;
      let allDistances = [];
      const {
        x,
        y
      } = this.translateToZone(item, parentZone, targetZone);
      (_targetZone$items = targetZone.items) === null || _targetZone$items === void 0 ? void 0 : _targetZone$items.forEach((otherItem, i) => {
        if (otherItem === item) {
          // ignore dragging card
          allDistances[i] = Infinity;
          return;
        }

        let dx = Math.pow(otherItem.x - x, 2);
        let dy = Math.pow(otherItem.y - y, 2);
        let d2Other = Math.sqrt(dx + dy);

        if (d2Other < d2) {
          d2 = d2Other;
          index = i;
        }

        allDistances[i] = d2Other;
      });
      let dLeft = Infinity;
      let dRight = Infinity;

      if (typeof allDistances[index - 1] === 'number') {
        dLeft = allDistances[index - 1];
      }

      if (typeof allDistances[index + 1] === 'number') {
        dRight = allDistances[index + 1];
      }

      if (dLeft === Infinity && dRight > 10) {
        return 0;
      } else if (dRight === Infinity && dLeft > 10) {
        return index + 1;
      } else {
        return index;
      }
    }

    startDrag(item, dropZone) {
      this.currentDragItem = item;

      if (dropZone && dropZone.snap && dropZone.items) {
        var _dropZone$items;

        const index = (_dropZone$items = dropZone.items) === null || _dropZone$items === void 0 ? void 0 : _dropZone$items.indexOf(item);

        if (index > -1) {
          this.insertPlaceholder(index, item, dropZone);
        }
      }
    }

    insertPlaceholder(index, item, dropZone) {
      const placeholder = {
        placeholder: true,
        ...item
      };
      dropZone.items = dropZone.items.filter(Boolean);

      if (index >= dropZone.items.length) {
        var _dropZone$items2;

        (_dropZone$items2 = dropZone.items) === null || _dropZone$items2 === void 0 ? void 0 : _dropZone$items2.push(placeholder);
      } else {
        var _dropZone$items3;

        (_dropZone$items3 = dropZone.items) === null || _dropZone$items3 === void 0 ? void 0 : _dropZone$items3.insertAt(index, placeholder);
      }

      Ember.run.next(null, () => {
        dropZone.recalculateDraggables();
      });
    }

    dragMove(item, dropZone) {
      if (this.currentDropZone && this.currentDropZone.snap) {
        const index = this.findClosestIndex(item, dropZone, this.currentDropZone);
        const placeholders = this.findPlaceholders(this.currentDropZone);

        if (placeholders.length > 0) {
          if (!placeholders.includes(index)) {
            const toRemove = placeholders[0];
            const adjIndex = toRemove < index ? index - 1 : index;
            this.removePlaceholders(this.currentDropZone);
            this.insertPlaceholder(adjIndex, item, this.currentDropZone);
          }
        } else {
          this.insertPlaceholder(index, item, this.currentDropZone);
        }
      }
    }

    translateToZone(point, from, to) {
      const originalOffset = from.offset;
      const newOffset = to.offset;
      const x = point.x + (originalOffset.x - newOffset.x);
      const y = point.y + (originalOffset.y - newOffset.y);
      return {
        x,
        y
      };
    }

    endDrag(item, dropZone) {
      if (!item || !dropZone) {
        return;
      }

      if (this.currentDropZone) {
        var _dropZone$items4, _this$currentDropZone;

        const removeIndex = (_dropZone$items4 = dropZone.items) === null || _dropZone$items4 === void 0 ? void 0 : _dropZone$items4.indexOf(item);

        if (removeIndex != -1) {
          var _dropZone$items5;

          (_dropZone$items5 = dropZone.items) === null || _dropZone$items5 === void 0 ? void 0 : _dropZone$items5.removeAt(removeIndex);
          dropZone.items = dropZone.items;
        }

        const {
          x,
          y
        } = this.translateToZone(item, dropZone, this.currentDropZone);
        Ember.set(item, 'x', x);
        Ember.set(item, 'y', y);
        const placeholders = this.findPlaceholders(this.currentDropZone);
        let insertIndex;

        if (placeholders.length > 0) {
          // if there is a drag placeholder then use that index
          insertIndex = placeholders[0];
          this.removePlaceholders(this.currentDropZone);
        } else {
          // or just compute it
          insertIndex = this.findClosestIndex(item, dropZone, this.currentDropZone);
        }

        (_this$currentDropZone = this.currentDropZone.items) === null || _this$currentDropZone === void 0 ? void 0 : _this$currentDropZone.insertAt(insertIndex, item);
        this.currentDropZone.items = this.currentDropZone.items;
      }

      this.currentDragItem = null;
      this.removePlaceholders(dropZone);
      Ember.run.next(null, () => {
        dropZone.recalculateDraggables();

        if (this.currentDropZone && this.currentDropZone !== dropZone) {
          this.currentDropZone.recalculateDraggables();
        }
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "currentDropZone", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "currentDragItem", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  })), _class); // DO NOT DELETE: this is how TypeScript knows how to look up your services.

  _exports.default = Dragging;
});
;define("card-game-engine/services/mouse", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Mouse extends Ember.Service.extend({// anything which *must* be merged to prototype here
  }) {} // normal class body definition here
  // DO NOT DELETE: this is how TypeScript knows how to look up your services.


  _exports.default = Mouse;
});
;define("card-game-engine/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("card-game-engine/tailwind/config", [], function () {
  "use strict";

  /*global module*/
  module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c'
        },
        red: {
          100: '#fff5f5',
          200: '#fed7d7',
          300: '#feb2b2',
          400: '#fc8181',
          500: '#f56565',
          600: '#e53e3e',
          700: '#c53030',
          800: '#9b2c2c',
          900: '#742a2a'
        },
        orange: {
          100: '#fffaf0',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e'
        },
        yellow: {
          100: '#fffff0',
          200: '#fefcbf',
          300: '#faf089',
          400: '#f6e05e',
          500: '#ecc94b',
          600: '#d69e2e',
          700: '#b7791f',
          800: '#975a16',
          900: '#744210'
        },
        green: {
          100: '#f0fff4',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#68d391',
          500: '#48bb78',
          600: '#38a169',
          700: '#2f855a',
          800: '#276749',
          900: '#22543d'
        },
        teal: {
          100: '#e6fffa',
          200: '#b2f5ea',
          300: '#81e6d9',
          400: '#4fd1c5',
          500: '#38b2ac',
          600: '#319795',
          700: '#2c7a7b',
          800: '#285e61',
          900: '#234e52'
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365'
        },
        indigo: {
          100: '#ebf4ff',
          200: '#c3dafe',
          300: '#a3bffa',
          400: '#7f9cf5',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#434190',
          900: '#3c366b'
        },
        purple: {
          100: '#faf5ff',
          200: '#e9d8fd',
          300: '#d6bcfa',
          400: '#b794f4',
          500: '#9f7aea',
          600: '#805ad5',
          700: '#6b46c1',
          800: '#553c9a',
          900: '#44337a'
        },
        pink: {
          100: '#fff5f7',
          200: '#fed7e2',
          300: '#fbb6ce',
          400: '#f687b3',
          500: '#ed64a6',
          600: '#d53f8c',
          700: '#b83280',
          800: '#97266d',
          900: '#702459'
        }
      },
      spacing: {
        px: '1px',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '16': '4rem',
        '20': '5rem',
        '21': '5.25rem',
        '24': '6rem',
        '25': '6.25rem',
        '28': '7rem',
        '30': '7.5rem',
        '32': '8rem',
        '35': '8.75rem',
        '40': '10rem',
        '42': '10.5rem',
        '45': '11.25rem',
        '48': '12rem',
        '49': '12.25rem',
        '50': '12.5rem',
        '56': '14rem',
        '60': '15rem',
        '63': '15.75rem',
        '64': '16rem',
        '70': '17.5rem'
      },
      backgroundColor: theme => theme('colors'),
      backgroundPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top'
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain'
      },
      borderColor: theme => ({ ...theme('colors'),
        default: theme('colors.gray.300', 'currentColor')
      }),
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        default: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px'
      },
      borderWidth: {
        default: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px'
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none'
      },
      container: {},
      cursor: {
        auto: 'auto',
        default: 'default',
        pointer: 'pointer',
        wait: 'wait',
        text: 'text',
        move: 'move',
        'not-allowed': 'not-allowed'
      },
      fill: {
        current: 'currentColor'
      },
      flex: {
        '1': '1 1 0%',
        auto: '1 1 auto',
        initial: '0 1 auto',
        none: 'none'
      },
      flexGrow: {
        '0': '0',
        default: '1'
      },
      flexShrink: {
        '0': '0',
        default: '1'
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem'
      },
      fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900'
      },
      height: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        full: '100%',
        screen: '100vh'
      }),
      inset: {
        '0': '0',
        auto: 'auto'
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      },
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem'
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal'
      },
      margin: (theme, {
        negative
      }) => ({
        auto: 'auto',
        ...theme('spacing'),
        ...negative(theme('spacing'))
      }),
      maxHeight: {
        full: '100%',
        screen: '100vh'
      },
      maxWidth: (theme, {
        breakpoints
      }) => ({
        none: 'none',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        full: '100%',
        ...breakpoints(theme('screens'))
      }),
      minHeight: {
        '0': '0',
        full: '100%',
        screen: '100vh'
      },
      minWidth: {
        '0': '0',
        full: '100%'
      },
      objectPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top'
      },
      opacity: {
        '0': '0',
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
        '100': '1'
      },
      order: {
        first: '-9999',
        last: '9999',
        none: '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12'
      },
      padding: theme => theme('spacing'),
      placeholderColor: theme => theme('colors'),
      stroke: {
        current: 'currentColor'
      },
      strokeWidth: {
        '0': '0',
        '1': '1',
        '2': '2'
      },
      textColor: theme => theme('colors'),
      width: theme => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screen: '100vw'
      }),
      zIndex: {
        auto: 'auto',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50'
      },
      gap: theme => theme('spacing'),
      gridTemplateColumns: {
        none: 'none',
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))'
      },
      gridColumn: {
        auto: 'auto',
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12'
      },
      gridColumnStart: {
        auto: 'auto',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13'
      },
      gridColumnEnd: {
        auto: 'auto',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13'
      },
      gridTemplateRows: {
        none: 'none',
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))'
      },
      gridRow: {
        auto: 'auto',
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6'
      },
      gridRowStart: {
        auto: 'auto',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7'
      },
      gridRowEnd: {
        auto: 'auto',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7'
      },
      transformOrigin: {
        center: 'center',
        top: 'top',
        'top-right': 'top right',
        right: 'right',
        'bottom-right': 'bottom right',
        bottom: 'bottom',
        'bottom-left': 'bottom left',
        left: 'left',
        'top-left': 'top left'
      },
      scale: {
        '0': '0',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5'
      },
      rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '0': '0',
        '45': '45deg',
        '90': '90deg',
        '180': '180deg'
      },
      translate: (theme, {
        negative
      }) => ({ ...theme('spacing'),
        ...negative(theme('spacing')),
        '-full': '-100%',
        '-1/2': '-50%',
        '1/2': '50%',
        full: '100%'
      }),
      skew: {
        '-12': '-12deg',
        '-6': '-6deg',
        '-3': '-3deg',
        '0': '0',
        '3': '3deg',
        '6': '6deg',
        '12': '12deg'
      },
      transitionProperty: {
        none: 'none',
        all: 'all',
        default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        colors: 'background-color, border-color, color, fill, stroke',
        opacity: 'opacity',
        shadow: 'box-shadow',
        transform: 'transform'
      },
      transitionTimingFunction: {
        linear: 'linear',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms'
      }
    },
    variants: {
      accessibility: ['responsive', 'focus'],
      alignContent: ['responsive'],
      alignItems: ['responsive'],
      alignSelf: ['responsive'],
      appearance: ['responsive'],
      backgroundAttachment: ['responsive'],
      backgroundColor: ['responsive', 'hover', 'focus'],
      backgroundPosition: ['responsive'],
      backgroundRepeat: ['responsive'],
      backgroundSize: ['responsive'],
      borderCollapse: ['responsive'],
      borderColor: ['responsive', 'hover', 'focus'],
      borderRadius: ['responsive'],
      borderStyle: ['responsive'],
      borderWidth: ['responsive'],
      boxShadow: ['responsive', 'hover', 'focus'],
      boxSizing: ['responsive'],
      cursor: ['responsive'],
      display: ['responsive'],
      fill: ['responsive'],
      flex: ['responsive'],
      flexDirection: ['responsive'],
      flexGrow: ['responsive'],
      flexShrink: ['responsive'],
      flexWrap: ['responsive'],
      float: ['responsive'],
      clear: ['responsive'],
      fontFamily: ['responsive'],
      fontSize: ['responsive'],
      fontSmoothing: ['responsive'],
      fontStyle: ['responsive'],
      fontWeight: ['responsive', 'hover', 'focus'],
      height: ['responsive'],
      inset: ['responsive'],
      justifyContent: ['responsive'],
      letterSpacing: ['responsive'],
      lineHeight: ['responsive'],
      listStylePosition: ['responsive'],
      listStyleType: ['responsive'],
      margin: ['responsive'],
      maxHeight: ['responsive'],
      maxWidth: ['responsive'],
      minHeight: ['responsive'],
      minWidth: ['responsive'],
      objectFit: ['responsive'],
      objectPosition: ['responsive'],
      opacity: ['responsive', 'hover', 'focus'],
      order: ['responsive'],
      outline: ['responsive', 'focus'],
      overflow: ['responsive'],
      padding: ['responsive'],
      placeholderColor: ['responsive', 'focus'],
      pointerEvents: ['responsive'],
      position: ['responsive'],
      resize: ['responsive'],
      stroke: ['responsive'],
      strokeWidth: ['responsive'],
      tableLayout: ['responsive'],
      textAlign: ['responsive'],
      textColor: ['responsive', 'hover', 'focus'],
      textDecoration: ['responsive', 'hover', 'focus'],
      textTransform: ['responsive'],
      userSelect: ['responsive'],
      verticalAlign: ['responsive'],
      visibility: ['responsive'],
      whitespace: ['responsive'],
      width: ['responsive'],
      wordBreak: ['responsive'],
      zIndex: ['responsive'],
      gap: ['responsive'],
      gridAutoFlow: ['responsive'],
      gridTemplateColumns: ['responsive'],
      gridColumn: ['responsive'],
      gridColumnStart: ['responsive'],
      gridColumnEnd: ['responsive'],
      gridTemplateRows: ['responsive'],
      gridRow: ['responsive'],
      gridRowStart: ['responsive'],
      gridRowEnd: ['responsive'],
      transform: ['responsive'],
      transformOrigin: ['responsive'],
      scale: ['responsive', 'hover', 'focus'],
      rotate: ['responsive', 'hover', 'focus'],
      translate: ['responsive', 'hover', 'focus'],
      skew: ['responsive', 'hover', 'focus'],
      transitionProperty: ['responsive'],
      transitionTimingFunction: ['responsive'],
      transitionDuration: ['responsive']
    },
    corePlugins: {},
    plugins: []
  };
});
;define("card-game-engine/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ZEu6PkAf",
    "block": "{\"symbols\":[],\"statements\":[[7,\"welcome-page\",[],[[],[]],null],[1,1,0,0,\"\\n\"],[1,1,0,0,\"\\n\"],[1,0,0,0,[31,0,0,[27,[26,1,\"CallHead\"],[]],[[31,0,0,[27,[26,0,\"CallHead\"],[]],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "card-game-engine/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("card-game-engine/templates/components/drag-container", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "cxgD8Cq9",
    "block": "{\"symbols\":[\"&default\"],\"statements\":[[16,1,null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "card-game-engine/templates/components/drag-container.hbs"
    }
  });

  _exports.default = _default;
});
;define("card-game-engine/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("card-game-engine/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("card-game-engine/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("card-game-engine/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('card-game-engine/config/environment', [], function() {
  var prefix = 'card-game-engine';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("card-game-engine/app")["default"].create({"name":"card-game-engine","version":"0.0.0+36273d83"});
          }
        
//# sourceMappingURL=card-game-engine.map
