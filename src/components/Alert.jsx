import React from 'react'

export default function Alert({errors}) {
    return (
        <div className={`alert alert-${errors.status}`}
            role="alert">
            {errors.msg}</div >
    )
}
