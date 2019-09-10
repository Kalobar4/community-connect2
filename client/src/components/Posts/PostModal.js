import React, { Component } from 'react';
import AddPost from './AddPost';

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader
} from 'mdbreact';

class PostModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
    this.props.getPosts();
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn onClick={this.toggle}>New Post</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Help Wanted</MDBModalHeader>
          <MDBModalBody>{<AddPost />}</MDBModalBody>
          <MDBBtn onClick={this.toggle}>Close</MDBBtn>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default PostModal;
