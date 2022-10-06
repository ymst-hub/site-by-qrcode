import { useRouter } from "next/router";

/**
 * QRで読み取ったQRコードを読み取って表示する。
 * @returns HTMLに変換したサイトを表示
 */

//todo 読み込みの安全対策

export default function Site(){
    const router = useRouter();
    console.log(router.query.data)
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: router.query.data }} />
        </div>
    )
}