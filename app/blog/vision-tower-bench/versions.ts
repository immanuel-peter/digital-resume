export const POSTPLAN_ASSETS = {
  fig1Protocol:
    "https://assets.postplan.link/01M1WPVYK88W93TH7WWNTVEBNP.png",
  fig2LabelBudget:
    "https://assets.postplan.link/01M1ZKW5D92ZQXYKDEP8HRN3HY.svg",
  fig3Peaks:
    "https://assets.postplan.link/01M1ZKW56506A2MAGZAC3JHH63.svg",
  fig4Forest:
    "https://assets.postplan.link/01M1ZKW4XEMK5TMMKG3ZFQK1CQ.svg",
  explorerSource:
    "https://assets.postplan.link/01M1ZKW5NQX9FGNR69CNXXE1HA.jpg",
  plateDinov2:
    "https://assets.postplan.link/01M1ZKW5VPD1MM76PATXV5Y92V.png",
  plateMuseGlimmer:
    "https://assets.postplan.link/01M1ZKW61HSD7YTE13H5RMH4W4.png",
  v2Fig2LabelBudget:
    "https://assets.postplan.link/01M36JSPGWWZRYHQJMF43NV510.svg",
  v2Fig3Peaks:
    "https://assets.postplan.link/01M36JSQ2RCX90B0TZA5Q5T76V.svg",
  plateMinimaxM3:
    "https://assets.postplan.link/01M36JSQHRTJ9QFE7E3S5K7ACB.png",
  plateGlm53Flash:
    "https://assets.postplan.link/01M36JSQYMW3QBWYVRDBYZPHKB.png",
} as const;

export interface VTBTableCell {
  value: string;
  star?: boolean;
}

export interface VTBTableRow {
  tower: string;
  cells: VTBTableCell[];
  muted?: boolean;
}

export interface VTBFigure {
  src: string;
  alt: string;
  label: string;
  title: string;
  caption?: string;
}

export type VTBMatrixTone = "pos" | "neg" | "unres";

export interface VTBMatrix {
  label: string;
  title: string;
  caption: string[];
  groups: { label: string; span: number }[];
  columns: string[];
  rows: { name: string; cells: { value: string; tone: VTBMatrixTone }[] }[];
  legend: Record<VTBMatrixTone, string>;
}

export interface VTBResult {
  id: string;
  kicker: string;
  title: string;
  body: string;
  figure?: VTBFigure;
  matrix?: VTBMatrix;
  separated?: boolean;
}

export interface VTBExplorerTower {
  key: string;
  buttonLabel: string;
  plateSrc: string;
  plateAlt: string;
  plateLabel: string;
  name: string;
  note: string;
  navi: string;
  sem: string;
  few?: string;
}

export interface VTBVersion {
  id: string;
  selectorLabel: string;
  kicker: string;
  title: string;
  lede: string;
  findingCards: { n: string; title: string; href: string }[];
  links: { label: string; href: string; emoji?: string }[];
  why: string;
  axes: { title: string; body: string }[];
  tableHeading: string;
  tableNote: string;
  tableFootnote: string[];
  rows: VTBTableRow[];
  method: string[];
  fig1: VTBFigure;
  resultsHeading: string;
  results: VTBResult[];
  choose?: { intro: string[]; rows: { priority: string; pick: string; note: string }[] };
  limitsHeading: string;
  limits: string[];
  limitsNote?: string;
  explorerLede: string;
  explorerTowers: VTBExplorerTower[];
  defaultTower: string;
  changelog: { date: string; html: string }[];
}

