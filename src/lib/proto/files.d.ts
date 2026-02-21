import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace storage. */
export namespace storage {

    /** Namespace files. */
    namespace files {

        /** Properties of a StartUploadRequest. */
        interface IStartUploadRequest {

            /** StartUploadRequest filename */
            filename?: (string|null);

            /** StartUploadRequest mimeType */
            mimeType?: (string|null);

            /** StartUploadRequest size */
            size?: (number|Long|null);

            /** StartUploadRequest chunkSize */
            chunkSize?: (number|null);
        }

        /** Represents a StartUploadRequest. */
        class StartUploadRequest implements IStartUploadRequest {

            /**
             * Constructs a new StartUploadRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IStartUploadRequest);

            /** StartUploadRequest filename. */
            public filename: string;

            /** StartUploadRequest mimeType. */
            public mimeType: string;

            /** StartUploadRequest size. */
            public size: (number|Long);

            /** StartUploadRequest chunkSize. */
            public chunkSize: number;

            /**
             * Creates a new StartUploadRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartUploadRequest instance
             */
            public static create(properties?: storage.files.IStartUploadRequest): storage.files.StartUploadRequest;

            /**
             * Encodes the specified StartUploadRequest message. Does not implicitly {@link storage.files.StartUploadRequest.verify|verify} messages.
             * @param message StartUploadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IStartUploadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartUploadRequest message, length delimited. Does not implicitly {@link storage.files.StartUploadRequest.verify|verify} messages.
             * @param message StartUploadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IStartUploadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartUploadRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartUploadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.StartUploadRequest;

            /**
             * Decodes a StartUploadRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartUploadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.StartUploadRequest;

            /**
             * Verifies a StartUploadRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartUploadRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartUploadRequest
             */
            public static fromObject(object: { [k: string]: any }): storage.files.StartUploadRequest;

            /**
             * Creates a plain object from a StartUploadRequest message. Also converts values to other types if specified.
             * @param message StartUploadRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.StartUploadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartUploadRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StartUploadRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StartUploadReply. */
        interface IStartUploadReply {

            /** StartUploadReply uploadId */
            uploadId?: (string|null);

            /** StartUploadReply chunkSize */
            chunkSize?: (number|null);
        }

        /** Represents a StartUploadReply. */
        class StartUploadReply implements IStartUploadReply {

            /**
             * Constructs a new StartUploadReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IStartUploadReply);

            /** StartUploadReply uploadId. */
            public uploadId: string;

            /** StartUploadReply chunkSize. */
            public chunkSize: number;

            /**
             * Creates a new StartUploadReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StartUploadReply instance
             */
            public static create(properties?: storage.files.IStartUploadReply): storage.files.StartUploadReply;

            /**
             * Encodes the specified StartUploadReply message. Does not implicitly {@link storage.files.StartUploadReply.verify|verify} messages.
             * @param message StartUploadReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IStartUploadReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StartUploadReply message, length delimited. Does not implicitly {@link storage.files.StartUploadReply.verify|verify} messages.
             * @param message StartUploadReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IStartUploadReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StartUploadReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StartUploadReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.StartUploadReply;

            /**
             * Decodes a StartUploadReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StartUploadReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.StartUploadReply;

            /**
             * Verifies a StartUploadReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StartUploadReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StartUploadReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.StartUploadReply;

            /**
             * Creates a plain object from a StartUploadReply message. Also converts values to other types if specified.
             * @param message StartUploadReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.StartUploadReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StartUploadReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StartUploadReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UploadChunkRequest. */
        interface IUploadChunkRequest {

            /** UploadChunkRequest uploadId */
            uploadId?: (string|null);

            /** UploadChunkRequest chunkIndex */
            chunkIndex?: (number|null);

            /** UploadChunkRequest data */
            data?: (Uint8Array|null);
        }

        /** Represents an UploadChunkRequest. */
        class UploadChunkRequest implements IUploadChunkRequest {

            /**
             * Constructs a new UploadChunkRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IUploadChunkRequest);

            /** UploadChunkRequest uploadId. */
            public uploadId: string;

            /** UploadChunkRequest chunkIndex. */
            public chunkIndex: number;

            /** UploadChunkRequest data. */
            public data: Uint8Array;

            /**
             * Creates a new UploadChunkRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UploadChunkRequest instance
             */
            public static create(properties?: storage.files.IUploadChunkRequest): storage.files.UploadChunkRequest;

