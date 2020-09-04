import React, { Component } from 'react';
import './Style.css';


class Index extends Component {
    render() {
        return (
            <div class="container">
                <form action="">
                    <center>
                        <h1>Form Pembelian Buah</h1>
                    </center>
                    <table className='index'>
                        <tr>
                            <td><label for="username">Nama Pelanggan</label></td>
                            <td><input type="text" id="username"></input></td>
                        </tr>
                        <tr>
                            <td><label for="checkbox"> Daftar Item</label></td>
                            <td>
                                <p><input type='checkbox' name='checkbox1' value='semangka' />Semangka</p>
                                <p><input type='checkbox' name='checkbox2' value='nanas' />Nanas</p>
                                <p><input type='checkbox' name='checkbox3' value='jeruk' />Jeruk</p>
                                <p><input type='checkbox' name='checkbox4' value='anggur' />Anggur</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit">Kirim!</button>
                            </td>
                        </tr>

                    </table>
                </form>
            </div>
        )
    }
}

export default Index;