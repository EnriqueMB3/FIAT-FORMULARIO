import React from 'react'
import PropTypes from 'prop-types';

export const Title = (ml, mr) => {

    return (
        <div className="__title_content" >
            <div className="__title_box">

            <h6 className="mt-25 mb-10">COTIZADOR</h6>
            <div className="__title_subtitle_separation"> 
                <hr  />
                    <h5> </h5>
                <hr  />
            </div>
            <h3>Elige el tuyo</h3>
            </div>
        </div>
    )
}


Title.propTypes = {
    title: PropTypes.number,
    type: PropTypes.number,
  }