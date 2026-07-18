# Intelligent Counter-UAS Prototype (UASPOC)

> **Simulation Notice:** This repository contains a software-based Proof of Concept (PoC) simulator developed for internal airspace defense research. All capabilities — including multi-modal sensor ingestion, RF signal intelligence, AI classification, trajectory tracking, threat assessment, and cyber takeover execution — are purely mathematical simulations. This software does not perform real-world RF interception, physical transmission, or live UAV engagement.

## Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)

## Overview

This platform provides an integrated, real-time software simulation pipeline for validating multi-modal UAV threat detection, AI-driven classification, continuous spatial tracking, and non-kinetic countermeasure execution. It is designed as a modular, production-grade proof of concept to accelerate research and development of next-generation counter-UAS systems.

## Problem Statement

The proliferation of commercially available UAVs has significantly outpaced the development of effective detection and neutralization technologies. While drones offer substantial utility, their growing accessibility introduces serious security risks in contested airspaces and critical infrastructure zones. This PoC aims to simulate the "Decision Support" layer that bridges physical SDR hardware and multi-sensor fusion suites.


## Repository Structure

Our team operates on a strict parallel-development matrix. Each developer is exclusively assigned to their designated subdirectory under `src/`. **Do not modify files outside your assigned module.**

```
counter-uas-prototype/
│
├── .gitignore              
├── requirements.txt        # Core dependencies: fastapi, uvicorn, numpy, scipy,
│                            #   psycopg2, opencv-python, torch, matplotlib
├── README.md
│
├──frontend            # Owner: Sumedh Bhat # Stores the frontend of the prototype
└── src/
    ├── __init__.py
    ├── main.py
    ├── rf_intelligence/            # Owner: Abhishek Bhadani
    │   ├── routes.py               # Unified API Endpoints
    │   ├── generator.py            # Signal Synthesis 
    │   ├── database.py             # PostgreSQL Telemetry Queries
    │   └── visualizer.py           # Spectrum Visualizer
    ├── signal_processing/          # Owner: Bhavya Agrawal
    │ ├── spectrogram_generator.py  # Spectrogram Generation
    │ └── signal_filter.py          # Signal Processing Filter
    ├── ai_detection/               # Owner: Sugapriyan S
    │ ├── best.pt                   # Stores Model Paramters
    │ └── detect.py                 # Detection Algorithm
    └── airspace_tracking/          # Owner: Prathamesh Kapase
      └── tracking + detect.py      # Tracking Module
    
```

## Getting Started

### Prerequisites

- Python 3.x
- PostgreSQL

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Aethyros/UAS_POC.git
cd UASPOC

# 2. Create and activate a virtual environment
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt
```

### Running the Server

Start the core FastAPI backend so downstream modules can consume the data:

```bash
cd src
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

## API Reference

The RF Module exposes standardized API contracts for cross-team integration.

### `GET /api/rf/simulate`

Generates a synchronized physical signal payload. Supports standard and FHSS generation.

**Query Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `profile` | string | The drone slug (e.g., `dji_phantom_4`, `autel_evo_max`) |
| `is_fhss` | boolean | Set to `true` to enable dynamic frequency hopping |
| `base_freq` | float | Center frequency in GHz (used if `is_fhss=true`) |
| `hops` | int | Number of sequential hops to synthesize (used if `is_fhss=true`) |

**Response Contract:**

```json
{
  "status": "success",
  "threat_class": "Military / Evasive",
  "center_frequency_ghz": 5.850,
  "samples": 2048,
  "carrier_wave_raw": [ ... decimated time-domain array ... ],
  "frequency_domain": {
    "x_axis_frequencies": [ ... decimated frequency bins ... ],
    "y_axis_magnitudes": [ ... decimated FFT magnitudes ... ]
  },
  "metrics": {
    "peak_magnitude": 124.5,
    "signal_to_noise_ratio": 24.3
  }
}
```

### `GET /api/rf/detect`

Multi-variate threat identification using Sensor Fusion (Frequency drift + Telemetry).