import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    productInterest: string;
    phone: string;
}
export interface backendInterface {
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllProductInquiryCounts(): Promise<Array<[string, bigint]>>;
    getContactSubmission(id: bigint): Promise<ContactSubmission | null>;
    getProductInquiryCount(productCategory: string): Promise<bigint>;
    getSubmissionCount(): Promise<bigint>;
    submitContactForm(name: string, email: string, phone: string, message: string, productInterest: string): Promise<{
        __kind__: "ok";
        ok: bigint;
    } | {
        __kind__: "err";
        err: string;
    }>;
}
