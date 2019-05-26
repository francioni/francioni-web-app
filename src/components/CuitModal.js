import React from 'react';
const renderCuitModal = require('../utils').renderCuitModal;
const setCUIT = require('../utils').setCUIT;
const getCUIT = require('../utils').getCUIT;

export default class CuitModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuitValue: ''
        }
        this.handleCuitValueUpdate = this.handleCuitValueUpdate.bind(this);
    };

    componentDidMount() {
        if(!getCUIT()) return renderCuitModal();
    };

    handleCuitValueUpdate(e) {
        this.setState({ cuitValue: e.target.value });
    };

    render() {
        return (
            <div className="modal fade top" id="cuitModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true" data-backdrop="true">
                <div className="modal-dialog modal-frame modal-top modal-notify modal-info" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row d-flex justify-content-center align-items-center">
                                <p className="pt-3 pr-2">Por favor ingrese su CUIT:</p>
                                <input onChange={ this.handleCuitValueUpdate } ></input>
                            </div>
                            <div className="row d-flex justify-content-center align-items-center">
                                <a type="button" className="btn btn-outline-primary waves-effect" data-dismiss="modal" onClick={() => setCUIT(this.state.cuitValue)}>Guardar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}