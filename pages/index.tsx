import { FC, ReactNode, Suspense, memo } from "react";
import { IProps } from "@/variables";
import dynamic from "next/dynamic";

const Router = dynamic(()=>import('@/components/router'), {ssr: false})

const index: FC<IProps> = (props) => {
    return (
       <Suspense fallback='loading'>
            <Router />
       </Suspense>
    )
}

export default memo(index);