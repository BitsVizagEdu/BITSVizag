#!/usr/bin/env python3
"""
3D Roller Coaster Launcher
Launches the best ultimate version
"""

import sys
import subprocess
import os

# Fix Windows console encoding
if sys.platform == 'win32':
    import codecs
    sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'ignore')
    sys.stderr = codecs.getwriter('utf-8')(sys.stderr.buffer, 'ignore')

def main():
    print("\n" + "="*70)
    print("           3D ROLLER COASTER - LAUNCHER")
    print("="*70)
    print("\nStarting the BEST 3D Roller Coaster experience...")
    print("\nCONTROLS:")
    print("  W or UP      - ACCELERATE")
    print("  S or DOWN    - BRAKE")
    print("  SHIFT        - BOOST")
    print("  C            - Change Camera")
    print("  SPACE        - Pause")
    print("  R            - Reset")
    print("  ESC          - Exit")
    print("\n" + "="*70 + "\n")
    
    try:
        # Get the directory where launcher.py is located
        launcher_dir = os.path.dirname(os.path.abspath(__file__))
        coaster_script = os.path.join(launcher_dir, "final_perfect_coaster.py")
        subprocess.run([sys.executable, coaster_script], check=False, cwd=launcher_dir)
    except KeyboardInterrupt:
        print("\nExiting...")
    except Exception as e:
        print(f"\nError: {e}")

if __name__ == "__main__":
    main()
