import React from 'react'

export const TitlePart = ({header, subtitle}) => {
    return (
        
<>
            <div className="__title_form">
                <div className="__title_form_title">
                    <hr/>
                        <h3>{header}</h3>
                    <hr/>
                </div>
                <div className="__title_form_subtitle">
                    <h6>{subtitle}</h6>
                </div>
            </div>


</>
    )
}
