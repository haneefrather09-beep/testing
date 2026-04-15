/**
 * Mocked @diploy/core for local testing
 */

export const DIPLOY_PRODUCT_NAME = "Whatsway";
export const DIPLOY_VERSION = "1.0.0";
export const DIPLOY_AUTHOR = "Bisht Technologies";
export const DIPLOY_WEBSITE = "https://diploy.in";
export const DIPLOY_SUPPORT_EMAIL = "cs@diploy.in";
export const DIPLOY_SUPPORT_URL = "https://diploy.ticksy.com";
export const DIPLOY_LICENSE = "Envato / CodeCanyon License";
export const DIPLOY_POWERED_BY = "Whatsway v1.0.0";
export const DIPLOY_HEADER_KEY = "X-Powered-By";
export const DIPLOY_HEADER_VALUE = "Whatsway";
export const DIPLOY_BRAND = {
  name: DIPLOY_PRODUCT_NAME,
  version: DIPLOY_VERSION,
  author: DIPLOY_AUTHOR,
  website: DIPLOY_WEBSITE,
  support: DIPLOY_SUPPORT_EMAIL,
  license: DIPLOY_LICENSE,
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

export class DiployError extends Error {
    status: number;
    constructor(message: string, status: number = 500) {
        super(message);
        this.status = status;
    }
}
export class BadRequestError extends DiployError { constructor(m: string) { super(m, 400); } }
export class UnauthorizedError extends DiployError { constructor(m: string) { super(m, 401); } }
export class ForbiddenError extends DiployError { constructor(m: string) { super(m, 403); } }
export class NotFoundError extends DiployError { constructor(m: string) { super(m, 404); } }
export class ConflictError extends DiployError { constructor(m: string) { super(m, 409); } }
export class ValidationError extends DiployError { constructor(m: string) { super(m, 422); } }
export class RateLimitError extends DiployError { constructor(m: string) { super(m, 429); } }
export class InternalError extends DiployError { constructor(m: string) { super(m, 500); } }

export const DiployResponse = {
    success: (res: any, data: any, status = 200) => res.status(status).json({ success: true, data }),
    error: (res: any, message: string, status = 500) => res.status(status).json({ success: false, message }),
};

export const cleanPhoneNumber = (p: string) => p.replace(/\D/g, "");
export const formatPhoneNumber = (p: string) => p;
export const normalizePhoneNumber = (p: string) => p;
export const truncateText = (t: string, l: number) => t.length > l ? t.slice(0, l) + "..." : t;
export const slugify = (t: string) => t.toLowerCase().replace(/ /g, "-");
export const formatBytes = (b: number) => `${b} bytes`;
export const extractTemplateVariables = (t: string) => [];

export const asyncHandler = (fn: any) => (req: any, res: any, next: any) => Promise.resolve(fn(req, res, next)).catch(next);
export const validateRequired = () => true;
export const validateCSVRow = () => true;
export const isValidEmail = () => true;
export const isValidPhoneNumber = () => true;
export const sanitizeInput = (i: any) => i;

export const diployLogger = {
    info: (...args: any[]) => console.log("[INFO]", ...args),
    error: (...args: any[]) => console.error("[ERROR]", ...args),
    warn: (...args: any[]) => console.warn("[WARN]", ...args),
    debug: (...args: any[]) => console.log("[DEBUG]", ...args),
};
