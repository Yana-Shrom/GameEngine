{
    Blockly.defineBlocksWithJsonArray([
      {
        "type": "string_length",
        "message0": 'taille de %1',
        "args0": [
          {
            "type": "input_value",
            "name": "VALUE",
            "check": "String"
          }
        ],
        "output": "Number",
        "colour": 160,
        "tooltip": "Returns number of letters in the provided text.",
        "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
      },
      {
        "type": "custom_variable",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_input",
            "name": "custom_var",
            "text": "variable"
          },
          {
            "type": "input_value",
            "name": "custom_str",
            "check": "String"
          }
        ],
        "colour": 0,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "custom_newgame",
        "message0": "%1 %2 %3 %4 %5",
        "args0": [
          {
            "type": "field_label_serializable",
            "name": "title",
            "text": "New Game"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "frs"
          },
          {
            "type": "field_label_serializable",
            "name": "or",
            "text": "or"
          },
          {
            "type": "input_value",
            "name": "sec"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    ])
  }
  


  
  { //  Définition des block
    javascript.javascriptGenerator.forBlock['string_length'] = function(block, generator) {
      var value_value = generator.valueToCode(block, 'VALUE', javascript.Order.ATOMIC);
  
      return value_value + '.length';
    };
  
    javascript.javascriptGenerator.forBlock['custom_variable'] = function(block, generator) {
      var variable = block.getFieldValue('custom_var');
      var string = generator.valueToCode(block, 'custom_str', javascript.Order.ATOMIC);
  
      return `${variable} = ${string};\n`;
    };

    javascript.javascriptGenerator.forBlock['custom_newgame'] = function(block, generator) {
        var field_title = block.getFieldValue('title');
        var statements_frs = generator.statementToCode(block, 'frs');
        var field_or = block.getFieldValue('or');
        var value_sec = generator.valueToCode(block, 'sec', javascript.Order.ATOMIC);
        // TODO: Assemble javascript into code variable.
        
        // TODO: Change ORDER_NONE to the correct strength.
        return `new Phaser.Game(${value_sec})`;
    };
  }