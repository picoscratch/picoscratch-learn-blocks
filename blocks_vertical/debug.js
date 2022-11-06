goog.provide('Blockly.Blocks.debug');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['debug_read_console'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.READ_CONSOLE,
			"args0": [
        {
          "type": "input_value",
          "name": "REQ"
        },
      ],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "output_string", "scratch_extension"]
    });
  }
};
Blockly.Blocks["debug_python"] = {
	init() {
		this.jsonInit({
			"message0": Blockly.Msg.PYTHON,
			"args0": [
        {
          "type": "input_value",
          "name": "CODE"
        },
      ],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "shape_statement", "scratch_extension"]
		})
	}
};
Blockly.Blocks["debug_print"] = {
	init() {
		this.jsonInit({
			"message0": Blockly.Msg.PRINT,
			"args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        },
      ],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "shape_statement", "scratch_extension"]
		})
	}
};