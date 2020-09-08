import React, { Component } from "react"
import "./List.css"


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesertaLomba: ['Semangka', 'Anggur', 'Strawbery', 'Jeruk', 'Mangga'],
            InputNama: "",
            index: -1
        }
        //bind method is method using normal function 
        this.submitForm = this.submitForm.bind(this);
        this.deletePeserta = this.deletePeserta.bind(this);
    }
    // method with normal function
    submitForm(event) {
        event.preventDefault()
        var index = this.state.index
        if (index === -1) {
            this.setState({
                pesertaLomba: [...this.state.pesertaLomba, this.state.InputNama],
                InputNama: ""
            })
        } else {
            var newPesertaLomba = this.state.pesertaLomba
            newPesertaLomba[index] = this.state.InputNama

            this.setState({
                pesertaLomba: [...newPesertaLomba],
                InputNama: "",
                index: -1
            })
        }
    }

    deletePeserta(event) {
        let index = event.target.value
        var newPesertaLomba = this.state.pesertaLomba
        newPesertaLomba.splice(index, 1)
        this.setState({
            pesertaLomba: [...newPesertaLomba],
            InputNama: "",
            index: -1
        })
    }

    // method with arrow function
    changeInputNama = (event) => {
        let value = event.target.value
        this.setState({ InputNama: value })
    }

    editForm = (event) => {
        let index = event.target.value
        var namaPeserta = this.state.pesertaLomba[index]
        this.setState({
            InputNama: namaPeserta,
            index
        })
        // this.setState({})
    }

    render() {
        return (
            <>
                <center>
                    <h1>Daftar Harga Buah</h1>
                    <div style={{ width: "70vw", margin: "0 auto" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama</th>
                                    <th>Harga</th>
                                    <th>Berat</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.pesertaLomba.map((val, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{val}</td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <button value={index} style={{ marginRight: "5px" }} onClick={this.editForm}>Edit</button>
                                                    <button value={index} onClick={this.deletePeserta}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <br />
                    <form onSubmit={this.submitForm}>
                        <label>Nama</label>
                        <input required type="text" value={this.state.InputNama} onChange={this.changeInputNama} />
                        <button>save</button>
                    </form>
                </center>
            </>
        )
    }
}

export default List;
