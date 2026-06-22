import numpy as np
import matplotlib.pyplot as plt

# 1. Generate fake "Time" data (half a second)
time = np.linspace(0, 0.5, 500)

# 2. Create a fake "Drone Signal"
drone_signal = np.sin(2 * np.pi * 50 * time) 

# 3. Add random "Background Noise"
noise = np.random.normal(0, 0.5, 500)
messy_signal = drone_signal + noise

# 4. Draw and SILENTLY SAVE the messy signal (No plt.show!)
plt.plot(time, messy_signal, color='red')
plt.title("Mock Drone RF Signal (Raw & Noisy)")
plt.xlabel("Time (seconds)")
plt.ylabel("Signal Strength")
plt.savefig("my_first_graph.png")

# 5. Translate the signal into a Spectrogram
plt.clf() 
plt.specgram(messy_signal, Fs=1000, cmap='inferno')
plt.title("Spectrogram of Mock Drone Signal")
plt.xlabel("Time")
plt.ylabel("Frequency")

# 6. SILENTLY SAVE the heat map
plt.savefig("my_first_spectrogram.png")