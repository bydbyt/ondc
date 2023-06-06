declare function executeRequest(opts: any, context: any, message?: any, error?: any, body?: any): Promise<any>;
declare function createSigningString(message: string, created?: string, expires?: string): Promise<{
    signing_string: string;
    expires: string;
    created: string;
}>;
declare function signMessage(signing_string: string, privateKey: string): Promise<string>;
declare function verifyMessage(signedString: string, signingString: string, publicKey: string): Promise<boolean>;
declare function split_auth_header(auth_header: string): any;
declare const _default: {
    executeRequest: typeof executeRequest;
    createSigningString: typeof createSigningString;
    signMessage: typeof signMessage;
    verifyMessage: typeof verifyMessage;
    split_auth_header: typeof split_auth_header;
};
export default _default;