            /**
             * Encodes the specified UploadChunkRequest message. Does not implicitly {@link storage.files.UploadChunkRequest.verify|verify} messages.
             * @param message UploadChunkRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IUploadChunkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UploadChunkRequest message, length delimited. Does not implicitly {@link storage.files.UploadChunkRequest.verify|verify} messages.
             * @param message UploadChunkRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IUploadChunkRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UploadChunkRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UploadChunkRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.UploadChunkRequest;

            /**
             * Decodes an UploadChunkRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UploadChunkRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.UploadChunkRequest;

            /**
             * Verifies an UploadChunkRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UploadChunkRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UploadChunkRequest
             */
            public static fromObject(object: { [k: string]: any }): storage.files.UploadChunkRequest;

            /**
             * Creates a plain object from an UploadChunkRequest message. Also converts values to other types if specified.
             * @param message UploadChunkRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.UploadChunkRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UploadChunkRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UploadChunkRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** UploadStatus enum. */
        enum UploadStatus {
            IN_PROGRESS = 0,
            COMPLETE = 1,
            ERROR = 2
        }

        /** Properties of an UploadChunkReply. */
        interface IUploadChunkReply {

            /** UploadChunkReply status */
            status?: (storage.files.UploadStatus|null);

            /** UploadChunkReply bytesReceived */
            bytesReceived?: (number|Long|null);

            /** UploadChunkReply nextChunkIndex */
            nextChunkIndex?: (number|null);
        }

        /** Represents an UploadChunkReply. */
        class UploadChunkReply implements IUploadChunkReply {

            /**
             * Constructs a new UploadChunkReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IUploadChunkReply);

            /** UploadChunkReply status. */
            public status: storage.files.UploadStatus;

            /** UploadChunkReply bytesReceived. */
            public bytesReceived: (number|Long);

            /** UploadChunkReply nextChunkIndex. */
            public nextChunkIndex: number;

            /**
             * Creates a new UploadChunkReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UploadChunkReply instance
             */
            public static create(properties?: storage.files.IUploadChunkReply): storage.files.UploadChunkReply;

            /**
             * Encodes the specified UploadChunkReply message. Does not implicitly {@link storage.files.UploadChunkReply.verify|verify} messages.
             * @param message UploadChunkReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IUploadChunkReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UploadChunkReply message, length delimited. Does not implicitly {@link storage.files.UploadChunkReply.verify|verify} messages.
             * @param message UploadChunkReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IUploadChunkReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UploadChunkReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UploadChunkReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.UploadChunkReply;

            /**
             * Decodes an UploadChunkReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UploadChunkReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.UploadChunkReply;

            /**
             * Verifies an UploadChunkReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UploadChunkReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UploadChunkReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.UploadChunkReply;

            /**
             * Creates a plain object from an UploadChunkReply message. Also converts values to other types if specified.
             * @param message UploadChunkReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.UploadChunkReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UploadChunkReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UploadChunkReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UploadStatusRequest. */
        interface IUploadStatusRequest {

            /** UploadStatusRequest uploadId */
            uploadId?: (string|null);
        }

        /** Represents an UploadStatusRequest. */
        class UploadStatusRequest implements IUploadStatusRequest {

            /**
             * Constructs a new UploadStatusRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IUploadStatusRequest);

            /** UploadStatusRequest uploadId. */
            public uploadId: string;

            /**
             * Creates a new UploadStatusRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UploadStatusRequest instance
             */
            public static create(properties?: storage.files.IUploadStatusRequest): storage.files.UploadStatusRequest;

            /**
             * Encodes the specified UploadStatusRequest message. Does not implicitly {@link storage.files.UploadStatusRequest.verify|verify} messages.
             * @param message UploadStatusRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IUploadStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UploadStatusRequest message, length delimited. Does not implicitly {@link storage.files.UploadStatusRequest.verify|verify} messages.
             * @param message UploadStatusRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IUploadStatusRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UploadStatusRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UploadStatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.UploadStatusRequest;

            /**
             * Decodes an UploadStatusRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UploadStatusRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.UploadStatusRequest;

            /**
             * Verifies an UploadStatusRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UploadStatusRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UploadStatusRequest
             */
            public static fromObject(object: { [k: string]: any }): storage.files.UploadStatusRequest;

            /**
             * Creates a plain object from an UploadStatusRequest message. Also converts values to other types if specified.
             * @param message UploadStatusRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.UploadStatusRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UploadStatusRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UploadStatusRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an UploadStatusReply. */
        interface IUploadStatusReply {

