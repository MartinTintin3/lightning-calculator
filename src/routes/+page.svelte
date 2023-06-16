<script>
	let time = 10;
</script>

<h1>Lightning Calculator</h1>
<h2>Calculate the distance to ligtning</h2>

<label for="seconds">Seconds in between light and sound:</label>
<input bind:value={time} type="number" name="seconds">
<p id="result">{Math.round(time * 343 / 1000 * 10) / 10} kilometers away, {Math.round(time * 343 / 1000 / 1.609 * 10) / 10} miles away</p>

<style>
	* {
		text-align: center;
		margin: auto;
	}
</style>