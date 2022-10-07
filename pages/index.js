import { useRouter } from 'next/router';
import { QrReader } from 'react-qr-reader';
import '../styles/globals.css' // site.jsでは個別に設定するため

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>QRCodeからサイトを描画します</h1>
      <QrReader delay={10000}
        onResult={(result) => {
          if (!!result) {
            console.log(result?.text)
            router.push({ pathname: "site", query: {data : result?.text } }, "site")
          }
        }}
        className="video"
      />
    </div>
  )
}
