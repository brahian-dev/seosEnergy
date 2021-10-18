import { useRouter } from 'next/router'

const Company = ({ query }) => {
    const router = useRouter()
    const { company, panel } = router.query


    console.log('Query', query);

    return <p>Company: { company } and Panel: { panel }</p>
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://api.neur.io/v1/samples/live/last?sensorId=0x0000C47F510354BA`, {
        method: "get",
        headers: {
        "Authorization": "Bearer AIOO-2n9Z_PruOa4pelsp5PZ8bvQUbJkQbV6FrFa-rjFlMbuIB3iGuTUMtLVjDSR_Iq6zq1qMO59l4AV6EWybxuNv59i8UIQrVteLLcxveorfenUGVh_mB8x5bZX7c9UDIu3XlfNvDeeC7eU0dg9IHH0hdx-3WoxvzZOPmnYFsT9-bzNk0FTz_jNZCJuF8wap5JgId8LYM-QCuBsw4Q6Lro0rRVgMtCrdezKu4Qk7pZocKloPKjMKbf_bimn-jNveG1flnHRGmYv",
        "Content-Type": "application/json"
        }
    })

    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data,
            query: context.params
        }
    }
}

export default Company