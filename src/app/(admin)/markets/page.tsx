import prisma from "@/lib/prisma"
import { Suspense } from "react"
import { getAllMarkets } from "./action"
import AdminSidebarContainer from "../admin-sidebar/admin-sidebar-container"
import ListOfMarkets from "./list-of-markets"
import { Metadata } from "next"
import DataTableLoadingSkeleton from "@/components/data-table/data-table-loading-skeleton"

export const metadata:Metadata = {
    title:'Markets'
}
export default function Page(){
return <AdminSidebarContainer crumbs={[{label:'Markets',href:'/markets'}]}>
    <Suspense fallback={<DataTableLoadingSkeleton/>}>
    <Markets/>
</Suspense>
</AdminSidebarContainer>
}

async function Markets(){
    const markets = await getAllMarkets()
return <ListOfMarkets markets={markets}/>
}

