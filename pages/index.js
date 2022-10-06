import { useState } from 'react';
import { useRouter } from 'next/router';
import { QrReader } from 'react-qr-reader';

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
