import { useRouter } from "next/router";


/**
 * QRで読み取ったQRコードを読み取って表示する。
 * @returns HTMLに変換したサイトを表示
 */


export default function Site() {
    //禁止するコード
    const ban_codes = ['<script', '<input','href']
    const router = useRouter();
    let qr_html_code = find_ban_code(router.query.data, ...ban_codes)

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: qr_html_code }} />
        </div>
    )
}

/**
 * 
 * @param {*} ban_codes 禁止コードを配列にして渡します。
 * @param {*} str qrで読み取ったhtmlコードを格納します
 * @returns 禁止コードを含んでいた場合、文字列を、含んでいない場合、そのままHTMLを返します。
 */
function find_ban_code(html_code, ...ban_codes) {
    if (html_code === undefined || ban_codes === undefined){
        return '<h1>Sorry can not display.</h1>'
    }

    for (let i = 0; i < ban_codes.length; i++) {
        let buf = html_code.indexOf(ban_codes[i])
        console.log(buf)
        if (buf != -1) {
            return '<h1>Sorry can not display. </h1>'
        }
    }
    return html_code
}