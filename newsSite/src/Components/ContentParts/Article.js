import React, {Fragment} from "react"
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


function Article(props) {



    return <Fragment>{!props.GlobalStore.login.loginned ?
        <Fragment>
            <h1>Article</h1>
            <p>
                some Text! too match text =D
            </p>
        </Fragment>
        :
        <Redirect to="/" />
    }
    </Fragment>
}

const mapStateFromProps = (store)=>{


    return {
        GlobalStore:store
    }
}


export default connect(mapStateFromProps)(Article);