import { useRouter } from "next/router";


/**
 * QRで読み取ったQRコードを読み取って表示する。
 * @returns HTMLに変換したサイトを表示
 */


export default function Site(){
    //禁止するコード
    const ban_codes = ["<script", "<input"]

    const router = useRouter();
    let qr_html_code = find_ban_code(ban_codes,router.query.data)

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
function find_ban_code(ban_codes,html_code){
    ban_codes.array.forEach(code => {
        if(html_code.indexOf(code) != -1){
            return "<h1>Sorry can't display. This code have javascript</h1>"
        }
    });
    return html_code
}