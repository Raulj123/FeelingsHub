<script lang="ts">
  import type {PageData} from './$types'
  export let data: PageData
  $: ({feelss} = data)




</script>
<p style="text-align:center; font-weight:bold;">A website that allows users to share, view, edit and delete feelings in a database.</p>
  <div class="grid">
    <div>
      <h2 style="margin-bottom:15px; text-align:center;">Feelings</h2>
      {#each feelss as feels}

    <article>
      
      <header>{feels.name}</header>
      <p>{feels.feelings}</p>
        <form action="?/deleteFeel&id={feels.id}" method="POST">
          <button type="submit" class="outline  " style=""name="">Delete 🗑️</button>
        </form>
        
          <a href="/{feels.id}" role="button" class="outline" style="width:100%;">Edit 📝</a>
        
    </article>
      {/each}
    </div>


    <div>
    <form action="?/createFeels" method="POST">
      <h2 style="margin-bottom:3px; text-align:center;">Create a feeling🤔</h2>
      <label for="firstname">
        Name
      <input type="text" name="name" placeholder="Anonymous" required>
      </label>
      <label for ="content">
      How did you feel today?
      <textarea type="text" name="feelings" placeholder="shit" rows={4} required />
      <small>Text over 350 characters wont be accepted</small>
      </label>
    <button type="submit">Submit</button>
  </form>
      </div>
  </div>
 
<a href="/view" style="text-align:center; margin-left:30px;">View the database 🗂️ </a>


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
    width:90%;
    
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
