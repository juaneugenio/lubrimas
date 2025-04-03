const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const BASE_URL = IS_PRODUCTION ? 'https://juaneugenio.github.io/lubrimas/' : '';

export const CONTACT_URL = `${BASE_URL}#contact`;
export const SERVICES_URL = `${BASE_URL}#services`;
export const RESERVATION_URL = `${BASE_URL}#reservation`;