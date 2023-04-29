<script lang="ts">
  import type {PageData} from './$types'
  export let data: PageData
  $: ({feelss} = data)





</script>

  <div class="grid">
    <div>
      <h2 style="margin-bottom:15px; text-align:center;">Feels</h2>
      {#each feelss as feels}

    <article>
      
      <header>{feels.name}</header>
      <p>{feels.feelings}</p>
        <form action="?/deleteFeel&id={feels.id}" method="POST">
          <button type="submit" class="outline secondary " style=""name="">Delete</button>
        </form>
    </article>
      {/each}
    </div>


    <div>
    <form action="?/createFeels" method="POST">
      <h2 style="margin-bottom:3px; text-align:center;">Create a feel</h2>
      <label for="firstname">
        First name
      <input type="text" name="name" placeholder="First name" required>
      </label>
      <label for ="content">
      How did you feel today?
      <input type="text" name="feelings" placeholder="shit" required>
      <small>We'll never share your info</small>
      </label>
    <button type="submit">Submit</button>
  </form>
      </div>
  </div>
 
<a href="/view">click me</a>


<style>
  .grid{
    width:60%;
    margin-left:auto;
    margin-right:auto;
    grid-gap:50px;
  }
  button{
    width:100%;
    margin-left:auto;
    margin-right:auto;
  }
  article{
    width:100%;
    
  }
  article p{
    font-size:15px;
    margin-top:10px;
    padding:10px;
  }
  article header{
    padding:10px;
    margin-bottom:0px;
  }
</style>