            /** UploadStatusReply status */
            status?: (storage.files.UploadStatus|null);

            /** UploadStatusReply bytesReceived */
            bytesReceived?: (number|Long|null);

            /** UploadStatusReply expectedSize */
            expectedSize?: (number|Long|null);

            /** UploadStatusReply nextChunkIndex */
            nextChunkIndex?: (number|null);
        }

        /** Represents an UploadStatusReply. */
        class UploadStatusReply implements IUploadStatusReply {

            /**
             * Constructs a new UploadStatusReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IUploadStatusReply);

            /** UploadStatusReply status. */
            public status: storage.files.UploadStatus;

            /** UploadStatusReply bytesReceived. */
            public bytesReceived: (number|Long);

            /** UploadStatusReply expectedSize. */
            public expectedSize: (number|Long);

            /** UploadStatusReply nextChunkIndex. */
            public nextChunkIndex: number;

            /**
             * Creates a new UploadStatusReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UploadStatusReply instance
             */
            public static create(properties?: storage.files.IUploadStatusReply): storage.files.UploadStatusReply;

            /**
             * Encodes the specified UploadStatusReply message. Does not implicitly {@link storage.files.UploadStatusReply.verify|verify} messages.
             * @param message UploadStatusReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IUploadStatusReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UploadStatusReply message, length delimited. Does not implicitly {@link storage.files.UploadStatusReply.verify|verify} messages.
             * @param message UploadStatusReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IUploadStatusReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UploadStatusReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UploadStatusReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.UploadStatusReply;

            /**
             * Decodes an UploadStatusReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UploadStatusReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.UploadStatusReply;

            /**
             * Verifies an UploadStatusReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UploadStatusReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UploadStatusReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.UploadStatusReply;

            /**
             * Creates a plain object from an UploadStatusReply message. Also converts values to other types if specified.
             * @param message UploadStatusReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.UploadStatusReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UploadStatusReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UploadStatusReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CompleteUploadRequest. */
        interface ICompleteUploadRequest {

            /** CompleteUploadRequest uploadId */
            uploadId?: (string|null);
        }

        /** Represents a CompleteUploadRequest. */
        class CompleteUploadRequest implements ICompleteUploadRequest {

            /**
             * Constructs a new CompleteUploadRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.ICompleteUploadRequest);

            /** CompleteUploadRequest uploadId. */
            public uploadId: string;

            /**
             * Creates a new CompleteUploadRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompleteUploadRequest instance
             */
            public static create(properties?: storage.files.ICompleteUploadRequest): storage.files.CompleteUploadRequest;

            /**
             * Encodes the specified CompleteUploadRequest message. Does not implicitly {@link storage.files.CompleteUploadRequest.verify|verify} messages.
             * @param message CompleteUploadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.ICompleteUploadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CompleteUploadRequest message, length delimited. Does not implicitly {@link storage.files.CompleteUploadRequest.verify|verify} messages.
             * @param message CompleteUploadRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.ICompleteUploadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompleteUploadRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompleteUploadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.CompleteUploadRequest;

            /**
             * Decodes a CompleteUploadRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CompleteUploadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.CompleteUploadRequest;

            /**
             * Verifies a CompleteUploadRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CompleteUploadRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CompleteUploadRequest
             */
            public static fromObject(object: { [k: string]: any }): storage.files.CompleteUploadRequest;

            /**
             * Creates a plain object from a CompleteUploadRequest message. Also converts values to other types if specified.
             * @param message CompleteUploadRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.CompleteUploadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CompleteUploadRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CompleteUploadRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CompleteUploadReply. */
        interface ICompleteUploadReply {

            /** CompleteUploadReply fileCid */
            fileCid?: (string|null);

            /** CompleteUploadReply leafHash */
            leafHash?: (Uint8Array|null);

            /** CompleteUploadReply pending */
            pending?: (boolean|null);
        }

        /** Represents a CompleteUploadReply. */
        class CompleteUploadReply implements ICompleteUploadReply {

            /**
             * Constructs a new CompleteUploadReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.ICompleteUploadReply);

            /** CompleteUploadReply fileCid. */
            public fileCid: string;

            /** CompleteUploadReply leafHash. */
            public leafHash: Uint8Array;

            /** CompleteUploadReply pending. */
            public pending: boolean;

