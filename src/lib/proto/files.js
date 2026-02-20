/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.storage = (function() {

    /**
     * Namespace storage.
     * @exports storage
     * @namespace
     */
    var storage = {};

    storage.files = (function() {

        /**
         * Namespace files.
         * @memberof storage
         * @namespace
         */
        var files = {};

        files.StartUploadRequest = (function() {

            /**
             * Properties of a StartUploadRequest.
             * @memberof storage.files
             * @interface IStartUploadRequest
             * @property {string|null} [filename] StartUploadRequest filename
             * @property {string|null} [mimeType] StartUploadRequest mimeType
             * @property {number|Long|null} [size] StartUploadRequest size
             * @property {number|null} [chunkSize] StartUploadRequest chunkSize
             */

            /**
             * Constructs a new StartUploadRequest.
             * @memberof storage.files
             * @classdesc Represents a StartUploadRequest.
             * @implements IStartUploadRequest
             * @constructor
             * @param {storage.files.IStartUploadRequest=} [properties] Properties to set
             */
            function StartUploadRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartUploadRequest filename.
             * @member {string} filename
             * @memberof storage.files.StartUploadRequest
             * @instance
             */
            StartUploadRequest.prototype.filename = "";

            /**
             * StartUploadRequest mimeType.
             * @member {string} mimeType
             * @memberof storage.files.StartUploadRequest
             * @instance
             */
            StartUploadRequest.prototype.mimeType = "";

            /**
             * StartUploadRequest size.
             * @member {number|Long} size
             * @memberof storage.files.StartUploadRequest
             * @instance
             */
            StartUploadRequest.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * StartUploadRequest chunkSize.
             * @member {number} chunkSize
             * @memberof storage.files.StartUploadRequest
             * @instance
             */
            StartUploadRequest.prototype.chunkSize = 0;

            /**
             * Creates a new StartUploadRequest instance using the specified properties.
             * @function create
             * @memberof storage.files.StartUploadRequest
             * @static
             * @param {storage.files.IStartUploadRequest=} [properties] Properties to set
             * @returns {storage.files.StartUploadRequest} StartUploadRequest instance
             */
            StartUploadRequest.create = function create(properties) {
                return new StartUploadRequest(properties);
            };

            /**
             * Encodes the specified StartUploadRequest message. Does not implicitly {@link storage.files.StartUploadRequest.verify|verify} messages.
             * @function encode
             * @memberof storage.files.StartUploadRequest
             * @static
             * @param {storage.files.IStartUploadRequest} message StartUploadRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartUploadRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.filename);
                if (message.mimeType != null && Object.hasOwnProperty.call(message, "mimeType"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.mimeType);
                if (message.size != null && Object.hasOwnProperty.call(message, "size"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.size);
                if (message.chunkSize != null && Object.hasOwnProperty.call(message, "chunkSize"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.chunkSize);
                return writer;
            };

            /**
             * Encodes the specified StartUploadRequest message, length delimited. Does not implicitly {@link storage.files.StartUploadRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.StartUploadRequest
             * @static
             * @param {storage.files.IStartUploadRequest} message StartUploadRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartUploadRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartUploadRequest message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.StartUploadRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.StartUploadRequest} StartUploadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartUploadRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.StartUploadRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.filename = reader.string();
                            break;
                        }
                    case 2: {
                            message.mimeType = reader.string();
                            break;
                        }
                    case 3: {
                            message.size = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.chunkSize = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartUploadRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.StartUploadRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.StartUploadRequest} StartUploadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartUploadRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartUploadRequest message.
             * @function verify
             * @memberof storage.files.StartUploadRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartUploadRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.filename != null && message.hasOwnProperty("filename"))
                    if (!$util.isString(message.filename))
                        return "filename: string expected";
                if (message.mimeType != null && message.hasOwnProperty("mimeType"))
                    if (!$util.isString(message.mimeType))
                        return "mimeType: string expected";
                if (message.size != null && message.hasOwnProperty("size"))
                    if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                        return "size: integer|Long expected";
                if (message.chunkSize != null && message.hasOwnProperty("chunkSize"))
                    if (!$util.isInteger(message.chunkSize))
                        return "chunkSize: integer expected";
                return null;
            };

            /**
             * Creates a StartUploadRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.StartUploadRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.StartUploadRequest} StartUploadRequest
             */
            StartUploadRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.StartUploadRequest)
                    return object;
                var message = new $root.storage.files.StartUploadRequest();
                if (object.filename != null)
                    message.filename = String(object.filename);
                if (object.mimeType != null)
                    message.mimeType = String(object.mimeType);
                if (object.size != null)
                    if ($util.Long)
                        (message.size = $util.Long.fromValue(object.size)).unsigned = true;
                    else if (typeof object.size === "string")
                        message.size = parseInt(object.size, 10);
                    else if (typeof object.size === "number")
                        message.size = object.size;
                    else if (typeof object.size === "object")
                        message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
                if (object.chunkSize != null)
                    message.chunkSize = object.chunkSize >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a StartUploadRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.StartUploadRequest
             * @static
             * @param {storage.files.StartUploadRequest} message StartUploadRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartUploadRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.filename = "";
                    object.mimeType = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.size = options.longs === String ? "0" : 0;
                    object.chunkSize = 0;
                }
                if (message.filename != null && message.hasOwnProperty("filename"))
                    object.filename = message.filename;
                if (message.mimeType != null && message.hasOwnProperty("mimeType"))
                    object.mimeType = message.mimeType;
                if (message.size != null && message.hasOwnProperty("size"))
                    if (typeof message.size === "number")
                        object.size = options.longs === String ? String(message.size) : message.size;
                    else
                        object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
                if (message.chunkSize != null && message.hasOwnProperty("chunkSize"))
                    object.chunkSize = message.chunkSize;
                return object;
            };

            /**
             * Converts this StartUploadRequest to JSON.
             * @function toJSON
             * @memberof storage.files.StartUploadRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartUploadRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartUploadRequest
             * @function getTypeUrl
             * @memberof storage.files.StartUploadRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartUploadRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.StartUploadRequest";
            };

            return StartUploadRequest;
        })();

        files.StartUploadReply = (function() {

            /**
             * Properties of a StartUploadReply.
             * @memberof storage.files
             * @interface IStartUploadReply
             * @property {string|null} [uploadId] StartUploadReply uploadId
             * @property {number|null} [chunkSize] StartUploadReply chunkSize
             */

            /**
             * Constructs a new StartUploadReply.
             * @memberof storage.files
             * @classdesc Represents a StartUploadReply.
             * @implements IStartUploadReply
             * @constructor
             * @param {storage.files.IStartUploadReply=} [properties] Properties to set
             */
            function StartUploadReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StartUploadReply uploadId.
             * @member {string} uploadId
             * @memberof storage.files.StartUploadReply
             * @instance
             */
            StartUploadReply.prototype.uploadId = "";

            /**
             * StartUploadReply chunkSize.
             * @member {number} chunkSize
             * @memberof storage.files.StartUploadReply
             * @instance
             */
            StartUploadReply.prototype.chunkSize = 0;

            /**
             * Creates a new StartUploadReply instance using the specified properties.
             * @function create
             * @memberof storage.files.StartUploadReply
             * @static
             * @param {storage.files.IStartUploadReply=} [properties] Properties to set
             * @returns {storage.files.StartUploadReply} StartUploadReply instance
             */
            StartUploadReply.create = function create(properties) {
                return new StartUploadReply(properties);
            };

            /**
             * Encodes the specified StartUploadReply message. Does not implicitly {@link storage.files.StartUploadReply.verify|verify} messages.
             * @function encode
             * @memberof storage.files.StartUploadReply
             * @static
             * @param {storage.files.IStartUploadReply} message StartUploadReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartUploadReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uploadId != null && Object.hasOwnProperty.call(message, "uploadId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uploadId);
                if (message.chunkSize != null && Object.hasOwnProperty.call(message, "chunkSize"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.chunkSize);
                return writer;
            };

            /**
             * Encodes the specified StartUploadReply message, length delimited. Does not implicitly {@link storage.files.StartUploadReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.StartUploadReply
             * @static
             * @param {storage.files.IStartUploadReply} message StartUploadReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StartUploadReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StartUploadReply message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.StartUploadReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.StartUploadReply} StartUploadReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartUploadReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.StartUploadReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.uploadId = reader.string();
                            break;
                        }
                    case 2: {
                            message.chunkSize = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StartUploadReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.StartUploadReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.StartUploadReply} StartUploadReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StartUploadReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StartUploadReply message.
             * @function verify
             * @memberof storage.files.StartUploadReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StartUploadReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uploadId != null && message.hasOwnProperty("uploadId"))
                    if (!$util.isString(message.uploadId))
                        return "uploadId: string expected";
                if (message.chunkSize != null && message.hasOwnProperty("chunkSize"))
                    if (!$util.isInteger(message.chunkSize))
                        return "chunkSize: integer expected";
                return null;
            };

            /**
             * Creates a StartUploadReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.StartUploadReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.StartUploadReply} StartUploadReply
             */
            StartUploadReply.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.StartUploadReply)
                    return object;
                var message = new $root.storage.files.StartUploadReply();
                if (object.uploadId != null)
                    message.uploadId = String(object.uploadId);
                if (object.chunkSize != null)
                    message.chunkSize = object.chunkSize >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a StartUploadReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.StartUploadReply
             * @static
             * @param {storage.files.StartUploadReply} message StartUploadReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StartUploadReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uploadId = "";
                    object.chunkSize = 0;
                }
                if (message.uploadId != null && message.hasOwnProperty("uploadId"))
                    object.uploadId = message.uploadId;
                if (message.chunkSize != null && message.hasOwnProperty("chunkSize"))
                    object.chunkSize = message.chunkSize;
                return object;
            };

            /**
             * Converts this StartUploadReply to JSON.
             * @function toJSON
             * @memberof storage.files.StartUploadReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StartUploadReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StartUploadReply
             * @function getTypeUrl
             * @memberof storage.files.StartUploadReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StartUploadReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.StartUploadReply";
            };

            return StartUploadReply;
        })();

        files.UploadChunkRequest = (function() {

            /**
             * Properties of an UploadChunkRequest.
             * @memberof storage.files
             * @interface IUploadChunkRequest
             * @property {string|null} [uploadId] UploadChunkRequest uploadId
             * @property {number|null} [chunkIndex] UploadChunkRequest chunkIndex
             * @property {Uint8Array|null} [data] UploadChunkRequest data
             */

            /**
             * Constructs a new UploadChunkRequest.
             * @memberof storage.files
             * @classdesc Represents an UploadChunkRequest.
             * @implements IUploadChunkRequest
             * @constructor
             * @param {storage.files.IUploadChunkRequest=} [properties] Properties to set
             */
            function UploadChunkRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UploadChunkRequest uploadId.
             * @member {string} uploadId
             * @memberof storage.files.UploadChunkRequest
             * @instance
             */
            UploadChunkRequest.prototype.uploadId = "";

            /**
             * UploadChunkRequest chunkIndex.
             * @member {number} chunkIndex
             * @memberof storage.files.UploadChunkRequest
             * @instance
             */
            UploadChunkRequest.prototype.chunkIndex = 0;

            /**
             * UploadChunkRequest data.
             * @member {Uint8Array} data
             * @memberof storage.files.UploadChunkRequest
             * @instance
             */
            UploadChunkRequest.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new UploadChunkRequest instance using the specified properties.
             * @function create
             * @memberof storage.files.UploadChunkRequest
             * @static
             * @param {storage.files.IUploadChunkRequest=} [properties] Properties to set
             * @returns {storage.files.UploadChunkRequest} UploadChunkRequest instance
             */
            UploadChunkRequest.create = function create(properties) {
                return new UploadChunkRequest(properties);
            };

            /**
             * Encodes the specified UploadChunkRequest message. Does not implicitly {@link storage.files.UploadChunkRequest.verify|verify} messages.
             * @function encode
             * @memberof storage.files.UploadChunkRequest
             * @static
             * @param {storage.files.IUploadChunkRequest} message UploadChunkRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UploadChunkRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uploadId != null && Object.hasOwnProperty.call(message, "uploadId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uploadId);
                if (message.chunkIndex != null && Object.hasOwnProperty.call(message, "chunkIndex"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.chunkIndex);
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
                return writer;
            };

            /**
             * Encodes the specified UploadChunkRequest message, length delimited. Does not implicitly {@link storage.files.UploadChunkRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.UploadChunkRequest
             * @static
             * @param {storage.files.IUploadChunkRequest} message UploadChunkRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UploadChunkRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UploadChunkRequest message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.UploadChunkRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.UploadChunkRequest} UploadChunkRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UploadChunkRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.UploadChunkRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.uploadId = reader.string();
                            break;
                        }
                    case 2: {
                            message.chunkIndex = reader.uint32();
                            break;
                        }
                    case 3: {
                            message.data = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UploadChunkRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.UploadChunkRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.UploadChunkRequest} UploadChunkRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UploadChunkRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UploadChunkRequest message.
             * @function verify
             * @memberof storage.files.UploadChunkRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UploadChunkRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uploadId != null && message.hasOwnProperty("uploadId"))
                    if (!$util.isString(message.uploadId))
                        return "uploadId: string expected";
                if (message.chunkIndex != null && message.hasOwnProperty("chunkIndex"))
                    if (!$util.isInteger(message.chunkIndex))
                        return "chunkIndex: integer expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            /**
             * Creates an UploadChunkRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.UploadChunkRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.UploadChunkRequest} UploadChunkRequest
             */
            UploadChunkRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.UploadChunkRequest)
                    return object;
                var message = new $root.storage.files.UploadChunkRequest();
                if (object.uploadId != null)
                    message.uploadId = String(object.uploadId);
                if (object.chunkIndex != null)
                    message.chunkIndex = object.chunkIndex >>> 0;
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length >= 0)
                        message.data = object.data;
                return message;
            };

            /**
             * Creates a plain object from an UploadChunkRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.UploadChunkRequest
             * @static
             * @param {storage.files.UploadChunkRequest} message UploadChunkRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UploadChunkRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uploadId = "";
                    object.chunkIndex = 0;
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                }
                if (message.uploadId != null && message.hasOwnProperty("uploadId"))
                    object.uploadId = message.uploadId;
                if (message.chunkIndex != null && message.hasOwnProperty("chunkIndex"))
                    object.chunkIndex = message.chunkIndex;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };

            /**
             * Converts this UploadChunkRequest to JSON.
             * @function toJSON
             * @memberof storage.files.UploadChunkRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UploadChunkRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UploadChunkRequest
             * @function getTypeUrl
             * @memberof storage.files.UploadChunkRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UploadChunkRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.UploadChunkRequest";
            };

            return UploadChunkRequest;
        })();

        /**
         * UploadStatus enum.
         * @name storage.files.UploadStatus
         * @enum {number}
         * @property {number} IN_PROGRESS=0 IN_PROGRESS value
         * @property {number} COMPLETE=1 COMPLETE value
         * @property {number} ERROR=2 ERROR value
         */
        files.UploadStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IN_PROGRESS"] = 0;
            values[valuesById[1] = "COMPLETE"] = 1;
            values[valuesById[2] = "ERROR"] = 2;
            return values;
        })();

        files.UploadChunkReply = (function() {

            /**
             * Properties of an UploadChunkReply.
             * @memberof storage.files
             * @interface IUploadChunkReply
             * @property {storage.files.UploadStatus|null} [status] UploadChunkReply status
             * @property {number|Long|null} [bytesReceived] UploadChunkReply bytesReceived
             * @property {number|null} [nextChunkIndex] UploadChunkReply nextChunkIndex
             */

            /**
             * Constructs a new UploadChunkReply.
             * @memberof storage.files
             * @classdesc Represents an UploadChunkReply.
             * @implements IUploadChunkReply
             * @constructor
             * @param {storage.files.IUploadChunkReply=} [properties] Properties to set
             */
            function UploadChunkReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UploadChunkReply status.
             * @member {storage.files.UploadStatus} status
             * @memberof storage.files.UploadChunkReply
             * @instance
             */
            UploadChunkReply.prototype.status = 0;

            /**
             * UploadChunkReply bytesReceived.
             * @member {number|Long} bytesReceived
             * @memberof storage.files.UploadChunkReply
             * @instance
             */
            UploadChunkReply.prototype.bytesReceived = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UploadChunkReply nextChunkIndex.
             * @member {number} nextChunkIndex
             * @memberof storage.files.UploadChunkReply
             * @instance
             */
            UploadChunkReply.prototype.nextChunkIndex = 0;

            /**
             * Creates a new UploadChunkReply instance using the specified properties.
             * @function create
             * @memberof storage.files.UploadChunkReply
             * @static
             * @param {storage.files.IUploadChunkReply=} [properties] Properties to set
             * @returns {storage.files.UploadChunkReply} UploadChunkReply instance
             */
            UploadChunkReply.create = function create(properties) {
                return new UploadChunkReply(properties);
            };

            /**
             * Encodes the specified UploadChunkReply message. Does not implicitly {@link storage.files.UploadChunkReply.verify|verify} messages.
             * @function encode
             * @memberof storage.files.UploadChunkReply
             * @static
             * @param {storage.files.IUploadChunkReply} message UploadChunkReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UploadChunkReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.bytesReceived != null && Object.hasOwnProperty.call(message, "bytesReceived"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.bytesReceived);
                if (message.nextChunkIndex != null && Object.hasOwnProperty.call(message, "nextChunkIndex"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.nextChunkIndex);
                return writer;
            };

            /**
             * Encodes the specified UploadChunkReply message, length delimited. Does not implicitly {@link storage.files.UploadChunkReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.UploadChunkReply
             * @static
             * @param {storage.files.IUploadChunkReply} message UploadChunkReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UploadChunkReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UploadChunkReply message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.UploadChunkReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.UploadChunkReply} UploadChunkReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UploadChunkReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.UploadChunkReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.status = reader.int32();
                            break;
                        }
                    case 2: {
                            message.bytesReceived = reader.uint64();
                            break;
                        }
                    case 3: {
                            message.nextChunkIndex = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UploadChunkReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.UploadChunkReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.UploadChunkReply} UploadChunkReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UploadChunkReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UploadChunkReply message.
             * @function verify
             * @memberof storage.files.UploadChunkReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UploadChunkReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.bytesReceived != null && message.hasOwnProperty("bytesReceived"))
                    if (!$util.isInteger(message.bytesReceived) && !(message.bytesReceived && $util.isInteger(message.bytesReceived.low) && $util.isInteger(message.bytesReceived.high)))
                        return "bytesReceived: integer|Long expected";
                if (message.nextChunkIndex != null && message.hasOwnProperty("nextChunkIndex"))
                    if (!$util.isInteger(message.nextChunkIndex))
                        return "nextChunkIndex: integer expected";
                return null;
            };

            /**
             * Creates an UploadChunkReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.UploadChunkReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.UploadChunkReply} UploadChunkReply
             */
            UploadChunkReply.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.UploadChunkReply)
                    return object;
                var message = new $root.storage.files.UploadChunkReply();
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "IN_PROGRESS":
                case 0:
                    message.status = 0;
                    break;
                case "COMPLETE":
                case 1:
                    message.status = 1;
                    break;
                case "ERROR":
                case 2:
                    message.status = 2;
                    break;
                }
                if (object.bytesReceived != null)
                    if ($util.Long)
                        (message.bytesReceived = $util.Long.fromValue(object.bytesReceived)).unsigned = true;
                    else if (typeof object.bytesReceived === "string")
                        message.bytesReceived = parseInt(object.bytesReceived, 10);
                    else if (typeof object.bytesReceived === "number")
                        message.bytesReceived = object.bytesReceived;
                    else if (typeof object.bytesReceived === "object")
                        message.bytesReceived = new $util.LongBits(object.bytesReceived.low >>> 0, object.bytesReceived.high >>> 0).toNumber(true);
                if (object.nextChunkIndex != null)
                    message.nextChunkIndex = object.nextChunkIndex >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an UploadChunkReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.UploadChunkReply
             * @static
             * @param {storage.files.UploadChunkReply} message UploadChunkReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UploadChunkReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = options.enums === String ? "IN_PROGRESS" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.bytesReceived = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bytesReceived = options.longs === String ? "0" : 0;
                    object.nextChunkIndex = 0;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.storage.files.UploadStatus[message.status] === undefined ? message.status : $root.storage.files.UploadStatus[message.status] : message.status;
                if (message.bytesReceived != null && message.hasOwnProperty("bytesReceived"))
                    if (typeof message.bytesReceived === "number")
                        object.bytesReceived = options.longs === String ? String(message.bytesReceived) : message.bytesReceived;
                    else
                        object.bytesReceived = options.longs === String ? $util.Long.prototype.toString.call(message.bytesReceived) : options.longs === Number ? new $util.LongBits(message.bytesReceived.low >>> 0, message.bytesReceived.high >>> 0).toNumber(true) : message.bytesReceived;
                if (message.nextChunkIndex != null && message.hasOwnProperty("nextChunkIndex"))
                    object.nextChunkIndex = message.nextChunkIndex;
                return object;
            };

            /**
             * Converts this UploadChunkReply to JSON.
             * @function toJSON
             * @memberof storage.files.UploadChunkReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UploadChunkReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UploadChunkReply
             * @function getTypeUrl
             * @memberof storage.files.UploadChunkReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UploadChunkReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.UploadChunkReply";
            };

            return UploadChunkReply;
        })();

        files.UploadStatusRequest = (function() {

            /**
             * Properties of an UploadStatusRequest.
             * @memberof storage.files
             * @interface IUploadStatusRequest
             * @property {string|null} [uploadId] UploadStatusRequest uploadId
             */

            /**
             * Constructs a new UploadStatusRequest.
             * @memberof storage.files
             * @classdesc Represents an UploadStatusRequest.
             * @implements IUploadStatusRequest
             * @constructor
             * @param {storage.files.IUploadStatusRequest=} [properties] Properties to set
             */
            function UploadStatusRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UploadStatusRequest uploadId.
             * @member {string} uploadId
             * @memberof storage.files.UploadStatusRequest
             * @instance
             */
            UploadStatusRequest.prototype.uploadId = "";

            /**
             * Creates a new UploadStatusRequest instance using the specified properties.
             * @function create
             * @memberof storage.files.UploadStatusRequest
             * @static
             * @param {storage.files.IUploadStatusRequest=} [properties] Properties to set
             * @returns {storage.files.UploadStatusRequest} UploadStatusRequest instance
             */
            UploadStatusRequest.create = function create(properties) {
                return new UploadStatusRequest(properties);
            };

            /**
             * Encodes the specified UploadStatusRequest message. Does not implicitly {@link storage.files.UploadStatusRequest.verify|verify} messages.
             * @function encode
             * @memberof storage.files.UploadStatusRequest
             * @static
             * @param {storage.files.IUploadStatusRequest} message UploadStatusRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UploadStatusRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uploadId != null && Object.hasOwnProperty.call(message, "uploadId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uploadId);
                return writer;
            };

            /**
             * Encodes the specified UploadStatusRequest message, length delimited. Does not implicitly {@link storage.files.UploadStatusRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.UploadStatusRequest
             * @static
             * @param {storage.files.IUploadStatusRequest} message UploadStatusRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UploadStatusRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UploadStatusRequest message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.UploadStatusRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.UploadStatusRequest} UploadStatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UploadStatusRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.UploadStatusRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.uploadId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UploadStatusRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.UploadStatusRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.UploadStatusRequest} UploadStatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UploadStatusRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UploadStatusRequest message.
             * @function verify
             * @memberof storage.files.UploadStatusRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UploadStatusRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uploadId != null && message.hasOwnProperty("uploadId"))
                    if (!$util.isString(message.uploadId))
                        return "uploadId: string expected";
                return null;
            };

            /**
             * Creates an UploadStatusRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.UploadStatusRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.UploadStatusRequest} UploadStatusRequest
             */
            UploadStatusRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.UploadStatusRequest)
                    return object;
                var message = new $root.storage.files.UploadStatusRequest();
                if (object.uploadId != null)
                    message.uploadId = String(object.uploadId);
                return message;
            };

            /**
             * Creates a plain object from an UploadStatusRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.UploadStatusRequest
             * @static
             * @param {storage.files.UploadStatusRequest} message UploadStatusRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UploadStatusRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.uploadId = "";
                if (message.uploadId != null && message.hasOwnProperty("uploadId"))
                    object.uploadId = message.uploadId;
                return object;
            };

            /**
             * Converts this UploadStatusRequest to JSON.
             * @function toJSON
             * @memberof storage.files.UploadStatusRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UploadStatusRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UploadStatusRequest
             * @function getTypeUrl
             * @memberof storage.files.UploadStatusRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UploadStatusRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.UploadStatusRequest";
            };

            return UploadStatusRequest;
        })();

        files.UploadStatusReply = (function() {

            /**
             * Properties of an UploadStatusReply.
             * @memberof storage.files
             * @interface IUploadStatusReply
             * @property {storage.files.UploadStatus|null} [status] UploadStatusReply status
             * @property {number|Long|null} [bytesReceived] UploadStatusReply bytesReceived
             * @property {number|Long|null} [expectedSize] UploadStatusReply expectedSize
             * @property {number|null} [nextChunkIndex] UploadStatusReply nextChunkIndex
             */

            /**
             * Constructs a new UploadStatusReply.
             * @memberof storage.files
             * @classdesc Represents an UploadStatusReply.
             * @implements IUploadStatusReply
             * @constructor
             * @param {storage.files.IUploadStatusReply=} [properties] Properties to set
             */
            function UploadStatusReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UploadStatusReply status.
             * @member {storage.files.UploadStatus} status
             * @memberof storage.files.UploadStatusReply
             * @instance
             */
            UploadStatusReply.prototype.status = 0;

            /**
             * UploadStatusReply bytesReceived.
             * @member {number|Long} bytesReceived
             * @memberof storage.files.UploadStatusReply
             * @instance
             */
            UploadStatusReply.prototype.bytesReceived = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UploadStatusReply expectedSize.
             * @member {number|Long} expectedSize
             * @memberof storage.files.UploadStatusReply
             * @instance
             */
            UploadStatusReply.prototype.expectedSize = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UploadStatusReply nextChunkIndex.
             * @member {number} nextChunkIndex
             * @memberof storage.files.UploadStatusReply
             * @instance
             */
            UploadStatusReply.prototype.nextChunkIndex = 0;

            /**
             * Creates a new UploadStatusReply instance using the specified properties.
             * @function create
             * @memberof storage.files.UploadStatusReply
             * @static
             * @param {storage.files.IUploadStatusReply=} [properties] Properties to set
             * @returns {storage.files.UploadStatusReply} UploadStatusReply instance
             */
            UploadStatusReply.create = function create(properties) {
                return new UploadStatusReply(properties);
            };

            /**
             * Encodes the specified UploadStatusReply message. Does not implicitly {@link storage.files.UploadStatusReply.verify|verify} messages.
             * @function encode
             * @memberof storage.files.UploadStatusReply
             * @static
             * @param {storage.files.IUploadStatusReply} message UploadStatusReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UploadStatusReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
                if (message.bytesReceived != null && Object.hasOwnProperty.call(message, "bytesReceived"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.bytesReceived);
                if (message.expectedSize != null && Object.hasOwnProperty.call(message, "expectedSize"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.expectedSize);
                if (message.nextChunkIndex != null && Object.hasOwnProperty.call(message, "nextChunkIndex"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.nextChunkIndex);
                return writer;
            };

            /**
             * Encodes the specified UploadStatusReply message, length delimited. Does not implicitly {@link storage.files.UploadStatusReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.UploadStatusReply
             * @static
             * @param {storage.files.IUploadStatusReply} message UploadStatusReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UploadStatusReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UploadStatusReply message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.UploadStatusReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.UploadStatusReply} UploadStatusReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UploadStatusReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.UploadStatusReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.status = reader.int32();
                            break;
                        }
                    case 2: {
                            message.bytesReceived = reader.uint64();
                            break;
                        }
                    case 3: {
                            message.expectedSize = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.nextChunkIndex = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UploadStatusReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.UploadStatusReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.UploadStatusReply} UploadStatusReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UploadStatusReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UploadStatusReply message.
             * @function verify
             * @memberof storage.files.UploadStatusReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UploadStatusReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    switch (message.status) {
                    default:
                        return "status: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.bytesReceived != null && message.hasOwnProperty("bytesReceived"))
                    if (!$util.isInteger(message.bytesReceived) && !(message.bytesReceived && $util.isInteger(message.bytesReceived.low) && $util.isInteger(message.bytesReceived.high)))
                        return "bytesReceived: integer|Long expected";
                if (message.expectedSize != null && message.hasOwnProperty("expectedSize"))
                    if (!$util.isInteger(message.expectedSize) && !(message.expectedSize && $util.isInteger(message.expectedSize.low) && $util.isInteger(message.expectedSize.high)))
                        return "expectedSize: integer|Long expected";
                if (message.nextChunkIndex != null && message.hasOwnProperty("nextChunkIndex"))
                    if (!$util.isInteger(message.nextChunkIndex))
                        return "nextChunkIndex: integer expected";
                return null;
            };

            /**
             * Creates an UploadStatusReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.UploadStatusReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.UploadStatusReply} UploadStatusReply
             */
            UploadStatusReply.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.UploadStatusReply)
                    return object;
                var message = new $root.storage.files.UploadStatusReply();
                switch (object.status) {
                default:
                    if (typeof object.status === "number") {
                        message.status = object.status;
                        break;
                    }
                    break;
                case "IN_PROGRESS":
                case 0:
                    message.status = 0;
                    break;
                case "COMPLETE":
                case 1:
                    message.status = 1;
                    break;
                case "ERROR":
                case 2:
                    message.status = 2;
                    break;
                }
                if (object.bytesReceived != null)
                    if ($util.Long)
                        (message.bytesReceived = $util.Long.fromValue(object.bytesReceived)).unsigned = true;
                    else if (typeof object.bytesReceived === "string")
                        message.bytesReceived = parseInt(object.bytesReceived, 10);
                    else if (typeof object.bytesReceived === "number")
                        message.bytesReceived = object.bytesReceived;
                    else if (typeof object.bytesReceived === "object")
                        message.bytesReceived = new $util.LongBits(object.bytesReceived.low >>> 0, object.bytesReceived.high >>> 0).toNumber(true);
                if (object.expectedSize != null)
                    if ($util.Long)
                        (message.expectedSize = $util.Long.fromValue(object.expectedSize)).unsigned = true;
                    else if (typeof object.expectedSize === "string")
                        message.expectedSize = parseInt(object.expectedSize, 10);
                    else if (typeof object.expectedSize === "number")
                        message.expectedSize = object.expectedSize;
                    else if (typeof object.expectedSize === "object")
                        message.expectedSize = new $util.LongBits(object.expectedSize.low >>> 0, object.expectedSize.high >>> 0).toNumber(true);
                if (object.nextChunkIndex != null)
                    message.nextChunkIndex = object.nextChunkIndex >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an UploadStatusReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.UploadStatusReply
             * @static
             * @param {storage.files.UploadStatusReply} message UploadStatusReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UploadStatusReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.status = options.enums === String ? "IN_PROGRESS" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.bytesReceived = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.bytesReceived = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.expectedSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.expectedSize = options.longs === String ? "0" : 0;
                    object.nextChunkIndex = 0;
                }
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = options.enums === String ? $root.storage.files.UploadStatus[message.status] === undefined ? message.status : $root.storage.files.UploadStatus[message.status] : message.status;
                if (message.bytesReceived != null && message.hasOwnProperty("bytesReceived"))
                    if (typeof message.bytesReceived === "number")
                        object.bytesReceived = options.longs === String ? String(message.bytesReceived) : message.bytesReceived;
                    else
                        object.bytesReceived = options.longs === String ? $util.Long.prototype.toString.call(message.bytesReceived) : options.longs === Number ? new $util.LongBits(message.bytesReceived.low >>> 0, message.bytesReceived.high >>> 0).toNumber(true) : message.bytesReceived;
                if (message.expectedSize != null && message.hasOwnProperty("expectedSize"))
                    if (typeof message.expectedSize === "number")
                        object.expectedSize = options.longs === String ? String(message.expectedSize) : message.expectedSize;
                    else
                        object.expectedSize = options.longs === String ? $util.Long.prototype.toString.call(message.expectedSize) : options.longs === Number ? new $util.LongBits(message.expectedSize.low >>> 0, message.expectedSize.high >>> 0).toNumber(true) : message.expectedSize;
                if (message.nextChunkIndex != null && message.hasOwnProperty("nextChunkIndex"))
                    object.nextChunkIndex = message.nextChunkIndex;
                return object;
            };

            /**
             * Converts this UploadStatusReply to JSON.
             * @function toJSON
             * @memberof storage.files.UploadStatusReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UploadStatusReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UploadStatusReply
             * @function getTypeUrl
             * @memberof storage.files.UploadStatusReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UploadStatusReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.UploadStatusReply";
            };

            return UploadStatusReply;
        })();

        files.CompleteUploadRequest = (function() {

            /**
             * Properties of a CompleteUploadRequest.
             * @memberof storage.files
             * @interface ICompleteUploadRequest
             * @property {string|null} [uploadId] CompleteUploadRequest uploadId
             */

            /**
             * Constructs a new CompleteUploadRequest.
             * @memberof storage.files
             * @classdesc Represents a CompleteUploadRequest.
             * @implements ICompleteUploadRequest
             * @constructor
             * @param {storage.files.ICompleteUploadRequest=} [properties] Properties to set
             */
            function CompleteUploadRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CompleteUploadRequest uploadId.
             * @member {string} uploadId
             * @memberof storage.files.CompleteUploadRequest
             * @instance
             */
            CompleteUploadRequest.prototype.uploadId = "";

            /**
             * Creates a new CompleteUploadRequest instance using the specified properties.
             * @function create
             * @memberof storage.files.CompleteUploadRequest
             * @static
             * @param {storage.files.ICompleteUploadRequest=} [properties] Properties to set
             * @returns {storage.files.CompleteUploadRequest} CompleteUploadRequest instance
             */
            CompleteUploadRequest.create = function create(properties) {
                return new CompleteUploadRequest(properties);
            };

            /**
             * Encodes the specified CompleteUploadRequest message. Does not implicitly {@link storage.files.CompleteUploadRequest.verify|verify} messages.
             * @function encode
             * @memberof storage.files.CompleteUploadRequest
             * @static
             * @param {storage.files.ICompleteUploadRequest} message CompleteUploadRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompleteUploadRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uploadId != null && Object.hasOwnProperty.call(message, "uploadId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uploadId);
                return writer;
            };

            /**
             * Encodes the specified CompleteUploadRequest message, length delimited. Does not implicitly {@link storage.files.CompleteUploadRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.CompleteUploadRequest
             * @static
             * @param {storage.files.ICompleteUploadRequest} message CompleteUploadRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompleteUploadRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CompleteUploadRequest message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.CompleteUploadRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.CompleteUploadRequest} CompleteUploadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompleteUploadRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.CompleteUploadRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.uploadId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CompleteUploadRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.CompleteUploadRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.CompleteUploadRequest} CompleteUploadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompleteUploadRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CompleteUploadRequest message.
             * @function verify
             * @memberof storage.files.CompleteUploadRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CompleteUploadRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uploadId != null && message.hasOwnProperty("uploadId"))
                    if (!$util.isString(message.uploadId))
                        return "uploadId: string expected";
                return null;
            };

            /**
             * Creates a CompleteUploadRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.CompleteUploadRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.CompleteUploadRequest} CompleteUploadRequest
             */
            CompleteUploadRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.CompleteUploadRequest)
                    return object;
                var message = new $root.storage.files.CompleteUploadRequest();
                if (object.uploadId != null)
                    message.uploadId = String(object.uploadId);
                return message;
            };

            /**
             * Creates a plain object from a CompleteUploadRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.CompleteUploadRequest
             * @static
             * @param {storage.files.CompleteUploadRequest} message CompleteUploadRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CompleteUploadRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.uploadId = "";
                if (message.uploadId != null && message.hasOwnProperty("uploadId"))
                    object.uploadId = message.uploadId;
                return object;
            };

            /**
             * Converts this CompleteUploadRequest to JSON.
             * @function toJSON
             * @memberof storage.files.CompleteUploadRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CompleteUploadRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CompleteUploadRequest
             * @function getTypeUrl
             * @memberof storage.files.CompleteUploadRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CompleteUploadRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.CompleteUploadRequest";
            };

            return CompleteUploadRequest;
        })();

        files.CompleteUploadReply = (function() {

            /**
             * Properties of a CompleteUploadReply.
             * @memberof storage.files
             * @interface ICompleteUploadReply
             * @property {string|null} [fileCid] CompleteUploadReply fileCid
             * @property {Uint8Array|null} [leafHash] CompleteUploadReply leafHash
             * @property {boolean|null} [pending] CompleteUploadReply pending
             */

            /**
             * Constructs a new CompleteUploadReply.
             * @memberof storage.files
             * @classdesc Represents a CompleteUploadReply.
             * @implements ICompleteUploadReply
             * @constructor
             * @param {storage.files.ICompleteUploadReply=} [properties] Properties to set
             */
            function CompleteUploadReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CompleteUploadReply fileCid.
             * @member {string} fileCid
             * @memberof storage.files.CompleteUploadReply
             * @instance
             */
            CompleteUploadReply.prototype.fileCid = "";

            /**
             * CompleteUploadReply leafHash.
             * @member {Uint8Array} leafHash
             * @memberof storage.files.CompleteUploadReply
             * @instance
             */
            CompleteUploadReply.prototype.leafHash = $util.newBuffer([]);

            /**
             * CompleteUploadReply pending.
             * @member {boolean} pending
             * @memberof storage.files.CompleteUploadReply
             * @instance
             */
            CompleteUploadReply.prototype.pending = false;

            /**
             * Creates a new CompleteUploadReply instance using the specified properties.
             * @function create
             * @memberof storage.files.CompleteUploadReply
             * @static
             * @param {storage.files.ICompleteUploadReply=} [properties] Properties to set
             * @returns {storage.files.CompleteUploadReply} CompleteUploadReply instance
             */
            CompleteUploadReply.create = function create(properties) {
                return new CompleteUploadReply(properties);
            };

            /**
             * Encodes the specified CompleteUploadReply message. Does not implicitly {@link storage.files.CompleteUploadReply.verify|verify} messages.
             * @function encode
             * @memberof storage.files.CompleteUploadReply
             * @static
             * @param {storage.files.ICompleteUploadReply} message CompleteUploadReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompleteUploadReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fileCid != null && Object.hasOwnProperty.call(message, "fileCid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileCid);
                if (message.leafHash != null && Object.hasOwnProperty.call(message, "leafHash"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.leafHash);
                if (message.pending != null && Object.hasOwnProperty.call(message, "pending"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.pending);
                return writer;
            };

            /**
             * Encodes the specified CompleteUploadReply message, length delimited. Does not implicitly {@link storage.files.CompleteUploadReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.CompleteUploadReply
             * @static
             * @param {storage.files.ICompleteUploadReply} message CompleteUploadReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompleteUploadReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CompleteUploadReply message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.CompleteUploadReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.CompleteUploadReply} CompleteUploadReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompleteUploadReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.CompleteUploadReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.fileCid = reader.string();
                            break;
                        }
                    case 2: {
                            message.leafHash = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.pending = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CompleteUploadReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.CompleteUploadReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.CompleteUploadReply} CompleteUploadReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompleteUploadReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CompleteUploadReply message.
             * @function verify
             * @memberof storage.files.CompleteUploadReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CompleteUploadReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fileCid != null && message.hasOwnProperty("fileCid"))
                    if (!$util.isString(message.fileCid))
                        return "fileCid: string expected";
                if (message.leafHash != null && message.hasOwnProperty("leafHash"))
                    if (!(message.leafHash && typeof message.leafHash.length === "number" || $util.isString(message.leafHash)))
                        return "leafHash: buffer expected";
                if (message.pending != null && message.hasOwnProperty("pending"))
                    if (typeof message.pending !== "boolean")
                        return "pending: boolean expected";
                return null;
            };

            /**
             * Creates a CompleteUploadReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.CompleteUploadReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.CompleteUploadReply} CompleteUploadReply
             */
            CompleteUploadReply.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.CompleteUploadReply)
                    return object;
                var message = new $root.storage.files.CompleteUploadReply();
                if (object.fileCid != null)
                    message.fileCid = String(object.fileCid);
                if (object.leafHash != null)
                    if (typeof object.leafHash === "string")
                        $util.base64.decode(object.leafHash, message.leafHash = $util.newBuffer($util.base64.length(object.leafHash)), 0);
                    else if (object.leafHash.length >= 0)
                        message.leafHash = object.leafHash;
                if (object.pending != null)
                    message.pending = Boolean(object.pending);
                return message;
            };

            /**
             * Creates a plain object from a CompleteUploadReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.CompleteUploadReply
             * @static
             * @param {storage.files.CompleteUploadReply} message CompleteUploadReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CompleteUploadReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.fileCid = "";
                    if (options.bytes === String)
                        object.leafHash = "";
                    else {
                        object.leafHash = [];
                        if (options.bytes !== Array)
                            object.leafHash = $util.newBuffer(object.leafHash);
                    }
                    object.pending = false;
                }
                if (message.fileCid != null && message.hasOwnProperty("fileCid"))
                    object.fileCid = message.fileCid;
                if (message.leafHash != null && message.hasOwnProperty("leafHash"))
                    object.leafHash = options.bytes === String ? $util.base64.encode(message.leafHash, 0, message.leafHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.leafHash) : message.leafHash;
                if (message.pending != null && message.hasOwnProperty("pending"))
                    object.pending = message.pending;
                return object;
            };

            /**
             * Converts this CompleteUploadReply to JSON.
             * @function toJSON
             * @memberof storage.files.CompleteUploadReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CompleteUploadReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CompleteUploadReply
             * @function getTypeUrl
             * @memberof storage.files.CompleteUploadReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CompleteUploadReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.CompleteUploadReply";
            };

            return CompleteUploadReply;
        })();

        files.FileRequest = (function() {

            /**
             * Properties of a FileRequest.
             * @memberof storage.files
             * @interface IFileRequest
             * @property {string|null} [fileCid] FileRequest fileCid
             */

            /**
             * Constructs a new FileRequest.
             * @memberof storage.files
             * @classdesc Represents a FileRequest.
             * @implements IFileRequest
             * @constructor
             * @param {storage.files.IFileRequest=} [properties] Properties to set
             */
            function FileRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileRequest fileCid.
             * @member {string} fileCid
             * @memberof storage.files.FileRequest
             * @instance
             */
            FileRequest.prototype.fileCid = "";

            /**
             * Creates a new FileRequest instance using the specified properties.
             * @function create
             * @memberof storage.files.FileRequest
             * @static
             * @param {storage.files.IFileRequest=} [properties] Properties to set
             * @returns {storage.files.FileRequest} FileRequest instance
             */
            FileRequest.create = function create(properties) {
                return new FileRequest(properties);
            };

            /**
             * Encodes the specified FileRequest message. Does not implicitly {@link storage.files.FileRequest.verify|verify} messages.
             * @function encode
             * @memberof storage.files.FileRequest
             * @static
             * @param {storage.files.IFileRequest} message FileRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fileCid != null && Object.hasOwnProperty.call(message, "fileCid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileCid);
                return writer;
            };

            /**
             * Encodes the specified FileRequest message, length delimited. Does not implicitly {@link storage.files.FileRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.FileRequest
             * @static
             * @param {storage.files.IFileRequest} message FileRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileRequest message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.FileRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.FileRequest} FileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.FileRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.fileCid = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.FileRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.FileRequest} FileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileRequest message.
             * @function verify
             * @memberof storage.files.FileRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fileCid != null && message.hasOwnProperty("fileCid"))
                    if (!$util.isString(message.fileCid))
                        return "fileCid: string expected";
                return null;
            };

            /**
             * Creates a FileRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.FileRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.FileRequest} FileRequest
             */
            FileRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.FileRequest)
                    return object;
                var message = new $root.storage.files.FileRequest();
                if (object.fileCid != null)
                    message.fileCid = String(object.fileCid);
                return message;
            };

            /**
             * Creates a plain object from a FileRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.FileRequest
             * @static
             * @param {storage.files.FileRequest} message FileRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.fileCid = "";
                if (message.fileCid != null && message.hasOwnProperty("fileCid"))
                    object.fileCid = message.fileCid;
                return object;
            };

            /**
             * Converts this FileRequest to JSON.
             * @function toJSON
             * @memberof storage.files.FileRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileRequest
             * @function getTypeUrl
             * @memberof storage.files.FileRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.FileRequest";
            };

            return FileRequest;
        })();

        files.FileMetadataReply = (function() {

            /**
             * Properties of a FileMetadataReply.
             * @memberof storage.files
             * @interface IFileMetadataReply
             * @property {string|null} [fileCid] FileMetadataReply fileCid
             * @property {string|null} [filename] FileMetadataReply filename
             * @property {string|null} [mimeType] FileMetadataReply mimeType
             * @property {number|Long|null} [sizeBytes] FileMetadataReply sizeBytes
             * @property {string|null} [status] FileMetadataReply status
             * @property {number|Long|null} [height] FileMetadataReply height
             */

            /**
             * Constructs a new FileMetadataReply.
             * @memberof storage.files
             * @classdesc Represents a FileMetadataReply.
             * @implements IFileMetadataReply
             * @constructor
             * @param {storage.files.IFileMetadataReply=} [properties] Properties to set
             */
            function FileMetadataReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileMetadataReply fileCid.
             * @member {string} fileCid
             * @memberof storage.files.FileMetadataReply
             * @instance
             */
            FileMetadataReply.prototype.fileCid = "";

            /**
             * FileMetadataReply filename.
             * @member {string} filename
             * @memberof storage.files.FileMetadataReply
             * @instance
             */
            FileMetadataReply.prototype.filename = "";

            /**
             * FileMetadataReply mimeType.
             * @member {string} mimeType
             * @memberof storage.files.FileMetadataReply
             * @instance
             */
            FileMetadataReply.prototype.mimeType = "";

            /**
             * FileMetadataReply sizeBytes.
             * @member {number|Long} sizeBytes
             * @memberof storage.files.FileMetadataReply
             * @instance
             */
            FileMetadataReply.prototype.sizeBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * FileMetadataReply status.
             * @member {string} status
             * @memberof storage.files.FileMetadataReply
             * @instance
             */
            FileMetadataReply.prototype.status = "";

            /**
             * FileMetadataReply height.
             * @member {number|Long} height
             * @memberof storage.files.FileMetadataReply
             * @instance
             */
            FileMetadataReply.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new FileMetadataReply instance using the specified properties.
             * @function create
             * @memberof storage.files.FileMetadataReply
             * @static
             * @param {storage.files.IFileMetadataReply=} [properties] Properties to set
             * @returns {storage.files.FileMetadataReply} FileMetadataReply instance
             */
            FileMetadataReply.create = function create(properties) {
                return new FileMetadataReply(properties);
            };

            /**
             * Encodes the specified FileMetadataReply message. Does not implicitly {@link storage.files.FileMetadataReply.verify|verify} messages.
             * @function encode
             * @memberof storage.files.FileMetadataReply
             * @static
             * @param {storage.files.IFileMetadataReply} message FileMetadataReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileMetadataReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fileCid != null && Object.hasOwnProperty.call(message, "fileCid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileCid);
                if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.filename);
                if (message.mimeType != null && Object.hasOwnProperty.call(message, "mimeType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.mimeType);
                if (message.sizeBytes != null && Object.hasOwnProperty.call(message, "sizeBytes"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.sizeBytes);
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.status);
                if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.height);
                return writer;
            };

            /**
             * Encodes the specified FileMetadataReply message, length delimited. Does not implicitly {@link storage.files.FileMetadataReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.FileMetadataReply
             * @static
             * @param {storage.files.IFileMetadataReply} message FileMetadataReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileMetadataReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileMetadataReply message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.FileMetadataReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.FileMetadataReply} FileMetadataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileMetadataReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.FileMetadataReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.fileCid = reader.string();
                            break;
                        }
                    case 2: {
                            message.filename = reader.string();
                            break;
                        }
                    case 3: {
                            message.mimeType = reader.string();
                            break;
                        }
                    case 4: {
                            message.sizeBytes = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.status = reader.string();
                            break;
                        }
                    case 6: {
                            message.height = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileMetadataReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.FileMetadataReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.FileMetadataReply} FileMetadataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileMetadataReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileMetadataReply message.
             * @function verify
             * @memberof storage.files.FileMetadataReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileMetadataReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fileCid != null && message.hasOwnProperty("fileCid"))
                    if (!$util.isString(message.fileCid))
                        return "fileCid: string expected";
                if (message.filename != null && message.hasOwnProperty("filename"))
                    if (!$util.isString(message.filename))
                        return "filename: string expected";
                if (message.mimeType != null && message.hasOwnProperty("mimeType"))
                    if (!$util.isString(message.mimeType))
                        return "mimeType: string expected";
                if (message.sizeBytes != null && message.hasOwnProperty("sizeBytes"))
                    if (!$util.isInteger(message.sizeBytes) && !(message.sizeBytes && $util.isInteger(message.sizeBytes.low) && $util.isInteger(message.sizeBytes.high)))
                        return "sizeBytes: integer|Long expected";
                if (message.status != null && message.hasOwnProperty("status"))
                    if (!$util.isString(message.status))
                        return "status: string expected";
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                return null;
            };

            /**
             * Creates a FileMetadataReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.FileMetadataReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.FileMetadataReply} FileMetadataReply
             */
            FileMetadataReply.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.FileMetadataReply)
                    return object;
                var message = new $root.storage.files.FileMetadataReply();
                if (object.fileCid != null)
                    message.fileCid = String(object.fileCid);
                if (object.filename != null)
                    message.filename = String(object.filename);
                if (object.mimeType != null)
                    message.mimeType = String(object.mimeType);
                if (object.sizeBytes != null)
                    if ($util.Long)
                        (message.sizeBytes = $util.Long.fromValue(object.sizeBytes)).unsigned = true;
                    else if (typeof object.sizeBytes === "string")
                        message.sizeBytes = parseInt(object.sizeBytes, 10);
                    else if (typeof object.sizeBytes === "number")
                        message.sizeBytes = object.sizeBytes;
                    else if (typeof object.sizeBytes === "object")
                        message.sizeBytes = new $util.LongBits(object.sizeBytes.low >>> 0, object.sizeBytes.high >>> 0).toNumber(true);
                if (object.status != null)
                    message.status = String(object.status);
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a FileMetadataReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.FileMetadataReply
             * @static
             * @param {storage.files.FileMetadataReply} message FileMetadataReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileMetadataReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.fileCid = "";
                    object.filename = "";
                    object.mimeType = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.sizeBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sizeBytes = options.longs === String ? "0" : 0;
                    object.status = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                }
                if (message.fileCid != null && message.hasOwnProperty("fileCid"))
                    object.fileCid = message.fileCid;
                if (message.filename != null && message.hasOwnProperty("filename"))
                    object.filename = message.filename;
                if (message.mimeType != null && message.hasOwnProperty("mimeType"))
                    object.mimeType = message.mimeType;
                if (message.sizeBytes != null && message.hasOwnProperty("sizeBytes"))
                    if (typeof message.sizeBytes === "number")
                        object.sizeBytes = options.longs === String ? String(message.sizeBytes) : message.sizeBytes;
                    else
                        object.sizeBytes = options.longs === String ? $util.Long.prototype.toString.call(message.sizeBytes) : options.longs === Number ? new $util.LongBits(message.sizeBytes.low >>> 0, message.sizeBytes.high >>> 0).toNumber(true) : message.sizeBytes;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = message.status;
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                return object;
            };

            /**
             * Converts this FileMetadataReply to JSON.
             * @function toJSON
             * @memberof storage.files.FileMetadataReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileMetadataReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileMetadataReply
             * @function getTypeUrl
             * @memberof storage.files.FileMetadataReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileMetadataReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.FileMetadataReply";
            };

            return FileMetadataReply;
        })();

        files.FileDataReply = (function() {

            /**
             * Properties of a FileDataReply.
             * @memberof storage.files
             * @interface IFileDataReply
             * @property {Uint8Array|null} [data] FileDataReply data
             */

            /**
             * Constructs a new FileDataReply.
             * @memberof storage.files
             * @classdesc Represents a FileDataReply.
             * @implements IFileDataReply
             * @constructor
             * @param {storage.files.IFileDataReply=} [properties] Properties to set
             */
            function FileDataReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileDataReply data.
             * @member {Uint8Array} data
             * @memberof storage.files.FileDataReply
             * @instance
             */
            FileDataReply.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new FileDataReply instance using the specified properties.
             * @function create
             * @memberof storage.files.FileDataReply
             * @static
             * @param {storage.files.IFileDataReply=} [properties] Properties to set
             * @returns {storage.files.FileDataReply} FileDataReply instance
             */
            FileDataReply.create = function create(properties) {
                return new FileDataReply(properties);
            };

            /**
             * Encodes the specified FileDataReply message. Does not implicitly {@link storage.files.FileDataReply.verify|verify} messages.
             * @function encode
             * @memberof storage.files.FileDataReply
             * @static
             * @param {storage.files.IFileDataReply} message FileDataReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDataReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                return writer;
            };

            /**
             * Encodes the specified FileDataReply message, length delimited. Does not implicitly {@link storage.files.FileDataReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.FileDataReply
             * @static
             * @param {storage.files.IFileDataReply} message FileDataReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileDataReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileDataReply message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.FileDataReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.FileDataReply} FileDataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDataReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.FileDataReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.data = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileDataReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.FileDataReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.FileDataReply} FileDataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileDataReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileDataReply message.
             * @function verify
             * @memberof storage.files.FileDataReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileDataReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            /**
             * Creates a FileDataReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.FileDataReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.FileDataReply} FileDataReply
             */
            FileDataReply.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.FileDataReply)
                    return object;
                var message = new $root.storage.files.FileDataReply();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length >= 0)
                        message.data = object.data;
                return message;
            };

            /**
             * Creates a plain object from a FileDataReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.FileDataReply
             * @static
             * @param {storage.files.FileDataReply} message FileDataReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileDataReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.data = "";
                    else {
                        object.data = [];
                        if (options.bytes !== Array)
                            object.data = $util.newBuffer(object.data);
                    }
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };

            /**
             * Converts this FileDataReply to JSON.
             * @function toJSON
             * @memberof storage.files.FileDataReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileDataReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileDataReply
             * @function getTypeUrl
             * @memberof storage.files.FileDataReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileDataReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.FileDataReply";
            };

            return FileDataReply;
        })();

        files.FileProofReply = (function() {

            /**
             * Properties of a FileProofReply.
             * @memberof storage.files
             * @interface IFileProofReply
             * @property {Uint8Array|null} [leafHash] FileProofReply leafHash
             * @property {Uint8Array|null} [globalRoot] FileProofReply globalRoot
             * @property {Array.<Uint8Array>|null} [siblings] FileProofReply siblings
             * @property {number|Long|null} [height] FileProofReply height
             * @property {boolean|null} [attested] FileProofReply attested
             */

            /**
             * Constructs a new FileProofReply.
             * @memberof storage.files
             * @classdesc Represents a FileProofReply.
             * @implements IFileProofReply
             * @constructor
             * @param {storage.files.IFileProofReply=} [properties] Properties to set
             */
            function FileProofReply(properties) {
                this.siblings = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FileProofReply leafHash.
             * @member {Uint8Array} leafHash
             * @memberof storage.files.FileProofReply
             * @instance
             */
            FileProofReply.prototype.leafHash = $util.newBuffer([]);

            /**
             * FileProofReply globalRoot.
             * @member {Uint8Array} globalRoot
             * @memberof storage.files.FileProofReply
             * @instance
             */
            FileProofReply.prototype.globalRoot = $util.newBuffer([]);

            /**
             * FileProofReply siblings.
             * @member {Array.<Uint8Array>} siblings
             * @memberof storage.files.FileProofReply
             * @instance
             */
            FileProofReply.prototype.siblings = $util.emptyArray;

            /**
             * FileProofReply height.
             * @member {number|Long} height
             * @memberof storage.files.FileProofReply
             * @instance
             */
            FileProofReply.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * FileProofReply attested.
             * @member {boolean} attested
             * @memberof storage.files.FileProofReply
             * @instance
             */
            FileProofReply.prototype.attested = false;

            /**
             * Creates a new FileProofReply instance using the specified properties.
             * @function create
             * @memberof storage.files.FileProofReply
             * @static
             * @param {storage.files.IFileProofReply=} [properties] Properties to set
             * @returns {storage.files.FileProofReply} FileProofReply instance
             */
            FileProofReply.create = function create(properties) {
                return new FileProofReply(properties);
            };

            /**
             * Encodes the specified FileProofReply message. Does not implicitly {@link storage.files.FileProofReply.verify|verify} messages.
             * @function encode
             * @memberof storage.files.FileProofReply
             * @static
             * @param {storage.files.IFileProofReply} message FileProofReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileProofReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.leafHash != null && Object.hasOwnProperty.call(message, "leafHash"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.leafHash);
                if (message.globalRoot != null && Object.hasOwnProperty.call(message, "globalRoot"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.globalRoot);
                if (message.siblings != null && message.siblings.length)
                    for (var i = 0; i < message.siblings.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.siblings[i]);
                if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.height);
                if (message.attested != null && Object.hasOwnProperty.call(message, "attested"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.attested);
                return writer;
            };

            /**
             * Encodes the specified FileProofReply message, length delimited. Does not implicitly {@link storage.files.FileProofReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.FileProofReply
             * @static
             * @param {storage.files.IFileProofReply} message FileProofReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FileProofReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FileProofReply message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.FileProofReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.FileProofReply} FileProofReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileProofReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.FileProofReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.leafHash = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.globalRoot = reader.bytes();
                            break;
                        }
                    case 3: {
                            if (!(message.siblings && message.siblings.length))
                                message.siblings = [];
                            message.siblings.push(reader.bytes());
                            break;
                        }
                    case 4: {
                            message.height = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.attested = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FileProofReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.FileProofReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.FileProofReply} FileProofReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FileProofReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FileProofReply message.
             * @function verify
             * @memberof storage.files.FileProofReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FileProofReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.leafHash != null && message.hasOwnProperty("leafHash"))
                    if (!(message.leafHash && typeof message.leafHash.length === "number" || $util.isString(message.leafHash)))
                        return "leafHash: buffer expected";
                if (message.globalRoot != null && message.hasOwnProperty("globalRoot"))
                    if (!(message.globalRoot && typeof message.globalRoot.length === "number" || $util.isString(message.globalRoot)))
                        return "globalRoot: buffer expected";
                if (message.siblings != null && message.hasOwnProperty("siblings")) {
                    if (!Array.isArray(message.siblings))
                        return "siblings: array expected";
                    for (var i = 0; i < message.siblings.length; ++i)
                        if (!(message.siblings[i] && typeof message.siblings[i].length === "number" || $util.isString(message.siblings[i])))
                            return "siblings: buffer[] expected";
                }
                if (message.height != null && message.hasOwnProperty("height"))
                    if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                        return "height: integer|Long expected";
                if (message.attested != null && message.hasOwnProperty("attested"))
                    if (typeof message.attested !== "boolean")
                        return "attested: boolean expected";
                return null;
            };

            /**
             * Creates a FileProofReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.FileProofReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.FileProofReply} FileProofReply
             */
            FileProofReply.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.FileProofReply)
                    return object;
                var message = new $root.storage.files.FileProofReply();
                if (object.leafHash != null)
                    if (typeof object.leafHash === "string")
                        $util.base64.decode(object.leafHash, message.leafHash = $util.newBuffer($util.base64.length(object.leafHash)), 0);
                    else if (object.leafHash.length >= 0)
                        message.leafHash = object.leafHash;
                if (object.globalRoot != null)
                    if (typeof object.globalRoot === "string")
                        $util.base64.decode(object.globalRoot, message.globalRoot = $util.newBuffer($util.base64.length(object.globalRoot)), 0);
                    else if (object.globalRoot.length >= 0)
                        message.globalRoot = object.globalRoot;
                if (object.siblings) {
                    if (!Array.isArray(object.siblings))
                        throw TypeError(".storage.files.FileProofReply.siblings: array expected");
                    message.siblings = [];
                    for (var i = 0; i < object.siblings.length; ++i)
                        if (typeof object.siblings[i] === "string")
                            $util.base64.decode(object.siblings[i], message.siblings[i] = $util.newBuffer($util.base64.length(object.siblings[i])), 0);
                        else if (object.siblings[i].length >= 0)
                            message.siblings[i] = object.siblings[i];
                }
                if (object.height != null)
                    if ($util.Long)
                        (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                    else if (typeof object.height === "string")
                        message.height = parseInt(object.height, 10);
                    else if (typeof object.height === "number")
                        message.height = object.height;
                    else if (typeof object.height === "object")
                        message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                if (object.attested != null)
                    message.attested = Boolean(object.attested);
                return message;
            };

            /**
             * Creates a plain object from a FileProofReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.FileProofReply
             * @static
             * @param {storage.files.FileProofReply} message FileProofReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FileProofReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.siblings = [];
                if (options.defaults) {
                    if (options.bytes === String)
                        object.leafHash = "";
                    else {
                        object.leafHash = [];
                        if (options.bytes !== Array)
                            object.leafHash = $util.newBuffer(object.leafHash);
                    }
                    if (options.bytes === String)
                        object.globalRoot = "";
                    else {
                        object.globalRoot = [];
                        if (options.bytes !== Array)
                            object.globalRoot = $util.newBuffer(object.globalRoot);
                    }
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.height = options.longs === String ? "0" : 0;
                    object.attested = false;
                }
                if (message.leafHash != null && message.hasOwnProperty("leafHash"))
                    object.leafHash = options.bytes === String ? $util.base64.encode(message.leafHash, 0, message.leafHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.leafHash) : message.leafHash;
                if (message.globalRoot != null && message.hasOwnProperty("globalRoot"))
                    object.globalRoot = options.bytes === String ? $util.base64.encode(message.globalRoot, 0, message.globalRoot.length) : options.bytes === Array ? Array.prototype.slice.call(message.globalRoot) : message.globalRoot;
                if (message.siblings && message.siblings.length) {
                    object.siblings = [];
                    for (var j = 0; j < message.siblings.length; ++j)
                        object.siblings[j] = options.bytes === String ? $util.base64.encode(message.siblings[j], 0, message.siblings[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.siblings[j]) : message.siblings[j];
                }
                if (message.height != null && message.hasOwnProperty("height"))
                    if (typeof message.height === "number")
                        object.height = options.longs === String ? String(message.height) : message.height;
                    else
                        object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                if (message.attested != null && message.hasOwnProperty("attested"))
                    object.attested = message.attested;
                return object;
            };

            /**
             * Converts this FileProofReply to JSON.
             * @function toJSON
             * @memberof storage.files.FileProofReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FileProofReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FileProofReply
             * @function getTypeUrl
             * @memberof storage.files.FileProofReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FileProofReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.FileProofReply";
            };

            return FileProofReply;
        })();

        files.DeleteFileReply = (function() {

            /**
             * Properties of a DeleteFileReply.
             * @memberof storage.files
             * @interface IDeleteFileReply
             */

            /**
             * Constructs a new DeleteFileReply.
             * @memberof storage.files
             * @classdesc Represents a DeleteFileReply.
             * @implements IDeleteFileReply
             * @constructor
             * @param {storage.files.IDeleteFileReply=} [properties] Properties to set
             */
            function DeleteFileReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new DeleteFileReply instance using the specified properties.
             * @function create
             * @memberof storage.files.DeleteFileReply
             * @static
             * @param {storage.files.IDeleteFileReply=} [properties] Properties to set
             * @returns {storage.files.DeleteFileReply} DeleteFileReply instance
             */
            DeleteFileReply.create = function create(properties) {
                return new DeleteFileReply(properties);
            };

            /**
             * Encodes the specified DeleteFileReply message. Does not implicitly {@link storage.files.DeleteFileReply.verify|verify} messages.
             * @function encode
             * @memberof storage.files.DeleteFileReply
             * @static
             * @param {storage.files.IDeleteFileReply} message DeleteFileReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteFileReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified DeleteFileReply message, length delimited. Does not implicitly {@link storage.files.DeleteFileReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.DeleteFileReply
             * @static
             * @param {storage.files.IDeleteFileReply} message DeleteFileReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeleteFileReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeleteFileReply message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.DeleteFileReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.DeleteFileReply} DeleteFileReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteFileReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.DeleteFileReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeleteFileReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.DeleteFileReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.DeleteFileReply} DeleteFileReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeleteFileReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeleteFileReply message.
             * @function verify
             * @memberof storage.files.DeleteFileReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeleteFileReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a DeleteFileReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.DeleteFileReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.DeleteFileReply} DeleteFileReply
             */
            DeleteFileReply.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.DeleteFileReply)
                    return object;
                return new $root.storage.files.DeleteFileReply();
            };

            /**
             * Creates a plain object from a DeleteFileReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.DeleteFileReply
             * @static
             * @param {storage.files.DeleteFileReply} message DeleteFileReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeleteFileReply.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this DeleteFileReply to JSON.
             * @function toJSON
             * @memberof storage.files.DeleteFileReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeleteFileReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DeleteFileReply
             * @function getTypeUrl
             * @memberof storage.files.DeleteFileReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DeleteFileReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.DeleteFileReply";
            };

            return DeleteFileReply;
        })();

        files.SpaceReply = (function() {

            /**
             * Properties of a SpaceReply.
             * @memberof storage.files
             * @interface ISpaceReply
             * @property {number|Long|null} [quotaBytes] SpaceReply quotaBytes
             * @property {number|Long|null} [usedBytes] SpaceReply usedBytes
             */

            /**
             * Constructs a new SpaceReply.
             * @memberof storage.files
             * @classdesc Represents a SpaceReply.
             * @implements ISpaceReply
             * @constructor
             * @param {storage.files.ISpaceReply=} [properties] Properties to set
             */
            function SpaceReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SpaceReply quotaBytes.
             * @member {number|Long} quotaBytes
             * @memberof storage.files.SpaceReply
             * @instance
             */
            SpaceReply.prototype.quotaBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SpaceReply usedBytes.
             * @member {number|Long} usedBytes
             * @memberof storage.files.SpaceReply
             * @instance
             */
            SpaceReply.prototype.usedBytes = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SpaceReply instance using the specified properties.
             * @function create
             * @memberof storage.files.SpaceReply
             * @static
             * @param {storage.files.ISpaceReply=} [properties] Properties to set
             * @returns {storage.files.SpaceReply} SpaceReply instance
             */
            SpaceReply.create = function create(properties) {
                return new SpaceReply(properties);
            };

            /**
             * Encodes the specified SpaceReply message. Does not implicitly {@link storage.files.SpaceReply.verify|verify} messages.
             * @function encode
             * @memberof storage.files.SpaceReply
             * @static
             * @param {storage.files.ISpaceReply} message SpaceReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SpaceReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.quotaBytes != null && Object.hasOwnProperty.call(message, "quotaBytes"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.quotaBytes);
                if (message.usedBytes != null && Object.hasOwnProperty.call(message, "usedBytes"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.usedBytes);
                return writer;
            };

            /**
             * Encodes the specified SpaceReply message, length delimited. Does not implicitly {@link storage.files.SpaceReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.SpaceReply
             * @static
             * @param {storage.files.ISpaceReply} message SpaceReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SpaceReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SpaceReply message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.SpaceReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.SpaceReply} SpaceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SpaceReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.SpaceReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.quotaBytes = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.usedBytes = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SpaceReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.SpaceReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.SpaceReply} SpaceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SpaceReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SpaceReply message.
             * @function verify
             * @memberof storage.files.SpaceReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SpaceReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.quotaBytes != null && message.hasOwnProperty("quotaBytes"))
                    if (!$util.isInteger(message.quotaBytes) && !(message.quotaBytes && $util.isInteger(message.quotaBytes.low) && $util.isInteger(message.quotaBytes.high)))
                        return "quotaBytes: integer|Long expected";
                if (message.usedBytes != null && message.hasOwnProperty("usedBytes"))
                    if (!$util.isInteger(message.usedBytes) && !(message.usedBytes && $util.isInteger(message.usedBytes.low) && $util.isInteger(message.usedBytes.high)))
                        return "usedBytes: integer|Long expected";
                return null;
            };

            /**
             * Creates a SpaceReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.SpaceReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.SpaceReply} SpaceReply
             */
            SpaceReply.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.SpaceReply)
                    return object;
                var message = new $root.storage.files.SpaceReply();
                if (object.quotaBytes != null)
                    if ($util.Long)
                        (message.quotaBytes = $util.Long.fromValue(object.quotaBytes)).unsigned = true;
                    else if (typeof object.quotaBytes === "string")
                        message.quotaBytes = parseInt(object.quotaBytes, 10);
                    else if (typeof object.quotaBytes === "number")
                        message.quotaBytes = object.quotaBytes;
                    else if (typeof object.quotaBytes === "object")
                        message.quotaBytes = new $util.LongBits(object.quotaBytes.low >>> 0, object.quotaBytes.high >>> 0).toNumber(true);
                if (object.usedBytes != null)
                    if ($util.Long)
                        (message.usedBytes = $util.Long.fromValue(object.usedBytes)).unsigned = true;
                    else if (typeof object.usedBytes === "string")
                        message.usedBytes = parseInt(object.usedBytes, 10);
                    else if (typeof object.usedBytes === "number")
                        message.usedBytes = object.usedBytes;
                    else if (typeof object.usedBytes === "object")
                        message.usedBytes = new $util.LongBits(object.usedBytes.low >>> 0, object.usedBytes.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SpaceReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.SpaceReply
             * @static
             * @param {storage.files.SpaceReply} message SpaceReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SpaceReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.quotaBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.quotaBytes = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.usedBytes = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.usedBytes = options.longs === String ? "0" : 0;
                }
                if (message.quotaBytes != null && message.hasOwnProperty("quotaBytes"))
                    if (typeof message.quotaBytes === "number")
                        object.quotaBytes = options.longs === String ? String(message.quotaBytes) : message.quotaBytes;
                    else
                        object.quotaBytes = options.longs === String ? $util.Long.prototype.toString.call(message.quotaBytes) : options.longs === Number ? new $util.LongBits(message.quotaBytes.low >>> 0, message.quotaBytes.high >>> 0).toNumber(true) : message.quotaBytes;
                if (message.usedBytes != null && message.hasOwnProperty("usedBytes"))
                    if (typeof message.usedBytes === "number")
                        object.usedBytes = options.longs === String ? String(message.usedBytes) : message.usedBytes;
                    else
                        object.usedBytes = options.longs === String ? $util.Long.prototype.toString.call(message.usedBytes) : options.longs === Number ? new $util.LongBits(message.usedBytes.low >>> 0, message.usedBytes.high >>> 0).toNumber(true) : message.usedBytes;
                return object;
            };

            /**
             * Converts this SpaceReply to JSON.
             * @function toJSON
             * @memberof storage.files.SpaceReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SpaceReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SpaceReply
             * @function getTypeUrl
             * @memberof storage.files.SpaceReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SpaceReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.SpaceReply";
            };

            return SpaceReply;
        })();

        files.WalletChallengeRequest = (function() {

            /**
             * Properties of a WalletChallengeRequest.
             * @memberof storage.files
             * @interface IWalletChallengeRequest
             * @property {string|null} [address] WalletChallengeRequest address
             */

            /**
             * Constructs a new WalletChallengeRequest.
             * @memberof storage.files
             * @classdesc Represents a WalletChallengeRequest.
             * @implements IWalletChallengeRequest
             * @constructor
             * @param {storage.files.IWalletChallengeRequest=} [properties] Properties to set
             */
            function WalletChallengeRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WalletChallengeRequest address.
             * @member {string} address
             * @memberof storage.files.WalletChallengeRequest
             * @instance
             */
            WalletChallengeRequest.prototype.address = "";

            /**
             * Creates a new WalletChallengeRequest instance using the specified properties.
             * @function create
             * @memberof storage.files.WalletChallengeRequest
             * @static
             * @param {storage.files.IWalletChallengeRequest=} [properties] Properties to set
             * @returns {storage.files.WalletChallengeRequest} WalletChallengeRequest instance
             */
            WalletChallengeRequest.create = function create(properties) {
                return new WalletChallengeRequest(properties);
            };

            /**
             * Encodes the specified WalletChallengeRequest message. Does not implicitly {@link storage.files.WalletChallengeRequest.verify|verify} messages.
             * @function encode
             * @memberof storage.files.WalletChallengeRequest
             * @static
             * @param {storage.files.IWalletChallengeRequest} message WalletChallengeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WalletChallengeRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
                return writer;
            };

            /**
             * Encodes the specified WalletChallengeRequest message, length delimited. Does not implicitly {@link storage.files.WalletChallengeRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.WalletChallengeRequest
             * @static
             * @param {storage.files.IWalletChallengeRequest} message WalletChallengeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WalletChallengeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WalletChallengeRequest message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.WalletChallengeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.WalletChallengeRequest} WalletChallengeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WalletChallengeRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.WalletChallengeRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.address = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WalletChallengeRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.WalletChallengeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.WalletChallengeRequest} WalletChallengeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WalletChallengeRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WalletChallengeRequest message.
             * @function verify
             * @memberof storage.files.WalletChallengeRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WalletChallengeRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                return null;
            };

            /**
             * Creates a WalletChallengeRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.WalletChallengeRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.WalletChallengeRequest} WalletChallengeRequest
             */
            WalletChallengeRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.WalletChallengeRequest)
                    return object;
                var message = new $root.storage.files.WalletChallengeRequest();
                if (object.address != null)
                    message.address = String(object.address);
                return message;
            };

            /**
             * Creates a plain object from a WalletChallengeRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.WalletChallengeRequest
             * @static
             * @param {storage.files.WalletChallengeRequest} message WalletChallengeRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WalletChallengeRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.address = "";
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                return object;
            };

            /**
             * Converts this WalletChallengeRequest to JSON.
             * @function toJSON
             * @memberof storage.files.WalletChallengeRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WalletChallengeRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WalletChallengeRequest
             * @function getTypeUrl
             * @memberof storage.files.WalletChallengeRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WalletChallengeRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.WalletChallengeRequest";
            };

            return WalletChallengeRequest;
        })();

        files.WalletChallengeReply = (function() {

            /**
             * Properties of a WalletChallengeReply.
             * @memberof storage.files
             * @interface IWalletChallengeReply
             * @property {string|null} [nonce] WalletChallengeReply nonce
             */

            /**
             * Constructs a new WalletChallengeReply.
             * @memberof storage.files
             * @classdesc Represents a WalletChallengeReply.
             * @implements IWalletChallengeReply
             * @constructor
             * @param {storage.files.IWalletChallengeReply=} [properties] Properties to set
             */
            function WalletChallengeReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WalletChallengeReply nonce.
             * @member {string} nonce
             * @memberof storage.files.WalletChallengeReply
             * @instance
             */
            WalletChallengeReply.prototype.nonce = "";

            /**
             * Creates a new WalletChallengeReply instance using the specified properties.
             * @function create
             * @memberof storage.files.WalletChallengeReply
             * @static
             * @param {storage.files.IWalletChallengeReply=} [properties] Properties to set
             * @returns {storage.files.WalletChallengeReply} WalletChallengeReply instance
             */
            WalletChallengeReply.create = function create(properties) {
                return new WalletChallengeReply(properties);
            };

            /**
             * Encodes the specified WalletChallengeReply message. Does not implicitly {@link storage.files.WalletChallengeReply.verify|verify} messages.
             * @function encode
             * @memberof storage.files.WalletChallengeReply
             * @static
             * @param {storage.files.IWalletChallengeReply} message WalletChallengeReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WalletChallengeReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nonce != null && Object.hasOwnProperty.call(message, "nonce"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.nonce);
                return writer;
            };

            /**
             * Encodes the specified WalletChallengeReply message, length delimited. Does not implicitly {@link storage.files.WalletChallengeReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.WalletChallengeReply
             * @static
             * @param {storage.files.IWalletChallengeReply} message WalletChallengeReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WalletChallengeReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WalletChallengeReply message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.WalletChallengeReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.WalletChallengeReply} WalletChallengeReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WalletChallengeReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.WalletChallengeReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.nonce = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WalletChallengeReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.WalletChallengeReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.WalletChallengeReply} WalletChallengeReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WalletChallengeReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WalletChallengeReply message.
             * @function verify
             * @memberof storage.files.WalletChallengeReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WalletChallengeReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.nonce != null && message.hasOwnProperty("nonce"))
                    if (!$util.isString(message.nonce))
                        return "nonce: string expected";
                return null;
            };

            /**
             * Creates a WalletChallengeReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.WalletChallengeReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.WalletChallengeReply} WalletChallengeReply
             */
            WalletChallengeReply.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.WalletChallengeReply)
                    return object;
                var message = new $root.storage.files.WalletChallengeReply();
                if (object.nonce != null)
                    message.nonce = String(object.nonce);
                return message;
            };

            /**
             * Creates a plain object from a WalletChallengeReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.WalletChallengeReply
             * @static
             * @param {storage.files.WalletChallengeReply} message WalletChallengeReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WalletChallengeReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.nonce = "";
                if (message.nonce != null && message.hasOwnProperty("nonce"))
                    object.nonce = message.nonce;
                return object;
            };

            /**
             * Converts this WalletChallengeReply to JSON.
             * @function toJSON
             * @memberof storage.files.WalletChallengeReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WalletChallengeReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WalletChallengeReply
             * @function getTypeUrl
             * @memberof storage.files.WalletChallengeReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WalletChallengeReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.WalletChallengeReply";
            };

            return WalletChallengeReply;
        })();

        files.WalletVerifyRequest = (function() {

            /**
             * Properties of a WalletVerifyRequest.
             * @memberof storage.files
             * @interface IWalletVerifyRequest
             * @property {string|null} [address] WalletVerifyRequest address
             * @property {string|null} [signature] WalletVerifyRequest signature
             */

            /**
             * Constructs a new WalletVerifyRequest.
             * @memberof storage.files
             * @classdesc Represents a WalletVerifyRequest.
             * @implements IWalletVerifyRequest
             * @constructor
             * @param {storage.files.IWalletVerifyRequest=} [properties] Properties to set
             */
            function WalletVerifyRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WalletVerifyRequest address.
             * @member {string} address
             * @memberof storage.files.WalletVerifyRequest
             * @instance
             */
            WalletVerifyRequest.prototype.address = "";

            /**
             * WalletVerifyRequest signature.
             * @member {string} signature
             * @memberof storage.files.WalletVerifyRequest
             * @instance
             */
            WalletVerifyRequest.prototype.signature = "";

            /**
             * Creates a new WalletVerifyRequest instance using the specified properties.
             * @function create
             * @memberof storage.files.WalletVerifyRequest
             * @static
             * @param {storage.files.IWalletVerifyRequest=} [properties] Properties to set
             * @returns {storage.files.WalletVerifyRequest} WalletVerifyRequest instance
             */
            WalletVerifyRequest.create = function create(properties) {
                return new WalletVerifyRequest(properties);
            };

            /**
             * Encodes the specified WalletVerifyRequest message. Does not implicitly {@link storage.files.WalletVerifyRequest.verify|verify} messages.
             * @function encode
             * @memberof storage.files.WalletVerifyRequest
             * @static
             * @param {storage.files.IWalletVerifyRequest} message WalletVerifyRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WalletVerifyRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.address);
                if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.signature);
                return writer;
            };

            /**
             * Encodes the specified WalletVerifyRequest message, length delimited. Does not implicitly {@link storage.files.WalletVerifyRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.WalletVerifyRequest
             * @static
             * @param {storage.files.IWalletVerifyRequest} message WalletVerifyRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WalletVerifyRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WalletVerifyRequest message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.WalletVerifyRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.WalletVerifyRequest} WalletVerifyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WalletVerifyRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.WalletVerifyRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.address = reader.string();
                            break;
                        }
                    case 2: {
                            message.signature = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WalletVerifyRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.WalletVerifyRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.WalletVerifyRequest} WalletVerifyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WalletVerifyRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WalletVerifyRequest message.
             * @function verify
             * @memberof storage.files.WalletVerifyRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WalletVerifyRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.address != null && message.hasOwnProperty("address"))
                    if (!$util.isString(message.address))
                        return "address: string expected";
                if (message.signature != null && message.hasOwnProperty("signature"))
                    if (!$util.isString(message.signature))
                        return "signature: string expected";
                return null;
            };

            /**
             * Creates a WalletVerifyRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.WalletVerifyRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.WalletVerifyRequest} WalletVerifyRequest
             */
            WalletVerifyRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.WalletVerifyRequest)
                    return object;
                var message = new $root.storage.files.WalletVerifyRequest();
                if (object.address != null)
                    message.address = String(object.address);
                if (object.signature != null)
                    message.signature = String(object.signature);
                return message;
            };

            /**
             * Creates a plain object from a WalletVerifyRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.WalletVerifyRequest
             * @static
             * @param {storage.files.WalletVerifyRequest} message WalletVerifyRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WalletVerifyRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.address = "";
                    object.signature = "";
                }
                if (message.address != null && message.hasOwnProperty("address"))
                    object.address = message.address;
                if (message.signature != null && message.hasOwnProperty("signature"))
                    object.signature = message.signature;
                return object;
            };

            /**
             * Converts this WalletVerifyRequest to JSON.
             * @function toJSON
             * @memberof storage.files.WalletVerifyRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WalletVerifyRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WalletVerifyRequest
             * @function getTypeUrl
             * @memberof storage.files.WalletVerifyRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WalletVerifyRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.WalletVerifyRequest";
            };

            return WalletVerifyRequest;
        })();

        files.AuthReply = (function() {

            /**
             * Properties of an AuthReply.
             * @memberof storage.files
             * @interface IAuthReply
             * @property {string|null} [token] AuthReply token
             * @property {string|null} [userId] AuthReply userId
             */

            /**
             * Constructs a new AuthReply.
             * @memberof storage.files
             * @classdesc Represents an AuthReply.
             * @implements IAuthReply
             * @constructor
             * @param {storage.files.IAuthReply=} [properties] Properties to set
             */
            function AuthReply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AuthReply token.
             * @member {string} token
             * @memberof storage.files.AuthReply
             * @instance
             */
            AuthReply.prototype.token = "";

            /**
             * AuthReply userId.
             * @member {string} userId
             * @memberof storage.files.AuthReply
             * @instance
             */
            AuthReply.prototype.userId = "";

            /**
             * Creates a new AuthReply instance using the specified properties.
             * @function create
             * @memberof storage.files.AuthReply
             * @static
             * @param {storage.files.IAuthReply=} [properties] Properties to set
             * @returns {storage.files.AuthReply} AuthReply instance
             */
            AuthReply.create = function create(properties) {
                return new AuthReply(properties);
            };

            /**
             * Encodes the specified AuthReply message. Does not implicitly {@link storage.files.AuthReply.verify|verify} messages.
             * @function encode
             * @memberof storage.files.AuthReply
             * @static
             * @param {storage.files.IAuthReply} message AuthReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthReply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
                return writer;
            };

            /**
             * Encodes the specified AuthReply message, length delimited. Does not implicitly {@link storage.files.AuthReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof storage.files.AuthReply
             * @static
             * @param {storage.files.IAuthReply} message AuthReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthReply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AuthReply message from the specified reader or buffer.
             * @function decode
             * @memberof storage.files.AuthReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {storage.files.AuthReply} AuthReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthReply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.storage.files.AuthReply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.token = reader.string();
                            break;
                        }
                    case 2: {
                            message.userId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AuthReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof storage.files.AuthReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {storage.files.AuthReply} AuthReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthReply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AuthReply message.
             * @function verify
             * @memberof storage.files.AuthReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuthReply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                return null;
            };

            /**
             * Creates an AuthReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof storage.files.AuthReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {storage.files.AuthReply} AuthReply
             */
            AuthReply.fromObject = function fromObject(object) {
                if (object instanceof $root.storage.files.AuthReply)
                    return object;
                var message = new $root.storage.files.AuthReply();
                if (object.token != null)
                    message.token = String(object.token);
                if (object.userId != null)
                    message.userId = String(object.userId);
                return message;
            };

            /**
             * Creates a plain object from an AuthReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof storage.files.AuthReply
             * @static
             * @param {storage.files.AuthReply} message AuthReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AuthReply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.token = "";
                    object.userId = "";
                }
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                return object;
            };

            /**
             * Converts this AuthReply to JSON.
             * @function toJSON
             * @memberof storage.files.AuthReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AuthReply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AuthReply
             * @function getTypeUrl
             * @memberof storage.files.AuthReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AuthReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/storage.files.AuthReply";
            };

            return AuthReply;
        })();

        return files;
    })();

    return storage;
})();

module.exports = $root;
