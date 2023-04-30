<script lang="ts">
  import type {PageData} from './$types'
  export let data: PageData
  $: ({feels} = data)
</script>



<div>
    <form action="?/updateFeels" method="POST">
      <h2 style="margin-bottom:3px; text-align:center;">Edit {feels.name} feelings</h2>
      <label for="firstname">
        First name
      <input type="text" name="name" placeholder="First name" value={feels.name} required>
      </label>
      <label for ="content">
      How did you feel today?
      <input type="text" name="feelings" placeholder="shit" value={feels.feelings}required>
      <small>We'll never share your info</small>
      </label>
    <button type="submit">Submit</button>
  </form>
      </div>
  <a href="/">Back home</a>

  <style>
  form{
    width:80%;
    margin-left:auto;
    margin-right:auto;
  }
  a{
    margin-left:50px;
  }
</style>
