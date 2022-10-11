import { useRouter } from "next/router";


/**
 * QRで読み取ったQRコードを読み取って表示する。
 * @returns HTMLに変換したサイトを表示
 */


export default function Site() {
    //禁止するコード
    const BAN_CODES = ['<script', '<input','href','src']

    const router = useRouter();
    let qr_html_code = find_ban_code(router.query.data, ...BAN_CODES)

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: qr_html_code }} />
        </div>
    )
}

/**
 * 
 * @param {*} ban_codes 禁止文字列を配列にして渡します。
 * @param {*} str qrで読み取ったhtmlコードを格納します
 * @returns 禁止コードを含んでいた場合、error_htmlを、含んでいない場合、そのままHTMLを返します。
 */
function find_ban_code(html_code, ...BAN_CODES) {
    let error_html = '<h1>Sorry can not display.</h1>'
    if (html_code === undefined || BAN_CODES === undefined){
        return error_html
    }

    for (let i = 0; i < BAN_CODES.length; i++) {
        if (html_code.indexOf(BAN_CODES[i]) != -1) {
            return error_html
        }
    }
    return html_code
}