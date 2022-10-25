import { useRouter } from "next/router";


/**
 * QRで読み取ったQRコードを読み取って表示する。
 * @returns HTMLに変換したサイトを表示
 */


export default function Site() {
    //禁止するコード
    const BAN_HTML_CODES = ['<script', '<input', 'href', 'src', 'a ']

    const router = useRouter();
    let html_code = find_ban_code(router.query.data, ...BAN_HTML_CODES)

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: html_code }} />
        </div>
    )
}

/**
 * 
 * @param {*} BAN_CODES 禁止文字列を配列にして渡します。
 * @param {*} error_html エラーの際に返すHTMLを設定しています。 
 * @param {*} str qrで読み取ったhtmlコードを格納します。
 * @returns 禁止コードを含んでいたなどの場合、error_htmlを、異常がない場合、そのままHTMLを返します。
 */
function find_ban_code(code, ...BAN_CODES) {
    let error_html = '<h1>Sorry can not display.</h1>'
    if (code === undefined || BAN_CODES === undefined) {
        return error_html
    }

    for (let i = 0; i < BAN_CODES.length; i++) {
        if (code.indexOf(BAN_CODES[i]) != -1) {
            return error_html
        }
    }
    return code
}