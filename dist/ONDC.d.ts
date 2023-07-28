import * as Types from "./types";
export default class ONDC {
    host: string;
    apiKey: string;
    privateKey: string;
    bapId: string;
    bapUri: string;
    bppId: string;
    bppUri: string;
    key?: string;
    ttl?: string;
    country: string;
    city: string;
    domain?: string;
    uniqueKey: string;
    subscriberId: string;
    signingPublicKey?: string;
    constructor(opts: Types.ONDCOptions);
    search(intent: Types.Intent, ctxOpts?: any): Promise<any>;
    select(order: Types.Order, ctxOpts?: any): Promise<any>;
    init(order: Types.Order, ctxOpts?: any): Promise<any>;
    confirm(order: Types.Order, ctxOpts?: any): Promise<any>;
    status(order_id: string, ctxOpts?: any): Promise<any>;
    track(order_id: string, callback_url?: string, ctxOpts?: any): Promise<any>;
    cancel(order_id: string, cancellation_reason_id?: string, descriptor?: Types.Descriptor, ctxOpts?: any): Promise<any>;
    update(update_target: string, order: Types.Order, ctxOpts?: any): Promise<any>;
    rating(rating: Types.Rating, ctxOpts?: any): Promise<any>;
    support(ref_id?: string, ctxOpts?: any): Promise<any>;
    on_search(catalog: Types.Catalog, ctxOpts?: any, error?: Error): Promise<any>;
    on_select(order: Types.onSelectMessage, ctxOpts?: any, error?: Error): Promise<any>;
    on_init(order: Types.onInitMessage, ctxOpts?: any, error?: Error): Promise<any>;
    on_confirm(order: Types.Order, ctxOpts?: any, error?: Error): Promise<any>;
    on_status(order: Types.Order, ctxOpts?: any, error?: Error): Promise<any>;
    on_track(tracking: Types.Tracking, ctxOpts?: any, error?: Error): Promise<any>;
    on_cancel(order: Types.Order, ctxOpts?: any, error?: Error): Promise<any>;
    on_update(order: Types.Order, ctxOpts?: any, error?: Error): Promise<any>;
    on_rating(rankingAck: Types.RatingAck, ctxOpts?: any, error?: Error): Promise<any>;
    on_support(phone?: string, email?: string, uri?: string, ctxOpts?: any, error?: Error): Promise<any>;
    get_cancellation_reasons(ctxOpts?: any): Promise<any>;
    cancellation_reasons(reasons?: Types.Option[], ctxOpts?: any): Promise<any>;
    get_return_reasons(ctxOpts?: any): Promise<any>;
    return_reasons(return_reasons?: Types.Option[], ctxOpts?: any): Promise<any>;
    get_rating_categories(ctxOpts?: any): Promise<any>;
    rating_categories(rating_categories?: Types.Option[], ctxOpts?: any): Promise<any>;
    get_feedback_categories(ctxOpts?: any): Promise<any>;
    feedback_categories(feedback_categories?: Types.Option[], ctxOpts?: any): Promise<any>;
    get_feedback_form(ctxOpts?: any): Promise<any>;
    feedback_form(feedback_form?: any, feedback_url?: any, ctxOpts?: any, error?: Error): Promise<any>;
    getContext(action: string, ctxOpts?: any): Types.Context;
    getOptions(path: string): any;
    createAuthorizationHeader(message: any): Promise<string>;
    verifyHeader(header: string, subscriber_details: Types.SubscriberDetail, body: any): Promise<boolean>;
}
