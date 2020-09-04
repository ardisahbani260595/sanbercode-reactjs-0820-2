import React, { Component } from 'react';
import './Tabel.css'

class InfoBuah extends React.Component {
    render() {
        return (
            <>
                <td>{this.props.item.nama}</td>
                <td>{this.props.item.harga}</td>
                <td>{this.props.item.berat}</td>
            </>
        )
    }
}


let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 }
]

class DataBuah extends React.Component {
    render() {
        return (
            <center>
                <h1>Tugas - 10</h1>
                <table cellspacing='0' className='tabs'>
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataHargaBuah.map(el => {
                            return (
                                <tr style={{ border: "1px solid #000", padding: "20px" }}>
                                    <InfoBuah item={el} />
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </center>
        )
    }
}

export default DataBuah;