            /**
             * Creates a new CompleteUploadReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompleteUploadReply instance
             */
            public static create(properties?: storage.files.ICompleteUploadReply): storage.files.CompleteUploadReply;

            /**
             * Encodes the specified CompleteUploadReply message. Does not implicitly {@link storage.files.CompleteUploadReply.verify|verify} messages.
             * @param message CompleteUploadReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.ICompleteUploadReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CompleteUploadReply message, length delimited. Does not implicitly {@link storage.files.CompleteUploadReply.verify|verify} messages.
             * @param message CompleteUploadReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.ICompleteUploadReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompleteUploadReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompleteUploadReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.CompleteUploadReply;

            /**
             * Decodes a CompleteUploadReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CompleteUploadReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.CompleteUploadReply;

            /**
             * Verifies a CompleteUploadReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CompleteUploadReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CompleteUploadReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.CompleteUploadReply;

            /**
             * Creates a plain object from a CompleteUploadReply message. Also converts values to other types if specified.
             * @param message CompleteUploadReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.CompleteUploadReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CompleteUploadReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CompleteUploadReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileRequest. */
        interface IFileRequest {

            /** FileRequest fileCid */
            fileCid?: (string|null);
        }

        /** Represents a FileRequest. */
        class FileRequest implements IFileRequest {

            /**
             * Constructs a new FileRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IFileRequest);

            /** FileRequest fileCid. */
            public fileCid: string;

            /**
             * Creates a new FileRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileRequest instance
             */
            public static create(properties?: storage.files.IFileRequest): storage.files.FileRequest;

            /**
             * Encodes the specified FileRequest message. Does not implicitly {@link storage.files.FileRequest.verify|verify} messages.
             * @param message FileRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileRequest message, length delimited. Does not implicitly {@link storage.files.FileRequest.verify|verify} messages.
             * @param message FileRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.FileRequest;

            /**
             * Decodes a FileRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.FileRequest;

            /**
             * Verifies a FileRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileRequest
             */
            public static fromObject(object: { [k: string]: any }): storage.files.FileRequest;

            /**
             * Creates a plain object from a FileRequest message. Also converts values to other types if specified.
             * @param message FileRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.FileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileMetadataReply. */
        interface IFileMetadataReply {

            /** FileMetadataReply fileCid */
            fileCid?: (string|null);

            /** FileMetadataReply filename */
            filename?: (string|null);

            /** FileMetadataReply mimeType */
            mimeType?: (string|null);

            /** FileMetadataReply sizeBytes */
            sizeBytes?: (number|Long|null);

            /** FileMetadataReply status */
            status?: (string|null);

            /** FileMetadataReply height */
            height?: (number|Long|null);

            /** FileMetadataReply processingStatus */
            processingStatus?: (string|null);
        }

        /** Represents a FileMetadataReply. */
        class FileMetadataReply implements IFileMetadataReply {

            /**
             * Constructs a new FileMetadataReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IFileMetadataReply);

            /** FileMetadataReply fileCid. */
            public fileCid: string;

            /** FileMetadataReply filename. */
            public filename: string;

            /** FileMetadataReply mimeType. */
            public mimeType: string;

            /** FileMetadataReply sizeBytes. */
            public sizeBytes: (number|Long);

            /** FileMetadataReply status. */
            public status: string;

            /** FileMetadataReply height. */
            public height: (number|Long);

            /** FileMetadataReply processingStatus. */
            public processingStatus: string;

            /**
             * Creates a new FileMetadataReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileMetadataReply instance
             */
            public static create(properties?: storage.files.IFileMetadataReply): storage.files.FileMetadataReply;

            /**
             * Encodes the specified FileMetadataReply message. Does not implicitly {@link storage.files.FileMetadataReply.verify|verify} messages.
             * @param message FileMetadataReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IFileMetadataReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileMetadataReply message, length delimited. Does not implicitly {@link storage.files.FileMetadataReply.verify|verify} messages.
             * @param message FileMetadataReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IFileMetadataReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileMetadataReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileMetadataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.FileMetadataReply;

            /**
             * Decodes a FileMetadataReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileMetadataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.FileMetadataReply;

            /**
             * Verifies a FileMetadataReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileMetadataReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileMetadataReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.FileMetadataReply;

            /**
             * Creates a plain object from a FileMetadataReply message. Also converts values to other types if specified.
             * @param message FileMetadataReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.FileMetadataReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileMetadataReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileMetadataReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileDataReply. */
        interface IFileDataReply {

