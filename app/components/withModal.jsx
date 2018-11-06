import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'


 const withModal = ({title}) => (WrappedComponent) => {
    class withModalComponent extends Component {
        handleClose = () => {
            this.props.history.go(-1)
        }

        render() {
            return (
                <Modal.Dialog style={{ overflow: 'auto' }}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <WrappedComponent {...this.props} />
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                        <Button bsStyle="primary" >Save changes</Button>
                    </Modal.Footer>
              </Modal.Dialog>
            )
        }
        
    }

    return withModalComponent
 }

export default withModal