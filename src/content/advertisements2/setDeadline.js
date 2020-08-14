import React, { Component } from 'react'
import { Card, Form } from 'react-bootstrap'
import './ads2.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar'
import SideBar from '../../components/sidebar'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class setDeadline extends Component {

  constructor(props) {
    super(props)

    this.state = {
      todayDate: new Date(),
      Date: '',

    }
    console.log('today date=============' + this.state.todayDate);
  }
  handleDateChange = (date) => {
    this.setState({ Date: date })
    console.log(this.state.Date);
  }
  checkDate = (date) => {
    if (this.state.todayDate > this.state.date) {
      console.log("date can't be set");
    } else {
      console.log('date is set ' + this.state.Date);
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <SideBar />
        <div className="catogeries_btn_position">

          <Link style={{ color: "white" }} to='/AdCategories'>  <button className="catogeries_btn" style={{ outline: 'none' }}>
            Advertisement Categories </button>
          </Link>


        </div>

        <div className="container deadline_container">
          <Card
            className="set_deadline_card"
            style={{ border: ' 2px solid rgb(97, 98, 99)' }}
          >
            <Form className="deadline_form" >
              <Form.Group controlId="deadline">
                <Form.Label className="deadline_form_label">
                  Set deadline
                </Form.Label>
                <div style={{ marginLeft: '31%' }}>
                  <DatePicker selected={this.state.Date} onChange={this.handleDateChange} minDate={this.state.todayDate} isClearable={true} dateFormat='yyyy/mm/dd' />
                </div>

              </Form.Group>
            </Form>
            <button
              onSubmit={this.checkDate(this.state.Date)}
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
