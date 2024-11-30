import './Contact.css'
import React, { Component } from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default class Contact extends Component {
  constructor() {
    super() 

    this.state = {
        name : '' ,
        mail : '' ,
        subject : '' ,
        message : '' ,
    }

    this.nameHandler = this.nameHandler.bind(this)
    this.mailHandler = this.mailHandler.bind(this)
    this.subjectHandler = this.subjectHandler.bind(this)
    this.msgHandler = this.msgHandler.bind(this)
  }  

  nameHandler(event) {
    this.setState({
        name : event.nativeEvent.target.value
    })
  }

  mailHandler(event) {
    this.setState({
        mail : event.nativeEvent.target.value
    })    
  }

  subjectHandler(event) {
    this.setState({
        subject : event.nativeEvent.target.value
    })
  }
  
  msgHandler(event) {
    this.setState({
        message : event.nativeEvent.target.value
    })    
  }

  render() {
    return (
      <div className='Contact-wrapper'>
        <div className='Contact-main-content container'>
            <div className='Contact-title'>Contact</div>
            <div className='Contact-info-wrapper Contact-info-wrapper-mb-max-768 Contact-info-wrapper-mb-min-768 Contact-info-wrapper-mb-min-992'>
                <div className='Contact-info-address Contact-info-address-width-max-768 Contact-info-address-width-min-768 Contact-info-address-width-min-992
                Contact-info-address-direction-max-768 Contact-info-address-direction-min-768 Contact-info-address-direction-min-992
                Contact-info-address-mb-max-768 Contact-info-address-mb-min-768 Contact-info-address-mb-min-992 Contact-info-address-pl-max-768 Contact-info-address-pl-min-768 Contact-info-address-pl-min-992'>
                    <div className='Contact-info-address-title Contact-info-address-title-border-max-768 Contact-info-address-title-border-min-768 Contact-info-address-title-border-min-992'>Address</div>
                    <div className='Contact-info-address-desc Contact-info-address-desc-padding-max-768 Contact-info-address-desc-padding-min-768 Contact-info-address-desc-padding-min-992'>
                    Street 221B Baker Street,
                    London, UK
                    </div>
                </div>
                <div className='Contact-info-support Contact-info-support-width-max-768 Contact-info-support-width-min-768 Contact-info-support-width-min-992
                Contact-info-support-direction-max-768 Contact-info-support-direction-min-768 Contact-info-support-direction-min-992
                Contact-info-support-mb-max-768 Contact-info-support-mb-min-768 Contact-info-support-mb-min-992 Contact-info-support-pl-max-768 Contact-info-support-pl-min-768 Contact-info-support-pl-min-992'>
                    <div className='Contact-info-support-title Contact-info-support-title-border-max-768 Contact-info-support-title-border-min-768 Contact-info-support-title-border-min-992'>Customer Support</div>
                    <div className='Contact-info-support-desc Contact-info-support-desc-padding-max-768 Contact-info-support-desc-padding-min-768 Contact-info-support-desc-padding-min-992'>
                        <span className='Contact-info-support-desc-email'>E-mail: contact@site.com</span>
                        <span className='Contact-info-support-desc-phone'>Phone: (555) 555-5555</span>
                    </div>
                </div>
                <div className='Contact-info-icons-wrapper Contact-info-icons-wrapper-width-max-768 Contact-info-icons-wrapper-width-min-768 Contact-info-icons-wrapper-width-min-992
                Contact-info-icons-wrapper-max-768 Contact-info-icons-wrapper-min-768 Contact-info-icons-wrapper-min-992 Contact-info-icons-wrapper-mb-max-768 Contact-info-icons-wrapper-mb-min-768 Contact-info-icons-wrapper-mb-min-992
                Contact-info-icons-wrapper-pl-max-768 Contact-info-icons-wrapper-pl-min-768 Contact-info-icons-wrapper-pl-min-992'>
                    <a href="#" className='Contact-info-icon twitter-icon'>
                        <FaTwitter />
                    </a>
                    <a href="#" className='Contact-info-icon'>
                        <FaFacebookF />
                    </a>
                    <a href="#" className='Contact-info-icon'>
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
            <form action="" className='Contact-form-wrapper'>
                <div className='Contact-inputs-wrapper'>
                    <div className='Contact-input Contact-input-width-max-768 Contact-input-width-min-768 Contact-input-width-min-992
                    Contact-input-mb-max-768 Contact-input-mb-min-768 Contact-input-mb-min-992 Contact-input-p-max-768 Contact-input-p-min-768
                    Contact-input-p-min-992'>
                        <label htmlFor="name">Your Name (required)</label>
                        <input type="text" id='name' value={this.state.name} onChange={(event) => this.nameHandler(event)}/>
                    </div>
                    <div className='Contact-input Contact-input-width-max-768 Contact-input-width-min-768 Contact-input-width-min-992
                    Contact-input-mb-max-768 Contact-input-mb-min-768 Contact-input-mb-min-992 Contact-input-p-max-768 Contact-input-p-min-768
                    Contact-input-p-min-992'>
                        <label htmlFor="mail">Your Email (required)</label>
                        <input type="text" id='mail' value={this.state.mail} onChange={(event) => this.mailHandler(event)}/>
                    </div>
                    <div className='Contact-input Contact-input-width-max-768 Contact-input-width-min-768 Contact-input-width-min-992
                    Contact-input-mb-max-768 Contact-input-mb-min-768 Contact-input-mb-min-992 Contact-input-p-max-768 Contact-input-p-min-768
                    Contact-input-p-min-992'>
                        <label htmlFor="Subject">Subject</label>
                        <input type="text" id='Subject' value={this.state.subject} onChange={(event) => this.subjectHandler(event)}/>
                    </div>
                </div>
                <div className='Contact-textarea Contact-textarea-mt-min-992 Contact-textarea-p-max-768 Contact-textarea-p-min-768 Contact-textarea-p-min-992
                Contact-textarea-mb-max-768 Contact-textarea-mb-min-768 Contact-textarea-mb-min-992 '>
                    <label htmlFor="textarea">Your Message</label>
                    <textarea name="textarea" id="textarea" value={this.state.message} onChange={(event) => this.msgHandler(event)}></textarea>
                </div>
                <div className='Contact-btn-wrapper Contact-btn-wrapper-p-max-768 Contact-btn-wrapper-p-min-768 Contact-btn-wrapper-p-min-992'>
                    <button className='Contact-btn'>Send</button>
                </div>
            </form>
        </div>
      </div>
    )
  }
}