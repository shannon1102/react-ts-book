import React, { Component } from 'react'

type Props = {}

type State = {}

export default class Footer extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
       {/* <section className="contact-area" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="contact-content text-center">
                        <div className="contact-social">
                        <h1>You are not alone</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    
    <footer>
        <p>Copyright &copy; 2019 <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo"></img> All Rights Reserved.</p>
    </footer>
      </div>
    )
  }
}