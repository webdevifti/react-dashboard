import React, { useRef } from 'react'
import "./dropdown.css"

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        if(toggle_ref.current && toggle_ref.current.contains(e.target)){
            content_ref.current.classList.toggle('dropdown-active')
        }else{
            if(content_ref.current && !content_ref.current.contains(e.target)){
                content_ref.current.classList.remove('dropdown-active');
            }
        }
    })
}


const Dropdown = props => {
    const dropdown_content_el = useRef(null)
    const dropdown_toggle_el = useRef(null)
    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)
    const {contentData,renderItems} = props;
    return (
        <div className="dropdown">
            <button ref={dropdown_toggle_el} className="dropdown-toggle">
                {props.icon ? <i className={props.icon}></i> : ''}
                {props.badge ? <span className='dropdown-toggle-badge'>{props.badge}</span> : '' }
                {props.customToggle ? props.customToggle() : ''}
            </button>
            <div ref={dropdown_content_el} className="dropdown-content">
                {contentData && renderItems ? contentData.map((item, index) => renderItems(item, index)) : ''}
                {props.renderFooter ? (
                    <div className="dropdown-footer">
                        {props.renderFooter()}
                    </div>
                ) : ''}
            </div>
        </div>
    )
}

export default Dropdown
