import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://www.linkedin.com/in/cpcamp2/" className="icon alt fa-linkedin"><span className="label">Instagram</span></a></li>
                    <li><a href="https://github.com/cpcamp2" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>Penn Camp</li><li>2018</li>
                </ul>
            </section>
        )
    }
}

export default Footer
