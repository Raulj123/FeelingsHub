<script lang="ts">
  import type {PageData} from './$types' 
  export let data: PageData
  $: ({feelss} = data)

 
</script>

<h2 style="text-align:center">This is the current database in ElephantSQL🐘 </h2>
<table role="grid" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Feelings</th>
    </tr>
  </thead>
    <tbody>
      {#each feelss as feels}
    <tr>
    <th scope="row">{feels.id}</th>
    <td>{feels.name}</td>
    <td>{feels.feelings}</td>
  </tr>
    {/each}
    </tbody>
</table>



  <style>
  table{
    width:50%;
    margin-left:auto;
    margin-right:auto;
  }
  
</style>
