import React from 'react'

function Contact() {
  return (
    <div className='contactPageStyle grow'>
        <div className='contactText'>
            <h2>Contact</h2>
            <h3>906-273-1450 <br /> chris.gard@gmail.com</h3>
        </div>

        <div className='contactForm'>
            <h2>Your info</h2>
            <form className='yourInfo' action="">
                <input type="text" placeholder= 'Name*' name="" id="" />
                <input type="email" placeholder= 'Email*' name="" id="" />
                <input type="number" placeholder= 'Phone' name="" id="" />
            </form>

            <h2>How can I help</h2>
            <form className='checkboxStyle'>
                <input type="checkbox" id="option1" name="option1" value="Website"/>
                <label for="option1"> Website</label> <br/>
                <input type="checkbox" id="option2" name="option2" value="Ecommerce"/>
                <label for="option2"> Ecommerce</label> <br/>
                <input type="checkbox" id="option3" name="option3" value="Branding"/>
                <label for="option3"> Branding</label><br/>
                <input type="checkbox" id="option4" name="option4" value="Creative"/>
                <label for="option4"> Creative</label><br/>
            </form>

            <h2>Message</h2>
          <form className='textArea' action="">
            <textarea name="" placeholder='Type your message' id="" cols="30" rows="10"></textarea>
          </form>

          <button className='buttonContact' type="submit">Submit</button>
        </div>
      
        
    </div>
  )
}

export default Contact