const v1: VTBVersion = {
  id: "v1",
  selectorLabel: "v1",
  kicker: "Vision Tower Bench",
  title: "Choosing a vision tower for a text-only LLM",
  lede: "We probed six frozen vision towers across stages. No tower wins everywhere, and spatial tasks peak before the last layer. Projectors preserve spatial info, with the size of the gain varying by dataset.",
  findingCards: [
    { n: "Finding 1", title: "No Tower wins every capability", href: "#result-1" },
    {
      n: "Finding 2",
      title: "Spatial information often peaks before the final layer",
      href: "#result-2",
    },
    {
      n: "Finding 3",
      title: "Projector effects depend on the dataset",
      href: "#result-3",
    },
  ],
  links: [
    { label: "Paper", href: "#" },
    { label: "Repo", href: "https://github.com/immanuel-peter/vision-tower-bench" },
    { label: "Towers", href: "https://huggingface.co/collections/immanuelpeter/vision-heads", emoji: "🤗" },
  ],
  why: "Adding vision to a base LLM means choosing a tower, layer, and projector. These are choices full-model benchmarks like MMMU never isolate. We probe frozen features across stages, before any multimodal training, and publish Capability Profiles.",
  axes: [
    {
      title: "Recognition",
      body: "Can a probe identify the object, with plenty of labels and with almost none?",
    },
    {
      title: "Geometry",
      body: "Can it recover depth and surface orientation from a single image?",
    },
    {
      title: "Cross-view",
      body: "Can it find the same physical point again in a second photograph?",
    },
    {
      title: "Occlusion",
      body: "How much recognition survives when half the image is hidden?",
    },
  ],
  tableHeading: "Capability Profiles",
  tableNote:
    "Each column measures a different capability, so the results are not combined into an overall score. Some apparent differences are too small to distinguish on the current test set.",
  tableFootnote: [
    "Muse Glimmer and SigLIP2 are unresolved at full-label recognition. Estimated difference: +0.004, paired 95% interval: [−0.004, +0.012].",
    "↑ higher is better, ↓ lower is better.",
  ],
  rows: [
    {
      tower: "DINOv2",
      cells: [
        { value: "0.369" },
        { value: "0.908" },
        { value: "0.702", star: true },
        { value: "18.85", star: true },
        { value: "0.539", star: true },
        { value: "52%" },
      ],
    },
    {
      tower: "SigLIP2",
      cells: [
        { value: "0.656", star: true },
        { value: "0.917" },
        { value: "0.670" },
        { value: "23.90" },
        { value: "0.401" },
        { value: "49%" },
      ],
    },
    {
      tower: "Muse Glimmer",
      cells: [
        { value: "0.433" },
        { value: "0.921" },
        { value: "0.659" },
        { value: "24.30" },
        { value: "0.214" },
        { value: "52%" },
      ],
    },
    {
      tower: "Kimi K2.6",
      cells: [
        { value: "0.345" },
        { value: "0.886" },
        { value: "0.660" },
        { value: "25.51" },
        { value: "0.365" },
        { value: "28%" },
      ],
    },
    {
      tower: "Qwen3.8",
      cells: [
        { value: "0.245" },
        { value: "0.879" },
        { value: "0.674" },
        { value: "24.24" },
        { value: "0.378" },
        { value: "30%" },
      ],
    },
    {
      tower: "Kimi K3",
      cells: [
        { value: "0.219" },
        { value: "0.837" },
        { value: "0.655" },
        { value: "27.03" },
        { value: "0.333" },
        { value: "20%" },
      ],
    },
  ],
  method: [
    "Towers stay frozen. We tap eight Relative Depth points, plus merged and projected when present. Features cache once; only the readout trains. Recognition is a 1.6M attention pool on ImageNet-100, geometry is Probe3D decoders on DIODE, and correspondence is training-free matching.",
    "Heads are capacity matched with frozen PCA so wider stages don't get bigger heads; the unmatched arm runs as a check. Learning rate is picked per cell on validation, three seeds, with paired bootstrap intervals on headlines.",
  ],
  fig1: {
    src: POSTPLAN_ASSETS.fig1Protocol,
    alt: "Diagram of the bench tapping eight frozen tower stages at relative depths 0.125 to 1.000, feeding cached features to trained readouts for semantics, depth and normals, and correspondence, with optional merged and projected stages",
    label: "Figure 1",
    title: "How the bench taps a model",
  },
  resultsHeading: "Results",
  results: [
    {
      id: "result-1",
      kicker: "Finding 1",
      title: "No Tower wins every capability",
      body: "DINOv2 sweeps depth, normals and cross-view but sits third at recognition; Muse Glimmer leads recognition and sits last on correspondence. On the attention readout, SigLIP2 leads by 0.22 at 1% labels.",
      figure: {
        src: POSTPLAN_ASSETS.fig2LabelBudget,
        alt: "Label efficiency reorders the semantic ranking",
        label: "Figure 2",
        title: "Full-label accuracy is a poor selection criterion",
      },
    },
    {
      id: "result-2",
      kicker: "Finding 2",
      title: "Spatial information often peaks before the final layer",
      body: "Geometry falls before the last layer in 23 of 24 arms while recognition rises to it in 19 of 24. Only Qwen3.8 declines into the last layer on recognition, and only in unmatched arms.",
      figure: {
        src: POSTPLAN_ASSETS.fig3Peaks,
        alt: "Geometry peaks before semantics",
        label: "Figure 3",
        title: "Geometry peaks early",
      },
      separated: true,
    },
    {
      id: "result-3",
      kicker: "Finding 3",
      title: "Projector effects depend on the dataset",
      body: "On DIODE, all 16 projected-against-tower depth and normal comparisons favor the Projector, so it preserves spatial information. However, on KITTI driving scenes none resolve in its favor and two reverse. Qwen3.8 also reverses on ScanNet while gaining on NAVI.",
      figure: {
        src: POSTPLAN_ASSETS.fig4Forest,
        alt: "Projector advantage over the final Tower layer",
        label: "Figure 4",
        title: "The Projector helps on DIODE",
      },
      separated: true,
    },
  ],
  limitsHeading: "What v1 does not establish",
  limits: [
    "These are frozen-representation results, not evaluations of a working VLM.",
    "The full-token attention control was inconclusive, so cross-model attention rankings rest on pooled features.",
    "Geometry and robustness use small test sets, and cross-model geometry still mixes representation quality with native token geometry.",
  ],
  limitsNote:
    "The paper sets out every limitation in full, along with the controls that failed.",
  explorerLede: "Qualitative PCA of frozen patch tokens. Read structure, not color.",
  explorerTowers: [
    {
      key: "dinov2",
      buttonLabel: "DINOv2 — first on correspondence",
      plateSrc: POSTPLAN_ASSETS.plateDinov2,
      plateAlt: "DINOv2 tower PCA plate",
      plateLabel: "DINOv2 · tower · 32 x 32",
      name: "DINOv2 segments its subject",
      note: "The eagle separates as one solid region. First on all three correspondence sets, third on recognition.",
      navi: "0.539 · rank 1 of 6",
      sem: "0.9079 · rank 3 of 6",
    },
    {
      key: "muse_glimmer",
      buttonLabel: "Muse Glimmer — first on recognition",
      plateSrc: POSTPLAN_ASSETS.plateMuseGlimmer,
      plateAlt: "Muse Glimmer tower PCA plate",
      plateLabel: "Muse Glimmer · tower · 32 x 32",
      name: "Muse Glimmer carries no visible structure",
      note: "Near-uniform speckle, no recoverable subject. Last on all three correspondence sets.",
      navi: "0.214 · rank 6 of 6",
      sem: "0.9203 · rank 1 of 6",
    },
  ],
  defaultTower: "dinov2",
  changelog: [
    {
      date: "Sept 2026",
      html: "Vision Tower Bench v1 released, covering six Towers on geometry, semantic and correspondence.",
    },
    {
      date: "Sept 2026",
      html:
        'Vision Towers for Kimi K2.6, Kimi K3, Muse Glimmer and Qwen3.8 published on <a href="https://huggingface.co/collections/immanuelpeter/vision-heads" target="_blank" rel="noopener noreferrer">Hugging Face</a>.',
    },
  ],
};