            /** FileDataReply data */
            data?: (Uint8Array|null);
        }

        /** Represents a FileDataReply. */
        class FileDataReply implements IFileDataReply {

            /**
             * Constructs a new FileDataReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IFileDataReply);

            /** FileDataReply data. */
            public data: Uint8Array;

            /**
             * Creates a new FileDataReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDataReply instance
             */
            public static create(properties?: storage.files.IFileDataReply): storage.files.FileDataReply;

            /**
             * Encodes the specified FileDataReply message. Does not implicitly {@link storage.files.FileDataReply.verify|verify} messages.
             * @param message FileDataReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IFileDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDataReply message, length delimited. Does not implicitly {@link storage.files.FileDataReply.verify|verify} messages.
             * @param message FileDataReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IFileDataReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDataReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.FileDataReply;

            /**
             * Decodes a FileDataReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDataReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.FileDataReply;

            /**
             * Verifies a FileDataReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDataReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDataReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.FileDataReply;

            /**
             * Creates a plain object from a FileDataReply message. Also converts values to other types if specified.
             * @param message FileDataReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.FileDataReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDataReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDataReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ThumbnailItem. */
        interface IThumbnailItem {

            /** ThumbnailItem thumbnailCid */
            thumbnailCid?: (string|null);

            /** ThumbnailItem longEdge */
            longEdge?: (number|null);

            /** ThumbnailItem mimeType */
            mimeType?: (string|null);

            /** ThumbnailItem sizeBytes */
            sizeBytes?: (number|Long|null);

            /** ThumbnailItem width */
            width?: (number|null);

            /** ThumbnailItem height */
            height?: (number|null);
        }

        /** Represents a ThumbnailItem. */
        class ThumbnailItem implements IThumbnailItem {

            /**
             * Constructs a new ThumbnailItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IThumbnailItem);

            /** ThumbnailItem thumbnailCid. */
            public thumbnailCid: string;

            /** ThumbnailItem longEdge. */
            public longEdge: number;

            /** ThumbnailItem mimeType. */
            public mimeType: string;

            /** ThumbnailItem sizeBytes. */
            public sizeBytes: (number|Long);

            /** ThumbnailItem width. */
            public width: number;

            /** ThumbnailItem height. */
            public height: number;

            /**
             * Creates a new ThumbnailItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ThumbnailItem instance
             */
            public static create(properties?: storage.files.IThumbnailItem): storage.files.ThumbnailItem;

            /**
             * Encodes the specified ThumbnailItem message. Does not implicitly {@link storage.files.ThumbnailItem.verify|verify} messages.
             * @param message ThumbnailItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IThumbnailItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ThumbnailItem message, length delimited. Does not implicitly {@link storage.files.ThumbnailItem.verify|verify} messages.
             * @param message ThumbnailItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IThumbnailItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ThumbnailItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ThumbnailItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.ThumbnailItem;

            /**
             * Decodes a ThumbnailItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ThumbnailItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.ThumbnailItem;

            /**
             * Verifies a ThumbnailItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ThumbnailItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ThumbnailItem
             */
            public static fromObject(object: { [k: string]: any }): storage.files.ThumbnailItem;

            /**
             * Creates a plain object from a ThumbnailItem message. Also converts values to other types if specified.
             * @param message ThumbnailItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.ThumbnailItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ThumbnailItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ThumbnailItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ThumbnailsReply. */
        interface IThumbnailsReply {

            /** ThumbnailsReply fileCid */
            fileCid?: (string|null);

            /** ThumbnailsReply thumbnails */
            thumbnails?: (storage.files.IThumbnailItem[]|null);

            /** ThumbnailsReply processingStatus */
            processingStatus?: (string|null);
        }

        /** Represents a ThumbnailsReply. */
        class ThumbnailsReply implements IThumbnailsReply {

            /**
             * Constructs a new ThumbnailsReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IThumbnailsReply);

            /** ThumbnailsReply fileCid. */
            public fileCid: string;

            /** ThumbnailsReply thumbnails. */
            public thumbnails: storage.files.IThumbnailItem[];

            /** ThumbnailsReply processingStatus. */
            public processingStatus: string;

            /**
             * Creates a new ThumbnailsReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ThumbnailsReply instance
             */
            public static create(properties?: storage.files.IThumbnailsReply): storage.files.ThumbnailsReply;

