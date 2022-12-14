import React from "react";

function OrderOnProgress({orders, done}) {
    return (
        orders.length > 0 ? 
        <>
            <h1>On Progress Order</h1>
            <div className="on-progress-order">
                {orders.map((order) => (
                    <div className="on-progress-order__card card" key={order.id}>
                        <div className="won-progress-order__card__body">
                            <div className="col">
                                <h5>{order.permintaan}</h5>
                                <h6>Penyewa : {order.Penyewa.fullName}</h6>
                            </div>
                            <div className="col">
                                <p>biaya harian : Rp. {order.biayaHarian}</p>
                                <p>biaya pembangunan : Rp. {order.biayaPembangunan}</p>
                                <p>Estimasi waktu : Rp. {order.estimasiWaktu} hari</p>
                            </div>
                            <div className="col">
                                <button id={order.id} onClick={done} className="btn btn-primary">End Order</button>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
        : ''
        
    )
}

export default OrderOnProgress