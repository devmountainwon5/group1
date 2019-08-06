import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from 'Ducks/action_creator';

import './HouseGraphic.css';

import niceHouse from 'Assets/HealthyHouse.png';
import midHouse from 'Assets/MidHouse.png';
import grossHouse from 'Assets/GrossHouse.png';


function HouseGraphic(props){
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getHouseGraphic();
    }, []);

    function getHouseGraphic() {
        const {user_id} = props.user
        axios.post("/barometer/retrieveScore", {user_id}).then(({data}) => {
            setLoading(true)
            if(typeof data === 'number'){
                if(data*100 >= 85){
                    setPic(niceHouse)
                } else if (data*100 <85 && data*100 > 45){
                    setPic(midHouse)
                } else if (data*100 <= 45){
                    setPic(grossHouse)
                }
            } else {
                throw ('something went wrong')
            }
        })
    }

    return(
        <div>
            <div className="housePic">
                {loading && 
                    <img src={pic} alt="house-score"/>
                }
            </div>
        </div>
    )

}

export default connect(state => state, actions)(HouseGraphic);