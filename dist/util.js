"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const libsodium_wrappers_1 = __importStar(require("libsodium-wrappers"));
async function executeRequest(opts, context, message, error, body) {
    const baseBody = body || {
        "context": context,
        "message": message,
    };
    if (error) {
        body["error"] = error;
    }
    var options = Object.assign(Object.assign({}, opts), { body: JSON.stringify(baseBody) });
    const response = await (0, node_fetch_1.default)(options.url, {
        method: options.method,
        body: options.body,
        headers: options.headers
    });
    try {
        const data = await response.json();
        return data;
    }
    catch (ex) {
        throw new Error("Invalid json in response body");
    }
}
async function createSigningString(message, created, expires) {
    if (!created)
        created = Math.floor(new Date().getTime() / 1000 - (1 * 60)).toString();
    if (!expires)
        expires = (parseInt(created) + (1 * 60 * 60)).toString();
    await libsodium_wrappers_1.default.ready;
    const sodium = libsodium_wrappers_1.default;
    const digest = sodium.crypto_generichash(64, sodium.from_string(message));
    const digest_base64 = sodium.to_base64(digest, libsodium_wrappers_1.base64_variants.ORIGINAL);
    const signing_string = `(created): ${created}
(expires): ${expires}
digest: BLAKE-512=${digest_base64}`;
    console.log(signing_string);
    return { signing_string, expires, created };
}
async function signMessage(signing_string, privateKey) {
    await libsodium_wrappers_1.default.ready;
    const sodium = libsodium_wrappers_1.default;
    const signedMessage = sodium.crypto_sign_detached(signing_string, sodium.from_base64(privateKey, libsodium_wrappers_1.base64_variants.ORIGINAL));
    return sodium.to_base64(signedMessage, libsodium_wrappers_1.base64_variants.ORIGINAL);
}
async function verifyMessage(signedString, signingString, publicKey) {
    try {
        await libsodium_wrappers_1.default.ready;
        const sodium = libsodium_wrappers_1.default;
        return sodium.crypto_sign_verify_detached(sodium.from_base64(signedString, libsodium_wrappers_1.base64_variants.ORIGINAL), signingString, sodium.from_base64(publicKey, libsodium_wrappers_1.base64_variants.ORIGINAL));
    }
    catch (error) {
        return false;
    }
}
function split_auth_header(auth_header) {
    const header = auth_header.replace('Signature ', '');
    let re = /\s*([^=]+)=([^,]+)[,]?/g;
    let m;
    let parts = {};
    while ((m = re.exec(header)) !== null) {
        if (m) {
            parts[m[1]] = remove_quotes(m[2]);
        }
    }
    return parts;
}
function remove_quotes(value) {
    if (value.length >= 2 && value.charAt(0) == '"' && value.charAt(value.length - 1) == '"') {
        value = value.substring(1, value.length - 1);
    }
    return value;
}
exports.default = {
    executeRequest,
    createSigningString,
    signMessage,
    verifyMessage,
    split_auth_header,
};
