<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	/** @type {string[]} */
	export let departments = [];
	export let selectedDepartment = 'All Departments';
	export let searchTerm = '';

	const dispatch = createEventDispatcher();
	let isOpen = false;

	/** @param {string} department */
	function selectDepartment(department) {
		selectedDepartment = department;
		isOpen = false;
		dispatch('departmentchange', department);
	}

	/** @param {Event & { currentTarget: EventTarget & HTMLInputElement }} event */
	function handleSearch(event) {
		searchTerm = event.currentTarget.value;
		dispatch('searchchange', searchTerm);
	}

	function clearSearch() {
		searchTerm = '';
		dispatch('searchchange', searchTerm);
	}
</script>

<div class="toolbar-wrap">
	<div class="search-wrap">
		<span class="search-icon" aria-hidden="true">
			<svg viewBox="0 0 24 24" fill="none">
				<circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"></circle>
				<path d="M20 20L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
			</svg>
		</span>
		<input
			type="search"
			placeholder="Search faculty by name, qualification, or role"
			value={searchTerm}
			on:input={handleSearch}
			aria-label="Search faculty"
		/>
		{#if searchTerm.trim().length > 0}
			<button type="button" class="clear-btn" on:click={clearSearch} aria-label="Clear search">
				<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
					<path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
			</button>
		{/if}
	</div>

	<div class="dropdown" class:open={isOpen}>
		<button
			type="button"
			class="dropdown-trigger"
			on:click={() => (isOpen = !isOpen)}
			aria-haspopup="listbox"
			aria-expanded={isOpen}
		>
			<span>{selectedDepartment}</span>
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>

		{#if isOpen}
			<ul class="options" role="listbox" in:fade={{ duration: 170 }}>
				{#each departments as department}
					<li>
						<button
							type="button"
							class:selected={department === selectedDepartment}
							on:click={() => selectDepartment(department)}
						>
							{department}
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style>
	.toolbar-wrap {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 12px;
		align-items: center;
		margin: 1.35rem auto 0.95rem;
	}

	.search-wrap {
		position: relative;
		border-radius: 999px;
		background: #ffffff;
		border: 1px solid #dbe5ef;
		box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
		transition: border-color 0.22s ease, box-shadow 0.22s ease;
	}

	.search-wrap:focus-within {
		border-color: rgba(37, 99, 235, 0.55);
		box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
	}

	.search-icon {
		position: absolute;
		left: 16px;
		top: 50%;
		transform: translateY(-50%);
		color: #64748b;
		width: 17px;
		height: 17px;
	}

	.search-icon svg {
		display: block;
		width: 100%;
		height: 100%;
	}

	input {
		width: 100%;
		height: 46px;
		border: none;
		outline: none;
		padding: 0 44px 0 44px;
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: 0.92rem;
		border-radius: 999px;
		background: transparent;
		color: #111827;
	}

	input::placeholder {
		color: #8a94a3;
	}

	.clear-btn {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		width: 26px;
		height: 26px;
		border: 1px solid #dbe5ef;
		border-radius: 999px;
		background: #ffffff;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: #64748b;
		cursor: pointer;
		transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
	}

	.clear-btn:hover {
		color: #0f172a;
		border-color: #94a3b8;
		background: #f8fafc;
	}

	.clear-btn svg {
		width: 12px;
		height: 12px;
	}

	.dropdown {
		position: relative;
	}

	.dropdown-trigger {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		min-width: 220px;
		height: 46px;
		padding: 0 14px;
		border-radius: 999px;
		border: 1px solid #dbe5ef;
		background: #ffffff;
		box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: 0.88rem;
		font-weight: 600;
		color: #18181b;
		cursor: pointer;
		transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease;
	}

	.dropdown-trigger:hover {
		transform: translateY(-1px);
		border-color: #94a3b8;
		box-shadow: 0 10px 20px rgba(15, 23, 42, 0.12);
	}

	.dropdown-trigger svg {
		width: 18px;
		height: 18px;
		transition: transform 0.24s ease;
	}

	.dropdown.open .dropdown-trigger svg {
		transform: rotate(180deg);
	}

	.options {
		position: absolute;
		right: 0;
		margin: 10px 0 0;
		padding: 8px;
		list-style: none;
		width: 280px;
		max-height: 320px;
		overflow-y: auto;
		border-radius: 14px;
		border: 1px solid #dbe5ef;
		background: #ffffff;
		backdrop-filter: blur(10px);
		box-shadow: 0 16px 32px rgba(15, 23, 42, 0.14);
		z-index: 12;
		animation: drop-in 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	li + li {
		margin-top: 4px;
	}

	li button {
		width: 100%;
		text-align: left;
		padding: 10px 12px;
		border: none;
		background: transparent;
		border-radius: 10px;
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: 0.93rem;
		font-weight: 500;
		color: #18181b;
		cursor: pointer;
		transition: background 0.2s ease, color 0.2s ease;
	}

	li button:hover,
	li button.selected {
		background: linear-gradient(130deg, #f4f4f5, #eceff3);
		color: #0f172a;
	}

	@keyframes drop-in {
		from {
			opacity: 0;
			transform: translateY(-8px) scale(0.98);
		}

		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	@media (max-width: 900px) {
		.toolbar-wrap {
			grid-template-columns: 1fr;
		}

		.dropdown-trigger,
		.options {
			width: 100%;
		}

		.dropdown-trigger {
			min-width: 0;
		}
	}
</style>
