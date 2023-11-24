// component/encrypt.tsx
import crypto from 'crypto';

export async function getHash(unhashed: any){
    const hash = crypto.createHash("sha256")
    hash.update("gepdadwadwa" + unhashed + "sdadas")

    return hash.digest('hex');
}