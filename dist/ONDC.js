"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("./util"));
const uuid_1 = require("uuid");
class ONDC {
    constructor(opts) {
        this.host = opts.host;
        this.apiKey = opts.apiKey || '<API Key>';
        this.bapId = opts.bapId;
        this.bapUri = opts.bapUri;
        this.bppId = opts.bppId;
        this.bppUri = opts.bppUri;
        this.ttl = opts.ttl;
        this.country = opts.country;
        this.city = opts.city;
        this.domain = opts.domain;
        this.key = opts.encryptionPublicKey;
        this.signingPublicKey = opts.signingPublicKey;
        this.privateKey = opts.privateKey || "";
        this.uniqueKey = opts.uniqueKey || (0, uuid_1.v4)();
        this.subscriberId = opts.subscriberId || "";
    }
    async search(intent, ctxOpts) {
        const options = this.getOptions('search');
        const context = this.getContext("search", ctxOpts);
        const message = {
            "intent": intent
        };
        return (await util_1.default.executeRequest(options, context, message));
    }
    async select(order, ctxOpts) {
        const options = this.getOptions('select');
        const context = this.getContext("select", ctxOpts);
        const message = {
            order: order
        };
        return (await util_1.default.executeRequest(options, context, message));
    }
    async init(order, ctxOpts) {
        const options = this.getOptions('init');
        const context = this.getContext("init", ctxOpts);
        const message = {
            order: order
        };
        return (await util_1.default.executeRequest(options, context, message));
    }
    async confirm(order, ctxOpts) {
        const options = this.getOptions('confirm');
        const context = this.getContext("confirm", ctxOpts);
        const message = {
            order: order
        };
        return (await util_1.default.executeRequest(options, context, message));
    }
    async status(order_id, ctxOpts) {
        const options = this.getOptions('status');
        const context = this.getContext("status", ctxOpts);
        const message = {
            order_id: order_id
        };
        return (await util_1.default.executeRequest(options, context, message));
    }
    async track(order_id, callback_url, ctxOpts) {
        const options = this.getOptions('track');
        const context = this.getContext("track", ctxOpts);
        const message = {
            order_id: order_id,
            callback_url: callback_url,
        };
        return (await util_1.default.executeRequest(options, context, message));
    }
    async cancel(order_id, cancellation_reason_id, descriptor, ctxOpts) {
        const options = this.getOptions('cancel');
        const context = this.getContext("cancel", ctxOpts);
        const message = {
            order_id: order_id,
            cancellation_reason_id: cancellation_reason_id,
            descriptor: descriptor,
        };
        return (await util_1.default.executeRequest(options, context, message));
    }
    async update(update_target, order, ctxOpts) {
        const options = this.getOptions('update');
        const context = this.getContext("update", ctxOpts);
        const message = {
            update_target: update_target,
            order: order,
        };
        return (await util_1.default.executeRequest(options, context, message));
    }
    async rating(rating, ctxOpts) {
        const options = this.getOptions('rating');
        const context = this.getContext("rating", ctxOpts);
        const message = rating;
        return (await util_1.default.executeRequest(options, context, message));
    }
    async support(ref_id, ctxOpts) {
        const options = this.getOptions('support');
        const context = this.getContext("support", ctxOpts);
        const message = {
            ref_id,
        };
        return (await util_1.default.executeRequest(options, context, message));
    }
    async on_search(catalog, ctxOpts, error) {
        const options = this.getOptions('on_search');
        const context = this.getContext("on_search", ctxOpts);
        const message = {
            catalog
        };
        options.headers.Authorization = await this.createAuthorizationHeader({
            context: context,
            message: message,
        });
        return (await util_1.default.executeRequest(options, context, message, error));
    }
    async on_select(message, ctxOpts, error) {
        const options = this.getOptions('on_select');
        const context = this.getContext("on_select", ctxOpts);
        return (await util_1.default.executeRequest(options, context, message, error));
    }
    async on_init(message, ctxOpts, error) {
        const options = this.getOptions('on_init');
        const context = this.getContext("on_init", ctxOpts);
        return (await util_1.default.executeRequest(options, context, message, error));
    }
    async on_confirm(order, ctxOpts, error) {
        const options = this.getOptions('on_confirm');
        const context = this.getContext("on_confirm", ctxOpts);
        const message = {
            order: order
        };
        return (await util_1.default.executeRequest(options, context, message, error));
    }
    async on_status(order, ctxOpts, error) {
        const options = this.getOptions('on_status');
        const context = this.getContext("on_status", ctxOpts);
        const message = {
            order,
        };
        return (await util_1.default.executeRequest(options, context, message, error));
    }
    async on_track(tracking, ctxOpts, error) {
        const options = this.getOptions('on_track');
        const context = this.getContext("on_track", ctxOpts);
        const message = {
            tracking,
        };
        return (await util_1.default.executeRequest(options, context, message, error));
    }
    async on_cancel(order, ctxOpts, error) {
        const options = this.getOptions('on_cancel');
        const context = this.getContext("on_cancel", ctxOpts);
        const message = {
            order,
        };
        return (await util_1.default.executeRequest(options, context, message, error));
    }
    async on_update(order, ctxOpts, error) {
        const options = this.getOptions('on_update');
        const context = this.getContext("on_update", ctxOpts);
        const message = {
            order,
        };
        return (await util_1.default.executeRequest(options, context, message, error));
    }
    async on_rating(rankingAck, ctxOpts, error) {
        const options = this.getOptions('on_rating');
        const context = this.getContext("on_rating", ctxOpts);
        const message = {
            rankingAck,
        };
        return (await util_1.default.executeRequest(options, context, message, error));
    }
    async on_support(phone, email, uri, ctxOpts, error) {
        const options = this.getOptions('on_support');
        const context = this.getContext("on_support", ctxOpts);
        const message = {
            phone,
            email,
            uri,
        };
        return (await util_1.default.executeRequest(options, context, message, error));
    }
    async get_cancellation_reasons(ctxOpts) {
        const options = this.getOptions('get_cancellation_reasons');
        const context = this.getContext("get_cancellation_reasons", ctxOpts);
        return (await util_1.default.executeRequest(options, context));
    }
    async cancellation_reasons(reasons, ctxOpts) {
        const options = this.getOptions('cancellation_reasons');
        const context = this.getContext("cancellation_reasons", ctxOpts);
        const message = {
            cancellation_reasons: reasons
        };
        return (await util_1.default.executeRequest(options, context, message));
    }
    async get_return_reasons(ctxOpts) {
        const options = this.getOptions('get_return_reasons');
        const context = this.getContext("get_return_reasons", ctxOpts);
        return (await util_1.default.executeRequest(options, context));
    }
    async return_reasons(return_reasons, ctxOpts) {
        const options = this.getOptions('return_reasons');
        const context = this.getContext("return_reasons", ctxOpts);
        return (await util_1.default.executeRequest(options, context, undefined, undefined, {
            context,
            return_reasons,
        }));
    }
    async get_rating_categories(ctxOpts) {
        const options = this.getOptions('get_rating_categories');
        const context = this.getContext("get_rating_categories", ctxOpts);
        return (await util_1.default.executeRequest(options, context));
    }
    getContext(action, ctxOpts = {}) {
        return {
            "domain": ctxOpts.domain || this.domain || "domain",
            "action": ctxOpts.action || action,
            "country": ctxOpts.country || this.country,
            "city": ctxOpts.city || this.city,
            "core_version": ctxOpts.core_version || "0.9.1",
            "transaction_id": ctxOpts.transactionId || (0, uuid_1.v4)(),
            "message_id": ctxOpts.messageId || (0, uuid_1.v4)(),
            "bap_id": ctxOpts.bapId || this.bapId,
            "bap_uri": ctxOpts.bapUri || this.bapUri,
            "bpp_id": ctxOpts.bppId || this.bppId,
            "bpp_uri": ctxOpts.bppUri || this.bppUri,
            "timestamp": ctxOpts.timestamp || new Date().toISOString(),
            "key": ctxOpts.key || this.key,
            "ttl": ctxOpts.ttl || this.ttl,
        };
    }
    getOptions(path) {
        return {
            'method': 'POST',
            'url': `${this.host}/${path}`,
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': this.apiKey
            },
        };
    }
    async createAuthorizationHeader(message) {
        const { signing_string, expires, created } = await util_1.default.createSigningString(JSON.stringify(message));
        const signature = await util_1.default.signMessage(signing_string, this.privateKey || "");
        const subscriber_id = this.subscriberId;
        const header = `Signature keyId="${subscriber_id}|${this.uniqueKey}|ed25519",algorithm="ed25519",created="${created}",expires="${expires}",headers="(created) (expires) digest",signature="${signature}"`;
        return header;
    }
    async verifyHeader(header, subscriber_details, body) {
        try {
            const parts = util_1.default.split_auth_header(header);
            if (!parts || Object.keys(parts).length === 0) {
                throw (new Error("Header parsing failed"));
            }
            const rawBody = JSON.stringify(body);
            const public_key = subscriber_details.signing_public_key;
            const { signing_string } = await util_1.default.createSigningString(rawBody, parts['created'], parts['expires']);
            const verified = await util_1.default.verifyMessage(parts['signature'], signing_string, public_key);
            return verified;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
}
exports.default = ONDC;
