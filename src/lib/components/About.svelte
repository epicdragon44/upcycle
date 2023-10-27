<script>
</script>

<div class="container">
  <div class="image-container">
    <img src="$lib/assets/closet.jpg" alt="About Image" />
  </div>
  
  <div class="text-container">
    <h2>About Us</h2>
    <p>CycleUp! aims to reduce fast fashion with sustainable practices, changing the way we shop with a free clothing swap marketplace.
      <br><br>
      Here at CycleUp! not only can users acquire 'new' free items, but are also reducing the carbon footprint by not allowing unwanted items to end up in landfills polluting our environment. 
      <br><br>
      We help users not only to swap, but also bring new life to favorite garments by making something 'new' out of something old. We help connect users with local upcycling tailors promoting sustainability, and gather all the latest news and events to help you discover and learn everything you need to know and do about sustainable and ethical fashion.
      
      </p>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 2rem;
  }

  .image-container {
    position: relative;
    width: 50%;
  }

  .image-container img {
    width: 100%;
    height: auto;
  }

  .text-container {
    position: relative;
    width: 50%;
    background-color: #EDEDED;
    padding: 2rem;
    z-index: 1;
    left: -24%;
  }

  .text-container h2 {
    margin-top: -4rem;
    font-size: 64px;
    color: black;
    font-family: 'Prata', serif;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .image-container,
    .text-container {
      width: 100%;
    }
  }
</style>
