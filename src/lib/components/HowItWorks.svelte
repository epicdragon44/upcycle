<script>
    import { Download, User2, Shirt, Smartphone, MapPin } from 'lucide-svelte';
  const steps = [
    {
      alt: 'Step 1',
      title: 'Download',
      text: 'The CycleUp! app is free and easy to use.'
    },
    {
      alt: 'Step 2',
      title: 'Create an Account',
      text: 'Sign up to be a free CycleUp! member.'
    },
    {
      alt: 'Step 3',
      title: 'List Items',
      text: 'Set up your own closet. Take pictures and add detailed descriptions of your pre-loved clothes.'
    },
    {
      alt: 'Step 4',
      title: 'Browse',
      text: 'Start searching for items to add to your new wardrobe.'
    },
    {
      alt: 'Step 5',
      title: 'Locate',
      text: 'Use our map function to locate an upcycling tailor near you!'
    }
  ];
</script>

  <div class="how-it-works">
    <h2>How It Works</h2>
    <div class="steps">
      {#each steps as step}
        <div class="step">
          {#if step.alt === 'Step 1'}
            <Download size="64" />
          {:else if step.alt === 'Step 2'}
            <User2 size="64" />
          {:else if step.alt === 'Step 3'}
            <Shirt size="64" />
          {:else if step.alt === 'Step 4'}
            <Smartphone size="64" />
          {:else if step.alt === 'Step 5'}
            <MapPin size="64" />
          {/if}
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      {/each}
    </div>
  </div>

<style>

  h2 {
    font-size: 50px;
    font-family: 'Prata', serif;
  }

  .how-it-works {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  }

  .steps {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 2rem;
  }

  .step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 18%;
    background-color: #EDEDED;
    padding: 48px;
    margin: 0 1rem;
  }

  .step h3 {
    margin: 1rem 0;
  }

  @media (max-width: 768px) {
    .steps {
      flex-wrap: wrap;
      justify-content: center;
    }

    .step {
      width: 40%;
      margin-bottom: 2rem;
    }
  }
</style>
