<script>
  import { writable } from 'svelte/store';

  const isVisible = writable(true);
  let tempValue = true
  isVisible.subscribe(value => {
    tempValue = value
  })

  function toggleValue(){
    isVisible.set(!tempValue)
  }
</script>

<section
	class={`${$isVisible ? "" : "hidden"} z-[9999] fixed flex bg-gray-900 bg-opacity-90 h-[100vh] w-[100vw] items-center align-middle justify-center`}
>
	<div class="">
		<div class="w-[50vw] h-[50vh]">
			<div class="flex flex-row justify-end">
				<button
          on:click={ () => toggleValue()}
					class="flex flex-row justify-center items-center font-bold text-lg w-8 h-8 bg-white text-black rounded-2xl"
					>X</button
				>
			</div>
			<div class="flex items-center justify-center align-middle">
				<p class="text-center text-3xl font-bold text-white py-4">WELCOME TO BITS VIZAG</p>
			</div>
			<div class="flex flex-row items-center justify-center">
				<img src="/modal.jpg" class="w-auto h-[50vh]" />
			</div>
		</div>
	</div>
</section>
