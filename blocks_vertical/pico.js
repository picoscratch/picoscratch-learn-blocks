goog.provide('Blockly.Blocks.pico');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks["pico_ledoff"] = {
	init() {
		this.jsonInit({
			"message0": Blockly.Msg.TURN_LED_OFF,
			"args0": [
				{
					"type": "field_image",
					"src": Blockly.mainWorkspace.options.pathToMedia + "extensions/led.svg",
					"width": 40,
					"height": 40,
				},
				{
					"type": "field_vertical_separator"
				}
      ],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "shape_statement", "scratch_extension"]
		})
	}
};
Blockly.Blocks["pico_ledstatus"] = {
	init() {
		this.jsonInit({
			"message0": Blockly.Msg.LED_STATUS,
			"args0": [
				{
					"type": "field_image",
					"src": Blockly.mainWorkspace.options.pathToMedia + "extensions/led.svg",
					"width": 40,
					"height": 40,
				},
				{
					"type": "field_vertical_separator"
				}
      ],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "output_boolean", "scratch_extension"]
		})
	}
};
Blockly.Blocks["pico_ledon"] = {
	init() {
		this.jsonInit({
			"message0": Blockly.Msg.TURN_LED_ON,
			"args0": [
				{
					"type": "field_image",
					"src": Blockly.mainWorkspace.options.pathToMedia + "extensions/led.svg",
					"width": 40,
					"height": 40,
				},
				{
					"type": "field_vertical_separator"
				}
      ],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "shape_statement", "scratch_extension"]
		})
	}
};
Blockly.Blocks["pico_setledbrightness"] = {
	init() {
		this.jsonInit({
			"message0": Blockly.Msg.SET_LED_BRIGHTNESS,
			"args0": [
				{
					"type": "field_image",
					"src": Blockly.mainWorkspace.options.pathToMedia + "extensions/led.svg",
					"width": 40,
					"height": 40,
				},
				{
					"type": "field_vertical_separator"
				},
        {
          "type": "input_value",
          "name": "BRIGHTNESS"
        },
      ],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "shape_statement", "scratch_extension"]
		})
	}
};
Blockly.Blocks["pico_ledbrightness"] = {
	init() {
		this.jsonInit({
			"message0": Blockly.Msg.GET_LED_BRIGHTNESS,
			"args0": [
				{
					"type": "field_image",
					"src": Blockly.mainWorkspace.options.pathToMedia + "extensions/led.svg",
					"width": 40,
					"height": 40,
				},
				{
					"type": "field_vertical_separator"
				}
      ],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "output_number", "scratch_extension"]
		})
	}
};
Blockly.Blocks["pico_internalledoff"] = {
	init() {
		this.jsonInit({
			"message0": Blockly.Msg.TURN_INTERNAL_LED_OFF,
			"args0": [
				{
					"type": "field_image",
					"src": Blockly.mainWorkspace.options.pathToMedia + "extensions/led.svg",
					"width": 40,
					"height": 40,
				},
				{
					"type": "field_vertical_separator"
				},
			],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "shape_statement", "scratch_extension"]
		})
	}
};
Blockly.Blocks["pico_internalledstatus"] = {
	init() {
		this.jsonInit({
			"message0": Blockly.Msg.INTERNAL_LED_STATUS,
			"args0": [
				{
					"type": "field_image",
					"src": Blockly.mainWorkspace.options.pathToMedia + "extensions/led.svg",
					"width": 40,
					"height": 40,
				},
				{
					"type": "field_vertical_separator"
				},
			],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "output_boolean", "scratch_extension"]
		})
	}
};
Blockly.Blocks["pico_internalledon"] = {
	init() {
		this.jsonInit({
			"message0": Blockly.Msg.TURN_INTERNAL_LED_ON,
			"args0": [
				{
					"type": "field_image",
					"src": Blockly.mainWorkspace.options.pathToMedia + "extensions/led.svg",
					"width": 40,
					"height": 40,
				},
				{
					"type": "field_vertical_separator"
				},
			],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "shape_statement", "scratch_extension"]
		})
	}
};
Blockly.Blocks["pico_buttonstatus"] = {
	init() {
		this.jsonInit({
			"message0": Blockly.Msg.BUTTON_STATUS,
			"args0": [
				{
					"type": "field_image",
					"src": Blockly.mainWorkspace.options.pathToMedia + "extensions/button.svg",
					"width": 40,
					"height": 40,
				},
				{
					"type": "field_vertical_separator"
				}
      ],
      "category": Blockly.Categories.more,
      "extensions": ["colours_more", "output_boolean", "scratch_extension"]
		})
	}
};