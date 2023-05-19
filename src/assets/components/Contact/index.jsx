import './index.css';

const Contact = () => {

    return (
        <section id="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <p>Feel free to send me a message if you have any questions or would like to work together on a project.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;