import {Link} from "react-router-dom"
function Page404(){
    return(
        <div className="container shadow my-5" style= {{textAlign: "center"}}>
            <h1> 404 Page Not Found</h1>
            <h3>Sorry, This page doesn't exist</h3>
        <Link to="/">Go to Home Page</Link>
        </div>

    )
}

export default Page404