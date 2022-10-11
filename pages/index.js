import { useRouter } from 'next/router';
import { QrReader } from 'react-qr-reader';

export default function Home() {
  const router = useRouter()
  let router_use_flg = true
  return (
    <div>
      <h1>QRCodeからサイトを描画します</h1>
      <QrReader Delay={1000}
        onResult={(result) => {
          if (!!result && router_use_flg) {
            router_use_flg = false
            router.push({ pathname: "site", query: { data: result?.text } }, "site")
          }
        }}
        className="video"
      />
    </div>
  )
}
