import React from "react"
import{ Form } from "../Article" 
import {withRouter} from "react-router-dom";


class AddBlog extends React.Component {
    render() {
        return(
        <div className="conatiner">
            <div className="row pt-5">
            <div className="col-12 col-lg-6 offset-lg-3">
            </div>
            <Form />
            </div>
        </div>
        )
    }

}

export default withRouter(AddBlog);