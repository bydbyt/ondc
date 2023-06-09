export interface paths {
    "/search": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message: {
                            intent?: Intent;
                        };
                    };
                };
            };
        };
    };
    "/select": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message: {
                            order: Order;
                        };
                    };
                };
            };
        };
    };
    "/init": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message: {
                            order: Order;
                        };
                    };
                };
            };
        };
    };
    "/confirm": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message: {
                            order: Order;
                        };
                    };
                };
            };
        };
    };
    "/status": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message: {
                            order_id: string;
                        };
                    };
                };
            };
        };
    };
    "/track": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message: {
                            order_id: string;
                            callback_url?: string;
                        };
                    };
                };
            };
        };
    };
    "/cancel": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message: {
                            order_id: string;
                            cancellation_reason_id?: string;
                            descriptor?: Descriptor;
                        };
                    };
                };
            };
        };
    };
    "/update": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message: {
                            update_target: string;
                            order: Order;
                        };
                    };
                };
            };
        };
    };
    "/rating": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message: Rating;
                    };
                };
            };
        };
    };
    "/support": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message: {
                            ref_id?: string;
                        };
                    };
                };
            };
        };
    };
    "/on_search": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message?: {
                                ack: Ack;
                            };
                            error?: Error;
                        } & {
                            context: unknown;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message?: {
                            catalog: Catalog;
                        };
                        error?: Error;
                    };
                };
            };
        };
    };
    "/on_select": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message?: {
                            order: {
                                provider?: Provider;
                                provider_location?: Location;
                                items?: (Item & {
                                    quantity?: ItemQuantity;
                                })[];
                                add_ons?: AddOn[];
                                offers?: Offer[];
                                quote?: Quotation;
                            };
                        };
                        error?: Error;
                    };
                };
            };
        };
    };
    "/on_init": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message?: {
                            order: {
                                provider?: {
                                    id?: string;
                                };
                                provider_location?: {
                                    id?: string;
                                };
                                items?: {
                                    id?: string;
                                    quantity?: ItemQuantitySub;
                                }[];
                                add_ons?: {
                                    id?: string;
                                }[];
                                offers?: {
                                    id?: string;
                                }[];
                                billing?: Billing;
                                fulfillment?: Fulfillment;
                                quote?: Quotation;
                                payment?: Payment;
                            };
                        };
                        error?: Error;
                    };
                };
            };
        };
    };
    "/on_confirm": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message?: {
                            order: Order;
                        };
                        error?: Error;
                    };
                };
            };
        };
    };
    "/on_track": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message?: {
                            tracking: Tracking;
                        };
                        error?: Error;
                    };
                };
            };
        };
    };
    "/on_cancel": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message?: {
                            order: Order;
                        };
                        error?: Error;
                    };
                };
            };
        };
    };
    "/on_update": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message?: {
                            order: Order;
                        };
                        error?: Error;
                    };
                };
            };
        };
    };
    "/on_status": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message?: {
                            order: Order;
                        };
                        error?: Error;
                    };
                };
            };
        };
    };
    "/on_rating": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message?: RatingAck;
                        error?: Error;
                    };
                };
            };
        };
    };
    "/on_support": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context: Context;
                        message?: {
                            phone?: string;
                            email?: string;
                            uri?: string;
                        };
                        error?: Error;
                    };
                };
            };
        };
    };
    "/get_cancellation_reasons": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context?: Context;
                    };
                };
            };
        };
    };
    "/cancellation_reasons": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context?: Context;
                        message?: {
                            cancellation_reasons?: Option[];
                        };
                    };
                };
            };
        };
    };
    "/get_return_reasons": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context?: Context;
                    };
                };
            };
        };
    };
    "/return_reasons": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context?: Context;
                        return_reasons?: Option[];
                    };
                };
            };
        };
    };
    "/get_rating_categories": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context?: Context;
                    };
                };
            };
        };
    };
    "/rating_categories": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context?: Context;
                        rating_categories?: string[];
                    };
                };
            };
        };
    };
    "/get_feedback_categories": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context?: Context;
                    };
                };
            };
        };
    };
    "/feedback_categories": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context?: Context;
                        feedback_categories?: string[];
                    };
                };
            };
        };
    };
    "/get_feedback_form": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context?: Context;
                        message?: {
                            rating_value?: number;
                            rating_category?: string;
                        };
                    };
                };
            };
        };
    };
    "/feedback_form": {
        post: {
            responses: {
                200: {
                    content: {
                        "application/json": {
                            message: {
                                ack: Ack;
                            };
                            error?: Error;
                        };
                    };
                };
            };
            requestBody: {
                content: {
                    "application/json": {
                        context?: Context;
                        message?: Feedback;
                    };
                };
            };
        };
    };
}
export type onSelectMessage = {
    provider?: Provider;
    provider_location?: Location;
    items?: any;
    add_ons?: AddOn[];
    offers?: Offer[];
    quote?: Quotation;
    fulfillments?: Fulfillment[];
};
export type onInitMessage = {
    provider?: Provider;
    provider_location?: Location;
    items?: any;
    add_ons?: AddOn[];
    offers?: Offer[];
    billing?: Billing;
    fulfillment?: Fulfillment[];
    quote?: Quotation;
    payment?: Payment;
};
export type ONDCOptions = {
    host: string;
    apiKey?: string;
    bapId: string;
    bapUri: string;
    bppId: string;
    bppUri: string;
    encryptionPublicKey?: string;
    signingPublicKey?: string;
    ttl?: string;
    country: string;
    city: string;
    domain?: string;
    privateKey?: string;
    uniqueKey?: string;
    subscriberId?: string;
};
export type SubscriberDetail = {
    subscriber_id: string;
    subscriber_url: string;
    type: string;
    signing_public_key: string;
    valid_until: string;
};
export type Contact = {
    phone?: string;
    email?: string;
    tags?: Tags;
};
export type Domain = string;
export type Country = {
    name?: string;
    code?: string;
};
export type City = {
    name?: string;
    code?: string;
};
export type Action = "search" | "select" | "init" | "confirm" | "update" | "status" | "track" | "cancel" | "rating" | "support" | "on_search" | "on_select" | "on_init" | "on_confirm" | "on_update" | "on_status" | "on_track" | "on_cancel" | "on_rating" | "on_support";
export type Context = {
    domain: Domain;
    country: string;
    city: string;
    action: Action;
    core_version: string;
    bap_id: string;
    bap_uri: string;
    bpp_id?: string;
    bpp_uri?: string;
    transaction_id: string;
    message_id: string;
    timestamp: string;
    key?: string;
    ttl?: string;
};
export type Scalar = {
    type?: "CONSTANT" | "VARIABLE";
    value: number;
    estimated_value?: number;
    computed_value?: number;
    range?: {
        min?: number;
        max?: number;
    };
    unit: string;
};
export type Schedule = {
    frequency?: Duration;
    holidays?: string[];
    times?: string[];
};
export type Duration = string;
export type State = {
    descriptor?: Descriptor;
    updated_at?: string;
    updated_by?: string;
};
export type ItemQuantitySub = {
    count?: number;
    measure?: Scalar;
};
export type ItemQuantity = {
    allocated?: ItemQuantitySub;
    available?: ItemQuantitySub;
    maximum?: ItemQuantitySub;
    minimum?: ItemQuantitySub;
    selected?: ItemQuantitySub;
};
export type Document = {
    url?: string;
    label?: string;
};
export type Organization = {
    name?: string;
    cred?: string;
};
export type Time = {
    label?: string;
    timestamp?: string;
    duration?: Duration;
    range?: {
        start?: string;
        end?: string;
    };
    days?: string;
    schedule?: Schedule;
};
export type Fulfillment = {
    id?: string;
    "@ondc/org/provider_name"?: string;
    "@ondc/org/category"?: string;
    "@ondc/org/TAT"?: string;
    type?: string;
    provider_id?: string;
    rating?: number;
    state?: State;
    tracking?: boolean;
    customer?: {
        person?: Person;
        contact?: Contact;
    };
    agent?: Agent;
    person?: Person;
    contact?: Contact;
    vehicle?: Vehicle;
    start?: {
        location?: Location;
        time?: Time;
        instructions?: Descriptor;
        contact?: Contact;
        person?: Person;
        authorization?: Authorization;
    };
    end?: {
        location?: Location;
        time?: Time;
        instructions?: Descriptor;
        contact?: Contact;
        person?: Person;
        authorization?: Authorization;
    };
    rateable?: Rateable;
    tags?: Tags;
};
export type Billing = {
    name: string;
    organization?: Organization;
    address?: Address;
    email?: string;
    phone: string;
    time?: Time;
    tax_number?: string;
    created_at?: string;
    updated_at?: string;
};
export type Order = {
    id?: string;
    state?: string;
    provider?: {
        id?: string;
        locations?: {
            id: string;
        }[];
    };
    items?: {
        id: string;
        quantity?: ItemQuantitySub;
    }[];
    add_ons?: {
        id: string;
    }[];
    offers?: {
        id: string;
    }[];
    documents?: Document[];
    billing?: Billing;
    fulfillment?: Fulfillment;
    quote?: Quotation;
    payment?: Payment;
    created_at?: string;
    updated_at?: string;
};
export type Image = string;
export type Descriptor = {
    name?: string;
    code?: string;
    symbol?: string;
    short_desc?: string;
    long_desc?: string;
    images?: Image[];
    audio?: string;
    "3d_render"?: string;
};
export type Price = {
    currency?: string;
    value?: string;
    estimated_value?: string;
    computed_value?: string;
    listed_value?: string;
    offered_value?: string;
    minimum_value?: string;
    maximum_value?: string;
};
export type Tags = {
    [key: string]: string;
};
export type Person = {
    name?: string;
    image?: Image;
    dob?: string;
    gender?: string;
    cred?: string;
    tags?: Tags;
};
export type Ack = {
    status: "ACK" | "NACK";
};
export type AddOn = {
    id?: string;
    descriptor?: Descriptor;
    price?: Price;
};
export type Address = {
    door?: string;
    name?: string;
    building?: string;
    street?: string;
    locality?: string;
    ward?: string;
    city?: string;
    state?: string;
    country?: string;
    area_code?: string;
};
export type Agent = Person & Contact & {
    rateable?: Rateable;
};
export type Authorization = {
    type?: string;
    token?: string;
    valid_from?: string;
    valid_to?: string;
    status?: string;
};
export type Cancellation = {
    type?: "full" | "partial";
    ref_id?: string;
    policies?: Policy[];
    time?: string;
    cancelled_by?: string;
    reasons?: Option;
    selected_reason?: {
        id?: string;
    };
    additional_description?: Descriptor;
};
export type Catalog = {
    "bpp/descriptor"?: Descriptor;
    "bpp/categories"?: Category[];
    "bpp/fulfillments"?: Fulfillment[];
    "bpp/payments"?: Payment[];
    "bpp/offers"?: Offer[];
    "bpp/providers"?: Provider[];
    exp?: string;
};
export type Category = {
    id?: string;
    parent_category_id?: string;
    descriptor?: Descriptor;
    time?: Time;
    tags?: Tags;
};
export type Circle = {
    gps: Gps;
    radius: Scalar;
};
export type DecimalValue = string;
export type Dimensions = {
    length?: Scalar;
    breadth?: Scalar;
    height?: Scalar;
};
export type Error = {
    type: "CONTEXT-ERROR" | "CORE-ERROR" | "DOMAIN-ERROR" | "POLICY-ERROR" | "JSON-SCHEMA-ERROR";
    code: string;
    path?: string;
    message?: string;
};
export type Feedback = {
    feedback_form?: FeedbackForm;
    feedback_url?: FeedbackUrl;
};
export type FeedbackForm = FeedbackFormElement[];
export type FeedbackFormElement = {
    id?: string;
    parent_id?: string;
    question?: string;
    answer?: string;
    answer_type?: "radio" | "checkbox" | "text";
};
export type FeedbackUrl = {
    url?: string;
    tl_method?: "http/get" | "http/post";
    params?: {
        feedback_id: string;
    } & {
        [key: string]: string;
    };
};
export type Gps = string;
export type Intent = {
    descriptor?: Descriptor;
    provider?: Provider;
    fulfillment?: Fulfillment;
    payment?: Payment;
    category?: Category;
    offer?: Offer;
    item?: Item;
    tags?: Tags;
};
export type Item = {
    id?: string;
    parent_item_id?: string;
    descriptor?: Descriptor;
    price?: Price;
    category_id?: string;
    fulfillment_id?: string;
    rating?: number;
    location_id?: string;
    time?: Time;
    rateable?: Rateable;
    matched?: boolean;
    related?: boolean;
    recommended?: boolean;
    tags?: Tags;
};
export type Language = {
    code?: string;
};
export type Location = {
    id?: string;
    descriptor?: Descriptor;
    gps?: Gps;
    address?: Address;
    station_code?: string;
    city?: City;
    country?: Country;
    circle?: Circle;
    polygon?: string;
    "3dspace"?: string;
    time?: Time;
};
export type Name = string;
export type Offer = {
    id?: string;
    descriptor?: Descriptor;
    location_ids?: string[];
    category_ids?: string[];
    item_ids?: string[];
    time?: Time;
};
export type Operator = Person & {
    experience?: {
        label?: string;
        value?: string;
        unit?: string;
    };
};
export type Option = {
    id?: string;
    descriptor?: Descriptor;
};
export type Page = {
    id?: string;
    next_id?: string;
};
export type Payment = {
    uri?: string;
    tl_method?: "http/get" | "http/post" | "payto" | "upi";
    params?: {
        transaction_id?: string;
        transaction_status?: string;
        amount?: string;
        currency: string;
    } & {
        [key: string]: string;
    };
    type?: "ON-ORDER" | "PRE-FULFILLMENT" | "ON-FULFILLMENT" | "POST-FULFILLMENT";
    status?: "PAID" | "NOT-PAID";
    time?: Time;
    collected_by?: "BAP" | "BPP";
};
export type Policy = {
    id?: string;
    descriptor?: Descriptor;
    parent_policy_id?: string;
    time?: Time;
};
export type Provider = {
    id?: string;
    descriptor?: Descriptor;
    category_id?: string;
    rating?: number;
    time?: Time;
    categories?: Category[];
    fulfillments?: Fulfillment[];
    payments?: Payment[];
    locations?: (Location & {
        rateable?: Rateable;
    })[];
    offers?: Offer[];
    items?: Item[];
    exp?: string;
    rateable?: Rateable;
    tags?: Tags;
};
export type Quotation = {
    price?: Price;
    breakup?: {
        title?: string;
        price?: Price;
        "@ondc/org/item_id"?: string;
        "@ondc/org/item_quantity"?: {
            count: string;
        };
        "@ondc/org/title_type"?: string;
        item?: {
            quantity?: ItemQuantity;
            price?: Price;
        };
    }[];
    ttl?: Duration;
};
export type Rateable = boolean;
export type Rating = {
    rating_category?: string;
    id?: string;
    value?: number;
    feedback_form?: FeedbackForm;
    feedback_id?: string;
};
export type RatingAck = {
    feedback_ack?: boolean;
    rating_ack?: boolean;
};
export type Subscriber = {
    subscriber_id?: string;
    type?: "bap" | "bpp" | "bg";
    cb_url?: string;
    domain?: Domain;
    city?: string;
    country?: string;
    signing_public_key?: string;
    encryption_public_key?: string;
    status?: "INITIATED" | "UNDER_SUBSCRIPTION" | "SUBSCRIBED" | "INVALID_SSL" | "UNSUBSCRIBED";
    created?: string;
    updated?: string;
    expires?: string;
};
export type Support = {
    type?: "order" | "billing" | "fulfillment";
    ref_id?: string;
    channels?: Tags;
};
export type TrackingData = Gps;
export type Tracking = {
    url?: string;
    status?: "active" | "inactive";
};
export type Vehicle = {
    category?: string;
    capacity?: number;
    make?: string;
    model?: string;
    size?: string;
    variant?: string;
    color?: string;
    energy_type?: string;
    registration?: string;
};