            /**
             * Encodes the specified ThumbnailsReply message. Does not implicitly {@link storage.files.ThumbnailsReply.verify|verify} messages.
             * @param message ThumbnailsReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IThumbnailsReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ThumbnailsReply message, length delimited. Does not implicitly {@link storage.files.ThumbnailsReply.verify|verify} messages.
             * @param message ThumbnailsReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IThumbnailsReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ThumbnailsReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ThumbnailsReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.ThumbnailsReply;

            /**
             * Decodes a ThumbnailsReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ThumbnailsReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.ThumbnailsReply;

            /**
             * Verifies a ThumbnailsReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ThumbnailsReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ThumbnailsReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.ThumbnailsReply;

            /**
             * Creates a plain object from a ThumbnailsReply message. Also converts values to other types if specified.
             * @param message ThumbnailsReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.ThumbnailsReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ThumbnailsReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ThumbnailsReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileProofReply. */
        interface IFileProofReply {

            /** FileProofReply leafHash */
            leafHash?: (Uint8Array|null);

            /** FileProofReply globalRoot */
            globalRoot?: (Uint8Array|null);

            /** FileProofReply siblings */
            siblings?: (Uint8Array[]|null);

            /** FileProofReply height */
            height?: (number|Long|null);

            /** FileProofReply attested */
            attested?: (boolean|null);
        }

        /** Represents a FileProofReply. */
        class FileProofReply implements IFileProofReply {

            /**
             * Constructs a new FileProofReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IFileProofReply);

            /** FileProofReply leafHash. */
            public leafHash: Uint8Array;

            /** FileProofReply globalRoot. */
            public globalRoot: Uint8Array;

            /** FileProofReply siblings. */
            public siblings: Uint8Array[];

            /** FileProofReply height. */
            public height: (number|Long);

            /** FileProofReply attested. */
            public attested: boolean;

            /**
             * Creates a new FileProofReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileProofReply instance
             */
            public static create(properties?: storage.files.IFileProofReply): storage.files.FileProofReply;

            /**
             * Encodes the specified FileProofReply message. Does not implicitly {@link storage.files.FileProofReply.verify|verify} messages.
             * @param message FileProofReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IFileProofReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileProofReply message, length delimited. Does not implicitly {@link storage.files.FileProofReply.verify|verify} messages.
             * @param message FileProofReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IFileProofReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileProofReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileProofReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.FileProofReply;

            /**
             * Decodes a FileProofReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileProofReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.FileProofReply;

            /**
             * Verifies a FileProofReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileProofReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileProofReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.FileProofReply;

            /**
             * Creates a plain object from a FileProofReply message. Also converts values to other types if specified.
             * @param message FileProofReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.FileProofReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileProofReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileProofReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DeleteFileReply. */
        interface IDeleteFileReply {
        }

        /** Represents a DeleteFileReply. */
        class DeleteFileReply implements IDeleteFileReply {

            /**
             * Constructs a new DeleteFileReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IDeleteFileReply);

            /**
             * Creates a new DeleteFileReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteFileReply instance
             */
            public static create(properties?: storage.files.IDeleteFileReply): storage.files.DeleteFileReply;

            /**
             * Encodes the specified DeleteFileReply message. Does not implicitly {@link storage.files.DeleteFileReply.verify|verify} messages.
             * @param message DeleteFileReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IDeleteFileReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteFileReply message, length delimited. Does not implicitly {@link storage.files.DeleteFileReply.verify|verify} messages.
             * @param message DeleteFileReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IDeleteFileReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteFileReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteFileReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.DeleteFileReply;

            /**
             * Decodes a DeleteFileReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteFileReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.DeleteFileReply;

            /**
             * Verifies a DeleteFileReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteFileReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteFileReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.DeleteFileReply;

            /**
             * Creates a plain object from a DeleteFileReply message. Also converts values to other types if specified.
             * @param message DeleteFileReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.DeleteFileReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteFileReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeleteFileReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SpaceReply. */
        interface ISpaceReply {

            /** SpaceReply quotaBytes */
            quotaBytes?: (number|Long|null);

            /** SpaceReply usedBytes */
            usedBytes?: (number|Long|null);
        }

        /** Represents a SpaceReply. */
        class SpaceReply implements ISpaceReply {

            /**
             * Constructs a new SpaceReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.ISpaceReply);

            /** SpaceReply quotaBytes. */
            public quotaBytes: (number|Long);

