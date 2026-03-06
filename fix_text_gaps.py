import os

base_dir = r"c:\Users\rangu\BITSVizag\src\routes\department\[slug]\components"

for filename in os.listdir(base_dir):
    if not filename.endswith(".svelte"):
        continue
    file_path = os.path.join(base_dir, filename)
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    original = content

    # Fix the text-justify gap issue by adding `text-left flex-1 leading-snug`
    # which overrides the inherited text-justify and tightens the look.
    content = content.replace(
        '<p class="font-semibold text-slate-800 text-[14.5px] md:text-[15px]">',
        '<p class="font-semibold text-slate-800 text-[14.5px] md:text-[15px] text-left flex-1 leading-snug tracking-normal">'
    )

    if content != original:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {file_path}")

print("Done")
