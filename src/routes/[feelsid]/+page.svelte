<script lang="ts">
  import type {PageData} from './$types'
  export let data: PageData
  $: ({feels} = data)
</script>



<div>
    <form action="?/updateFeels" method="POST">
      <h3 style="margin-bottom:3px; text-align:center;">Edit {feels.name} feelings</h3>
      <label for="firstname">
        Name
      <input type="text" name="name" placeholder="Anonymous" value={feels.name} required>
      </label>
      <label for ="content">
      How did you feel today?
      <textarea type="text" name="feelings" placeholder="shit" rows={4} value={feels.feelings} required />
      <small>Text over 350 wont be accepted</small>
      
    </label>
    <button type="submit">Submit</button>
  </form>
      </div>
  <a href="/">Back home</a>

  <style>
  form{
    width:60%;
    margin-left:auto;
    margin-right:auto;
  }
  a{
    margin-left:50px;
  }
</style>
