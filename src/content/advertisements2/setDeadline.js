import React, { Component } from 'react'
import { Card, Form } from 'react-bootstrap'
import './ads2.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
        <div className="catogeries_btn_position">
          <button className="catogeries_btn" style={{ outline: 'none' }}>
            Advertisement Categories
          </button>
        </div>

        <div className="container deadline_container">
          <Card
            className="set_deadline_card"
            style={{ border: ' 2px solid rgb(97, 98, 99)' }}
          >
            <Form className="deadline_form">
              <Form.Group controlId="deadline">
                <Form.Label className="deadline_form_label">
                  Set deadline
                </Form.Label>
                <Form.Control
                  className="deadline_form_control"
                  type="date"
                  style={{ border: ' 1.5px solid rgb(97, 98, 99)' }}
                  placeholder={this.state.date}
                ></Form.Control>
              </Form.Group>
            </Form>
            <button
              onClick={this.checkDate}
              className="continue-btn  "
              style={{ outline: 'none' }}
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