            /** SpaceReply usedBytes. */
            public usedBytes: (number|Long);

            /**
             * Creates a new SpaceReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SpaceReply instance
             */
            public static create(properties?: storage.files.ISpaceReply): storage.files.SpaceReply;

            /**
             * Encodes the specified SpaceReply message. Does not implicitly {@link storage.files.SpaceReply.verify|verify} messages.
             * @param message SpaceReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.ISpaceReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SpaceReply message, length delimited. Does not implicitly {@link storage.files.SpaceReply.verify|verify} messages.
             * @param message SpaceReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.ISpaceReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SpaceReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SpaceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.SpaceReply;

            /**
             * Decodes a SpaceReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SpaceReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.SpaceReply;

            /**
             * Verifies a SpaceReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SpaceReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SpaceReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.SpaceReply;

            /**
             * Creates a plain object from a SpaceReply message. Also converts values to other types if specified.
             * @param message SpaceReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.SpaceReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SpaceReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SpaceReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WalletChallengeRequest. */
        interface IWalletChallengeRequest {

            /** WalletChallengeRequest address */
            address?: (string|null);
        }

        /** Represents a WalletChallengeRequest. */
        class WalletChallengeRequest implements IWalletChallengeRequest {

            /**
             * Constructs a new WalletChallengeRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IWalletChallengeRequest);

            /** WalletChallengeRequest address. */
            public address: string;

            /**
             * Creates a new WalletChallengeRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WalletChallengeRequest instance
             */
            public static create(properties?: storage.files.IWalletChallengeRequest): storage.files.WalletChallengeRequest;

            /**
             * Encodes the specified WalletChallengeRequest message. Does not implicitly {@link storage.files.WalletChallengeRequest.verify|verify} messages.
             * @param message WalletChallengeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IWalletChallengeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WalletChallengeRequest message, length delimited. Does not implicitly {@link storage.files.WalletChallengeRequest.verify|verify} messages.
             * @param message WalletChallengeRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IWalletChallengeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WalletChallengeRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WalletChallengeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.WalletChallengeRequest;

            /**
             * Decodes a WalletChallengeRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WalletChallengeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.WalletChallengeRequest;

            /**
             * Verifies a WalletChallengeRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WalletChallengeRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WalletChallengeRequest
             */
            public static fromObject(object: { [k: string]: any }): storage.files.WalletChallengeRequest;

            /**
             * Creates a plain object from a WalletChallengeRequest message. Also converts values to other types if specified.
             * @param message WalletChallengeRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.WalletChallengeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WalletChallengeRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WalletChallengeRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WalletChallengeReply. */
        interface IWalletChallengeReply {

            /** WalletChallengeReply nonce */
            nonce?: (string|null);
        }

        /** Represents a WalletChallengeReply. */
        class WalletChallengeReply implements IWalletChallengeReply {

            /**
             * Constructs a new WalletChallengeReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IWalletChallengeReply);

            /** WalletChallengeReply nonce. */
            public nonce: string;

            /**
             * Creates a new WalletChallengeReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WalletChallengeReply instance
             */
            public static create(properties?: storage.files.IWalletChallengeReply): storage.files.WalletChallengeReply;

            /**
             * Encodes the specified WalletChallengeReply message. Does not implicitly {@link storage.files.WalletChallengeReply.verify|verify} messages.
             * @param message WalletChallengeReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IWalletChallengeReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WalletChallengeReply message, length delimited. Does not implicitly {@link storage.files.WalletChallengeReply.verify|verify} messages.
             * @param message WalletChallengeReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IWalletChallengeReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WalletChallengeReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WalletChallengeReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.WalletChallengeReply;

            /**
             * Decodes a WalletChallengeReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WalletChallengeReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.WalletChallengeReply;

            /**
             * Verifies a WalletChallengeReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WalletChallengeReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WalletChallengeReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.WalletChallengeReply;

            /**
             * Creates a plain object from a WalletChallengeReply message. Also converts values to other types if specified.
             * @param message WalletChallengeReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.WalletChallengeReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WalletChallengeReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WalletChallengeReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WalletVerifyRequest. */
        interface IWalletVerifyRequest {

            /** WalletVerifyRequest address */
            address?: (string|null);

            /** WalletVerifyRequest signature */
            signature?: (string|null);
        }

