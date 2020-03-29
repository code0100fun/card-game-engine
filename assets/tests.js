'use strict';

define("card-game-engine/tests/integration/components/card-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{card}}
      */
      {
        id: "ZA6OggmE",
        block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[27,[26,0,\"AppendSingleId\"],[]]]],\"hasEval\":false,\"upvars\":[\"card\"]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#card}}
              template block text
            {{/card}}
          
      */
      {
        id: "rN4/Qe2J",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n\"],[5,[27,[26,0,\"BlockHead\"],[]],null,null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        template block text\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"    \"]],\"hasEval\":false,\"upvars\":[\"card\"]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("card-game-engine/tests/integration/components/drag-container-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | drag-container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{drag-container}}
      */
      {
        id: "93HQOHIO",
        block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[27,[26,0,\"AppendSingleId\"],[]]]],\"hasEval\":false,\"upvars\":[\"drag-container\"]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#drag-container}}
              template block text
            {{/drag-container}}
          
      */
      {
        id: "WACBm1mF",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n\"],[5,[27,[26,0,\"BlockHead\"],[]],null,null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        template block text\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"    \"]],\"hasEval\":false,\"upvars\":[\"drag-container\"]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("card-game-engine/tests/integration/components/draggable-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | draggable', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{draggable}}
      */
      {
        id: "ZkqHKluj",
        block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[27,[26,0,\"AppendSingleId\"],[]]]],\"hasEval\":false,\"upvars\":[\"draggable\"]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#draggable}}
              template block text
            {{/draggable}}
          
      */
      {
        id: "FUqNfmFZ",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n\"],[5,[27,[26,0,\"BlockHead\"],[]],null,null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        template block text\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"    \"]],\"hasEval\":false,\"upvars\":[\"draggable\"]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("card-game-engine/tests/integration/components/drop-zone-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | drop-zone', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{drop-zone}}
      */
      {
        id: "O8wTsJkB",
        block: "{\"symbols\":[],\"statements\":[[1,0,0,0,[27,[26,0,\"AppendSingleId\"],[]]]],\"hasEval\":false,\"upvars\":[\"drop-zone\"]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            {{#drop-zone}}
              template block text
            {{/drop-zone}}
          
      */
      {
        id: "IcZOh5QU",
        block: "{\"symbols\":[],\"statements\":[[1,1,0,0,\"\\n\"],[5,[27,[26,0,\"BlockHead\"],[]],null,null,[[\"default\"],[{\"statements\":[[1,1,0,0,\"        template block text\\n\"]],\"parameters\":[]}]]],[1,1,0,0,\"    \"]],\"hasEval\":false,\"upvars\":[\"drop-zone\"]}",
        meta: {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("card-game-engine/tests/test-helper", ["card-game-engine/app", "card-game-engine/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("card-game-engine/tests/unit/services/dragging-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | dragging', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:dragging');
      assert.ok(service);
    });
  });
});
define("card-game-engine/tests/unit/services/mouse-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Service | mouse', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:mouse');
      assert.ok(service);
    });
  });
});
define('card-game-engine/config/environment', [], function() {
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

require('card-game-engine/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