const row = (tower: string, values: string[], stars: number[] = [], muted = false): VTBTableRow => ({
  tower,
  cells: values.map((value, i) => ({ value, star: stars.includes(i) })),
  ...(muted ? { muted } : {}),
});

const tones = { p: "pos", n: "neg", u: "unres" } as const;
const matrixRow = (name: string, cells: string) => ({
  name,
  cells: cells.split(" ").map((c) => ({
    value: c.slice(1),
    tone: tones[c[0] as keyof typeof tones],
  })),
});

const v2: VTBVersion = {
  id: "v2",
  selectorLabel: "v2",
  kicker: "Vision Tower Bench",
  title: "Choosing a vision tower for a text-only LLM",
  lede: "We probed eleven frozen vision towers across layers. No tower wins everywhere, spatial information often peaks before the final layer, and projectors can help or hurt.",
  findingCards: [
    { n: "Finding 1", title: "No tower wins every capability", href: "#result-1" },
    { n: "Finding 2", title: "Geometry peaks before the final layer", href: "#result-2" },
    { n: "Finding 3", title: "Projectors can help or hurt", href: "#result-3" },
  ],
  links: v1.links,
  why: "Adding vision to a base LLM means choosing a tower, layer, and projector. Full-model benchmarks do not isolate those choices, so we probe frozen features before multimodal training.",
  axes: [
    v1.axes[0],
    v1.axes[1],
    {
      title: "Cross-view",
      body: "Can it match points across views or object instances?",
    },
    v1.axes[3],
  ],
  tableHeading: "Capability Profiles",
  tableNote:
    "Each column measures a separate capability. Close values may be unresolved.",
  tableFootnote: [
    "Muse Glimmer, GLM 5.3 Flash, and SigLIP2 are unresolved at full labels.",
    "Depth and normals use the best matched tower layer. NAVI uses the final tower layer.",
    "↑ higher is better, ↓ lower is better.",
  ],
  rows: [
    row("DINOv2", ["0.369", "0.908", "0.702", "18.85", "0.539", "52%"], [2, 3, 4, 5]),
    row("SigLIP2", ["0.656", "0.917", "0.670", "23.90", "0.401", "49%"]),
    row("Muse Glimmer", ["0.433", "0.921", "0.659", "24.30", "0.214", "52%"], [1, 5]),
    row("GLM 5.3 Flash", ["0.675", "0.919", "0.643", "24.35", "0.382", "45%"], [0]),
    row("Nemotron Omni", ["0.523", "0.903", "0.641", "24.39", "0.419", "46%"]),
    row("Kimi K2.6", ["0.345", "0.886", "0.659", "25.51", "0.365", "28%"]),
    row("Qwen3.8", ["0.245", "0.879", "0.674", "24.24", "0.378", "30%"]),
    row("DeepSeek V4.1", ["0.245", "0.874", "0.654", "25.27", "0.392", "35%"]),
    row("Gemma 4", ["0.316", "0.874", "0.555", "27.25", "0.304", "30%"]),
    row("Kimi K3", ["0.219", "0.837", "0.655", "27.03", "0.333", "20%"]),
    row("MiniMax M3", ["0.048", "0.342", "0.542", "31.48", "0.235", "18%"], [], true),
  ],
  method: [
    "Towers stay frozen. We tap eight depths plus merged and projected stages. Features cache once; only the readouts train. Recognition uses ImageNet-100, geometry uses DIODE and KITTI, and correspondence uses NAVI, ScanNet and SPair.",
    "Heads are reduced to 512 dimensions with train-split PCA. Each cell selects a learning rate on validation and runs three seeds.",
  ],
  fig1: v1.fig1,
  resultsHeading: "Results",
  results: [
    {
      id: "result-1",
      kicker: "Finding 1",
      title: "No tower wins every capability",
      body: "DINOv2 leads the spatial columns. GLM 5.3 Flash leads with 1% labels. Muse Glimmer is nominally first with full labels, but the top three are unresolved.",
      figure: {
        src: POSTPLAN_ASSETS.v2Fig2LabelBudget,
        alt: "Recognition top-1 against labelled fraction for eleven towers; the curves cross between 1% and 100% and MiniMax M3 sits far below the rest",
        label: "Figure 2",
        title: "Recognition rankings change with label budget",
      },
    },
    {
      id: "result-2",
      kicker: "Finding 2",
      title: "Geometry peaks before the final layer",
      body: "Geometry peaks early in 43 of 44 arms. Recognition reaches the final layer in 17 of 22 attention arms; MiniMax M3 is the clearest exception.",
      figure: {
        src: POSTPLAN_ASSETS.v2Fig3Peaks,
        alt: "Two panels: recognition top-1 rising with relative depth for eleven towers, and DIODE depth d1 peaking mid-network with stars marking each tower's peak",
        label: "Figure 3",
        title: "Geometry peaks early",
        caption: "Stars mark each tower's depth peak in the matched arm.",
      },
      separated: true,
    },
    {
      id: "result-3",
      kicker: "Finding 3",
      title: "Projectors can help or hurt",
      body: "On DIODE, 25 of 36 comparisons favor the Projector, seven favor the Tower, and four are unresolved. Results also reverse across KITTI and correspondence.",
      matrix: {
        label: "Figure 4",
        title: "Projector advantage over the final tower layer",
        caption: [
          "Positive favors the Projector.",
          "Normals report error removed.",
          "<i>M</i> = capacity-matched to 512 dimensions.",
          "<i>R</i> = raw token width.",
        ],
        groups: [{ label: "DIODE", span: 4 }],
        columns: ["Depth (M)", "Depth (R)", "Normals (M)", "Normals (R)", "KITTI", "NAVI", "ScanNet", "SPair"],
        rows: [
          matrixRow("Muse Glimmer", "p+.026 p+.093 p+0.79° p+2.89° n−.004 p+.106 p+.032 p+.133"),
          matrixRow("Kimi K2.6", "p+.017 u+.020 p+2.20° p+3.11° n−.005 p+.057 p+.008 p+.115"),
          matrixRow("Kimi K3", "p+.078 p+.027 p+2.50° p+2.83° u+.001 p+.059 p+.021 n−.014"),
          matrixRow("Qwen3.8", "p+.058 p+.160 p+4.31° p+4.44° u−.002 p+.019 n−.019 p+.022"),
          matrixRow("Gemma 4", "p+.101 p+.056 p+2.72° p+2.31° p+.026 p+.042 n−.002 p+.012"),
          matrixRow("GLM 5.3 Flash", "p+.038 n−.072 p+0.97° u+0.10° u−.002 p+.037 n−.003 p+.015"),
          matrixRow("DeepSeek V4.1", "p+.080 n−.026 p+3.33° u−0.09° n−.009 p+.012 n−.033 n−.023"),
          matrixRow("Nemotron Omni", "u−.009 n−.050 p+0.37° n−0.47° n−.011 u+.002 n−.021 n−.011"),
          matrixRow("MiniMax M3", "n−.094 n−.116 n−3.15° p+0.50° n−.098 n−.009 n−.025 n−.013"),
        ],
        legend: {
          pos: "Projector better, interval excludes zero",
          neg: "Tower better, interval excludes zero",
          unres: "Unresolved",
        },
      },
      separated: true,
    },
  ],
  choose: {
    intro: [
      "Pick the tower first, then the layer, then the projector. If there is no dominant requirement, start with <b>SigLIP2</b>. It is strong on many tasks, with no weak axis. Regardless, a base LLM will need a projector.",
      "Geometry peaks before the final layer in 43 of 44 arms, so tap an intermediate layer for spatial work and use Figure 3 to place it. The final layer is reasonable for recognition, except on MiniMax M3 and Qwen3.8.",
    ],
    rows: [
      { priority: "Geometry or point correspondence", pick: "DINOv2", note: "Tapped at 0.75 to 0.875 relative depth." },
      { priority: "Recognition with few labels", pick: "GLM 5.3 Flash, SigLIP2", note: "No cross-model bootstrap, so test both." },
      { priority: "Recognition with abundant labels", pick: "Muse Glimmer, GLM 5.3 Flash, SigLIP2", note: "Unresolved, so choose accordingly." },
      { priority: "Reusing a native projector", pick: "Muse Glimmer, Gemma 4", note: "Shortlist, then test on the target domain." },
      { priority: "Fully fine-tuning the tower", pick: "", note: "Use the results to pick candidates." },
    ],
  },
  limitsHeading: "What v2 does not establish",
  limits: [
    "These are frozen-representation results, not evaluations of a working VLM.",
    "MiniMax M3 rises to 0.40 with full-grid tokens but remains last.",
    "Near-ties, attention pooling, and the small geometry test sets remain unresolved.",
  ],
  explorerLede:
    "Qualitative PCA of frozen patch tokens. Visible structure is not a benchmark score.",
  explorerTowers: [
    {
      key: "dinov2",
      buttonLabel: "DINOv2 — spatial leader",
      plateSrc: POSTPLAN_ASSETS.plateDinov2,
      plateAlt: "DINOv2 tower PCA plate",
      plateLabel: "DINOv2 · tower · 32 x 32",
      name: "DINOv2 segments its subject",
      note: "The eagle separates as one solid region. First on all three correspondence sets, fourth on full-label recognition.",
      navi: "0.539 · rank 1 of 11",
      sem: "0.908 · rank 4 of 11",
      few: "0.369 · rank 5 of 11",
    },
    {
      key: "minimax_m3",
      buttonLabel: "MiniMax M3 — clear silhouette",
      plateSrc: POSTPLAN_ASSETS.plateMinimaxM3,
      plateAlt: "MiniMax M3 tower PCA plate",
      plateLabel: "MiniMax M3 · tower · 32 x 32",
      name: "MiniMax M3 shows a clear silhouette",
      note: "Its low-rank features show a sharp silhouette but weak class information.",
      navi: "0.235 · rank 10 of 11",
      sem: "0.342 · rank 11 of 11",
      few: "0.048 · rank 11 of 11",
    },
    {
      key: "glm_5_3_flash",
      buttonLabel: "GLM 5.3 Flash — 1% leader",
      plateSrc: POSTPLAN_ASSETS.plateGlm53Flash,
      plateAlt: "GLM 5.3 Flash tower PCA plate",
      plateLabel: "GLM 5.3 Flash · tower · 32 x 32",
      name: "GLM 5.3 Flash appears mottled",
      note: "It still leads at 1% labels and on ScanNet.",
      navi: "0.382 · rank 5 of 11",
      sem: "0.919 · rank 2 of 11",
      few: "0.675 · rank 1 of 11",
    },
    {
      key: "muse_glimmer",
      buttonLabel: "Muse Glimmer — full-label leader",
      plateSrc: POSTPLAN_ASSETS.plateMuseGlimmer,
      plateAlt: "Muse Glimmer tower PCA plate",
      plateLabel: "Muse Glimmer · tower · 32 x 32",
      name: "Muse Glimmer carries no visible structure",
      note: "Near-uniform speckle. It leads full-label recognition and trails correspondence.",
      navi: "0.214 · rank 11 of 11",
      sem: "0.921 · rank 1 of 11",
      few: "0.433 · rank 4 of 11",
    },
  ],
  defaultTower: "dinov2",
  changelog: [
    {
      date: "Sept 2026",
      html:
        'Vision Towers for Gemma 4, MiniMax M3 and GLM 5.3 Flash published on <a href="https://huggingface.co/collections/immanuelpeter/vision-heads" target="_blank" rel="noopener noreferrer">Hugging Face</a>.',
    },
    {
      date: "Sept 2026",
      html:
        'Vision Towers for Deepseek V4.1 Flash and Nemotron 3 Nano Omni published on <a href="https://huggingface.co/collections/immanuelpeter/vision-heads" target="_blank" rel="noopener noreferrer">Hugging Face</a>.',
    },
    {
      date: "Sept 2026",
      html: "Vision Tower Bench v2 adds five Towers and expands the correspondence and robustness results.",
    },
    ...v1.changelog,
  ],
};

// To publish a new version, append a new VTBVersion here with its own
// figure URLs. The selector, ?v= routing, and explorer all key off this list.
export const VTB_VERSIONS: VTBVersion[] = [v1, v2];

export const VTB_DEFAULT_VERSION = "v2";

export function getVTBVersion(id: string | undefined | null): VTBVersion {
  return (
    VTB_VERSIONS.find((v) => v.id === id) ??
    VTB_VERSIONS.find((v) => v.id === VTB_DEFAULT_VERSION)!
  );
}
