import React from 'react'

const PayButton = ({onClickOrder}) => {
    return (
        <div onClick={onClickOrder} className="button pay-btn">
            <span>Оплатить сейчас</span>
        </div>
    )
}

export default PayButton;
