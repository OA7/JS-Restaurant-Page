const contact = `
  <div class="contact-box">
    <div class="form">
      <h2>Contact Us</h2>
      <input type="text" class="field" placeholder="Your Name">
      <input type="text" class="field" placeholder="Your Email">
      <input type="text" class="field" placeholder="Phone">
      <textarea placeholder="Message" class="field"></textarea>
      <button class="btn">Send</button>
    </div>
  </div>
  `;

function contactDiv() {
  const div = document.createElement('div');
  div.innerHTML = contact;

  return div;
}

export default contactDiv;