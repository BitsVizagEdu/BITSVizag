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
		gap: 14px;
		align-items: center;
		margin: 2rem auto 1rem;
	}

	.search-wrap {
		position: relative;
		border-radius: 14px;
		background: rgba(255, 255, 255, 0.82);
		border: 1px solid rgba(24, 24, 27, 0.12);
		backdrop-filter: blur(8px);
		box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
	}

	.search-icon {
		position: absolute;
		left: 14px;
		top: 50%;
		transform: translateY(-50%);
		color: #52525b;
		width: 18px;
		height: 18px;
	}

	.search-icon svg {
		display: block;
		width: 100%;
		height: 100%;
	}

	input {
		width: 100%;
		height: 48px;
		border: none;
		outline: none;
		padding: 0 16px 0 42px;
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: 0.98rem;
		border-radius: 14px;
		background: transparent;
		color: #111827;
	}

	input::placeholder {
		color: #71717a;
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
		height: 48px;
		padding: 0 14px;
		border-radius: 14px;
		border: 1px solid rgba(24, 24, 27, 0.16);
		background: rgba(255, 255, 255, 0.88);
		backdrop-filter: blur(8px);
		box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
		font-family: 'Roboto', 'SF Pro Text', 'Segoe UI', sans-serif;
		font-size: 0.94rem;
		font-weight: 600;
		color: #18181b;
		cursor: pointer;
		transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 0.25s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease;
	}

	.dropdown-trigger:hover {
		transform: translateY(-2px);
		border-color: rgba(24, 24, 27, 0.34);
		box-shadow: 0 14px 26px rgba(0, 0, 0, 0.14);
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
		border: 1px solid rgba(24, 24, 27, 0.16);
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		box-shadow: 0 18px 34px rgba(0, 0, 0, 0.16);
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