        /** Represents a WalletVerifyRequest. */
        class WalletVerifyRequest implements IWalletVerifyRequest {

            /**
             * Constructs a new WalletVerifyRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IWalletVerifyRequest);

            /** WalletVerifyRequest address. */
            public address: string;

            /** WalletVerifyRequest signature. */
            public signature: string;

            /**
             * Creates a new WalletVerifyRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WalletVerifyRequest instance
             */
            public static create(properties?: storage.files.IWalletVerifyRequest): storage.files.WalletVerifyRequest;

            /**
             * Encodes the specified WalletVerifyRequest message. Does not implicitly {@link storage.files.WalletVerifyRequest.verify|verify} messages.
             * @param message WalletVerifyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IWalletVerifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WalletVerifyRequest message, length delimited. Does not implicitly {@link storage.files.WalletVerifyRequest.verify|verify} messages.
             * @param message WalletVerifyRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IWalletVerifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WalletVerifyRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WalletVerifyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.WalletVerifyRequest;

            /**
             * Decodes a WalletVerifyRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WalletVerifyRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.WalletVerifyRequest;

            /**
             * Verifies a WalletVerifyRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WalletVerifyRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WalletVerifyRequest
             */
            public static fromObject(object: { [k: string]: any }): storage.files.WalletVerifyRequest;

            /**
             * Creates a plain object from a WalletVerifyRequest message. Also converts values to other types if specified.
             * @param message WalletVerifyRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.WalletVerifyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WalletVerifyRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WalletVerifyRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RefreshRequest. */
        interface IRefreshRequest {

            /** RefreshRequest refreshToken */
            refreshToken?: (string|null);
        }

        /** Represents a RefreshRequest. */
        class RefreshRequest implements IRefreshRequest {

            /**
             * Constructs a new RefreshRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IRefreshRequest);

            /** RefreshRequest refreshToken. */
            public refreshToken: string;

            /**
             * Creates a new RefreshRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RefreshRequest instance
             */
            public static create(properties?: storage.files.IRefreshRequest): storage.files.RefreshRequest;

            /**
             * Encodes the specified RefreshRequest message. Does not implicitly {@link storage.files.RefreshRequest.verify|verify} messages.
             * @param message RefreshRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IRefreshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RefreshRequest message, length delimited. Does not implicitly {@link storage.files.RefreshRequest.verify|verify} messages.
             * @param message RefreshRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IRefreshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RefreshRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RefreshRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.RefreshRequest;

            /**
             * Decodes a RefreshRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RefreshRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.RefreshRequest;

            /**
             * Verifies a RefreshRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RefreshRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RefreshRequest
             */
            public static fromObject(object: { [k: string]: any }): storage.files.RefreshRequest;

            /**
             * Creates a plain object from a RefreshRequest message. Also converts values to other types if specified.
             * @param message RefreshRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.RefreshRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RefreshRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RefreshRequest
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AuthReply. */
        interface IAuthReply {

            /** AuthReply token */
            token?: (string|null);

            /** AuthReply userId */
            userId?: (string|null);

            /** AuthReply refreshToken */
            refreshToken?: (string|null);
        }

        /** Represents an AuthReply. */
        class AuthReply implements IAuthReply {

            /**
             * Constructs a new AuthReply.
             * @param [properties] Properties to set
             */
            constructor(properties?: storage.files.IAuthReply);

            /** AuthReply token. */
            public token: string;

            /** AuthReply userId. */
            public userId: string;

            /** AuthReply refreshToken. */
            public refreshToken: string;

            /**
             * Creates a new AuthReply instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthReply instance
             */
            public static create(properties?: storage.files.IAuthReply): storage.files.AuthReply;

            /**
             * Encodes the specified AuthReply message. Does not implicitly {@link storage.files.AuthReply.verify|verify} messages.
             * @param message AuthReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: storage.files.IAuthReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AuthReply message, length delimited. Does not implicitly {@link storage.files.AuthReply.verify|verify} messages.
             * @param message AuthReply message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: storage.files.IAuthReply, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuthReply message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuthReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): storage.files.AuthReply;

            /**
             * Decodes an AuthReply message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AuthReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): storage.files.AuthReply;

            /**
             * Verifies an AuthReply message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuthReply message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuthReply
             */
            public static fromObject(object: { [k: string]: any }): storage.files.AuthReply;

            /**
             * Creates a plain object from an AuthReply message. Also converts values to other types if specified.
             * @param message AuthReply
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: storage.files.AuthReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuthReply to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AuthReply
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
