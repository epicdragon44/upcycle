<div class='all'>
    <h2>Users have said...</h2>

    <div class="testimonials">

      <div class="testimonial">
        <div class="message">
          <p>Upcycle! is amazing! I've been able to find so many great secondhand clothes on here, and it's really helped me reduce my environmental impact.</p>
        </div>
        <div class="author">- Sarah J.</div>
      </div>

      <div class="testimonial">
        <div class="message">
          <p>I love Upcycle! because it's so easy to use and I can find clothes that fit my style without breaking the bank. Plus, I feel good knowing that I'm supporting sustainable fashion practices.</p>
        </div>
        <div class="author">- Alex K.</div>
      </div>

      <div class="testimonial">
        <div class="message">
          <p>Upcycle! has been a game-changer for me. I used to feel guilty about buying new clothes all the time, but now I can shop guilt-free and even sell my own clothes to others who will appreciate them.</p>
        </div>
        <div class="author">- Emily L.</div>
      </div>
    </div>
</div>

<style>
  .all {
    margin-top: 240px;
    text-align: center;
  }

  h2 {
    font-size: 48px;
    font-family: 'Prata', serif;
  }

  .testimonials {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 48px;
    padding: 24px 96px;
  }

  .testimonial {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
    max-width: 80%;
    height: 240px;
  }

  .testimonial .message {
    background-color: #EDEDED;
    padding: 1rem;
    border-radius: 1rem;
    position: relative;
    max-width: 24rem;
  }

  .testimonial .message:before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0.5rem 0.5rem 0 0;
    border-color: #f2f2f2 transparent transparent transparent;
    bottom: -0.5rem;
    left: 1rem;
  }

  .testimonial .message:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 0.5rem 0 0 0.5rem;
    border-color: #f2f2f2 transparent transparent transparent;
    bottom: -0.5rem;
    right: 1rem;
  }

  .testimonial .author {
    margin-top: 1rem;
    font-style: italic;
  }
</style>