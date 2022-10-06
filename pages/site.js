import { useRouter } from "next/router";

export default function Site(){
    const router = useRouter();
    console.log(router.query.data)
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: router.query.data }} />
        </div>
    )
}