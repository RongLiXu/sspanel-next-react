
import { FC } from "react"
import routes from "@/routes"
import { RouterProps, RouterProvider, createHashRouter as createRouter } from "react-router-dom"
import { IProps } from "@/variables"


const router = createRouter(routes)

const Router: FC<IProps> = ({ ...props }) => {
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default Router;