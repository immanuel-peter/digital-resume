"use client";

import React, { useEffect, useState } from 'react';

export default function AutoMoEBlog() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tableOfContents = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'data-collection', label: 'Data Collection' },
    { id: 'training', label: 'Training' },
    { id: 'results', label: 'Results & Lessons' },
    { id: 'future', label: 'Future Directions' },
  ];

  return (
    <div className="font-sans bg-zinc-950 text-zinc-200 min-h-screen leading-relaxed">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 px-8 py-4 bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-mono font-semibold text-lg text-white tracking-tight">AutoMoE</span>
          <div className="flex gap-6">
            <a 
              href="https://github.com/immanuel-peter/self-driving-model" 
              className="font-mono text-xs text-zinc-500 hover:text-white transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a 
              href="https://huggingface.co/datasets/immanuelpeter/carla-autopilot-multimodal-dataset" 
              className="font-mono text-xs text-zinc-500 hover:text-white transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Dataset ↗
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-36 pb-20 px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="flex gap-2 mb-6 flex-wrap">
              <span className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 bg-blue-500/15 text-blue-400 rounded">
                Deep Learning
              </span>
              <span className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 bg-blue-500/15 text-blue-400 rounded">
                Autonomous Driving
              </span>
              <span className="font-mono text-xs uppercase tracking-wider px-3 py-1.5 bg-blue-500/15 text-blue-400 rounded">
                CARLA Simulator
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-none tracking-tight mb-6 bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
              Building AutoMoE
              <span className="block text-2xl lg:text-3xl font-normal text-zinc-600 mt-2">
                A Mixture-of-Experts Self-Driving Model
              </span>
            </h1>
            
            <p className="text-lg text-zinc-500 mb-8 leading-relaxed">
              Developing a modular autonomous driving policy that integrates multiple perception 
              tasks through specialized neural networks and learned gating mechanisms.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center font-semibold text-white">
                IP
              </div>
              <div>
                <div className="font-semibold text-white">Immanuel Peter</div>
                <div className="text-sm text-zinc-600">AI Engineer • University of Chicago</div>
              </div>
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm p-8 bg-white/[0.02] rounded-2xl border border-white/5 flex flex-col items-center gap-6">
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 flex flex-col items-center gap-2">
                  <span className="text-2xl">🚗</span>
                  <span className="font-mono text-xs text-blue-400 uppercase tracking-wide">Detection</span>
                </div>
                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 flex flex-col items-center gap-2">
                  <span className="text-2xl">🛣️</span>
                  <span className="font-mono text-xs text-blue-400 uppercase tracking-wide">Segmentation</span>
                </div>
                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 flex flex-col items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <span className="font-mono text-xs text-blue-400 uppercase tracking-wide">Drivable Area</span>
                </div>
                <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 flex flex-col items-center gap-2">
                  <span className="text-2xl">📡</span>
                  <span className="font-mono text-xs text-blue-400 uppercase tracking-wide">LiDAR 3D</span>
                </div>
              </div>
              
              <div className="px-8 py-4 bg-violet-500/15 rounded-xl border border-violet-500/30 flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span className="font-mono text-sm text-violet-400 font-medium">Gating Network</span>
              </div>
              
              <div className="px-8 py-4 bg-pink-500/15 rounded-xl border border-pink-500/30 flex items-center gap-3">
                <span className="text-2xl">🎮</span>
                <span className="font-mono text-sm text-pink-400 font-medium">Trajectory Policy</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-16 max-w-5xl mx-auto px-8 pb-20">
        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-24 h-fit">
          <div className="p-6 bg-white/[0.02] rounded-xl border border-white/5">
            <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-600 mb-4">Contents</h4>
            <ul className="flex flex-col gap-2">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`text-sm block px-3 py-1.5 rounded-md transition-all border-l-2 ${
                      activeSection === item.id 
                        ? 'text-white bg-blue-500/10 border-blue-500' 
                        : 'text-zinc-600 hover:text-zinc-300 border-transparent'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Article */}
        <main className="max-w-2xl">
          {/* Introduction */}
          <section id="introduction" className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-8">Introduction</h2>
            <p className="text-zinc-400 text-lg mb-6">
              Developing an autonomous driving policy that integrates multiple perception tasks is a 
              complex challenge. In this project, I built <strong className="text-white">AutoMoE</strong> — a modular self-driving 
              model based on a Mixture-of-Experts (MoE) architecture. The goal was to combine specialized 
              neural networks (experts) for different vision tasks using a learned gating mechanism, and 
              train the system to imitate a driving autopilot in the CARLA simulator.
            </p>

            <div className="flex gap-4 p-5 bg-white/[0.02] rounded-xl border border-white/5 mb-6">
              <span className="text-2xl flex-shrink-0">🛠️</span>
              <div className="text-zinc-300">
                This was a personal build, not a research-grade study. I optimized for shipping a working stack
                under student-level time/compute, so evaluation rigor is lighter than a formal paper. Also, as a result, there aren't demo images or videos to show.
              </div>
            </div>
            
            <div className="flex gap-4 p-5 bg-blue-500/[0.08] rounded-xl border border-blue-500/15 mb-6">
              <span className="text-2xl flex-shrink-0">💡</span>
              <div className="text-zinc-300">
                <strong>Key Insight:</strong> The architecture is designed to be interpretable (each expert's 
                influence is visible) and modular (experts can be improved or swapped independently).
              </div>
            </div>
            
          </section>

          {/* Architecture */}
          <section id="architecture" className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-8">Architecture</h2>
            <p className="text-xl text-zinc-500 italic mb-6 border-l-4 border-blue-500 pl-5">
              Multi-Task Experts with Gating and Trajectory Policy
            </p>
            <p className="text-zinc-400 text-lg mb-8">
              The AutoMoE model is composed of several distinct modules working in tandem. Here's an 
              overview of the key components:
            </p>

            {/* Component Cards */}
            <div className="space-y-5">
              <div className="p-7 bg-white/[0.02] rounded-2xl border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-sm text-blue-500 font-semibold">01</span>
                  <h3 className="text-xl font-semibold text-white">Perception Experts</h3>
                </div>
                <p className="text-zinc-500 mb-4 leading-relaxed">
                  A set of pre-trained neural networks, each devoted to a specific perception task. 
                  My implementation includes experts for object detection, semantic segmentation, 
                  drivable area segmentation, and a nuScenes-style 3D detection expert.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="font-mono text-xs px-2.5 py-1 bg-violet-500/15 text-violet-400 rounded">BDD100K Detection</span>
                  <span className="font-mono text-xs px-2.5 py-1 bg-violet-500/15 text-violet-400 rounded">Segmentation</span>
                  <span className="font-mono text-xs px-2.5 py-1 bg-violet-500/15 text-violet-400 rounded">Drivable Area</span>
                  <span className="font-mono text-xs px-2.5 py-1 bg-violet-500/15 text-violet-400 rounded">nuScenes 3D</span>
                </div>
              </div>

              <div className="p-7 bg-white/[0.02] rounded-2xl border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-sm text-blue-500 font-semibold">02</span>
                  <h3 className="text-xl font-semibold text-white">Context Encoder</h3>
                </div>
                <p className="text-zinc-500 leading-relaxed">
                  A small network that encodes the ego-vehicle's state into a 64-dimensional context 
                  vector. This includes the car's speed, steering angle, throttle, brake, and potentially 
                  other situational data (time of day, weather). The context encoder transforms these 
                  signals into a learned embedding that represents the driving context for the gating network.
                </p>
              </div>

              <div className="p-7 bg-white/[0.02] rounded-2xl border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-sm text-blue-500 font-semibold">03</span>
                  <h3 className="text-xl font-semibold text-white">Gating Network (MoE)</h3>
                </div>
                <p className="text-zinc-500 mb-4 leading-relaxed">
                  The brain that fuses expert outputs. It takes as input the set of features from 
                  all perception experts and the context vector, producing a weighting for each expert 
                  as well as a fused feature vector for decision-making.
                </p>
                <div className="bg-zinc-900 rounded-xl border border-white/5 overflow-hidden">
                  <div className="px-4 py-3 bg-white/[0.02] border-b border-white/5">
                    <span className="font-mono text-xs text-zinc-600">gating_network.py</span>
                  </div>
                  <pre className="font-mono text-sm text-zinc-400 p-5 overflow-x-auto leading-relaxed">{`# Gating mechanism pseudocode
expert_features = [expert(image) for expert in experts]
context = context_encoder(vehicle_state)

# Process through MLPs and apply softmax
gating_logits = gating_layer(concat(expert_features, context))
weights = softmax(gating_logits)

# Weighted fusion
fused_features = sum(w * f for w, f in zip(weights, expert_features))`}</pre>
                </div>
              </div>

              <div className="p-7 bg-white/[0.02] rounded-2xl border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-sm text-blue-500 font-semibold">04</span>
                  <h3 className="text-xl font-semibold text-white">Trajectory Policy Head</h3>
                </div>
                <p className="text-zinc-500 mb-5 leading-relaxed">
                  A lightweight CNN plus MLP head that converts fused features into a driving plan. 
                  It uses a small EasyBackbone CNN (4 convolutional layers with downsampling) that 
                  processes the front-facing camera image to produce a 512-dim visual feature vector. 
                  The model predicts H=10 waypoints into the future, plus a speed for each.
                </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/[0.02] rounded-lg">
                  <span className="font-mono text-2xl font-bold text-blue-500 block">10</span>
                  <span className="text-xs text-zinc-600 mt-1 block">Future Waypoints</span>
                </div>
                  <div className="text-center p-4 bg-white/[0.02] rounded-lg">
                    <span className="font-mono text-2xl font-bold text-blue-500 block">512-D</span>
                    <span className="text-xs text-zinc-600 mt-1 block">Visual Features</span>
                  </div>
                  <div className="text-center p-4 bg-white/[0.02] rounded-lg">
                    <span className="font-mono text-2xl font-bold text-blue-500 block">256-D</span>
                    <span className="text-xs text-zinc-600 mt-1 block">Fused Features</span>
                  </div>
                </div>
              </div>

              <div className="p-7 bg-blue-500/[0.08] rounded-2xl border border-blue-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🧩</span>
                  <h3 className="text-xl font-semibold text-white">Architecture Specs</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
                  <div className="p-4 bg-white/[0.02] rounded-lg border border-white/5">
                    <div className="font-mono text-xs text-zinc-500 mb-1">Perception</div>
                    <ul className="space-y-1 text-zinc-400">
                      <li>• ResNet-18 experts for detection, segmentation, drivable</li>
                      <li>• nuScenes expert: ResNet18 image + PointNet LiDAR (concat or sum)</li>
                      <li>• Expert features pooled to 256-D via lightweight MLPs</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white/[0.02] rounded-lg border border-white/5">
                    <div className="font-mono text-xs text-zinc-500 mb-1">Gating + Policy</div>
                    <ul className="space-y-1 text-zinc-400">
                      <li>• Context: 64-D encoder over speed/steer/throttle/brake</li>
                      <li>• Gating MLP: 128-D hidden, temperature softmax + optional Gumbel top-k</li>
                      <li>• Policy: 4-layer CNN (EasyBackbone) → 512-D → 10 waypoints + speed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Collection */}
          <section id="data-collection" className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-8">Data Collection & Dataset Generation</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Training a data-hungry model like AutoMoE required a substantial and rich dataset. 
              Since my focus was on imitation learning, I needed expert driving trajectories to mimic. 
              For this, I leveraged the CARLA simulator's built-in autopilot to generate demonstration data.
            </p>

            <div className="flex flex-col md:flex-row items-stretch gap-6 mb-8">
              <div className="flex-1 p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                <div className="font-mono text-xs uppercase tracking-wider text-zinc-600 mb-2">Version 1</div>
                <h4 className="text-lg font-semibold text-white mb-4">CARLA Autopilot Images</h4>
                <ul className="space-y-2 text-sm text-zinc-500 mb-4">
                  <li>• Multi-camera RGB images (4 cameras)</li>
                  <li>• Ego vehicle speed & control inputs</li>
                  <li>• Environment metadata</li>
                  <li>• ~68K frames, ~188 GB</li>
                </ul>
                <div className="text-sm text-amber-500 p-2 bg-amber-500/10 rounded-lg">
                  ⚠️ Missing LiDAR data for nuScenes expert
                </div>
              </div>
              
              <div className="hidden md:flex items-center text-2xl text-blue-500">→</div>
              
              <div className="flex-1 p-6 bg-blue-500/[0.08] rounded-2xl border border-blue-500/20">
                <div className="font-mono text-xs uppercase tracking-wider text-zinc-600 mb-2">Version 2</div>
                <h4 className="text-lg font-semibold text-white mb-4">CARLA Multimodal Dataset</h4>
                <ul className="space-y-2 text-sm text-zinc-500 mb-4">
                  <li>• Everything in V1, plus:</li>
                  <li>• Semantic segmentation labels</li>
                  <li>• 32-beam LiDAR point clouds</li>
                  <li>• 2D bounding box annotations</li>
                  <li>• ~82K frames (67K train, 8.4K val, 7.2K test)</li>
                </ul>
                <div className="text-sm text-emerald-500 p-2 bg-emerald-500/10 rounded-lg">
                  ✓ Complete multimodal coverage
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-violet-500/10 rounded-xl border border-violet-500/20">
              <span className="text-3xl">📊</span>
              <div className="text-zinc-200">
                <strong>2,500+ downloads</strong> in a month on Hugging Face!
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/[0.02] rounded-2xl border border-white/5 text-sm text-zinc-300">
              <div className="font-mono text-xs uppercase tracking-wider text-zinc-600 mb-2">Why this data mattered</div>
              <ul className="space-y-2 text-zinc-400">
                <li>• Perception experts pre-trained on BDD100K/nuScenes, then fine-tuned on this CARLA multimodal set before gating/policy training to shrink the domain gap.</li>
                <li>• Attempted to add Waymo Open Dataset (blocked by Linux setup) and NVIDIA Cosmos Drive Dreams (compute-limited), so stayed sim-only for this iteration.</li>
              </ul>
            </div>
          </section>

          {/* Training */}
          <section id="training" className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-8">Training via Imitation Learning</h2>
            <p className="text-zinc-400 text-lg mb-8">
              With the architecture assembled and data in hand, I trained AutoMoE using pure imitation 
              learning (behavior cloning). The training objective was straightforward: have the model 
              predict the same trajectory that the CARLA autopilot executed, given the current observations.
            </p>

            <div className="p-8 bg-white/[0.02] rounded-2xl border border-white/5 mb-8 text-center">
              <h4 className="text-sm text-zinc-600 font-medium mb-5">Loss Function</h4>
              <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
                <span className="font-mono text-lg text-blue-500 px-4 py-2 bg-blue-500/10 rounded-lg">L<sub>ADE</sub></span>
                <span className="text-zinc-600 text-lg">+</span>
                <span className="font-mono text-lg text-blue-500 px-4 py-2 bg-blue-500/10 rounded-lg">L<sub>FDE</sub></span>
                <span className="text-zinc-600 text-lg">+</span>
                <span className="font-mono text-lg text-blue-500 px-4 py-2 bg-blue-500/10 rounded-lg">L<sub>Speed</sub></span>
                <span className="text-zinc-600 text-lg">+</span>
                <span className="font-mono text-lg text-blue-500 px-4 py-2 bg-blue-500/10 rounded-lg">λ · L<sub>Smooth</sub></span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="text-sm text-zinc-500 p-3 bg-white/[0.02] rounded-lg">
                  <strong className="text-zinc-400">ADE:</strong> Average Displacement Error over all waypoints
                </div>
                <div className="text-sm text-zinc-500 p-3 bg-white/[0.02] rounded-lg">
                  <strong className="text-zinc-400">FDE:</strong> Final Displacement Error for endpoint accuracy
                </div>
                <div className="text-sm text-zinc-500 p-3 bg-white/[0.02] rounded-lg">
                  <strong className="text-zinc-400">Speed:</strong> L1 loss on the speed sequence
                </div>
                <div className="text-sm text-zinc-500 p-3 bg-white/[0.02] rounded-lg">
                  <strong className="text-zinc-400">Smooth:</strong> Penalizes large changes between waypoints
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-5 p-5 bg-white/[0.02] rounded-xl border border-white/5">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Freeze Experts</h4>
                  <p className="text-sm text-zinc-500">Keep pre-trained expert weights frozen to preserve learned perception capabilities.</p>
                </div>
              </div>
              <div className="flex gap-5 p-5 bg-white/[0.02] rounded-xl border border-white/5">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Train Gating + Policy</h4>
                  <p className="text-sm text-zinc-500">Train the gating network and trajectory policy head on the imitation objective.</p>
                </div>
              </div>
              <div className="flex gap-5 p-5 bg-white/[0.02] rounded-xl border border-white/5">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Optional: Unfreeze & Fine-tune</h4>
                  <p className="text-sm text-zinc-500">Briefly unfreeze select experts for joint training with smaller learning rate.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section id="results" className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-8">Results & Lessons Learned</h2>
            <p className="text-zinc-400 text-lg mb-6">
              Offline, the gating network improved modestly with noisy top-k routing, but closed-loop
              inference flopped: in CARLA the ego sometimes did not even leave the spawn point (likely
              a wiring bug or brittle policy). I didn’t push research-grade evals—this was a fast
              engineering build under tight time/compute.
            </p>

            <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📈</span>
                <h4 className="font-semibold text-white">Offline Metrics (val set)</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm text-zinc-400">
                  <thead className="text-xs uppercase text-zinc-500 border-b border-white/5">
                    <tr>
                      <th className="py-2">Run</th>
                      <th className="py-2">ADE<sub>L1</sub></th>
                      <th className="py-2">FDE<sub>L1</sub></th>
                      <th className="py-2">Entropy</th>
                      <th className="py-2">Expert Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-2 text-white">Baseline</td>
                      <td className="py-2">0.33</td>
                      <td className="py-2">0.57</td>
                      <td className="py-2">0.75</td>
                      <td className="py-2">[0.18, 0.12, 0.11, 0.59]</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-white">Noisy Top-k (k=2)</td>
                      <td className="py-2">0.30</td>
                      <td className="py-2">0.51</td>
                      <td className="py-2">0.54</td>
                      <td className="py-2">[0.35, 0.12, 0.39, 0.14]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-zinc-500 mt-3">
                Val split only; no closed-loop route metrics yet (car failed to move reliably). ADE/FDE are displacement
                errors on predicted waypoints; entropy shows routing sharpness; expert usage is the average gate weight
                per expert across validation (order here: detection, segmentation, drivable, nuScenes image/LiDAR).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-6 bg-white/[0.02] rounded-xl border border-white/5">
                <span className="text-3xl block mb-3">📉</span>
                <h4 className="font-semibold text-white mb-2">Covariate Shift</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Pure behavior cloning is brittle to compounding errors. When the model made a slight 
                  mistake, there was no mechanism to recover — it spiraled into worse decisions.
                </p>
              </div>
              <div className="p-6 bg-white/[0.02] rounded-xl border border-white/5">
                <span className="text-3xl block mb-3">⚖️</span>
                <h4 className="font-semibold text-white mb-2">Limited Expert Utilization</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Gating weights often didn't sharply differentiate between experts. The autopilot 
                  data may not have demonstrated enough varied behavior to force clear specialization
                  (entropy ~0.75 even after training).
                </p>
              </div>
              <div className="p-6 bg-white/[0.02] rounded-xl border border-white/5">
                <span className="text-3xl block mb-3">🌐</span>
                <h4 className="font-semibold text-white mb-2">Domain Gap</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Even with fine-tuning on CARLA data, differences between simulation and original 
                  datasets (BDD100K, nuScenes) remained and hurt performance.
                </p>
              </div>
              <div className="p-6 bg-white/[0.02] rounded-xl border border-white/5">
                <span className="text-3xl block mb-3">📊</span>
                <h4 className="font-semibold text-white mb-2">Validation Metrics</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Not setting up rigorous quantitative evaluation scenarios made it harder to 
                  pinpoint weaknesses and measure progress objectively.
                </p>
              </div>
            </div>

            <div className="p-8 bg-pink-500/[0.08] rounded-2xl border border-pink-500/15 border-l-4 border-l-pink-500">
              <p className="text-lg text-zinc-200 italic leading-relaxed">
                "After seeing the model struggle, I became an imitation learning hater and got
                <em className="text-pink-400"> RL-pilled</em>. This experience convinced me that reinforcement learning is 
                needed to achieve truly reliable autonomy."
              </p>
            </div>
          </section>

          {/* Future Directions */}
          <section id="future" className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-8">Future Directions</h2>
            <p className="text-zinc-400 text-lg mb-8">
              While AutoMoE in its current form has room for improvement, it provides a framework 
              that I can iteratively refine. Here are the technical directions I'm excited about pursuing:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⚡</span>
                  <h4 className="font-semibold text-white">FastViT Backbones</h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Replace CNN backbones with Apple's FastViT — a hybrid vision transformer that's 
                  8× smaller and 20× faster without sacrificing accuracy.
                </p>
              </div>
              <div className="p-6 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔄</span>
                  <h4 className="font-semibold text-white">Self-Supervised Learning</h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Incorporate masked image modeling, contrastive learning, or cross-modal 
                  self-supervision to make better use of unlabeled data.
                </p>
              </div>
              <div className="p-6 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎮</span>
                  <h4 className="font-semibold text-white">Reinforcement Learning</h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Use the trained model as an initial policy for RL fine-tuning in 
                  simulation, allowing it to learn recovery maneuvers and handle edge cases.
                </p>
              </div>
              <div className="p-6 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🌍</span>
                  <h4 className="font-semibold text-white">Real-World Data</h4>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Test on Waymo Open Dataset or use domain adaptation techniques to bridge 
                  the sim-to-real gap.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="p-10 bg-blue-500/[0.05] rounded-2xl border border-blue-500/10 mb-12">
            <p className="text-lg text-zinc-400 leading-relaxed text-center">
              AutoMoE taught me what it actually takes to build autonomy for the real world: relentless
              experimentation, plenty of mistakes, and pruning a messy search space into a cleaner vision.
              The stack on paper looked tidy—experts, gating, policy—but the process forced deep work across
              data, training, and integration. <strong className="text-white">Those lessons will travel with me into every future AI/ML build.</strong>
            </p>
          </section>

          {/* Resources */}
          <section className="mb-12">
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-600 mb-5">Resources</h3>
            <div className="space-y-3">
              <a 
                href="https://github.com/immanuel-peter/self-driving-model" 
                className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-white/[0.04] transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="text-2xl">📦</span>
                <div>
                  <div className="font-semibold text-white">GitHub Repository</div>
                  <div className="text-sm text-zinc-600">Full source code and implementation</div>
                </div>
              </a>
              <a 
                href="https://huggingface.co/datasets/immanuelpeter/carla-autopilot-multimodal-dataset" 
                className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-white/[0.04] transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="text-2xl">🤗</span>
                <div>
                  <div className="font-semibold text-white">Hugging Face Dataset</div>
                  <div className="text-sm text-zinc-600">CARLA Autopilot Multimodal Dataset</div>
                </div>
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
