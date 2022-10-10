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
 * @param {*} ban_codes 禁止文字列を配列にして渡します。
 * @param {*} str qrで読み取ったhtmlコードを格納します
 * @returns 禁止コードを含んでいた場合、error_htmlを、含んでいない場合、そのままHTMLを返します。
 */
function find_ban_code(html_code, ...ban_codes) {
    let error_html = '<h1>Sorry can not display.</h1>'
    if (html_code === undefined || ban_codes === undefined){
        return error_html
    }

    for (let i = 0; i < ban_codes.length; i++) {
        if (html_code.indexOf(ban_codes[i]) != -1) {
            return error_html
        }
    }
    return html_code
}