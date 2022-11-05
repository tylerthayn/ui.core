define(() => {
	return [
    {
        "comment": "/**\r\n* Element class\r\n* @summary [Element]{@link https://developer.mozilla.org/en-US/docs/Web/API/Element}\r\n* @class Element\r\n* @global\r\n* @type {object}\r\n*/",
        "meta": {
            "filename": "index.js",
            "lineno": 2,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src",
            "code": {}
        },
        "description": "Element class",
        "summary": "[Element]{@link https://developer.mozilla.org/en-US/docs/Web/API/Element}",
        "kind": "class",
        "name": "Element",
        "scope": "global",
        "type": {
            "names": [
                "object"
            ]
        },
        "longname": "Element"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                153,
                226
            ],
            "filename": "index.js",
            "lineno": 3,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\ActionHandlers",
            "code": {
                "id": "astnode100000079",
                "name": "ActionHandlers",
                "type": "ObjectExpression",
                "value": "{\"Hide\":\"\",\"Show\":\"\",\"Toggle\":\"\"}"
            }
        },
        "undocumented": true,
        "name": "ActionHandlers",
        "longname": "ActionHandlers",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                175,
                185
            ],
            "filename": "index.js",
            "lineno": 4,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\ActionHandlers",
            "code": {
                "id": "astnode100000081",
                "name": "Hide",
                "type": "Identifier",
                "value": "Hide"
            }
        },
        "undocumented": true,
        "name": "Hide",
        "longname": "ActionHandlers.Hide",
        "kind": "member",
        "memberof": "ActionHandlers",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                191,
                201
            ],
            "filename": "index.js",
            "lineno": 5,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\ActionHandlers",
            "code": {
                "id": "astnode100000083",
                "name": "Show",
                "type": "Identifier",
                "value": "Show"
            }
        },
        "undocumented": true,
        "name": "Show",
        "longname": "ActionHandlers.Show",
        "kind": "member",
        "memberof": "ActionHandlers",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                207,
                221
            ],
            "filename": "index.js",
            "lineno": 6,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\ActionHandlers",
            "code": {
                "id": "astnode100000085",
                "name": "Toggle",
                "type": "Identifier",
                "value": "Toggle"
            }
        },
        "undocumented": true,
        "name": "Toggle",
        "longname": "ActionHandlers.Toggle",
        "kind": "member",
        "memberof": "ActionHandlers",
        "scope": "static"
    },
    {
        "comment": "/**\r\n* @module jQuery/Action\r\n*/",
        "meta": {
            "filename": "Action.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "kind": "module",
        "name": "jQuery/Action",
        "longname": "module:jQuery/Action"
    },
    {
        "comment": "/** ActionHandler Callback\r\n\t* @callback ActionHandler\r\n\t* @param {Event} event\r\n\t* @param {...*} args\r\n\t*/",
        "meta": {
            "filename": "Action.js",
            "lineno": 6,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "ActionHandler Callback",
        "kind": "typedef",
        "name": "ActionHandler",
        "type": {
            "names": [
                "function"
            ]
        },
        "params": [
            {
                "type": {
                    "names": [
                        "Event"
                    ]
                },
                "name": "event"
            },
            {
                "type": {
                    "names": [
                        "*"
                    ]
                },
                "variable": true,
                "name": "args"
            }
        ],
        "longname": "module:jQuery/Action~ActionHandler",
        "scope": "inner",
        "memberof": "module:jQuery/Action"
    },
    {
        "comment": "/** Trigger Action for element\r\n\t\t* @memberof jQuery#\r\n\t\t* @function Action\r\n\t\t* @param {string} name - Action name to trigger\r\n\t\t* @param {...*} [args] - Action args to pass to handler\r\n\t\t*/",
        "meta": {
            "filename": "Action.js",
            "lineno": 13,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Trigger Action for element",
        "memberof": "jQuery",
        "kind": "function",
        "name": "Action",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "Action name to trigger",
                "name": "name"
            },
            {
                "type": {
                    "names": [
                        "*"
                    ]
                },
                "optional": true,
                "variable": true,
                "description": "Action args to pass to handler",
                "name": "args"
            }
        ],
        "longname": "jQuery#Action",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                407,
                526
            ],
            "filename": "Action.js",
            "lineno": 19,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000203",
                "name": "Action",
                "type": "FunctionExpression"
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "Action",
        "longname": "module:jQuery/Action~Action",
        "kind": "function",
        "scope": "inner",
        "memberof": "module:jQuery/Action"
    },
    {
        "comment": "/** Register ActionHandler for element\r\n\t\t* @memberof jQuery#\r\n\t\t* @function ActionHandler\r\n\t\t* @param {string} name - Action name to handle\r\n\t\t* @param {ActionHandler} fn - Handler function\r\n\t\t*/",
        "meta": {
            "filename": "Action.js",
            "lineno": 25,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Register ActionHandler for element",
        "memberof": "jQuery",
        "kind": "function",
        "name": "ActionHandler",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "Action name to handle",
                "name": "name"
            },
            {
                "type": {
                    "names": [
                        "ActionHandler"
                    ]
                },
                "description": "Handler function",
                "name": "fn"
            }
        ],
        "longname": "jQuery#ActionHandler",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                733,
                908
            ],
            "filename": "Action.js",
            "lineno": 31,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000229",
                "name": "ActionHandler",
                "type": "FunctionExpression"
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "ActionHandler",
        "longname": "module:jQuery/Action~ActionHandler",
        "kind": "function",
        "scope": "inner",
        "memberof": "module:jQuery/Action"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                826,
                838
            ],
            "filename": "Action.js",
            "lineno": 33,
            "columnno": 29,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000254",
                "name": "action",
                "type": "Identifier",
                "value": "name"
            }
        },
        "undocumented": true,
        "name": "action",
        "longname": "module:jQuery/Action~action",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:jQuery/Action"
    },
    {
        "comment": "/**\r\n* @module jQuery/Data\r\n*/",
        "meta": {
            "filename": "Data.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "kind": "module",
        "name": "jQuery/Data",
        "longname": "module:jQuery/Data"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                81,
                99
            ],
            "filename": "Data.js",
            "lineno": 5,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000281",
                "name": "dataFn",
                "type": "MemberExpression",
                "value": "$.fn.data"
            }
        },
        "undocumented": true,
        "name": "dataFn",
        "longname": "<anonymous>~dataFn",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "/** data-change event\r\n\t* @event jQuery#data-change\r\n\t* @type {object}\r\n\t* @property {string} name - data property name that changed\r\n\t*/",
        "meta": {
            "filename": "Data.js",
            "lineno": 7,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "data-change event",
        "kind": "event",
        "name": "data-change",
        "type": {
            "names": [
                "object"
            ]
        },
        "properties": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "data property name that changed",
                "name": "name"
            }
        ],
        "memberof": "jQuery",
        "longname": "jQuery#event:data-change",
        "scope": "instance"
    },
    {
        "comment": "/** Data\r\n\t\t* @fires jQuery#data-change\r\n\t\t*/",
        "meta": {
            "range": [
                312,
                797
            ],
            "filename": "Data.js",
            "lineno": 17,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000296",
                "name": "data",
                "type": "FunctionExpression"
            },
            "vars": {
                "ret": "module:jQuery/Data~data~ret",
                "d": "module:jQuery/Data~data~d",
                "d[undefined]": "module:jQuery/Data~data~d.undefined]"
            }
        },
        "description": "Data",
        "fires": [
            "jQuery#event:data-change"
        ],
        "name": "data",
        "longname": "module:jQuery/Data~data",
        "kind": "function",
        "scope": "inner",
        "memberof": "module:jQuery/Data"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                544,
                579
            ],
            "filename": "Data.js",
            "lineno": 24,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000340",
                "name": "ret",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "ret",
        "longname": "module:jQuery/Data~data~ret",
        "kind": "member",
        "memberof": "module:jQuery/Data~data",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                709,
                715
            ],
            "filename": "Data.js",
            "lineno": 28,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000369",
                "name": "d",
                "type": "ObjectExpression",
                "value": "{}"
            }
        },
        "undocumented": true,
        "name": "d",
        "longname": "module:jQuery/Data~data~d",
        "kind": "member",
        "memberof": "module:jQuery/Data~data",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                721,
                735
            ],
            "filename": "Data.js",
            "lineno": 29,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000373",
                "name": "d[undefined]",
                "type": "Identifier",
                "funcscope": "module:jQuery/Data~data",
                "value": "value",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "undefined]",
        "longname": "module:jQuery/Data~data~d.undefined]",
        "kind": "member",
        "memberof": "module:jQuery/Data~data~d",
        "scope": "static"
    },
    {
        "comment": "/**\r\n* @module jQuery/Height\r\n*/",
        "meta": {
            "filename": "Height.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "kind": "module",
        "name": "jQuery/Height",
        "longname": "module:jQuery/Height"
    },
    {
        "comment": "/** Height - gets or sets the height of an element\r\n\t* @memberof jQuery/Height.\r\n\t* @function Height\r\n\t* @param {Element|jQuery} element\r\n\t* @param {number} [height]\r\n\t* @returns {Element|jQuery|number}\r\n\t*/",
        "meta": {
            "filename": "Height.js",
            "lineno": 6,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Height - gets or sets the height of an element",
        "memberof": "jQuery/Height",
        "kind": "function",
        "name": "Height",
        "params": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery"
                    ]
                },
                "name": "element"
            },
            {
                "type": {
                    "names": [
                        "number"
                    ]
                },
                "optional": true,
                "name": "height"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery",
                        "number"
                    ]
                }
            }
        ],
        "longname": "jQuery/Height.Height",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                316,
                376
            ],
            "filename": "Height.js",
            "lineno": 13,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000400",
                "name": "Height",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "e",
                    "v"
                ]
            }
        },
        "undocumented": true,
        "name": "Height",
        "longname": "<anonymous>~Height",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "/** Height - gets or sets the height of an element\r\n\t* @memberof jQuery.\r\n\t* @function Height\r\n\t* @param {Element|jQuery} element\r\n\t* @param {number} [height]\r\n\t* @returns {Element|jQuery|number}\r\n\t*/",
        "meta": {
            "filename": "Height.js",
            "lineno": 17,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Height - gets or sets the height of an element",
        "memberof": "jQuery",
        "kind": "function",
        "name": "Height",
        "params": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery"
                    ]
                },
                "name": "element"
            },
            {
                "type": {
                    "names": [
                        "number"
                    ]
                },
                "optional": true,
                "name": "height"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery",
                        "number"
                    ]
                }
            }
        ],
        "longname": "jQuery.Height",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                594,
                608
            ],
            "filename": "Height.js",
            "lineno": 24,
            "columnno": 11,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000417",
                "name": "Height",
                "type": "Identifier",
                "value": "Height"
            }
        },
        "undocumented": true,
        "name": "Height",
        "longname": "module:jQuery/Height~Height",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:jQuery/Height"
    },
    {
        "comment": "/** Height - gets or sets the height of an element\r\n\t* @memberof jQuery#\r\n\t* @function Height\r\n\t* @param {number} [height]\r\n\t* @returns {Element|jQuery|number}\r\n\t*/",
        "meta": {
            "filename": "Height.js",
            "lineno": 26,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Height - gets or sets the height of an element",
        "memberof": "jQuery",
        "kind": "function",
        "name": "Height",
        "params": [
            {
                "type": {
                    "names": [
                        "number"
                    ]
                },
                "optional": true,
                "name": "height"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery",
                        "number"
                    ]
                }
            }
        ],
        "longname": "jQuery#Height",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                795,
                840
            ],
            "filename": "Height.js",
            "lineno": 32,
            "columnno": 14,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000427",
                "name": "Height",
                "type": "FunctionExpression"
            }
        },
        "undocumented": true,
        "name": "Height",
        "longname": "module:jQuery/Height~Height",
        "kind": "function",
        "scope": "inner",
        "memberof": "module:jQuery/Height"
    },
    {
        "comment": "/**\r\n* @module jQuery/Include\r\n*/",
        "meta": {
            "filename": "Include.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "kind": "module",
        "name": "jQuery/Include",
        "longname": "module:jQuery/Include"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                87,
                93
            ],
            "filename": "Include.js",
            "lineno": 5,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000450",
                "name": "id",
                "type": "Literal",
                "value": 0
            }
        },
        "undocumented": true,
        "name": "id",
        "longname": "<anonymous>~id",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                102,
                358
            ],
            "filename": "Include.js",
            "lineno": 7,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000454",
                "name": "defaults",
                "type": "ObjectExpression",
                "value": "{\"insert\":\"\",\"selector\":false,\"scripts\":\"\",\"styles\":\"\"}"
            }
        },
        "undocumented": true,
        "name": "defaults",
        "longname": "<anonymous>~defaults",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                118,
                205
            ],
            "filename": "Include.js",
            "lineno": 8,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000457",
                "name": "insert",
                "type": "ObjectExpression",
                "value": "{\"element\":\"\",\"method\":\"append\"}"
            }
        },
        "undocumented": true,
        "name": "insert",
        "longname": "<anonymous>~defaults.insert",
        "kind": "member",
        "memberof": "<anonymous>~defaults",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                132,
                153
            ],
            "filename": "Include.js",
            "lineno": 9,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000459",
                "name": "element",
                "type": "MemberExpression",
                "value": "[0]"
            }
        },
        "undocumented": true,
        "name": "element",
        "longname": "<anonymous>~defaults.insert.element",
        "kind": "member",
        "memberof": "<anonymous>~defaults.insert",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                159,
                175
            ],
            "filename": "Include.js",
            "lineno": 10,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000465",
                "name": "method",
                "type": "Literal",
                "value": "append"
            }
        },
        "undocumented": true,
        "name": "method",
        "longname": "<anonymous>~defaults.insert.method",
        "kind": "member",
        "memberof": "<anonymous>~defaults.insert",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                210,
                225
            ],
            "filename": "Include.js",
            "lineno": 12,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000467",
                "name": "selector",
                "type": "Literal",
                "value": false
            }
        },
        "undocumented": true,
        "name": "selector",
        "longname": "<anonymous>~defaults.selector",
        "kind": "member",
        "memberof": "<anonymous>~defaults",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                230,
                294
            ],
            "filename": "Include.js",
            "lineno": 13,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000469",
                "name": "scripts",
                "type": "ObjectExpression",
                "value": "{\"context\":null,\"params\":\"\"}"
            }
        },
        "undocumented": true,
        "name": "scripts",
        "longname": "<anonymous>~defaults.scripts",
        "kind": "member",
        "memberof": "<anonymous>~defaults",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                245,
                258
            ],
            "filename": "Include.js",
            "lineno": 14,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000471",
                "name": "context",
                "type": "Literal",
                "value": null
            }
        },
        "undocumented": true,
        "name": "context",
        "longname": "<anonymous>~defaults.scripts.context",
        "kind": "member",
        "memberof": "<anonymous>~defaults.scripts",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                264,
                289
            ],
            "filename": "Include.js",
            "lineno": 15,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000473",
                "name": "params",
                "type": "ObjectExpression",
                "value": "{\"$\":\"\"}"
            }
        },
        "undocumented": true,
        "name": "params",
        "longname": "<anonymous>~defaults.scripts.params",
        "kind": "member",
        "memberof": "<anonymous>~defaults.scripts",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                279,
                283
            ],
            "filename": "Include.js",
            "lineno": 16,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000475",
                "name": "$",
                "type": "Identifier",
                "value": "$"
            }
        },
        "undocumented": true,
        "name": "$",
        "longname": "<anonymous>~defaults.scripts.params.$",
        "kind": "member",
        "memberof": "<anonymous>~defaults.scripts.params",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                299,
                354
            ],
            "filename": "Include.js",
            "lineno": 19,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000477",
                "name": "styles",
                "type": "ObjectExpression",
                "value": "{\"ignore\":false,\"inlineLinks\":true}"
            }
        },
        "undocumented": true,
        "name": "styles",
        "longname": "<anonymous>~defaults.styles",
        "kind": "member",
        "memberof": "<anonymous>~defaults",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                313,
                326
            ],
            "filename": "Include.js",
            "lineno": 20,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000479",
                "name": "ignore",
                "type": "Literal",
                "value": false
            }
        },
        "undocumented": true,
        "name": "ignore",
        "longname": "<anonymous>~defaults.styles.ignore",
        "kind": "member",
        "memberof": "<anonymous>~defaults.styles",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                332,
                349
            ],
            "filename": "Include.js",
            "lineno": 21,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000481",
                "name": "inlineLinks",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "inlineLinks",
        "longname": "<anonymous>~defaults.styles.inlineLinks",
        "kind": "member",
        "memberof": "<anonymous>~defaults.styles",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                363,
                1749
            ],
            "filename": "Include.js",
            "lineno": 25,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000483",
                "name": "Include",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "src",
                    "opts",
                    "cb"
                ]
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "Include",
        "longname": "<anonymous>~Include",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                472,
                508
            ],
            "filename": "Include.js",
            "lineno": 27,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000503",
                "name": "options",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "options",
        "longname": "<anonymous>~options",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                544,
                557
            ],
            "filename": "Include.js",
            "lineno": 30,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000522",
                "name": "elements",
                "type": "ArrayExpression",
                "value": "[]"
            }
        },
        "undocumented": true,
        "name": "elements",
        "longname": "<anonymous>~elements",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                559,
                571
            ],
            "filename": "Include.js",
            "lineno": 30,
            "columnno": 23,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000525",
                "name": "scripts",
                "type": "ArrayExpression",
                "value": "[]"
            }
        },
        "undocumented": true,
        "name": "scripts",
        "longname": "<anonymous>~scripts",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                573,
                584
            ],
            "filename": "Include.js",
            "lineno": 30,
            "columnno": 37,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000528",
                "name": "styles",
                "type": "ArrayExpression",
                "value": "[]"
            }
        },
        "undocumented": true,
        "name": "styles",
        "longname": "<anonymous>~styles",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                930,
                951
            ],
            "filename": "Include.js",
            "lineno": 43,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000589",
                "name": "element",
                "type": "MemberExpression",
                "value": "elements[0]"
            }
        },
        "undocumented": true,
        "name": "element",
        "longname": "<anonymous>~element",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                992,
                995
            ],
            "filename": "Include.js",
            "lineno": 45,
            "columnno": 10,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000600",
                "name": "i",
                "type": "Literal",
                "funcscope": "<anonymous>",
                "value": 0,
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "i",
        "longname": "module:jQuery/Include~i",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:jQuery/Include"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1081,
                1102
            ],
            "filename": "Include.js",
            "lineno": 47,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000625",
                "name": "element",
                "type": "MemberExpression",
                "funcscope": "<anonymous>",
                "value": "elements[undefined]",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "element",
        "longname": "module:jQuery/Include~element",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:jQuery/Include"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1754,
                2439
            ],
            "filename": "Include.js",
            "lineno": 74,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000747",
                "name": "InsertStyles",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "element",
                    "options",
                    "styles"
                ]
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "InsertStyles",
        "longname": "<anonymous>~InsertStyles",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1915,
                2415
            ],
            "filename": "Include.js",
            "lineno": 80,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000770",
                "name": "Process",
                "type": "ArrowFunctionExpression"
            },
            "vars": {
                "style": "<anonymous>~Process~style",
                "": null
            }
        },
        "undocumented": true,
        "name": "Process",
        "longname": "<anonymous>~Process",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1973,
                1995
            ],
            "filename": "Include.js",
            "lineno": 82,
            "columnno": 9,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000782",
                "name": "style",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "style",
        "longname": "<anonymous>~Process~style",
        "kind": "member",
        "memberof": "<anonymous>~Process",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2125,
                2145
            ],
            "filename": "Include.js",
            "lineno": 85,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000817",
                "name": "style",
                "type": "CallExpression",
                "funcscope": "<anonymous>",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "style",
        "longname": "module:jQuery/Include~style",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:jQuery/Include"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2444,
                3344
            ],
            "filename": "Include.js",
            "lineno": 103,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000876",
                "name": "InsertScripts",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "element",
                    "options",
                    "scripts"
                ]
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "InsertScripts",
        "longname": "<anonymous>~InsertScripts",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2608,
                3320
            ],
            "filename": "Include.js",
            "lineno": 109,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000899",
                "name": "Process",
                "type": "ArrowFunctionExpression"
            },
            "vars": {
                "script": "<anonymous>~Process~script",
                "": null,
                "fn": "<anonymous>~Process~fn"
            }
        },
        "undocumented": true,
        "name": "Process",
        "longname": "<anonymous>~Process",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2667,
                2691
            ],
            "filename": "Include.js",
            "lineno": 111,
            "columnno": 9,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000911",
                "name": "script",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "script",
        "longname": "<anonymous>~Process~script",
        "kind": "member",
        "memberof": "<anonymous>~Process",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2799,
                2855
            ],
            "filename": "Include.js",
            "lineno": 115,
            "columnno": 12,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000946",
                "name": "fn",
                "type": "NewExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "fn",
        "longname": "<anonymous>~fn",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3067,
                3136
            ],
            "filename": "Include.js",
            "lineno": 122,
            "columnno": 11,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100000999",
                "name": "fn",
                "type": "NewExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "fn",
        "longname": "<anonymous>~Process~fn",
        "kind": "member",
        "memberof": "<anonymous>~Process",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "/** jQuery\r\n* @class jQuery\r\n*/",
        "meta": {
            "filename": "index.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "jQuery",
        "kind": "class",
        "name": "jQuery",
        "longname": "jQuery",
        "scope": "global"
    },
    {
        "comment": "/**\r\n* @module jQuery/Property\r\n*/",
        "meta": {
            "filename": "Property.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "kind": "module",
        "name": "jQuery/Property",
        "longname": "module:jQuery/Property"
    },
    {
        "comment": "/** Gets or Sets Element property\r\n\t\t* @memberof jQuery#\r\n\t\t* @function Property\r\n\t\t* @param {string|object} name - Property name or object of properties\r\n\t\t* @param {*|function} [value] - Property value.  If function, it is added as listener\r\n\t\t* @returns {*} [value] - Property value\r\n\t\t*/",
        "meta": {
            "filename": "Property.js",
            "lineno": 7,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Gets or Sets Element property",
        "memberof": "jQuery",
        "kind": "function",
        "name": "Property",
        "params": [
            {
                "type": {
                    "names": [
                        "string",
                        "object"
                    ]
                },
                "description": "Property name or object of properties",
                "name": "name"
            },
            {
                "type": {
                    "names": [
                        "*",
                        "function"
                    ]
                },
                "optional": true,
                "description": "Property value.  If function, it is added as listener",
                "name": "value"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "*"
                    ]
                },
                "description": "[value] - Property value"
            }
        ],
        "longname": "jQuery#Property",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                414,
                1023
            ],
            "filename": "Property.js",
            "lineno": 14,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100001094",
                "name": "Property",
                "type": "FunctionExpression"
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "Property",
        "longname": "module:jQuery/Property~Property",
        "kind": "function",
        "scope": "inner",
        "memberof": "module:jQuery/Property"
    },
    {
        "comment": "/**\r\n* @module jQuery/Value\r\n*/",
        "meta": {
            "filename": "Value.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "kind": "module",
        "name": "jQuery/Value",
        "longname": "module:jQuery/Value"
    },
    {
        "comment": "/** Value\r\n\t* @memberof module:jQuery/Value.\r\n\t* @function Value\r\n\t* @param {Element|jQuery} e\r\n\t* @param {string} name - css property name\r\n\t* @param {*} [value] - css property value\r\n\t* @returns {*} value - css property value or the element\r\n\t*/",
        "meta": {
            "filename": "Value.js",
            "lineno": 6,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Value",
        "memberof": "module:jQuery/Value",
        "kind": "function",
        "name": "Value",
        "params": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery"
                    ]
                },
                "name": "e"
            },
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "css property name",
                "name": "name"
            },
            {
                "type": {
                    "names": [
                        "*"
                    ]
                },
                "optional": true,
                "description": "css property value",
                "name": "value"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "*"
                    ]
                },
                "description": "value - css property value or the element"
            }
        ],
        "longname": "module:jQuery/Value.Value",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                358,
                757
            ],
            "filename": "Value.js",
            "lineno": 14,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100001227",
                "name": "Value",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "e",
                    "name",
                    "v"
                ]
            }
        },
        "undocumented": true,
        "name": "Value",
        "longname": "<anonymous>~Value",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "/** Value\r\n\t* @memberof jQuery.\r\n\t* @function Value\r\n\t* @param {Element|jQuery} e\r\n\t* @param {string} name - css property name\r\n\t* @param {*} [value] - css property value\r\n\t* @returns {*} value - css property value or the element\r\n\t*/",
        "meta": {
            "filename": "Value.js",
            "lineno": 32,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Value",
        "memberof": "jQuery",
        "kind": "function",
        "name": "Value",
        "params": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery"
                    ]
                },
                "name": "e"
            },
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "css property name",
                "name": "name"
            },
            {
                "type": {
                    "names": [
                        "*"
                    ]
                },
                "optional": true,
                "description": "css property value",
                "name": "value"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "*"
                    ]
                },
                "description": "value - css property value or the element"
            }
        ],
        "longname": "jQuery.Value",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1009,
                1021
            ],
            "filename": "Value.js",
            "lineno": 40,
            "columnno": 11,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100001319",
                "name": "Value",
                "type": "Identifier",
                "value": "Value"
            }
        },
        "undocumented": true,
        "name": "Value",
        "longname": "module:jQuery/Value~Value",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:jQuery/Value"
    },
    {
        "comment": "/** Value\r\n\t* @memberof jQuery#\r\n\t* @function Value\r\n\t* @param {string} name - css property name\r\n\t* @param {*} [value] - css property value\r\n\t* @returns {*} value - css property value or the element\r\n\t*/",
        "meta": {
            "filename": "Value.js",
            "lineno": 42,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Value",
        "memberof": "jQuery",
        "kind": "function",
        "name": "Value",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "css property name",
                "name": "name"
            },
            {
                "type": {
                    "names": [
                        "*"
                    ]
                },
                "optional": true,
                "description": "css property value",
                "name": "value"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "*"
                    ]
                },
                "description": "value - css property value or the element"
            }
        ],
        "longname": "jQuery#Value",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1248,
                1303
            ],
            "filename": "Value.js",
            "lineno": 49,
            "columnno": 14,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100001329",
                "name": "Value",
                "type": "FunctionExpression"
            }
        },
        "undocumented": true,
        "name": "Value",
        "longname": "module:jQuery/Value~Value",
        "kind": "function",
        "scope": "inner",
        "memberof": "module:jQuery/Value"
    },
    {
        "comment": "/**\r\n* @module jQuery/ValueOf\r\n*/",
        "meta": {
            "filename": "ValueOf.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "kind": "module",
        "name": "jQuery/ValueOf",
        "longname": "module:jQuery/ValueOf"
    },
    {
        "comment": "/** ValueOf\r\n\t* @memberof module:jQuery/ValueOf.\r\n\t* @function ValueOf\r\n\t* @param {string} value - css property value\r\n\t* @returns {float} value - css property value as float\r\n\t*/",
        "meta": {
            "filename": "ValueOf.js",
            "lineno": 6,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "ValueOf",
        "memberof": "module:jQuery/ValueOf",
        "kind": "function",
        "name": "ValueOf",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "css property value",
                "name": "value"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "float"
                    ]
                },
                "description": "value - css property value as float"
            }
        ],
        "longname": "module:jQuery/ValueOf.ValueOf",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                267,
                336
            ],
            "filename": "ValueOf.js",
            "lineno": 12,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100001353",
                "name": "ValueOf",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "v"
                ]
            }
        },
        "undocumented": true,
        "name": "ValueOf",
        "longname": "<anonymous>~ValueOf",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "/** ValueOf\r\n\t* @memberof jQuery.\r\n\t* @function ValueOf\r\n\t* @param {string} value - css property value\r\n\t* @returns {float} value - css property value as float\r\n\t*/",
        "meta": {
            "filename": "ValueOf.js",
            "lineno": 16,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "ValueOf",
        "memberof": "jQuery",
        "kind": "function",
        "name": "ValueOf",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "description": "css property value",
                "name": "value"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "float"
                    ]
                },
                "description": "value - css property value as float"
            }
        ],
        "longname": "jQuery.ValueOf",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                518,
                534
            ],
            "filename": "ValueOf.js",
            "lineno": 22,
            "columnno": 11,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100001372",
                "name": "ValueOf",
                "type": "Identifier",
                "value": "ValueOf"
            }
        },
        "undocumented": true,
        "name": "ValueOf",
        "longname": "module:jQuery/ValueOf~ValueOf",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:jQuery/ValueOf"
    },
    {
        "comment": "/**\r\n* @module jQuery/Width\r\n*/",
        "meta": {
            "filename": "Width.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "kind": "module",
        "name": "jQuery/Width",
        "longname": "module:jQuery/Width"
    },
    {
        "comment": "/** Width - gets or sets the width of an element\r\n\t* @memberof module:jQuery/Width.\r\n\t* @function Width\r\n\t* @param {Element|jQuery} element\r\n\t* @param {number} [width]\r\n\t* @returns {Element|jQuery|number}\r\n\t*/",
        "meta": {
            "filename": "Width.js",
            "lineno": 6,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Width - gets or sets the width of an element",
        "memberof": "module:jQuery/Width",
        "kind": "function",
        "name": "Width",
        "params": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery"
                    ]
                },
                "name": "element"
            },
            {
                "type": {
                    "names": [
                        "number"
                    ]
                },
                "optional": true,
                "name": "width"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery",
                        "number"
                    ]
                }
            }
        ],
        "longname": "module:jQuery/Width.Width",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                316,
                374
            ],
            "filename": "Width.js",
            "lineno": 13,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100001389",
                "name": "Width",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "e",
                    "v"
                ]
            }
        },
        "undocumented": true,
        "name": "Width",
        "longname": "<anonymous>~Width",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "/** Width - gets or sets the width of an element\r\n\t* @memberof jQuery.\r\n\t* @function Width\r\n\t* @param {Element|jQuery} element\r\n\t* @param {number} [width]\r\n\t* @returns {Element|jQuery|number}\r\n\t*/",
        "meta": {
            "filename": "Width.js",
            "lineno": 17,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Width - gets or sets the width of an element",
        "memberof": "jQuery",
        "kind": "function",
        "name": "Width",
        "params": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery"
                    ]
                },
                "name": "element"
            },
            {
                "type": {
                    "names": [
                        "number"
                    ]
                },
                "optional": true,
                "name": "width"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery",
                        "number"
                    ]
                }
            }
        ],
        "longname": "jQuery.Width",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                588,
                600
            ],
            "filename": "Width.js",
            "lineno": 24,
            "columnno": 11,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100001406",
                "name": "Width",
                "type": "Identifier",
                "value": "Width"
            }
        },
        "undocumented": true,
        "name": "Width",
        "longname": "module:jQuery/Width~Width",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:jQuery/Width"
    },
    {
        "comment": "/** Width - gets or sets the width of an element\r\n\t* @memberof jQuery#\r\n\t* @function Width\r\n\t* @param {number} [width]\r\n\t* @returns {Element|jQuery|number}\r\n\t*/",
        "meta": {
            "filename": "Width.js",
            "lineno": 26,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {}
        },
        "description": "Width - gets or sets the width of an element",
        "memberof": "jQuery",
        "kind": "function",
        "name": "Width",
        "params": [
            {
                "type": {
                    "names": [
                        "number"
                    ]
                },
                "optional": true,
                "name": "width"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "Element",
                        "jQuery",
                        "number"
                    ]
                }
            }
        ],
        "longname": "jQuery#Width",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                783,
                826
            ],
            "filename": "Width.js",
            "lineno": 32,
            "columnno": 14,
            "path": "D:\\TTS\\development\\ui.core\\src\\jQuery",
            "code": {
                "id": "astnode100001416",
                "name": "Width",
                "type": "FunctionExpression"
            }
        },
        "undocumented": true,
        "name": "Width",
        "longname": "module:jQuery/Width~Width",
        "kind": "function",
        "scope": "inner",
        "memberof": "module:jQuery/Width"
    },
    {
        "comment": "/**\r\n* @module Observers/Hidden\r\n* @requires jquery#triggerHandler\r\n* @requires MutationObserver\r\n*/",
        "meta": {
            "filename": "Hidden.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "kind": "module",
        "name": "Observers/Hidden",
        "requires": [
            "module:jquery#triggerHandler",
            "module:MutationObserver"
        ],
        "longname": "module:Observers/Hidden"
    },
    {
        "comment": "/** Observers/Hidden\r\n\t* @memberof jQuery.Observers.\r\n\t* @name Hidden\r\n\t* @function\r\n\t* @fires Element#hidden\r\n\t* @param {HTMLElement} element - Html Element to observe\r\n\t* @param {String} prefix - Event name prefix\r\n\t*/",
        "meta": {
            "filename": "Hidden.js",
            "lineno": 8,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "description": "Observers/Hidden",
        "memberof": "jQuery.Observers",
        "name": "Hidden",
        "kind": "function",
        "fires": [
            "Element#event:hidden"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "HTMLElement"
                    ]
                },
                "description": "Html Element to observe",
                "name": "element"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "Event name prefix",
                "name": "prefix"
            }
        ],
        "longname": "jQuery.Observers.Hidden",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                445,
                774
            ],
            "filename": "Hidden.js",
            "lineno": 17,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001448",
                "name": "hiddenObserver",
                "type": "NewExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "hiddenObserver",
        "longname": "<anonymous>~hiddenObserver",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "/** Element event\r\n\t\t\t\t\t* @event Element#hidden\r\n\t\t\t\t\t*/",
        "meta": {
            "filename": "Hidden.js",
            "lineno": 20,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "description": "Element event",
        "kind": "event",
        "name": "hidden",
        "memberof": "Element",
        "longname": "Element#event:hidden",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                811,
                834
            ],
            "filename": "Hidden.js",
            "lineno": 27,
            "columnno": 35,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001498",
                "name": "attributeOldValue",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "attributeOldValue",
        "longname": "module:Observers/Hidden~attributeOldValue",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Hidden"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                836,
                853
            ],
            "filename": "Hidden.js",
            "lineno": 27,
            "columnno": 60,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001500",
                "name": "attributes",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "attributes",
        "longname": "module:Observers/Hidden~attributes",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Hidden"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                855,
                881
            ],
            "filename": "Hidden.js",
            "lineno": 27,
            "columnno": 79,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001502",
                "name": "attributeFilter",
                "type": "ArrayExpression",
                "value": "[\"class\"]"
            }
        },
        "undocumented": true,
        "name": "attributeFilter",
        "longname": "module:Observers/Hidden~attributeFilter",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Hidden"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                893,
                1326
            ],
            "filename": "Hidden.js",
            "lineno": 29,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001506",
                "name": "displayObserver",
                "type": "NewExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "displayObserver",
        "longname": "<anonymous>~displayObserver",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1012,
                1058
            ],
            "filename": "Hidden.js",
            "lineno": 31,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001522",
                "name": "current",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "current",
        "longname": "<anonymous>~current",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1068,
                1109
            ],
            "filename": "Hidden.js",
            "lineno": 32,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001534",
                "name": "old",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "old",
        "longname": "<anonymous>~old",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1364,
                1387
            ],
            "filename": "Hidden.js",
            "lineno": 40,
            "columnno": 36,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001587",
                "name": "attributeOldValue",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "attributeOldValue",
        "longname": "module:Observers/Hidden~attributeOldValue",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Hidden"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1389,
                1406
            ],
            "filename": "Hidden.js",
            "lineno": 40,
            "columnno": 61,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001589",
                "name": "attributes",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "attributes",
        "longname": "module:Observers/Hidden~attributes",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Hidden"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1408,
                1434
            ],
            "filename": "Hidden.js",
            "lineno": 40,
            "columnno": 80,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001591",
                "name": "attributeFilter",
                "type": "ArrayExpression",
                "value": "[\"style\"]"
            }
        },
        "undocumented": true,
        "name": "attributeFilter",
        "longname": "module:Observers/Hidden~attributeFilter",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Hidden"
    },
    {
        "comment": "/**\r\n* @module Observers\r\n*/",
        "meta": {
            "filename": "index.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "kind": "module",
        "name": "Observers",
        "longname": "module:Observers"
    },
    {
        "comment": "/** Observers() will establish Hidden, Resized and Shown MutationObservers on provided Element\r\n\t* @memberof jQuery.\r\n\t* @function Observers\r\n\t* @param {HtmlElement} element - Element to observer\r\n\t* @param {string} [prefix=''] - Event name prefix\r\n\t*/",
        "meta": {
            "filename": "index.js",
            "lineno": 7,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "description": "Observers() will establish Hidden, Resized and Shown MutationObservers on provided Element",
        "memberof": "jQuery",
        "kind": "function",
        "name": "Observers",
        "params": [
            {
                "type": {
                    "names": [
                        "HtmlElement"
                    ]
                },
                "description": "Element to observer",
                "name": "element"
            },
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "optional": true,
                "defaultvalue": "''",
                "description": "Event name prefix",
                "name": "prefix"
            }
        ],
        "longname": "jQuery.Observers",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                472,
                596
            ],
            "filename": "index.js",
            "lineno": 13,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001622",
                "name": "Observers",
                "type": "ArrowFunctionExpression"
            }
        },
        "undocumented": true,
        "name": "Observers",
        "longname": "<anonymous>~Observers",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                767,
                787
            ],
            "filename": "index.js",
            "lineno": 24,
            "columnno": 11,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001675",
                "name": "Observers",
                "type": "Identifier",
                "value": "Observers"
            }
        },
        "undocumented": true,
        "name": "Observers",
        "longname": "module:Observers~Observers",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers"
    },
    {
        "comment": "/**\r\n* @module Observers/Mounted\r\n* @requires jquery#triggerHandler\r\n* @requires MutationObserver\r\n*/",
        "meta": {
            "filename": "Mounted.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "kind": "module",
        "name": "Observers/Mounted",
        "requires": [
            "module:jquery#triggerHandler",
            "module:MutationObserver"
        ],
        "longname": "module:Observers/Mounted"
    },
    {
        "comment": "/** Observers/Mounted\r\n\t* @memberof jQuery.Observers.\r\n\t* @function Mounted\r\n\t* @fires Element#mounted\r\n\t* @param {HTMLElement} element - Html Element to observe\r\n\t* @param {String} prefix - Event name prefix\r\n\t*/",
        "meta": {
            "filename": "Mounted.js",
            "lineno": 8,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "description": "Observers/Mounted",
        "memberof": "jQuery.Observers",
        "kind": "function",
        "name": "Mounted",
        "fires": [
            "Element#event:mounted"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "HTMLElement"
                    ]
                },
                "description": "Html Element to observe",
                "name": "element"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "Event name prefix",
                "name": "prefix"
            }
        ],
        "longname": "jQuery.Observers.Mounted",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                416,
                761
            ],
            "filename": "Mounted.js",
            "lineno": 16,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001696",
                "name": "observer",
                "type": "NewExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "observer",
        "longname": "<anonymous>~observer",
        "kind": "constant",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "/** Element event\r\n\t\t\t\t\t\t* @event Element#mounted\r\n\t\t\t\t\t\t*/",
        "meta": {
            "filename": "Mounted.js",
            "lineno": 20,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "description": "Element event",
        "kind": "event",
        "name": "mounted",
        "memberof": "Element",
        "longname": "Element#event:mounted",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                792,
                807
            ],
            "filename": "Mounted.js",
            "lineno": 28,
            "columnno": 29,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001747",
                "name": "childList",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "childList",
        "longname": "module:Observers/Mounted~childList",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Mounted"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                809,
                822
            ],
            "filename": "Mounted.js",
            "lineno": 28,
            "columnno": 46,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001749",
                "name": "subTree",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "subTree",
        "longname": "module:Observers/Mounted~subTree",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Mounted"
    },
    {
        "comment": "/**\r\n* @module ParseStyle\r\n*/",
        "meta": {
            "filename": "ParseStyle.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "kind": "module",
        "name": "ParseStyle",
        "longname": "module:ParseStyle"
    },
    {
        "comment": "/** ParseStyle\r\n\t* @exports ParseStyle\r\n\t* @function ParseStyle\r\n\t* @param {string} style\r\n\t* @returns {object} css\r\n\t*/",
        "meta": {
            "filename": "ParseStyle.js",
            "lineno": 6,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "description": "ParseStyle",
        "alias": "ParseStyle",
        "kind": "function",
        "name": "ParseStyle",
        "params": [
            {
                "type": {
                    "names": [
                        "string"
                    ]
                },
                "name": "style"
            }
        ],
        "returns": [
            {
                "type": {
                    "names": [
                        "object"
                    ]
                },
                "description": "css"
            }
        ],
        "longname": "module:ParseStyle~ParseStyle",
        "scope": "inner",
        "memberof": "module:ParseStyle"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                218,
                226
            ],
            "filename": "ParseStyle.js",
            "lineno": 13,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001765",
                "name": "css",
                "type": "ObjectExpression",
                "value": "{}"
            }
        },
        "undocumented": true,
        "name": "css",
        "longname": "<anonymous>~css",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                373,
                390
            ],
            "filename": "ParseStyle.js",
            "lineno": 17,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001809",
                "name": "css[undefined]",
                "type": "Identifier",
                "funcscope": "<anonymous>",
                "value": "value",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "undefined]",
        "longname": "<anonymous>~css.undefined]",
        "kind": "member",
        "memberof": "<anonymous>~css",
        "scope": "static"
    },
    {
        "comment": "/**\r\n* @module Observers/Resized\r\n* @requires jquery#triggerHandler\r\n* @requires MutationObserver\r\n*/",
        "meta": {
            "filename": "Resized.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "kind": "module",
        "name": "Observers/Resized",
        "requires": [
            "module:jquery#triggerHandler",
            "module:MutationObserver"
        ],
        "longname": "module:Observers/Resized"
    },
    {
        "comment": "/** Observers/Resized\r\n\t* @memberof jQuery.Observers.\r\n\t* @function Resized\r\n\t* @fires Element#resized\r\n\t* @param {HTMLElement} element - Html Element to observe\r\n\t* @param {String} prefix - Event name prefix\r\n\t*/",
        "meta": {
            "filename": "Resized.js",
            "lineno": 8,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "description": "Observers/Resized",
        "memberof": "jQuery.Observers",
        "kind": "function",
        "name": "Resized",
        "fires": [
            "Element#event:resized"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "HTMLElement"
                    ]
                },
                "description": "Html Element to observe",
                "name": "element"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "Event name prefix",
                "name": "prefix"
            }
        ],
        "longname": "jQuery.Observers.Resized",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                440,
                861
            ],
            "filename": "Resized.js",
            "lineno": 16,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001837",
                "name": "displayObserver",
                "type": "NewExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "displayObserver",
        "longname": "<anonymous>~displayObserver",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                559,
                605
            ],
            "filename": "Resized.js",
            "lineno": 18,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001853",
                "name": "current",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "current",
        "longname": "<anonymous>~current",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                615,
                656
            ],
            "filename": "Resized.js",
            "lineno": 19,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001865",
                "name": "old",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "old",
        "longname": "<anonymous>~old",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "/** Element event\r\n\t\t\t\t\t* @event Element#resized\r\n\t\t\t\t\t*/",
        "meta": {
            "filename": "Resized.js",
            "lineno": 21,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "description": "Element event",
        "kind": "event",
        "name": "resized",
        "memberof": "Element",
        "longname": "Element#event:resized",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                899,
                922
            ],
            "filename": "Resized.js",
            "lineno": 28,
            "columnno": 36,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001906",
                "name": "attributeOldValue",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "attributeOldValue",
        "longname": "module:Observers/Resized~attributeOldValue",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Resized"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                924,
                941
            ],
            "filename": "Resized.js",
            "lineno": 28,
            "columnno": 61,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001908",
                "name": "attributes",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "attributes",
        "longname": "module:Observers/Resized~attributes",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Resized"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                943,
                969
            ],
            "filename": "Resized.js",
            "lineno": 28,
            "columnno": 80,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001910",
                "name": "attributeFilter",
                "type": "ArrayExpression",
                "value": "[\"style\"]"
            }
        },
        "undocumented": true,
        "name": "attributeFilter",
        "longname": "module:Observers/Resized~attributeFilter",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Resized"
    },
    {
        "comment": "/**\r\n* @module Observers/Shown\r\n* @requires jquery#triggerHandler\r\n* @requires MutationObserver\r\n*/",
        "meta": {
            "filename": "Shown.js",
            "lineno": 1,
            "columnno": 0,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "kind": "module",
        "name": "Observers/Shown",
        "requires": [
            "module:jquery#triggerHandler",
            "module:MutationObserver"
        ],
        "longname": "module:Observers/Shown"
    },
    {
        "comment": "/** Observers/Shown\r\n\t* @memberof jQuery.Observers.\r\n\t* @function Shown\r\n\t* @fires Element#shown\r\n\t* @param {HTMLElement} element - Html Element to observe\r\n\t* @param {String} prefix - Event name prefix\r\n\t*/",
        "meta": {
            "filename": "Shown.js",
            "lineno": 8,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "description": "Observers/Shown",
        "memberof": "jQuery.Observers",
        "kind": "function",
        "name": "Shown",
        "fires": [
            "Element#event:shown"
        ],
        "params": [
            {
                "type": {
                    "names": [
                        "HTMLElement"
                    ]
                },
                "description": "Html Element to observe",
                "name": "element"
            },
            {
                "type": {
                    "names": [
                        "String"
                    ]
                },
                "description": "Event name prefix",
                "name": "prefix"
            }
        ],
        "longname": "jQuery.Observers.Shown",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                430,
                756
            ],
            "filename": "Shown.js",
            "lineno": 16,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001934",
                "name": "shownObserver",
                "type": "NewExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "shownObserver",
        "longname": "<anonymous>~shownObserver",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "/** Element event\r\n\t\t\t\t\t* @event Element#shown\r\n\t\t\t\t\t*/",
        "meta": {
            "filename": "Shown.js",
            "lineno": 19,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {}
        },
        "description": "Element event",
        "kind": "event",
        "name": "shown",
        "memberof": "Element",
        "longname": "Element#event:shown",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                792,
                815
            ],
            "filename": "Shown.js",
            "lineno": 26,
            "columnno": 34,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001984",
                "name": "attributeOldValue",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "attributeOldValue",
        "longname": "module:Observers/Shown~attributeOldValue",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Shown"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                817,
                834
            ],
            "filename": "Shown.js",
            "lineno": 26,
            "columnno": 59,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001986",
                "name": "attributes",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "attributes",
        "longname": "module:Observers/Shown~attributes",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Shown"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                836,
                862
            ],
            "filename": "Shown.js",
            "lineno": 26,
            "columnno": 78,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001988",
                "name": "attributeFilter",
                "type": "ArrayExpression",
                "value": "[\"class\"]"
            }
        },
        "undocumented": true,
        "name": "attributeFilter",
        "longname": "module:Observers/Shown~attributeFilter",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Shown"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                874,
                1307
            ],
            "filename": "Shown.js",
            "lineno": 28,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100001992",
                "name": "displayObserver",
                "type": "NewExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "displayObserver",
        "longname": "<anonymous>~displayObserver",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                993,
                1039
            ],
            "filename": "Shown.js",
            "lineno": 30,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100002008",
                "name": "current",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "current",
        "longname": "<anonymous>~current",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1049,
                1090
            ],
            "filename": "Shown.js",
            "lineno": 31,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100002020",
                "name": "old",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "old",
        "longname": "<anonymous>~old",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1345,
                1368
            ],
            "filename": "Shown.js",
            "lineno": 39,
            "columnno": 36,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100002073",
                "name": "attributeOldValue",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "attributeOldValue",
        "longname": "module:Observers/Shown~attributeOldValue",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Shown"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1370,
                1387
            ],
            "filename": "Shown.js",
            "lineno": 39,
            "columnno": 61,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100002075",
                "name": "attributes",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "attributes",
        "longname": "module:Observers/Shown~attributes",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Shown"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1389,
                1415
            ],
            "filename": "Shown.js",
            "lineno": 39,
            "columnno": 80,
            "path": "D:\\TTS\\development\\ui.core\\src\\Observers",
            "code": {
                "id": "astnode100002077",
                "name": "attributeFilter",
                "type": "ArrayExpression",
                "value": "[\"style\"]"
            }
        },
        "undocumented": true,
        "name": "attributeFilter",
        "longname": "module:Observers/Shown~attributeFilter",
        "kind": "member",
        "scope": "inner",
        "memberof": "module:Observers/Shown"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                100,
                447
            ],
            "filename": "Builder.js",
            "lineno": 3,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002096",
                "name": "config",
                "type": "ObjectExpression",
                "value": "{\"id\":0,\"buildOptions\":\"\",\"extensions\":\"\"}"
            }
        },
        "undocumented": true,
        "name": "config",
        "longname": "<anonymous>~config",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                114,
                119
            ],
            "filename": "Builder.js",
            "lineno": 4,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002099",
                "name": "id",
                "type": "Literal",
                "value": 0
            }
        },
        "undocumented": true,
        "name": "id",
        "longname": "<anonymous>~config.id",
        "kind": "member",
        "memberof": "<anonymous>~config",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                124,
                366
            ],
            "filename": "Builder.js",
            "lineno": 5,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002101",
                "name": "buildOptions",
                "type": "ObjectExpression",
                "value": "{\"ignoreScripts\":false,\"ignoreStyles\":false,\"folder\":\"\",\"id\":null,\"type\":null,\"elements\":\"\",\"scripts\":\"\",\"styles\":\"\",\"widget\":null}"
            }
        },
        "undocumented": true,
        "name": "buildOptions",
        "longname": "<anonymous>~config.buildOptions",
        "kind": "member",
        "memberof": "<anonymous>~config",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                144,
                164
            ],
            "filename": "Builder.js",
            "lineno": 6,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002103",
                "name": "ignoreScripts",
                "type": "Literal",
                "value": false
            }
        },
        "undocumented": true,
        "name": "ignoreScripts",
        "longname": "<anonymous>~config.buildOptions.ignoreScripts",
        "kind": "member",
        "memberof": "<anonymous>~config.buildOptions",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                170,
                189
            ],
            "filename": "Builder.js",
            "lineno": 7,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002105",
                "name": "ignoreStyles",
                "type": "Literal",
                "value": false
            }
        },
        "undocumented": true,
        "name": "ignoreStyles",
        "longname": "<anonymous>~config.buildOptions.ignoreStyles",
        "kind": "member",
        "memberof": "<anonymous>~config.buildOptions",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                195,
                258
            ],
            "filename": "Builder.js",
            "lineno": 8,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002107",
                "name": "folder",
                "type": "BinaryExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "folder",
        "longname": "<anonymous>~config.buildOptions.folder",
        "kind": "member",
        "memberof": "<anonymous>~config.buildOptions",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                266,
                274
            ],
            "filename": "Builder.js",
            "lineno": 10,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002127",
                "name": "id",
                "type": "Literal",
                "value": null
            }
        },
        "undocumented": true,
        "name": "id",
        "longname": "<anonymous>~config.buildOptions.id",
        "kind": "member",
        "memberof": "<anonymous>~config.buildOptions",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                280,
                290
            ],
            "filename": "Builder.js",
            "lineno": 11,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002129",
                "name": "type",
                "type": "Literal",
                "value": null
            }
        },
        "undocumented": true,
        "name": "type",
        "longname": "<anonymous>~config.buildOptions.type",
        "kind": "member",
        "memberof": "<anonymous>~config.buildOptions",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                298,
                310
            ],
            "filename": "Builder.js",
            "lineno": 13,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002131",
                "name": "elements",
                "type": "ArrayExpression",
                "value": "[]"
            }
        },
        "undocumented": true,
        "name": "elements",
        "longname": "<anonymous>~config.buildOptions.elements",
        "kind": "member",
        "memberof": "<anonymous>~config.buildOptions",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                316,
                327
            ],
            "filename": "Builder.js",
            "lineno": 14,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002133",
                "name": "scripts",
                "type": "ArrayExpression",
                "value": "[]"
            }
        },
        "undocumented": true,
        "name": "scripts",
        "longname": "<anonymous>~config.buildOptions.scripts",
        "kind": "member",
        "memberof": "<anonymous>~config.buildOptions",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                333,
                343
            ],
            "filename": "Builder.js",
            "lineno": 15,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002135",
                "name": "styles",
                "type": "ArrayExpression",
                "value": "[]"
            }
        },
        "undocumented": true,
        "name": "styles",
        "longname": "<anonymous>~config.buildOptions.styles",
        "kind": "member",
        "memberof": "<anonymous>~config.buildOptions",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                349,
                361
            ],
            "filename": "Builder.js",
            "lineno": 16,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002137",
                "name": "widget",
                "type": "Literal",
                "value": null
            }
        },
        "undocumented": true,
        "name": "widget",
        "longname": "<anonymous>~config.buildOptions.widget",
        "kind": "member",
        "memberof": "<anonymous>~config.buildOptions",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                371,
                443
            ],
            "filename": "Builder.js",
            "lineno": 18,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002139",
                "name": "extensions",
                "type": "ObjectExpression",
                "value": "{\"regexp\":{},\"default\":\".html\"}"
            }
        },
        "undocumented": true,
        "name": "extensions",
        "longname": "<anonymous>~config.extensions",
        "kind": "member",
        "memberof": "<anonymous>~config",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                389,
                416
            ],
            "filename": "Builder.js",
            "lineno": 19,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002141",
                "name": "regexp",
                "type": "Literal",
                "value": "<RegExp /\\.(html|tpl|ui)$/i>"
            }
        },
        "undocumented": true,
        "name": "regexp",
        "longname": "<anonymous>~config.extensions.regexp",
        "kind": "member",
        "memberof": "<anonymous>~config.extensions",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                422,
                438
            ],
            "filename": "Builder.js",
            "lineno": 20,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002143",
                "name": "default",
                "type": "Literal",
                "value": ".html"
            }
        },
        "undocumented": true,
        "name": "default",
        "longname": "<anonymous>~config.extensions.default",
        "kind": "member",
        "memberof": "<anonymous>~config.extensions",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                454,
                736
            ],
            "filename": "Builder.js",
            "lineno": 25,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002145",
                "name": "Builder",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "src",
                    "options"
                ]
            },
            "vars": {
                "this.src": "<anonymous>~Builder#src",
                "this.options": "<anonymous>~Builder#options",
                "this.options.url": "<anonymous>~Builder#options.url",
                "this.options.id": "<anonymous>~Builder#options.id"
            }
        },
        "undocumented": true,
        "name": "Builder",
        "longname": "<anonymous>~Builder",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                496,
                510
            ],
            "filename": "Builder.js",
            "lineno": 26,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002153",
                "name": "this.src",
                "type": "Identifier",
                "value": "src",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "src",
        "longname": "<anonymous>~Builder#src",
        "kind": "member",
        "memberof": "<anonymous>~Builder",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                514,
                569
            ],
            "filename": "Builder.js",
            "lineno": 27,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002159",
                "name": "this.options",
                "type": "CallExpression",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "options",
        "longname": "<anonymous>~Builder#options",
        "kind": "member",
        "memberof": "<anonymous>~Builder",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                573,
                652
            ],
            "filename": "Builder.js",
            "lineno": 28,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002171",
                "name": "this.options.url",
                "type": "CallExpression",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "url",
        "longname": "<anonymous>~Builder#options.url",
        "kind": "member",
        "memberof": "<anonymous>~Builder#options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                686,
                714
            ],
            "filename": "Builder.js",
            "lineno": 29,
            "columnno": 32,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002203",
                "name": "this.options.id",
                "type": "MemberExpression",
                "value": "Builder.Id",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "id",
        "longname": "<anonymous>~Builder#options.id",
        "kind": "member",
        "memberof": "<anonymous>~Builder#options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                768,
                794
            ],
            "filename": "Builder.js",
            "lineno": 34,
            "columnno": 28,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002220",
                "name": "get",
                "type": "ArrowFunctionExpression"
            }
        },
        "undocumented": true,
        "name": "get",
        "longname": "get",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                822,
                861
            ],
            "filename": "Builder.js",
            "lineno": 35,
            "columnno": 24,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002231",
                "name": "get",
                "type": "ArrowFunctionExpression"
            }
        },
        "undocumented": true,
        "name": "get",
        "longname": "get",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                870,
                2330
            ],
            "filename": "Builder.js",
            "lineno": 38,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002242",
                "name": "Builder.prototype.Build",
                "type": "FunctionExpression",
                "funcscope": "<anonymous>",
                "paramnames": [
                    "data"
                ]
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "Build",
        "longname": "<anonymous>~Builder#Build",
        "kind": "function",
        "memberof": "<anonymous>~Builder",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1442,
                1445
            ],
            "filename": "Builder.js",
            "lineno": 54,
            "columnno": 10,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002355",
                "name": "i",
                "type": "Literal",
                "funcscope": "<anonymous>",
                "value": 0,
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "i",
        "longname": "<anonymous>~i",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1664,
                1711
            ],
            "filename": "Builder.js",
            "lineno": 59,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002421",
                "name": "this.options.elements[0].style.display",
                "type": "Literal",
                "value": "none",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "display",
        "longname": "<anonymous>~Builder#Build#options.elements[0].style.display",
        "kind": "member",
        "memberof": "<anonymous>~Builder#Build#options.elements[0].style",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2335,
                2753
            ],
            "filename": "Builder.js",
            "lineno": 81,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002572",
                "name": "Builder.prototype.CreateWidget",
                "type": "FunctionExpression",
                "funcscope": "<anonymous>",
                "paramnames": [
                    "data"
                ]
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "CreateWidget",
        "longname": "<anonymous>~Builder#CreateWidget",
        "kind": "function",
        "memberof": "<anonymous>~Builder",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2609,
                2641
            ],
            "filename": "Builder.js",
            "lineno": 88,
            "columnno": 19,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002626",
                "name": "children",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "children",
        "longname": "children",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2656,
                2721
            ],
            "filename": "Builder.js",
            "lineno": 90,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002636",
                "name": "this.options.widget",
                "type": "NewExpression",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "widget",
        "longname": "<anonymous>~Builder#CreateWidget#options.widget",
        "kind": "member",
        "memberof": "<anonymous>~Builder#CreateWidget#options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2758,
                2918
            ],
            "filename": "Builder.js",
            "lineno": 96,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002656",
                "name": "Builder.prototype.Get",
                "type": "FunctionExpression",
                "funcscope": "<anonymous>",
                "paramnames": [
                    "url"
                ]
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "Get",
        "longname": "<anonymous>~Builder#Get",
        "kind": "function",
        "memberof": "<anonymous>~Builder",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2923,
                3732
            ],
            "filename": "Builder.js",
            "lineno": 104,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002692",
                "name": "Builder.prototype.InsertScripts",
                "type": "FunctionExpression",
                "funcscope": "<anonymous>",
                "paramnames": []
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "InsertScripts",
        "longname": "<anonymous>~Builder#InsertScripts",
        "kind": "function",
        "memberof": "<anonymous>~Builder",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3092,
                3129
            ],
            "filename": "Builder.js",
            "lineno": 110,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002718",
                "name": "scripts",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "scripts",
        "longname": "<anonymous>~scripts",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3140,
                3708
            ],
            "filename": "Builder.js",
            "lineno": 112,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002728",
                "name": "Process",
                "type": "ArrowFunctionExpression"
            },
            "vars": {
                "script": "<anonymous>~Process~script",
                "": null,
                "fn": "<anonymous>~Process~fn"
            }
        },
        "undocumented": true,
        "name": "Process",
        "longname": "<anonymous>~Process",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3199,
                3223
            ],
            "filename": "Builder.js",
            "lineno": 114,
            "columnno": 9,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002740",
                "name": "script",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "script",
        "longname": "<anonymous>~Process~script",
        "kind": "member",
        "memberof": "<anonymous>~Process",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3331,
                3358
            ],
            "filename": "Builder.js",
            "lineno": 118,
            "columnno": 12,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002775",
                "name": "fn",
                "type": "NewExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "fn",
        "longname": "<anonymous>~fn",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3527,
                3567
            ],
            "filename": "Builder.js",
            "lineno": 125,
            "columnno": 11,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002812",
                "name": "fn",
                "type": "NewExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "fn",
        "longname": "<anonymous>~Process~fn",
        "kind": "member",
        "memberof": "<anonymous>~Process",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3737,
                4454
            ],
            "filename": "Builder.js",
            "lineno": 138,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002849",
                "name": "Builder.prototype.InsertStyles",
                "type": "FunctionExpression",
                "funcscope": "<anonymous>",
                "paramnames": []
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "InsertStyles",
        "longname": "<anonymous>~Builder#InsertStyles",
        "kind": "function",
        "memberof": "<anonymous>~Builder",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3904,
                3939
            ],
            "filename": "Builder.js",
            "lineno": 144,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002875",
                "name": "styles",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "styles",
        "longname": "<anonymous>~styles",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3950,
                4430
            ],
            "filename": "Builder.js",
            "lineno": 146,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002885",
                "name": "Process",
                "type": "ArrowFunctionExpression"
            },
            "vars": {
                "style": "<anonymous>~Process~style",
                "": null
            }
        },
        "undocumented": true,
        "name": "Process",
        "longname": "<anonymous>~Process",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                4008,
                4030
            ],
            "filename": "Builder.js",
            "lineno": 148,
            "columnno": 9,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002897",
                "name": "style",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "style",
        "longname": "<anonymous>~Process~style",
        "kind": "member",
        "memberof": "<anonymous>~Process",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                4130,
                4150
            ],
            "filename": "Builder.js",
            "lineno": 151,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002926",
                "name": "style",
                "type": "CallExpression",
                "funcscope": "<anonymous>",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "style",
        "longname": "<anonymous>~style",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                4459,
                4695
            ],
            "filename": "Builder.js",
            "lineno": 169,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100002990",
                "name": "Builder.prototype.Path",
                "type": "FunctionExpression",
                "funcscope": "<anonymous>",
                "paramnames": [
                    "path"
                ]
            },
            "vars": {
                "path": "<anonymous>~Builder#Path~path"
            }
        },
        "undocumented": true,
        "name": "Path",
        "longname": "<anonymous>~Builder#Path",
        "kind": "function",
        "memberof": "<anonymous>~Builder",
        "scope": "instance"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                4505,
                4549
            ],
            "filename": "Builder.js",
            "lineno": 170,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003000",
                "name": "path",
                "type": "CallExpression",
                "funcscope": "<anonymous>~Builder#Path",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "path",
        "longname": "<anonymous>~Builder#Path~path",
        "kind": "member",
        "memberof": "<anonymous>~Builder#Path",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                4553,
                4586
            ],
            "filename": "Builder.js",
            "lineno": 171,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003009",
                "name": "path",
                "type": "BinaryExpression",
                "funcscope": "<anonymous>~Builder#Path",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "path",
        "longname": "<anonymous>~Builder#Path~path",
        "kind": "member",
        "memberof": "<anonymous>~Builder#Path",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                4638,
                4671
            ],
            "filename": "Builder.js",
            "lineno": 173,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003031",
                "name": "path",
                "type": "MemberExpression",
                "funcscope": "<anonymous>~Builder#Path",
                "value": "config.extensions.default",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "path",
        "longname": "<anonymous>~Builder#Path~path",
        "kind": "member",
        "memberof": "<anonymous>~Builder#Path",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                4700,
                6123
            ],
            "filename": "Builder.js",
            "lineno": 178,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003040",
                "name": "Loader",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "args"
                ]
            },
            "vars": {
                "": null,
                "src": "<anonymous>~Loader~src",
                "type": "<anonymous>~Loader~type",
                "options": "<anonymous>~Loader~options",
                "data": "<anonymous>~Loader~data",
                "options.type": "<anonymous>~Loader~options.type",
                "attributes": "<anonymous>~Loader~attributes",
                "i": "<anonymous>~Loader~i",
                "attributes[undefined]": "<anonymous>~Loader~attributes.undefined]"
            }
        },
        "undocumented": true,
        "name": "Loader",
        "longname": "<anonymous>~Loader",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                5272,
                5290
            ],
            "filename": "Builder.js",
            "lineno": 192,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003169",
                "name": "src",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "src",
        "longname": "<anonymous>~Loader~src",
        "kind": "member",
        "memberof": "<anonymous>~Loader",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                5298,
                5357
            ],
            "filename": "Builder.js",
            "lineno": 193,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003176",
                "name": "type",
                "type": "ConditionalExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "type",
        "longname": "<anonymous>~Loader~type",
        "kind": "member",
        "memberof": "<anonymous>~Loader",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                5365,
                5410
            ],
            "filename": "Builder.js",
            "lineno": 194,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003191",
                "name": "options",
                "type": "ConditionalExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "options",
        "longname": "<anonymous>~Loader~options",
        "kind": "member",
        "memberof": "<anonymous>~Loader",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                5418,
                5460
            ],
            "filename": "Builder.js",
            "lineno": 195,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003205",
                "name": "data",
                "type": "ConditionalExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "data",
        "longname": "<anonymous>~Loader~data",
        "kind": "member",
        "memberof": "<anonymous>~Loader",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                5483,
                5502
            ],
            "filename": "Builder.js",
            "lineno": 196,
            "columnno": 21,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003224",
                "name": "options.type",
                "type": "Identifier",
                "funcscope": "<anonymous>~Loader",
                "value": "type",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "type",
        "longname": "<anonymous>~Loader~options.type",
        "kind": "member",
        "memberof": "<anonymous>~Loader~options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                5545,
                5560
            ],
            "filename": "Builder.js",
            "lineno": 198,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003235",
                "name": "attributes",
                "type": "ObjectExpression",
                "value": "{}"
            }
        },
        "undocumented": true,
        "name": "attributes",
        "longname": "<anonymous>~Loader~attributes",
        "kind": "member",
        "memberof": "<anonymous>~Loader",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                5570,
                5573
            ],
            "filename": "Builder.js",
            "lineno": 199,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003239",
                "name": "i",
                "type": "Literal",
                "funcscope": "<anonymous>~Loader",
                "value": 0,
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "i",
        "longname": "<anonymous>~Loader~i",
        "kind": "member",
        "memberof": "<anonymous>~Loader",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                5669,
                5729
            ],
            "filename": "Builder.js",
            "lineno": 201,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003267",
                "name": "attributes[undefined]",
                "type": "MemberExpression",
                "funcscope": "<anonymous>~Loader",
                "value": "src.attributes[undefined].value",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "undefined]",
        "longname": "<anonymous>~Loader~attributes.undefined]",
        "kind": "member",
        "memberof": "<anonymous>~Loader~attributes",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                5747,
                5785
            ],
            "filename": "Builder.js",
            "lineno": 204,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003285",
                "name": "data",
                "type": "CallExpression",
                "funcscope": "<anonymous>~Loader",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "data",
        "longname": "<anonymous>~Loader~data",
        "kind": "member",
        "memberof": "<anonymous>~Loader",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                5790,
                5831
            ],
            "filename": "Builder.js",
            "lineno": 205,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003298",
                "name": "options",
                "type": "CallExpression",
                "funcscope": "<anonymous>~Loader",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "options",
        "longname": "<anonymous>~Loader~options",
        "kind": "member",
        "memberof": "<anonymous>~Loader",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                5942,
                5988
            ],
            "filename": "Builder.js",
            "lineno": 208,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003326",
                "name": "src",
                "type": "CallExpression",
                "funcscope": "<anonymous>~Loader",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "src",
        "longname": "<anonymous>~Loader~src",
        "kind": "member",
        "memberof": "<anonymous>~Loader",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                6128,
                6417
            ],
            "filename": "Builder.js",
            "lineno": 215,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003358",
                "name": "PromiseWrapper",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "promise"
                ]
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "PromiseWrapper",
        "longname": "<anonymous>~PromiseWrapper",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                6244,
                6276
            ],
            "filename": "Builder.js",
            "lineno": 218,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003380",
                "name": "results",
                "type": "CallExpression",
                "funcscope": "<anonymous>",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "results",
        "longname": "<anonymous>~results",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                6434,
                6450
            ],
            "filename": "Builder.js",
            "lineno": 229,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003395",
                "name": "Builder",
                "type": "Identifier",
                "value": "Builder"
            }
        },
        "undocumented": true,
        "name": "Builder",
        "longname": "Builder",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                6455,
                6469
            ],
            "filename": "Builder.js",
            "lineno": 230,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003397",
                "name": "Loader",
                "type": "Identifier",
                "value": "Loader"
            }
        },
        "undocumented": true,
        "name": "Loader",
        "longname": "Loader",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                118,
                130
            ],
            "filename": "index.js",
            "lineno": 3,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003418",
                "name": "widgets",
                "type": "ArrayExpression",
                "value": "[]"
            }
        },
        "undocumented": true,
        "name": "widgets",
        "longname": "<anonymous>~widgets",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                135,
                523
            ],
            "filename": "index.js",
            "lineno": 5,
            "columnno": 1,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003421",
                "name": "Ui",
                "type": "FunctionDeclaration",
                "paramnames": [
                    "selector"
                ]
            },
            "vars": {
                "list": "<anonymous>~Ui~list",
                "": null
            }
        },
        "undocumented": true,
        "name": "Ui",
        "longname": "<anonymous>~Ui",
        "kind": "function",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                256,
                265
            ],
            "filename": "index.js",
            "lineno": 11,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui",
            "code": {
                "id": "astnode100003440",
                "name": "list",
                "type": "ArrayExpression",
                "value": "[]"
            }
        },
        "undocumented": true,
        "name": "list",
        "longname": "<anonymous>~Ui~list",
        "kind": "member",
        "memberof": "<anonymous>~Ui",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                96,
                124
            ],
            "filename": "App.js",
            "lineno": 2,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003575",
                "name": "className",
                "type": "Literal",
                "value": "Ui/Widgets/App"
            }
        },
        "undocumented": true,
        "name": "className",
        "longname": "<anonymous>~className",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                198,
                213
            ],
            "filename": "App.js",
            "lineno": 5,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003599",
                "name": "type",
                "type": "Identifier",
                "value": "className"
            }
        },
        "undocumented": true,
        "name": "type",
        "longname": "type",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                218,
                276
            ],
            "filename": "App.js",
            "lineno": 6,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003601",
                "name": "widgetEventPrefix",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "widgetEventPrefix",
        "longname": "widgetEventPrefix",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                281,
                370
            ],
            "filename": "App.js",
            "lineno": 7,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003612",
                "name": "options",
                "type": "ObjectExpression",
                "value": "{\"loader\":\"\",\"show\":false}"
            }
        },
        "undocumented": true,
        "name": "options",
        "longname": "options",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                296,
                348
            ],
            "filename": "App.js",
            "lineno": 8,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003614",
                "name": "loader",
                "type": "ObjectExpression",
                "value": "{\"hide\":true,\"effect\":\"fade\"}"
            }
        },
        "undocumented": true,
        "name": "loader",
        "longname": "options.loader",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                311,
                321
            ],
            "filename": "App.js",
            "lineno": 9,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003616",
                "name": "hide",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "hide",
        "longname": "options.loader.hide",
        "kind": "member",
        "memberof": "options.loader",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                328,
                342
            ],
            "filename": "App.js",
            "lineno": 10,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003618",
                "name": "effect",
                "type": "Literal",
                "value": "fade"
            }
        },
        "undocumented": true,
        "name": "effect",
        "longname": "options.loader.effect",
        "kind": "member",
        "memberof": "options.loader",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                354,
                365
            ],
            "filename": "App.js",
            "lineno": 12,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003620",
                "name": "show",
                "type": "Literal",
                "value": false
            }
        },
        "undocumented": true,
        "name": "show",
        "longname": "options.show",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                375,
                613
            ],
            "filename": "App.js",
            "lineno": 14,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003622",
                "name": "_create",
                "type": "FunctionExpression"
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "_create",
        "longname": "_create",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                68,
                99
            ],
            "filename": "Dialog.js",
            "lineno": 2,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003685",
                "name": "className",
                "type": "Literal",
                "value": "Ui/Widgets/Dialog"
            }
        },
        "undocumented": true,
        "name": "className",
        "longname": "<anonymous>~className",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                169,
                184
            ],
            "filename": "Dialog.js",
            "lineno": 5,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003708",
                "name": "type",
                "type": "Identifier",
                "value": "className"
            }
        },
        "undocumented": true,
        "name": "type",
        "longname": "type",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                189,
                247
            ],
            "filename": "Dialog.js",
            "lineno": 6,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003710",
                "name": "widgetEventPrefix",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "widgetEventPrefix",
        "longname": "widgetEventPrefix",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                252,
                371
            ],
            "filename": "Dialog.js",
            "lineno": 7,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003721",
                "name": "options",
                "type": "ObjectExpression",
                "value": "{\"effect\":\"\",\"modal\":true,\"clickExit\":false,\"closeOnEscape\":true}"
            }
        },
        "undocumented": true,
        "name": "options",
        "longname": "options",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                267,
                302
            ],
            "filename": "Dialog.js",
            "lineno": 8,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003723",
                "name": "effect",
                "type": "ObjectExpression",
                "value": "{\"effect\":\"fade\"}"
            }
        },
        "undocumented": true,
        "name": "effect",
        "longname": "options.effect",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                282,
                296
            ],
            "filename": "Dialog.js",
            "lineno": 9,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003725",
                "name": "effect",
                "type": "Literal",
                "value": "fade"
            }
        },
        "undocumented": true,
        "name": "effect",
        "longname": "options.effect.effect",
        "kind": "member",
        "memberof": "options.effect",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                308,
                319
            ],
            "filename": "Dialog.js",
            "lineno": 11,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003727",
                "name": "modal",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "modal",
        "longname": "options.modal",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                325,
                341
            ],
            "filename": "Dialog.js",
            "lineno": 12,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003729",
                "name": "clickExit",
                "type": "Literal",
                "value": false
            }
        },
        "undocumented": true,
        "name": "clickExit",
        "longname": "options.clickExit",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                347,
                366
            ],
            "filename": "Dialog.js",
            "lineno": 13,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003731",
                "name": "closeOnEscape",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "closeOnEscape",
        "longname": "options.closeOnEscape",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                376,
                469
            ],
            "filename": "Dialog.js",
            "lineno": 15,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003733",
                "name": "_create",
                "type": "FunctionExpression"
            },
            "vars": {
                "this.parent": null
            }
        },
        "undocumented": true,
        "name": "_create",
        "longname": "_create",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                403,
                438
            ],
            "filename": "Dialog.js",
            "lineno": 16,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003737",
                "name": "this.parent",
                "type": "CallExpression",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "parent",
        "longname": "parent",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                474,
                619
            ],
            "filename": "Dialog.js",
            "lineno": 19,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003754",
                "name": "Hide",
                "type": "FunctionExpression"
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "Hide",
        "longname": "Hide",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                624,
                778
            ],
            "filename": "Dialog.js",
            "lineno": 25,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003785",
                "name": "Show",
                "type": "FunctionExpression"
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "Show",
        "longname": "Show",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                87,
                114
            ],
            "filename": "Ui.js",
            "lineno": 2,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003846",
                "name": "className",
                "type": "Literal",
                "value": "Ui/Widgets/Ui"
            }
        },
        "undocumented": true,
        "name": "className",
        "longname": "<anonymous>~className",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                184,
                199
            ],
            "filename": "Ui.js",
            "lineno": 5,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003869",
                "name": "type",
                "type": "Identifier",
                "value": "className"
            }
        },
        "undocumented": true,
        "name": "type",
        "longname": "type",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                204,
                262
            ],
            "filename": "Ui.js",
            "lineno": 6,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003871",
                "name": "widgetEventPrefix",
                "type": "CallExpression",
                "value": ""
            }
        },
        "undocumented": true,
        "name": "widgetEventPrefix",
        "longname": "widgetEventPrefix",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                267,
                539
            ],
            "filename": "Ui.js",
            "lineno": 7,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003882",
                "name": "options",
                "type": "ObjectExpression",
                "value": "{\"children\":\"\",\"disabled\":false,\"effect\":\"fade\",\"show\":false,\"hidden\":\"\",\"mounted\":\"\",\"ready\":\"\",\"resized\":\"\",\"updated\":\"\",\"shown\":\"\"}"
            }
        },
        "undocumented": true,
        "name": "options",
        "longname": "options",
        "kind": "member",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                282,
                294
            ],
            "filename": "Ui.js",
            "lineno": 8,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003884",
                "name": "children",
                "type": "ArrayExpression",
                "value": "[]"
            }
        },
        "undocumented": true,
        "name": "children",
        "longname": "options.children",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                300,
                315
            ],
            "filename": "Ui.js",
            "lineno": 9,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003886",
                "name": "disabled",
                "type": "Literal",
                "value": false
            }
        },
        "undocumented": true,
        "name": "disabled",
        "longname": "options.disabled",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                321,
                335
            ],
            "filename": "Ui.js",
            "lineno": 10,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003888",
                "name": "effect",
                "type": "Literal",
                "value": "fade"
            }
        },
        "undocumented": true,
        "name": "effect",
        "longname": "options.effect",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                341,
                352
            ],
            "filename": "Ui.js",
            "lineno": 11,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003890",
                "name": "show",
                "type": "Literal",
                "value": false
            }
        },
        "undocumented": true,
        "name": "show",
        "longname": "options.show",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                377,
                398
            ],
            "filename": "Ui.js",
            "lineno": 14,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003892",
                "name": "hidden",
                "type": "MemberExpression",
                "value": "Function.Noop"
            }
        },
        "undocumented": true,
        "name": "hidden",
        "longname": "options.hidden",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                404,
                426
            ],
            "filename": "Ui.js",
            "lineno": 15,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003896",
                "name": "mounted",
                "type": "MemberExpression",
                "value": "Function.Noop"
            }
        },
        "undocumented": true,
        "name": "mounted",
        "longname": "options.mounted",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                432,
                452
            ],
            "filename": "Ui.js",
            "lineno": 16,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003900",
                "name": "ready",
                "type": "MemberExpression",
                "value": "Function.Noop"
            }
        },
        "undocumented": true,
        "name": "ready",
        "longname": "options.ready",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                458,
                480
            ],
            "filename": "Ui.js",
            "lineno": 17,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003904",
                "name": "resized",
                "type": "MemberExpression",
                "value": "Function.Noop"
            }
        },
        "undocumented": true,
        "name": "resized",
        "longname": "options.resized",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                486,
                508
            ],
            "filename": "Ui.js",
            "lineno": 18,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003908",
                "name": "updated",
                "type": "MemberExpression",
                "value": "Function.Noop"
            }
        },
        "undocumented": true,
        "name": "updated",
        "longname": "options.updated",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                514,
                534
            ],
            "filename": "Ui.js",
            "lineno": 19,
            "columnno": 3,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003912",
                "name": "shown",
                "type": "MemberExpression",
                "value": "Function.Noop"
            }
        },
        "undocumented": true,
        "name": "shown",
        "longname": "options.shown",
        "kind": "member",
        "memberof": "options",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                544,
                848
            ],
            "filename": "Ui.js",
            "lineno": 21,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003916",
                "name": "_children",
                "type": "FunctionExpression"
            },
            "vars": {
                "_e": "_children~_e",
                "": null
            }
        },
        "undocumented": true,
        "name": "_children",
        "longname": "_children",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                593,
                613
            ],
            "filename": "Ui.js",
            "lineno": 22,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003923",
                "name": "_e",
                "type": "MemberExpression",
                "value": "this.element[0]"
            }
        },
        "undocumented": true,
        "name": "_e",
        "longname": "_children~_e",
        "kind": "member",
        "memberof": "_children",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                688,
                701
            ],
            "filename": "Ui.js",
            "lineno": 24,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003945",
                "name": "filter",
                "type": "Literal",
                "value": true
            }
        },
        "undocumented": true,
        "name": "filter",
        "longname": "<anonymous>~filter",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                787,
                801
            ],
            "filename": "Ui.js",
            "lineno": 27,
            "columnno": 6,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003973",
                "name": "filter",
                "type": "Literal",
                "funcscope": "<anonymous>",
                "value": false,
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "filter",
        "longname": "<anonymous>~filter",
        "kind": "member",
        "memberof": "<anonymous>",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                853,
                2028
            ],
            "filename": "Ui.js",
            "lineno": 33,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100003978",
                "name": "_create",
                "type": "FunctionExpression"
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "_create",
        "longname": "_create",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                1026,
                1052
            ],
            "filename": "Ui.js",
            "lineno": 37,
            "columnno": 5,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004023",
                "name": "ee.innerHTML",
                "type": "MemberExpression",
                "value": "e.innerHTML",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "innerHTML",
        "longname": "ee.innerHTML",
        "kind": "member",
        "memberof": "ee",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2033,
                2326
            ],
            "filename": "Ui.js",
            "lineno": 71,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004149",
                "name": "_ProcessDataConfigs",
                "type": "FunctionExpression"
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "_ProcessDataConfigs",
        "longname": "_ProcessDataConfigs",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2331,
                3230
            ],
            "filename": "Ui.js",
            "lineno": 81,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004200",
                "name": "_triggerHandler",
                "type": "FunctionExpression"
            },
            "vars": {
                "prop": "_triggerHandler~prop",
                "orig": "_triggerHandler~orig",
                "callback": "_triggerHandler~callback",
                "data": "_triggerHandler~data",
                "event": "_triggerHandler~event",
                "event.type": "_triggerHandler~event.type",
                "event.target": "_triggerHandler~event.target",
                "event[undefined]": "_triggerHandler~event.undefined]"
            }
        },
        "undocumented": true,
        "name": "_triggerHandler",
        "longname": "_triggerHandler",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2389,
                2393
            ],
            "filename": "Ui.js",
            "lineno": 82,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004207",
                "name": "prop"
            }
        },
        "undocumented": true,
        "name": "prop",
        "longname": "_triggerHandler~prop",
        "kind": "member",
        "memberof": "_triggerHandler",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2395,
                2399
            ],
            "filename": "Ui.js",
            "lineno": 82,
            "columnno": 14,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004209",
                "name": "orig"
            }
        },
        "undocumented": true,
        "name": "orig",
        "longname": "_triggerHandler~orig",
        "kind": "member",
        "memberof": "_triggerHandler",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2410,
                2441
            ],
            "filename": "Ui.js",
            "lineno": 83,
            "columnno": 8,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004212",
                "name": "callback",
                "type": "MemberExpression",
                "value": "this.options[undefined]"
            }
        },
        "undocumented": true,
        "name": "callback",
        "longname": "_triggerHandler~callback",
        "kind": "member",
        "memberof": "_triggerHandler",
        "scope": "inner",
        "params": []
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2450,
                2467
            ],
            "filename": "Ui.js",
            "lineno": 85,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004220",
                "name": "data",
                "type": "LogicalExpression",
                "funcscope": "_triggerHandler",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "data",
        "longname": "_triggerHandler~data",
        "kind": "member",
        "memberof": "_triggerHandler",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2474,
                2498
            ],
            "filename": "Ui.js",
            "lineno": 86,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004226",
                "name": "event",
                "type": "CallExpression",
                "funcscope": "_triggerHandler",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "event",
        "longname": "_triggerHandler~event",
        "kind": "member",
        "memberof": "_triggerHandler",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2505,
                2618
            ],
            "filename": "Ui.js",
            "lineno": 87,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004234",
                "name": "event.type",
                "type": "CallExpression",
                "funcscope": "_triggerHandler",
                "value": "",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "type",
        "longname": "_triggerHandler~event.type",
        "kind": "member",
        "memberof": "_triggerHandler~event",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2736,
                2768
            ],
            "filename": "Ui.js",
            "lineno": 93,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004254",
                "name": "event.target",
                "type": "MemberExpression",
                "funcscope": "_triggerHandler",
                "value": "this.element[0]",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "target",
        "longname": "_triggerHandler~event.target",
        "kind": "member",
        "memberof": "_triggerHandler~event",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2838,
                2864
            ],
            "filename": "Ui.js",
            "lineno": 96,
            "columnno": 4,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004264",
                "name": "orig",
                "type": "MemberExpression",
                "funcscope": "_triggerHandler",
                "value": "event.originalEvent",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "orig",
        "longname": "_triggerHandler~orig",
        "kind": "member",
        "memberof": "_triggerHandler",
        "scope": "inner"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                2957,
                2985
            ],
            "filename": "Ui.js",
            "lineno": 100,
            "columnno": 7,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004283",
                "name": "event[undefined]",
                "type": "MemberExpression",
                "funcscope": "_triggerHandler",
                "value": "orig[undefined]",
                "paramnames": []
            }
        },
        "undocumented": true,
        "name": "undefined]",
        "longname": "_triggerHandler~event.undefined]",
        "kind": "member",
        "memberof": "_triggerHandler~event",
        "scope": "static"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3235,
                3376
            ],
            "filename": "Ui.js",
            "lineno": 110,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004328",
                "name": "Hide",
                "type": "FunctionExpression"
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "Hide",
        "longname": "Hide",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3381,
                3470
            ],
            "filename": "Ui.js",
            "lineno": 115,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004355",
                "name": "Update",
                "type": "FunctionExpression"
            }
        },
        "undocumented": true,
        "name": "Update",
        "longname": "Update",
        "kind": "function",
        "scope": "global"
    },
    {
        "comment": "",
        "meta": {
            "range": [
                3475,
                3654
            ],
            "filename": "Ui.js",
            "lineno": 119,
            "columnno": 2,
            "path": "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets",
            "code": {
                "id": "astnode100004372",
                "name": "Show",
                "type": "FunctionExpression"
            },
            "vars": {
                "": null
            }
        },
        "undocumented": true,
        "name": "Show",
        "longname": "Show",
        "kind": "function",
        "scope": "global"
    },
    {
        "kind": "package",
        "longname": "package:undefined",
        "files": [
            "D:\\TTS\\development\\ui.core\\src\\index.js",
            "D:\\TTS\\development\\ui.core\\src\\ActionHandlers\\Hide.js",
            "D:\\TTS\\development\\ui.core\\src\\ActionHandlers\\index.js",
            "D:\\TTS\\development\\ui.core\\src\\ActionHandlers\\Show.js",
            "D:\\TTS\\development\\ui.core\\src\\ActionHandlers\\Toggle.js",
            "D:\\TTS\\development\\ui.core\\src\\jQuery\\Action.js",
            "D:\\TTS\\development\\ui.core\\src\\jQuery\\Data.js",
            "D:\\TTS\\development\\ui.core\\src\\jQuery\\Height.js",
            "D:\\TTS\\development\\ui.core\\src\\jQuery\\Include.js",
            "D:\\TTS\\development\\ui.core\\src\\jQuery\\index.js",
            "D:\\TTS\\development\\ui.core\\src\\jQuery\\Property.js",
            "D:\\TTS\\development\\ui.core\\src\\jQuery\\Value.js",
            "D:\\TTS\\development\\ui.core\\src\\jQuery\\ValueOf.js",
            "D:\\TTS\\development\\ui.core\\src\\jQuery\\Width.js",
            "D:\\TTS\\development\\ui.core\\src\\Observers\\Hidden.js",
            "D:\\TTS\\development\\ui.core\\src\\Observers\\index.js",
            "D:\\TTS\\development\\ui.core\\src\\Observers\\Mounted.js",
            "D:\\TTS\\development\\ui.core\\src\\Observers\\ParseStyle.js",
            "D:\\TTS\\development\\ui.core\\src\\Observers\\Resized.js",
            "D:\\TTS\\development\\ui.core\\src\\Observers\\Shown.js",
            "D:\\TTS\\development\\ui.core\\src\\Ui\\Builder.js",
            "D:\\TTS\\development\\ui.core\\src\\Ui\\index.js",
            "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets\\App.js",
            "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets\\Dialog.js",
            "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets\\index.js",
            "D:\\TTS\\development\\ui.core\\src\\Ui\\Widgets\\Ui.js"
        ]
    }
]

})