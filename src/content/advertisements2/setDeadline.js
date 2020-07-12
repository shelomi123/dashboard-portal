import React, { Component } from 'react'
import { Card, Form } from 'react-bootstrap'
import '../../App.css'
// import Navbar from '../../components/navbar'
// import SideBar from '../../components/sidebar'

class setDeadline extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: Date.now(),
    }
  }

  render() {
    return (
      <div>
        {/* <Navbar />
        <SideBar /> */}
        <div className="catogeries_btn_position">
          <button className="catogeries_btn">Advertisement Categories</button>
        </div>

        <div className="container deadline_container">
          <Card className="set_deadline_card">
            <Form className="deadline_form">
              <Form.Group controlId="deadline">
                <Form.Label className="deadline_form_label">
                  Set deadline
                </Form.Label>
                <Form.Control
                  className="deadline_form_control"
                  type="date"
                  placeholder={this.state.date}
                ></Form.Control>
              </Form.Group>
            </Form>
            <button
              onClick={this.checkDate}
              className="continue-btn block "
              type="submit"
            >
              Continue
            </button>
          </Card>
        </div>
      </div>
    )
  }
}

export default setDeadline
