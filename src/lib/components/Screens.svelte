<div class="container">
  <div class="panel">
    <div class='row'>
    <img src="$lib/assets/mockup-1.png" alt="Mockup of app 1">
    <div class="text">
      <h2>Step 1</h2>
      <p>Our Home Page allows you to begin shopping in other closets. You are able to search for items to add to your 'new' wardrobe!</p>
    </div>
  </div>
    <div></div>
  </div>
  <div class="panel">
    <div></div>
    <div class='row'>
    <div class="text-right">
      <h2>Step 2</h2>
      <p>Click on Swap Now! for real-time notifications for swap requests, messages, and confirmations.
        <br><br>
        Contact a member you want to express an interest in something in their closet, and ask them if there's anything in your closet they'd be interested in swapping or giving away.  
        </p>
    </div>
    <img src="$lib/assets/mockup-2.png" alt="Mockup of app 2">
  </div>
  </div>
  <div class="panel">
    <div class='row'>
    <img src="$lib/assets/mockup-3.png" alt="Mockup of app 3">
    
    <div class="text">
      <h2>Step 3</h2>
      <p>This is a smart matching feature that is designed to facilitate connections between individuals and tailors who are interested in upcycling. It allows you to bring new life to your favorite pre-loved items by making something new out of something old! You will input your zip code, and upcycling tailors near you will pop up!       </p>
    </div>
    <div></div>
  </div>

  </div>
</div>


<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    margin-top: 200px;
  }

  .panel {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 84%;
    height: 100%;
    padding: 0 2rem;
    margin: -96px 0;
  }

  h2 {
    font-size: 36px;
    font-family: 'Prata', serif;
  }

  img {
    width: auto;
    height: 500px;
  }

  .text {
    width: 256px;
    text-align: left;
  }

  .text-right {
    width: 256px;
    text-align: right;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
  }
</style>